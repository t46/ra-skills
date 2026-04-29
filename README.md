# RA Skills — リサーチアドミニストレーションのスキルハブ

大学・研究機関のリサーチアドミニストレーション（RA / URA）業務の知見を、[Claude Code](https://docs.anthropic.com/en/docs/claude-code) のスキル（SKILL.md）として構造化・共有するリポジトリです。

## 背景

リサーチアドミニストレーターの知見は各現場に属人化しており、組織を越えて共有する仕組みが乏しい状況です。このリポジトリでは、RA 業務のノウハウを Claude Code のスキルフォーマットで記述し、エージェントが実行可能な形で蓄積・共有します。

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

### 報告書系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [進捗報告書作成支援](skills/progress-report/SKILL.md) | `/progress-report` | 研究進捗報告書の作成を支援する |

### 分析系

| スキル | コマンド | 説明 |
|--------|----------|------|
| [研究評価指標分析](skills/research-metrics/SKILL.md) | `/research-metrics` | 論文数・被引用数・h-index 等を収集・分析する |

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
       --add-dir ./ra-skills/skills/progress-report \
       --add-dir ./ra-skills/skills/research-metrics \
       --add-dir ./ra-skills/skills/era-guide \
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
2. `skills/{skill-name}/SKILL.md` を作成する（[CONTRIBUTING.md](CONTRIBUTING.md) 参照）
3. Pull Request を作成する

詳しくは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

## 想定するスキルの例

まだ作られていないスキルのアイデア:

- **研究倫理審査支援** — IRB・倫理委員会への申請支援
- **産学連携コーディネート** — 共同研究契約、知財管理の支援
- **研究データ管理** — データ管理計画（DMP）の策定支援
- **国際共同研究支援** — 海外機関との契約・渡航手続きの支援
- **研究広報支援** — プレスリリース作成、研究成果の発信支援
- **予算執行管理** — 研究費の適正執行チェック、年度末処理
- **知財管理** — 特許出願・ライセンス管理の支援
- **安全保障輸出管理** — 該非判定、輸出許可申請の支援

## ライセンス

MIT License
