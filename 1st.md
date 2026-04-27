# Unity設計講習会 第1回 「良いコード」

## はじめに

あなたはUnityでゲームを作る上でこんな経験をしたことはありませんか？

- 「簡単な機能を追加したいだけなのにあちこちを修正して回る羽目になった」
- 「コードを読んでいるだけで日が暮れた。こんなクソコード書いたのは誰……俺！？俺！！俺俺俺俺！！」
- 「一生消えない `NullReferenceException: Object reference not set to an instance of an object`」
- 「逆になんでこれで正しく動いてるのか分からない。こわい」
- 「コードが絡まりすぎて二度とプロジェクトを開きたくない」

Unityを触ってきた皆さんなら必ずこのような [「不吉な臭い」](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E8%87%AD%E3%81%84) を感じたことがあるはずです。しかし臭いの原因が分からない、消し方が分からない。そうこうしているうちに幸運にもゲームは完成し、あの忌々しい臭いのことはすっかり忘れてしまいます。しかし心機一転、新しいプロジェクトでゲームを作り始めたその日、人類は思い出した。ヤツらに支配されていた恐怖を…

このような問題を解決するために行うのが設計です。臭いの原因と対処法を知り、プロジェクトをあるべき姿へと導くことができれば、開発にかかる苦労はぐっと減らせるはずです。

「設計を考えないで自由にやった方が効率良くない？」という人がいます。確かに設計をしなくてもゲームは作れます。ゲームの面白さにも全く寄与しません。それどころか、設計をすることによって考えるべきことや手間が増えてしまうかもしれません。しかしそれでも**設計は絶対にするべき**です。時間が経てば経つほど設計は必ず効果を発揮し、不吉な臭いからあなたを守ってくれるでしょう。そしてそれによって浮いた時間でゲームを更にブラッシュアップすることができるでしょう。つまり設計とは未来への投資なのです。

逆に言えば、設計をしないのは借金をして一時的に楽をしているようなものです。時間が経てば経つほど利子は膨らみ、あなたはすぐに多重債務に陥るでしょう。その状態でゲームを完成させることができるかどうかはあなた次第ですが、その苦労はきっと避けて通ることができたはずです。

「今はCopilotがあるんだし、設計しなくてもAIくんがよしなにやってくれるんじゃない？」と言う人もいます。しかし、それも大きな間違いです。現状のコーディングAIは何も考えずに指示すれば「ちょっと優秀なタイミー」程度の仕事しかしません。あいつらは普通に破滅的なコードを書いてきます。それを知らず、よく分からないからAIに頼むことを続けていると、いつの間にかAIにも対処できないくらい複雑に絡まりあったクソみたいなコードになっています。そうなればもうどうしようもありません。むしろ、人間が設計を正しく理解し、それに沿ってAIに的確な指示を与えることができれば、後は全てAIに任せきりにすることができます。AIで楽をするためにも人間が設計を理解することは極めて重要です。

この講習会では、開発力を落とす不吉な臭いを正しく知覚し、退治するための設計手法を紹介します。

## 今回の内容

設計と聞くと、クラス設計やアーキテクチャについて想像する人もいるかもしれません。しかしまず第一に、書くコードが汚ければクラス設計などがどれだけしっかりしていても話になりません。まずは設計の基礎を固めるために、「良いコード」を書く方法を紹介します。

## 1. 良いコードとは

良いコードについて、このような言葉があります。

> 良いコードは、次にそれを保守する次の開発者へのラブレターである
> 
> (Good code is a love letter to the next developer who will maintain it.)
>
> Addy Osmani Learning JavaScript Design Patterns, O’Reilly, 2023.

ここにおいて、「次の開発者」の中には1日後のあなたも含まれます(自分の書いたコードなんて1日で忘れるので)。

更に、これに関して次のような言葉もあります。

> どんな馬鹿でも、コンピュータが理解できるコードは書ける。優れたプログラマは、人間が理解できるコードを書く
>
> (Any fool can write code that a computer can understand. Good programmers write code that humans can understand.)
>
> Martin Fowler

つまり、コードを書くということは未来の自分を含めた他者とのコミュニケーションであり、良いコードとは、変数名を丁寧に付けたり、コメントを残したり、見やすいように整形したりするなどの「𝑩𝑰𝑮 𝑳𝑶𝑽𝑬」があるコードです。あなたのコードに愛はありますか？

## 2. 命名規則を守る

名前をつけるというのは簡単なようでいて非常に重要かつ難しい行為です。

> コンピュータサイエンスには、難しい問題が2つだけある。キャッシュの無効化と、名前付けである
>
> (There are only two hard things in Computer Science: cache invalidation and naming things.)
>
> Phil Karlton

それが何であるか、何をするためのものなのかを少ない文字で伝えなければいけません。それに、あちこちで違うフォーマットで名付けが行われていると可読性が下がり、混乱の元になります。以下にC#の命名規則を記します。

### 大前提

- 意味や目的が分からない名前をつけない
    - `num`: 何の数？
    - `count`: 何のカウント？
    - `temp`: 一時的であってもちゃんと名前はつける
    - `oyoo`: ふざけない
    - `GameManager`: ゲームの何をManageするの？
- 略語を使わない
    - `d`: day…？
    - `n`: …？
    - `mp`: :@MP:…？
    - (HPやBPMなど略語の方がメジャーな場合はその限りではない)
    - (↑HPは略すのちょっと微妙かも)
    - (ループや数式の場合は1文字の変数でもよい)

### フィールドと変数

- 基本的にcamelCase、定数とプロパティはPascalCase
- 名詞で命名する
- bool型には動詞の接頭辞を付ける
    - boolは例えば「プレイヤーは死んでいるか」などの質問や条件にtrueかfalseで答えるものなので、 `isDead` のように動詞の接頭辞をつける
- 宣言は1行につき1つとする
- 冗長な名前を避ける
    - 例えば`Player` クラスにフィールド `playerScore` を作るなら、単に `score` とするべき
- 冗長な初期化子を避ける
    -  int型の `= 0`, 参照型の `= null` など
-  varの乱用を避ける
    -  型が明らかでない場合にvarを使うのはやめよう
- (自由) privateなフィールドの接頭辞に `_` をつけない
    - 個人的にはいらないと思う
- (自由) privateなフィールドにprivate修飾子をつけない
    - 修飾子をつけないと自動的にprivateになるので、publicと見分けやすくするためにもつけなくていいんじゃないかという話
    - こっちも個人的にいらないと思う

```csharp=
// ❌ Bad
public class Player : MonoBehaviour
{
    public int num;                   // 何の数？
    public float d;                   // ???
    public string temp;               // 一時的でも名前はつける
    public bool dead;                 // 動詞の接頭辞がない
    public int playerScore;           // Playerクラスなのにplayer~は冗長
    public int x = 0, y = 0;         // 1行に複数宣言 & 冗長な初期化子
    int hp = 0;                       // 冗長な初期化子 & 略語
    GameObject obj = null;            // 冗長な初期化子 & 意味不明な名前
}

// ✅ Good
public class Player : MonoBehaviour
{
    public int RemainingLife { get; private set; }     // PascalCase (プロパティ)
    public float DashDuration { get; private set; }    // 意味が明確
    public string CurrentQuestName { get; private set; }
    public bool IsDead { get; private set; }           // 動詞の接頭辞
    public int Score { get; private set; }             // Playerクラスなので冗長さを排除

    int currentHitPoint;                               // camelCase
    int maxHitPoint;
    [SerializeField] GameObject bulletPrefab;           // publicにせずSerializeField
}
```

### enum

- PascalCase
- 名前には単数形を用いる
    - 名前の接尾辞は `Type` や `State` などが考えられる

```csharp=
// ❌ Bad
public enum enemies   // 複数形 & camelCase
{
    slime,            // camelCase
    goblin,
    dragon,
}

// ✅ Good
public enum EnemyType  // 単数形 & PascalCase & 接尾辞Type
{
    Slime,             // PascalCase
    Goblin,
    Dragon,
}

public enum CharacterState  // 接尾辞State
{
    Idle,
    Running,
    Jumping,
}
```

### クラスと構造体とインターフェース

- PascalCase
- 名詞または名詞句で命名する
- インターフェースには接頭辞として `I` をつける

```csharp=
// ❌ Bad
public class manage_player { }       // snake_case & 動詞
public class data { }                // 曖昧
public interface Damageable { }      // 接頭辞Iがない

// ✅ Good
public class PlayerController : MonoBehaviour { }  // PascalCase & 名詞句
public class EnemySpawner : MonoBehaviour { }      // 役割が明確
public struct AttackResult { }                     // 構造体もPascalCase
public interface IDamageable { }                   // 接頭辞I
```

### メソッド

- PascalCase
- 動詞または動詞句で命名する
- boolを返すメソッドの名前は質問形式にする
    - bool変数と同様

```csharp=
// ❌ Bad
void Enemy() { }              // 名詞 (何をするメソッド？)
void PlayerAttack() { }       // 動詞で始まっていない
bool Dead() { return false; } // 質問形式でない

// ✅ Good
void SpawnEnemy() { }                   // 動詞 + 目的語
void ApplyDamage(int amount) { }        // 動詞句
bool IsDead() { return hitPoint <= 0; } // 質問形式
bool HasItem(ItemType type) { }         // 質問形式
bool CanAttack() { }                    // 質問形式
```

### Managerクラスはなぜいけないのか

クラス名として `GameManager` や `UIManager` など、`Manager` という名前を付けている例が多く見られます。しかし、この名前は避けるべきです。

なぜなら、`Manager` という言葉の意味が広すぎて曖昧だからです。例えば `GameManager` は具体的にゲームの何を管理しているクラスなのかが全く分かりません。単に責務が不明瞭で名付けが下手というのもそうですが、曖昧な名付けをすると「ゲームの処理なんだからとりあえず `GameManager` に詰め込んでおけばいいや」という風に、あらゆるロジックがどんどん追加されていってしまう危険があります。そうなると一瞬で数百行もある神クラスへと成長してしまいます。

`Manager` を始めとする曖昧な名前は避け、代わりに具体的な責務を表す名前を付けましょう。(といってもAIくんはお構いなしにManagerクラスを作ってしまうので困ったものです…)

## 3. コメントを正しく活用する

コメントを残すとコードが読みやすくなります。また、XML形式でコメントを書くとクラスやメソッドの情報をIDEからマウスホバーで確認できるようになります。publicなフィールドやメソッドなどで使うと良いです。

```csharp=
/// <summary>
/// 対象にダメージを与える
/// </summary>
/// <param name="target">ダメージを受ける対象</param>
/// <param name="amount">ダメージ量</param>
public void ApplyDamage(IDamageable target, int amount)
{
    target.TakeDamage(amount);
}
```

しかし、コメントは実は注意していないとバグの原因になり得ます。

### コメントを退化させない

メンテナンスが疎かになり情報が古くなったコメントを退化コメントといいます。退化コメントとは、言ってしまえば嘘をついているコメントです。そうなれば読み手は混乱し、バグの原因になります。実装を変更したならコメントの更新も忘れないようにしましょう。

退化しやすいコメントとして、ロジックの挙動をなぞるだけのコメントが挙げられます。コードの変更のたびにコメントを更新しなくてはならず、また、ロジックをそのまま書き起こしたつもりでもうっかり間違ったことを書いてしまうかもしれません。しかも結局その内容は該当箇所のコードを読めば分かるし一番正確です。結局、あまり理解の助けにならない上に害をなす可能性があり、役に立ちません。

```csharp=
// ❌ 退化コメント: 元々HPを10回復する処理だったが、任意の量を回復するように変更されたのにコメントが更新されていない
// プレイヤーのHPを10回復する  ← 嘘つき!!
public void HealPlayer(int amount)
{
    currentHitPoint = Mathf.Min(currentHitPoint + amount, maxHitPoint);
}
```

```csharp=
// ❌ ロジックをなぞるだけのコメント: コードを読めば分かるし退化もしやすい
// currentHitPointにamountを加算し、maxHitPointを超えないようにする  ← それはコード見れば分かるよ!!
public void HealPlayer(int amount)
{
    currentHitPoint = Mathf.Min(currentHitPoint + amount, maxHitPoint);
}
```

### コメントでクソコードを誤魔化さない

以下のような言葉があります。

> コードはユーモアのようなものだ。説明しなければならないなら、それはダメなものだ。
>
> (Code is like humor. When you have to explain it, it’s bad.)
>
> Cory House

つまり、適切に命名し整理され、読めば動作が分かるような自己文書化されたコードであればコメントは不要で、逆に、コメントで動作を説明しなければいけないならば、それは悪いコードであるということです。もしクソコードをコメントによって誤魔化しているのであれば、コメントを書くのではなくコメントを書かなくて済むようにコードを修正しましょう。

```csharp=
// ❌ Bad: コメントがないと理解できないコード
// HPが0以下で攻撃力が10以上なら特殊スキル、それ以外で防御力が5以上なら回復
if ((hp <= 0 && atk >= 10) || (hp > 0 && def >= 5))
{
    // ...
}

// ✅ Good: コメントがなくても読めば分かる
bool canUseSpecialSkill = IsDead() && HasHighAttack();
bool canHeal = IsAlive() && HasHighDefense();

if (canUseSpecialSkill || canHeal)
{
    // ...
}
```

### 動作ではなく目的を伝える

良いコメントとは、「動作」ではなく「目的」を伝えるものです。コードが読まれる機会の多くは、保守か仕様変更のときでしょう。そこで読み手が気になるのは、「このロジックの目的は何か、何を意図して動いているか」です。動作はコードを適切に記述すればコメントが無くても明らかですが、その目的は簡単には読み解けません。なので、動作の代わりに、ロジックの目的や仕様変更時の注意点をコメントするのが良いです。

```csharp=
// ❌ Bad: 動作を説明するコメント
// リストをループして、HPが0以下の敵を削除する
enemies.RemoveAll(e => e.HitPoint <= 0);

// ✅ Good: 目的を伝えるコメント
// 倒した敵をフィールドから除外する
enemies.RemoveAll(e => e.HitPoint <= 0);
```

```csharp=
// ✅ Good: 目的や注意点を伝えるコメントの例

// ダメージ計算の順序を変えるとバランスが崩壊するので注意
int rawDamage = baseAttack * comboMultiplier;
int reducedDamage = rawDamage - target.Defense;
int finalDamage = Mathf.Max(reducedDamage, 1); // 最低1ダメージは保証する仕様
```

## 4. アクセスレベルを意識する

ネットに転がっているようなサンプルコードでは、フィールドやメソッドのアクセスレベルは大抵の場合publicです。しかし、それは単に説明を簡単にするためであって、実際は何でもかんでもpublicにしてはいけません。

publicということは、そのクラスの外からでもアクセスできてしまうということです。フィールドであれば値を読み書きでき、メソッドであれば呼び出すことができます。それは例えるならドアや窓を全開にした家のようで、「どうぞご自由に侵入してください」と言っているようなものです。

これはなにも悪意ある第三者に攻撃される恐れがあるという話ではなく、それが外で自由に使っても良いものなのか分かりにくくなるからということです。後でそのプログラムを触る人(他のメンバーや未来のあなた)がコードを読んだとき、「このメソッドは外から呼んでいいのか？」「この値は外から自由に書き換えていいのか？」と困ってしまいます。その問題を解決するために無駄な手間がかかるばかりか、うっかり触ってはいけないものに触れてしまってバグを生んでしまうかもしれません。

### アクセス修飾子

まず、アクセスレベルは基本的にprivateが前提です。privateはそのクラス内からしかアクセスできない、最も安全なレベルです。そこから、どうしても外に公開しなくてはならないものだけをpublicにします。単にインスペクターに表示されるようにしたいだけなら、publicにするのではなく `[SerializeField]` 属性をつけましょう。

privateでは子クラスからもアクセスできません。もし子クラスからもアクセスしたい場合はprotectedにします。普段の開発ではこの3つさえ使えれば特に困ることはないでしょう。

```csharp=
// ❌ Bad: 全部publicで丸見え
// 「どうぞご自由に侵入してください」状態
public class Player : MonoBehaviour
{
    public int hitPoint;
    public int maxHitPoint;
    public GameObject bulletPrefab;

    public void DecrementHitPoint()
    {
        hitPoint--;
    }
}

// ✅ Good: 必要なものだけ公開する
public class Player : MonoBehaviour
{
    [SerializeField] GameObject bulletPrefab;  // インスペクターには表示されるがコードからはアクセス不可

    int hitPoint;                              // private (修飾子省略)
    int maxHitPoint;                           // private

    public void TakeDamage(int amount)          // 外部に公開する必要があるものだけpublic
    {
        hitPoint -= amount;
    }

    void Die()                                 // 外から呼ばれたくないのでprivate
    {
        // ...
    }
}
```

### プロパティ

外から値を読み取るのは許可したいが、外から書き込みはされたくないという場合があります。これは単にアクセス修飾子だけでは解決できません。そこで、プロパティを使います。

プロパティの前に、getterとsetterについて説明します。あるprivateなフィールドを、privateなまま外から読み書きできるようにしたいとしたら、どうすればいいでしょうか。それは、そのフィールドの値を返すメソッドと、フィールドに値を書き込むpublicなメソッドを作ることです。このメソッドをそれぞれgetter/setterといいます。わざわざフィールドをそのまま公開せずgetterとsetterを使うメリットは、不正な値を弾いたり値を加工したりして安全に読み書きできるようになることです。

```csharp=
// getter/setterを自前で実装する場合
public class Player : MonoBehaviour
{
    int hitPoint;

    public int GetHitPoint()
    {
        return hitPoint;
    }

    public void SetHitPoint(int value)
    {
        hitPoint = Mathf.Max(0, value); // 不正な値を弾ける
    }
}
```

このgetterとsetterを簡単に実装する機能がプロパティです。プロパティを使うと、外部からはあたかもフィールドのようにアクセスすることができます。よく使うのが、getterとsetterに特別な処理を書かない場合に使う自動実装プロパティです。

プロパティの嬉しい点は、getterとsetterのアクセスレベルを個別に設定できることです。setter側をprivateにしてしまえば、読み取りだけを外部に許可することができます。また、そもそもsetterを消すことでクラス内からも変更できないようにもできます。プロパティは単にフィールドをpublicで公開するよりも安全なため、フィールドを公開するときは基本的に必ず使うようにします。


```csharp=
// プロパティを使う場合
public class Player : MonoBehaviour
{
    int hitPoint;

    public int HitPoint
    {
        get { return hitPoint; }
        private set { hitPoint = Mathf.Max(0, value); } // setterはprivate
    }
}
```

```csharp=
// 自動実装プロパティ (特に加工が不要な場合)
public class Player : MonoBehaviour
{
    public int HitPoint { get; private set; }  // 外から読めるが書き込めない
    public int MaxHitPoint { get; }            // setterなし: クラス内からも変更不可
}
```

## 5. 一つのメソッドに詰め込まない

一つのメソッドにあれもこれもと処理を詰め込んでしまうと、あっという間に何十行、何百行もの巨大メソッドが出来上がります。そうなるとコードの見通しは最悪になり、読み解くのは苦行になります。このようなメソッドを神メソッドと呼ぶことがあります。神の所業を人間が理解するのは困難です。

次のような言葉があります。

> 関数は1つのことを行うべきだ。それをうまくやるべきだ。それだけを行うべきだ。
>
> (Functions should do one thing. They should do it well. They should do it only.)
>
> Robert C. Martin Clean Code

これはSOLID原則のS、単一責任の原則のメソッド版です。一つのメソッドは一つのことだけを行うべきです。そうすれば、メソッド名だけで何をしているかが一目で分かり、テストや修正も容易になります。

```csharp=
// ❌ Bad: 一つのメソッドに全部詰め込んだ「神メソッド」
void Update()
{
    float h = Input.GetAxis("Horizontal");
    float v = Input.GetAxis("Vertical");
    Vector3 direction = new Vector3(h, 0, v).normalized;
    if (direction.magnitude > 0.1f)
    {
        transform.position += direction * moveSpeed * Time.deltaTime;
        transform.rotation = Quaternion.LookRotation(direction);
        animator.SetBool("IsRunning", true);
    }
    else
    {
        animator.SetBool("IsRunning", false);
    }

    if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
    {
        rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        isGrounded = false;
        animator.SetTrigger("Jump");
        audioSource.PlayOneShot(jumpSound);
    }

    if (Input.GetMouseButtonDown(0) && canAttack)
    {
        canAttack = false;
        animator.SetTrigger("Attack");
        audioSource.PlayOneShot(attackSound);
        Collider[] hits = Physics.OverlapSphere(attackPoint.position, attackRange);
        foreach (var hit in hits)
        {
            if (hit.TryGetComponent<IDamageable>(out var target))
            {
                target.TakeDamage(attackPower);
            }
        }
        Invoke("ResetAttack", attackCooldown);
    }

    if (Input.GetKeyDown(KeyCode.R) && potionCount > 0)
    {
        hitPoint = Mathf.Min(hitPoint + potionHealAmount, maxHitPoint);
        potionCount--;
        audioSource.PlayOneShot(healSound);
        Instantiate(healEffect, transform.position, Quaternion.identity);
    }
}
// → 読む気、失せません？
```

一つのメソッドになんでも詰め込むのではなく、処理のまとまりごとに別メソッドへ切り出しましょう。一メソッドあたり長くとも大体20~30行程度が良いでしょう(あくまで指標の一つ)。

```csharp=
// ✅ Good: 処理ごとにメソッドへ切り出す
void Update()
{
    Move();
    TryJump();
    TryAttack();
    TryUsePotion();
}

void Move()
{
    float h = Input.GetAxis("Horizontal");
    float v = Input.GetAxis("Vertical");
    Vector3 direction = new Vector3(h, 0, v).normalized;

    if (direction.magnitude <= 0.1f)
    {
        animator.SetBool("IsRunning", false);
        return;
    }

    transform.position += direction * moveSpeed * Time.deltaTime;
    transform.rotation = Quaternion.LookRotation(direction);
    animator.SetBool("IsRunning", true);
}

void TryJump()
{
    if (!Input.GetKeyDown(KeyCode.Space)) return;
    if (!isGrounded) return;

    rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
    isGrounded = false;
    animator.SetTrigger("Jump");
    audioSource.PlayOneShot(jumpSound);
}

void TryAttack()
{
    if (!Input.GetMouseButtonDown(0)) return;
    if (!canAttack) return;

    canAttack = false;
    animator.SetTrigger("Attack");
    audioSource.PlayOneShot(attackSound);
    DealDamageToNearbyEnemies();
    Invoke("ResetAttack", attackCooldown);
}

void DealDamageToNearbyEnemies()
{
    Collider[] hits = Physics.OverlapSphere(attackPoint.position, attackRange);
    foreach (var hit in hits)
    {
        if (hit.TryGetComponent<IDamageable>(out var target))
        {
            target.TakeDamage(attackPower);
        }
    }
}

void TryUsePotion()
{
    if (!Input.GetKeyDown(KeyCode.R)) return;
    if (potionCount <= 0) return;

    hitPoint = Mathf.Min(hitPoint + potionHealAmount, maxHitPoint);
    potionCount--;
    audioSource.PlayOneShot(healSound);
    Instantiate(healEffect, transform.position, Quaternion.identity);
}
// → Update()を読むだけで「何をしているか」が分かる！
```

切り出したメソッドに適切な名前をつければ、中身を読まなくても処理の全体像が分かるようになります。結果として、`Update()` が目次のような役割を果たし、詳しく知りたければ各メソッドに飛べばよいという美しい構造になります。

## 6. ネストを回避する

いくつかの条件があって、全てクリアしたときに処理を行いたい場合があると思います。愚直に書くとすれば、if文の中にif文を書いて…というように入れ子構造的に条件分岐を行うことでしょう。

しかしこれでは条件が多ければ多いほどネストが深くなっていき、どんどん見通しが悪くなっていきます。ある条件を満たしたときにどこからどこまでが実行されるのか、あるいは満たしていない場合に何が起こるのか。それを理解するためにいたずらに時間を使ってしまいます。if文に限らず、ネストが深くなるのは極力避けるべきです。

```csharp=
// ❌ Bad: ネストが深い
void ApplyDamage(Character target, int damage)
{
    if (target != null)
    {
        if (target.IsAlive)
        {
            if (!target.IsInvincible)
            {
                if (damage > 0)
                {
                    target.HitPoint -= damage;
                    if (target.HitPoint <= 0)
                    {
                        target.Die();
                    }
                }
            }
        }
    }
}
```

また、ネストを浅くしたいからといって、条件を全て論理演算でまとめるのも悪手です。単純に条件が長くなり可読性が低くなります。

```csharp=
// ❌ Bad: 条件を全てまとめると読みにくい
void ApplyDamage(Character target, int damage)
{
    if (target != null && target.IsAlive && !target.IsInvincible && damage > 0)
    {
        target.HitPoint -= damage;
        if (target.HitPoint <= 0)
        {
            target.Die();
        }
    }
}
```

### 早期return

ネストを浅くする方法の一つに早期returnがあります。早期returnとは、条件を満たしていない場合に直ちにreturnで抜けるという手法です。先程の複数のif文にも早期returnを適用すると、ネストが浅くなり非常に見通しが良くなります。

更に、早期returnによって条件とロジックがそれぞれ明確に分離され、変更が非常にやりやすくなります。

```csharp=
// ✅ Good: 早期return
void ApplyDamage(Character target, int damage)
{
    if (target == null) return;
    if (!target.IsAlive) return;
    if (target.IsInvincible) return;
    if (damage <= 0) return;

    target.HitPoint -= damage;

    if (target.HitPoint <= 0)
    {
        target.Die();
    }
}
```

### 早期continue

ループ処理中の条件分岐にも早期returnの考えが適用できます。returnではなくcontinueをすることによって条件を満たさない場合に即座に次のループへ移行でき、ネストが浅くなります。

```csharp=
// ❌ Bad
foreach (var enemy in enemies)
{
    if (enemy.IsAlive)
    {
        if (enemy.IsInRange(player))
        {
            enemy.Attack(player);
        }
    }
}

// ✅ Good: 早期continue
foreach (var enemy in enemies)
{
    if (!enemy.IsAlive) continue;
    if (!enemy.IsInRange(player)) continue;

    enemy.Attack(player);
}
```

### break

早期continueと同様に、breakによってループを抜けることもできます。

```csharp=
// ❌ Bad
Item foundItem = null;
foreach (var item in inventory)
{
    if (foundItem == null)
    {
        if (item.Type == ItemType.Potion)
        {
            if (item.Count > 0)
            {
                foundItem = item;
            }
        }
    }
}

// ✅ Good: 早期continue + break
Item foundItem = null;
foreach (var item in inventory)
{
    if (item.Type != ItemType.Potion) continue;
    if (item.Count <= 0) continue;

    foundItem = item;
    break;
}
```

## 7. 同じことを何度も書かない

次のような言葉があります。

> 繰り返しを避けよ
>
> (Don't Repeat Yourself)
>
> Andy Hunt, Dave Thomas The Pragmatic Programmer

これはDRY原則と呼ばれています。あなたのコードの中に、同じコードをいくつもコピペしたような箇所はありませんか？単に冗長なだけでなく、もし修正する場合、その全てを探して修正しなければならず、修正漏れがあればバグになります。複数の場所で使われるロジックをメソッドとしてまとめるなど、繰り返しを避ける工夫をしましょう。

```csharp=
// ❌ Bad: 同じロジックのコピペ
void OnEnemyDefeated(Enemy enemy)
{
    int exp = enemy.Exp;
    totalExp += exp;
    Debug.Log($"{exp} EXPを獲得！");
    if (totalExp >= nextLevelExp)
    {
        level++;
        Debug.Log($"レベルアップ！ Lv.{level}");
    }
}

void OnQuestCompleted(Quest quest)
{
    int exp = quest.RewardExp;
    totalExp += exp;
    Debug.Log($"{exp} EXPを獲得！");   // ← 上と全く同じ
    if (totalExp >= nextLevelExp)         // ← 上と全く同じ
    {
        level++;
        Debug.Log($"レベルアップ！ Lv.{level}");
    }
}
```

```csharp=
// ✅ Good: メソッドに切り出す
void OnEnemyDefeated(Enemy enemy)
{
    GainExp(enemy.Exp);
}

void OnQuestCompleted(Quest quest)
{
    GainExp(quest.RewardExp);
}

void GainExp(int amount)
{
    totalExp += amount;
    Debug.Log($"{amount} EXPを獲得！");
    if (totalExp >= nextLevelExp)
    {
        level++;
        Debug.Log($"レベルアップ！ Lv.{level}");
    }
}
```

## 8. 間違った共通化をしない

先程繰り返しを避けよと言いましたが、単にロジックが同じだからという理由で共通化をしてはいけません。DRY原則の原典では、以下のように説明されています。

> すべての知識は、システム内において、単一で、明確で、権威ある（信頼できる）表現を持たなければならない。
>
> (Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.)
>
> Andy Hunt, Dave Thomas The Pragmatic Programmer

あなたが共通化したロジックは本当に同じものでしょうか？もしかしたらたまたま同じロジックだっただけで、本質的な目的は全く別かもしれません。目的が異なるものを共通化すると、仕様変更でロジックが変わった場合にそれを利用している全ての箇所が巻き添えを食います。共通化する際には、ロジックだけでなく目的も同じかどうかを確かめましょう。

```csharp=
// ❌ Bad: たまたまロジックが同じだっただけなのに共通化してしまった
int CalcValue(int baseValue, float rate)
{
    return Mathf.RoundToInt(baseValue * rate);
}

// 攻撃ダメージ計算に使用
int damage = CalcValue(attackPower, damageRate);

// ショップの割引計算に使用
int discountedPrice = CalcValue(originalPrice, discountRate);

// → ダメージ計算の仕様が変わって防御力を考慮するようになったら、
//    ショップの割引計算まで巻き添えになってしまう！
```

```csharp=
// ✅ Good: 目的が違うので別々のメソッドにする
int CalcDamage(int attackPower, float damageRate)
{
    return Mathf.RoundToInt(attackPower * damageRate);
}

int CalcDiscountedPrice(int originalPrice, float discountRate)
{
    return Mathf.RoundToInt(originalPrice * discountRate);
}
```

## 9. switch文を回避する

ある変数の値によって処理を分岐させるのにはif-elseの連鎖ではなくswitch文を使うと綺麗に書けます。状態を表すenumをswitch文に入れて処理を分岐させることはよくやります。しかし、良かれと思って書いたこのswitch文もバグの原因になり得ます。

### switch式

条件として使っているenumに新しい値が追加された場合を考えます。当然、その新しい値のときの処理もswitch文に追加する必要があります。しかしここで問題なのは、enumの値が増えてもswitch文は何もエラーを吐かないということです。正しく修正できればいいですが、もし修正すべきswitch文を見逃してしまうとバグを生んでしまい、特定も困難になります。

そこで、switch文の代わりにswitch式を使うと安全になります。switch式はswitch文と違い、全てのケースが網羅されていなければエラーを吐きます。更に、breakのし忘れも防ぐことができてお得です。

```csharp=
public enum WeaponType
{
    Sword,
    Bow,
    Staff,
}
```

```csharp=
// ❌ Bad: switch文 (新しい値が追加されてもエラーにならない)
string GetWeaponDescription(WeaponType type)
{
    switch (type)
    {
        case WeaponType.Sword:
            return "近距離攻撃に向いた武器";
        case WeaponType.Bow:
            return "遠距離攻撃に向いた武器";
        case WeaponType.Staff:
            return "魔法攻撃に向いた武器";
        default:
            return "不明";  // ← 新しい武器が追加されてもここに落ちるだけ
    }
}

// ✅ Good: switch式 (全ケースを網羅しないとコンパイルエラー)
string GetWeaponDescription(WeaponType type) => type switch
{
    WeaponType.Sword => "近距離攻撃に向いた武器",
    WeaponType.Bow   => "遠距離攻撃に向いた武器",
    WeaponType.Staff => "魔法攻撃に向いた武器",
    // ↑ 新しいWeaponTypeが追加されたら、ここに追加しないとエラーになる
};
```

### Strategyパターン

しかし、ある条件によって処理を切り替えたい場面は一箇所だけで済まないことが多いです。そこでそのままswitch文やswitch式を使っていると、同じ条件式のswitchがあらゆる場所に置かれることになります。こうなると、ケースを追加したいときに様々な場所を周って変更を加えなくてはいけません。単に変更するのが大変ですし、もし抜けがあれば大変です。

```csharp=
// ❌ Bad: switchが多くの場所に散らばる
void Attack(WeaponType type)
{
    switch (type)
    {
        case WeaponType.Sword: /* 剣の攻撃処理 */ break;
        case WeaponType.Bow:   /* 弓の攻撃処理 */ break;
        case WeaponType.Staff: /* 杖の攻撃処理 */ break;
    }
}

void PlayAttackSound(WeaponType type)
{
    switch (type)
    {
        case WeaponType.Sword: /* 剣の攻撃音 */ break;
        case WeaponType.Bow:   /* 弓の攻撃音 */ break;
        case WeaponType.Staff: /* 杖の攻撃音 */ break;
    }
}
// → WeaponTypeに新しい値が追加されたら、全てのswitchを探して修正しなきゃいけない！
```

そこで、インターフェースを使うことで条件分岐を大幅に減らし、ロジックをシンプルにすることができます。各switchの処理をインターフェースで抽象化し、各ケースを表すクラスに実装させます。こうすることで、呼び出す側は相手が何であるかを知る必要がないので、条件分岐をしなくてよくなります。

```csharp=
// 各switchの処理をインターフェースで抽象化
public interface IWeapon
{
    void Attack();
    void PlayAttackSound();
}

// 各ケースをクラスとして実装
public class Sword : IWeapon
{
    public void Attack() { /* 剣の攻撃処理 */ }
    public void PlayAttackSound() { /* 剣の攻撃音 */ }
}

public class Bow : IWeapon
{
    public void Attack() { /* 弓の攻撃処理 */ }
    public void PlayAttackSound() { /* 弓の攻撃音 */ }
}

public class Staff : IWeapon
{
    public void Attack() { /* 杖の攻撃処理 */ }
    public void PlayAttackSound() { /* 杖の攻撃音 */ }
}
```

そして、辞書によって条件に応じた適切なクラスのインスタンスを取得できるようにします。こうすることで、switch文を使わずに条件に従って機能を取り替えることができるようになりました。これをStrategyパターンといいます。

```csharp=
// 辞書で条件に応じたインスタンスを取得
Dictionary<WeaponType, IWeapon> weapons = new()
{
    { WeaponType.Sword, new Sword() },
    { WeaponType.Bow,   new Bow() },
    { WeaponType.Staff, new Staff() },
};

// 呼び出す側はswitch不要！ 相手が何であるかを知る必要がない
IWeapon weapon = weapons[currentWeaponType];
weapon.Attack();
weapon.PlayAttackSound();
// → 新しい武器を追加するときは、クラスを作って辞書に追加するだけ！
```

## 10. フラグ引数を使わない

メソッドに渡してメソッドの機能を切り替えるbool型の引数のことをフラグ引数といいます。フラグ引数付きのメソッドは、何が起こるかを把握するのが難しくなり可読性が悪いです。フラグ引数は使わず、機能ごとにメソッドを分離しましょう。

```csharp=
// ❌ Bad: フラグ引数で機能を切り替え
void Attack(bool isSpecialAttack)
{
    if (isSpecialAttack)
    {
        ConsumeMP(50);
        DealDamage(attackPower * 3);
        PlayEffect("SpecialAttack");
    }
    else
    {
        DealDamage(attackPower);
        PlayEffect("NormalAttack");
    }
}

// 呼び出し側: trueって何？
Attack(true);   // ???
Attack(false);  // ???
```

```csharp=
// ✅ Good: メソッドを分離
void NormalAttack()
{
    DealDamage(attackPower);
    PlayEffect("NormalAttack");
}

void SpecialAttack()
{
    ConsumeMP(50);
    DealDamage(attackPower * 3);
    PlayEffect("SpecialAttack");
}

// 呼び出し側: 何をするか明確
NormalAttack();
SpecialAttack();
```

## 11. 車輪の再発明をしない

例えばリストを操作しようとして、処理を自前で実装してしまう人がいます。しかし、これはLINQを使えば簡単に書けてしまいます。このように、便利なライブラリの存在を知らずに車輪の再発明をしてしまうことは避けましょう。

```csharp=
// ❌ Bad: 自前で実装
List<Enemy> aliveEnemies = new();
foreach (var enemy in enemies)
{
    if (enemy.IsAlive)
    {
        aliveEnemies.Add(enemy);
    }
}

int totalDamage = 0;
foreach (var record in damageRecords)
{
    totalDamage += record.Amount;
}

Enemy strongest = null;
int maxAttack = int.MinValue;
foreach (var enemy in enemies)
{
    if (enemy.Attack > maxAttack)
    {
        maxAttack = enemy.Attack;
        strongest = enemy;
    }
}
```

```csharp=
// ✅ Good: LINQを使う
using System.Linq;

List<Enemy> aliveEnemies = enemies.Where(e => e.IsAlive).ToList();
int totalDamage = damageRecords.Sum(r => r.Amount);
Enemy strongest = enemies.OrderByDescending(e => e.Attack).First();
```

## 12. 読み取り専用のコレクションを渡す

リストなどのコレクションを外部に渡すとき、そのまま渡すのは危険です。コレクションは参照型なので、渡した外部で要素の追加や削除ができてしまいます。各コレクションは読み取り専用のインターフェースを実装しているため、それにキャストして渡すと安全です。

```csharp=
// ❌ Bad: Listをそのまま返す
public class Inventory
{
    List<Item> items = new();

    public List<Item> GetItems()
    {
        return items; // 外部で自由にAdd/Removeできてしまう！
    }
}

// ✅ Good: 読み取り専用インターフェースで返す
public class Inventory
{
    List<Item> items = new();

    public IReadOnlyList<Item> GetItems()
    {
        return items; // IReadOnlyListなのでAdd/Removeできない
    }
}
```

## 13. デッドコードを消す

どんな条件でも絶対に実行されないコードをデッドコードといいます。デッドコードは単に可読性を下げるだけでなく、将来的に仕様変更の副作用で意図せず到達可能になる場合があります。死んだはずのデッドコードがゾンビのように蘇ってしまうのです。当然バグになるので理由がない限り削除するようにしましょう。gitで管理していれば後から復元可能です。

```csharp=
// ❌ Bad: デッドコードが残っている
void Update()
{
    Move();

    // 旧仕様の処理 (今は使っていない)
    // if (Input.GetKeyDown(KeyCode.Space))
    // {
    //     OldJump();
    // }

    if (false) // テスト用 (???)
    {
        DebugMode();
    }

    return;

    RecoverHP(); // ← 決して実行されない
}
```

## 14. 今いらないものは実装しない

作品の中で「こんなこともあろうかと」と有能な人が不測の事態を先読みして予め準備をしていた、なんてシーンはよくあります。しかし、開発においてそれはリスクになり得ます。こんな言葉があります。

> それはきっと必要にならない
>
> (You aren't gonna need it.)
>
> Ron Jeffries

これは、原文の頭文字をとってYAGNI原則といいます。更にRon Jeffriesは次のように続けます。

> 常に、実際に必要になったときにだけ実装しなさい。単に必要になると予測しただけで実装しては決してならない。
>
> (Always implement things when you actually need them, never when you just foresee that you need them.)
>
> Ron Jeffries

確かに、ある程度先を見通しておくことは重要です。しかし、未来を気にするあまり今を疎かにしては本末転倒です。それに、仕様はどんどん変更される可能性があります。念の為用意しておいたものも、予想が外れればデッドコードになったりしてバグの原因となります。過度に拡張性を高めたりインターフェースを差し込みまくったりするのも単に手間が増えるだけです。

それは最適化についても同じです。確かにパフォーマンスを改善しようとすることはとても素晴らしいことです。しかし、その最適化は本当に必要なものでしょうか？

> 早すぎる最適化は、諸悪の根源である
>
> (Premature optimization is the root of all evil.)
>
> Donald E. Knuth

最適化に躍起になるあまり、コードが複雑になったり開発が滞ったりしていませんか？その最適化によって得られるパフォーマンスは本当に必要なものですか？結局ゲームが完成しなければ全てが無駄になります。まだ完成してもいないのに、まだパフォーマンスの問題が発生していないのに、ボトルネックが判明する前に勘でコードを複雑にしてまで最適化しようとするのは愚かです。

結局、ここで主張したいことは全てKISS原則で表されます。

> シンプルにしておけ、この間抜け！
>
> (Keep it simple, stupid.)
>
> Kelly Johnson

コードはできるだけ現時点で必要な機能だけにしてシンプルに保ち、必要になったときに必要なものを実装しましょう。

```csharp=
// ❌ Bad: 「いつか使うかも」で作った未使用の拡張ポイント
public interface IBuffable { }
public interface IDebuffable { }
public interface IElemental { }
public abstract class StatusEffectBase<T> where T : IBuffable, IDebuffable { }

public class Player : MonoBehaviour, IBuffable, IDebuffable, IElemental
{
    // 今の仕様にはバフもデバフも属性もない…
    public int HitPoint { get; private set; }
    public void TakeDamage(int amount) { HitPoint -= amount; }
}

// ✅ Good: 今必要なものだけ
public class Player : MonoBehaviour
{
    public int HitPoint { get; private set; }
    public void TakeDamage(int amount) { HitPoint -= amount; }
}
```

## 15. マジックナンバーを消す

ロジックの中に直接書き込まれている数値をマジックナンバーといいます。マジックナンバーはこれが何を意味した数値であるか解読が難しく、可読性が低下します。また、もし同じマジックナンバーを複数箇所に実装すると、仕様変更時に漏れなく修正するのが難しくなります。

数値や文字列の意味を明確にするために、マジックナンバーを定数かenumとして定義しましょう。そうすれば意味が分かりやすく、変更も一括で済みます。

```csharp=
// ❌ Bad: マジックナンバー
void TakeDamage(int amount)
{
    hitPoint -= amount;
    if (hitPoint <= 0)
    {
        hitPoint = 0;
        Invoke("Respawn", 3);  // 3って何？ 秒？ フレーム？
    }

    transform.position += knockbackDirection * 0.5f;  // 0.5って何…？
}

// ✅ Good: 定数として定義
const float RespawnDelay = 3f;
const float KnockbackDistance = 0.5f;

void TakeDamage(int amount)
{
    hitPoint -= amount;
    if (hitPoint <= 0)
    {
        hitPoint = 0;
        Invoke("Respawn", RespawnDelay);
    }

    transform.position += knockbackDirection * KnockbackDistance;
}
```

Unityであれば、インスペクターから値を設定できるようにしておくのもよいでしょう。

```csharp=
// インスペクターから設定する場合
[SerializeField] float respawnDelay = 3f;
[SerializeField] float knockbackDistance = 0.5f;
```

複数のクラスで使われるのであれば、関連する設定値をまとめたScriptableObjectを作成し、インスペクターから注入するという方法もあります。

```csharp=
// ScriptableObjectで設定値をまとめる場合
[CreateAssetMenu(fileName = "PlayerSettings", menuName = "Settings/Player")]
public class PlayerSettings : ScriptableObject
{
    public float RespawnDelay = 3f;
    public float KnockbackDistance = 0.5f;
}

public class Player : MonoBehaviour
{
    [SerializeField] PlayerSettings settings;

    void TakeDamage(int amount)
    {
        // ...
        Invoke("Respawn", settings.RespawnDelay);
        transform.position += knockbackDirection * settings.KnockbackDistance;
    }
}
```

## 16. 再代入をしない

変数に再び値を代入することを再代入といいます。もちろん、状況によっては再代入は許可されますが、単に変数を使いまわしたいだけなら、コードの途中で変数の用途が変わることになり可読性が低下します。目的ごとに異なる変数を使用しましょう。また、引数に再代入することもしてはいけません。

```csharp=
// ❌ Bad: 変数を使いまわしている
int result = baseAttack;
result = result * comboMultiplier;     // いつの間にか用途が変わっている
result = result - target.Defense;
result = Mathf.Max(result, 1);

// ✅ Good: 目的ごとに変数を分ける
int rawDamage = baseAttack * comboMultiplier;
int actualDamage = rawDamage - target.Defense;
int finalDamage = Mathf.Max(actualDamage, 1);
```

```csharp=
// ❌ Bad: 引数に再代入
void ApplyDamage(int damage)
{
    damage = Mathf.Max(damage - defense, 0); // 引数を上書き
    hitPoint -= damage;
}

// ✅ Good
void ApplyDamage(int damage)
{
    int actualDamage = Mathf.Max(damage - defense, 0);
    hitPoint -= actualDamage;
}
```

また、もし再代入されないことを保証したいフィールドがあれば、`readonly` 修飾子をつけましょう。これで一度値が代入されたらそれ以降変更できなくなります。また、再代入されないことが明らかとなり可読性が向上します。初期化時に一度代入したきり変更しないフィールドはよくあります。そういうフィールドは必ずreadonlyにしましょう。

```csharp=
// readonlyの例
public class CharacterStatus
{
    readonly int maxHitPoint;      // 一度設定したら変更できない
    readonly string characterName;

    public CharacterStatus(int maxHitPoint, string characterName)
    {
        this.maxHitPoint = maxHitPoint;
        this.characterName = characterName;
    }
}
```

## 17. nullを回避する

Unity使いを最も多く悩ませてきたエラーといえば、間違いなく `NullReferenceException: Object reference not set to an instance of an object` でしょう。これは要するに値がnullである変数を参照してしまったということです。Unityを始めたての頃は特にこのエラーに悩まされてきたことでしょう。単にインスペクターにセットし忘れていただけならまだ良いのですが、どんなに原因を探して潰しても一向に消えないこともあり、そうなるともうお手上げです。一体このnullはどこで混入してしまったのか…！？

そんな皆のトラウマであるnullですが、実際こいつは昔から世界中で猛威を振るっています。nullの生みの親であるイギリスのTony Hoareはこの状況についてこのような言葉を残しました。

> 私はそれを10億ドルの過ちと呼んでいる。それは1965年のnull参照の発明だ。
>
> (I call it my billion-dollar mistake. It was the invention of the null reference in 1965.)
>
> Tony Hoare

彼は1965年、「ALGOL W」という言語の設計中に「単に実装が非常に簡単だったから」という理由で全ての参照にnullを含めることを許可してしまいました。その結果、今に至るまでnullは世界中でシステムをクラッシュさせ、莫大な経済的損失が生まれることになりました。その教訓を活かし、RustやTypeScriptのように現在主流となっている言語の多くはnull安全という仕組みを取り入れ、最初からnullを許容しないように設計されています。

### 非null三原則 (返さない、渡さない、代入しない)

では、我々はこの悪魔にどう立ち向かうべきでしょうか？単にあらゆる場所でnullチェックを行えば一応安全にはなりますが、これは現実的ではありません。コードの見通しも悪くなるし、nullチェックを忘れればエラーの原因になります。

一番の解決法は、そもそもnullをコードで扱わないようにすることです。すなわち、以下の非null三原則に従います。

- nullを返さない
    - メソッドの戻り値としてnullをreturnしないこと
- nullを渡さない
    - メソッドの引数にnullを渡さないこと
- nullを代入しない
    - 変数にnullを代入しないこと

```csharp=
// ❌ Bad: nullを返す・渡す・代入する
ISkill GetSpecialSkill()
{
    if (hasSpecialSkill)
        return specialSkill;
    return null;                    // nullを返している!
}

void UseSkill()
{
    ISkill skill = GetSpecialSkill();
    if (skill != null)              // nullチェックを忘れたらそこで終わり
    {
        skill.Execute();
    }
}

void ClearWeapon()
{
    currentWeapon = null;           // nullを代入している!
}
```

### nullの代わりとなるダミーオブジェクトを作る

では、今まで「何もない」ということを表すためにnullを渡していた場所ではどうすればいいのでしょうか。それは、nullの代わりに「何もしない」という振る舞いを持つ安全なダミーオブジェクトを作ってそれを渡すことです。そうすればnullを参照することなく、nullチェックも不要になります。

```csharp=
// ✅ Good: 「何もしない」ダミーオブジェクトを使う (Null Objectパターン)
public interface ISkill
{
    void Execute();
}

// 「何もしない」という振る舞いを持つダミー
public class NullSkill : ISkill
{
    public void Execute() { } // 何もしない
}

ISkill GetSpecialSkill()
{
    if (hasSpecialSkill)
        return specialSkill;
    return new NullSkill(); // nullの代わりにダミーを返す
}

void UseSkill()
{
    ISkill skill = GetSpecialSkill();
    skill.Execute(); // nullチェック不要！ NullSkillなら何も起きないだけ
}
```

### RequireComponentを使う

Unityのインスペクターでコンポーネントをアタッチし忘れた結果nullエラーが起きた経験はよくあるでしょう。そこで、Unityの `[RequireComponent]` 属性を使用することで、自動的にそのコンポーネントを追加してくれ、アタッチし忘れを防いでくれます。

```csharp=
[RequireComponent(typeof(Rigidbody))]
public class PlayerMovement : MonoBehaviour
{
    Rigidbody rb;

    void Awake()
    {
        rb = GetComponent<Rigidbody>(); // RequireComponentがあるのでnullにならない
    }
}
```

## 参考文献

- [C#スタイルガイドを使用して、クリーンでスケーラブルなゲームコードを書く ー Unity 6版 ](https://unity3d.jp/game/create-code-c-sharp-style-guide-e-book-unity-6/)
- [改訂新版　良いコード／悪いコードで学ぶ設計入門 ―保守しやすい　成長し続けるコードの書き方](https://amzn.asia/d/0bwyhJXy)
- [リファクタリング(第2版): 既存のコードを安全に改善する (OBJECT TECHNOLOGY SERIES)](https://amzn.asia/d/0cUI8MuK)
