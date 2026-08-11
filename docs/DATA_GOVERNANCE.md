# Data Governance & Privacy Specification
# 數據治理與私隱合規規範

**System Name / 系統名稱:** ClauseDiff 安心對  
**Compliance Alignment / 合規對齊:** ISO/IEC 27701 (PIMS), GDPR Art. 25 (Privacy by Design & Default), HK PDPO  
**Data Architecture / 數據架構:** 100% Client-Side Processing (Zero Server Storage & Zero Transit) / 100% 本地純前端運算 (零伺服器儲存與零傳輸)

---

## 1. Executive Summary / 執行摘要

ClauseDiff is engineered under the strict principle of **Privacy by Design and Default**. Unlike traditional web platforms or cloud-based AI tools, ClauseDiff eliminates data exposure risks at the architectural level by performing all text processing locally inside the user's browser memory (RAM).

ClauseDiff 嚴格貫徹 **「由設計及預設展現私隱 (Privacy by Design & Default)」** 的核心原則。與傳統 Web 平台或雲端 AI 工具不同，ClauseDiff 所有文字處理完全在使用者本機瀏覽器記憶體（RAM）內進行，從系統架構根源上徹底杜絕數據外洩風險。

---

## 2. Core Data Privacy Principles / 核心私隱原則

### 2.1 Zero Storage & Zero Transit / 零儲存與零數據傳輸
* **No Server Persistence**: ClauseDiff is a serverless application. It maintains no databases, file servers, or cloud logging mechanisms.  
  **無伺服器持久化儲存**：ClauseDiff 屬無伺服器（Serverless）純前端應用，不設任何資料庫、檔案伺服器或雲端紀錄機制。
* **Transient RAM Execution**: Text pasted into the input interface exists solely within local browser RAM. All transient data is instantly purged upon closing the tab or refreshing the page.  
  **記憶體瞬時運算**：使用者貼入的文字僅存在於本機瀏覽器的 RAM 中，當關閉分頁或重整理刻自動徹底銷毀。
* **Zero Network Transit**: Text payloads are never transmitted across the network, API gateways, or third-party cloud services.  
  **零網絡傳輸**：任何輸入內容絕不上傳至網絡、API 閘道或第三方雲端服務。

### 2.2 Data Minimization & PII Exclusion / 數據最小化與個人資料排除
* ClauseDiff does not request, collect, process, or store Personally Identifiable Information (PII), system cookies, IP addresses, or device identifiers.  
  ClauseDiff 完全不要求、不收集、不處理亦不儲存任何個人可識別資料（PII）、Cookies、IP 地址或設備識別碼。
* No analytics, telemetries, or third-party tracking scripts (e.g., Google Analytics, Facebook Pixel) are integrated.  
  系統完全未嵌入任何第三方數據統計、日誌追蹤或行為分析腳本。

---

## 3. Data Lifecycle & Processing Workflow / 數據生命週期與處理流程

```text
[ User Inputs Text / 使用者貼入文字條文 ] 
       │
       ▼ (Pure Local Memory / 純本機記憶體)
[ Client-Side `jsdiff` Engine / 本地 `jsdiff` 比對引擎 ]
       │
       ▼ (Direct DOM Rendering / 直接 DOM 畫面渲染)
[ Visual Difference Output / 即時呈現比對結果 ]
       │
       ▼ (Action: Clear or Close Tab / 操作：點擊清除或關閉頁面)
[ Memory Instantly Purged / 本機記憶體即時清空銷毀 ]

```

---

## 4. IP Protection & Confidentiality Assurance / 知識產權與商業機密保障

* **Zero AI Model Training Ingestion**: Input texts are **NEVER** ingested, logged, or utilized to train external Large Language Models (LLMs) or commercial AI algorithms.
**絕不用於 AI 模型訓練**：輸入內容**絕對不會**被收集、記錄或用於訓練外部大語言模型（LLM）或商業 AI 演算法。
* **100% Client Ownership**: Users retain exclusive intellectual property, copyright, and trade secret ownership over all documents and contracts evaluated using ClauseDiff.
**100% 客戶產權保障**：使用者對所有貼入 ClauseDiff 進行比對的合約、商業機密及內部文件，保有 100% 的知識產權與商業機密所有權。

---

## 5. Compliance Alignment Matrix / 國際合規標準對齊

| Regulatory Standard / 國際標準 | Regulatory Requirement / 規範要求 | ClauseDiff Architectural Control / ClauseDiff 架構控制措施 |
| --- | --- | --- |
| **ISO/IEC 27701 (PIMS)** | Privacy by Design & Default / 預設私隱保護設計 | Entire computation is isolated within the user's client browser environment.<br>

<br>所有運算完全隔離於使用者本機瀏覽器環境內。 |
| **EU GDPR (Art. 25 & 32)** | Data Minimization & Security of Processing / 數據最小化與處理安全 | Zero PII processing and zero network data transmission.<br>

<br>零個人資料處理，零網絡數據傳輸。 |
| **HK PDPO (DPP 1 & 4)** | Data Collection Principle & Security of Personal Data / 數據收集與安全保障原則 | No personal data is collected or stored; immunity from remote breach risks.<br>

<br>不收集也不儲存任何個人資料，免疫遠端資料外洩風險。 |
| **ISO/IEC 42001 (AIMS)** | Data Ingestion & Governance Safety / 數據餵入與 AI 治理安全 | Non-generative architecture eliminates data scraping and unauthorized ingestion risks.<br>

<br>非生成式純規則架構，徹底杜絕數據遭私自抓取與洩漏疑慮。 |

```

```
