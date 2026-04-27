export const generatedSidebar = [
  {
    text: '概要',
    items: [
      { text: 'この講習会について', link: '/about' }
    ]
  },
  {
    text: '第1回 良いコード',
    link: '/text/chapter-1/',
    collapsed: true,
    items: [
      { text: "はじめに", link: "/text/chapter-1/01" },
      { text: "対象者", link: "/text/chapter-1/02" },
      { text: "今回の内容", link: "/text/chapter-1/03" },
      { text: "1. 良いコードとは", link: "/text/chapter-1/04" },
      { text: "2. 命名規則を守る", link: "/text/chapter-1/05" },
      { text: "3. コメントを正しく活用する", link: "/text/chapter-1/06" },
      { text: "4. アクセスレベルを意識する", link: "/text/chapter-1/07" },
      { text: "5. 一つのメソッドに詰め込まない", link: "/text/chapter-1/08" },
      { text: "6. ネストを回避する", link: "/text/chapter-1/09" },
      { text: "7. 同じことを何度も書かない", link: "/text/chapter-1/10" },
      { text: "8. 間違った共通化をしない", link: "/text/chapter-1/11" },
      { text: "9. switch文を回避する", link: "/text/chapter-1/12" },
      { text: "10. フラグ引数を使わない", link: "/text/chapter-1/13" },
      { text: "11. 車輪の再発明をしない", link: "/text/chapter-1/14" },
      { text: "12. 読み取り専用のコレクションを渡す", link: "/text/chapter-1/15" },
      { text: "13. デッドコードを消す", link: "/text/chapter-1/16" },
      { text: "14. 今いらないものは実装しない", link: "/text/chapter-1/17" },
      { text: "15. マジックナンバーを消す", link: "/text/chapter-1/18" },
      { text: "16. 再代入をしない", link: "/text/chapter-1/19" },
      { text: "17. nullを回避する", link: "/text/chapter-1/20" },
      { text: "参考文献", link: "/text/chapter-1/21" },
    ]
  },
  {
    text: '第2回 クラス設計',
    link: '/text/chapter-2/',
    collapsed: true,
    items: [
      { text: "今回の内容", link: "/text/chapter-2/01" },
      { text: "1. 設計とは何か", link: "/text/chapter-2/02" },
      { text: "2. 依存・結合とは", link: "/text/chapter-2/03" },
      { text: "3. SOLID原則とは", link: "/text/chapter-2/04" },
      { text: "4. 神を殺す", link: "/text/chapter-2/05" },
      { text: "5. 依存の方向を制御する", link: "/text/chapter-2/06" },
      { text: "6. 依存性を注入する", link: "/text/chapter-2/07" },
      { text: "7. カプセル化する", link: "/text/chapter-2/08" },
      { text: "8. インターフェースを活用する", link: "/text/chapter-2/09" },
      { text: "9. 継承より委譲を用いる", link: "/text/chapter-2/10" },
      { text: "10. MV(R)PパターンでModelとViewを分離する", link: "/text/chapter-2/11" },
      { text: "参考文献", link: "/text/chapter-2/12" },
    ]
  },
  {
    text: '第3回 アーキテクチャ',
    link: '/text/chapter-3/',
    collapsed: true,
    items: [
      { text: "今回の内容", link: "/text/chapter-3/01" },
      { text: "1. アーキテクチャとは", link: "/text/chapter-3/02" },
      { text: "2. Unityにおける設計レベル", link: "/text/chapter-3/03" },
      { text: "3. Clean Architecture", link: "/text/chapter-3/04" },
      { text: "4. フレームワークと結婚するな！", link: "/text/chapter-3/05" },
      { text: "5. Pure C#を活用する", link: "/text/chapter-3/06" },
      { text: "6. VContainerを使う", link: "/text/chapter-3/07" },
      { text: "7. 例) オニオンアーキテクチャ", link: "/text/chapter-3/08" },
      { text: "8. namespaceを活用する", link: "/text/chapter-3/09" },
      { text: "9. Assembly Definitionを活用する", link: "/text/chapter-3/10" },
      { text: "参考文献", link: "/text/chapter-3/11" },
    ]
  }
] as const
