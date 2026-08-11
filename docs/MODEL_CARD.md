# System & Engine Specification (Model Card) / 系統引擎資訊卡
**System Name / 系統名稱:** ClauseDiff 安心對  
**Engine Type / 引擎類型:** Rule-Based / Deterministic Text Comparison Engine (`jsdiff`) / 規則導向確定性比對引擎  

---

## 1. Engine Boundaries & Non-AI Declaration / 系統邊界與無 AI 聲明
* **Generative AI Model**: **NONE**. ClauseDiff does not utilize LLMs, neural networks, or generative AI algorithms.  
  **生成式 AI 模型**：**無**。ClauseDiff 絕不使用大語言模型（LLM）、神經網絡或生成式演算法。
* **Deterministic Output**: Powered by Myers Diff Algorithm (`jsdiff`) to compare character/word tokens exactly, eliminating hallucinations.  
  **確定性輸出**：採用 Myers 比對演算法，進行精確字詞比對，徹底排除 AI 幻覺。

## 2. Risk & Governance Boundary / 風險與治理邊界
* **Data Harvest Risk**: **ZERO**. Input text is never used to train third-party AI models.  
  **數據採集風險**：**零**。輸入內容絕不會被收集或用於第三方 AI 模型訓練。
* **Intended Use**: Manual comparison of text drafts, legal clauses, and policy updates.  
  **設計用途**：人工合約草案、法律條款及企業政策修訂之私隱比對。
