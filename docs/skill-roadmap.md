# RA Skills ロードマップ

作成日: 2026-05-18

## 方針

このロードマップは、既存スキルを「それっぽい文書」から「実務で渡せる成果物を作るスキル」へ引き上げるためのもの。

優先順位は以下で決める。

1. 研究者の事務負担を直接減らす。
2. MEXT / CRAMS の URA 22 業務で欠けている中核業務を埋める。
3. Claude Code が具体的な成果物を作れる。
4. 制度判断を断定せず、確認先と未決事項を整理できる。

## Phase 1: 既存スキルの安全化

目的:

- 既存 12 スキルを、公式情報確認・機関差・要確認事項を扱える形にする。

対象:

- `era-guide`
- `grant-proposal-review`
- `budget-planning`
- `funding-search`
- `budget-execution`
- `ethics-review-support`
- `research-data-management`

実装内容:

- 各スキルの冒頭に「最新公式情報を確認する」手順を追加。
- 出力に `確認先`, `確認した根拠`, `要確認事項`, `次アクション` を標準化。
- 固定値として危険な UI 名、時間、ファイル上限、配点、費目説明は例示扱いに変更。
- 公募要領、所属機関規程、FA 公式、専門部署確認を分ける。

受け入れ条件:

- `gh skill publish --dry-run` が warning だけで通る。
- すべての制度依存スキルが「根拠未確認なら断定しない」と明記している。
- 監査表で C 判定の skill が B 以上相当に改善される。

## Phase 2: 会議・予定・進捗管理を追加

目的:

- RA/URA が実際に担う、日程調整、定例会議、進捗管理、タスク追跡をカバーする。

状態: 2026-05-18 に初版追加済み。今後は実務者レビューと既存スキル連携を進める。

追加するスキル:

### `project-meeting-ops`

対象業務:

- ポストアワード: プロジェクトの進捗管理。
- 関連専門: イベント開催関連のうち会議運営。

成果物:

- 日程調整文面
- アジェンダ
- 議事録
- ToDo 一覧
- 次回会議案
- 欠席者共有メモ

必須入力:

- 会議目的
- 参加者
- 候補日時
- 決めたい事項
- 前回 ToDo

### `project-progress-tracker`

対象業務:

- ポストアワード: プロジェクトの進捗管理、評価対応、報告書作成。

成果物:

- 月次進捗サマリー
- マイルストーン表
- リスク・課題一覧
- 成果登録表
- PI 向け確認事項

### `internal-deadline-tracker`

対象業務:

- プレアワード: 外部資金情報収集、申請資料作成支援。

成果物:

- 公式締切、学内締切、部局締切、e-Rad 承認期限の逆算表
- 担当者別 ToDo
- リマインド文面

### `stakeholder-coordination`

対象業務:

- プレアワード / ポストアワード: 内部折衝、対外折衝。

成果物:

- 関係者マップ
- 合意事項・未決事項リスト
- 確認依頼メール
- 相談先リスト

受け入れ条件:

- 4 スキルすべてが、予定調整と会議運営を単なるメール文面で終わらせず、決定事項・責任者・期限を出力する。
- `progress-report` が `project-progress-tracker` の成果物を入力として使える。

## Phase 3: 専門部署連携スキルを追加

目的:

- RA が単独判断してはいけない領域を、専門部署へ渡せる論点整理として支援する。

追加するスキル:

- `collaboration-contract-intake`: NDA、共同研究、受託研究、データ提供契約の論点整理。
- `ip-disclosure-triage`: 発明相談、論文投稿前確認、共同出願、ライセンスの初期整理。
- `export-control-intake`: 貨物、技術、相手先、用途、海外送付、留学生・外国研究者受入の確認票作成。
- `research-pr-support`: プレスリリース、研究紹介、取材対応、英文発信の初稿と確認フロー。
- `lab-safety-intake`: 薬品、遺伝子組換え、病原体、放射線など安全管理の初期確認。

受け入れ条件:

- どのスキルも最終判断を代行しない。
- 出力は「専門部署へ確認するための論点整理」と「確認依頼文」を中心にする。
- 法務、知財、輸出管理、倫理、会計、情報セキュリティを混ぜない。

## Phase 4: 組織戦略・成果展開

目的:

- 個別研究者支援から、部局・機関の研究力強化へ拡張する。

追加するスキル:

- `research-strategy-brief`: 政策、研究力、公募、学内資源を統合した戦略メモ。
- `institutional-research-profile`: 部局・研究グループの研究力分析。
- `international-collaboration-logistics`: 海外機関連絡、招聘、調印式、国際共同研究運営。
- `project-closeout`: 最終報告、予算終了、成果公開、DMP、知財、広報、次期公募への橋渡し。

受け入れ条件:

- `policy-monitor`, `research-metrics`, `funding-search` の出力が `research-strategy-brief` に流れる。
- `project-closeout` が `progress-report`, `research-data-management`, `research-pr-support`, `ip-disclosure-triage` と連携できる。

## スキル品質ゲート

新規・改修スキルは、以下を満たす。

- Frontmatter に `name`, `description`, `user_invocable` がある。
- `name` とディレクトリ名が一致する。
- `What This Does`, `Required Inputs`, `What It Produces`, `手順`, `品質基準`, `Available Tools` がある。
- 制度依存の判断は、公式ソース確認を前提にする。
- 出力に、少なくとも `根拠`, `確認先`, `未決事項`, `次アクション` のいずれかを含める。
- `gh skill publish --dry-run` で fatal error がない。

## 検証コマンド

```bash
gh skill publish --dry-run
```

## 試行テスト

- [RAスキル試行テスト結果](skill-test-results.md) に、追加した4スキルを架空のJST系公募準備・採択後月次会議に適用した結果を記録した。

現状の dry-run 結果:

- publish validation は通過。
- active tag protection rulesets がない warning が出る。

次の改善:

- GitHub 側で release tag protection を検討する。
