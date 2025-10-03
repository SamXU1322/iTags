import "./Impl"
use(
    "Accuracy", "XAccuracy",
    "Progress", "CurMinute", "CurSecond", "TotalMinute", "TotalSecond", "CurTile", "TotalTile",
    "TileBpm", "CurBpm", "RecKPS",
    "PHex", "EPHex", "VEHex", "TEHex", "FOHex", "MPHex", "CP", "CEP", "CLP", "CTE", "CTL", "CVE", "CVL", "MissCount", "Overloads", "Multipress", "CHitRaw",
    "Artist", "Title", "Author", "EditorPitch", "Pitch", "ArtistRaw", "TitleRaw", "AuthorRaw",
    "Year", "Month", "Day", "Hour", "Minute", "Second", "MilliSecond",
    "CpuUsage", "TotalCpuUsage", "MemoryUsageGBytes", "MemoryUsage", "MemoryGBytes",
    "ColorRange", "MovingMan",
    "Combo", "MaxCombo", "MarginCombos",
    "MarginScale",
    "iTiming"
)





/* 更新日志 */
const updateNotes = `<size=200%>- 更新日志 -</size>
- 重构 iTags 所有代码
- 删除不必要的 Tag 设置
- 大量 Tags 设置用法优化改动
- 详细请前往 gitee iTags 查看~
- 多合一将在 Overlayer 更新行间距调整后实装`





/* 颜色选择 */
const accent = "B9DEFF" // 强调色 (可以输入其他人的名字唷)

/* BPM变色范围 */
const minBPM = 0        // 最小BPM
const maxBPM = 8000     // 最大BPM

/* 精准度变色范围 (根据XAcc) */
const minXAcc = 90      // 最小精准
const maxXAcc = 100     // 最大精准

/* 连击数变色范围 */
const minCombo = 0      // 最小连击数
const maxCombo = 500    // 最大连击数





/* 功能调用 */
/**
 * 文本清洁函数
 * @param {string} text 
 * @returns 一个去除换行回车符和size标签的文本
 */
function cleanText(text) {
    return text.replace("\r\n", "").replace(/<\/?size=[^>]*>/g, "")
}
/**
 * 非空字串判断函数
 * @param {string} text 
 * @returns 一个布尔值，判断文本是否为空或只有空格，如果是，返回 true
 */
function isEmpty(text) {
    return /^ *$/.test(text)
}
/**
 * 数字补零函数
 * @param {number} num 
 * @param {number} length 
 * @returns 一个数字，前面补0
 */
function padNumber(num, length) {
    return String(num).padStart(length, "0")
}
/**
 * 颜色判断函数
 * @param {string} Text
 * @returns 一个颜色渐变标签会随着Timing变色
 */
function colorJudge(Text) {
    const Colors = [TEHex(), VEHex(), EPHex(), PHex(), EPHex(), VEHex(), TEHex(), MPHex(), FOHex(), FOHex()]
    const Color = Colors[CHitRaw()]
    return `<color=#${Color}>${Text}</color>`
}
/**
 * 颜色代码生成函数
 * @param {string} hex 
 * @returns 提供hex对于的16进制颜色或固定样式的颜色拓展
 */
function colorType(hex) {
    const accentHex = isEmpty(hex) ? accent : hex
    switch (accentHex) {
        case "SamXU1322":
            return RGB()
        case "a6.":
            return "CAE2FF"
        case "StarRiver":
            return "7DF9FF"
        case "Jipper":
            return "B75BfB"
        case "Jate":
            return "D88000"
        case "Meow":
            return "00FFA6"
        case "DaoYi":
            return "FCBDB6"
        case "Reaper":
            return "B3EE3A"
        case "bingluID":
            return "B6FAFB"
        case "Ciforance":
            return "E01944"
        case "Kurosaaa":
            return "E6E0F4"
        default:
            return (hex.length != 6 && hex.length != 8) ? accent : accentHex
    }
}
/**
 * 颜色渲染函数
 * @param {string} tag 标签名
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @param {string} hex 颜色代码
 * @param {string} text 文本文字
 * @returns 一个字符串会随着min到max之间从min颜色渐变到max颜色
 */
function gradient(tag, min, max, hex, text) {
    return `<color=#${ColorRange(tag, min, max, "FFFFFF", colorType(hex))}>${text}</color>`
}





/* 精准度 */
/**
 * iAcc标签函数
 * @param {String} hex 颜色代码
 * 提供根据XAccuracy控制Acc的颜色变化，变化范围可以通过更改minXAcc和maxXAcc来改变的文本
 */
function iAcc(hex) {
    return gradient("XAccuracy", minXAcc, maxXAcc, hex, `${Accuracy(2)}%`)
}
/**
 * iXAcc标签函数
 * 
 * @param {string} hex 颜色代码
 * 
 * 提供根据XAccuracy控制XAcc的颜色变化，变化范围可以通过更改minXAcc和maxXAcc来改变的文本
 */
function iXAcc(hex) { 
    const XAcc = isNaN(XAccuracy()) ? 100 : XAccuracy(2)
    return gradient("XAccuracy", minXAcc, maxXAcc, hex, `${XAcc}%`)
}





/* 进度 */
/**
 * 进度变色函数
 * @param {string} hex 颜色代码
 * 提供根据进度改变进度文本颜色的文本
 */
function iProgress(hex) {
    return gradient("Progress", 0, 100, hex, `${Progress(2)}%`)
}
/**
 * 音乐时间函数 格式为（当前时间(分:秒)/总时间(分:秒)）
 */
function iDuration() {
    return `${CurMinute()}:${padNumber(CurSecond(), 2)}/${TotalMinute()}:${padNumber(TotalSecond(), 2)}`
}
/**
 * 物量函数 格式为（已打物量/总物量）
 */
function iTile() {
    return `${(CurTile() - 1)} / ${(TotalTile() - 1)}`
}






/* BPM */
/**
 * 轨道bpm函数
 * @param {string} hex 颜色代码 
 * 提供根据当前BPM控制轨道BPM文字的颜色变化，变化范围可以通过更改minBPM和maxBPM来改变的文本
 */
function iTBPM(hex) {
    return gradient("TileBpm", minBPM, maxBPM, hex, TileBpm(3))
}
/**
 * 真实BPM函数
 * @param {string} hex 颜色代码 
 * 提供根据当前BPM控制真实BPM文字的颜色变化，变化范围可以通过更改minBPM和maxBPM来改变的文本
 */
function iCBPM(hex) {
    return gradient("CurBpm", minBPM, maxBPM, hex, CurBpm(3))
}
/**
 * KPS函数
 * @param {string} hex 颜色代码 
 * 提供根据当前BPM控制KPS文本的颜色变化，变化范围可以通过更改minBPM和maxBPM来改变的文本
 */
function iKPS(hex) {
    return gradient("CurBpm", minBPM, maxBPM, hex, RecKPS(3))
}





/* 标题 */
/**
 * 标题函数
 * @param {string} hex 颜色函数
 * @param {string} style 
 * 提供会根据一定的格式将歌曲名，创作者，谱师显示的标题
 */
function iLevel(hex,style) {

    // 优化字符
    let newArtist = cleanText(Artist())
    let newTitle = cleanText(Title())
    let newAuthor = cleanText(Author())
    let newPitch = Pitch() * EditorPitch()

    // 颜色模式
    const thisAccent = colorType(hex)
    function colorMode(text, hex) {
        if (hex == "Raw") {
            return text
        } else {
            return `<color=#${hex}>${text}</color>`
        }
    } 
    if (hex == "Raw") {
        newArtist = cleanText(ArtistRaw())
        newTitle = cleanText(TitleRaw())
        newAuthor = cleanText(AuthorRaw())
    }
    
    // 默认样式
    let iArtist = isEmpty(newArtist) ? "" : `${newArtist} - `
    let iTitle = newTitle
    let iAuthor = isEmpty(newAuthor) ? "" : `<size=60%>\nLevel By ${colorMode(newAuthor, thisAccent)}</size>`
    let iPitch = newPitch == 1 ? "" : ` (${newPitch}x)`

    // 选择样式
    switch (style) {
        case "0":
            iArtist = isEmpty(newArtist) ? "" : `${newArtist} | `
            iAuthor = isEmpty(newAuthor) ? "" : `\nLevel By ${colorMode(newAuthor, thisAccent)}`
            iPitch = newPitch == 1 ? "" : ` | ${newPitch}`
            return `${iArtist}${iTitle}${iPitch}${iAuthor}`
        case "1":
            return `${iArtist}${iTitle}${iPitch}`
        default:
            return `${iArtist}${iTitle}${iPitch}${iAuthor}`
    }

}





/* 连击数 */
/**
 * 完美连击数函数
 * @param {string} hex 颜色代码
 * @param {number} range 连击数范围
 * 提供根据完美连击函数改变颜色的完美连击文本
 */
function iPCombo(hex, range) {
    const comboRange = isEmpty(range) ? maxCombo : range
    return `<size=${MovingMan("Combo", 100, 150, 100, 800, "true")}%>${gradient("Combo", minCombo, comboRange, hex, Combo())}</size>\n<size=40%>Perfect</size>`
}
/**
 * 连击数函数
 * @param {string} hex 颜色代码
 * @param {number} range 连击数范围
 * 提供根据当前连击数显示颜色的文本
 */
function iCombo(hex, range) {

    const combo = MarginCombos("Perfect|EarlyPerfect|LatePerfect|VeryEarly|VeryLate")
    const comboRange = isEmpty(range) ? maxCombo : range
    const minRange = CurTile() - combo
    const maxRange = minRange + comboRange
    function size() {
        if (CHitRaw() >= 1 && CHitRaw() <= 5) {
            return MovingMan("CurTile", 100, 150, 100, 800, "true")
        } else {
            return "100"
        }
    }

    return `<size=${size()})}%>${gradient("CurTile", minRange, maxRange, hex, combo)}</size>\n<size=40%>Combo</size>`

}





/* 性能 */
/**
 * CPU使用率函数
 * @param {string} hex 颜色代码
 * 提供根据CPU使用率改变颜色的文本
 */
function iCPU(hex) {
    return `${gradient("CpuUsage", 0, 100, hex, `${CpuUsage(0)}%`)} / ${TotalCpuUsage(0)}%`
}
/**
 * 内存使用率函数
 * @param {string} hex 颜色代码
 * 提供根据内存使用率改变颜色的文本
 */
function iMem(hex) {
    return `${gradient("MemoryUsage", 0, 100, hex, `${MemoryUsageGBytes(0)}GB (${MemoryUsage(0)}%)`)} / ${MemoryGBytes(0)}GB`
}





/* 其他 */
/**
 * 判定范围显示函数
 * @param {string} hex 颜色代码
 * 判断范围文本
 */
function iMargin() {
    const Margin = (MarginScale() * 100).toFixed(4)
    return /\.\d*[1-9]\d*$/.test(Margin) ? `${Margin}%` : `${Margin.replace(/\.0+$/, "")}%`
}
/**
 * 时间函数
 * @param {string} style 样式
 * 当前时间文本
 */
function iDate(style) {

    // 优化时间格式
    const iHour = padNumber(Hour(), 2)
    const iMinute = padNumber(Minute(), 2)
    const iSecond = padNumber(Second(), 2)

    // 选择样式
    switch (style) {
        case 0:
            return "还没写完呢"
        default:
            return `${Year()}.${Month()}.${Day()} ${iHour}:${iMinute}:${iSecond}`
    }

}
/**误差判断函数
 *  提供会根据时间误差进行颜色判断的文本
*/
function iTiming() {
    return colorJudge(`${Timing(2)}ms`)
}
/**分数判断函数
 * @param {string} style
 *  分数文本
*/
function iScore(style) {

    // 定义分数
    const full = (TotalTile() - 1) * 300
    const combo = (MaxCombo() * 300) * 0.1 / full
    const basic = (CP() * 300 + (CEP() + CLP()) * 150 + (CVE() + CVL()) * 91) / full

    // 选择样式
    switch (style) {
        case "Arcaea":
            return Math.round(padNumber((10000000 * basic), 8)) + CP()
        default:
            return Math.round(padNumber((basic * 0.9 + combo) * 1000000), 7)
    }
}
/**
 * 获取 iScore
 * @param {string} style 样式
 * @returns {number} 
 */
function iJudge(color, Judgement) {
    const icon = `<color=#${color}>\u25CF</color>`
    const count = Judgement == 0 ? "-" : Judgement
    return `${icon}\n<size=50%>${count}</size>`
}





/* Tag注册 */
registerTag("iAcc", function (hex) {
    return iAcc(hex)
})
registerTag("iXAcc", function (hex) {
    return iXAcc(hex)
})
registerTag("iProgress", function (hex) {
    return iProgress(hex)
})
registerTag("iDuration", function () {
    return iDuration()
})
registerTag("iTile", function () {
    return iTile()
})
registerTag("iTBPM", function (hex) {
    return iTBPM(hex)
})
registerTag("iCBPM", function (hex) {
    return iCBPM(hex)
})
registerTag("iKPS", function (hex) {
    return iKPS(hex)
})
registerTag("iLevel", function (hex, style) {
    return iLevel(hex, style)
})
registerTag("iMargin", function () {
    return iMargin()
})
registerTag("iDate", function (style) {
    return iDate(style)
})
registerTag("iTiming", function () {
    return iTiming()
})
registerTag("iCPU", function (hex) {
    return iCPU(hex)
})
registerTag("iMem", function (hex) {
    return iMem(hex)
})
registerTag("iPCombo", function (hex, range) {
    return iPCombo(hex, range)
})
registerTag("iCombo", function (hex, range) {
    return iCombo(hex, range)
})
registerTag("iScore", function (style) {
    return iScore(style)
})
registerTag("iVersion", function () {
    const version = "<size=300%>iTags V4</size>"
    const iDeveloper = `By <color=#${colorType("SamXU1322")}>SamXU1322</color> & <color=#${colorType("StarRiver")}>StarRiver</color>`
    const SpecialThanks = `<size=66%>(Special Thanks: <color=#${colorType("a6.")}>a6</color>. & <color=#E0FFA7>你怎么神经兮兮的</color>)</size>`
    return `${version}\n\n${iDeveloper}\n${SpecialThanks}\n\n${updateNotes}`
})
registerTag("SamXU1322", function () {
    return `在颜色栏输入 <color=#${colorType("SamXU1322")}>SamXU1322</color> 会有奇效唷~`
})
registerTag("iP", function () {
    return iJudge(PHex(), CP())
})
registerTag("iELP", function () {
    return iJudge(EPHex(), CEP() + CLP())
})
registerTag("iEP", function () {
    return iJudge(EPHex(), CEP())
})
registerTag("iLP", function () {
    return iJudge(EPHex(), CLP())
})
registerTag("iVEL", function () {
    return iJudge(VEHex(), CVE() + CVL())
})
registerTag("iVE", function () {
    return iJudge(VEHex(), CVE())
})
registerTag("iVL", function () {
    return iJudge(VEHex(), CVL())
})
registerTag("iTEL", function () {
    return iJudge(TEHex(), CTE() + CTL())
})
registerTag("iTE", function () {
    return iJudge(TEHex(), CTE())
})
registerTag("iTL", function () {
    return iJudge(TEHex(), CTL())
})
registerTag("iOM", function () {
    return iJudge(FOHex(), MissCount() + Overloads())
})
registerTag("iO", function () {
    return iJudge(FOHex(), Overloads())
})
registerTag("iM", function () {
    return iJudge(FOHex(), MissCount())
})
registerTag("iMP", function () {
    return iJudge(MPHex(), Multipress())
})
registerTag("iBg", function () {
    return "<size=6666%>\u25A0</size>"
})


/*颜色变色模块*/ 
/**
 * HSV转RGB函数
 * @param {number} h 色相 (0-360)
 * @param {number} s 饱和度 (0-100)
 * @param {number} v 明度 (0-100)
 * @returns {string} 包含r,g,b属性的对象，每个值都在0-255范围内
 */
function HSVToRGB(h, s, v) {
    h = h % 360;
    if (h < 0) h += 360;
    
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
    
    const sFraction = s / 100;
    const vFraction = v / 100;
    
    const c = vFraction * sFraction;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = vFraction - c;
    
    let rPrime, gPrime, bPrime;
    
    if (h >= 0 && h < 60) {
        rPrime = c;
        gPrime = x;
        bPrime = 0;
    } else if (h >= 60 && h < 120) {
        rPrime = x;
        gPrime = c;
        bPrime = 0;
    } else if (h >= 120 && h < 180) {
        rPrime = 0;
        gPrime = c;
        bPrime = x;
    } else if (h >= 180 && h < 240) {
        rPrime = 0;
        gPrime = x;
        bPrime = c;
    } else if (h >= 240 && h < 300) {
        rPrime = x;
        gPrime = 0;
        bPrime = c;
    } else {
        rPrime = c;
        gPrime = 0;
        bPrime = x;
    }
    const r = Math.round((rPrime + m) * 255);
    const g = Math.round((gPrime + m) * 255);
    const b = Math.round((bPrime + m) * 255);
    const toHex = (n) => n.toString(16).padStart(2, '0');
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function* rgbGenerator() {
    let hue = 0;
    while (true) {
        hue = (hue + 1) % 360;
        const color = HSVToRGB(hue, 100, 100);
        yield color
    }
}
const rgbGen = rgbGenerator()
function RGB() { 
    const colorBegin = rgbGen.next().value;
    const colorEnd = rgbGen.next().value;
    return ColorRange("MilliSecond",0,1000,colorBegin,colorEnd);    
}
/*或者使用这样一个函数能减少变化量都试试
function RGB() {
    const piese = MilliSecond() / 20;
    return ColorRange("MilliSecond",0,1000,HSVToRGB(60*piese,100,100),HSVToRGB(60*(piese+1),100,100));
}
*/
