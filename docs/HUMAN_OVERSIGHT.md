# Human Oversight & Technical Control / 人工監督與技術控制說明
**System Name / 系統名稱:** ClauseDiff 安心對  
**Compliance Alignment / 合規對齊:** EU AI Act (Article 14), ISO/IEC 42001  

---

## 1. Human-in-the-Loop (HITL) Framework / 人工掌控框架
ClauseDiff is designed as an **Augmentative Productivity Tool**, not an automated decision-making system. Full operational control remains with the human user at all times.  
ClauseDiff 定位為**輔助性生產力工具**，非自動化決策系統。使用者隨時享有 100% 的操作掌控權。

### Key Control Features / 核心控制功能：
* **Manual Trigger**: Diff analysis is executed exclusively via explicit user action (clicking "🔍 即時比對變更").  
  **手動觸發**：僅在使用者主動點擊按鈕後才執行比對。
* **Deterministic Output**: Performs exact word-level string comparison with zero autonomous inference.  
  **確定性輸出**：進行精確字詞比對，絕無自主推理或隨機產生內容。
* **User Override & Clear**: Users can clear text or adjust comparison modes at any time.  
  **使用者覆核與清除**：使用者可隨時清除文字或調整比對參數。

## 2. Immediate Memory Wipe (Kill Switch) / 即時記憶體清空機制
Users can wipe all data buffers instantly by closing the browser tab or clicking the "Clear / 清除" button.  
使用者可透過關閉分頁或點擊「清除」按鈕，秒級清空本機所有記憶體緩衝區。
