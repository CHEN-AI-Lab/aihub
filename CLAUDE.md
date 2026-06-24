# CLAUDE.md — AIHub Monorepo

## 项目概述
通用目录导航与评测平台 monorepo。目前实现 AI 工具导航场景，架构支持任意品类。

## 快速开始
```bash
pnpm install
pnpm dev:web     # http://localhost:3000
pnpm build:web   # 构建
pnpm test        # 测试
```

## 关键路径
- `shared/types/` — 所有数据类型定义
- `shared/constants/` — 分类、配置数据
- `shared/utils/` — 搜索、排序等纯函数
- `shared/messages/` — 中英文翻译
- `apps/web/src/app/` — 页面路由
- `apps/web/src/components/` — UI 组件

## 硬性规则
- 类型/常量/工具函数放 shared/，不在 apps/ 下重复
- 所有页面文案走 i18n，不硬编码
- 组件 props 必须定义完整类型
- 启动前 export 环境变量：`export $(grep -v '^#' /home/ubuntu/workspace/global.env | xargs)`