## 我该怎么用呢？

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
- 精准度为满时会显示完美无瑕金色
- 样式栏从 0 开始往上输入数字即可切换，有想要的可以反馈唷uwu
- 颜色栏只可以输入色号 (也可以试试其他人的名字唷)

### 精准度
iAcc(颜色)

### X精准度
iXAcc(颜色)

### 进度 
iProgress(颜色)

### 歌曲时间
iDuration

### 物量
iTile

### 砖块BPM
iTBPM(颜色)

### 实际BPM
iCBPM(颜色)

### 理论每秒点击
iKPS(颜色)

### 关卡信息
iLevel(颜色,样式)
- 颜色栏输入 Raw 可以显示谱师设置的富文本颜色

### 判定区间
iMargin

### 日期
iDate(样式)
- 目前只有一种样式唷uwu

### 偏移
iTiming
- 根据当前砖块判定改变颜色

### CPU占用
iCPU(颜色)

### 内存占用
iMem(颜色)

### 完美连击
iPCombo(颜色,范围)
- 范围栏代表从 0 到指定连击数内变色

### 真连击
iCombo(颜色,范围)
- 范围栏代表从 0 到指定连击数内变色
- 空敲与紫外都算连击
