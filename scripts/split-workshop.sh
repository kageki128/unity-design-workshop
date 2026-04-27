#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

split_markdown() {
  local src="$1"
  local outdir="$2"

  mkdir -p "$outdir"
  find "$outdir" -maxdepth 1 -type f -name '*.md' -delete

  awk -v outdir="$outdir" '
    BEGIN { section=0; title="" }
    /^# / && title=="" {
      title=substr($0,3)
      next
    }
    /^## / {
      if (section > 0) close(outfile)
      section++
      heading=substr($0,4)
      outfile=sprintf("%s/%02d.md", outdir, section)
      print "# " heading > outfile
      print "" >> outfile
      sections[section]=heading
      next
    }
    {
      if (section > 0) {
        line=$0
        gsub(/\]\(\.\/assets\//,"](/assets/", line)
        print line >> outfile
      }
    }
    END {
      idx=outdir "/index.md"
      print "# " title > idx
      print "" >> idx
      print "このページは講習資料を章ごとに分割した目次です。" >> idx
      print "" >> idx
      print "## セクション一覧" >> idx
      print "" >> idx
      for (i=1; i<=section; i++) {
        printf("- [%s](./%02d)\n", sections[i], i) >> idx
      }
    }
  ' "$src"
}

gen_sidebar_items_from_files() {
  local chap="$1"
  local file slug title

  for file in "text/chapter-$chap"/[0-9][0-9].md; do
    slug="$(basename "$file" .md)"
    title="$(sed -n '1s/^# //p' "$file" | sed 's/"/\\"/g')"
    printf '      { text: "%s", link: "/text/chapter-%s/%s" },\n' "$title" "$chap" "$slug"
  done
}

split_markdown "1st.md" "text/chapter-1"
split_markdown "2nd.md" "text/chapter-2"
split_markdown "3rd.md" "text/chapter-3"

items1="$(gen_sidebar_items_from_files 1)"
items2="$(gen_sidebar_items_from_files 2)"
items3="$(gen_sidebar_items_from_files 3)"

cat > .vitepress/sidebar.generated.ts <<CONFIG
export const generatedSidebar = [
  {
    text: '案内',
    items: [
      { text: 'この講習会について', link: '/about' }
    ]
  },
  {
    text: '第1回 良いコード',
    link: '/text/chapter-1/',
    collapsed: true,
    items: [
${items1}
    ]
  },
  {
    text: '第2回 クラス設計',
    link: '/text/chapter-2/',
    collapsed: true,
    items: [
${items2}
    ]
  },
  {
    text: '第3回 アーキテクチャ',
    link: '/text/chapter-3/',
    collapsed: true,
    items: [
${items3}
    ]
  }
] as const
CONFIG

echo "Split pages and sidebar were regenerated."
