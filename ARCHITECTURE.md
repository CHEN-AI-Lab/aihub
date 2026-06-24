# 架构文档

## 系统架构
```
用户浏览器
    │
    ▼
apps/web (Next.js App Router)
├── 页面: 首页 / 分类 / 详情 / 搜索 / 提交
├── 组件: UI 组件（引用 shared/ 的类型和工具）
└── i18n: next-intl v3 (cookie-only)
    │
    ▼
shared/ 包
├── types/     → 数据模型、DTO、接口
├── constants/ → 分类、配置、枚举
├── utils/     → 搜索、排序、过滤等纯函数
├── validators/→ Zod Schema
└── messages/  → zh-CN.json + en.json
```

## 数据模型
### Item（通用条目）
- id, name, slug, description, longDescription
- url, pricing, rating, reviewCount, upvotes
- featured (boolean), category
- features, pros, cons
- createdAt

### Category（分类）
- id, name, slug, description, icon, color
- itemCount

### Review（评测）
- id, itemId, author, rating, title, content
- pros, cons, createdAt

## 通用化设计
- 数据模型命名为 `Item` 而非 `Tool`（支持任意品类）
- 文案通过 next-intl 配置，不硬编码
- 站点名称/描述通过环境变量配置