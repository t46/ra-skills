# Contributing ガイドライン

RA Skills への貢献に感謝します。このガイドラインでは、新しいスキルの追加方法と PR のルールを説明します。

## スキルを追加する手順

### 1. リポジトリを fork & clone

```bash
# GitHub 上で fork してから:
git clone https://github.com/{your-username}/ra-skills.git
cd ra-skills
```

### 2. ブランチを作成

```bash
git checkout -b add-skill/{skill-name}
```

### 3. スキルファイルを作成

`skills/{skill-name}/SKILL.md` を作成します。

#### スキルジェネレーターを使う場合（推奨）

```bash
claude --add-dir ./skills/create-ra-skill
# Claude Code 内で:
> /create-ra-skill
```

対話に答えるだけで SKILL.md が生成されます。

#### 手動で作成する場合

[`skill-template.md`](skill-template.md) をコピーして、対象業務に合わせて編集してください。

```bash
mkdir -p skills/{skill-name}
cp skill-template.md skills/{skill-name}/SKILL.md
```

テンプレートは最小構成です。制度・規程・審査・契約など、判断が必要な業務では `## 判断基準` と `## よくあるミスと対策` をできるだけ具体化してください。

### 4. PR を作成

```bash
git add skills/{skill-name}/SKILL.md
git commit -m "add: {skill-name} スキルを追加"
git push origin add-skill/{skill-name}
```

GitHub 上で Pull Request を作成してください。

## SKILL.md フォーマット

すべてのスキルは以下のフォーマットに従ってください。

### Frontmatter（必須）

```yaml
---
name: skill-name          # kebab-case、英語
description: 1行の説明     # 日本語 OK
user_invocable: true      # ユーザーが直接呼び出せるスキルは true
---
```

### 本文の構造（必須セクション）

```markdown
# スキルの日本語名

## What This Does
何をするスキルかの説明。
- 対象ユーザー（研究者、事務担当者、URA 等）
- 解決する課題
- 期待される効果

## Required Inputs
スキルの実行に必要な入力情報。
- **必須入力1**: 説明
- **必須入力2**: 説明
- **任意入力**（任意）: 説明

## What It Produces
スキルが出力するもの。
1. 成果物1の説明
2. 成果物2の説明

## 手順
具体的な実行手順。ステップバイステップで記述する。

### 1. ステップ名
具体的な手順の説明。

### 2. ステップ名
具体的な手順の説明。

## 品質基準
スキルの出力が満たすべき品質の条件。
- 基準1
- 基準2

## Available Tools
スキルが使用するツール。
- **Read** / **Write**: ファイルの読み書き
- **WebSearch** / **WebFetch**: Web 検索・取得
- **Bash**: コマンド実行
```

### 本文の構造（任意セクション）

必要に応じて以下のセクションを追加できます:

- `## 判断基準` — 手順中の判断ルールを表やリストで記述
- `## よくあるミスと対策` — 注意すべきポイント
- `## 参照情報` — 関連するマニュアル、規程、Web サイト

## 命名規則

- **スキル名（name）**: kebab-case、英語（例: `budget-planning`, `grant-proposal-review`）
- **ディレクトリ**: `skills/{skill-name}/`
- **ファイル名**: 必ず `SKILL.md`（大文字）

## PR ルール

### ブランチ名

```
add-skill/{skill-name}     # 新規スキルの追加
update-skill/{skill-name}  # 既存スキルの更新
fix/{description}           # バグ修正・誤記修正
```

### コミットメッセージ

```
add: {skill-name} スキルを追加
update: {skill-name} の手順を改善
fix: {skill-name} の誤記を修正
```

### PR の説明に含めること

1. **スキルの概要**: 何をするスキルか（1-2行）
2. **背景**: なぜこのスキルが必要か
3. **テスト方法**: どのように動作確認したか
4. **対象ユーザー**: 誰が使うことを想定しているか

### レビュー基準

PR は以下の基準でレビューされます:

| 基準 | 説明 |
|------|------|
| フォーマット準拠 | SKILL.md フォーマットに従っているか |
| 具体性 | 手順が初心者でも再現可能なレベルで書かれているか |
| 正確性 | 制度やルールの記述が正確か |
| 実用性 | Claude Code で実行した際に有用な結果が得られるか |
| 品質基準 | 品質基準セクションが適切に定義されているか |
| 不確実性の扱い | 機関差・年度差・制度変更の可能性を明記しているか |

## よくある質問

### Q: 英語で書いてもいいですか？

A: 現時点では日本の RA 業務を対象としているため、日本語を推奨します。国際的な RA スキル（NIH グラント申請等）の場合は英語でも構いません。

### Q: 既存のスキルを改善したい場合は？

A: `update-skill/{skill-name}` ブランチを作成し、改善内容を PR で提出してください。既存の手順を大幅に変更する場合は、Issue で事前に議論することを推奨します。

### Q: 特定の大学固有のルールを含めてもいいですか？

A: 汎用的なスキルを優先してください。特定機関のルールを含める場合は、「機関によって異なる場合があります」等の注記を付け、汎用部分と機関固有部分を明確に分離してください。
