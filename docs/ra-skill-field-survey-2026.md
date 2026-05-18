---
title: RAスキル実務サーベイ 2026
date: 2026-05-18
---

# RAスキル実務サーベイ 2026

## 目的

このサーベイは、`ra-skills` の各スキルが日本の大学・研究機関における Research Administration / URA 業務の実態に合っているかを点検し、次に追加・改修すべきスキルを特定するためのもの。

結論として、現行リポジトリは「公募検索、申請書、予算、報告書、DMP」などの文書・情報処理には入口がある一方で、RAが日常的に担う「調整、会議、進捗、締切、関係者管理」が不足していた。今回、まず中核運営系の4スキルを追加した。

## 参照した実務フレーム

### 国内: URAスキル標準

文部科学省・URAスキル標準系の整理では、URA業務は大きく以下の4領域に分かれる。

- 研究戦略推進支援
- プレアワード
- ポストアワード
- 関連専門業務

この枠組みでは、申請資料作成や報告書だけでなく、政策情報分析、研究力分析、研究戦略、内部折衝、対外折衝、プロジェクト進捗管理、評価対応、産学連携、知財、国際、広報、安全、倫理・コンプライアンスが含まれる。

### 海外: Research Administrationの共通像

NCURA / SRAI 等の research administration では、研究資金のライフサイクル全体が対象になる。大きくは以下の流れで、pre-award と post-award の接続が重視される。

- Funding opportunity discovery
- Proposal development
- Budget and compliance review
- Award setup
- Project, finance, and effort management
- Subaward / collaboration management
- Reporting and closeout
- Compliance, integrity, export control, data, and human subjects support

国内URA標準と海外RA実務の共通点は、どちらも「研究者の書類作成代行」ではなく、研究プロジェクトを成立・継続・終了させるための運営機能である点にある。

## 現行スキルのカバレッジ再評価

| 領域 | 現行スキル | 評価 | 不足 |
|------|------------|------|------|
| 政策・戦略 | `policy-monitor`, `research-metrics` | 入口あり | 部局戦略、研究力プロファイル、政策から施策への変換 |
| 外部資金探索 | `funding-search` | 入口あり | 内部締切、推薦枠、研究者別配信、応募可否の証跡 |
| 申請書 | `grant-proposal-review`, `budget-planning` | 入口あり | 公募別審査観点、ヒアリング、チーム形成 |
| 採択後運営 | `budget-execution`, `progress-report`, `research-data-management` | 部分的 | キックオフ、会議、月次進捗、成果台帳、評価対応 |
| 調整・折衝 | なし | 大きな穴 | 学内外関係者、合意事項、未決事項、専門部署確認 |
| 専門部署連携 | `ethics-review-support`, `research-data-management` | 部分的 | 契約、知財、輸出管理、安全、COI、情報セキュリティ |
| 広報・イベント | `event-organizer` | 部分的 | 研究PR、成果報告会、外部評価会、展示会 |
| 終了処理 | なし | 大きな穴 | closeout、最終報告、成果公開、契約・予算終了、次期資金 |

## 今足りていない中核スキル

### 1. 日程調整・会議運営

RA業務では、会議を設定し、アジェンダを作り、議事録を残し、ToDoを追う作業が多い。現行スキルは文書作成に寄っており、会議後に動ける状態を作るスキルがなかった。

対応:

- `project-meeting-ops` を追加。
- 日程調整、アジェンダ、議事録、欠席者共有、フォローアップまでを一体化。

### 2. 月次進捗管理

進捗報告書は、日常的な進捗・成果・リスク管理の結果として作られるべきである。現行の `progress-report` は報告書作成時点の支援としては有用だが、平時のログがない。

対応:

- `project-progress-tracker` を追加。
- マイルストーン、リスク、成果登録表、PI確認事項を月次で作る。
- `progress-report` に渡せる出力を明示。

### 3. 内部締切管理

研究費申請では、FAの締切より前に学内締切、部局締切、推薦、e-Rad承認がある。現行の `funding-search` は公募発見に寄っており、申請準備の実行計画が弱かった。

対応:

- `internal-deadline-tracker` を追加。
- 外部締切、学内締切、部局締切、機関承認、共同機関締切を分ける。

### 4. 関係者調整

プレアワードでもポストアワードでも、研究者、部局、本部、専門部署、共同機関、FAとの調整が中心になる。現行リポジトリには、合意事項・未決事項・確認先を管理するスキルがなかった。

対応:

- `stakeholder-coordination` を追加。
- 関係者マップ、合意事項、未決事項、確認依頼文、エスカレーションを成果物にする。

## 既存スキルで浅い部分

### `grant-proposal-review`

課題:

- 公募別の審査観点確認が弱い。
- 「一般的によい申請書」のレビューに寄りやすい。

改修方針:

- 最初に公募要領、審査要領、様式、過去採択例を読む手順を必須化。
- KAKENHI / JST / AMED / foundation などの mode を分ける。

### `budget-planning`

課題:

- 申請時予算と採択後執行の論点が混ざりやすい。
- 制度・年度・機関差がある費目説明を固定値として読めてしまう。

改修方針:

- 申請時予算に限定し、採択後は `budget-execution` へ渡す。
- FAルールと所属機関ルールを出力で分離する。

### `era-guide`

課題:

- UI、受付時間、ファイル制限などが変わりやすい。

改修方針:

- 公式マニュアル・公募要領・所属機関通知の確認を第一手順にする。
- 操作名の断定を避け、「確認すべき画面・項目」に寄せる。

### `ethics-review-support`

課題:

- 生命・医学系、社会科学系、教育実践、二次データ利用の差が大きい。
- 倫理審査、個人情報、契約、情報セキュリティが混ざりやすい。

改修方針:

- 「要否判定」よりも「倫理審査窓口へ確認する論点整理」を中心にする。

## 次に作るべきスキル

優先度A:

- `award-kickoff`: 採択後のFA、経理、契約、倫理、DMP、共同機関の初期整理。
- `research-output-registry`: 論文、学会、特許、データ、広報、受賞の成果台帳。
- `collaboration-contract-intake`: NDA、共同研究、受託、データ提供契約の初期論点整理。
- `research-pr-support`: プレスリリース、研究紹介、取材対応、広報確認。

優先度B:

- `ip-disclosure-triage`: 発明相談、論文投稿前確認、共同出願。
- `export-control-intake`: 技術提供、海外送付、相手先、用途確認。
- `lab-safety-intake`: 薬品、遺伝子組換え、放射線、病原体等の初期確認。
- `project-closeout`: 最終報告、成果公開、データ保存、予算・契約終了。

## 品質ゲート

今後のスキルは、以下を満たすまで「実務投入可」としない。

- 公式情報・所属機関ルール・専門部署確認を区別している。
- RAが単独判断してはいけない領域を断定しない。
- 成果物に、担当者、期限、確認先、未決事項が含まれる。
- 研究者に渡せる文面または表の形で出力できる。
- 別スキルへ引き渡せる入力・出力が明示されている。

## 参照ソース

- [文部科学省: リサーチ・アドミニストレーターを育成・確保するシステムの整備](https://www.mext.go.jp/a_menu/jinzai/ura/)
- [文部科学省: URAスキル標準の概要](https://www.mext.go.jp/component/a_menu/science/detail/__icsFiles/afieldfile/2016/06/15/1371319_006.pdf)
- [CRAMS: スキルカード](https://www.crams.or.jp/skillcard/)
- [RA協議会: 業務内容](https://www.rman.jp/ura/business-content.html)
- [NCURA: Life Cycle of the Award](https://www.ncura.edu/Education/LifeCycleoftheAward.aspx)
- [SRAI: Professional Development Framework](https://framework.srainternational.org/)
