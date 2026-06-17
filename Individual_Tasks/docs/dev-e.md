# Dev E — QA, Testing, CI/CD & Docs

[← Dev D](./dev-d.md) · [Docs index](./README.md)

---

## Vai trò

Thiết lập CI/CD, viết E2E tests, và quản lý tài liệu developer.

## Deliverables

| File | Mô tả |
|------|-------|
| `.github/workflows/ci.yml` | CI: tsc + unit tests + build |
| `cypress/e2e/happy-path.cy.ts` | E2E test: thêm câu hỏi → preview → export |
| `README.md` (root) | Hướng dẫn dev, build, deploy hoàn chỉnh |
| `docs/qa-checklist.md` | Checklist QA trước khi release |

## Nhiệm vụ

1. Tạo `.github/workflows/ci.yml` với 3 bước: `tsc --noEmit` → `npm test` → `npm run build`.
2. Cài đặt Cypress và viết E2E test happy path.
3. Hoàn thiện `README.md` root với dev instructions và deploy guide.
4. Tạo QA checklist và hướng dẫn release / tagging.
5. (Optional) Cấu hình Vercel preview deploy cho PRs.

## CI Workflow mẫu

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
      - run: npx tsc --noEmit
      - run: npm test -- --watchAll=false
      - run: npm run build
```

## E2E Test Scope

```
Happy path:
1. Mở trang → kiểm tra tiêu đề mặc định hiển thị
2. Thêm câu hỏi trắc nghiệm → nhập tiêu đề và 2 lựa chọn
3. Chuyển sang Preview → kiểm tra câu hỏi hiển thị đúng
4. Export JSON → kiểm tra file download có tên hợp lệ
```

## Acceptance Criteria

- [ ] CI chạy qua cả 3 bước (tsc, tests, build) trên `main` branch.
- [ ] E2E happy-path test pass khi chạy `npx cypress run` locally.
- [ ] PR template nhắc reviewer chạy `npx tsc --noEmit`.

## Ước lượng: 2–3 ngày

## Chức năng chính phát triển

- **CI pipeline** — GitHub Actions chạy tự động: tsc → unit tests → build khi push/PR
- **E2E tests** — Cypress kiểm tra happy path: thêm câu hỏi → preview → export JSON
- **PR template** — checklist nhắc reviewer chạy `tsc --noEmit` và unit tests trước merge
- **QA checklist** — danh sách kiểm tra thủ công trước mỗi release
- **README root** — hướng dẫn cài đặt, build, deploy (Netlify / Vercel / GitHub Pages)
- **Release management** — tag Semantic Versioning, viết release notes, quản lý merge policy

## Ghi chú

- Dùng `npm ci` thay `npm install` trong CI để đảm bảo reproducible builds.
- Tag release theo [Semantic Versioning](https://semver.org/): `v1.0.0`, `v1.1.0`...
