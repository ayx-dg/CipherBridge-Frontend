# 设计更改文档 / Design Change Log

> 分支：`experiment`
> 项目：CipherBridge (FHE-Frontend)
> 目标：在不改变功能的前提下，重塑视觉风格，与原系统（靛蓝 + 顶栏）形成明显区分。
> 新设计方向：**「Emerald Fresh」翡翠清新风** —— 翡翠绿主色 + 左侧栏布局 + 更大圆角 + 绿色光晕阴影。
> 构建验证：`npx vite build` 通过（3606 modules，无错误）。

---

## 1. 主色调变更（Color · Primary）

**文件：** `src/index.css` → `:root` 变量
**文件：** `src/App.tsx` → antd `theme.token.colorPrimary`

| Token | 原值（靛蓝 Indigo） | 新值（翡翠绿 Emerald） |
|---|---|---|
| `--primary-color` | `#6366F1` | `#10B981` |
| `--primary-light` | `#818CF8` | `#34D399` |
| `--primary-dark` | `#4F46E5` | `#059669` |
| antd `colorPrimary` | `#1890FF`（蓝） | `#10B981`（绿） |

说明：从「冷调靛蓝」切换为「自然翡翠绿」，并在 antd 主题中同步 `colorPrimary`，消除原系统中靛蓝/蓝/蓝-600 三套主色并存的冲突，统一为单一绿色主色。

---

## 2. 中性色 / 背景 / 文字变更（Color · Neutrals）

**文件：** `src/index.css` → `:root`

| Token | 原值 | 新值 | 意图 |
|---|---|---|---|
| `--bg-color` | `#F8FAFC`（冷灰白） | `#ECFDF5`（薄荷白绿） | 整体背景带绿调 |
| `--card-bg` | `#FFFFFF` | `#FFFFFF`（不变） | 卡片保持纯白以突出 |
| `--text-primary` | `#1E293B`（深蓝灰） | `#064E3B`（深松绿） | 文字带绿调 |
| `--text-secondary` | `#64748B` | `#6B7280`（中性灰） | 次文字保持易读 |
| `--border-color` | `#E2E8F0`（冷灰） | `#D1FAE5`（浅绿） | 边框带绿调 |

说明：背景、文字、边框整体转向「绿系冷调」，与原冷灰系统区分。

---

## 3. 圆角变更（Border Radius）—— 更圆润柔和

**文件：** `src/index.css`

| 元素 | 原值 | 新值 |
|---|---|---|
| 卡片 `.ant-card` | `16px` | `20px` |
| 弹窗 `.custom-modal` | `16px` | `20px` |
| 表格 `.custom-table` | `12px` | `16px` |
| 输入框 `.ant-input` | `8px` | `12px` |
| 标签 `.ant-tag` | `6px` | `10px` |
| 菜单项选中态 | （无） | `12px`（新增） |

说明：全面提升圆角，营造更柔和、现代的「气泡感」视觉，与原系统偏直角的克制风格形成对比。

---

## 4. 阴影变更（Elevation）—— 绿色光晕

**文件：** `src/index.css`

| 元素 | 原阴影 | 新阴影 |
|---|---|---|
| Header | `0 2px 8px rgba(0,0,0,0.08)` | `0 1px 3px rgba(0,0,0,0.06)`（更轻） |
| 卡片 | `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06)` | `0 10px 30px -12px rgba(16,185,129,0.25)`（绿色光晕） |
| 卡片 hover | `0 10px 15px -3px ..., translateY(-2px)` | `0 20px 40px -12px rgba(16,185,129,0.35), translateY(-4px)`（更强悬浮） |
| 主按钮 | `0 2px 4px rgba(99,102,241,0.2)` | `0 6px 16px -4px rgba(16,185,129,0.4)` |
| 主按钮 hover | `0 4px 6px rgba(99,102,241,0.25)` | `0 10px 22px -4px rgba(16,185,129,0.5), translateY(-2px)` |
| 弹窗 | `0 20px 25px -5px ..., 0 10px 10px -5px ...` | `0 24px 48px -12px rgba(0,0,0,0.18)` |
| 侧边栏（新增） | — | `2px 0 12px rgba(16,185,129,0.06)` |

说明：阴影由「中性黑灰」改为「带主色的绿色光晕」，强化品牌色渗透；卡片悬浮位移由 -2px 加大到 -4px，交互反馈更明显。

---

## 5. 布局变更（Layout）—— 顶栏 → 左侧栏

**文件：** `src/components/Layout.tsx`（重构）
**文件：** `src/index.css`（新增 `.ant-layout-sider`、`.app-logo`、`.ant-layout-header` 调整）

| 维度 | 原设计 | 新设计 |
|---|---|---|
| 导航结构 | 顶部 `Header` 横向 `Menu`（horizontal） | 左侧 `Sider` 纵向 `Menu`（inline），宽 `240px` |
| Header | 含 Logo + 菜单 + 钱包按钮 | 仅右侧钱包按钮（Logo 移到侧栏顶部） |
| 侧栏 | 无 | 白色背景 + 右侧绿调阴影 + sticky 满高 |
| 菜单交互 | hover `text-blue-600`（Tailwind） | 选中态 `rgba(16,185,129,0.12)` 背景 + `12px` 圆角 + 深绿字；hover 变深绿 |
| 内容区 | `.page-container` `max-width:1200px` | 去除最大宽度限制，`padding:32px`，随侧栏自适应 |
| Logo | 高度 `40px`，置于顶栏 | 高度 `44px`，居中于侧栏顶部（`margin:20px auto`） |

说明：将原「顶部横向导航」彻底改为「左侧固定纵向导航」，这是与原系统最显著的视觉/结构差异；同时菜单点击通过 `useNavigate` 路由跳转（原为 `<Link>` 包裹）。

---

## 6. 字体排版微调（Typography）

**文件：** `src/index.css`、antd token

| 元素 | 原值 | 新值 |
|---|---|---|
| `.section-title` | `24px / 600` | `26px / 700` + `letter-spacing:-0.3px` |
| 标题 `h1-h5` 字重 | `600` | `700` |
| 侧栏菜单字号 | `16px / 500`（横向） | `15px / 500`（纵向） |
| antd `colorText` | （默认） | `#064E3B` |
| antd `colorBorder` | （默认） | `#D1FAE5` |
| antd `borderRadius` | （默认 6） | `10` |

说明：标题字重加粗到 700，字号略增；antd 文字/边框色同步为绿系，使组件框架与自定义样式一致。

---

## 7. 其他细节

- **表格 hover 行底色**：`rgba(99,102,241,0.05)` → `rgba(16,185,129,0.06)`
- **输入框 focus 光环**：`0 0 0 2px rgba(99,102,241,0.2)` → `0 0 0 3px rgba(16,185,129,0.18)`
- **Badge / Tag**：阴影与 padding 改为绿系（`10px` 圆角、padding `4px 10px`）
- **菜单选中/悬浮**：新增 `.ant-menu-item-selected` 与 `.ant-menu-item:hover` 样式（绿色背景圆角）

---

## 8. 色彩体系改用 Material 3 (M3) 规范（仅改色调）

**范围：** 仅替换颜色（色调 / Color），布局、圆角、阴影结构、排版保持不变（相对 §1–§7 的「翡翠绿」版本）。
**来源：** [Material 3 官方 Baseline 色板](https://m3.material.io/styles/color/roles)（material-web `md-sys-color` 基准值）。
**改动文件：** `src/index.css`（`:root` 变量 + 所有透明光晕色）、`src/App.tsx`（`colorPrimary` 等 antd token）。

### 8.1 M3 角色 → 项目 CSS 变量映射

| M3 角色 (role) | M3 取值 (Baseline) | 映射到的变量 | 原「翡翠绿」值 |
|---|---|---|---|
| `primary` (tone 40) | `#6750A4` | `--primary-color` | `#10B981` |
| `primary-container` (tone 90) | `#EADDFF` | `--primary-light` | `#34D399` |
| `on-primary-container` (tone 10) | `#21005D` | `--primary-dark` | `#059669` |
| `background` (tone 98) | `#FFFBFE` | `--bg-color` | `#ECFDF5` |
| `surface` | `#FFFFFF` | `--card-bg` | `#FFFFFF` |
| `on-surface` (tone 10) | `#1C1B1F` | `--text-primary` | `#064E3B` |
| `on-surface-variant` (tone 30) | `#49454F` | `--text-secondary` | `#6B7280` |
| `outline-variant` (tone 80) | `#CAC4D0` | `--border-color` | `#D1FAE5` |

> 另新增辅助变量 `--m3-primary-rgb: 103, 80, 164`，供所有 `rgba()` 透明光晕（卡片/按钮/输入框/Badge/侧栏/菜单选中态/表格 hover）复用，避免散落硬编码。

### 8.2 antd 主题 Token 同步（`src/App.tsx`）

| Token | 原「翡翠绿」值 | 新 M3 值 |
|---|---|---|
| `colorPrimary` | `#10B981` | `#6750A4` |
| `colorText` | `#064E3B` | `#1C1B1F` |
| `colorBorder` | `#D1FAE5` | `#CAC4D0` |
| `borderRadius` | `10` | `10`（不变） |

### 8.3 透明光晕色重着色（retint）

所有原本使用翡翠绿 `rgba(16,185,129,…)` 的位置，统一改为 M3 主色 `rgba(103,80,164,…)`：

| 位置 | 透明度/作用 | 变化 |
|---|---|---|
| 侧栏阴影 | `0.06→0.08` | 绿 → 紫 |
| 卡片阴影 | `0.25` / hover `0.35` | 绿 → 紫 |
| 主按钮阴影 | `0.4` / hover `0.5` | 绿 → 紫 |
| 输入框 focus 光环 | `0.18` | 绿 → 紫 |
| Badge 阴影 | `0.4` | 绿 → 紫 |
| 菜单选中 / hover 背景 | `0.12` | 绿 → 紫 |
| 表格行 hover 底色 | `0.06→0.08` | 绿 → 紫 |
| 表格表头背景 | `#F0FDF4` → `#E7E0EC` | 绿底 → M3 `surface-variant` |

### 8.4 设计要点

- 采用 M3 **Baseline** 参考色板（紫调），是 Material 3 官网的规范基准；如需其他品牌色，可用 [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) 以任意种子色生成同样结构的 M3 角色集合后替换上述取值。
- 角色命名遵循 M3：`primary / primary-container / on-primary-container / background / surface / on-surface / on-surface-variant / outline-variant`，保证与 Material 生态一致。
- 仅改色调，未触碰 §5 的布局（侧栏）、§3 的圆角、§4 的阴影偏移量，因此视觉结构仍与「翡翠绿」版本一致，仅配色由绿转紫。

---

## 视觉差异小结（Before → After）

| 维度 | Before（原系统） | After（experiment 分支 · M3 版） |
|---|---|---|
| 主色 | 靛蓝 `#6366F1` + 蓝 `#1890FF` 混合 | M3 紫 `#6750A4` 统一 |
| 背景 | 冷灰白 `#F8FAFC` | M3 `#FFFBFE` |
| 导航 | 顶部横向栏 | 左侧固定纵向栏 |
| 圆角 | 6–16px（偏直角） | 10–20px（柔和圆润） |
| 阴影 | 中性黑灰 | M3 主色紫色光晕 |
| 标题字重 | 600 | 700 |
| 色板规范 | 自定义 | Material 3 Baseline 角色体系 |

> 备注：原仓库缺少 `tsconfig.json`，`npm run build` 中的 `tsc` 步骤会失败；本次验证使用 `npx vite build` 直接构建通过。建议后续补回 `tsconfig.json`。
> 文件名已从 `desgin_doc.md` 修正为 `design_doc.md`。

---

## 9. 布局微调：侧栏右置 + Logo 移出侧栏 + 首页 Portal 卡宽度

**相较原始文件（`src/components/Layout.tsx` 原版、`src/pages/Home.tsx` 原版）的改动。**
**改动文件：** `src/components/Layout.tsx`、`src/pages/Home.tsx`
**构建验证：** `npx vite build` 通过。

### 9.1 全局布局：aside（Sider）移到右侧，Logo 移到 aside 外（`Layout.tsx`）

原版结构（左侧栏）：
```
AntLayout
 ├─ Sider (左, 内含 app-logo + Menu)
 └─ AntLayout
      ├─ Header (仅钱包按钮)
      └─ Content
```
新版结构（右侧栏）：
```
AntLayout
 ├─ AntLayout
 │    ├─ Header (左: app-logo / 右: 钱包按钮)
 │    └─ Content
 └─ Sider (右, 仅 Menu，无 logo)
```

| 改动点 | 原版 | 新版 |
|---|---|---|
| 侧栏位置 | 左侧（`Sider` 为第一个子元素） | **右侧**（`Sider` 置于 `AntLayout` 之后） |
| `app-logo` 位置 | 在 `Sider` 内部（`<Link><img className="app-logo"></Link>`） | **移出 `Sider`**，放入 `Header` 左侧 |
| `app-logo` 样式 | `.app-logo` 类含 `margin:20px auto`（用于侧栏居中） | Header 内联 `style={{ margin: 0 }}` 覆盖，左对齐 |
| Header 内容 | 仅右侧钱包按钮（`marginLeft:auto`） | 左侧 Logo + 右侧钱包按钮（Logo 后 `marginLeft:auto` 推开） |

> 说明：仅调整 DOM 顺序与 Logo 位置，未改动侧栏宽度（240px）、sticky 行为、菜单项与选中态样式。

### 9.2 首页：Portal 卡片宽度与配色（`Home.tsx`）

| 改动点 | 原版 | 新版 | 目的 |
|---|---|---|---|
| Portal 卡片容器宽度 | `max-w-5xl` (1024px) | `max-w-4xl` (896px) + `mx-auto` | 解决「Client/Bank Portal 太宽」 |
| 卡片排布 | `grid-cols-1 md:grid-cols-2` | 同左（保持不变） | 两卡**同一水平**并排 |
| Hero 背景渐变 | `from-blue-50 to-white` | `from-[#EADDFF]/50 to-white` | 蓝色 → M3 `primary-container` 浅紫 |
| 标题渐变文字 | `from-blue-600 to-blue-400` | `from-[#6750A4] to-[#9A82D0]` | 蓝色 → M3 `primary` 及浅紫 |
| 图标圆形底 | `bg-blue-50` / `text-blue-500` | `bg-[#EADDFF]` / `text-[#6750A4]` | 蓝色 → M3 主色系 |

> 说明：首页原版仍残留「靛蓝/蓝」硬编码 Tailwind 类，与 §8 M3 紫色体系冲突；本次一并改为 M3 主色（primary `#6750A4`、primary-container `#EADDFF`），保持全局一致。卡片 `hover:scale-105 shadow-lg` 等交互类保持不变。

### 9.3 视觉差异小结（本轮）

| 维度 | 原版（本分支此前） | 本轮后 |
|---|---|---|
| 侧栏位置 | 左侧 | **右侧** |
| Logo 位置 | 侧栏内 | **Header 内（侧栏外）** |
| 首页 Portal 卡 | `max-w-5xl`（偏宽） | `max-w-4xl`（收窄、并排） |
| 首页蓝→紫 | 靛蓝渐变 | M3 紫色系 |
