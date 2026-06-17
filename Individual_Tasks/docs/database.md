# 🗄 Database & Lưu trữ

[← Mục lục tài liệu](./README.md)

---

<<<<<<< HEAD

=======
>>>>>>> 351d96cd722b11606ac6750da40ac62c3264b903
## Phân công

> **Dev A + Dev C** phối hợp thực hiện phần này.

| Hạng mục | Dev phụ trách |
|----------|--------------|
| Lưu trữ local — localStorage, export/import JSON | **Dev A** |
| Database adapter — kết nối backend, đồng bộ dữ liệu | **Dev C** |
| Thiết kế schema bảng & quan hệ dữ liệu | **Dev A + Dev C** |
| Đồng bộ local ↔ remote | **Dev A + Dev C** |

Lý do kết hợp:
- **Dev A** nắm toàn bộ `FormState` và biết dữ liệu nào cần lưu
- **Dev C** nắm services layer và các external calls
- Cả hai thống nhất schema để Dev B, D, E không cần quan tâm đến tầng dữ liệu

---

## Lựa chọn công nghệ

<<<<<<< HEAD
| Lựa chọn | Phù hợp khi |
|----------|-------------|
| **Supabase** | Muốn setup nhanh, có auth + realtime sẵn |
| **Firebase Firestore** | Ưu tiên realtime sync, quen hệ sinh thái Google |
| **PocketBase** | Muốn self-hosted, nhẹ, đơn giản |
| **Custom API (Node.js)** | Cần kiểm soát hoàn toàn logic backend |
=======

Toàn bộ dữ liệu form được lưu trên trình duyệt của người dùng:

```
localStorage
└── "gg-form-draft"   →  JSON của FormState (title, description, questions[], settings, themeColor)
```

Ưu điểm: offline hoàn toàn, không cần backend, zero latency.
Giới hạn: mất khi xóa cache, không chia sẻ giữa thiết bị, không lưu lịch sử phản hồi.
>>>>>>> 351d96cd722b11606ac6750da40ac62c3264b903

---

## Dữ liệu cần lưu trữ

<<<<<<< HEAD
### Tài khoản người dùng
- ID, tên hiển thị, email, ảnh đại diện
- Phương thức đăng nhập (Google OAuth / email-password)
- Ngày tạo tài khoản, lần đăng nhập cuối
- Gói sử dụng (free / pro nếu có)

### Biểu mẫu (Forms)
- ID form, tiêu đề, mô tả, màu theme
- Ngày tạo, ngày cập nhật cuối
- Trạng thái: đang nhận phản hồi / đã đóng
- ID chủ sở hữu (liên kết với tài khoản)
- Cài đặt form (giới hạn phản hồi, thu thập email, thông báo xác nhận...)
=======
### Lựa chọn công nghệ gợi ý
>>>>>>> 351d96cd722b11606ac6750da40ac62c3264b903

### Câu hỏi (Questions)
- ID câu hỏi, tiêu đề, loại câu hỏi
- Thứ tự hiển thị, bắt buộc hay không
- Danh sách lựa chọn (với câu hỏi trắc nghiệm / checkbox / dropdown)
- Liên kết với form

### Phản hồi (Responses) *(giai đoạn 2)*
- ID phản hồi, thời gian gửi
- Email người trả lời (nếu bật thu thập)
- Nội dung từng câu trả lời theo ID câu hỏi
- Liên kết với form

---

## Quan hệ dữ liệu


```
users
  └── 1 user có nhiều forms
        └── 1 form có nhiều questions
        └── 1 form có nhiều responses
              └── 1 response có nhiều answers (theo từng question)
```

<<<<<<< HEAD
=======
### Bảng `responses` *(giai đoạn 2)*

```sql
CREATE TABLE responses (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_id     UUID REFERENCES forms(id) ON DELETE CASCADE,
  answers     JSONB NOT NULL,  -- { questionId: value }
  email       TEXT,
  submitted_at TIMESTAMPTZ DEFAULT now()
);
```

---

## API Contract nội bộ (`src/services/db.ts`)

```ts
// Interface thống nhất — Dev A + Dev C cùng định nghĩa
interface DBAdapter {
  saveForm(form: FormState): Promise<string>;      // trả về form id
  loadForm(id: string): Promise<FormState | null>;
  listForms(): Promise<{ id: string; title: string; updatedAt: string }[]>;
  deleteForm(id: string): Promise<void>;
  submitResponse(formId: string, answers: Record<string, unknown>): Promise<void>;
}
```

Cả `LocalStorageAdapter` (hiện tại) và `SupabaseAdapter` (mở rộng) đều implement cùng interface này — component không cần biết nguồn dữ liệu đến từ đâu.

>>>>>>> 351d96cd722b11606ac6750da40ac62c3264b903
---

## Chiến lược lưu trữ theo giai đoạn

<<<<<<< HEAD

=======
>>>>>>> 351d96cd722b11606ac6750da40ac62c3264b903
### Giai đoạn 1 — MVP (hiện tại)
- Lưu toàn bộ dữ liệu form trên `localStorage` của trình duyệt
- Không cần tài khoản, không cần mạng, hoạt động offline hoàn toàn
- Export / Import form qua file JSON
- Giới hạn: mất dữ liệu khi xóa cache, không đồng bộ giữa thiết bị
- **Dev A** phụ trách

### Giai đoạn 2 — Tài khoản & Cloud (mở rộng)
- Thêm tính năng **đăng ký / đăng nhập** (Google OAuth hoặc email)
- Mỗi tài khoản có danh sách form riêng, lưu trên cloud
- Mỗi form có URL riêng để chia sẻ và nhận phản hồi
- `localStorage` vẫn dùng làm cache — fallback khi mất mạng
- **Dev A + Dev C** phụ trách

### Giai đoạn 3 — Multi-user & Analytics (tương lai)
- Nhiều người cùng chỉnh sửa một form (realtime collaboration)
- Tab "Câu trả lời" hiển thị thống kê phản hồi thật: biểu đồ, tỉ lệ, xuất CSV
- Phân quyền: chủ form, cộng tác viên, người xem
- Thông báo email khi có phản hồi mới
- **Toàn team** phụ trách

---

## Nhiệm vụ Dev A & Dev C

### Dev A
1. Tách logic lưu trữ hiện tại thành module độc lập, dễ thay thế sau
2. Đảm bảo khi chuyển sang backend, `App.tsx` và các component không cần sửa
3. Xử lý trạng thái offline: cache local, đồng bộ khi có mạng trở lại
4. Viết tests cho toàn bộ logic lưu/đọc dữ liệu

### Dev C
1. Thiết kế và implement kết nối với database (Supabase hoặc lựa chọn khác)
2. Xây dựng luồng xác thực người dùng (đăng nhập, đăng xuất, giữ phiên)
3. Đồng bộ dữ liệu local ↔ remote: phát hiện online/offline, retry khi thất bại
4. Viết tests cho adapter kết nối database

### Cùng làm
- Thống nhất danh sách bảng và quan hệ trước khi bắt đầu
- Review chéo PR trước khi merge vào `main`
- Đảm bảo không có thông tin nhạy cảm (API key, mật khẩu) trong code

---

## Tiêu chí nghiệm thu

- [ ] Giai đoạn 1: lưu/đọc form từ localStorage hoạt động ổn định, không mất dữ liệu khi reload
- [ ] Giai đoạn 2: đăng nhập thành công, form được lưu lên cloud và load lại đúng trên thiết bị khác
- [ ] Giai đoạn 2: mất mạng → app vẫn dùng được, có mạng → tự đồng bộ
- [ ] Giai đoạn 3: nhiều phản hồi được ghi nhận và hiển thị đúng trong tab Câu trả lời

## Ghi chú

- Không commit API key hay connection string — lưu trong `.env` và thêm vào `.gitignore`
- Giai đoạn 1 phải hoàn thành và ổn định trước khi bắt đầu Giai đoạn 2
- Mọi thay đổi cấu trúc dữ liệu cần thông báo cho toàn team vì ảnh hưởng đến tất cả các Dev
