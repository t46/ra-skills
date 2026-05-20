# RA Skills — リサーチアドミニストレーションのスキルハブ

大学・研究機関のリサーチアドミニストレーション（RA / URA）業務の知見を、[Claude Code](https://docs.anthropic.com/en/docs/claude-code) のスキル（SKILL.md）として構造化・共有するリポジトリです。

## 背景

リサーチアドミニストレーターの知見は各現場に属人化しており、組織を越えて共有する仕組みが乏しい状況です。このリポジトリでは、RA 業務のノウハウを Claude Code のスキルフォーマットで記述し、エージェントが実行可能な形で蓄積・共有します。

## 関連・先行プロジェクト

大学業務向けの AI スキル集として、すでに重要な先行リポジトリがあります。

- [gmoriki/higher-ed-ai-skills](https://github.com/gmoriki/higher-ed-ai-skills) — 大学業務の AI 活用を `skill.md` 形式で構造化した公開スキル集。教務、国際、IR、広報、研究支援、学生支援などを横断しており、現場の実態をより広く反映した、実用性の高い先行例です。RA Skills はこの取り組みに学びながら、研究アドミニストレーション領域の知見を追加で深めていく位置づけです。

## スキル一覧

### 政策情報系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [科学技術政策モニタリング](skills/policy-monitor/SKILL.md) | `/policy-monitor` | 科学技術政策の最新動向を収集・要約する |
| [公募情報検索](skills/funding-search/SKILL.md) | `/funding-search` | 研究費の公募情報を検索・フィルタリングする |

### 申請書系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [申請書レビュー](skills/grant-proposal-review/SKILL.md) | `/grant-proposal-review` | 研究費申請書をレビューし改善提案を行う |
| [予算策定](skills/budget-planning/SKILL.md) | `/budget-planning` | 研究予算の策定・妥当性チェックを行う |
| [研究倫理審査 申請支援](skills/ethics-review-support/SKILL.md) | `/ethics-review-support` | 倫理審査の要否判定、申請準備、差し戻し対応を支援する |

### 報告書系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [進捗報告書作成支援](skills/progress-report/SKILL.md) | `/progress-report` | 研究進捗報告書の作成を支援する |

### 研究管理系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [採択後キックオフ支援](skills/award-kickoff/SKILL.md) | `/award-kickoff` | 採択後のFA連絡、経理、契約、倫理、DMP、共同機関の初期確認を整理する |
| [予算執行管理](skills/budget-execution/SKILL.md) | `/budget-execution` | 研究費の発注前確認、年度末処理、証憑整理を支援する |
| [研究データ管理・DMP 作成支援](skills/research-data-management/SKILL.md) | `/research-data-management` | DMP の作成とデータ公開・保管方針の整理を支援する |
| [研究プロジェクト会議運営](skills/project-meeting-ops/SKILL.md) | `/project-meeting-ops` | 定例会議、日程調整、アジェンダ、議事録、ToDoフォローを運営する |
| [研究プロジェクト進捗管理](skills/project-progress-tracker/SKILL.md) | `/project-progress-tracker` | マイルストーン、課題、成果、リスクを月次で追跡する |
| [研究費申請 内部締切トラッカー](skills/internal-deadline-tracker/SKILL.md) | `/internal-deadline-tracker` | 外部締切から学内締切、部局承認、e-Rad承認を逆算する |
| [研究プロジェクト関係者調整](skills/stakeholder-coordination/SKILL.md) | `/stakeholder-coordination` | 学内外関係者、合意事項、未決事項、確認依頼を整理する |
| [研究成果台帳管理](skills/research-output-registry/SKILL.md) | `/research-output-registry` | 論文、学会、特許、データ、広報、受賞を成果台帳として整理する |
| [研究プロジェクト終了処理](skills/project-closeout/SKILL.md) | `/project-closeout` | 最終報告、予算終了、成果公開、データ保存、次期資金への接続を整理する |

### 専門部署連携系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [共同研究・契約インテーク](skills/collaboration-contract-intake/SKILL.md) | `/collaboration-contract-intake` | NDA、共同研究、受託、データ提供、MTA、再委託の初期論点を整理する |
| [研究広報支援](skills/research-pr-support/SKILL.md) | `/research-pr-support` | プレスリリース、研究紹介、Web掲載、取材対応、英文概要を支援する |
| [知財相談トリアージ](skills/ip-disclosure-triage/SKILL.md) | `/ip-disclosure-triage` | 発明相談、論文投稿前確認、共同出願、ライセンス可能性を初期整理する |
| [安全保障輸出管理インテーク](skills/export-control-intake/SKILL.md) | `/export-control-intake` | 技術提供、海外送付、外国機関連携、留学生・外国研究者受入の確認票を作る |
| [研究安全管理インテーク](skills/lab-safety-intake/SKILL.md) | `/lab-safety-intake` | 薬品、遺伝子組換え、病原体、放射線、動物実験等の安全確認を整理する |
| [国際連携ロジスティクス支援](skills/international-collaboration-logistics/SKILL.md) | `/international-collaboration-logistics` | 国際共同研究、招聘、MOU、調印式、海外機関連絡を運営する |

### 分析系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [研究評価指標分析](skills/research-metrics/SKILL.md) | `/research-metrics` | 論文数・被引用数・h-index 等を収集・分析する |
| [研究戦略ブリーフ作成](skills/research-strategy-brief/SKILL.md) | `/research-strategy-brief` | 政策動向、研究力分析、公募情報、学内資源を統合した戦略メモを作る |

### ユーティリティ

| スキル | コマンド | 説明 |
|--------|----------|------|
| [e-Rad 操作ガイド](skills/era-guide/SKILL.md) | `/era-guide` | e-Rad の使い方・トラブルシューティング |


### イベント運営系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [オンライン勉強会 企画・運営](skills/event-organizer/SKILL.md) | `/event-organizer` | Luma＋Zoom（無料）でオンライン勉強会を企画・運営する |

### メタスキル

| スキル | コマンド | 説明 |
|--------|----------|------|
| [RA スキルジェネレーター](skills/create-ra-skill/SKILL.md) | `/create-ra-skill` | 自分の RA 知見を SKILL.md に変換する |

## 実務適合性チェック

このリポジトリのスキルは、MEXT / CRAMS の URA スキル標準と国内大学の研究支援実務を基準に監査しています。

- [RA Skills 実務適合性監査](docs/skill-audit.md)
- [RA / URA 業務地図](docs/ra-work-map.md)
- [RA Skills ロードマップ](docs/skill-roadmap.md)
- [RAスキル実務サーベイ 2026](docs/ra-skill-field-survey-2026.md)
- [RAスキル試行テスト結果](docs/skill-test-results.md)

## モデルケース

複数のスキルをつないで、若手PIの外部資金応募支援を試した例です。

- [若手PIのJSTさきがけ応募支援](examples/model-case-pre-award-jst-presto.md)

## 使い方

### 前提条件

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) がインストールされていること

### 特定のスキルを使う

```bash
# リポジトリをクローン
git clone https://github.com/t46/ra-skills.git

# 特定のスキルを読み込んで Claude Code を起動
claude --add-dir ./ra-skills/skills/grant-proposal-review

# スキルを実行
# Claude Code 内で以下を入力:
> /grant-proposal-review
```

### 全スキルを使う

```bash
# 全スキルディレクトリを一括で読み込み
claude --add-dir ./ra-skills/skills/policy-monitor \
       --add-dir ./ra-skills/skills/funding-search \
       --add-dir ./ra-skills/skills/grant-proposal-review \
       --add-dir ./ra-skills/skills/budget-planning \
       --add-dir ./ra-skills/skills/award-kickoff \
       --add-dir ./ra-skills/skills/budget-execution \
       --add-dir ./ra-skills/skills/project-meeting-ops \
       --add-dir ./ra-skills/skills/project-progress-tracker \
       --add-dir ./ra-skills/skills/internal-deadline-tracker \
       --add-dir ./ra-skills/skills/stakeholder-coordination \
       --add-dir ./ra-skills/skills/research-output-registry \
       --add-dir ./ra-skills/skills/project-closeout \
       --add-dir ./ra-skills/skills/collaboration-contract-intake \
       --add-dir ./ra-skills/skills/research-pr-support \
       --add-dir ./ra-skills/skills/ip-disclosure-triage \
       --add-dir ./ra-skills/skills/export-control-intake \
       --add-dir ./ra-skills/skills/lab-safety-intake \
       --add-dir ./ra-skills/skills/international-collaboration-logistics \
       --add-dir ./ra-skills/skills/ethics-review-support \
       --add-dir ./ra-skills/skills/progress-report \
       --add-dir ./ra-skills/skills/research-data-management \
       --add-dir ./ra-skills/skills/research-metrics \
       --add-dir ./ra-skills/skills/research-strategy-brief \
       --add-dir ./ra-skills/skills/era-guide \
       --add-dir ./ra-skills/skills/event-organizer \
       --add-dir ./ra-skills/skills/create-ra-skill
```

## 自分のスキルを追加する

RA 業務の知見をスキルとして共有しませんか？

### 方法 1: スキルジェネレーターを使う（推奨）

```bash
claude --add-dir ./ra-skills/skills/create-ra-skill
# Claude Code 内で:
> /create-ra-skill
```

対話的にヒアリングが行われ、あなたの知見が SKILL.md フォーマットに変換されます。

### 方法 2: 手動で作成する

1. このリポジトリを fork する
2. `skills/{skill-name}/SKILL.md` を作成する（[skill-template.md](skill-template.md) と [CONTRIBUTING.md](CONTRIBUTING.md) 参照）
3. Pull Request を作成する

詳しくは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

## 想定するスキルの例

まだ作られていないスキルのアイデア:

- **利益相反・COI確認** — 企業連携、兼業、寄附、研究費の利益相反論点整理
- **研究インテグリティ確認** — 海外機関、兼業、資金源、所属・役職の確認支援
- **サブアワード管理** — 再委託、分担機関、請求、成果物、監査対応の支援
- **人件費・エフォート管理** — RA、研究員、兼務、エフォート、雇用終了の管理

## ライセンス

MIT License
