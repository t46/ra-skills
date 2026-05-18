# RA / URA 業務地図

監査日: 2026-05-18

## 基本理解

このリポジトリでの RA は Research Assistant ではなく、大学・研究機関における Research Administration / University Research Administrator の実務を指す。

MEXT / CRAMS の URA スキル標準では、URA 業務は以下の 4 区分、22 業務で整理される。

- 研究戦略推進支援業務: 3
- プレアワード業務: 5
- ポストアワード業務: 5
- 関連専門業務: 9

この 22 業務は、研究者の「書類作成を手伝う」だけではなく、政策情報・研究力分析、外部資金獲得、プロジェクト形成、内部・対外折衝、採択後運営、予算、評価、報告、知財、国際、広報、イベント、安全、倫理・コンプライアンスまで含む。

## URA 22 業務と現行カバレッジ

| 区分 | 業務 | 現行 skill | カバレッジ | Gap |
|---|---|---|---:|---|
| 研究戦略推進 | 政策情報等の調査・分析 | `policy-monitor` | Medium | 学内展開、定期 digest、データベース化 |
| 研究戦略推進 | 研究力の調査・分析 | `research-metrics` | Medium | 機関 IR、部局戦略、研究者 DB 整備 |
| 研究戦略推進 | 研究戦略策定 | なし | Low | 研究拠点形成、部局調整、施策立案 |
| プレアワード | プロジェクト企画立案支援 | 一部 `funding-search`, `grant-proposal-review` | Low | 研究チーム組成、企画案作成、採択結果分析 |
| プレアワード | 外部資金情報収集 | `funding-search` | Medium | 機関内公募、件数制限、研究者別配信 |
| プレアワード | プロジェクト企画のための内部折衝活動 | なし | None | 学内研究者・部局・事務局との調整 |
| プレアワード | プロジェクト実施のための対外折衝・調整 | なし | None | 共同機関、企業、FA、NDA、事業計画調整 |
| プレアワード | 申請資料作成支援 | `grant-proposal-review`, `budget-planning` | Medium | 公募別様式、ヒアリング資料、内部締切管理 |
| ポストアワード | プロジェクト実施のための対外折衝・調整 | 一部 `budget-execution` | Low | 採択後 FA 調整、共同機関調整、契約変更 |
| ポストアワード | プロジェクトの進捗管理 | なし | None | 定例会議、課題管理、成果管理、予定調整 |
| ポストアワード | プロジェクト予算管理 | `budget-execution` | Medium | 資金種別別、配分案、内部監査、執行状況 tracking |
| ポストアワード | プロジェクト評価対応関連業務 | 一部 `progress-report` | Low | 外部評価委員会、ヒアリング、評価資料作成 |
| ポストアワード | 報告書作成業務 | `progress-report` | Medium | 日常進捗ログからの報告書生成 |
| 関連専門 | 教育プロジェクト支援 | なし | None | 大学院教育、博士人材、教育研究連携 |
| 関連専門 | 国際連携支援 | なし | None | 国際共同研究、招聘、調印式、海外機関連絡 |
| 関連専門 | 産学連携支援 | なし | None | 企業探索、共同研究、NDA、受託研究 |
| 関連専門 | 知財関連 | なし | None | 発明相談、出願、共同出願、ライセンス |
| 関連専門 | 研究機関としての発信力強化推進 | 一部 `event-organizer` | Low | 研究シーズ集、Web、広報戦略 |
| 関連専門 | 研究広報関連 | 一部 `event-organizer` | Low | プレスリリース、取材、英文発信 |
| 関連専門 | イベント開催関連 | `event-organizer` | Medium | 成果報告会、展示会、評価委員会イベント |
| 関連専門 | 安全管理関連 | なし | None | 薬品、遺伝子組換え、放射線、事故対応 |
| 関連専門 | 倫理・コンプライアンス関連 | `ethics-review-support`, 一部 `research-data-management` | Medium | 研究不正、利益相反、個人情報、輸出管理 |

## 実務 lifecycle

### 1. 戦略・情報収集

目的:

- 政策、FA、公募、学内研究力、部局戦略を見て、研究者や組織が動くべき機会を見つける。

必要な skill:

- `policy-monitor`
- `research-metrics`
- `funding-intelligence-digest`
- `research-strategy-brief`

### 2. プレアワード

目的:

- 公募を探すだけでなく、研究チーム、学内推薦、共同機関、申請資料、予算、ヒアリング資料を揃える。

必要な skill:

- `funding-search`
- `grant-proposal-review`
- `budget-planning`
- `internal-deadline-tracker`
- `proposal-team-formation`
- `stakeholder-coordination`

### 3. 採択後キックオフ

目的:

- 採択後に FA、共同機関、経理、契約、知財、倫理、安全、研究者の関係を整理し、運営基盤を作る。

必要な skill:

- `award-kickoff`
- `collaboration-contract-intake`
- `project-governance-setup`
- `budget-execution`

### 4. ポストアワード運営

目的:

- 研究プロジェクトを進める。定例会議、予定調整、課題管理、進捗、成果、予算、評価、報告を継続管理する。

必要な skill:

- `project-meeting-ops`
- `project-progress-tracker`
- `budget-execution`
- `research-output-registry`
- `evaluation-board-ops`
- `progress-report`

### 5. 関連専門業務

目的:

- プロジェクトのリスクと成果活用を支える。知財、契約、国際、広報、イベント、安全、倫理、DMP を専門部署と連携して進める。

必要な skill:

- `ethics-review-support`
- `research-data-management`
- `ip-disclosure-triage`
- `export-control-intake`
- `research-pr-support`
- `event-organizer`
- `international-collaboration-logistics`
- `lab-safety-intake`

### 6. 終了・成果展開

目的:

- 報告、評価、成果公開、知財、データ公開、次の資金獲得へつなげる。

必要な skill:

- `project-closeout`
- `progress-report`
- `research-output-registry`
- `research-pr-support`
- `research-data-management`
- `next-funding-bridge`

## 現行 repo の強み

- プレアワードの入口である公募検索、申請書レビュー、予算計画が揃っている。
- ポストアワードの一部である報告書、予算執行、DMP がある。
- イベント運営は成果物が具体的で、研究広報・コミュニティ形成の入口になる。
- メタスキル `create-ra-skill` により、現場知を追加しやすい。

## 現行 repo の構造的な不足

- **会議・予定・進捗管理がない**: MEXT スキル標準では、定例ミーティング運営、進捗状況の把握・調整、成果管理が明示される。現行 repo ではほぼ未対応。
- **内部折衝・対外折衝がない**: プレアワード、ポストアワードの両方に折衝・調整があるが、現行は文書作成中心。
- **契約・知財・産学連携がない**: 国内大学の URA 実務では共同研究、NDA、発明相談、共同出願、ライセンスが重要。
- **安全管理・輸出管理がない**: 先端技術・国際共同研究・留学生受入・海外送付を扱う研究では必須。
- **研究広報が弱い**: プレスリリース、研究シーズ、英文発信、Web 掲載、取材対応が独立していない。

## 優先的に増やすべきスキル

Tier 0: すぐ必要

- `project-meeting-ops`: 日程調整、アジェンダ、議事録、ToDo、フォローアップ。
- `project-progress-tracker`: マイルストーン、課題、成果、リスクを月次で追跡。
- `internal-deadline-tracker`: 公募・機関内締切・推薦・承認・e-Rad を逆算。
- `stakeholder-coordination`: 学内外関係者、確認先、合意事項、未決事項を管理。

Tier 1: 専門部署連携が必要

- `collaboration-contract-intake`: NDA、共同研究、受託研究、データ提供契約の初期論点整理。
- `ip-disclosure-triage`: 発明相談、論文投稿前確認、共同出願論点整理。
- `export-control-intake`: 貨物・技術・相手先・用途・海外送付の確認票作成。
- `research-pr-support`: プレスリリース、研究紹介、成果広報の初稿と確認フロー。

Tier 2: 組織戦略・高度実務

- `research-strategy-brief`: 政策・研究力・公募を統合した部局向け戦略メモ。
- `institutional-research-profile`: 部局・研究グループの研究力分析。
- `international-collaboration-logistics`: 招聘、MOU、調印式、国際共同研究の運営支援。
- `project-closeout`: 最終報告、成果公開、データ保存、契約・予算終了処理。

## 参照ソース

- [CRAMS: スキルカード](https://www.crams.or.jp/skillcard/)
- [文部科学省: URA スキル標準の概要 PDF](https://www.mext.go.jp/component/a_menu/science/detail/__icsFiles/afieldfile/2016/06/15/1371319_006.pdf)
- [RA協議会: 業務内容](https://www.rman.jp/ura/business-content.html)
- [東京科学大学: URA 業務等に関する規則](https://www.somuka.titech.ac.jp/reiki_int/reiki_honbun/x385RG00001779.html)
- [東京都立大学: 総合研究推進機構の研究支援一覧](https://research-miyacology.tmu.ac.jp/research/tmuresearchsupport/)
- [関西大学: URA 研究推進体制](https://www.kansai-u.ac.jp/Kenkyushien/about/ura.html)
