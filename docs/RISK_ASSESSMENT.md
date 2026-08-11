# ISO 42001 & EU AI Act Risk Assessment Report / 風險評估報告
**System Name / 系統名稱:** ClauseDiff 安心對  
**Classification / 系統分類:** Low Risk / General Purpose Utility (Zero AI Autonomy) / 低風險通用工具 (無 AI 自主性)  
**Framework Alignment / 框架對齊:** ISO/IEC 42001 (AIMS), EU AI Act (Article 9), ISO/IEC 27001  

---

## 1. System Context & Risk Profile / 系統背景與風險輪廓
ClauseDiff is a 100% Client-Side Web Application designed for text comparison. The application runs entirely within local browser memory (RAM) with zero backend API connectivity or LLM data ingestion.  
ClauseDiff 是一款 100% 本地純前端文字比對工具。所有運算完全在瀏覽器記憶體（RAM）內進行，無任何後端 API 連線或大模型（LLM）數據餵入。

## 2. Risk Matrix & Mitigations / 風險矩陣與控制措施

| Risk ID | Category / 類別 | Risk Description / 風險描述 | Likelihood | Impact | Mitigating Controls / 緩解控制措施 | Residual Risk |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | Data Leakage / 數據外洩 | Confidential text uploaded to third-party AI models / 機密文字被上傳至第三方 AI 模型 | High | Critical | **Zero Transit/Storage Architecture**: 100% client-side execution. Zero API calls.<br>**零傳輸/零儲存架構**：100% 本地運算，無任何 API 外連。 | **Negligible / 極低** |
| **R-02** | Hallucination / AI 幻覺 | System generating fabricated contract differences / 系統產生虛假的比對結果 | Medium | Medium | **Deterministic Engine**: Powered by `jsdiff` (exact string comparison) instead of probabilistic LLMs.<br>**確定性引擎**：採用 `jsdiff` 精確字串比對，非機率性 LLM。 | **Low / 低** |
| **R-03** | Supply Chain / 供應鏈風險 | Compromise of external CDN resources / 外部 CDN 套件遭篡改 | Low | High | Use Subresource Integrity (SRI) and PWA Service Worker local caching.<br>採用 SRI 驗證與 PWA 本地快取機制。 | **Low / 低** |
| **R-04** | Availability / 可用性 | Network outage or offline environment / 斷網或離線環境無法使用 | Medium | Low | **Air-Gapped Operation**: Service Worker caches assets for offline/Flight Mode use.<br>**實體隔離運算**：支援 PWA 完全斷網/飛航模式離線操作。 | **Negligible / 極低** |

## 3. Governance Conclusion / 治理結論
Given its zero-data-retention architecture and rule-based diff engine, ClauseDiff poses **minimal to no compliance risk** under the EU AI Act and ISO 42001 frameworks.  
鑑於其「零數據留存」架構與規則導向比對引擎，ClauseDiff 在歐盟 AI 法案與 ISO 42001 框架下屬於極低/免除合規風險之工具。
