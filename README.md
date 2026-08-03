# ClauseDiff 安心對 🛡️

> **貼得安心，對得放心。**  
> **Privacy-First Contract & Policy Diff Tool | 100% Client-Side Processing | Zero Server Upload**

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-brightgreen?style=flat-square&logo=github)](https://jackylawck.github.io/ClauseDiff/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Privacy](https://img.shields.io/badge/Data_Privacy-100%25_Client--Side-emerald?style=flat-square)](https://jackylawck.github.io/ClauseDiff/)
[![PWA](https://img.shields.io/badge/Air--Gapped-Offline_Ready-sky?style=flat-square)](https://jackylawck.github.io/ClauseDiff/)

---

### 🌐 About / 專案簡介

**ClauseDiff 安心對** is a privacy-first text comparison web application designed specifically for **Legal, HR, and Enterprise Management**. Powered entirely by Client-Side processing, your sensitive contracts, emails, and internal policy documents are compared directly within your browser’s memory—never uploaded to any server or cloud database.

**ClauseDiff 安心對** 是一款專為 **Legal、HR 及企業管理層** 打造的輕量化私隱比對工具。透過純前端本地運算（Client-Side Processing），所有敏感合約、Email 及政策條文完全在您的瀏覽器記憶體內進行比對，絕不上傳至任何第三方伺服器，徹底杜絕商業機密與個人資料外洩風險。

---

## ✨ Key Features / 核心亮點

* 🔒 **100% Client-Side Processing (Zero Server Upload) / 100% 本地純前端運算**
  * All text comparisons run locally in your browser (RAM). Zero API calls, zero database persistence.  
    所有文字比對完全在您的本機瀏覽器（RAM）內即時完成，零 API 呼叫、零資料庫儲存。
* ✈️ **Air-Gapped & Offline Ready (PWA Powered) / 支援 100% 斷網與飛航模式**
  * Service Worker cache architecture enables users to disconnect Wi-Fi or toggle Flight Mode for ultimate air-gapped security.  
    採用 PWA 快取架構。使用者可直接斷網或開啟飛航模式進行條文比對，達到最高級別的隔離審查（Air-Gapped Privacy）。
* ⚖️ **Clause & Policy Optimized / 條款與政策專屬優化**
  * Designed for legal clauses and HR policies with word-level highlightings for insertions, deletions, and punctuation edits.  
    專為合約條款與 HR 政策設計，高亮顯示文字增刪、標點符號修訂與格式異動。
* 🌐 **Bilingual Interface (i18n) / 一鍵切換中英文**
  * Seamlessly switch between Traditional Chinese and English with a single click.  
    內建繁體中文與英文介面一鍵切換。

---

## 📋 Enterprise Compliance & ISO Alignment / 企業合規與資安對齊

Designed with strict **Privacy by Design & Default** principles, ClauseDiff aligns with global cybersecurity and data privacy standards:

本專案在架構設計上落實 **Privacy by Design & Default** 原則，對齊以下國際資安與私隱管理標準：

| Standard / 國際標準 | Architectural Assurance / 合規架構保障 |
| :--- | :--- |
| **ISO/IEC 27001 (ISMS)** | **Zero Storage & Air-Gapped Capability**: Zero data transit or persistence. Fully operational offline or in Flight Mode.<br>無數據傳輸與持久化儲存，支援全離線與飛航模式運算，徹底封堵外洩風險。 |
| **ISO/IEC 27701 (PIMS)** | **Data Minimization**: Zero PII (Personally Identifiable Information) collection, strictly adhering to GDPR & PDPO.<br>完全不收集 PII 個人資料，符合 GDPR 及香港 PDPO 私隱條例。 |
| **ISO/IEC 42001 (AIMS)** | **Governance Safe**: Content is processed locally and never ingested or used for third-party AI model training.<br>輸入內容絕不上傳雲端，保證絕不被用於第三方 AI 模型訓練。 |

---

## 🛠️ Tech Stack / 技術架構

* **Frontend Engine:** HTML5 / Vanilla JavaScript (ES6+)
* **PWA Engine:** Service Worker API (`sw.js`)
* **Styling:** Tailwind CSS (via CDN)
* **Diff Engine:** [jsdiff](https://github.com/kpdecker/jsdiff)
* **Deployment:** GitHub Pages (Serverless)

---

## 🚀 Live Demo / 快速體驗

Experience the live app immediately on GitHub Pages without installing anything:  
無需安裝任何套件，造訪已部署的線上版本：

👉 **[Launch ClauseDiff 安心對](https://jackylawck.github.io/ClauseDiff/)**

---

## 📄 License / 授權條款

Distributed under the [MIT License](LICENSE).
