# PHÂN TÍCH CHI TIẾT SẢN PHẨM (PRODUCT ANALYSIS)

## XÂY DỰNG PERSONA VÀ VẼ USER JOURNEY

### 1. Chân dung người dùng (Persona)

| Đặc điểm | Persona 1: Cán bộ lớp / Sinh viên CLB | Persona 2: Giảng viên / Nhà nghiên cứu nghiệp dư |
| :--- | :--- | :--- |
| **Họ tên** | Nguyễn Minh Anh (21 tuổi) | TS. Lê Quang Vinh (40 tuổi) |
| **Vai trò** | Trưởng ban sự kiện CLB Kỹ năng | Giảng viên Đại học |
| **Bối cảnh** | Cần thu thập ý kiến sinh viên về các hoạt động ngoại khóa, đăng ký thành viên. | Thực hiện các khảo sát khoa học cấp trường hoặc lấy ý kiến phản hồi môn học. |
| **Nỗi đau (Pains)** | Không biết đặt câu hỏi sao cho thu hút; ngại đọc hàng trăm câu trả lời tự luận để tổng kết báo cáo cho Đoàn trường. | Tốn nhiều thời gian phân tích dữ liệu thô từ Excel; cần các báo cáo có độ chính xác và tính học thuật cao. |
| **Mục tiêu** | Có báo cáo kết quả khảo sát ngay sau khi sự kiện kết thúc để nộp báo cáo tổng kết. | Tiết kiệm thời gian xử lý dữ liệu định tính (tự luận) để tập trung vào việc viết bài báo/đề tài. |

### 2. Hành trình người dùng (User Journey) - Persona: Minh Anh

* **Giai đoạn 1: Chuẩn bị (Planning)**
    * *Hành động:* Suy nghĩ các câu hỏi cần hỏi.
    * *Cảm xúc:* Lo lắng vì không biết câu hỏi có bị trùng lặp hay thiếu sót không.
* **Giai đoạn 2: Tạo biểu mẫu (Creation)**
    * *Hành động:* Mở công cụ AI, nhập chủ đề khảo sát và chọn các câu hỏi gợi ý.
    * *Cảm xúc:* Hào hứng vì tốc độ tạo form cực nhanh (chưa đầy 2 phút).
* **Giai đoạn 3: Thu thập dữ liệu (Collection)**
    * *Hành động:* Gửi link khảo sát vào các group lớp/CLB.
    * *Cảm xúc:* Bình thường, theo dõi số lượng người phản hồi.
* **Giai đoạn 4: Phân tích & Báo cáo (Analysis)**
    * *Hành động:* Nhấn nút "Tóm tắt bằng AI", xem kết quả phân tích các câu hỏi tự luận dài dòng.
    * *Cảm xúc:* Nhẹ nhõm và bất ngờ vì không phải đọc thủ công từng câu trả lời.
* **Giai đoạn 5: Hoàn tất (Completion)**
    * *Hành động:* Tải file báo cáo PDF chuyên nghiệp để gửi cho Ban giám hiệu/Đoàn trường.
    * *Cảm xúc:* Tự tin và hài lòng.

---

## MÔ TẢ PRODUCT VISION

**Tầm nhìn sản phẩm (Product Vision Statement):**
"Trở thành nền tảng biểu mẫu thông minh hàng đầu dành cho môi trường giáo dục và nghiên cứu nghiệp dư, giúp tối ưu hóa thời gian tạo và phân tích khảo sát nhờ công nghệ AI. Chúng tôi không chỉ cung cấp một công cụ thu thập dữ liệu, mà cung cấp một trí tuệ nhân tạo có khả năng thấu hiểu tâm lý đám đông, giúp người dùng biến những dữ liệu thô sơ thành những báo cáo có giá trị hành động ngay lập tức."

---

## XÁC ĐỊNH SCENARIO, EPIC VÀ USER STORY

### 1. Scenario (Kịch bản sử dụng)
* *Kịch bản:* Giảng viên Vinh cần thực hiện một khảo sát về "Ảnh hưởng của AI đến việc học tập của sinh viên" với 500 mẫu. Ông sử dụng tính năng AI để soạn câu hỏi chuyên sâu, sau đó dùng tính năng AI Analysis để tóm tắt các đề xuất của sinh viên thành 5 nhóm ý kiến chính nhằm đưa vào bài báo nghiên cứu của mình.

### 2. Epics & User Stories

| Epic | User Story ID | User Story Description |
| :--- | :--- | :--- |
| **E1: Tạo biểu mẫu thông minh (Smart Creation)** | US.01 | Là người dùng, tôi muốn nhập chủ đề để AI tự động gợi ý bộ câu hỏi chuẩn quy chuẩn. |
| | US.02 | Là người dùng, tôi muốn tùy chỉnh các loại câu hỏi (trắc nghiệm, thang đo, tự luận) một cách linh hoạt. |
| **E2: Phân tích dữ liệu bằng AI (AI Analytics)** | US.03 | Là người dùng, tôi muốn AI tóm tắt hàng trăm câu trả lời tự luận thành các ý chính để không phải đọc thủ công. |
| | US.04 | Là người dùng, tôi muốn thấy phân tích cảm xúc (vui, buồn, trung lập) của người phản hồi. |
| **E3: Báo cáo & Xuất bản (Reporting)** | US.05 | Là người dùng, tôi muốn xuất kết quả khảo sát dưới dạng PDF/Slide chuyên nghiệp chỉ với một click. |

---

## BƯỚC 6: LẬP PRODUCT BACKLOG & FEATURE IDENTIFICATION

### 1. Danh sách tính năng (Feature Identification)
* **F1: User Management (UM)** – Quản lý tài khoản và bảo mật dữ liệu.
* **F2: Smart Creator (SC)** – Trình khởi tạo và biên tập biểu mẫu ứng dụng AI.
* **F3: Collection & Collector (CC)** – Hệ thống phân phối link và thu thập phản hồi realtime.
* **F4: AI Analysis Engine (AA)** – Lõi xử lý ngôn ngữ tự nhiên, tóm tắt và phân tích chuyên sâu.
* **F5: Data Presentation (DP)** – Trực quan hóa dữ liệu và xuất bản báo cáo.

### 2. Product Backlog (Ưu tiên theo MoSCoW)

| STT | Chức năng (Feature) | Mô tả chi tiết | Mức độ ưu tiên |
| :--- | :--- | :--- | :--- |
| 1 | **Quản lý tài khoản** | Cho phép người dùng đăng ký, đăng nhập và quản lý hồ sơ cá nhân để lưu trữ các biểu mẫu đã tạo. | **Must have** |
| 2 | **AI Form Generator** | Người dùng nhập yêu cầu bằng văn bản (Prompt), AI tự động tạo bộ khung câu hỏi chuẩn quy chuẩn nghiên cứu. | **Must have** |
| 3 | **Editor Biểu mẫu** | Trình chỉnh sửa linh hoạt: Thêm, sửa, xóa, thay đổi thứ tự các câu hỏi (Trắc nghiệm, Tự luận, Thang đo). | **Must have** |
| 4 | **Phân phối & Thu thập** | Tạo và gửi liên kết (URL) chia sẻ biểu mẫu; hệ thống tự động ghi nhận câu trả lời từ người điền. | **Must have** |
| 5 | **AI Summary & Insights** | Tính năng cốt lõi: AI tự động tóm tắt hàng trăm câu trả lời tự luận dài dòng, rút ra các ý chính và đề xuất hành động. | **Must have** |
| 6 | **Visual Statistics** | Hệ thống hóa dữ liệu bằng biểu đồ trực quan (Tròn, Cột, Đường) cho các câu hỏi định lượng/trắc nghiệm. | **Should have** |
| 7 | **Data Export** | Hỗ trợ xuất dữ liệu khảo sát thô và kết quả phân tích ra các định dạng phổ biến như Excel, Google Sheets. | **Should have** |
| 8 | **Template Library** | Kho biểu mẫu mẫu theo các chủ đề chuyên biệt (Giáo dục, Câu lạc bộ, Nghiên cứu thị trường) để tham khảo. | **Should have** |