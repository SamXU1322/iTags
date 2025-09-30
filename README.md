## 我该怎么用呢？

请确保已安装  **Overlayer V3**  与  **Overlayer.Scripting** 

1) 将  **iTags.js**  拷贝到以下路径
2) **(你自己的Steam根目录)**\steamapps\common\A Dance of Fire and Ice\Mods\Overlayer.Scripting\Scripts
3) 在游戏内  **Overlayer.Scripting**  设置内点  **Reload** 

例子 ->  **{iLevel(aa,bb)}** ## 我该怎么用呢？

请确保已安装  **Overlayer V3**  与  **Overlayer.Scripting** 

1) 将  **iTags.js**  拷贝到以下路径
2) **(你自己的Steam根目录)**\steamapps\common\A Dance of Fire and Ice\Mods\Overlayer.Scripting\Scripts
3) 在游戏内  **Overlayer.Scripting**  设置内点  **Reload** 

例子 ->  **{iLevel(aa,bb)}** 
- 小括号内可以写个性化选项
- 一个 tag 可能会有多个选项，用逗号分隔
- 如果只想调 b 可以在 a 处输入空格表示默认
- 不写小括号代表默认选项
- 详见下文

## 默认设置

这些在 iTags.js 内有，可以自行修改

```javascript
/* 颜色选择 */
const accent = "B9DEFF" // 强调色

/* BPM变色范围 */
const minBPM = 0        // 最小BPM
const maxBPM = 8000     // 最大BPM

/* 精准度变色范围 (根据XAcc) */
const minXAcc = 90      // 最小精准
const maxXAcc = 100     // 最大精准

/* 连击数变色范围 */
const minCombo = 0      // 最小连击数
const maxCombo = 500    // 最大连击数
// "RGB" 为彩虹色
```

## Tag 总览

下面列出了一些常用的其创建的标签

其他标签可见源码

iAcc

iXAcc

iProgress

iDuration

iTile

iTBPM

iCBPM

iKPS

iLevel

iMargin

iDate

iTiming

iCPU

iMem

iPCombo

- 小括号内可以写个性化选项
- 一个 tag 可能会有多个选项，用逗号分隔
- 如果只想调 b 可以在 a 处输入空格表示默认
- 不写小括号代表默认选项
- 详见下文

## 默认设置

这些在 iTags.js 内有，可以自行修改

```javascript
/* 颜色选择 */
const accent = "B9DEFF" // 强调色

/* BPM变色范围 */
const minBPM = 0        // 最小BPM
const maxBPM = 8000     // 最大BPM

/* 精准度变色范围 (根据XAcc) */
const minXAcc = 90      // 最小精准
const maxXAcc = 100     // 最大精准

/* 连击数变色范围 */
const minCombo = 0      // 最小连击数
const maxCombo = 500    // 最大连击数
// "RGB" 为彩虹色
```

## Tag 总览

下面列出了一些常用的其创建的标签

其他标签可见源码

iAcc

iXAcc

iProgress

iDuration

iTile

iTBPM

iCBPM

iKPS

iLevel

iMargin

iDate

iTiming

iCPU

iMem

iPCombo
