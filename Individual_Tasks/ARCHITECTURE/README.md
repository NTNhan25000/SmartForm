# Tài Liệu Kiến Trúc Hệ Thống SmartForm

---
## 1. Sơ Đồ Kiến Trúc Tổng Quan

Hệ thống được thiết kế theo mô hình phân tầng chuyên biệt (Layered Architecture) gồm 5 lớp chính nhằm đảm bảo tính mở rộng (scalability), khả năng bảo mật và tối ưu hóa chi phí khi vận hành các mô hình ngôn ngữ lớn (LLM).

---

## 2. Chi Tiết Chức Năng Và Vai Trò Các Thành Phần

### A. [ TẦNG GIAO DIỆN - FRONTEND ]
* **Vai trò:** Là lớp tiếp xúc trực tiếp với người dùng cuối (End-user), chịu trách nhiệm về mặt trải nghiệm (UX) và giao diện (UI).
* **Chức năng chính:**
  * Hiển thị các biểu mẫu (Forms) động và khu vực tương tác với AI.
  * Thu thập dữ liệu đầu vào (Input) từ người dùng và gửi xuống tầng Backend.
  * Tiếp nhận luồng dữ liệu trả về liên tục (Streaming Data) để hiển thị kết quả theo thời gian thực (AI gõ chữ đến đâu hiển thị đến đó).
* **Công nghệ sử dụng:** `React` / `Vue.js`, `Tailwind CSS` (tối ưu UI/UX), `WebSockets (WSS)` / `Server-Sent Events (SSE)` (xử lý streaming).

### B. [ TẦNG ĐIỀU PHỐI & NGHIỆP VỤ - BACKEND ]
* **Vai trò:** Đóng vai trò là "bộ não điều hành" các nghiệp vụ truyền thống của toàn bộ hệ thống phần mềm.
* **Chức năng chính:**
  * **API Gateway:** Tiếp nhận mọi yêu cầu từ Frontend, chịu trách nhiệm xác thực người dùng (Authentication), phân quyền (Authorization) và kiểm soát lưu lượng (Rate Limiting) để bảo vệ hệ thống khỏi bị quá tải hoặc lạm dụng API AI gây tốn chi phí.
  * **Core Service:** Xử lý các logic nghiệp vụ lõi (quản lý tài khoản, lưu trữ cấu hình form, phân tích luồng đi của dữ liệu) và điều phối công việc: quyết định khi nào cần gọi tầng AI, khi nào cần thao tác với cơ sở dữ liệu.
* **Công nghệ sử dụng:** `FastAPI` (Python) hoặc `NestJS` (TypeScript), `Kong API Gateway` / `AWS API Gateway`.

### C. [ TẦNG AI ORCHESTRATION ] (Điều Phối AI)
* **Vai trò:** Là tầng trung gian chuyên biệt đảm nhận việc quản lý, tối ưu hóa và dẫn dắt các tiến trình xử lý của Trí tuệ nhân tạo.
* **Chức năng chính:**
  * **Kỹ nghệ Prompt (Prompt Engineering):** Nhận yêu cầu từ Backend và chuyển cấu trúc câu lệnh thành dạng Prompts tiêu chuẩn mà LLM có thể hiểu tốt nhất.
  * **Quản lý ngữ cảnh và bộ nhớ (Memory Management):** Lưu trữ và duy trì ngữ cảnh của cuộc hội thoại (lịch sử chat/nhập liệu trước đó).
  * **Xây dựng AI Agent:** Thiết lập các chuỗi tư duy (Chains) hoặc tác nhân tự trị (Agents) để xử lý các tác vụ phức tạp cần qua nhiều bước suy luận.
* **Công nghệ sử dụng:** `LangChain`, `LlamaIndex`, `LangGraph` (xử lý Agentic AI), `Redis` (lưu bộ nhớ đệm hội thoại).

### D. [ LỚP MÔ HÌNH LLM ] (Large Language Models)
* **Vai trò:** Là hạt nhân cung cấp năng lực trí tuệ nhân tạo (suy luận, đọc hiểu, phân tích, thế kế) cho toàn hệ thống.
* **Chức năng chính:**
  * Tiếp nhận các Prompts đã được chuẩn hóa và giàu ngữ cảnh từ tầng Orchestration.
  * Thực hiện suy luận và sinh nội dung.
  * Ép buộc định dạng đầu ra thành **Dữ liệu có cấu trúc (Structured Output - JSON)** thay vì văn bản tự do, giúp hệ thống lập trình đọc hiểu kết quả một cách chính xác tuyệt đối mà không bị lỗi cấu trúc.
* **Công nghệ sử dụng:** `Gemini API` (Google), `GPT-4o` (OpenAI), hoặc các mô hình mã nguồn mở như `Llama 3` chạy nội bộ qua `Ollama` / `vLLM`.

### E. [ TẦNG LƯU TRỮ - DATABASE ]
* **Vai trò:** Nơi lưu trữ vĩnh viễn toàn bộ tài nguyên, dữ liệu hệ thống và cơ sở tri thức phục vụ AI.
* **Chức năng chính:**
  * Lưu trữ dữ liệu quan hệ truyền thống (Thông tin User, logs, biểu mẫu).
  * Lưu trữ dữ liệu dạng Vector (Vector Embeddings) – đóng vai trò là "kho tri thức" nền tảng để AI có thể tra cứu và đọc hiểu trước khi đưa ra câu trả lời (Quy trình RAG).
* **Công nghệ sử dụng:** `PostgreSQL` (kèm extension `pgvector`) hoặc kết hợp `MySQL` với các Vector DB chuyên dụng như `Qdrant`, `Pinecone`, `Milvus`.

---

## 3. Bản Chất Và Chức Năng Của Các Luồng Mũi Tên (Luồng Dữ Liệu)

Cách các thành phần giao tiếp với nhau được thể hiện qua các hướng mũi tên trong sơ đồ:

![Diagram](DIAGRAM.png)


### 1. Frontend ↔ Backend
* **Chiều xuống (HTTPS / REST API):** Frontend gửi các yêu cầu tương tác hoặc dữ liệu biểu mẫu do người dùng nhập xuống Backend.
* **Chiều lên (JSON Streaming / WSS):** Backend truyền dữ liệu kết quả ngược lại cho Frontend. Việc áp dụng giao thức WebSocket (WSS) và cơ chế Stream giúp dữ liệu được đẩy về liên tục theo thời gian thực mà không bắt người dùng phải chờ đợi tải toàn bộ trang.

### 2. Backend → AI Orchestration
* **Ý nghĩa:** Thể hiện luồng kích hoạt tiến trình AI. Sau khi Core Service hoàn tất các xác thực nghiệp vụ cơ bản, nó sẽ phát lệnh và chuyển giao dữ liệu sang cho tầng điều phối AI để bắt đầu quy trình xử lý thông minh.

### 3. AI Orchestration ↔ Lớp Mô Hình LLM
* **Chiều xuống:** Tầng Orchestration thực hiện các lệnh gọi API (API Calls) kèm theo Prompts đã được tối ưu hóa xuống các mô hình LLM.
* **Chiều lên:** Các mô hình LLM trả kết quả phân tích về. Kết quả này được ràng buộc nghiêm ngặt dưới dạng **Structured Output** để tầng điều phối dễ dàng bóc tách dữ liệu.

### 4. Backend ↔ Database
* **Ý nghĩa:** Đây là luồng tương tác cơ sở dữ liệu truyền thống (**OLTP - Online Transaction Processing**).
* **Chức năng:** Core Service trực tiếp đọc/ghi các dữ liệu mang tính cấu trúc và hành chính như thông tin tài khoản, cấu hình form, phân quyền người dùng và quản lý trạng thái của hệ thống. Đảm bảo tính toàn vẹn và nhất quán của dữ liệu.

### 5. AI Orchestration → Database
* **Ý nghĩa:** Đây là luồng truy xuất dữ liệu phục vụ riêng cho các tác vụ Trí tuệ nhân tạo (Cơ chế **RAG - Retrieval-Augmented Generation**).
* **Chức năng:** Tầng AI Orchestration (thông qua LlamaIndex/LangChain) sẽ thực hiện truy vấn xuống cơ sở dữ liệu (đặc biệt là Vector Database) để tìm kiếm các tài liệu, biểu mẫu cũ hoặc tri thức doanh nghiệp có liên quan chặt chẽ nhất với câu hỏi hiện tại. Sau đó, nó gom dữ liệu tri thức này lại để "làm giàu ngữ cảnh" cho câu lệnh trước khi gửi xuống cho LLM, giúp AI trả lời chính xác, tránh hiện tượng ảo tưởng thông tin.