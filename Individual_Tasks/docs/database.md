# 🗄 Database & Lưu trữ

[← Mục lục tài liệu](./README.md)

---

![Database Overview](https://placehold.co/860x220/0f1724/white?text=Storage+Layer%3A+localStorage+(hien+tai)+%E2%86%92+Backend+DB+(mo+rong))

## Phân công

> **Dev A + Dev C** phối hợp thực hiện phần này.

| Hạng mục | Dev phụ trách |
|----------|--------------|
| `src/services/storage.ts` — localStorage, export/import JSON | **Dev A** |
| `src/services/db.ts` — database adapter (backend API) | **Dev C** |
| `src/services/sync.ts` — đồng bộ local ↔ remote | **Dev A + Dev C** |
| Schema thiết kế bảng dữ liệu | **Dev A + Dev C** |

Lý do kết hợp:
- **Dev A** nắm toàn bộ `FormState` và biết dữ liệu nào cần persist
- **Dev C** nắm `services/` layer và pattern async/await cho external calls
- Cả hai cùng định nghĩa contract để các Dev B, D, E không cần quan tâm đến nguồn dữ liệu

---

## Hiện trạng — localStorage (MVP)

![LocalStorage Flow](https://placehold.co/860x160/f2fbfa/0b8f89?text=FormState+%E2%86%92+JSON.stringify+%E2%86%92+localStorage+%E2%86%92+JSON.parse+%E2%86%92+FormState)

Toàn bộ dữ liệu form được lưu trên trình duyệt của người dùng:

```
localStorage
└── "gg-form-draft"   →  JSON của FormState (title, description, questions[], settings, themeColor)
```

Ưu điểm: offline hoàn toàn, không cần backend, zero latency.
Giới hạn: mất khi xóa cache, không chia sẻ giữa thiết bị, không lưu lịch sử phản hồi.

---

## Mở rộng — Database thật (Backend)

![Backend Flow](https://placehold.co/860x200/0ea5a4/white?text=React+App+%E2%86%92+REST+API+%2F+Supabase+%E2%86%92+PostgreSQL)

### Lựa chọn công nghệ gợi ý

| Lựa chọn | Stack | Phù hợp khi |
|----------|-------|-------------|
| **Supabase** | PostgreSQL + REST + Realtime | Muốn setup nhanh, có auth sẵn |
| **Firebase Firestore** | NoSQL + Realtime | Ưu tiên realtime sync |
| **PocketBase** | SQLite + REST | Self-hosted, nhẹ |
| **Custom API** | Node.js + PostgreSQL | Cần kiểm soát hoàn toàn |

---

## Schema dữ liệu

### Bảng `forms`

```sql
CREATE TABLE forms (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title       TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  theme_color TEXT NOT NULL DEFAULT '#673ab7',
  settings    JSONB NOT NULL DEFAULT '{}',
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

### Bảng `questions`

```sql
CREATE TABLE questions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_id     UUID REFERENCES forms(id) ON DELETE CASCADE,
  type        TEXT NOT NULL,  -- 'short_answer' | 'paragraph' | 'multiple_choice' | ...
  title       TEXT NOT NULL DEFAULT '',
  required    BOOLEAN DEFAULT false,
  position    INTEGER NOT NULL DEFAULT 0,
  options     JSONB DEFAULT '[]'  -- [{ id, text }]
);
```

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

![API Contract](https://placehold.co/860x160/fff7ed/ff6b35?text=saveForm()+%7C+loadForm()+%7C+listForms()+%7C+deleteForm()+%7C+submitResponse())

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

---

## Chiến lược lưu trữ theo giai đoạn

![Roadmap](https://placehold.co/860x180/e6eef0/0f1724?text=Giai+doan+1%3A+localStorage+%E2%86%92+Giai+doan+2%3A+LocalStorage+%2B+Cloud+Sync+%E2%86%92+Giai+doan+3%3A+Multi-user)

### Giai đoạn 1 — MVP (hiện tại)
- Lưu trữ: `localStorage` duy nhất
- Không cần tài khoản, không cần mạng
- Export/Import qua file JSON
- **Dev A** phụ trách

### Giai đoạn 2 — Cloud Sync (mở rộng)
- Lưu trữ: `localStorage` làm cache + Supabase/Firebase làm nguồn chính
- Sync tự động khi online, fallback localStorage khi offline
- Mỗi form có URL riêng để chia sẻ
- **Dev A + Dev C** phụ trách

### Giai đoạn 3 — Multi-user (tương lai)
- Authentication (Google OAuth qua Supabase Auth)
- Mỗi user có danh sách form riêng
- Realtime collaboration (nhiều người chỉnh sửa cùng lúc)
- Thu thập và hiển thị phản hồi trong tab "Câu trả lời"
- **Toàn team** phụ trách

---

## Nhiệm vụ cụ thể Dev A & Dev C

### Dev A làm
1. Tách `services/storage.ts` thành `LocalStorageAdapter` implement `DBAdapter`
2. Expose `getDBAdapter()` — trả về adapter đang dùng (local hoặc remote)
3. Cập nhật `App.tsx` để dùng adapter thay vì gọi trực tiếp localStorage
4. Viết unit tests cho `LocalStorageAdapter`

### Dev C làm
1. Tạo `services/db.ts` với interface `DBAdapter` và factory `getDBAdapter()`
2. Implement `SupabaseAdapter` (hoặc adapter tương đương) khi cần mở rộng
3. Viết `services/sync.ts` — logic đồng bộ: detect online/offline, retry queue
4. Viết unit tests cho adapter (mock fetch)

### Cùng làm
- Thống nhất schema bảng dữ liệu (xem phần trên)
- Thống nhất `DBAdapter` interface trước khi bắt đầu code
- Review chéo PR của nhau trước khi merge vào `main`

---

## Tiêu chí nghiệm thu

- [ ] `LocalStorageAdapter` pass toàn bộ unit tests
- [ ] Đổi adapter không ảnh hưởng đến `App.tsx` và các component
- [ ] Khi mất mạng, app vẫn hoạt động bình thường với localStorage fallback
- [ ] Schema SQL được review và approve bởi cả Dev A + Dev C

## Ghi chú

- **Không commit** connection string hay API key vào repo — dùng `.env` và thêm vào `.gitignore`
- Giai đoạn 1 (localStorage) phải hoàn thành trước khi bắt đầu Giai đoạn 2
- Mọi thay đổi schema phải có migration script đi kèm
