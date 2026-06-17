# Dev E — Kiểm thử, CI/CD & Tài liệu

[← Dev D](./dev-d.md) · [Mục lục tài liệu](./README.md)

---

![CI/CD Overview](https://placehold.co/860x200/0f1724/white?text=CI+Pipeline%3A+Push+%2F+PR+%E2%86%92+tsc+%E2%86%92+Unit+Tests+%E2%86%92+Build)

## Vai trò

Thiết lập CI/CD, viết E2E tests, và quản lý toàn bộ tài liệu developer.

## Sản phẩm bàn giao

| Tệp | Mô tả |
|-----|-------|
| `.github/workflows/ci.yml` | CI pipeline: tsc + unit tests + build |
| `.github/pull_request_template.md` | PR template với checklist |
| `cypress/e2e/happy-path.cy.ts` | E2E test: thêm câu hỏi → preview → export |
| `README.md` (root) | Hướng dẫn dev, build, deploy hoàn chỉnh |
| `docs/qa-checklist.md` | Checklist QA thủ công trước khi release |

## Nhiệm vụ

1. Tạo `.github/workflows/ci.yml` với 3 bước: `tsc --noEmit` → `npm test` → `npm run build`.
2. Cài đặt Cypress và viết E2E test happy path.
3. Tạo PR template với checklist cho reviewer.
4. Hoàn thiện `README.md` root với dev instructions và deploy guide.
5. Tạo QA checklist và hướng dẫn release / tagging.
6. (Tùy chọn) Cấu hình Vercel preview deploy cho PRs.

## Tiêu chí nghiệm thu

- [ ] CI chạy qua cả 3 bước (tsc, tests, build) trên `main` branch.
- [ ] E2E happy-path test pass khi chạy `npx cypress run` locally.
- [ ] PR template hiển thị đúng khi tạo PR mới trên GitHub.

## Ước lượng: 2–3 ngày

## Chức năng chính phát triển

### 🔄 CI Pipeline (GitHub Actions)
Tự động chạy mỗi khi có `push` hoặc `pull_request` vào `main`:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  ci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx tsc --noEmit       # Kiểm tra kiểu TypeScript
      - run: npm test -- --watchAll=false  # Chạy unit tests
      - run: npm run build           # Build sản phẩm
```

3 bước theo thứ tự, fail sớm — nếu tsc lỗi thì không chạy tiếp test và build.

### 🧪 E2E Tests (Cypress)

![E2E Flow](https://placehold.co/860x140/f2fbfa/0ea5a4?text=Them+cau+hoi+%E2%86%92+Nhap+noi+dung+%E2%86%92+Preview+%E2%86%92+Export+JSON+%E2%86%92+Pass)

Kiểm tra luồng sử dụng chính của ứng dụng:

```
Luồng happy path:
1. Mở trang → tiêu đề form mặc định hiển thị đúng
2. Nhấn "Thêm câu hỏi" → QuestionCard mới xuất hiện
3. Đổi loại thành "Trắc nghiệm" → ô nhập lựa chọn hiện ra
4. Nhập tiêu đề câu hỏi và 2 lựa chọn
5. Chuyển sang tab Preview → câu hỏi và lựa chọn hiển thị đúng
6. Quay lại Editor → nhấn Export JSON → file tải về có tên hợp lệ
```

Ngoài happy path, viết thêm test cho:
- Undo/Redo: thêm câu hỏi → Undo → câu hỏi biến mất → Redo → câu hỏi xuất hiện lại
- AI Chatbox: mở chatbox → nhập lệnh → action được áp dụng lên form

### 📋 PR Template
File `.github/pull_request_template.md` tự động điền vào ô mô tả khi tạo PR mới:

```markdown
## Mô tả thay đổi
<!-- Mô tả ngắn gọn những gì đã thay đổi -->

## Loại thay đổi
- [ ] Bug fix
- [ ] Tính năng mới
- [ ] Cải tiến hiệu năng / refactor
- [ ] Cập nhật tài liệu

## Checklist trước khi merge
- [ ] `npx tsc --noEmit` chạy không lỗi
- [ ] Unit tests pass (`npm test`)
- [ ] Đã kiểm tra trên trình duyệt (Chrome + Firefox)
- [ ] Không có console.error trong runtime
```

### ✅ QA Checklist thủ công

![QA Checklist](https://placehold.co/860x140/fff7ed/ff6b35?text=QA+truoc+release%3A+8+loai+cau+hoi+%7C+Undo%2FRedo+%7C+AI+%7C+Theme+%7C+Export%2FImport)

Danh sách kiểm tra trong `docs/qa-checklist.md` trước mỗi release:
- Tạo form mới, thêm đủ 8 loại câu hỏi, lưu và reload → dữ liệu còn nguyên
- Undo/Redo hoạt động đúng cho mọi thao tác
- AI chatbox nhận lệnh và tạo câu hỏi thành công
- Đổi theme → màu cập nhật toàn bộ UI
- Export JSON → Import lại → form khớp hoàn toàn
- Preview hiển thị đúng, nút Gửi ra trang xác nhận
- ShareModal copy link / embed code hoạt động
- Kiểm tra keyboard navigation cơ bản

### 📖 README & Tài liệu
- `README.md` root: hướng dẫn clone, cài đặt, chạy dev server, build production, deploy lên Netlify/Vercel/GitHub Pages
- `docs/README.md`: mục lục tài liệu nội bộ team (file này)
- Mỗi file `dev-*.md`: mô tả chi tiết vai trò, nhiệm vụ, chức năng của từng thành viên

### 🏷 Quản lý Release
- Tag version theo [Semantic Versioning](https://semver.org/): `v1.0.0`, `v1.1.0`, `v1.2.0`...
- Viết release notes tóm tắt tính năng mới và bug fixes cho mỗi tag
- Chính sách merge: squash merge vào `main`, branch tính năng xóa sau khi merge
- (Tùy chọn) Cấu hình Vercel để tự động deploy preview URL cho mỗi PR

## Ghi chú

- Dùng `npm ci` thay `npm install` trong CI để đảm bảo reproducible builds.
- Tag release theo [Semantic Versioning](https://semver.org/): `v1.0.0`, `v1.1.0`...
