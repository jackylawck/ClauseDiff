# ClauseDiff 安心對 🛡️

> **貼得安心，對得放心。**  
> **Privacy-First Contract & Policy Diff Tool | 100% Client-Side Processing | Zero Server Upload**

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-brightgreen?style=flat-square&logo=github)](https://jackylawck.github.io/ClauseDiff/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Privacy](https://img.shields.io/badge/Data_Privacy-100%25_Client--Side-emerald?style=flat-square)](https://jackylawck.github.io/ClauseDiff/)
[![PWA](https://img.shields.io/badge/Air--Gapped-Offline_Ready-sky?style=flat-square)](https://jackylawck.github.io/ClauseDiff/)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-purple?style=flat-square)](https://jackylawck.github.io/ClauseDiff/)

---

### 🌐 About / 專案簡介

**ClauseDiff 安心對** is a privacy-first text comparison web application designed specifically for **Confidential Contracts, Policies, and Enterprise Documents**. Built with zero external dependencies and enforced by strict Content Security Policy (`connect-src 'none'`), your sensitive contracts, emails, and internal policy documents are compared directly within your browser’s memory—never uploaded to any server or cloud database.

**ClauseDiff 安心對** 是一款專為 **敏感合約、機密文件與企業政策** 打造的極致純前端私隱比對工具。採用零外部依賴與嚴格 Content Security Policy 網絡隔離架構（`connect-src 'none'`），所有敏感合約、Email 及政策條文完全在您的本機瀏覽器記憶體內運算，絕不上傳至任何伺服器，徹底杜絕商業機密與個人資料外洩風險。

---

## ✨ Key Features / 核心亮點

* 🔒 **100% Client-Side & Zero Network Transit / 100% 本地純前端運算與零網絡外傳**
  * Enforced with strict CSP (`connect-src 'none'`). All text comparisons run locally in browser RAM with zero API calls and zero database persistence.  
    透過嚴格 CSP 封鎖所有外部連線，文字比對完全在瀏覽器記憶體內即時完成，零 API 外連、零資料庫留存。
* ✈️ **True Air-Gapped & Offline PWA / 支援 100% 斷網與飛航模式運算**
  * Zero external CDN dependencies. Fully operable offline, in Flight Mode, or in air-gapped secure enterprise environments.  
    零外部 CDN 依賴，支援完全斷網、飛航模式或實體隔離（Air-Gapped）環境下獨立運行。
* 🧠 **Built-in Deterministic Myers Diff / 內建確定性 Myers 比對演算法**
  * Exact word and character-level comparisons without probabilistic LLM hallucinations or data ingestion risks.  
    採用精確的確定性字詞比對演算法，完全排除生成式 AI 的幻覺與模型訓練洩密風險。
* 📥 **Audit Report Export & Clipboard Copy / 一鍵匯出審計報告與複製**
  * Export timestamped standalone HTML difference audit reports or copy highlighted outputs with a single click.  
    支援一鍵匯出具備時間戳記的獨立 HTML 比對審計報告，或快速複製結果至剪貼簿。
* 🌐 **Declarative Bilingual Interface (i18n) / 聲明式中英文雙語切換**
  * Seamlessly toggle between Traditional Chinese and English with dynamic PWA manifest localization.  
    支援繁體中文與英文一鍵即時切換，並具備動態多語言 Manifest 支援。
* 🌓 **Dark Mode & WCAG 2.1 AA / 深色模式與無障礙標準**
  * Automatic dark mode support via `prefers-color-scheme`, keyboard shortcuts (`Ctrl/Cmd + Enter`), and full screen-reader accessibility.  
    自適應深色模式、快捷鍵比對（`Ctrl/Cmd + Enter`）並完整支援 WCAG 2.1 AA 無障礙標準。

---

## 📋 Enterprise Compliance & ISO Alignment / 企業合規與資安對齊

Designed with strict **Privacy by Design & Default** principles, ClauseDiff aligns with global cybersecurity, AI governance, and data privacy standards:

本專案在架構設計上嚴格落實 **Privacy by Design & Default** 原則，全面對齊以下國際資安與數據治理標準：

| Standard / 國際標準 | Architectural Assurance / 合規架構保障 |
| :--- | :--- |
| **ISO/IEC 27001 (ISMS)** | **Zero Storage & Air-Gapped Capability**: Zero data transit or persistence. Enforced via CSP `connect-src 'none'`.<br>無數據傳輸與持久化儲存，嚴格 CSP 隔離，徹底封堵資料外洩漏洞。 |
| **ISO/IEC 27701 (PIMS)** | **Data Minimization**: Zero PII (Personally Identifiable Information) collection, strictly adhering to GDPR & HK PDPO.<br>完全不收集 PII 個人資料，符合 GDPR 及香港 PDPO 私隱條例規範。 |
| **ISO/IEC 42001 (AIMS)** | **Governance Safe**: Content is processed locally and never ingested or used for third-party AI model training.<br>輸入內容絕不上傳雲端，保證絕不被用於第三方 AI 模型訓練。 |
| **EU AI Act (Art. 14)** | **Human Oversight**: Fully deterministic output with explicit user control and instant memory clearance.<br>確定性非自主運算，使用者享有 100% 人工控制權與即時記憶體銷毀機制。 |

---

## 📚 Governance Documentation Suite / 企業治理與合規文件

Comprehensive audit and governance specifications are available in the `/docs` directory:

* 🛡️ **[Risk Assessment Report (ISO 42001 & EU AI Act)](docs/RISK_ASSESSMENT.md)**
* 🔒 **[Data Governance & Privacy Specification (ISO 27701 & GDPR)](docs/DATA_GOVERNANCE.md)**
* 👤 **[Human Oversight & Technical Control Specification](docs/HUMAN_OVERSIGHT.md)**
* 🔄 **[Software Lifecycle Management Policy](docs/LIFECYCLE_MANAGEMENT.md)**
* 📋 **[System & Engine Information Card](docs/MODEL_CARD.md)**

---

## 🛠️ Tech Stack / 技術架構

* **Core Engine:** Vanilla JavaScript (ES6+) with Built-in Native Myers Diff Algorithm
* **Styling:** Pure Modern CSS (Zero external CSS frameworks / Zero CDN dependency)
* **PWA & Offline:** Service Worker Cache Storage API (`sw.js`)
* **Security Layer:** Strict Content Security Policy (CSP Meta Tag)
* **Deployment:** GitHub Pages (Serverless Static Architecture)

---

## 🚀 Live Demo / 快速體驗

Experience the live app immediately on GitHub Pages without installing anything:  
無需安裝任何套件，造訪已部署的線上版本：

👉 **[Launch ClauseDiff 安心對](https://jackylawck.github.io/ClauseDiff/)**

---

## 📄 License / 授權條款

Distributed under the [MIT License](LICENSE).
