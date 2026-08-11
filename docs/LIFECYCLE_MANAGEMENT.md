# Software Lifecycle Management Policy / 系統生命週期管理政策
**System Name / 系統名稱:** ClauseDiff 安心對  
**Compliance Alignment / 合規對齊:** ISO/IEC 42001, ISO/IEC 27001  

---

## 1. Development & Version Control / 開發與版本控制
* **Source Control**: Managed via GitHub version control (`main` branch).  
  **原始碼管理**：採用 GitHub 進行版本控管。
* **Dependency Stability**: Standardized, audited CDN libraries (`jsdiff v5.1.0`).  
  **套件穩定性**：僅引用經審核的標準前端函式庫。

## 2. Verification Protocol / 驗證與測試協定
Prior to deploying updates to GitHub Pages, the application must pass:  
更新部署前須通過以下驗證：
1. **Cross-Browser Verification**: Chrome, Safari, Edge, and Mobile Browsers.  
   **跨瀏覽器相容性測試**。
2. **Air-Gapped Test**: Verify functionality under offline/Flight Mode using Service Worker.  
   **離線/飛航模式運算測試**。
3. **Zero Outbound Traffic Audit**: Confirm zero network packets generated during execution using DevTools.  
   **零封包外傳網絡審計**（透過開發者工具確認執行期間無任何網絡請求）。
