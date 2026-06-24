# AIHub Monorepo — 智能体导航地图

## 项目概览
AIHub 是一个通用目录导航与评测平台。当前为 AI 工具导航场景，但架构支持任意类型的目录/评测平台。

## 核心原则
1. **Shared First** — 所有跨平台逻辑放 shared/，apps/*/ 只放页面 UI
2. **中英文双语** — 内置 zh-CN + en 切换
3. **通用可配置** — 数据模型、UI文案、主题均可配置
4. **Monorepo** — pnpm + TurboRepo 编排

## 目录结构
```
aihub/
├── shared/               # 共享代码包
│   ├── types/            # 类型定义 / DTO / 接口
│   ├── constants/        # 常量 / 枚举 / 配置数据
│   ├── utils/            # 纯函数 / 工具函数
│   ├── validators/       # 校验 Schema（Zod）
│   └── messages/         # 国际化翻译文件
├── apps/
│   └── web/              # Next.js 前端应用
│       ├── src/app/      # App Router 页面
│       └── src/components/ # UI 组件
├── tests/                # 测试
├── scripts/              # 辅助脚本
└── docs/                 # 知识库
```

## 关键命令
```bash
pnpm dev:web    # 启动 Web 应用
pnpm build:web  # 构建 Web 应用
pnpm test       # 运行所有测试
pnpm lint       # 代码检查
```

## 工作流程
1. 先检查 shared/ 是否已有需要的类型/工具函数
2. apps/*/ 下只写本端特有的页面和组件逻辑
3. 所有改动必须通过 lint + typecheck + build 验证