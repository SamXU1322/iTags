class SystemLanguage {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {SystemLanguage}*/
  static Afrikaans;
  /**@type {SystemLanguage}*/
  static Arabic;
  /**@type {SystemLanguage}*/
  static Basque;
  /**@type {SystemLanguage}*/
  static Belarusian;
  /**@type {SystemLanguage}*/
  static Bulgarian;
  /**@type {SystemLanguage}*/
  static Catalan;
  /**@type {SystemLanguage}*/
  static Chinese;
  /**@type {SystemLanguage}*/
  static Czech;
  /**@type {SystemLanguage}*/
  static Danish;
  /**@type {SystemLanguage}*/
  static Dutch;
  /**@type {SystemLanguage}*/
  static English;
  /**@type {SystemLanguage}*/
  static Estonian;
  /**@type {SystemLanguage}*/
  static Faroese;
  /**@type {SystemLanguage}*/
  static Finnish;
  /**@type {SystemLanguage}*/
  static French;
  /**@type {SystemLanguage}*/
  static German;
  /**@type {SystemLanguage}*/
  static Greek;
  /**@type {SystemLanguage}*/
  static Hebrew;
  /**@type {SystemLanguage}*/
  static Icelandic;
  /**@type {SystemLanguage}*/
  static Indonesian;
  /**@type {SystemLanguage}*/
  static Italian;
  /**@type {SystemLanguage}*/
  static Japanese;
  /**@type {SystemLanguage}*/
  static Korean;
  /**@type {SystemLanguage}*/
  static Latvian;
  /**@type {SystemLanguage}*/
  static Lithuanian;
  /**@type {SystemLanguage}*/
  static Norwegian;
  /**@type {SystemLanguage}*/
  static Polish;
  /**@type {SystemLanguage}*/
  static Portuguese;
  /**@type {SystemLanguage}*/
  static Romanian;
  /**@type {SystemLanguage}*/
  static Russian;
  /**@type {SystemLanguage}*/
  static SerboCroatian;
  /**@type {SystemLanguage}*/
  static Slovak;
  /**@type {SystemLanguage}*/
  static Slovenian;
  /**@type {SystemLanguage}*/
  static Spanish;
  /**@type {SystemLanguage}*/
  static Swedish;
  /**@type {SystemLanguage}*/
  static Thai;
  /**@type {SystemLanguage}*/
  static Turkish;
  /**@type {SystemLanguage}*/
  static Ukrainian;
  /**@type {SystemLanguage}*/
  static Vietnamese;
  /**@type {SystemLanguage}*/
  static ChineseSimplified;
  /**@type {SystemLanguage}*/
  static ChineseTraditional;
  /**@type {SystemLanguage}*/
  static Hindi;
  /**@type {SystemLanguage}*/
  static Unknown;
  /**@type {SystemLanguage}*/
  static Hungarian;
}
class Ease {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {Ease}*/
  static Unset;
  /**@type {Ease}*/
  static Linear;
  /**@type {Ease}*/
  static InSine;
  /**@type {Ease}*/
  static OutSine;
  /**@type {Ease}*/
  static InOutSine;
  /**@type {Ease}*/
  static InQuad;
  /**@type {Ease}*/
  static OutQuad;
  /**@type {Ease}*/
  static InOutQuad;
  /**@type {Ease}*/
  static InCubic;
  /**@type {Ease}*/
  static OutCubic;
  /**@type {Ease}*/
  static InOutCubic;
  /**@type {Ease}*/
  static InQuart;
  /**@type {Ease}*/
  static OutQuart;
  /**@type {Ease}*/
  static InOutQuart;
  /**@type {Ease}*/
  static InQuint;
  /**@type {Ease}*/
  static OutQuint;
  /**@type {Ease}*/
  static InOutQuint;
  /**@type {Ease}*/
  static InExpo;
  /**@type {Ease}*/
  static OutExpo;
  /**@type {Ease}*/
  static InOutExpo;
  /**@type {Ease}*/
  static InCirc;
  /**@type {Ease}*/
  static OutCirc;
  /**@type {Ease}*/
  static InOutCirc;
  /**@type {Ease}*/
  static InElastic;
  /**@type {Ease}*/
  static OutElastic;
  /**@type {Ease}*/
  static InOutElastic;
  /**@type {Ease}*/
  static InBack;
  /**@type {Ease}*/
  static OutBack;
  /**@type {Ease}*/
  static InOutBack;
  /**@type {Ease}*/
  static InBounce;
  /**@type {Ease}*/
  static OutBounce;
  /**@type {Ease}*/
  static InOutBounce;
  /**@type {Ease}*/
  static Flash;
  /**@type {Ease}*/
  static InFlash;
  /**@type {Ease}*/
  static OutFlash;
  /**@type {Ease}*/
  static InOutFlash;
  /**@type {Ease}*/
  static INTERNAL_Zero;
  /**@type {Ease}*/
  static INTERNAL_Custom;
}
class Color {
  /**
   * @param {number} r
   * @param {number} g
   * @param {number} b
   * @param {number} a
   */
  constructor(r, g, b, a) {
    /**@type {number}*/
    this.r = null;
    /**@type {number}*/
    this.g = null;
    /**@type {number}*/
    this.b = null;
    /**@type {number}*/
    this.a = null;
  }
  /**
   * @param {number} multiplier
   * @returns {Color}
   */
  AlphaMultiplied(multiplier) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Color} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {number} H
   * @param {number} S
   * @param {number} V
   * @returns {Color}
   */
  static HSVToRGB(H, S, V) {}
  /**
   * @param {number} H
   * @param {number} S
   * @param {number} V
   * @param {boolean} hdr
   * @returns {Color}
   */
  static HSVToRGB(H, S, V, hdr) {}
  /**
   * @param {Color} a
   * @param {Color} b
   * @param {number} t
   * @returns {Color}
   */
  static Lerp(a, b, t) {}
  /**
   * @param {Color} a
   * @param {Color} b
   * @param {number} t
   * @returns {Color}
   */
  static LerpUnclamped(a, b, t) {}
  /**
   * @param {number} multiplier
   * @returns {Color}
   */
  RGBMultiplied(multiplier) {}
  /**
   * @param {Color} multiplier
   * @returns {Color}
   */
  RGBMultiplied(multiplier) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {string} format
   * @returns {string}
   */
  ToString(format) {}
  /**
   * @param {string} format
   * @param {IFormatProvider} formatProvider
   * @returns {string}
   */
  ToString(format, formatProvider) {}
  /**@type {Color}*/
  static get black() {}
  /**@type {Color}*/
  static get blue() {}
  /**@type {Color}*/
  static get clear() {}
  /**@type {Color}*/
  static get cyan() {}
  /**@type {Color}*/
  get gamma() {}
  /**@type {Color}*/
  static get gray() {}
  /**@type {number}*/
  get grayscale() {}
  /**@type {Color}*/
  static get green() {}
  /**@type {Color}*/
  static get grey() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Color}*/
  get linear() {}
  /**@type {Color}*/
  static get magenta() {}
  /**@type {number}*/
  get maxColorComponent() {}
  /**@type {Color}*/
  static get red() {}
  /**@type {Color}*/
  static get white() {}
  /**@type {Color}*/
  static get yellow() {}
}
class OverlayerText {
  constructor() {
    /**@type {TextConfig}*/
    this.Config = null;
    /**@type {Replacer}*/
    this.PlayingReplacer = null;
    /**@type {Replacer}*/
    this.NotPlayingReplacer = null;
    /**@type {TextMeshProUGUI}*/
    this.Text = null;
    /**@type {boolean}*/
    this.isDragging = null;
    /**@type {boolean}*/
    this.isPointing = null;
    /**@type {Vector2}*/
    this.initialPointerPosition = null;
    /**@type {Vector2}*/
    this.initialObjectPosition = null;
  }
  /**@type {Action}*/
  static OnApplyConfig;
  /**@type {GameObject}*/
  static DragObj;
  /**@type {Image}*/
  static DragImage;
  /**@type {boolean}*/
  static isAlreadyDragging;
  /**@type {number}*/
  static pointingCount;
  /**@type {GameObject}*/
  static PCanvasObj;
  /**@type {Canvas}*/
  static PublicCanvas;
  /**@type {Shader}*/
  static sr_msdf;
  /**
   * @param {Action} value
   * @returns {void}
   */
  static add_OnApplyConfig(value) {}
  /**
   * @returns {void}
   */
  ApplyConfig() {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  ApplyMaterial(mat) {}
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter, options) {}
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  BroadcastMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, options) {}
  /**
   * @returns {void}
   */
  CancelInvoke() {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  CancelInvoke(methodName) {}
  /**
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @returns {void}
   */
  static DragInit() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @returns {T}
   */
  GetComponent() {}
  /**
   * @param {string} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @param {Type} type
   * @param {IntPtr} oneFurtherThanResultValue
   * @returns {void}
   */
  GetComponentFastPath(type, oneFurtherThanResultValue) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInChildren(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInChildren() {}
  /**
   * @returns {number}
   */
  GetComponentIndex() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInParent(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInParent() {}
  /**
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponents(type) {}
  /**
   * @param {Type} type
   * @param {List} results
   * @returns {void}
   */
  GetComponents(type, results) {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponents(results) {}
  /**
   * @returns {T[]}
   */
  GetComponents() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInChildren(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} result
   * @returns {void}
   */
  GetComponentsInChildren(includeInactive, result) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInChildren() {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInChildren(results) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInParent(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInParent(includeInactive, results) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInParent() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {string}
   */
  GetScriptClassName() {}
  /**
   * @param {TextConfig} config
   * @returns {void}
   */
  Init(config) {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  static InitMaterial(mat) {}
  /**
   * @param {string} methodName
   * @param {number} time
   * @returns {void}
   */
  Invoke(methodName, time) {}
  /**
   * @param {string} methodName
   * @param {number} time
   * @param {number} repeatRate
   * @returns {void}
   */
  InvokeRepeating(methodName, time, repeatRate) {}
  /**
   * @returns {boolean}
   */
  IsInvoking() {}
  /**
   * @param {string} methodName
   * @returns {boolean}
   */
  IsInvoking(methodName) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {PointerEventData} e
   * @returns {void}
   */
  OnDrag(e) {}
  /**
   * @param {PointerEventData} e
   * @returns {void}
   */
  OnPointerDown(e) {}
  /**
   * @param {PointerEventData} e
   * @returns {void}
   */
  OnPointerEnter(e) {}
  /**
   * @param {PointerEventData} e
   * @returns {void}
   */
  OnPointerExit(e) {}
  /**
   * @param {PointerEventData} e
   * @returns {void}
   */
  OnPointerUp(e) {}
  /**
   * @returns {void}
   */
  static PublicCanvasInit() {}
  /**
   * @param {Action} value
   * @returns {void}
   */
  static remove_OnApplyConfig(value) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessage(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessageUpwards(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessageUpwards(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, options) {}
  /**
   * @returns {void}
   */
  SetFont() {}
  /**
   * @param {string} methodName
   * @returns {Coroutine}
   */
  StartCoroutine(methodName) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {Coroutine}
   */
  StartCoroutine(methodName, value) {}
  /**
   * @param {IEnumerator} routine
   * @returns {Coroutine}
   */
  StartCoroutine(routine) {}
  /**
   * @param {IEnumerator} routine
   * @returns {Coroutine}
   */
  StartCoroutine_Auto(routine) {}
  /**
   * @returns {void}
   */
  StopAllCoroutines() {}
  /**
   * @param {IEnumerator} routine
   * @returns {void}
   */
  StopCoroutine(routine) {}
  /**
   * @param {Coroutine} routine
   * @returns {void}
   */
  StopCoroutine(routine) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  StopCoroutine(methodName) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {void}
   */
  Update() {}
  /**@type {CancellationToken}*/
  get destroyCancellationToken() {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get Initialized() {}
  /**
 * @param {boolean} value
 */
  set Initialized(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {boolean}*/
  get useGUILayout() {}
  /**
 * @param {boolean} value
 */
  set useGUILayout(value) {}
}
class Replacer {
  /**
   * @param {List} tags
   */
  constructor(tags) {
    /**@type {string}*/
    this.source = null;
    /**@type {boolean}*/
    this.compiled = null;
    /**@type {Func}*/
    this.compiledMethod = null;
    /**@type {ReplaceableText}*/
    this.interpretable = null;
    /**@type {LexConfig}*/
    this.lexConfig = null;
  }
  /**@type {ConstructorInfo}*/
  static StrBuilder_Ctor;
  /**@type {MethodInfo}*/
  static StrBuilder_Append;
  /**@type {MethodInfo}*/
  static StrBuilder_ToString;
  /**
   * @returns {boolean}
   */
  Compile() {}
  /**
   * @returns {string}
   */
  Replace() {}
  /**
   * @returns {string}
   */
  ReplaceI() {}
  /**
   * @param {LexConfig} config
   * @returns {void}
   */
  SetLexConfig(config) {}
  /**
   * @param {IEnumerable} tags
   * @returns {void}
   */
  UpdateTags(tags) {}
  /**@type {List}*/
  get References() {}
  /**@type {string}*/
  get Source() {}
  /**
 * @param {string} value
 */
  set Source(value) {}
  /**@type {List}*/
  get Tags() {}
}
class TextConfig {
  constructor() {
    /**@type {boolean}*/
    this.Active = null;
    /**@type {TextConfig.DragChangeHandler}*/
    this.OnDragChanged = null;
    /**@type {boolean}*/
    this._drag = null;
    /**@type {string}*/
    this.Name = null;
    /**@type {string}*/
    this.Font = null;
    /**@type {string}*/
    this.PlayingText = null;
    /**@type {string}*/
    this.NotPlayingText = null;
    /**@type {string}*/
    this.LexOption = null;
    /**@type {number}*/
    this.FontSize = null;
    /**@type {number}*/
    this.OutlineWidth = null;
    /**@type {number}*/
    this.LineSpacing = null;
    /**@type {number}*/
    this.LineSpacingAdj = null;
    /**@type {number}*/
    this.ShadowDilate = null;
    /**@type {number}*/
    this.ShadowSoftness = null;
    /**@type {boolean}*/
    this.EnableFallbackFonts = null;
    /**@type {String[]}*/
    this.FallbackFonts = null;
    /**@type {GColor}*/
    this.TextColor = null;
    /**@type {GColor}*/
    this.OutlineColor = null;
    /**@type {GColor}*/
    this.ShadowColor = null;
    /**@type {Vector2}*/
    this.Scale = null;
    /**@type {Vector2}*/
    this.Position = null;
    /**@type {Vector2}*/
    this.Pivot = null;
    /**@type {Vector2}*/
    this.ShadowOffset = null;
    /**@type {Vector3}*/
    this.Rotation = null;
    /**@type {number}*/
    this.Alignment = null;
  }
  /**
   * @param {TextConfig.DragChangeHandler} value
   * @returns {void}
   */
  add_OnDragChanged(value) {}
  /**
   * @returns {TextConfig}
   */
  Copy() {}
  /**
   * @param {JsonNode} node
   * @returns {void}
   */
  Deserialize(node) {}
  /**
   * @param {TextConfig.DragChangeHandler} value
   * @returns {void}
   */
  remove_OnDragChanged(value) {}
  /**
   * @returns {JsonNode}
   */
  Serialize() {}
  /**@type {boolean}*/
  get Drag() {}
  /**
 * @param {boolean} value
 */
  set Drag(value) {}
}
class GColor {
  /**
   * @param {Color} color
   */
  constructor(color) {
    /**@type {VertexGradient}*/
    this._color = null;
    /**@type {string}*/
    this._topLeftHex = null;
    /**@type {string}*/
    this._topRightHex = null;
    /**@type {string}*/
    this._bottomLeftHex = null;
    /**@type {string}*/
    this._bottomRightHex = null;
    /**@type {boolean}*/
    this.gradientEnabled = null;
    /**@type {GUIStatus}*/
    this.status = null;
    /**@type {GUIStatus}*/
    this.topLeftStatus = null;
    /**@type {GUIStatus}*/
    this.topRightStatus = null;
    /**@type {GUIStatus}*/
    this.bottomLeftStatus = null;
    /**@type {GUIStatus}*/
    this.bottomRightStatus = null;
  }
  /**
   * @returns {GColor}
   */
  Copy() {}
  /**
   * @param {JsonNode} node
   * @returns {void}
   */
  Deserialize(node) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {JsonNode}
   */
  Serialize() {}
  /**
   * @param {Color} color
   * @returns {void}
   */
  SetBottomLeftColor(color) {}
  /**
   * @param {string} hex
   * @returns {void}
   */
  SetBottomLeftHex(hex) {}
  /**
   * @param {Color} color
   * @returns {void}
   */
  SetBottomRightColor(color) {}
  /**
   * @param {string} hex
   * @returns {void}
   */
  SetBottomRightHex(hex) {}
  /**
   * @param {Color} color
   * @returns {void}
   */
  SetTopLeftColor(color) {}
  /**
   * @param {string} hex
   * @returns {void}
   */
  SetTopLeftHex(hex) {}
  /**
   * @param {Color} color
   * @returns {void}
   */
  SetTopRightColor(color) {}
  /**
   * @param {string} hex
   * @returns {void}
   */
  SetTopRightHex(hex) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get a() {}
  /**
 * @param {number} value
 */
  set a(value) {}
  /**@type {number}*/
  get b() {}
  /**
 * @param {number} value
 */
  set b(value) {}
  /**@type {Color}*/
  get bottomLeft() {}
  /**
 * @param {Color} value
 */
  set bottomLeft(value) {}
  /**@type {string}*/
  get bottomLeftHex() {}
  /**
 * @param {string} value
 */
  set bottomLeftHex(value) {}
  /**@type {Color}*/
  get bottomRight() {}
  /**
 * @param {Color} value
 */
  set bottomRight(value) {}
  /**@type {string}*/
  get bottomRightHex() {}
  /**
 * @param {string} value
 */
  set bottomRightHex(value) {}
  /**@type {number}*/
  get g() {}
  /**
 * @param {number} value
 */
  set g(value) {}
  /**@type {number}*/
  get r() {}
  /**
 * @param {number} value
 */
  set r(value) {}
  /**@type {Color}*/
  get topLeft() {}
  /**
 * @param {Color} value
 */
  set topLeft(value) {}
  /**@type {string}*/
  get topLeftHex() {}
  /**
 * @param {string} value
 */
  set topLeftHex(value) {}
  /**@type {Color}*/
  get topRight() {}
  /**
 * @param {Color} value
 */
  set topRight(value) {}
  /**@type {string}*/
  get topRightHex() {}
  /**
 * @param {string} value
 */
  set topRightHex(value) {}
}
class TextAlignmentOptions {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {TextAlignmentOptions}*/
  static TopLeft;
  /**@type {TextAlignmentOptions}*/
  static Top;
  /**@type {TextAlignmentOptions}*/
  static TopRight;
  /**@type {TextAlignmentOptions}*/
  static TopJustified;
  /**@type {TextAlignmentOptions}*/
  static TopFlush;
  /**@type {TextAlignmentOptions}*/
  static TopGeoAligned;
  /**@type {TextAlignmentOptions}*/
  static Left;
  /**@type {TextAlignmentOptions}*/
  static Center;
  /**@type {TextAlignmentOptions}*/
  static Right;
  /**@type {TextAlignmentOptions}*/
  static Justified;
  /**@type {TextAlignmentOptions}*/
  static Flush;
  /**@type {TextAlignmentOptions}*/
  static CenterGeoAligned;
  /**@type {TextAlignmentOptions}*/
  static BottomLeft;
  /**@type {TextAlignmentOptions}*/
  static Bottom;
  /**@type {TextAlignmentOptions}*/
  static BottomRight;
  /**@type {TextAlignmentOptions}*/
  static BottomJustified;
  /**@type {TextAlignmentOptions}*/
  static BottomFlush;
  /**@type {TextAlignmentOptions}*/
  static BottomGeoAligned;
  /**@type {TextAlignmentOptions}*/
  static BaselineLeft;
  /**@type {TextAlignmentOptions}*/
  static Baseline;
  /**@type {TextAlignmentOptions}*/
  static BaselineRight;
  /**@type {TextAlignmentOptions}*/
  static BaselineJustified;
  /**@type {TextAlignmentOptions}*/
  static BaselineFlush;
  /**@type {TextAlignmentOptions}*/
  static BaselineGeoAligned;
  /**@type {TextAlignmentOptions}*/
  static MidlineLeft;
  /**@type {TextAlignmentOptions}*/
  static Midline;
  /**@type {TextAlignmentOptions}*/
  static MidlineRight;
  /**@type {TextAlignmentOptions}*/
  static MidlineJustified;
  /**@type {TextAlignmentOptions}*/
  static MidlineFlush;
  /**@type {TextAlignmentOptions}*/
  static MidlineGeoAligned;
  /**@type {TextAlignmentOptions}*/
  static CaplineLeft;
  /**@type {TextAlignmentOptions}*/
  static Capline;
  /**@type {TextAlignmentOptions}*/
  static CaplineRight;
  /**@type {TextAlignmentOptions}*/
  static CaplineJustified;
  /**@type {TextAlignmentOptions}*/
  static CaplineFlush;
  /**@type {TextAlignmentOptions}*/
  static CaplineGeoAligned;
  /**@type {TextAlignmentOptions}*/
  static Converted;
}
class Texture2D {
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {number} flags
   */
  constructor(width, height, format, flags) {
  }
  /**@type {number}*/
  static streamingMipmapsPriorityMin;
  /**@type {number}*/
  static streamingMipmapsPriorityMax;
  /**
   * @param {boolean} updateMipmaps
   * @param {boolean} makeNoLongerReadable
   * @returns {void}
   */
  Apply(updateMipmaps, makeNoLongerReadable) {}
  /**
   * @param {boolean} updateMipmaps
   * @returns {void}
   */
  Apply(updateMipmaps) {}
  /**
   * @returns {void}
   */
  Apply() {}
  /**
   * @param {boolean} updateMipmaps
   * @param {boolean} makeNoLongerReadable
   * @returns {void}
   */
  ApplyImpl(updateMipmaps, makeNoLongerReadable) {}
  /**
   * @returns {void}
   */
  ClearMinimumMipmapLevel() {}
  /**
   * @returns {void}
   */
  ClearRequestedMipmapLevel() {}
  /**
   * @param {boolean} highQuality
   * @returns {void}
   */
  Compress(highQuality) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {boolean} mipChain
   * @param {boolean} linear
   * @param {IntPtr} nativeTex
   * @returns {Texture2D}
   */
  static CreateExternalTexture(width, height, format, mipChain, linear, nativeTex) {}
  /**
   * @returns {UnityException}
   */
  CreateNativeArrayLengthOverflowException() {}
  /**
   * @param {Texture} t
   * @returns {UnityException}
   */
  CreateNonReadableException(t) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector2[]} sizes
   * @param {number} padding
   * @param {number} atlasSize
   * @param {List} results
   * @returns {boolean}
   */
  static GenerateAtlas(sizes, padding, atlasSize, results) {}
  /**
   * @param {Vector2[]} sizes
   * @param {number} padding
   * @param {number} atlasSize
   * @param {Rect[]} rect
   * @returns {void}
   */
  static GenerateAtlasImpl(sizes, padding, atlasSize, rect) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {number}
   */
  GetNativeTextureID() {}
  /**
   * @returns {IntPtr}
   */
  GetNativeTexturePtr() {}
  /**
   * @param {number} x
   * @param {number} y
   * @returns {Color}
   */
  GetPixel(x, y) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} mipLevel
   * @returns {Color}
   */
  GetPixel(x, y, mipLevel) {}
  /**
   * @param {number} u
   * @param {number} v
   * @returns {Color}
   */
  GetPixelBilinear(u, v) {}
  /**
   * @param {number} u
   * @param {number} v
   * @param {number} mipLevel
   * @returns {Color}
   */
  GetPixelBilinear(u, v, mipLevel) {}
  /**
   * @param {number} image
   * @param {number} mip
   * @param {number} u
   * @param {number} v
   * @returns {Color}
   */
  GetPixelBilinearImpl(image, mip, u, v) {}
  /**
   * @param {number} mipLevel
   * @returns {NativeArray}
   */
  GetPixelData(mipLevel) {}
  /**
   * @param {number} mipLevel
   * @param {number} element
   * @returns {number}
   */
  GetPixelDataOffset(mipLevel, element) {}
  /**
   * @param {number} mipLevel
   * @param {number} element
   * @returns {number}
   */
  GetPixelDataSize(mipLevel, element) {}
  /**
   * @param {number} image
   * @param {number} mip
   * @param {number} x
   * @param {number} y
   * @returns {Color}
   */
  GetPixelImpl(image, mip, x, y) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @param {number} miplevel
   * @returns {Color[]}
   */
  GetPixels(x, y, blockWidth, blockHeight, miplevel) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @returns {Color[]}
   */
  GetPixels(x, y, blockWidth, blockHeight) {}
  /**
   * @param {number} miplevel
   * @returns {Color[]}
   */
  GetPixels(miplevel) {}
  /**
   * @returns {Color[]}
   */
  GetPixels() {}
  /**
   * @param {number} miplevel
   * @returns {Color32[]}
   */
  GetPixels32(miplevel) {}
  /**
   * @returns {Color32[]}
   */
  GetPixels32() {}
  /**
   * @returns {number}
   */
  GetRawImageDataSize() {}
  /**
   * @returns {Byte[]}
   */
  GetRawTextureData() {}
  /**
   * @returns {NativeArray}
   */
  GetRawTextureData() {}
  /**
   * @param {boolean} linear
   * @returns {number}
   */
  GetTextureColorSpace(linear) {}
  /**
   * @param {number} format
   * @returns {number}
   */
  GetTextureColorSpace(format) {}
  /**
   * @param {number} frame
   * @returns {IntPtr}
   */
  GetWritableImageData(frame) {}
  /**
   * @returns {void}
   */
  IncrementUpdateCount() {}
  /**
   * @param {Texture2D} mono
   * @param {number} w
   * @param {number} h
   * @param {number} mipCount
   * @param {number} format
   * @param {number} colorSpace
   * @param {number} flags
   * @param {IntPtr} nativeTex
   * @param {string} mipmapLimitGroupName
   * @returns {void}
   */
  static Internal_Create(mono, w, h, mipCount, format, colorSpace, flags, nativeTex, mipmapLimitGroupName) {}
  /**
   * @param {Texture2D} mono
   * @param {number} w
   * @param {number} h
   * @param {number} mipCount
   * @param {number} format
   * @param {number} colorSpace
   * @param {number} flags
   * @param {IntPtr} nativeTex
   * @param {string} mipmapLimitGroupName
   * @returns {boolean}
   */
  static Internal_CreateImpl(mono, w, h, mipCount, format, colorSpace, flags, nativeTex, mipmapLimitGroupName) {}
  /**
   * @returns {boolean}
   */
  IsRequestedMipmapLevelLoaded() {}
  /**
   * @param {IntPtr} data
   * @param {number} size
   * @returns {void}
   */
  LoadRawTextureData(data, size) {}
  /**
   * @param {Byte[]} data
   * @returns {void}
   */
  LoadRawTextureData(data) {}
  /**
   * @param {NativeArray} data
   * @returns {void}
   */
  LoadRawTextureData(data) {}
  /**
   * @param {IntPtr} data
   * @param {number} size
   * @returns {boolean}
   */
  LoadRawTextureDataImpl(data, size) {}
  /**
   * @param {Byte[]} data
   * @returns {boolean}
   */
  LoadRawTextureDataImplArray(data) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {Texture2D[]} textures
   * @param {number} padding
   * @param {number} maximumAtlasSize
   * @param {boolean} makeNoLongerReadable
   * @returns {Rect[]}
   */
  PackTextures(textures, padding, maximumAtlasSize, makeNoLongerReadable) {}
  /**
   * @param {Texture2D[]} textures
   * @param {number} padding
   * @param {number} maximumAtlasSize
   * @returns {Rect[]}
   */
  PackTextures(textures, padding, maximumAtlasSize) {}
  /**
   * @param {Texture2D[]} textures
   * @param {number} padding
   * @returns {Rect[]}
   */
  PackTextures(textures, padding) {}
  /**
   * @param {Rect} source
   * @param {number} destX
   * @param {number} destY
   * @param {boolean} recalculateMipMaps
   * @returns {void}
   */
  ReadPixels(source, destX, destY, recalculateMipMaps) {}
  /**
   * @param {Rect} source
   * @param {number} destX
   * @param {number} destY
   * @returns {void}
   */
  ReadPixels(source, destX, destY) {}
  /**
   * @param {Rect} source
   * @param {number} destX
   * @param {number} destY
   * @param {boolean} recalculateMipMaps
   * @returns {void}
   */
  ReadPixelsImpl(source, destX, destY, recalculateMipMaps) {}
  /**
   * @param {number} width
   * @param {number} height
   * @returns {boolean}
   */
  Reinitialize(width, height) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {boolean} hasMipMap
   * @returns {boolean}
   */
  Reinitialize(width, height, format, hasMipMap) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {boolean} hasMipMap
   * @returns {boolean}
   */
  Reinitialize(width, height, format, hasMipMap) {}
  /**
   * @param {number} width
   * @param {number} height
   * @returns {boolean}
   */
  ReinitializeImpl(width, height) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {boolean} hasMipMap
   * @returns {boolean}
   */
  ReinitializeWithFormatImpl(width, height, format, hasMipMap) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} textureFormat
   * @param {boolean} hasMipMap
   * @returns {boolean}
   */
  ReinitializeWithTextureFormatImpl(width, height, textureFormat, hasMipMap) {}
  /**
   * @param {number} width
   * @param {number} height
   * @returns {boolean}
   */
  Resize(width, height) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {boolean} hasMipMap
   * @returns {boolean}
   */
  Resize(width, height, format, hasMipMap) {}
  /**
   * @param {number} width
   * @param {number} height
   * @param {number} format
   * @param {boolean} hasMipMap
   * @returns {boolean}
   */
  Resize(width, height, format, hasMipMap) {}
  /**
   * @param {Color32[]} colors
   * @param {number} miplevel
   * @returns {void}
   */
  SetAllPixels32(colors, miplevel) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @param {Color32[]} colors
   * @param {number} miplevel
   * @returns {void}
   */
  SetBlockOfPixels32(x, y, blockWidth, blockHeight, colors, miplevel) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {Color} color
   * @returns {void}
   */
  SetPixel(x, y, color) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {Color} color
   * @param {number} mipLevel
   * @returns {void}
   */
  SetPixel(x, y, color, mipLevel) {}
  /**
   * @param {T[]} data
   * @param {number} mipLevel
   * @param {number} sourceDataStartIndex
   * @returns {void}
   */
  SetPixelData(data, mipLevel, sourceDataStartIndex) {}
  /**
   * @param {NativeArray} data
   * @param {number} mipLevel
   * @param {number} sourceDataStartIndex
   * @returns {void}
   */
  SetPixelData(data, mipLevel, sourceDataStartIndex) {}
  /**
   * @param {IntPtr} data
   * @param {number} mipLevel
   * @param {number} elementSize
   * @param {number} dataArraySize
   * @param {number} sourceDataStartIndex
   * @returns {boolean}
   */
  SetPixelDataImpl(data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex) {}
  /**
   * @param {any[]} data
   * @param {number} mipLevel
   * @param {number} elementSize
   * @param {number} dataArraySize
   * @param {number} sourceDataStartIndex
   * @returns {boolean}
   */
  SetPixelDataImplArray(data, mipLevel, elementSize, dataArraySize, sourceDataStartIndex) {}
  /**
   * @param {number} image
   * @param {number} mip
   * @param {number} x
   * @param {number} y
   * @param {Color} color
   * @returns {void}
   */
  SetPixelImpl(image, mip, x, y, color) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @param {Color[]} colors
   * @param {number} miplevel
   * @returns {void}
   */
  SetPixels(x, y, blockWidth, blockHeight, colors, miplevel) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @param {Color[]} colors
   * @returns {void}
   */
  SetPixels(x, y, blockWidth, blockHeight, colors) {}
  /**
   * @param {Color[]} colors
   * @param {number} miplevel
   * @returns {void}
   */
  SetPixels(colors, miplevel) {}
  /**
   * @param {Color[]} colors
   * @returns {void}
   */
  SetPixels(colors) {}
  /**
   * @param {Color32[]} colors
   * @param {number} miplevel
   * @returns {void}
   */
  SetPixels32(colors, miplevel) {}
  /**
   * @param {Color32[]} colors
   * @returns {void}
   */
  SetPixels32(colors) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @param {Color32[]} colors
   * @param {number} miplevel
   * @returns {void}
   */
  SetPixels32(x, y, blockWidth, blockHeight, colors, miplevel) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} blockWidth
   * @param {number} blockHeight
   * @param {Color32[]} colors
   * @returns {void}
   */
  SetPixels32(x, y, blockWidth, blockHeight, colors) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} w
   * @param {number} h
   * @param {Color[]} pixel
   * @param {number} miplevel
   * @param {number} frame
   * @returns {void}
   */
  SetPixelsImpl(x, y, w, h, pixel, miplevel, frame) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {IntPtr} nativeTex
   * @returns {void}
   */
  UpdateExternalTexture(nativeTex) {}
  /**
   * @param {number} format
   * @param {number} width
   * @param {number} height
   * @returns {boolean}
   */
  ValidateFormat(format, width, height) {}
  /**
   * @param {number} format
   * @param {number} width
   * @param {number} height
   * @returns {boolean}
   */
  ValidateFormat(format, width, height) {}
  /**
   * @param {number} format
   * @returns {boolean}
   */
  ValidateFormat(format) {}
  /**
   * @param {number} format
   * @returns {boolean}
   */
  ValidateFormat(format) {}
  /**
   * @param {number} format
   * @param {number} usage
   * @returns {boolean}
   */
  ValidateFormat(format, usage) {}
  /**@type {number}*/
  get activeMipmapLimit() {}
  /**@type {number}*/
  get activeTextureColorSpace() {}
  /**@type {number}*/
  get anisoLevel() {}
  /**
 * @param {number} value
 */
  set anisoLevel(value) {}
  /**@type {Texture2D}*/
  static get blackTexture() {}
  /**@type {number}*/
  get calculatedMipmapLevel() {}
  /**@type {number}*/
  get desiredMipmapLevel() {}
  /**@type {number}*/
  get dimension() {}
  /**
 * @param {number} value
 */
  set dimension(value) {}
  /**@type {number}*/
  get filterMode() {}
  /**
 * @param {number} value
 */
  set filterMode(value) {}
  /**@type {number}*/
  get format() {}
  /**@type {number}*/
  get graphicsFormat() {}
  /**@type {Texture2D}*/
  static get grayTexture() {}
  /**@type {number}*/
  get height() {}
  /**
 * @param {number} value
 */
  set height(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get ignoreMipmapLimit() {}
  /**
 * @param {boolean} value
 */
  set ignoreMipmapLimit(value) {}
  /**@type {boolean}*/
  get isDataSRGB() {}
  /**@type {boolean}*/
  get isNativeTexture() {}
  /**@type {boolean}*/
  get isPreProcessed() {}
  /**@type {boolean}*/
  get isReadable() {}
  /**@type {Texture2D}*/
  static get linearGrayTexture() {}
  /**@type {boolean}*/
  get loadAllMips() {}
  /**
 * @param {boolean} value
 */
  set loadAllMips(value) {}
  /**@type {number}*/
  get loadedMipmapLevel() {}
  /**@type {number}*/
  get loadingMipmapLevel() {}
  /**@type {number}*/
  get minimumMipmapLevel() {}
  /**
 * @param {number} value
 */
  set minimumMipmapLevel(value) {}
  /**@type {number}*/
  get mipMapBias() {}
  /**
 * @param {number} value
 */
  set mipMapBias(value) {}
  /**@type {number}*/
  get mipmapCount() {}
  /**@type {string}*/
  get mipmapLimitGroup() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {Texture2D}*/
  static get normalTexture() {}
  /**@type {Texture2D}*/
  static get redTexture() {}
  /**@type {number}*/
  get requestedMipmapLevel() {}
  /**
 * @param {number} value
 */
  set requestedMipmapLevel(value) {}
  /**@type {boolean}*/
  get streamingMipmaps() {}
  /**@type {number}*/
  get streamingMipmapsPriority() {}
  /**@type {Vector2}*/
  get texelSize() {}
  /**@type {number}*/
  get updateCount() {}
  /**@type {boolean}*/
  get vtOnly() {}
  /**@type {Texture2D}*/
  static get whiteTexture() {}
  /**@type {number}*/
  get width() {}
  /**
 * @param {number} value
 */
  set width(value) {}
  /**@type {number}*/
  get wrapMode() {}
  /**
 * @param {number} value
 */
  set wrapMode(value) {}
  /**@type {number}*/
  get wrapModeU() {}
  /**
 * @param {number} value
 */
  set wrapModeU(value) {}
  /**@type {number}*/
  get wrapModeV() {}
  /**
 * @param {number} value
 */
  set wrapModeV(value) {}
  /**@type {number}*/
  get wrapModeW() {}
  /**
 * @param {number} value
 */
  set wrapModeW(value) {}
}
class AudioClip {
  constructor() {
    /**@type {AudioClip.PCMReaderCallback}*/
    this.m_PCMReaderCallback = null;
    /**@type {AudioClip.PCMSetPositionCallback}*/
    this.m_PCMSetPositionCallback = null;
  }
  /**
   * @param {AudioClip.PCMReaderCallback} value
   * @returns {void}
   */
  add_m_PCMReaderCallback(value) {}
  /**
   * @param {AudioClip.PCMSetPositionCallback} value
   * @returns {void}
   */
  add_m_PCMSetPositionCallback(value) {}
  /**
   * @returns {AudioClip}
   */
  static Construct_Internal() {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} _3D
   * @param {boolean} stream
   * @returns {AudioClip}
   */
  static Create(name, lengthSamples, channels, frequency, _3D, stream) {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} _3D
   * @param {boolean} stream
   * @param {AudioClip.PCMReaderCallback} pcmreadercallback
   * @returns {AudioClip}
   */
  static Create(name, lengthSamples, channels, frequency, _3D, stream, pcmreadercallback) {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} _3D
   * @param {boolean} stream
   * @param {AudioClip.PCMReaderCallback} pcmreadercallback
   * @param {AudioClip.PCMSetPositionCallback} pcmsetpositioncallback
   * @returns {AudioClip}
   */
  static Create(name, lengthSamples, channels, frequency, _3D, stream, pcmreadercallback, pcmsetpositioncallback) {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} stream
   * @returns {AudioClip}
   */
  static Create(name, lengthSamples, channels, frequency, stream) {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} stream
   * @param {AudioClip.PCMReaderCallback} pcmreadercallback
   * @returns {AudioClip}
   */
  static Create(name, lengthSamples, channels, frequency, stream, pcmreadercallback) {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} stream
   * @param {AudioClip.PCMReaderCallback} pcmreadercallback
   * @param {AudioClip.PCMSetPositionCallback} pcmsetpositioncallback
   * @returns {AudioClip}
   */
  static Create(name, lengthSamples, channels, frequency, stream, pcmreadercallback, pcmsetpositioncallback) {}
  /**
   * @param {string} name
   * @param {number} lengthSamples
   * @param {number} channels
   * @param {number} frequency
   * @param {boolean} stream
   * @returns {void}
   */
  CreateUserSound(name, lengthSamples, channels, frequency, stream) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {AudioClip} clip
   * @param {Single[]} data
   * @param {number} numSamples
   * @param {number} samplesOffset
   * @returns {boolean}
   */
  static GetData(clip, data, numSamples, samplesOffset) {}
  /**
   * @param {Single[]} data
   * @param {number} offsetSamples
   * @returns {boolean}
   */
  GetData(data, offsetSamples) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {string}
   */
  GetName() {}
  /**
   * @param {Single[]} data
   * @returns {void}
   */
  InvokePCMReaderCallback_Internal(data) {}
  /**
   * @param {number} position
   * @returns {void}
   */
  InvokePCMSetPositionCallback_Internal(position) {}
  /**
   * @returns {boolean}
   */
  LoadAudioData() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {AudioClip.PCMReaderCallback} value
   * @returns {void}
   */
  remove_m_PCMReaderCallback(value) {}
  /**
   * @param {AudioClip.PCMSetPositionCallback} value
   * @returns {void}
   */
  remove_m_PCMSetPositionCallback(value) {}
  /**
   * @param {AudioClip} clip
   * @param {Single[]} data
   * @param {number} numsamples
   * @param {number} samplesOffset
   * @returns {boolean}
   */
  static SetData(clip, data, numsamples, samplesOffset) {}
  /**
   * @param {Single[]} data
   * @param {number} offsetSamples
   * @returns {boolean}
   */
  SetData(data, offsetSamples) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {boolean}
   */
  UnloadAudioData() {}
  /**@type {boolean}*/
  get ambisonic() {}
  /**@type {number}*/
  get channels() {}
  /**@type {number}*/
  get frequency() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get isReadyToPlay() {}
  /**@type {number}*/
  get length() {}
  /**@type {boolean}*/
  get loadInBackground() {}
  /**@type {number}*/
  get loadState() {}
  /**@type {number}*/
  get loadType() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {boolean}*/
  get preloadAudioData() {}
  /**@type {number}*/
  get samples() {}
}
class AudioSource {
  constructor() {
  }
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter, options) {}
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  BroadcastMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, options) {}
  /**
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @returns {T}
   */
  GetComponent() {}
  /**
   * @param {string} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @param {Type} type
   * @param {IntPtr} oneFurtherThanResultValue
   * @returns {void}
   */
  GetComponentFastPath(type, oneFurtherThanResultValue) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInChildren(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInChildren() {}
  /**
   * @returns {number}
   */
  GetComponentIndex() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInParent(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInParent() {}
  /**
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponents(type) {}
  /**
   * @param {Type} type
   * @param {List} results
   * @returns {void}
   */
  GetComponents(type, results) {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponents(results) {}
  /**
   * @returns {T[]}
   */
  GetComponents() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInChildren(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} result
   * @returns {void}
   */
  GetComponentsInChildren(includeInactive, result) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInChildren() {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInChildren(results) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInParent(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInParent(includeInactive, results) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInParent() {}
  /**
   * @param {number} type
   * @returns {AnimationCurve}
   */
  GetCustomCurve(type) {}
  /**
   * @param {AudioSource} source
   * @param {number} type
   * @returns {AnimationCurve}
   */
  static GetCustomCurveHelper(source, type) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {number} numSamples
   * @param {number} channel
   * @returns {Single[]}
   */
  GetOutputData(numSamples, channel) {}
  /**
   * @param {Single[]} samples
   * @param {number} channel
   * @returns {void}
   */
  GetOutputData(samples, channel) {}
  /**
   * @param {AudioSource} source
   * @param {Single[]} samples
   * @param {number} channel
   * @returns {void}
   */
  static GetOutputDataHelper(source, samples, channel) {}
  /**
   * @param {AudioSource} source
   * @returns {number}
   */
  static GetPitch(source) {}
  /**
   * @param {number} numSamples
   * @param {number} channel
   * @param {number} window
   * @returns {Single[]}
   */
  GetSpectrumData(numSamples, channel, window) {}
  /**
   * @param {Single[]} samples
   * @param {number} channel
   * @param {number} window
   * @returns {void}
   */
  GetSpectrumData(samples, channel, window) {}
  /**
   * @param {AudioSource} source
   * @param {Single[]} samples
   * @param {number} channel
   * @param {number} window
   * @returns {void}
   */
  static GetSpectrumDataHelper(source, samples, channel, window) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  Pause() {}
  /**
   * @param {number} delay
   * @returns {void}
   */
  Play(delay) {}
  /**
   * @returns {void}
   */
  Play() {}
  /**
   * @param {number} delay
   * @returns {void}
   */
  Play(delay) {}
  /**
   * @param {AudioClip} clip
   * @param {Vector3} position
   * @returns {void}
   */
  static PlayClipAtPoint(clip, position) {}
  /**
   * @param {AudioClip} clip
   * @param {Vector3} position
   * @param {number} volume
   * @returns {void}
   */
  static PlayClipAtPoint(clip, position, volume) {}
  /**
   * @param {number} delay
   * @returns {void}
   */
  PlayDelayed(delay) {}
  /**
   * @param {AudioSource} source
   * @param {number} delay
   * @returns {void}
   */
  static PlayHelper(source, delay) {}
  /**
   * @param {AudioClip} clip
   * @returns {void}
   */
  PlayOneShot(clip) {}
  /**
   * @param {AudioClip} clip
   * @param {number} volumeScale
   * @returns {void}
   */
  PlayOneShot(clip, volumeScale) {}
  /**
   * @param {AudioSource} source
   * @param {AudioClip} clip
   * @param {number} volumeScale
   * @returns {void}
   */
  static PlayOneShotHelper(source, clip, volumeScale) {}
  /**
   * @param {number} time
   * @returns {void}
   */
  PlayScheduled(time) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessage(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessageUpwards(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessageUpwards(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, options) {}
  /**
   * @param {number} index
   * @param {number} value
   * @returns {boolean}
   */
  SetAmbisonicDecoderFloat(index, value) {}
  /**
   * @param {number} type
   * @param {AnimationCurve} curve
   * @returns {void}
   */
  SetCustomCurve(type, curve) {}
  /**
   * @param {AudioSource} source
   * @param {number} type
   * @param {AnimationCurve} curve
   * @returns {void}
   */
  static SetCustomCurveHelper(source, type, curve) {}
  /**
   * @param {AudioSource} source
   * @param {number} pitch
   * @returns {void}
   */
  static SetPitch(source, pitch) {}
  /**
   * @param {number} time
   * @returns {void}
   */
  SetScheduledEndTime(time) {}
  /**
   * @param {number} time
   * @returns {void}
   */
  SetScheduledStartTime(time) {}
  /**
   * @param {number} index
   * @param {number} value
   * @returns {boolean}
   */
  SetSpatializerFloat(index, value) {}
  /**
   * @param {boolean} stopOneShots
   * @returns {void}
   */
  Stop(stopOneShots) {}
  /**
   * @returns {void}
   */
  Stop() {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {void}
   */
  UnPause() {}
  /**@type {boolean}*/
  get bypassEffects() {}
  /**
 * @param {boolean} value
 */
  set bypassEffects(value) {}
  /**@type {boolean}*/
  get bypassListenerEffects() {}
  /**
 * @param {boolean} value
 */
  set bypassListenerEffects(value) {}
  /**@type {boolean}*/
  get bypassReverbZones() {}
  /**
 * @param {boolean} value
 */
  set bypassReverbZones(value) {}
  /**@type {AudioClip}*/
  get clip() {}
  /**
 * @param {AudioClip} value
 */
  set clip(value) {}
  /**@type {number}*/
  get dopplerLevel() {}
  /**
 * @param {number} value
 */
  set dopplerLevel(value) {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get ignoreListenerPause() {}
  /**
 * @param {boolean} value
 */
  set ignoreListenerPause(value) {}
  /**@type {boolean}*/
  get ignoreListenerVolume() {}
  /**
 * @param {boolean} value
 */
  set ignoreListenerVolume(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {boolean}*/
  get isPlaying() {}
  /**@type {boolean}*/
  get isVirtual() {}
  /**@type {boolean}*/
  get loop() {}
  /**
 * @param {boolean} value
 */
  set loop(value) {}
  /**@type {number}*/
  get maxDistance() {}
  /**
 * @param {number} value
 */
  set maxDistance(value) {}
  /**@type {number}*/
  get maxVolume() {}
  /**
 * @param {number} value
 */
  set maxVolume(value) {}
  /**@type {number}*/
  get minDistance() {}
  /**
 * @param {number} value
 */
  set minDistance(value) {}
  /**@type {number}*/
  get minVolume() {}
  /**
 * @param {number} value
 */
  set minVolume(value) {}
  /**@type {boolean}*/
  get mute() {}
  /**
 * @param {boolean} value
 */
  set mute(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {AudioMixerGroup}*/
  get outputAudioMixerGroup() {}
  /**
 * @param {AudioMixerGroup} value
 */
  set outputAudioMixerGroup(value) {}
  /**@type {number}*/
  get panStereo() {}
  /**
 * @param {number} value
 */
  set panStereo(value) {}
  /**@type {number}*/
  get pitch() {}
  /**
 * @param {number} value
 */
  set pitch(value) {}
  /**@type {boolean}*/
  get playOnAwake() {}
  /**
 * @param {boolean} value
 */
  set playOnAwake(value) {}
  /**@type {number}*/
  get priority() {}
  /**
 * @param {number} value
 */
  set priority(value) {}
  /**@type {number}*/
  get reverbZoneMix() {}
  /**
 * @param {number} value
 */
  set reverbZoneMix(value) {}
  /**@type {number}*/
  get rolloffFactor() {}
  /**
 * @param {number} value
 */
  set rolloffFactor(value) {}
  /**@type {number}*/
  get rolloffMode() {}
  /**
 * @param {number} value
 */
  set rolloffMode(value) {}
  /**@type {number}*/
  get spatialBlend() {}
  /**
 * @param {number} value
 */
  set spatialBlend(value) {}
  /**@type {boolean}*/
  get spatialize() {}
  /**
 * @param {boolean} value
 */
  set spatialize(value) {}
  /**@type {boolean}*/
  get spatializePostEffects() {}
  /**
 * @param {boolean} value
 */
  set spatializePostEffects(value) {}
  /**@type {number}*/
  get spread() {}
  /**
 * @param {number} value
 */
  set spread(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {number}*/
  get time() {}
  /**
 * @param {number} value
 */
  set time(value) {}
  /**@type {number}*/
  get timeSamples() {}
  /**
 * @param {number} value
 */
  set timeSamples(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {number}*/
  get velocityUpdateMode() {}
  /**
 * @param {number} value
 */
  set velocityUpdateMode(value) {}
  /**@type {number}*/
  get volume() {}
  /**
 * @param {number} value
 */
  set volume(value) {}
}
class SpriteRenderer {
  constructor() {
    /**@type {UnityEvent}*/
    this.m_SpriteChangeEvent = null;
  }
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter, options) {}
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  BroadcastMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, options) {}
  /**
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {List} result
   * @returns {void}
   */
  GetClosestReflectionProbes(result) {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @returns {T}
   */
  GetComponent() {}
  /**
   * @param {string} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @param {Type} type
   * @param {IntPtr} oneFurtherThanResultValue
   * @returns {void}
   */
  GetComponentFastPath(type, oneFurtherThanResultValue) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInChildren(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInChildren() {}
  /**
   * @returns {number}
   */
  GetComponentIndex() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInParent(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInParent() {}
  /**
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponents(type) {}
  /**
   * @param {Type} type
   * @param {List} results
   * @returns {void}
   */
  GetComponents(type, results) {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponents(results) {}
  /**
   * @returns {T[]}
   */
  GetComponents() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInChildren(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} result
   * @returns {void}
   */
  GetComponentsInChildren(includeInactive, result) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInChildren() {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInChildren(results) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInParent(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInParent(includeInactive, results) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInParent() {}
  /**
   * @returns {Mesh.MeshDataArray}
   */
  GetCurrentMeshData() {}
  /**
   * @returns {IntPtr}
   */
  GetCurrentMeshDataPtr() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {List} m
   * @returns {void}
   */
  GetMaterials(m) {}
  /**
   * @param {MaterialPropertyBlock} properties
   * @returns {void}
   */
  GetPropertyBlock(properties) {}
  /**
   * @param {MaterialPropertyBlock} properties
   * @param {number} materialIndex
   * @returns {void}
   */
  GetPropertyBlock(properties, materialIndex) {}
  /**
   * @param {MaterialPropertyBlock} mbp
   * @returns {void}
   */
  GetSecondaryTextureProperties(mbp) {}
  /**
   * @param {List} m
   * @returns {void}
   */
  GetSharedMaterials(m) {}
  /**
   * @returns {Bounds}
   */
  GetSpriteBounds() {}
  /**
   * @returns {boolean}
   */
  HasPropertyBlock() {}
  /**
   * @param {MaterialPropertyBlock} dest
   * @returns {void}
   */
  Internal_GetPropertyBlock(dest) {}
  /**
   * @param {MaterialPropertyBlock} dest
   * @param {number} materialIndex
   * @returns {void}
   */
  Internal_GetPropertyBlockMaterialIndex(dest, materialIndex) {}
  /**
   * @param {number} mode
   * @returns {Bounds}
   */
  Internal_GetSpriteBounds(mode) {}
  /**
   * @param {MaterialPropertyBlock} properties
   * @returns {void}
   */
  Internal_SetPropertyBlock(properties) {}
  /**
   * @param {MaterialPropertyBlock} properties
   * @param {number} materialIndex
   * @returns {void}
   */
  Internal_SetPropertyBlockMaterialIndex(properties, materialIndex) {}
  /**
   * @returns {void}
   */
  InvokeSpriteChanged() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {UnityAction} callback
   * @returns {void}
   */
  RegisterSpriteChangeCallback(callback) {}
  /**
   * @returns {void}
   */
  ResetBounds() {}
  /**
   * @returns {void}
   */
  ResetLocalBounds() {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessage(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessageUpwards(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessageUpwards(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, options) {}
  /**
   * @param {List} materials
   * @returns {void}
   */
  SetMaterials(materials) {}
  /**
   * @param {MaterialPropertyBlock} properties
   * @returns {void}
   */
  SetPropertyBlock(properties) {}
  /**
   * @param {MaterialPropertyBlock} properties
   * @param {number} materialIndex
   * @returns {void}
   */
  SetPropertyBlock(properties, materialIndex) {}
  /**
   * @param {List} materials
   * @returns {void}
   */
  SetSharedMaterials(materials) {}
  /**
   * @param {number} firstSubMesh
   * @param {number} subMeshCount
   * @returns {void}
   */
  SetStaticBatchInfo(firstSubMesh, subMeshCount) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {UnityAction} callback
   * @returns {void}
   */
  UnregisterSpriteChangeCallback(callback) {}
  /**@type {number}*/
  get adaptiveModeThreshold() {}
  /**
 * @param {number} value
 */
  set adaptiveModeThreshold(value) {}
  /**@type {boolean}*/
  get allowOcclusionWhenDynamic() {}
  /**
 * @param {boolean} value
 */
  set allowOcclusionWhenDynamic(value) {}
  /**@type {Bounds}*/
  get bounds() {}
  /**
 * @param {Bounds} value
 */
  set bounds(value) {}
  /**@type {boolean}*/
  get castShadows() {}
  /**
 * @param {boolean} value
 */
  set castShadows(value) {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {number}*/
  get drawMode() {}
  /**
 * @param {number} value
 */
  set drawMode(value) {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {boolean}*/
  get flipX() {}
  /**
 * @param {boolean} value
 */
  set flipX(value) {}
  /**@type {boolean}*/
  get flipY() {}
  /**
 * @param {boolean} value
 */
  set flipY(value) {}
  /**@type {boolean}*/
  get forceRenderingOff() {}
  /**
 * @param {boolean} value
 */
  set forceRenderingOff(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get isPartOfStaticBatch() {}
  /**@type {boolean}*/
  get isVisible() {}
  /**@type {number}*/
  get lightmapIndex() {}
  /**
 * @param {number} value
 */
  set lightmapIndex(value) {}
  /**@type {Vector4}*/
  get lightmapScaleOffset() {}
  /**
 * @param {Vector4} value
 */
  set lightmapScaleOffset(value) {}
  /**@type {GameObject}*/
  get lightProbeProxyVolumeOverride() {}
  /**
 * @param {GameObject} value
 */
  set lightProbeProxyVolumeOverride(value) {}
  /**@type {number}*/
  get lightProbeUsage() {}
  /**
 * @param {number} value
 */
  set lightProbeUsage(value) {}
  /**@type {Bounds}*/
  get localBounds() {}
  /**
 * @param {Bounds} value
 */
  set localBounds(value) {}
  /**@type {Matrix4x4}*/
  get localToWorldMatrix() {}
  /**@type {number}*/
  get maskInteraction() {}
  /**
 * @param {number} value
 */
  set maskInteraction(value) {}
  /**@type {Material}*/
  get material() {}
  /**
 * @param {Material} value
 */
  set material(value) {}
  /**@type {Material[]}*/
  get materials() {}
  /**
 * @param {Material[]} value
 */
  set materials(value) {}
  /**@type {number}*/
  get motionVectorGenerationMode() {}
  /**
 * @param {number} value
 */
  set motionVectorGenerationMode(value) {}
  /**@type {boolean}*/
  get motionVectors() {}
  /**
 * @param {boolean} value
 */
  set motionVectors(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {Transform}*/
  get probeAnchor() {}
  /**
 * @param {Transform} value
 */
  set probeAnchor(value) {}
  /**@type {number}*/
  get rayTracingMode() {}
  /**
 * @param {number} value
 */
  set rayTracingMode(value) {}
  /**@type {number}*/
  get realtimeLightmapIndex() {}
  /**
 * @param {number} value
 */
  set realtimeLightmapIndex(value) {}
  /**@type {Vector4}*/
  get realtimeLightmapScaleOffset() {}
  /**
 * @param {Vector4} value
 */
  set realtimeLightmapScaleOffset(value) {}
  /**@type {boolean}*/
  get receiveShadows() {}
  /**
 * @param {boolean} value
 */
  set receiveShadows(value) {}
  /**@type {number}*/
  get reflectionProbeUsage() {}
  /**
 * @param {number} value
 */
  set reflectionProbeUsage(value) {}
  /**@type {number}*/
  get rendererPriority() {}
  /**
 * @param {number} value
 */
  set rendererPriority(value) {}
  /**@type {number}*/
  get renderingLayerMask() {}
  /**
 * @param {number} value
 */
  set renderingLayerMask(value) {}
  /**@type {number}*/
  get shadowCastingMode() {}
  /**
 * @param {number} value
 */
  set shadowCastingMode(value) {}
  /**@type {Material}*/
  get sharedMaterial() {}
  /**
 * @param {Material} value
 */
  set sharedMaterial(value) {}
  /**@type {Material[]}*/
  get sharedMaterials() {}
  /**
 * @param {Material[]} value
 */
  set sharedMaterials(value) {}
  /**@type {boolean}*/
  get shouldSupportTiling() {}
  /**@type {Vector2}*/
  get size() {}
  /**
 * @param {Vector2} value
 */
  set size(value) {}
  /**@type {number}*/
  get sortingGroupID() {}
  /**
 * @param {number} value
 */
  set sortingGroupID(value) {}
  /**@type {number}*/
  get sortingGroupKey() {}
  /**@type {number}*/
  get sortingGroupOrder() {}
  /**
 * @param {number} value
 */
  set sortingGroupOrder(value) {}
  /**@type {number}*/
  get sortingKey() {}
  /**@type {number}*/
  get sortingLayerID() {}
  /**
 * @param {number} value
 */
  set sortingLayerID(value) {}
  /**@type {string}*/
  get sortingLayerName() {}
  /**
 * @param {string} value
 */
  set sortingLayerName(value) {}
  /**@type {number}*/
  get sortingOrder() {}
  /**
 * @param {number} value
 */
  set sortingOrder(value) {}
  /**@type {Sprite}*/
  get sprite() {}
  /**
 * @param {Sprite} value
 */
  set sprite(value) {}
  /**@type {number}*/
  get spriteSortPoint() {}
  /**
 * @param {number} value
 */
  set spriteSortPoint(value) {}
  /**@type {number}*/
  get staticBatchIndex() {}
  /**@type {Transform}*/
  get staticBatchRootTransform() {}
  /**
 * @param {Transform} value
 */
  set staticBatchRootTransform(value) {}
  /**@type {boolean}*/
  get staticShadowCaster() {}
  /**
 * @param {boolean} value
 */
  set staticShadowCaster(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {number}*/
  get tileMode() {}
  /**
 * @param {number} value
 */
  set tileMode(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {boolean}*/
  get useLightProbes() {}
  /**
 * @param {boolean} value
 */
  set useLightProbes(value) {}
  /**@type {Matrix4x4}*/
  get worldToLocalMatrix() {}
}
class scrHitTextMesh {
  constructor() {
    /**@type {boolean}*/
    this.dead = null;
    /**@type {TextMesh}*/
    this.text = null;
    /**@type {CanvasGroup}*/
    this.sf = null;
    /**@type {DOTweenAnimation}*/
    this.anim = null;
    /**@type {number}*/
    this.hitMargin = null;
    /**@type {number}*/
    this.timer = null;
    /**@type {number}*/
    this.frameShown = null;
    /**@type {boolean}*/
    this.forceOnScreen = null;
    /**@type {number}*/
    this.minBorderDistance = null;
    /**@type {Camera}*/
    this.gameCam = null;
    /**@type {Vector3}*/
    this.textPos = null;
    /**@type {Renderer}*/
    this.meshRenderer = null;
    /**@type {number}*/
    this.startingSize = null;
    /**@type {number}*/
    this.sizeUp = null;
    /**@type {number}*/
    this.duration = null;
    /**@type {number}*/
    this.vibrato = null;
    /**@type {number}*/
    this.elasticity = null;
  }
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter, options) {}
  /**
   * @param {string} methodName
   * @param {Object} parameter
   * @returns {void}
   */
  BroadcastMessage(methodName, parameter) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  BroadcastMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, options) {}
  /**
   * @returns {void}
   */
  CancelInvoke() {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  CancelInvoke(methodName) {}
  /**
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {void}
   */
  FlushUnusedMemory() {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @returns {T}
   */
  GetComponent() {}
  /**
   * @param {string} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @param {Type} type
   * @param {IntPtr} oneFurtherThanResultValue
   * @returns {void}
   */
  GetComponentFastPath(type, oneFurtherThanResultValue) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInChildren(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInChildren() {}
  /**
   * @returns {number}
   */
  GetComponentIndex() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component}
   */
  GetComponentInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInParent(includeInactive) {}
  /**
   * @returns {T}
   */
  GetComponentInParent() {}
  /**
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponents(type) {}
  /**
   * @param {Type} type
   * @param {List} results
   * @returns {void}
   */
  GetComponents(type, results) {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponents(results) {}
  /**
   * @returns {T[]}
   */
  GetComponents() {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInChildren(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInChildren(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInChildren(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} result
   * @returns {void}
   */
  GetComponentsInChildren(includeInactive, result) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInChildren() {}
  /**
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInChildren(results) {}
  /**
   * @param {Type} t
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInParent(t, includeInactive) {}
  /**
   * @param {Type} t
   * @returns {Component[]}
   */
  GetComponentsInParent(t) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInParent(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInParent(includeInactive, results) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInParent() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {string}
   */
  GetScriptClassName() {}
  /**
   * @returns {void}
   */
  GoToLevelEditor() {}
  /**
   * @param {number} hitMargin
   * @returns {void}
   */
  Init(hitMargin) {}
  /**
   * @param {string} methodName
   * @param {number} time
   * @returns {void}
   */
  Invoke(methodName, time) {}
  /**
   * @param {string} methodName
   * @param {number} time
   * @param {number} repeatRate
   * @returns {void}
   */
  InvokeRepeating(methodName, time, repeatRate) {}
  /**
   * @returns {boolean}
   */
  IsInvoking() {}
  /**
   * @param {string} methodName
   * @returns {boolean}
   */
  IsInvoking(methodName) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  OnBeat() {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessage(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessage(methodName) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessage(methodName, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, value, options) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {void}
   */
  SendMessageUpwards(methodName, value) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  SendMessageUpwards(methodName) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, options) {}
  /**
   * @param {Vector3} position
   * @param {number} angle
   * @returns {void}
   */
  Show(position, angle) {}
  /**
   * @param {string} methodName
   * @returns {Coroutine}
   */
  StartCoroutine(methodName) {}
  /**
   * @param {string} methodName
   * @param {Object} value
   * @returns {Coroutine}
   */
  StartCoroutine(methodName, value) {}
  /**
   * @param {IEnumerator} routine
   * @returns {Coroutine}
   */
  StartCoroutine(routine) {}
  /**
   * @param {IEnumerator} routine
   * @returns {Coroutine}
   */
  StartCoroutine_Auto(routine) {}
  /**
   * @returns {void}
   */
  StopAllCoroutines() {}
  /**
   * @param {IEnumerator} routine
   * @returns {void}
   */
  StopCoroutine(routine) {}
  /**
   * @param {Coroutine} routine
   * @returns {void}
   */
  StopCoroutine(routine) {}
  /**
   * @param {string} methodName
   * @returns {void}
   */
  StopCoroutine(methodName) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {void}
   */
  Update() {}
  /**@type {boolean}*/
  get bb() {}
  /**@type {CancellationToken}*/
  get destroyCancellationToken() {}
  /**@type {HashSet}*/
  get dlcManagers() {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {NeoCosmosManager}*/
  get neoCosmosManager() {}
  /**@type {boolean}*/
  get practiceAvailable() {}
  /**@type {number}*/
  get randomFloat() {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {boolean}*/
  get useGUILayout() {}
  /**
 * @param {boolean} value
 */
  set useGUILayout(value) {}
  /**@type {VegaDLCManager}*/
  get vegaDLCManager() {}
  /**@type {number}*/
  get x() {}
  /**
 * @param {number} value
 */
  set x(value) {}
  /**@type {number}*/
  get xGlobal() {}
  /**
 * @param {number} value
 */
  set xGlobal(value) {}
  /**@type {number}*/
  get y() {}
  /**
 * @param {number} value
 */
  set y(value) {}
  /**@type {number}*/
  get yGlobal() {}
  /**
 * @param {number} value
 */
  set yGlobal(value) {}
}
class HitMargin {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {HitMargin}*/
  static TooEarly;
  /**@type {HitMargin}*/
  static VeryEarly;
  /**@type {HitMargin}*/
  static EarlyPerfect;
  /**@type {HitMargin}*/
  static Perfect;
  /**@type {HitMargin}*/
  static LatePerfect;
  /**@type {HitMargin}*/
  static VeryLate;
  /**@type {HitMargin}*/
  static TooLate;
  /**@type {HitMargin}*/
  static Multipress;
  /**@type {HitMargin}*/
  static FailMiss;
  /**@type {HitMargin}*/
  static FailOverload;
  /**@type {HitMargin}*/
  static Auto;
  /**@type {HitMargin}*/
  static OverPress;
}
class SfxSound {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {SfxSound}*/
  static PowerUp;
  /**@type {SfxSound}*/
  static PowerDown;
  /**@type {SfxSound}*/
  static MenuSquelch;
  /**@type {SfxSound}*/
  static ApplauseQuiet;
  /**@type {SfxSound}*/
  static Applause;
  /**@type {SfxSound}*/
  static OttoActivate;
  /**@type {SfxSound}*/
  static OttoActivateNervous;
  /**@type {SfxSound}*/
  static OttoDeactivate;
  /**@type {SfxSound}*/
  static OttoHappy;
  /**@type {SfxSound}*/
  static Wilhelm;
  /**@type {SfxSound}*/
  static ModifierActivate;
  /**@type {SfxSound}*/
  static ModifierDeactivate;
  /**@type {SfxSound}*/
  static ScreenWipeIn;
  /**@type {SfxSound}*/
  static ScreenWipeOut;
  /**@type {SfxSound}*/
  static PurePerfect;
  /**@type {SfxSound}*/
  static MenuCrack;
  /**@type {SfxSound}*/
  static SpeechOverseer;
  /**@type {SfxSound}*/
  static SpeechCharlie;
  /**@type {SfxSound}*/
  static SpeechSef;
  /**@type {SfxSound}*/
  static MawaruCoin;
  /**@type {SfxSound}*/
  static MawaruLaser;
  /**@type {SfxSound}*/
  static MawaruWrong;
  /**@type {SfxSound}*/
  static Banish;
  /**@type {SfxSound}*/
  static PlanetTransform;
  /**@type {SfxSound}*/
  static MenuCrackFinal;
  /**@type {SfxSound}*/
  static EnterNeoCosmos;
  /**@type {SfxSound}*/
  static MobileButton;
  /**@type {SfxSound}*/
  static MobileButtonLeft;
  /**@type {SfxSound}*/
  static MobileButtonRight;
  /**@type {SfxSound}*/
  static MobileButtonEnter;
  /**@type {SfxSound}*/
  static PortalSelect;
  /**@type {SfxSound}*/
  static PortalDeselect;
  /**@type {SfxSound}*/
  static PortalLocked;
  /**@type {SfxSound}*/
  static PlanetCatch;
  /**@type {SfxSound}*/
  static PlanetRelease;
  /**@type {SfxSound}*/
  static PlanetPaint;
  /**@type {SfxSound}*/
  static SpeedTrialOn;
  /**@type {SfxSound}*/
  static SpeedTrialOff;
  /**@type {SfxSound}*/
  static NotificationIn;
  /**@type {SfxSound}*/
  static NotificationOut;
  /**@type {SfxSound}*/
  static MobileMenuXC1;
  /**@type {SfxSound}*/
  static MobileMenuXC2;
  /**@type {SfxSound}*/
  static MobileMenuXC3;
  /**@type {SfxSound}*/
  static MobileMenuXF;
  /**@type {SfxSound}*/
  static MobileMenuXR1;
  /**@type {SfxSound}*/
  static MobileMenuXR2;
  /**@type {SfxSound}*/
  static MobileMenuXR3;
  /**@type {SfxSound}*/
  static MobileMenuXH;
  /**@type {SfxSound}*/
  static MobileMenuMineswooce;
  /**@type {SfxSound}*/
  static MenuStonePanelOpen;
  /**@type {SfxSound}*/
  static MenuStonePanelClose;
  /**@type {SfxSound}*/
  static FireTile;
  /**@type {SfxSound}*/
  static IceTile;
  /**@type {SfxSound}*/
  static YouFool;
  /**@type {SfxSound}*/
  static YouAbsoluteBuffoon;
  /**@type {SfxSound}*/
  static PlanetPreExplosion;
  /**@type {SfxSound}*/
  static PlanetExplosion;
  /**@type {SfxSound}*/
  static PlanetExplosionHighscore;
  /**@type {SfxSound}*/
  static Calibration;
  /**@type {SfxSound}*/
  static AchievementBubbleOpen;
  /**@type {SfxSound}*/
  static AchievementBubbleClose;
  /**@type {SfxSound}*/
  static AchievementIconBurst;
  /**@type {SfxSound}*/
  static AchievementJingle;
  /**@type {SfxSound}*/
  static AchievementJingleSmall;
}
class HitSound {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {HitSound}*/
  static Hat;
  /**@type {HitSound}*/
  static Kick;
  /**@type {HitSound}*/
  static Shaker;
  /**@type {HitSound}*/
  static Sizzle;
  /**@type {HitSound}*/
  static Chuck;
  /**@type {HitSound}*/
  static ShakerLoud;
  /**@type {HitSound}*/
  static None;
  /**@type {HitSound}*/
  static Hammer;
  /**@type {HitSound}*/
  static KickChroma;
  /**@type {HitSound}*/
  static SnareAcoustic2;
  /**@type {HitSound}*/
  static Sidestick;
  /**@type {HitSound}*/
  static Stick;
  /**@type {HitSound}*/
  static ReverbClack;
  /**@type {HitSound}*/
  static Squareshot;
  /**@type {HitSound}*/
  static PowerDown;
  /**@type {HitSound}*/
  static PowerUp;
  /**@type {HitSound}*/
  static KickHouse;
  /**@type {HitSound}*/
  static KickRupture;
  /**@type {HitSound}*/
  static HatHouse;
  /**@type {HitSound}*/
  static SnareHouse;
  /**@type {HitSound}*/
  static SnareVapor;
  /**@type {HitSound}*/
  static ClapHit;
  /**@type {HitSound}*/
  static ClapHitEcho;
  /**@type {HitSound}*/
  static ReverbClap;
  /**@type {HitSound}*/
  static FireTile;
  /**@type {HitSound}*/
  static IceTile;
  /**@type {HitSound}*/
  static VehiclePositive;
  /**@type {HitSound}*/
  static VehicleNegative;
}
class Adofai {
  constructor() {
  }
  /**@type {AccessTools.FieldRef}*/
  static cachedHitTexts;
  /**@type {AccessTools.FieldRef}*/
  static sHTM_text;
  /**@type {number}*/
  static startRadius;
  /**@type {boolean}*/
  static autoTextInjected;
  /**@type {boolean}*/
  static startRadiusInjected;
  /**
   * @param {JsValue} configFunc UnityEngine.UI.Text Callback
   * @returns {void}
   */
  static configAutoText(configFunc) {}
  /**
   * @param {number} hitMargin scrHitTextMesh Callback
   * @param {JsValue} configFunc
   * @returns {void}
   */
  static configJudgeText(hitMargin, configFunc) {}
  /**
   * @param {JsValue} configFunc
   * @returns {void}
   */
  static configTiles(configFunc) {}
  /**
   * @param {scrFloor} floor
   * @returns {number}
   */
  static getAngleFromFloor(floor) {}
  /**
   * @param {scrPlanet} planet
   * @param {PlanetRenderer} planetrenderer
   * @returns {SpriteRenderer} UnityEngine.SpriteRenderer (Planet SpriteRenderer)
   */
  static getPlanetRenderer(planet, planetrenderer) {}
  /**
   * @returns {void}
   */
  static InjectAutoTextUpdate() {}
  /**
   * @returns {void}
   */
  static InjectStartRadius() {}
  /**
   * @param {Transform[]} t
   * @param {Vector2} vec
   * @returns {void}
   */
  static ScaleAll(t, vec) {}
  /**
   * @param {PlanetRenderer} planetrender
   * @param {Vector2} vec
   * @returns {void}
   */
  static scalePlanet(planetrender, vec) {}
  /**
   * @param {string} text
   * @returns {void}
   */
  static setAutoText(text) {}
  /**
   * @param {string} text
   * @returns {void}
   */
  static setBuildText(text) {}
  /**
   * @param {string} title
   * @param {string} state
   * @param {string} details
   * @returns {void}
   */
  static setDiscordRp(title, state, details) {}
  /**
   * @param {number} hit
   * @param {string} audio
   * @returns {void}
   */
  static setHitSound(hit, audio) {}
  /**
   * @param {number} hitMargin
   * @param {string} text
   * @returns {void}
   */
  static setJudgeText(hitMargin, text) {}
  /**
   * @param {string} audio
   * @returns {void}
   */
  static setLobbyBgm(audio) {}
  /**
   * @param {number} sfx
   * @param {string} audio
   * @returns {void}
   */
  static setSfxSound(sfx, audio) {}
  /**
   * @param {number} radius
   * @returns {void}
   */
  static setStartRadius(radius) {}
  /**
   * @param {Sprite} sprite
   * @param {number} scale
   * @returns {void}
   */
  static setTileIcon(sprite, scale) {}
  /**
   * @param {Sprite} sprite
   * @param {number} scale
   * @returns {void}
   */
  static setTileSprite(sprite, scale) {}
  /**
   * @param {boolean} enabled
   * @returns {void}
   */
  static setOldAuto(enabled) {}
}
/**
 * @param {String[]} tagsOrProxies
 * @returns {void}
 */
function use(...tagsOrProxies) {}
/**
 * @param {string} path
 * @param {OverlayerText[]} texts
 * @returns {void}
 */
function exportTexts(path, texts) {}
/**
 * @param {Byte[]} rawTexts
 * @returns {OverlayerText[]}
 */
function importTexts(rawTexts) {}
/**
 * @returns {void}
 */
function deleteThis() {}
/**
 * @param {string} fileName
 * @param {Type[]} types
 * @param {MethodInfo[]} methods
 * @returns {void}
 */
function generateProxy(fileName, types, methods) {}
/**
 * @param {string} fileName
 * @param {Type[]} types
 * @param {String[]} typeAliases
 * @param {MethodInfo[]} methods
 * @param {String[]} methodAliases
 * @returns {void}
 */
function generateProxyWithAlias(fileName, types, typeAliases, methods, methodAliases) {}
/**
 * @param {string} clrType
 * @returns {Type}
 */
function resolveClrType(clrType) {}
/**
 * @param {string} clrType
 * @param {string} name
 * @returns {MethodInfo}
 */
function resolveClrMethod(clrType, name) {}
/**
 * @param {string} clrType
 * @returns {TypeReference}
 */
function resolve(clrType) {}
/**
 * @param {Object} obj
 * @param {string} accessor
 * @returns {Object}
 */
function getAttr(obj, accessor) {}
/**
 * @param {Object} obj
 * @param {string} accessor
 * @param {Object} value
 * @returns {boolean}
 */
function setAttr(obj, accessor, value) {}
/**
 * @param {Object} obj
 * @returns {JsValue}
 */
function wrapToJSObject(obj) {}
/**
 * @param {JsValue} value
 * @returns {Object}
 */
function unwrapFromJSObject(value) {}
/**
 * @param {string} extra
 * @returns {string}
 */
function getScriptPath(extra) {}
/**
 * @param {string} genericType
 * @param {String[]} genericArgs
 * @returns {string}
 */
function getClrGenericTypeName(genericType, genericArgs) {}
/**
 * @param {string} name
 * @returns {Object}
 */
function getGlobalVariable(name) {}
/**
 * @param {string} name
 * @param {Object} obj
 * @returns {Object}
 */
function setGlobalVariable(name, obj) {}
/**
 * @param {string} name
 * @param {JsValue} func
 * @param {boolean} notplaying
 * @param {string} tooltip
 * @returns {void}
 */
function registerTag(name, func, notplaying, tooltip) {}
/**
 * @param {string} name
 * @returns {void}
 */
function unregisterTag(name) {}
/**
 * @returns {boolean}
 */
function isNoFailMode() {}
/**
 * @returns {number}
 */
function getLanguage() {}
/**
 * @returns {boolean}
 */
function isAutoEnabled() {}
/**
 * @returns {boolean}
 */
function isWeakAutoEnabled() {}
/**
 * @param {number} ease
 * @param {number} lifetime
 * @returns {number}
 */
function ease(ease, lifetime) {}
/**
 * @param {Color} color
 * @param {number} ease
 * @param {number} lifetime
 * @returns {Color}
 */
function easeColor(color, ease, lifetime) {}
/**
 * @param {Color} from
 * @param {Color} to
 * @param {number} ease
 * @param {number} lifetime
 * @returns {Color}
 */
function easeColorFromTo(from, to, ease, lifetime) {}
/**
 * @param {string} rgbHex
 * @returns {Color}
 */
function colorFromHexRGB(rgbHex) {}
/**
 * @param {string} rgbaHex
 * @returns {Color}
 */
function colorFromHexRGBA(rgbaHex) {}
/**
 * @param {Color} color
 * @returns {Single[]}
 */
function rgbToHSV(color) {}
/**
 * @param {Color} color
 * @returns {string}
 */
function colorToHexRGB(color) {}
/**
 * @param {Color} color
 * @returns {string}
 */
function colorToHexRGBA(color) {}
/**
 * @param {string} tagName
 * @param {String[]} args
 * @returns {string}
 */
function getTagValueSafe(tagName, ...args) {}
/**
 * @param {string} str
 * @returns {number}
 */
function parseFastInt(str) {}
/**
 * @param {string} str
 * @returns {number}
 */
function parseFastFloat(str) {}
/**
 * @param {number} index
 * @returns {OverlayerText}
 */
function getText(index) {}
/**
 * @param {string} name
 * @returns {OverlayerText}
 */
function getTextByName(name) {}
/**
 * @returns {OverlayerText}
 */
function createText() {}
/**
 * @param {string} json
 * @returns {OverlayerText}
 */
function createTextFromJson(json) {}
/**
 * @param {string} imagePath
 * @returns {Texture2D}
 */
function createTexture(imagePath) {}
/**
 * @param {Byte[]} raw
 * @returns {Texture2D}
 */
function createTextureRaw(raw) {}
/**
 * @param {Texture2D} texture
 * @returns {Sprite}
 */
function createSprite(texture) {}
/**
 * @param {string} path
 * @returns {void}
 */
function playSound(path) {}
/**
 * Load Audio(UnityEngine.AudioClip) With Callback (.mp3, .ogg, .aiff, .wav)
 * @param {string} path
 * @param {JsValue} callback
 * @returns {void}
 */
function loadAudio(path, callback) {}
/**
 * Set Audio(UnityEngine.AudioClip) With Callback (.mp3, .ogg, .aiff, .wav)
 * @param {string} path
 * @param {AudioSource} source
 * @returns {void}
 */
function setAudio(path, source) {}
/**
 * On ADOFAI Rewind (Level Start, Scene Moved, etc..)
 * @param {JsValue} func
 * @returns {void}
 */
function rewind(func) {}
/**
 * On Tile Hit
 * @param {JsValue} func
 * @returns {void}
 */
function hit(func) {}
/**
 * On Dead
 * @param {JsValue} func
 * @returns {void}
 */
function dead(func) {}
/**
 * On Fail
 * @param {JsValue} func
 * @returns {void}
 */
function fail(func) {}
/**
 * On Clear
 * @param {JsValue} func
 * @returns {void}
 */
function clear(func) {}
/**
 * On Any Key Pressed
 * @param {JsValue} func
 * @returns {void}
 */
function anyKey(func) {}
/**
 * On Any Key Down
 * @param {JsValue} func
 * @returns {void}
 */
function anyKeyDown(func) {}
/**
 * On Key Pressed
 * @param {number} key
 * @param {JsValue} func
 * @returns {void}
 */
function key(key, func) {}
/**
 * On Key Up
 * @param {number} key
 * @param {JsValue} func
 * @returns {void}
 */
function keyUp(key, func) {}
/**
 * On Key Down
 * @param {number} key
 * @param {JsValue} func
 * @returns {void}
 */
function keyDown(key, func) {}
/**
 * @returns {string}
 */
function Developer() {}
/**
 * @returns {string}
 */
function MipaNyang() {}
/**
 * @returns {UnityModManager.ModEntry.ModLogger}
 */
function Logger() {}
/**
 * @returns {Settings}
 */
function Settings() {}
/**
 * @returns {Scene}
 */
function ActiveScene() {}
/**
 * @returns {Translator}
 */
function Lang() {}
/**
 * @returns {Version}
 */
function ModVersion() {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TileBpm(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function CurBpm(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function RecKPS(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TileBpmWithoutPitch(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function CurBpmWithoutPitch(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function RecKPSWithoutPitch(digits) {}
/**
 * @param {string} rawFunc
 * @param {number} valueMin
 * @param {number} valueMax
 * @param {string} colorMinHex
 * @param {string} colorMaxHex
 * @param {string} easeRaw
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function ColorRange(rawFunc, valueMin, valueMax, colorMinHex, colorMaxHex, easeRaw, maxLength, afterTrimStr) {}
/**
 * @param {string} rawFunc
 * @param {number} startSize
 * @param {number} endSize
 * @param {number} defaultSize
 * @param {number} speed
 * @param {boolean} invert
 * @param {number} ease
 * @returns {number}
 */
function MovingMan(rawFunc, startSize, endSize, defaultSize, speed, invert, ease) {}
/**
 * @param {string} rawFunc
 * @param {number} digits
 * @param {number} speed
 * @param {number} ease
 * @returns {number}
 */
function EasedValue(rawFunc, digits, speed, ease) {}
/**
 * @param {number} speed
 * @returns {string}
 */
function Rainbow(speed) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function Fps(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function FrameTime(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TargetFps(digits) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function TEHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function VEHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function EPHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function PHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function LPHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function VLHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function TLHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function MPHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function FMHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function FOHex(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function LHit(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function NHit(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function SHit(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function CHit(maxLength, afterTrimStr) {}
/**
 * @returns {number}
 */
function LFast() {}
/**
 * @returns {number}
 */
function NFast() {}
/**
 * @returns {number}
 */
function SFast() {}
/**
 * @returns {number}
 */
function CFast() {}
/**
 * @returns {number}
 */
function LSlow() {}
/**
 * @returns {number}
 */
function NSlow() {}
/**
 * @returns {number}
 */
function SSlow() {}
/**
 * @returns {number}
 */
function CSlow() {}
/**
 * @returns {number}
 */
function LELP() {}
/**
 * @returns {number}
 */
function NELP() {}
/**
 * @returns {number}
 */
function SELP() {}
/**
 * @returns {number}
 */
function CELP() {}
/**
 * @returns {number}
 */
function LV() {}
/**
 * @returns {number}
 */
function NV() {}
/**
 * @returns {number}
 */
function SV() {}
/**
 * @returns {number}
 */
function CV() {}
/**
 * @returns {number}
 */
function LT() {}
/**
 * @returns {number}
 */
function NT() {}
/**
 * @returns {number}
 */
function ST() {}
/**
 * @returns {number}
 */
function CT() {}
/**
 * @returns {number}
 */
function OTE() {}
/**
 * @returns {number}
 */
function OVE() {}
/**
 * @returns {number}
 */
function OEP() {}
/**
 * @returns {number}
 */
function OP() {}
/**
 * @returns {number}
 */
function OLP() {}
/**
 * @returns {number}
 */
function OVL() {}
/**
 * @returns {number}
 */
function OTL() {}
/**
 * @returns {number}
 */
function OA() {}
/**
 * @returns {number}
 */
function OPP() {}
/**
 * @returns {number}
 */
function MissCount() {}
/**
 * @returns {number}
 */
function Overloads() {}
/**
 * @returns {number}
 */
function Fail() {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function Difficulty(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function DifficultyRaw(maxLength, afterTrimStr) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function LMarginCombos(margins) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function NMarginCombos(margins) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function SMarginCombos(margins) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function MarginCombos(margins) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function SpecialPlayMark(maxLength, afterTrimStr) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function LMarginMaxCombos(margins) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function NMarginMaxCombos(margins) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function SMarginMaxCombos(margins) {}
/**
 * @param {string} margins
 * @returns {number}
 */
function MarginMaxCombos(margins) {}
/**
 * @returns {number}
 */
function LHitRaw() {}
/**
 * @returns {number}
 */
function NHitRaw() {}
/**
 * @returns {number}
 */
function SHitRaw() {}
/**
 * @returns {number}
 */
function CHitRaw() {}
/**
 * @returns {number}
 */
function LTE() {}
/**
 * @returns {number}
 */
function LVE() {}
/**
 * @returns {number}
 */
function LEP() {}
/**
 * @returns {number}
 */
function LP() {}
/**
 * @returns {number}
 */
function LLP() {}
/**
 * @returns {number}
 */
function LVL() {}
/**
 * @returns {number}
 */
function LTL() {}
/**
 * @returns {number}
 */
function NTE() {}
/**
 * @returns {number}
 */
function NVE() {}
/**
 * @returns {number}
 */
function NEP() {}
/**
 * @returns {number}
 */
function NP() {}
/**
 * @returns {number}
 */
function NLP() {}
/**
 * @returns {number}
 */
function NVL() {}
/**
 * @returns {number}
 */
function NTL() {}
/**
 * @returns {number}
 */
function STE() {}
/**
 * @returns {number}
 */
function SVE() {}
/**
 * @returns {number}
 */
function SEP() {}
/**
 * @returns {number}
 */
function SP() {}
/**
 * @returns {number}
 */
function SLP() {}
/**
 * @returns {number}
 */
function SVL() {}
/**
 * @returns {number}
 */
function STL() {}
/**
 * @returns {number}
 */
function CTE() {}
/**
 * @returns {number}
 */
function CVE() {}
/**
 * @returns {number}
 */
function CEP() {}
/**
 * @returns {number}
 */
function CP() {}
/**
 * @returns {number}
 */
function CLP() {}
/**
 * @returns {number}
 */
function CVL() {}
/**
 * @returns {number}
 */
function CTL() {}
/**
 * @returns {number}
 */
function Multipress() {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function Title(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function Author(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function Artist(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function TitleRaw(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function AuthorRaw(maxLength, afterTrimStr) {}
/**
 * @param {number} maxLength
 * @param {string} afterTrimStr
 * @returns {string}
 */
function ArtistRaw(maxLength, afterTrimStr) {}
/**
 * @returns {string}
 */
function DefaultTextColor() {}
/**
 * @returns {string}
 */
function DefaultTextShadowColor() {}
/**
 * @returns {number}
 */
function CurMinute() {}
/**
 * @returns {number}
 */
function CurSecond() {}
/**
 * @returns {number}
 */
function CurMilliSecond() {}
/**
 * @returns {number}
 */
function TotalMinute() {}
/**
 * @returns {number}
 */
function TotalSecond() {}
/**
 * @returns {number}
 */
function TotalMilliSecond() {}
/**
 * @param {number} digits
 * @returns {number}
 */
function Progress(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function ActualProgress(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function Accuracy(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function XAccuracy(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function Pitch(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function EditorPitch(digits) {}
/**
 * @returns {number}
 */
function CheckPointUsed() {}
/**
 * @param {number} margin
 * @returns {number}
 */
function LMarginCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function NMarginCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function SMarginCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function MarginCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function LMarginMaxCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function NMarginMaxCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function SMarginMaxCombo(margin) {}
/**
 * @param {number} margin
 * @returns {number}
 */
function MarginMaxCombo(margin) {}
/**
 * @returns {number}
 */
function CurCheckPoint() {}
/**
 * @returns {number}
 */
function TotalCheckPoints() {}
/**
 * @returns {number}
 */
function Combo() {}
/**
 * @returns {number}
 */
function MaxCombo() {}
/**
 * @returns {number}
 */
function LScore() {}
/**
 * @returns {number}
 */
function NScore() {}
/**
 * @returns {number}
 */
function SScore() {}
/**
 * @returns {number}
 */
function Score() {}
/**
 * @returns {number}
 */
function BestProgress() {}
/**
 * @returns {boolean}
 */
function IsAutoEnabled() {}
/**
 * @returns {boolean}
 */
function IsPracticeModeEnabled() {}
/**
 * @returns {boolean}
 */
function IsOldAutoEnabled() {}
/**
 * @returns {boolean}
 */
function IsNoFailEnabled() {}
/**
 * @param {number} digits
 * @returns {number}
 */
function GCMemUsage(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function GCMemUsageGB(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function GCMemUsageKB(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function GCMemAllocRate(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function GCMemAllocRateGB(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function GCMemAllocRateKB(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function UnityMemUsage(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function UnityMemUsageGB(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function UnityMemUsageKB(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function MarginScale(digits) {}
/**
 * @returns {number}
 */
function LeftTile() {}
/**
 * @returns {number}
 */
function CurTile() {}
/**
 * @returns {number}
 */
function TotalTile() {}
/**
 * @returns {number}
 */
function StartTile() {}
/**
 * @param {number} digits
 * @returns {number}
 */
function StartProgress(digits) {}
/**
 * @returns {boolean}
 */
function IsStarted() {}
/**
 * @returns {number}
 */
function Year() {}
/**
 * @returns {number}
 */
function Month() {}
/**
 * @returns {number}
 */
function Day() {}
/**
 * @returns {number}
 */
function Days() {}
/**
 * @returns {number}
 */
function Hour() {}
/**
 * @returns {number}
 */
function Hours() {}
/**
 * @returns {number}
 */
function Minute() {}
/**
 * @returns {number}
 */
function Minutes() {}
/**
 * @returns {number}
 */
function Second() {}
/**
 * @returns {number}
 */
function Seconds() {}
/**
 * @returns {number}
 */
function MilliSecond() {}
/**
 * @returns {number}
 */
function MilliSeconds() {}
/**
 * @param {number} digits
 * @returns {number}
 */
function Timing(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TimingAvg(digits) {}
/**
 * @param {string} expr
 * @returns {Object}
 */
function Expression(expr) {}
/**
 * @returns {number}
 */
function ProcessorCount() {}
/**
 * @param {number} digits
 * @returns {number}
 */
function MemoryGBytes(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function CpuUsage(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TotalCpuUsage(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function MemoryUsage(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TotalMemoryUsage(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function MemoryUsageGBytes(digits) {}
/**
 * @param {number} digits
 * @returns {number}
 */
function TotalMemoryUsageGBytes(digits) {}
