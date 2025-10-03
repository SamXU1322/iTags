// [Overlayer.Scripting JS Wrapper]
// Author: Square & Kkitut
// ProxyTypes: UnityEngine.SceneManagement.Scene&Scene*UnityEngine.SceneManagement.SceneManager&SceneManager*UnityEngine.Sprite&Sprite*UnityEngine.SpriteRenderer&SpriteRenderer*UnityEngine.UI.Image&Image*UnityEngine.Vector2&Vector2*UnityEngine.Vector2Int&Vector2Int*UnityEngine.Vector3&Vector3*UnityEngine.Vector3Int&Vector3Int*UnityEngine.Vector4&Vector4*UnityEngine.Rect&Rect*UnityEngine.Quaternion&Quaternion*UnityEngine.Transform&Transform*UnityEngine.RectTransform&RectTransform*UnityEngine.GUI&GUI*UnityEngine.GUILayout&GUILayout*UnityEngine.GUISkin&GUISkin*UnityEngine.GUIStyle&GUIStyle*UnityEngine.Texture&Texture*UnityEngine.Texture2D&Texture2D*UnityEngine.GameObject&GameObject*UnityEngine.Component&Component*UnityEngine.Shader&Shader*UnityEngine.Matrix4x4&Matrix4x4*UnityEngine.UI.Text&Text*UnityEngine.TextMesh&TextMesh*TMPro.TextMeshPro&TextMeshPro*TMPro.TextMeshProUGUI&TextMeshProUGUI*UnityEngine.Material&Material*UnityEngine.Canvas&Canvas
// Version: 1.0.0
class Scene {
  constructor() {
    /**@type {number}*/
    this.m_Handle = null;
  }
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} sceneHandle
   * @returns {number}
   */
  static GetBuildIndexInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {number}
   */
  static GetDirtyID(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {string}
   */
  static GetGUIDInternal(sceneHandle) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {number} sceneHandle
   * @returns {boolean}
   */
  static GetIsDirtyInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {boolean}
   */
  static GetIsLoadedInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {number}
   */
  static GetLoadingStateInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {string}
   */
  static GetNameInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {string}
   */
  static GetPathInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @returns {number}
   */
  static GetRootCountInternal(sceneHandle) {}
  /**
   * @returns {GameObject[]}
   */
  GetRootGameObjects() {}
  /**
   * @param {List} rootGameObjects
   * @returns {void}
   */
  GetRootGameObjects(rootGameObjects) {}
  /**
   * @param {number} sceneHandle
   * @param {Object} resultRootList
   * @returns {void}
   */
  static GetRootGameObjectsInternal(sceneHandle, resultRootList) {}
  /**
   * @param {number} sceneHandle
   * @returns {boolean}
   */
  static IsSubScene(sceneHandle) {}
  /**
   * @returns {boolean}
   */
  IsValid() {}
  /**
   * @param {number} sceneHandle
   * @returns {boolean}
   */
  static IsValidInternal(sceneHandle) {}
  /**
   * @param {number} sceneHandle
   * @param {boolean} value
   * @returns {void}
   */
  static SetIsSubScene(sceneHandle, value) {}
  /**
   * @param {number} sceneHandle
   * @param {string} name
   * @returns {void}
   */
  static SetNameInternal(sceneHandle, name) {}
  /**
   * @param {string} path
   * @param {string} guid
   * @returns {void}
   */
  SetPathAndGuid(path, guid) {}
  /**
   * @param {number} sceneHandle
   * @param {string} path
   * @param {string} guid
   * @returns {void}
   */
  static SetPathAndGUIDInternal(sceneHandle, path, guid) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get buildIndex() {}
  /**@type {number}*/
  get dirtyID() {}
  /**@type {string}*/
  get guid() {}
  /**@type {number}*/
  get handle() {}
  /**@type {boolean}*/
  get isDirty() {}
  /**@type {boolean}*/
  get isLoaded() {}
  /**@type {boolean}*/
  get isSubScene() {}
  /**
 * @param {boolean} value
 */
  set isSubScene(value) {}
  /**@type {number}*/
  get loadingState() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {string}*/
  get path() {}
  /**@type {number}*/
  get rootCount() {}
}
class SceneManager {
  constructor() {
  }
  /**@type {boolean}*/
  static s_AllowLoadScene;
  /**@type {UnityAction}*/
  static sceneLoaded;
  /**@type {UnityAction}*/
  static sceneUnloaded;
  /**@type {UnityAction}*/
  static activeSceneChanged;
  /**
   * @param {UnityAction} value
   * @returns {void}
   */
  static add_activeSceneChanged(value) {}
  /**
   * @param {UnityAction} value
   * @returns {void}
   */
  static add_sceneLoaded(value) {}
  /**
   * @param {UnityAction} value
   * @returns {void}
   */
  static add_sceneUnloaded(value) {}
  /**
   * @param {Scene} scene
   * @returns {boolean}
   */
  static CanSetAsActiveScene(scene) {}
  /**
   * @param {string} sceneName
   * @param {CreateSceneParameters} parameters
   * @returns {Scene}
   */
  static CreateScene(sceneName, parameters) {}
  /**
   * @param {string} sceneName
   * @returns {Scene}
   */
  static CreateScene(sceneName) {}
  /**
   * @returns {Scene}
   */
  static GetActiveScene() {}
  /**
   * @returns {Scene[]}
   */
  static GetAllScenes() {}
  /**
   * @param {number} index
   * @returns {Scene}
   */
  static GetSceneAt(index) {}
  /**
   * @param {number} buildIndex
   * @returns {Scene}
   */
  static GetSceneByBuildIndex(buildIndex) {}
  /**
   * @param {string} name
   * @returns {Scene}
   */
  static GetSceneByName(name) {}
  /**
   * @param {string} scenePath
   * @returns {Scene}
   */
  static GetSceneByPath(scenePath) {}
  /**
   * @param {Scene} previousActiveScene
   * @param {Scene} newActiveScene
   * @returns {void}
   */
  static Internal_ActiveSceneChanged(previousActiveScene, newActiveScene) {}
  /**
   * @param {Scene} scene
   * @param {number} mode
   * @returns {void}
   */
  static Internal_SceneLoaded(scene, mode) {}
  /**
   * @param {Scene} scene
   * @returns {void}
   */
  static Internal_SceneUnloaded(scene) {}
  /**
   * @param {boolean} async
   * @returns {AsyncOperation}
   */
  static LoadFirstScene_Internal(async) {}
  /**
   * @param {string} sceneName
   * @param {number} mode
   * @returns {void}
   */
  static LoadScene(sceneName, mode) {}
  /**
   * @param {string} sceneName
   * @returns {void}
   */
  static LoadScene(sceneName) {}
  /**
   * @param {string} sceneName
   * @param {LoadSceneParameters} parameters
   * @returns {Scene}
   */
  static LoadScene(sceneName, parameters) {}
  /**
   * @param {number} sceneBuildIndex
   * @param {number} mode
   * @returns {void}
   */
  static LoadScene(sceneBuildIndex, mode) {}
  /**
   * @param {number} sceneBuildIndex
   * @returns {void}
   */
  static LoadScene(sceneBuildIndex) {}
  /**
   * @param {number} sceneBuildIndex
   * @param {LoadSceneParameters} parameters
   * @returns {Scene}
   */
  static LoadScene(sceneBuildIndex, parameters) {}
  /**
   * @param {number} sceneBuildIndex
   * @param {number} mode
   * @returns {AsyncOperation}
   */
  static LoadSceneAsync(sceneBuildIndex, mode) {}
  /**
   * @param {number} sceneBuildIndex
   * @returns {AsyncOperation}
   */
  static LoadSceneAsync(sceneBuildIndex) {}
  /**
   * @param {number} sceneBuildIndex
   * @param {LoadSceneParameters} parameters
   * @returns {AsyncOperation}
   */
  static LoadSceneAsync(sceneBuildIndex, parameters) {}
  /**
   * @param {string} sceneName
   * @param {number} mode
   * @returns {AsyncOperation}
   */
  static LoadSceneAsync(sceneName, mode) {}
  /**
   * @param {string} sceneName
   * @returns {AsyncOperation}
   */
  static LoadSceneAsync(sceneName) {}
  /**
   * @param {string} sceneName
   * @param {LoadSceneParameters} parameters
   * @returns {AsyncOperation}
   */
  static LoadSceneAsync(sceneName, parameters) {}
  /**
   * @param {string} sceneName
   * @param {number} sceneBuildIndex
   * @param {LoadSceneParameters} parameters
   * @param {boolean} mustCompleteNextFrame
   * @returns {AsyncOperation}
   */
  static LoadSceneAsyncNameIndexInternal(sceneName, sceneBuildIndex, parameters, mustCompleteNextFrame) {}
  /**
   * @param {Scene} sourceScene
   * @param {Scene} destinationScene
   * @returns {void}
   */
  static MergeScenes(sourceScene, destinationScene) {}
  /**
   * @param {NativeArray} instanceIDs
   * @param {Scene} scene
   * @returns {void}
   */
  static MoveGameObjectsToScene(instanceIDs, scene) {}
  /**
   * @param {IntPtr} instanceIds
   * @param {number} instanceCount
   * @param {Scene} scene
   * @returns {void}
   */
  static MoveGameObjectsToSceneByInstanceId(instanceIds, instanceCount, scene) {}
  /**
   * @param {GameObject} go
   * @param {Scene} scene
   * @returns {void}
   */
  static MoveGameObjectToScene(go, scene) {}
  /**
   * @param {UnityAction} value
   * @returns {void}
   */
  static remove_activeSceneChanged(value) {}
  /**
   * @param {UnityAction} value
   * @returns {void}
   */
  static remove_sceneLoaded(value) {}
  /**
   * @param {UnityAction} value
   * @returns {void}
   */
  static remove_sceneUnloaded(value) {}
  /**
   * @param {Scene} scene
   * @returns {boolean}
   */
  static SetActiveScene(scene) {}
  /**
   * @param {Scene} scene
   * @returns {boolean}
   */
  static UnloadScene(scene) {}
  /**
   * @param {number} sceneBuildIndex
   * @returns {boolean}
   */
  static UnloadScene(sceneBuildIndex) {}
  /**
   * @param {string} sceneName
   * @returns {boolean}
   */
  static UnloadScene(sceneName) {}
  /**
   * @param {number} sceneBuildIndex
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsync(sceneBuildIndex) {}
  /**
   * @param {string} sceneName
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsync(sceneName) {}
  /**
   * @param {Scene} scene
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsync(scene) {}
  /**
   * @param {number} sceneBuildIndex
   * @param {number} options
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsync(sceneBuildIndex, options) {}
  /**
   * @param {string} sceneName
   * @param {number} options
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsync(sceneName, options) {}
  /**
   * @param {Scene} scene
   * @param {number} options
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsync(scene, options) {}
  /**
   * @param {Scene} scene
   * @param {number} options
   * @returns {AsyncOperation}
   */
  static UnloadSceneAsyncInternal(scene, options) {}
  /**
   * @param {Scene} scene
   * @param {number} options
   * @returns {boolean}
   */
  static UnloadSceneInternal(scene, options) {}
  /**@type {number}*/
  static get loadedSceneCount() {}
  /**@type {number}*/
  static get sceneCount() {}
  /**@type {number}*/
  static get sceneCountInBuildSettings() {}
}
class Sprite {
  constructor() {
  }
  /**
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsToUnits
   * @param {Texture2D} texture
   * @returns {Sprite}
   */
  static Create(rect, pivot, pixelsToUnits, texture) {}
  /**
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsToUnits
   * @returns {Sprite}
   */
  static Create(rect, pivot, pixelsToUnits) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @param {number} extrude
   * @param {number} meshType
   * @param {Vector4} border
   * @param {boolean} generateFallbackPhysicsShape
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @param {number} extrude
   * @param {number} meshType
   * @param {Vector4} border
   * @param {boolean} generateFallbackPhysicsShape
   * @param {SecondarySpriteTexture[]} secondaryTextures
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTextures) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @param {number} extrude
   * @param {number} meshType
   * @param {Vector4} border
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @param {number} extrude
   * @param {number} meshType
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot, pixelsPerUnit, extrude, meshType) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @param {number} extrude
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot, pixelsPerUnit, extrude) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot, pixelsPerUnit) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @returns {Sprite}
   */
  static Create(texture, rect, pivot) {}
  /**
   * @param {Texture2D} texture
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsPerUnit
   * @param {number} extrude
   * @param {number} meshType
   * @param {Vector4} border
   * @param {boolean} generateFallbackPhysicsShape
   * @param {SecondarySpriteTexture[]} secondaryTexture
   * @returns {Sprite}
   */
  static CreateSprite(texture, rect, pivot, pixelsPerUnit, extrude, meshType, border, generateFallbackPhysicsShape, secondaryTexture) {}
  /**
   * @param {Rect} rect
   * @param {Vector2} pivot
   * @param {number} pixelsToUnits
   * @param {Texture2D} texture
   * @returns {Sprite}
   */
  static CreateSpriteWithoutTextureScripting(rect, pivot, pixelsToUnits, texture) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {Vector4}
   */
  GetInnerUVs() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {Vector4}
   */
  GetOuterUVs() {}
  /**
   * @returns {number}
   */
  GetPacked() {}
  /**
   * @returns {number}
   */
  GetPackingMode() {}
  /**
   * @returns {number}
   */
  GetPackingRotation() {}
  /**
   * @returns {Vector4}
   */
  GetPadding() {}
  /**
   * @param {number} shapeIdx
   * @param {List} physicsShape
   * @returns {number}
   */
  GetPhysicsShape(shapeIdx, physicsShape) {}
  /**
   * @returns {number}
   */
  GetPhysicsShapeCount() {}
  /**
   * @param {Sprite} sprite
   * @param {number} shapeIdx
   * @param {List} physicsShape
   * @returns {void}
   */
  static GetPhysicsShapeImpl(sprite, shapeIdx, physicsShape) {}
  /**
   * @param {number} shapeIdx
   * @returns {number}
   */
  GetPhysicsShapePointCount(shapeIdx) {}
  /**
   * @param {number} index
   * @returns {Texture2D}
   */
  GetSecondaryTexture(index) {}
  /**
   * @returns {number}
   */
  GetSecondaryTextureCount() {}
  /**
   * @param {SecondarySpriteTexture[]} secondaryTexture
   * @returns {number}
   */
  GetSecondaryTextures(secondaryTexture) {}
  /**
   * @returns {Rect}
   */
  GetTextureRect() {}
  /**
   * @returns {Vector2}
   */
  GetTextureRectOffset() {}
  /**
   * @param {number} shapeIdx
   * @returns {number}
   */
  Internal_GetPhysicsShapePointCount(shapeIdx) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {Vector2[]} vertices
   * @param {UInt16[]} triangles
   * @returns {void}
   */
  OverrideGeometry(vertices, triangles) {}
  /**
   * @param {IList} physicsShapes
   * @returns {void}
   */
  OverridePhysicsShape(physicsShapes) {}
  /**
   * @param {Sprite} sprite
   * @param {Vector2[]} physicsShape
   * @param {number} idx
   * @returns {void}
   */
  static OverridePhysicsShape(sprite, physicsShape, idx) {}
  /**
   * @param {Sprite} sprite
   * @param {number} physicsShapeCount
   * @returns {void}
   */
  static OverridePhysicsShapeCount(sprite, physicsShapeCount) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {Texture2D}*/
  get associatedAlphaSplitTexture() {}
  /**@type {Vector4}*/
  get border() {}
  /**@type {Bounds}*/
  get bounds() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {boolean}*/
  get packed() {}
  /**@type {number}*/
  get packingMode() {}
  /**@type {number}*/
  get packingRotation() {}
  /**@type {Vector2}*/
  get pivot() {}
  /**@type {number}*/
  get pixelsPerUnit() {}
  /**@type {Rect}*/
  get rect() {}
  /**@type {number}*/
  get spriteAtlasTextureScale() {}
  /**@type {Texture2D}*/
  get texture() {}
  /**@type {Rect}*/
  get textureRect() {}
  /**@type {Vector2}*/
  get textureRectOffset() {}
  /**@type {UInt16[]}*/
  get triangles() {}
  /**@type {Vector2[]}*/
  get uv() {}
  /**@type {Vector2[]}*/
  get vertices() {}
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
class Image {
  constructor() {
    /**@type {Sprite}*/
    this.m_Sprite = null;
    /**@type {Sprite}*/
    this.m_OverrideSprite = null;
    /**@type {number}*/
    this.m_Type = null;
    /**@type {boolean}*/
    this.m_PreserveAspect = null;
    /**@type {boolean}*/
    this.m_FillCenter = null;
    /**@type {number}*/
    this.m_FillMethod = null;
    /**@type {number}*/
    this.m_FillAmount = null;
    /**@type {boolean}*/
    this.m_FillClockwise = null;
    /**@type {number}*/
    this.m_FillOrigin = null;
    /**@type {number}*/
    this.m_AlphaHitTestMinimumThreshold = null;
    /**@type {boolean}*/
    this.m_Tracked = null;
    /**@type {boolean}*/
    this.m_UseSpriteMesh = null;
    /**@type {number}*/
    this.m_PixelsPerUnitMultiplier = null;
    /**@type {number}*/
    this.m_CachedReferencePixelsPerUnit = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculateStencil = null;
    /**@type {Material}*/
    this.m_MaskMaterial = null;
    /**@type {boolean}*/
    this.m_IncludeForMasking = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculate = null;
    /**@type {number}*/
    this.m_StencilValue = null;
    /**@type {Material}*/
    this.m_Material = null;
    /**@type {boolean}*/
    this.m_SkipLayoutUpdate = null;
    /**@type {boolean}*/
    this.m_SkipMaterialUpdate = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyLayoutCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyVertsCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyMaterialCallback = null;
    /**@type {Mesh}*/
    this.m_CachedMesh = null;
    /**@type {Vector2[]}*/
    this.m_CachedUvs = null;
  }
  /**@type {Material}*/
  static s_ETC1DefaultUI;
  /**@type {Vector2[]}*/
  static s_VertScratch;
  /**@type {Vector2[]}*/
  static s_UVScratch;
  /**@type {Vector3[]}*/
  static s_Xy;
  /**@type {Vector3[]}*/
  static s_Uv;
  /**@type {List}*/
  static m_TrackedTexturelessImages;
  /**@type {boolean}*/
  static s_Initialized;
  /**
   * @param {VertexHelper} vertexHelper
   * @param {Vector3[]} quadPositions
   * @param {Color32} color
   * @param {Vector3[]} quadUVs
   * @returns {void}
   */
  static AddQuad(vertexHelper, quadPositions, color, quadUVs) {}
  /**
   * @param {VertexHelper} vertexHelper
   * @param {Vector2} posMin
   * @param {Vector2} posMax
   * @param {Color32} color
   * @param {Vector2} uvMin
   * @param {Vector2} uvMax
   * @returns {void}
   */
  static AddQuad(vertexHelper, posMin, posMax, color, uvMin, uvMax) {}
  /**
   * @returns {void}
   */
  Awake() {}
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
  CalculateLayoutInputHorizontal() {}
  /**
   * @returns {void}
   */
  CalculateLayoutInputVertical() {}
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
   * @param {number} alpha
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @returns {void}
   */
  CrossFadeAlpha(alpha, duration, ignoreTimeScale) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @param {boolean} useRGB
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha, useRGB) {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  Cull(clipRect, validRect) {}
  /**
   * @returns {void}
   */
  DisableSpriteOptimizations() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {VertexHelper} toFill
   * @param {boolean} preserveAspect
   * @returns {void}
   */
  GenerateFilledSprite(toFill, preserveAspect) {}
  /**
   * @param {VertexHelper} vh
   * @param {boolean} lPreserveAspect
   * @returns {void}
   */
  GenerateSimpleSprite(vh, lPreserveAspect) {}
  /**
   * @param {VertexHelper} toFill
   * @returns {void}
   */
  GenerateSlicedSprite(toFill) {}
  /**
   * @param {VertexHelper} vh
   * @param {boolean} lPreserveAspect
   * @returns {void}
   */
  GenerateSprite(vh, lPreserveAspect) {}
  /**
   * @param {VertexHelper} toFill
   * @returns {void}
   */
  GenerateTiledSprite(toFill) {}
  /**
   * @param {Vector4} border
   * @param {Rect} adjustedRect
   * @returns {Vector4}
   */
  GetAdjustedBorders(border, adjustedRect) {}
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
   * @param {boolean} shouldPreserveAspect
   * @returns {Vector4}
   */
  GetDrawingDimensions(shouldPreserveAspect) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {Material} baseMaterial
   * @returns {Material}
   */
  GetModifiedMaterial(baseMaterial) {}
  /**
   * @returns {Rect}
   */
  GetPixelAdjustedRect() {}
  /**
   * @returns {string}
   */
  GetScriptClassName() {}
  /**
   * @returns {void}
   */
  GraphicUpdateComplete() {}
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
  IsActive() {}
  /**
   * @returns {boolean}
   */
  IsDestroyed() {}
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
   * @param {Vector2} screenPoint
   * @param {Camera} eventCamera
   * @returns {boolean}
   */
  IsRaycastLocationValid(screenPoint, eventCamera) {}
  /**
   * @returns {void}
   */
  LayoutComplete() {}
  /**
   * @param {Vector2} local
   * @param {Rect} rect
   * @returns {Vector2}
   */
  MapCoordinate(local, rect) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  OnAfterDeserialize() {}
  /**
   * @returns {void}
   */
  OnBeforeSerialize() {}
  /**
   * @returns {void}
   */
  OnBeforeTransformParentChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasGroupChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasHierarchyChanged() {}
  /**
   * @returns {void}
   */
  OnCullingChanged() {}
  /**
   * @returns {void}
   */
  OnDestroy() {}
  /**
   * @returns {void}
   */
  OnDidApplyAnimationProperties() {}
  /**
   * @returns {void}
   */
  OnDisable() {}
  /**
   * @returns {void}
   */
  OnEnable() {}
  /**
   * @param {List} vbo
   * @returns {void}
   */
  OnFillVBO(vbo) {}
  /**
   * @param {VertexHelper} toFill
   * @returns {void}
   */
  OnPopulateMesh(toFill) {}
  /**
   * @param {Mesh} m
   * @returns {void}
   */
  OnPopulateMesh(m) {}
  /**
   * @returns {void}
   */
  OnRectTransformDimensionsChange() {}
  /**
   * @returns {void}
   */
  OnTransformParentChanged() {}
  /**
   * @returns {void}
   */
  ParentMaskStateChanged() {}
  /**
   * @param {Vector2} point
   * @returns {Vector2}
   */
  PixelAdjustPoint(point) {}
  /**
   * @param {Vector3[]} xy
   * @param {Vector3[]} uv
   * @param {number} fill
   * @param {boolean} invert
   * @param {number} corner
   * @returns {boolean}
   */
  static RadialCut(xy, uv, fill, invert, corner) {}
  /**
   * @param {Vector3[]} xy
   * @param {number} cos
   * @param {number} sin
   * @param {boolean} invert
   * @param {number} corner
   * @returns {void}
   */
  static RadialCut(xy, cos, sin, invert, corner) {}
  /**
   * @param {Vector2} sp
   * @param {Camera} eventCamera
   * @returns {boolean}
   */
  Raycast(sp, eventCamera) {}
  /**
   * @param {number} update
   * @returns {void}
   */
  Rebuild(update) {}
  /**
   * @param {SpriteAtlas} spriteAtlas
   * @returns {void}
   */
  static RebuildImage(spriteAtlas) {}
  /**
   * @returns {void}
   */
  RecalculateClipping() {}
  /**
   * @returns {void}
   */
  RecalculateMasking() {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyVerticesCallback(action) {}
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
  SetAllDirty() {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  SetClipRect(clipRect, validRect) {}
  /**
   * @param {Vector2} clipSoftness
   * @returns {void}
   */
  SetClipSoftness(clipSoftness) {}
  /**
   * @returns {void}
   */
  SetLayoutDirty() {}
  /**
   * @returns {void}
   */
  SetMaterialDirty() {}
  /**
   * @returns {void}
   */
  SetNativeSize() {}
  /**
   * @returns {void}
   */
  SetRaycastDirty() {}
  /**
   * @returns {void}
   */
  SetVerticesDirty() {}
  /**
   * @returns {void}
   */
  Start() {}
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
   * @param {Image} g
   * @returns {void}
   */
  static TrackImage(g) {}
  /**
   * @returns {void}
   */
  TrackSprite() {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyVerticesCallback(action) {}
  /**
   * @param {Image} g
   * @returns {void}
   */
  static UnTrackImage(g) {}
  /**
   * @returns {void}
   */
  UpdateGeometry() {}
  /**
   * @returns {void}
   */
  UpdateMaterial() {}
  /**@type {Sprite}*/
  get activeSprite() {}
  /**@type {number}*/
  get alphaHitTestMinimumThreshold() {}
  /**
 * @param {number} value
 */
  set alphaHitTestMinimumThreshold(value) {}
  /**@type {Canvas}*/
  get canvas() {}
  /**@type {CanvasRenderer}*/
  get canvasRenderer() {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {Material}*/
  static get defaultETC1GraphicMaterial() {}
  /**@type {Material}*/
  get defaultMaterial() {}
  /**@type {number}*/
  get depth() {}
  /**@type {CancellationToken}*/
  get destroyCancellationToken() {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {number}*/
  get eventAlphaThreshold() {}
  /**
 * @param {number} value
 */
  set eventAlphaThreshold(value) {}
  /**@type {number}*/
  get fillAmount() {}
  /**
 * @param {number} value
 */
  set fillAmount(value) {}
  /**@type {boolean}*/
  get fillCenter() {}
  /**
 * @param {boolean} value
 */
  set fillCenter(value) {}
  /**@type {boolean}*/
  get fillClockwise() {}
  /**
 * @param {boolean} value
 */
  set fillClockwise(value) {}
  /**@type {number}*/
  get fillMethod() {}
  /**
 * @param {number} value
 */
  set fillMethod(value) {}
  /**@type {number}*/
  get fillOrigin() {}
  /**
 * @param {number} value
 */
  set fillOrigin(value) {}
  /**@type {number}*/
  get flexibleHeight() {}
  /**@type {number}*/
  get flexibleWidth() {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {boolean}*/
  get hasBorder() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {boolean}*/
  get isMaskingGraphic() {}
  /**
 * @param {boolean} value
 */
  set isMaskingGraphic(value) {}
  /**@type {number}*/
  get layoutPriority() {}
  /**@type {Texture}*/
  get mainTexture() {}
  /**@type {boolean}*/
  get maskable() {}
  /**
 * @param {boolean} value
 */
  set maskable(value) {}
  /**@type {Material}*/
  get material() {}
  /**
 * @param {Material} value
 */
  set material(value) {}
  /**@type {Material}*/
  get materialForRendering() {}
  /**@type {number}*/
  get minHeight() {}
  /**@type {number}*/
  get minWidth() {}
  /**@type {number}*/
  get multipliedPixelsPerUnit() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {MaskableGraphic.CullStateChangedEvent}*/
  get onCullStateChanged() {}
  /**
 * @param {MaskableGraphic.CullStateChangedEvent} value
 */
  set onCullStateChanged(value) {}
  /**@type {Sprite}*/
  get overrideSprite() {}
  /**
 * @param {Sprite} value
 */
  set overrideSprite(value) {}
  /**@type {number}*/
  get pixelsPerUnit() {}
  /**@type {number}*/
  get pixelsPerUnitMultiplier() {}
  /**
 * @param {number} value
 */
  set pixelsPerUnitMultiplier(value) {}
  /**@type {number}*/
  get preferredHeight() {}
  /**@type {number}*/
  get preferredWidth() {}
  /**@type {boolean}*/
  get preserveAspect() {}
  /**
 * @param {boolean} value
 */
  set preserveAspect(value) {}
  /**@type {Vector4}*/
  get raycastPadding() {}
  /**
 * @param {Vector4} value
 */
  set raycastPadding(value) {}
  /**@type {boolean}*/
  get raycastTarget() {}
  /**
 * @param {boolean} value
 */
  set raycastTarget(value) {}
  /**@type {RectTransform}*/
  get rectTransform() {}
  /**@type {Sprite}*/
  get sprite() {}
  /**
 * @param {Sprite} value
 */
  set sprite(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {number}*/
  get type() {}
  /**
 * @param {number} value
 */
  set type(value) {}
  /**@type {boolean}*/
  get useGUILayout() {}
  /**
 * @param {boolean} value
 */
  set useGUILayout(value) {}
  /**@type {boolean}*/
  get useLegacyMeshGeneration() {}
  /**
 * @param {boolean} value
 */
  set useLegacyMeshGeneration(value) {}
  /**@type {boolean}*/
  get useSpriteMesh() {}
  /**
 * @param {boolean} value
 */
  set useSpriteMesh(value) {}
}
class Vector2 {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    /**@type {number}*/
    this.x = null;
    /**@type {number}*/
    this.y = null;
  }
  /**@type {Vector2}*/
  static zeroVector;
  /**@type {Vector2}*/
  static oneVector;
  /**@type {Vector2}*/
  static upVector;
  /**@type {Vector2}*/
  static downVector;
  /**@type {Vector2}*/
  static leftVector;
  /**@type {Vector2}*/
  static rightVector;
  /**@type {Vector2}*/
  static positiveInfinityVector;
  /**@type {Vector2}*/
  static negativeInfinityVector;
  /**@type {number}*/
  static kEpsilon;
  /**@type {number}*/
  static kEpsilonNormalSqrt;
  /**
   * @param {Vector2} from
   * @param {Vector2} to
   * @returns {number}
   */
  static Angle(from, to) {}
  /**
   * @param {Vector2} vector
   * @param {number} maxLength
   * @returns {Vector2}
   */
  static ClampMagnitude(vector, maxLength) {}
  /**
   * @param {Vector2} a
   * @param {Vector2} b
   * @returns {number}
   */
  static Distance(a, b) {}
  /**
   * @param {Vector2} lhs
   * @param {Vector2} rhs
   * @returns {number}
   */
  static Dot(lhs, rhs) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector2} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Vector2} a
   * @param {Vector2} b
   * @param {number} t
   * @returns {Vector2}
   */
  static Lerp(a, b, t) {}
  /**
   * @param {Vector2} a
   * @param {Vector2} b
   * @param {number} t
   * @returns {Vector2}
   */
  static LerpUnclamped(a, b, t) {}
  /**
   * @param {Vector2} lhs
   * @param {Vector2} rhs
   * @returns {Vector2}
   */
  static Max(lhs, rhs) {}
  /**
   * @param {Vector2} lhs
   * @param {Vector2} rhs
   * @returns {Vector2}
   */
  static Min(lhs, rhs) {}
  /**
   * @param {Vector2} current
   * @param {Vector2} target
   * @param {number} maxDistanceDelta
   * @returns {Vector2}
   */
  static MoveTowards(current, target, maxDistanceDelta) {}
  /**
   * @returns {void}
   */
  Normalize() {}
  /**
   * @param {Vector2} inDirection
   * @returns {Vector2}
   */
  static Perpendicular(inDirection) {}
  /**
   * @param {Vector2} inDirection
   * @param {Vector2} inNormal
   * @returns {Vector2}
   */
  static Reflect(inDirection, inNormal) {}
  /**
   * @param {Vector2} a
   * @param {Vector2} b
   * @returns {Vector2}
   */
  static Scale(a, b) {}
  /**
   * @param {Vector2} scale
   * @returns {void}
   */
  Scale(scale) {}
  /**
   * @param {number} newX
   * @param {number} newY
   * @returns {void}
   */
  Set(newX, newY) {}
  /**
   * @param {Vector2} from
   * @param {Vector2} to
   * @returns {number}
   */
  static SignedAngle(from, to) {}
  /**
   * @param {Vector2} a
   * @returns {number}
   */
  static SqrMagnitude(a) {}
  /**
   * @returns {number}
   */
  SqrMagnitude() {}
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
  /**@type {Vector2}*/
  static get down() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Vector2}*/
  static get left() {}
  /**@type {number}*/
  get magnitude() {}
  /**@type {Vector2}*/
  static get negativeInfinity() {}
  /**@type {Vector2}*/
  get normalized() {}
  /**@type {Vector2}*/
  static get one() {}
  /**@type {Vector2}*/
  static get positiveInfinity() {}
  /**@type {Vector2}*/
  static get right() {}
  /**@type {number}*/
  get sqrMagnitude() {}
  /**@type {Vector2}*/
  static get up() {}
  /**@type {Vector2}*/
  static get zero() {}
}
class Vector2Int {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    /**@type {number}*/
    this.m_X = null;
    /**@type {number}*/
    this.m_Y = null;
  }
  /**@type {Vector2Int}*/
  static s_Zero;
  /**@type {Vector2Int}*/
  static s_One;
  /**@type {Vector2Int}*/
  static s_Up;
  /**@type {Vector2Int}*/
  static s_Down;
  /**@type {Vector2Int}*/
  static s_Left;
  /**@type {Vector2Int}*/
  static s_Right;
  /**
   * @param {Vector2} v
   * @returns {Vector2Int}
   */
  static CeilToInt(v) {}
  /**
   * @param {Vector2Int} min
   * @param {Vector2Int} max
   * @returns {void}
   */
  Clamp(min, max) {}
  /**
   * @param {Vector2Int} a
   * @param {Vector2Int} b
   * @returns {number}
   */
  static Distance(a, b) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector2Int} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector2} v
   * @returns {Vector2Int}
   */
  static FloorToInt(v) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Vector2Int} lhs
   * @param {Vector2Int} rhs
   * @returns {Vector2Int}
   */
  static Max(lhs, rhs) {}
  /**
   * @param {Vector2Int} lhs
   * @param {Vector2Int} rhs
   * @returns {Vector2Int}
   */
  static Min(lhs, rhs) {}
  /**
   * @param {Vector2} v
   * @returns {Vector2Int}
   */
  static RoundToInt(v) {}
  /**
   * @param {Vector2Int} a
   * @param {Vector2Int} b
   * @returns {Vector2Int}
   */
  static Scale(a, b) {}
  /**
   * @param {Vector2Int} scale
   * @returns {void}
   */
  Scale(scale) {}
  /**
   * @param {number} x
   * @param {number} y
   * @returns {void}
   */
  Set(x, y) {}
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
  /**@type {Vector2Int}*/
  static get down() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Vector2Int}*/
  static get left() {}
  /**@type {number}*/
  get magnitude() {}
  /**@type {Vector2Int}*/
  static get one() {}
  /**@type {Vector2Int}*/
  static get right() {}
  /**@type {number}*/
  get sqrMagnitude() {}
  /**@type {Vector2Int}*/
  static get up() {}
  /**@type {number}*/
  get x() {}
  /**
 * @param {number} value
 */
  set x(value) {}
  /**@type {number}*/
  get y() {}
  /**
 * @param {number} value
 */
  set y(value) {}
  /**@type {Vector2Int}*/
  static get zero() {}
}
class Vector3 {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  constructor(x, y, z) {
    /**@type {number}*/
    this.x = null;
    /**@type {number}*/
    this.y = null;
    /**@type {number}*/
    this.z = null;
  }
  /**@type {number}*/
  static kEpsilon;
  /**@type {number}*/
  static kEpsilonNormalSqrt;
  /**@type {Vector3}*/
  static zeroVector;
  /**@type {Vector3}*/
  static oneVector;
  /**@type {Vector3}*/
  static upVector;
  /**@type {Vector3}*/
  static downVector;
  /**@type {Vector3}*/
  static leftVector;
  /**@type {Vector3}*/
  static rightVector;
  /**@type {Vector3}*/
  static forwardVector;
  /**@type {Vector3}*/
  static backVector;
  /**@type {Vector3}*/
  static positiveInfinityVector;
  /**@type {Vector3}*/
  static negativeInfinityVector;
  /**
   * @param {Vector3} from
   * @param {Vector3} to
   * @returns {number}
   */
  static Angle(from, to) {}
  /**
   * @param {Vector3} from
   * @param {Vector3} to
   * @returns {number}
   */
  static AngleBetween(from, to) {}
  /**
   * @param {Vector3} vector
   * @param {number} maxLength
   * @returns {Vector3}
   */
  static ClampMagnitude(vector, maxLength) {}
  /**
   * @param {Vector3} lhs
   * @param {Vector3} rhs
   * @returns {Vector3}
   */
  static Cross(lhs, rhs) {}
  /**
   * @param {Vector3} a
   * @param {Vector3} b
   * @returns {number}
   */
  static Distance(a, b) {}
  /**
   * @param {Vector3} lhs
   * @param {Vector3} rhs
   * @returns {number}
   */
  static Dot(lhs, rhs) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector3} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector3} excludeThis
   * @param {Vector3} fromThat
   * @returns {Vector3}
   */
  static Exclude(excludeThis, fromThat) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Vector3} a
   * @param {Vector3} b
   * @param {number} t
   * @returns {Vector3}
   */
  static Lerp(a, b, t) {}
  /**
   * @param {Vector3} a
   * @param {Vector3} b
   * @param {number} t
   * @returns {Vector3}
   */
  static LerpUnclamped(a, b, t) {}
  /**
   * @param {Vector3} vector
   * @returns {number}
   */
  static Magnitude(vector) {}
  /**
   * @param {Vector3} lhs
   * @param {Vector3} rhs
   * @returns {Vector3}
   */
  static Max(lhs, rhs) {}
  /**
   * @param {Vector3} lhs
   * @param {Vector3} rhs
   * @returns {Vector3}
   */
  static Min(lhs, rhs) {}
  /**
   * @param {Vector3} current
   * @param {Vector3} target
   * @param {number} maxDistanceDelta
   * @returns {Vector3}
   */
  static MoveTowards(current, target, maxDistanceDelta) {}
  /**
   * @param {Vector3} value
   * @returns {Vector3}
   */
  static Normalize(value) {}
  /**
   * @returns {void}
   */
  Normalize() {}
  /**
   * @param {Vector3} vector
   * @param {Vector3} onNormal
   * @returns {Vector3}
   */
  static Project(vector, onNormal) {}
  /**
   * @param {Vector3} vector
   * @param {Vector3} planeNormal
   * @returns {Vector3}
   */
  static ProjectOnPlane(vector, planeNormal) {}
  /**
   * @param {Vector3} inDirection
   * @param {Vector3} inNormal
   * @returns {Vector3}
   */
  static Reflect(inDirection, inNormal) {}
  /**
   * @param {Vector3} current
   * @param {Vector3} target
   * @param {number} maxRadiansDelta
   * @param {number} maxMagnitudeDelta
   * @returns {Vector3}
   */
  static RotateTowards(current, target, maxRadiansDelta, maxMagnitudeDelta) {}
  /**
   * @param {Vector3} a
   * @param {Vector3} b
   * @returns {Vector3}
   */
  static Scale(a, b) {}
  /**
   * @param {Vector3} scale
   * @returns {void}
   */
  Scale(scale) {}
  /**
   * @param {number} newX
   * @param {number} newY
   * @param {number} newZ
   * @returns {void}
   */
  Set(newX, newY, newZ) {}
  /**
   * @param {Vector3} from
   * @param {Vector3} to
   * @param {Vector3} axis
   * @returns {number}
   */
  static SignedAngle(from, to, axis) {}
  /**
   * @param {Vector3} a
   * @param {Vector3} b
   * @param {number} t
   * @returns {Vector3}
   */
  static Slerp(a, b, t) {}
  /**
   * @param {Vector3} a
   * @param {Vector3} b
   * @param {number} t
   * @returns {Vector3}
   */
  static SlerpUnclamped(a, b, t) {}
  /**
   * @param {Vector3} vector
   * @returns {number}
   */
  static SqrMagnitude(vector) {}
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
  /**@type {Vector3}*/
  static get back() {}
  /**@type {Vector3}*/
  static get down() {}
  /**@type {Vector3}*/
  static get forward() {}
  /**@type {Vector3}*/
  static get fwd() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Vector3}*/
  static get left() {}
  /**@type {number}*/
  get magnitude() {}
  /**@type {Vector3}*/
  static get negativeInfinity() {}
  /**@type {Vector3}*/
  get normalized() {}
  /**@type {Vector3}*/
  static get one() {}
  /**@type {Vector3}*/
  static get positiveInfinity() {}
  /**@type {Vector3}*/
  static get right() {}
  /**@type {number}*/
  get sqrMagnitude() {}
  /**@type {Vector3}*/
  static get up() {}
  /**@type {Vector3}*/
  static get zero() {}
}
class Vector3Int {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    /**@type {number}*/
    this.m_X = null;
    /**@type {number}*/
    this.m_Y = null;
    /**@type {number}*/
    this.m_Z = null;
  }
  /**@type {Vector3Int}*/
  static s_Zero;
  /**@type {Vector3Int}*/
  static s_One;
  /**@type {Vector3Int}*/
  static s_Up;
  /**@type {Vector3Int}*/
  static s_Down;
  /**@type {Vector3Int}*/
  static s_Left;
  /**@type {Vector3Int}*/
  static s_Right;
  /**@type {Vector3Int}*/
  static s_Forward;
  /**@type {Vector3Int}*/
  static s_Back;
  /**
   * @param {Vector3} v
   * @returns {Vector3Int}
   */
  static CeilToInt(v) {}
  /**
   * @param {Vector3Int} min
   * @param {Vector3Int} max
   * @returns {void}
   */
  Clamp(min, max) {}
  /**
   * @param {Vector3Int} a
   * @param {Vector3Int} b
   * @returns {number}
   */
  static Distance(a, b) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector3Int} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector3} v
   * @returns {Vector3Int}
   */
  static FloorToInt(v) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Vector3Int} lhs
   * @param {Vector3Int} rhs
   * @returns {Vector3Int}
   */
  static Max(lhs, rhs) {}
  /**
   * @param {Vector3Int} lhs
   * @param {Vector3Int} rhs
   * @returns {Vector3Int}
   */
  static Min(lhs, rhs) {}
  /**
   * @param {Vector3} v
   * @returns {Vector3Int}
   */
  static RoundToInt(v) {}
  /**
   * @param {Vector3Int} a
   * @param {Vector3Int} b
   * @returns {Vector3Int}
   */
  static Scale(a, b) {}
  /**
   * @param {Vector3Int} scale
   * @returns {void}
   */
  Scale(scale) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {void}
   */
  Set(x, y, z) {}
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
  /**@type {Vector3Int}*/
  static get back() {}
  /**@type {Vector3Int}*/
  static get down() {}
  /**@type {Vector3Int}*/
  static get forward() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Vector3Int}*/
  static get left() {}
  /**@type {number}*/
  get magnitude() {}
  /**@type {Vector3Int}*/
  static get one() {}
  /**@type {Vector3Int}*/
  static get right() {}
  /**@type {number}*/
  get sqrMagnitude() {}
  /**@type {Vector3Int}*/
  static get up() {}
  /**@type {number}*/
  get x() {}
  /**
 * @param {number} value
 */
  set x(value) {}
  /**@type {number}*/
  get y() {}
  /**
 * @param {number} value
 */
  set y(value) {}
  /**@type {number}*/
  get z() {}
  /**
 * @param {number} value
 */
  set z(value) {}
  /**@type {Vector3Int}*/
  static get zero() {}
}
class Vector4 {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} w
   */
  constructor(x, y, z, w) {
    /**@type {number}*/
    this.x = null;
    /**@type {number}*/
    this.y = null;
    /**@type {number}*/
    this.z = null;
    /**@type {number}*/
    this.w = null;
  }
  /**@type {number}*/
  static kEpsilon;
  /**@type {Vector4}*/
  static zeroVector;
  /**@type {Vector4}*/
  static oneVector;
  /**@type {Vector4}*/
  static positiveInfinityVector;
  /**@type {Vector4}*/
  static negativeInfinityVector;
  /**
   * @param {Vector4} a
   * @param {Vector4} b
   * @returns {number}
   */
  static Distance(a, b) {}
  /**
   * @param {Vector4} a
   * @param {Vector4} b
   * @returns {number}
   */
  static Dot(a, b) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Vector4} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Vector4} a
   * @param {Vector4} b
   * @param {number} t
   * @returns {Vector4}
   */
  static Lerp(a, b, t) {}
  /**
   * @param {Vector4} a
   * @param {Vector4} b
   * @param {number} t
   * @returns {Vector4}
   */
  static LerpUnclamped(a, b, t) {}
  /**
   * @param {Vector4} a
   * @returns {number}
   */
  static Magnitude(a) {}
  /**
   * @param {Vector4} lhs
   * @param {Vector4} rhs
   * @returns {Vector4}
   */
  static Max(lhs, rhs) {}
  /**
   * @param {Vector4} lhs
   * @param {Vector4} rhs
   * @returns {Vector4}
   */
  static Min(lhs, rhs) {}
  /**
   * @param {Vector4} current
   * @param {Vector4} target
   * @param {number} maxDistanceDelta
   * @returns {Vector4}
   */
  static MoveTowards(current, target, maxDistanceDelta) {}
  /**
   * @param {Vector4} a
   * @returns {Vector4}
   */
  static Normalize(a) {}
  /**
   * @returns {void}
   */
  Normalize() {}
  /**
   * @param {Vector4} a
   * @param {Vector4} b
   * @returns {Vector4}
   */
  static Project(a, b) {}
  /**
   * @param {Vector4} a
   * @param {Vector4} b
   * @returns {Vector4}
   */
  static Scale(a, b) {}
  /**
   * @param {Vector4} scale
   * @returns {void}
   */
  Scale(scale) {}
  /**
   * @param {number} newX
   * @param {number} newY
   * @param {number} newZ
   * @param {number} newW
   * @returns {void}
   */
  Set(newX, newY, newZ, newW) {}
  /**
   * @param {Vector4} a
   * @returns {number}
   */
  static SqrMagnitude(a) {}
  /**
   * @returns {number}
   */
  SqrMagnitude() {}
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
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {number}*/
  get magnitude() {}
  /**@type {Vector4}*/
  static get negativeInfinity() {}
  /**@type {Vector4}*/
  get normalized() {}
  /**@type {Vector4}*/
  static get one() {}
  /**@type {Vector4}*/
  static get positiveInfinity() {}
  /**@type {number}*/
  get sqrMagnitude() {}
  /**@type {Vector4}*/
  static get zero() {}
}
class Rect {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   */
  constructor(x, y, width, height) {
    /**@type {number}*/
    this.m_XMin = null;
    /**@type {number}*/
    this.m_YMin = null;
    /**@type {number}*/
    this.m_Width = null;
    /**@type {number}*/
    this.m_Height = null;
  }
  /**
   * @param {Vector2} point
   * @returns {boolean}
   */
  Contains(point) {}
  /**
   * @param {Vector3} point
   * @returns {boolean}
   */
  Contains(point) {}
  /**
   * @param {Vector3} point
   * @param {boolean} allowInverse
   * @returns {boolean}
   */
  Contains(point, allowInverse) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Rect} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {number} xmin
   * @param {number} ymin
   * @param {number} xmax
   * @param {number} ymax
   * @returns {Rect}
   */
  static MinMaxRect(xmin, ymin, xmax, ymax) {}
  /**
   * @param {Rect} rectangle
   * @param {Vector2} normalizedRectCoordinates
   * @returns {Vector2}
   */
  static NormalizedToPoint(rectangle, normalizedRectCoordinates) {}
  /**
   * @param {Rect} rect
   * @returns {Rect}
   */
  static OrderMinMax(rect) {}
  /**
   * @param {Rect} other
   * @returns {boolean}
   */
  Overlaps(other) {}
  /**
   * @param {Rect} other
   * @param {boolean} allowInverse
   * @returns {boolean}
   */
  Overlaps(other, allowInverse) {}
  /**
   * @param {Rect} rectangle
   * @param {Vector2} point
   * @returns {Vector2}
   */
  static PointToNormalized(rectangle, point) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @returns {void}
   */
  Set(x, y, width, height) {}
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
  /**@type {number}*/
  get bottom() {}
  /**@type {Vector2}*/
  get center() {}
  /**
 * @param {Vector2} value
 */
  set center(value) {}
  /**@type {number}*/
  get height() {}
  /**
 * @param {number} value
 */
  set height(value) {}
  /**@type {number}*/
  get left() {}
  /**@type {Vector2}*/
  get max() {}
  /**
 * @param {Vector2} value
 */
  set max(value) {}
  /**@type {Vector2}*/
  get min() {}
  /**
 * @param {Vector2} value
 */
  set min(value) {}
  /**@type {Vector2}*/
  get position() {}
  /**
 * @param {Vector2} value
 */
  set position(value) {}
  /**@type {number}*/
  get right() {}
  /**@type {Vector2}*/
  get size() {}
  /**
 * @param {Vector2} value
 */
  set size(value) {}
  /**@type {number}*/
  get top() {}
  /**@type {number}*/
  get width() {}
  /**
 * @param {number} value
 */
  set width(value) {}
  /**@type {number}*/
  get x() {}
  /**
 * @param {number} value
 */
  set x(value) {}
  /**@type {number}*/
  get xMax() {}
  /**
 * @param {number} value
 */
  set xMax(value) {}
  /**@type {number}*/
  get xMin() {}
  /**
 * @param {number} value
 */
  set xMin(value) {}
  /**@type {number}*/
  get y() {}
  /**
 * @param {number} value
 */
  set y(value) {}
  /**@type {number}*/
  get yMax() {}
  /**
 * @param {number} value
 */
  set yMax(value) {}
  /**@type {number}*/
  get yMin() {}
  /**
 * @param {number} value
 */
  set yMin(value) {}
  /**@type {Rect}*/
  static get zero() {}
}
class Quaternion {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} w
   */
  constructor(x, y, z, w) {
    /**@type {number}*/
    this.x = null;
    /**@type {number}*/
    this.y = null;
    /**@type {number}*/
    this.z = null;
    /**@type {number}*/
    this.w = null;
  }
  /**@type {Quaternion}*/
  static identityQuaternion;
  /**@type {number}*/
  static kEpsilon;
  /**
   * @param {Quaternion} a
   * @param {Quaternion} b
   * @returns {number}
   */
  static Angle(a, b) {}
  /**
   * @param {number} angle
   * @param {Vector3} axis
   * @returns {Quaternion}
   */
  static AngleAxis(angle, axis) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {Quaternion}
   */
  static AxisAngle(axis, angle) {}
  /**
   * @param {Quaternion} a
   * @param {Quaternion} b
   * @returns {number}
   */
  static Dot(a, b) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Quaternion} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Quaternion}
   */
  static Euler(x, y, z) {}
  /**
   * @param {Vector3} euler
   * @returns {Quaternion}
   */
  static Euler(euler) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Quaternion}
   */
  static EulerAngles(x, y, z) {}
  /**
   * @param {Vector3} euler
   * @returns {Quaternion}
   */
  static EulerAngles(euler) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Quaternion}
   */
  static EulerRotation(x, y, z) {}
  /**
   * @param {Vector3} euler
   * @returns {Quaternion}
   */
  static EulerRotation(euler) {}
  /**
   * @param {Vector3} fromDirection
   * @param {Vector3} toDirection
   * @returns {Quaternion}
   */
  static FromToRotation(fromDirection, toDirection) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Vector3} euler
   * @returns {Quaternion}
   */
  static Internal_FromEulerRad(euler) {}
  /**
   * @param {Vector3} euler
   * @returns {Vector3}
   */
  static Internal_MakePositive(euler) {}
  /**
   * @param {Quaternion} rotation
   * @returns {Vector3}
   */
  static Internal_ToEulerRad(rotation) {}
  /**
   * @param {Quaternion} rotation
   * @returns {Quaternion}
   */
  static Inverse(rotation) {}
  /**
   * @param {number} dot
   * @returns {boolean}
   */
  static IsEqualUsingDot(dot) {}
  /**
   * @param {Quaternion} a
   * @param {Quaternion} b
   * @param {number} t
   * @returns {Quaternion}
   */
  static Lerp(a, b, t) {}
  /**
   * @param {Quaternion} a
   * @param {Quaternion} b
   * @param {number} t
   * @returns {Quaternion}
   */
  static LerpUnclamped(a, b, t) {}
  /**
   * @param {Vector3} forward
   * @param {Vector3} upwards
   * @returns {Quaternion}
   */
  static LookRotation(forward, upwards) {}
  /**
   * @param {Vector3} forward
   * @returns {Quaternion}
   */
  static LookRotation(forward) {}
  /**
   * @param {Quaternion} q
   * @returns {Quaternion}
   */
  static Normalize(q) {}
  /**
   * @returns {void}
   */
  Normalize() {}
  /**
   * @param {Quaternion} from
   * @param {Quaternion} to
   * @param {number} maxDegreesDelta
   * @returns {Quaternion}
   */
  static RotateTowards(from, to, maxDegreesDelta) {}
  /**
   * @param {number} newX
   * @param {number} newY
   * @param {number} newZ
   * @param {number} newW
   * @returns {void}
   */
  Set(newX, newY, newZ, newW) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  SetAxisAngle(axis, angle) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {void}
   */
  SetEulerAngles(x, y, z) {}
  /**
   * @param {Vector3} euler
   * @returns {void}
   */
  SetEulerAngles(euler) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {void}
   */
  SetEulerRotation(x, y, z) {}
  /**
   * @param {Vector3} euler
   * @returns {void}
   */
  SetEulerRotation(euler) {}
  /**
   * @param {Vector3} fromDirection
   * @param {Vector3} toDirection
   * @returns {void}
   */
  SetFromToRotation(fromDirection, toDirection) {}
  /**
   * @param {Vector3} view
   * @returns {void}
   */
  SetLookRotation(view) {}
  /**
   * @param {Vector3} view
   * @param {Vector3} up
   * @returns {void}
   */
  SetLookRotation(view, up) {}
  /**
   * @param {Quaternion} a
   * @param {Quaternion} b
   * @param {number} t
   * @returns {Quaternion}
   */
  static Slerp(a, b, t) {}
  /**
   * @param {Quaternion} a
   * @param {Quaternion} b
   * @param {number} t
   * @returns {Quaternion}
   */
  static SlerpUnclamped(a, b, t) {}
  /**
   * @returns {Vector3}
   */
  ToEuler() {}
  /**
   * @param {Quaternion} rotation
   * @returns {Vector3}
   */
  static ToEulerAngles(rotation) {}
  /**
   * @returns {Vector3}
   */
  ToEulerAngles() {}
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
  /**@type {Vector3}*/
  get eulerAngles() {}
  /**
 * @param {Vector3} value
 */
  set eulerAngles(value) {}
  /**@type {Quaternion}*/
  static get identity() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Quaternion}*/
  get normalized() {}
}
class Transform {
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
   * @returns {void}
   */
  DetachChildren() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {string} n
   * @returns {Transform}
   */
  Find(n) {}
  /**
   * @param {string} n
   * @returns {Transform}
   */
  FindChild(n) {}
  /**
   * @param {Transform} transform
   * @param {string} path
   * @param {boolean} isActiveOnly
   * @returns {Transform}
   */
  static FindRelativeTransformWithPath(transform, path, isActiveOnly) {}
  /**
   * @param {number} index
   * @returns {Transform}
   */
  GetChild(index) {}
  /**
   * @returns {number}
   */
  GetChildCount() {}
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
   * @returns {IEnumerator}
   */
  GetEnumerator() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {number} order
   * @returns {Vector3}
   */
  GetLocalEulerAngles(order) {}
  /**
   * @returns {Transform}
   */
  GetParent() {}
  /**
   * @returns {Transform}
   */
  GetRoot() {}
  /**
   * @returns {number}
   */
  GetRotationOrderInternal() {}
  /**
   * @returns {number}
   */
  GetSiblingIndex() {}
  /**
   * @returns {number}
   */
  internal_getHierarchyCapacity() {}
  /**
   * @returns {number}
   */
  internal_getHierarchyCount() {}
  /**
   * @param {Vector3} worldPosition
   * @param {Vector3} worldUp
   * @returns {void}
   */
  Internal_LookAt(worldPosition, worldUp) {}
  /**
   * @param {number} value
   * @returns {void}
   */
  internal_setHierarchyCapacity(value) {}
  /**
   * @param {Vector3} direction
   * @returns {Vector3}
   */
  InverseTransformDirection(direction) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  InverseTransformDirection(x, y, z) {}
  /**
   * @param {Vector3*} directions
   * @param {number} count
   * @param {Vector3*} transformedDirections
   * @param {number} transformedCount
   * @returns {void}
   */
  InverseTransformDirections(directions, count, transformedDirections, transformedCount) {}
  /**
   * @param {ReadOnlySpan} directions
   * @param {Span} transformedDirections
   * @returns {void}
   */
  InverseTransformDirections(directions, transformedDirections) {}
  /**
   * @param {Span} directions
   * @returns {void}
   */
  InverseTransformDirections(directions) {}
  /**
   * @param {Vector3} position
   * @returns {Vector3}
   */
  InverseTransformPoint(position) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  InverseTransformPoint(x, y, z) {}
  /**
   * @param {Vector3*} positions
   * @param {number} count
   * @param {Vector3*} transformedPositions
   * @param {number} transformedCount
   * @returns {void}
   */
  InverseTransformPoints(positions, count, transformedPositions, transformedCount) {}
  /**
   * @param {ReadOnlySpan} positions
   * @param {Span} transformedPositions
   * @returns {void}
   */
  InverseTransformPoints(positions, transformedPositions) {}
  /**
   * @param {Span} positions
   * @returns {void}
   */
  InverseTransformPoints(positions) {}
  /**
   * @param {Vector3} vector
   * @returns {Vector3}
   */
  InverseTransformVector(vector) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  InverseTransformVector(x, y, z) {}
  /**
   * @param {Vector3*} vectors
   * @param {number} count
   * @param {Vector3*} transformedVectors
   * @param {number} transformedCount
   * @returns {void}
   */
  InverseTransformVectors(vectors, count, transformedVectors, transformedCount) {}
  /**
   * @param {ReadOnlySpan} vectors
   * @param {Span} transformedVectors
   * @returns {void}
   */
  InverseTransformVectors(vectors, transformedVectors) {}
  /**
   * @param {Span} vectors
   * @returns {void}
   */
  InverseTransformVectors(vectors) {}
  /**
   * @param {Transform} parent
   * @returns {boolean}
   */
  IsChildOf(parent) {}
  /**
   * @returns {boolean}
   */
  IsConstrainProportionsScale() {}
  /**
   * @returns {boolean}
   */
  IsNonUniformScaleTransform() {}
  /**
   * @param {Transform} target
   * @param {Vector3} worldUp
   * @returns {void}
   */
  LookAt(target, worldUp) {}
  /**
   * @param {Transform} target
   * @returns {void}
   */
  LookAt(target) {}
  /**
   * @param {Vector3} worldPosition
   * @param {Vector3} worldUp
   * @returns {void}
   */
  LookAt(worldPosition, worldUp) {}
  /**
   * @param {Vector3} worldPosition
   * @returns {void}
   */
  LookAt(worldPosition) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {Transform} transform
   * @param {boolean} notifyEditorAndMarkDirty
   * @returns {void}
   */
  MoveAfterSibling(transform, notifyEditorAndMarkDirty) {}
  /**
   * @param {Vector3} eulers
   * @param {number} relativeTo
   * @returns {void}
   */
  Rotate(eulers, relativeTo) {}
  /**
   * @param {Vector3} eulers
   * @returns {void}
   */
  Rotate(eulers) {}
  /**
   * @param {number} xAngle
   * @param {number} yAngle
   * @param {number} zAngle
   * @param {number} relativeTo
   * @returns {void}
   */
  Rotate(xAngle, yAngle, zAngle, relativeTo) {}
  /**
   * @param {number} xAngle
   * @param {number} yAngle
   * @param {number} zAngle
   * @returns {void}
   */
  Rotate(xAngle, yAngle, zAngle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @param {number} relativeTo
   * @returns {void}
   */
  Rotate(axis, angle, relativeTo) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  Rotate(axis, angle) {}
  /**
   * @param {Vector3} point
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAround(point, axis, angle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAround(axis, angle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAroundInternal(axis, angle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAroundLocal(axis, angle) {}
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
  SendTransformChangedScale() {}
  /**
   * @returns {void}
   */
  SetAsFirstSibling() {}
  /**
   * @returns {void}
   */
  SetAsLastSibling() {}
  /**
   * @param {boolean} isLinked
   * @returns {void}
   */
  SetConstrainProportionsScale(isLinked) {}
  /**
   * @param {Vector3} euler
   * @param {number} order
   * @returns {void}
   */
  SetLocalEulerAngles(euler, order) {}
  /**
   * @param {Vector3} euler
   * @returns {void}
   */
  SetLocalEulerHint(euler) {}
  /**
   * @param {Vector3} localPosition
   * @param {Quaternion} localRotation
   * @returns {void}
   */
  SetLocalPositionAndRotation(localPosition, localRotation) {}
  /**
   * @param {Transform} p
   * @returns {void}
   */
  SetParent(p) {}
  /**
   * @param {Transform} parent
   * @param {boolean} worldPositionStays
   * @returns {void}
   */
  SetParent(parent, worldPositionStays) {}
  /**
   * @param {Vector3} position
   * @param {Quaternion} rotation
   * @returns {void}
   */
  SetPositionAndRotation(position, rotation) {}
  /**
   * @param {number} rotationOrder
   * @returns {void}
   */
  SetRotationOrderInternal(rotationOrder) {}
  /**
   * @param {number} index
   * @returns {void}
   */
  SetSiblingIndex(index) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {Vector3} direction
   * @returns {Vector3}
   */
  TransformDirection(direction) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  TransformDirection(x, y, z) {}
  /**
   * @param {Vector3*} directions
   * @param {number} count
   * @param {Vector3*} transformedDirections
   * @param {number} transformedCount
   * @returns {void}
   */
  TransformDirections(directions, count, transformedDirections, transformedCount) {}
  /**
   * @param {ReadOnlySpan} directions
   * @param {Span} transformedDirections
   * @returns {void}
   */
  TransformDirections(directions, transformedDirections) {}
  /**
   * @param {Span} directions
   * @returns {void}
   */
  TransformDirections(directions) {}
  /**
   * @param {Vector3} position
   * @returns {Vector3}
   */
  TransformPoint(position) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  TransformPoint(x, y, z) {}
  /**
   * @param {Vector3*} positions
   * @param {number} count
   * @param {Vector3*} transformedPositions
   * @param {number} transformedCount
   * @returns {void}
   */
  TransformPoints(positions, count, transformedPositions, transformedCount) {}
  /**
   * @param {ReadOnlySpan} positions
   * @param {Span} transformedPositions
   * @returns {void}
   */
  TransformPoints(positions, transformedPositions) {}
  /**
   * @param {Span} positions
   * @returns {void}
   */
  TransformPoints(positions) {}
  /**
   * @param {Vector3} vector
   * @returns {Vector3}
   */
  TransformVector(vector) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  TransformVector(x, y, z) {}
  /**
   * @param {Vector3*} vectors
   * @param {number} count
   * @param {Vector3*} transformedVectors
   * @param {number} transformedCount
   * @returns {void}
   */
  TransformVectors(vectors, count, transformedVectors, transformedCount) {}
  /**
   * @param {ReadOnlySpan} vectors
   * @param {Span} transformedVectors
   * @returns {void}
   */
  TransformVectors(vectors, transformedVectors) {}
  /**
   * @param {Span} vectors
   * @returns {void}
   */
  TransformVectors(vectors) {}
  /**
   * @param {Vector3} translation
   * @param {number} relativeTo
   * @returns {void}
   */
  Translate(translation, relativeTo) {}
  /**
   * @param {Vector3} translation
   * @returns {void}
   */
  Translate(translation) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} relativeTo
   * @returns {void}
   */
  Translate(x, y, z, relativeTo) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {void}
   */
  Translate(x, y, z) {}
  /**
   * @param {Vector3} translation
   * @param {Transform} relativeTo
   * @returns {void}
   */
  Translate(translation, relativeTo) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {Transform} relativeTo
   * @returns {void}
   */
  Translate(x, y, z, relativeTo) {}
  /**@type {number}*/
  get childCount() {}
  /**@type {boolean}*/
  get constrainProportionsScale() {}
  /**
 * @param {boolean} value
 */
  set constrainProportionsScale(value) {}
  /**@type {Vector3}*/
  get eulerAngles() {}
  /**
 * @param {Vector3} value
 */
  set eulerAngles(value) {}
  /**@type {Vector3}*/
  get forward() {}
  /**
 * @param {Vector3} value
 */
  set forward(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {boolean}*/
  get hasChanged() {}
  /**
 * @param {boolean} value
 */
  set hasChanged(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {number}*/
  get hierarchyCapacity() {}
  /**
 * @param {number} value
 */
  set hierarchyCapacity(value) {}
  /**@type {number}*/
  get hierarchyCount() {}
  /**@type {Vector3}*/
  get localEulerAngles() {}
  /**
 * @param {Vector3} value
 */
  set localEulerAngles(value) {}
  /**@type {Vector3}*/
  get localPosition() {}
  /**
 * @param {Vector3} value
 */
  set localPosition(value) {}
  /**@type {Quaternion}*/
  get localRotation() {}
  /**
 * @param {Quaternion} value
 */
  set localRotation(value) {}
  /**@type {Vector3}*/
  get localScale() {}
  /**
 * @param {Vector3} value
 */
  set localScale(value) {}
  /**@type {Matrix4x4}*/
  get localToWorldMatrix() {}
  /**@type {Vector3}*/
  get lossyScale() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {Transform}*/
  get parent() {}
  /**
 * @param {Transform} value
 */
  set parent(value) {}
  /**@type {Transform}*/
  get parentInternal() {}
  /**
 * @param {Transform} value
 */
  set parentInternal(value) {}
  /**@type {Vector3}*/
  get position() {}
  /**
 * @param {Vector3} value
 */
  set position(value) {}
  /**@type {Vector3}*/
  get right() {}
  /**
 * @param {Vector3} value
 */
  set right(value) {}
  /**@type {Transform}*/
  get root() {}
  /**@type {Quaternion}*/
  get rotation() {}
  /**
 * @param {Quaternion} value
 */
  set rotation(value) {}
  /**@type {number}*/
  get rotationOrder() {}
  /**
 * @param {number} value
 */
  set rotationOrder(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {Vector3}*/
  get up() {}
  /**
 * @param {Vector3} value
 */
  set up(value) {}
  /**@type {Matrix4x4}*/
  get worldToLocalMatrix() {}
}
class RectTransform {
  constructor() {
  }
  /**@type {RectTransform.ReapplyDrivenProperties}*/
  static reapplyDrivenProperties;
  /**
   * @param {RectTransform.ReapplyDrivenProperties} value
   * @returns {void}
   */
  static add_reapplyDrivenProperties(value) {}
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
   * @returns {void}
   */
  DetachChildren() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {string} n
   * @returns {Transform}
   */
  Find(n) {}
  /**
   * @param {string} n
   * @returns {Transform}
   */
  FindChild(n) {}
  /**
   * @returns {void}
   */
  ForceUpdateRectTransforms() {}
  /**
   * @param {number} index
   * @returns {Transform}
   */
  GetChild(index) {}
  /**
   * @returns {number}
   */
  GetChildCount() {}
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
   * @returns {IEnumerator}
   */
  GetEnumerator() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {Vector3[]} fourCornersArray
   * @returns {void}
   */
  GetLocalCorners(fourCornersArray) {}
  /**
   * @param {number} order
   * @returns {Vector3}
   */
  GetLocalEulerAngles(order) {}
  /**
   * @returns {Vector2}
   */
  GetParentSize() {}
  /**
   * @returns {Rect}
   */
  GetRectInParentSpace() {}
  /**
   * @returns {number}
   */
  GetRotationOrderInternal() {}
  /**
   * @returns {number}
   */
  GetSiblingIndex() {}
  /**
   * @param {Vector3[]} fourCornersArray
   * @returns {void}
   */
  GetWorldCorners(fourCornersArray) {}
  /**
   * @param {Vector3} direction
   * @returns {Vector3}
   */
  InverseTransformDirection(direction) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  InverseTransformDirection(x, y, z) {}
  /**
   * @param {Vector3*} directions
   * @param {number} count
   * @param {Vector3*} transformedDirections
   * @param {number} transformedCount
   * @returns {void}
   */
  InverseTransformDirections(directions, count, transformedDirections, transformedCount) {}
  /**
   * @param {ReadOnlySpan} directions
   * @param {Span} transformedDirections
   * @returns {void}
   */
  InverseTransformDirections(directions, transformedDirections) {}
  /**
   * @param {Span} directions
   * @returns {void}
   */
  InverseTransformDirections(directions) {}
  /**
   * @param {Vector3} position
   * @returns {Vector3}
   */
  InverseTransformPoint(position) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  InverseTransformPoint(x, y, z) {}
  /**
   * @param {Vector3*} positions
   * @param {number} count
   * @param {Vector3*} transformedPositions
   * @param {number} transformedCount
   * @returns {void}
   */
  InverseTransformPoints(positions, count, transformedPositions, transformedCount) {}
  /**
   * @param {ReadOnlySpan} positions
   * @param {Span} transformedPositions
   * @returns {void}
   */
  InverseTransformPoints(positions, transformedPositions) {}
  /**
   * @param {Span} positions
   * @returns {void}
   */
  InverseTransformPoints(positions) {}
  /**
   * @param {Vector3} vector
   * @returns {Vector3}
   */
  InverseTransformVector(vector) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  InverseTransformVector(x, y, z) {}
  /**
   * @param {Vector3*} vectors
   * @param {number} count
   * @param {Vector3*} transformedVectors
   * @param {number} transformedCount
   * @returns {void}
   */
  InverseTransformVectors(vectors, count, transformedVectors, transformedCount) {}
  /**
   * @param {ReadOnlySpan} vectors
   * @param {Span} transformedVectors
   * @returns {void}
   */
  InverseTransformVectors(vectors, transformedVectors) {}
  /**
   * @param {Span} vectors
   * @returns {void}
   */
  InverseTransformVectors(vectors) {}
  /**
   * @param {Transform} parent
   * @returns {boolean}
   */
  IsChildOf(parent) {}
  /**
   * @returns {boolean}
   */
  IsNonUniformScaleTransform() {}
  /**
   * @param {Transform} target
   * @param {Vector3} worldUp
   * @returns {void}
   */
  LookAt(target, worldUp) {}
  /**
   * @param {Transform} target
   * @returns {void}
   */
  LookAt(target) {}
  /**
   * @param {Vector3} worldPosition
   * @param {Vector3} worldUp
   * @returns {void}
   */
  LookAt(worldPosition, worldUp) {}
  /**
   * @param {Vector3} worldPosition
   * @returns {void}
   */
  LookAt(worldPosition) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {Transform} transform
   * @param {boolean} notifyEditorAndMarkDirty
   * @returns {void}
   */
  MoveAfterSibling(transform, notifyEditorAndMarkDirty) {}
  /**
   * @param {RectTransform.ReapplyDrivenProperties} value
   * @returns {void}
   */
  static remove_reapplyDrivenProperties(value) {}
  /**
   * @param {Vector3} eulers
   * @param {number} relativeTo
   * @returns {void}
   */
  Rotate(eulers, relativeTo) {}
  /**
   * @param {Vector3} eulers
   * @returns {void}
   */
  Rotate(eulers) {}
  /**
   * @param {number} xAngle
   * @param {number} yAngle
   * @param {number} zAngle
   * @param {number} relativeTo
   * @returns {void}
   */
  Rotate(xAngle, yAngle, zAngle, relativeTo) {}
  /**
   * @param {number} xAngle
   * @param {number} yAngle
   * @param {number} zAngle
   * @returns {void}
   */
  Rotate(xAngle, yAngle, zAngle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @param {number} relativeTo
   * @returns {void}
   */
  Rotate(axis, angle, relativeTo) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  Rotate(axis, angle) {}
  /**
   * @param {Vector3} point
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAround(point, axis, angle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAround(axis, angle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAroundInternal(axis, angle) {}
  /**
   * @param {Vector3} axis
   * @param {number} angle
   * @returns {void}
   */
  RotateAroundLocal(axis, angle) {}
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
   * @param {RectTransform} driven
   * @returns {void}
   */
  static SendReapplyDrivenProperties(driven) {}
  /**
   * @returns {void}
   */
  SendTransformChangedScale() {}
  /**
   * @returns {void}
   */
  SetAsFirstSibling() {}
  /**
   * @returns {void}
   */
  SetAsLastSibling() {}
  /**
   * @param {number} edge
   * @param {number} inset
   * @param {number} size
   * @returns {void}
   */
  SetInsetAndSizeFromParentEdge(edge, inset, size) {}
  /**
   * @param {Vector3} euler
   * @param {number} order
   * @returns {void}
   */
  SetLocalEulerAngles(euler, order) {}
  /**
   * @param {Vector3} euler
   * @returns {void}
   */
  SetLocalEulerHint(euler) {}
  /**
   * @param {Vector3} localPosition
   * @param {Quaternion} localRotation
   * @returns {void}
   */
  SetLocalPositionAndRotation(localPosition, localRotation) {}
  /**
   * @param {Transform} p
   * @returns {void}
   */
  SetParent(p) {}
  /**
   * @param {Transform} parent
   * @param {boolean} worldPositionStays
   * @returns {void}
   */
  SetParent(parent, worldPositionStays) {}
  /**
   * @param {Vector3} position
   * @param {Quaternion} rotation
   * @returns {void}
   */
  SetPositionAndRotation(position, rotation) {}
  /**
   * @param {number} rotationOrder
   * @returns {void}
   */
  SetRotationOrderInternal(rotationOrder) {}
  /**
   * @param {number} index
   * @returns {void}
   */
  SetSiblingIndex(index) {}
  /**
   * @param {number} axis
   * @param {number} size
   * @returns {void}
   */
  SetSizeWithCurrentAnchors(axis, size) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {Vector3} direction
   * @returns {Vector3}
   */
  TransformDirection(direction) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  TransformDirection(x, y, z) {}
  /**
   * @param {Vector3*} directions
   * @param {number} count
   * @param {Vector3*} transformedDirections
   * @param {number} transformedCount
   * @returns {void}
   */
  TransformDirections(directions, count, transformedDirections, transformedCount) {}
  /**
   * @param {ReadOnlySpan} directions
   * @param {Span} transformedDirections
   * @returns {void}
   */
  TransformDirections(directions, transformedDirections) {}
  /**
   * @param {Span} directions
   * @returns {void}
   */
  TransformDirections(directions) {}
  /**
   * @param {Vector3} position
   * @returns {Vector3}
   */
  TransformPoint(position) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  TransformPoint(x, y, z) {}
  /**
   * @param {Vector3*} positions
   * @param {number} count
   * @param {Vector3*} transformedPositions
   * @param {number} transformedCount
   * @returns {void}
   */
  TransformPoints(positions, count, transformedPositions, transformedCount) {}
  /**
   * @param {ReadOnlySpan} positions
   * @param {Span} transformedPositions
   * @returns {void}
   */
  TransformPoints(positions, transformedPositions) {}
  /**
   * @param {Span} positions
   * @returns {void}
   */
  TransformPoints(positions) {}
  /**
   * @param {Vector3} vector
   * @returns {Vector3}
   */
  TransformVector(vector) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {Vector3}
   */
  TransformVector(x, y, z) {}
  /**
   * @param {Vector3*} vectors
   * @param {number} count
   * @param {Vector3*} transformedVectors
   * @param {number} transformedCount
   * @returns {void}
   */
  TransformVectors(vectors, count, transformedVectors, transformedCount) {}
  /**
   * @param {ReadOnlySpan} vectors
   * @param {Span} transformedVectors
   * @returns {void}
   */
  TransformVectors(vectors, transformedVectors) {}
  /**
   * @param {Span} vectors
   * @returns {void}
   */
  TransformVectors(vectors) {}
  /**
   * @param {Vector3} translation
   * @param {number} relativeTo
   * @returns {void}
   */
  Translate(translation, relativeTo) {}
  /**
   * @param {Vector3} translation
   * @returns {void}
   */
  Translate(translation) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} relativeTo
   * @returns {void}
   */
  Translate(x, y, z, relativeTo) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {void}
   */
  Translate(x, y, z) {}
  /**
   * @param {Vector3} translation
   * @param {Transform} relativeTo
   * @returns {void}
   */
  Translate(translation, relativeTo) {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {Transform} relativeTo
   * @returns {void}
   */
  Translate(x, y, z, relativeTo) {}
  /**@type {Vector2}*/
  get anchoredPosition() {}
  /**
 * @param {Vector2} value
 */
  set anchoredPosition(value) {}
  /**@type {Vector3}*/
  get anchoredPosition3D() {}
  /**
 * @param {Vector3} value
 */
  set anchoredPosition3D(value) {}
  /**@type {Vector2}*/
  get anchorMax() {}
  /**
 * @param {Vector2} value
 */
  set anchorMax(value) {}
  /**@type {Vector2}*/
  get anchorMin() {}
  /**
 * @param {Vector2} value
 */
  set anchorMin(value) {}
  /**@type {number}*/
  get childCount() {}
  /**@type {boolean}*/
  get constrainProportionsScale() {}
  /**
 * @param {boolean} value
 */
  set constrainProportionsScale(value) {}
  /**@type {Object}*/
  get drivenByObject() {}
  /**
 * @param {Object} value
 */
  set drivenByObject(value) {}
  /**@type {number}*/
  get drivenProperties() {}
  /**
 * @param {number} value
 */
  set drivenProperties(value) {}
  /**@type {Vector3}*/
  get eulerAngles() {}
  /**
 * @param {Vector3} value
 */
  set eulerAngles(value) {}
  /**@type {Vector3}*/
  get forward() {}
  /**
 * @param {Vector3} value
 */
  set forward(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {boolean}*/
  get hasChanged() {}
  /**
 * @param {boolean} value
 */
  set hasChanged(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {number}*/
  get hierarchyCapacity() {}
  /**
 * @param {number} value
 */
  set hierarchyCapacity(value) {}
  /**@type {number}*/
  get hierarchyCount() {}
  /**@type {Vector3}*/
  get localEulerAngles() {}
  /**
 * @param {Vector3} value
 */
  set localEulerAngles(value) {}
  /**@type {Vector3}*/
  get localPosition() {}
  /**
 * @param {Vector3} value
 */
  set localPosition(value) {}
  /**@type {Quaternion}*/
  get localRotation() {}
  /**
 * @param {Quaternion} value
 */
  set localRotation(value) {}
  /**@type {Vector3}*/
  get localScale() {}
  /**
 * @param {Vector3} value
 */
  set localScale(value) {}
  /**@type {Matrix4x4}*/
  get localToWorldMatrix() {}
  /**@type {Vector3}*/
  get lossyScale() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {Vector2}*/
  get offsetMax() {}
  /**
 * @param {Vector2} value
 */
  set offsetMax(value) {}
  /**@type {Vector2}*/
  get offsetMin() {}
  /**
 * @param {Vector2} value
 */
  set offsetMin(value) {}
  /**@type {Transform}*/
  get parent() {}
  /**
 * @param {Transform} value
 */
  set parent(value) {}
  /**@type {Transform}*/
  get parentInternal() {}
  /**
 * @param {Transform} value
 */
  set parentInternal(value) {}
  /**@type {Vector2}*/
  get pivot() {}
  /**
 * @param {Vector2} value
 */
  set pivot(value) {}
  /**@type {Vector3}*/
  get position() {}
  /**
 * @param {Vector3} value
 */
  set position(value) {}
  /**@type {Rect}*/
  get rect() {}
  /**@type {Vector3}*/
  get right() {}
  /**
 * @param {Vector3} value
 */
  set right(value) {}
  /**@type {Transform}*/
  get root() {}
  /**@type {Quaternion}*/
  get rotation() {}
  /**
 * @param {Quaternion} value
 */
  set rotation(value) {}
  /**@type {number}*/
  get rotationOrder() {}
  /**
 * @param {number} value
 */
  set rotationOrder(value) {}
  /**@type {Vector2}*/
  get sizeDelta() {}
  /**
 * @param {Vector2} value
 */
  set sizeDelta(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {Vector3}*/
  get up() {}
  /**
 * @param {Vector3} value
 */
  set up(value) {}
  /**@type {Matrix4x4}*/
  get worldToLocalMatrix() {}
}
class GUI {
  constructor() {
  }
  /**@type {number}*/
  static s_ScrollStepSize;
  /**@type {number}*/
  static s_ScrollControlId;
  /**@type {number}*/
  static s_HotTextField;
  /**@type {number}*/
  static s_BoxHash;
  /**@type {number}*/
  static s_ButonHash;
  /**@type {number}*/
  static s_RepeatButtonHash;
  /**@type {number}*/
  static s_ToggleHash;
  /**@type {number}*/
  static s_ButtonGridHash;
  /**@type {number}*/
  static s_SliderHash;
  /**@type {number}*/
  static s_BeginGroupHash;
  /**@type {number}*/
  static s_ScrollviewHash;
  /**@type {GUISkin}*/
  static s_Skin;
  /**@type {Rect}*/
  static s_ToolTipRect;
  /**
   * @param {Rect} position
   * @param {Vector2} scrollOffset
   * @param {Vector2} renderOffset
   * @param {boolean} resetOffset
   * @returns {void}
   */
  static BeginClip(position, scrollOffset, renderOffset, resetOffset) {}
  /**
   * @param {Rect} position
   * @returns {void}
   */
  static BeginClip(position) {}
  /**
   * @param {Rect} position
   * @returns {void}
   */
  static BeginGroup(position) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {void}
   */
  static BeginGroup(position, text) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @returns {void}
   */
  static BeginGroup(position, image) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @returns {void}
   */
  static BeginGroup(position, content) {}
  /**
   * @param {Rect} position
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginGroup(position, style) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginGroup(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginGroup(position, image, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginGroup(position, content, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {Vector2} scrollOffset
   * @returns {void}
   */
  static BeginGroup(position, content, style, scrollOffset) {}
  /**
   * @param {Rect} position
   * @param {Vector2} scrollPosition
   * @param {Rect} viewRect
   * @returns {Vector2}
   */
  static BeginScrollView(position, scrollPosition, viewRect) {}
  /**
   * @param {Rect} position
   * @param {Vector2} scrollPosition
   * @param {Rect} viewRect
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @returns {Vector2}
   */
  static BeginScrollView(position, scrollPosition, viewRect, alwaysShowHorizontal, alwaysShowVertical) {}
  /**
   * @param {Rect} position
   * @param {Vector2} scrollPosition
   * @param {Rect} viewRect
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @returns {Vector2}
   */
  static BeginScrollView(position, scrollPosition, viewRect, horizontalScrollbar, verticalScrollbar) {}
  /**
   * @param {Rect} position
   * @param {Vector2} scrollPosition
   * @param {Rect} viewRect
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @returns {Vector2}
   */
  static BeginScrollView(position, scrollPosition, viewRect, alwaysShowHorizontal, alwaysShowVertical, horizontalScrollbar, verticalScrollbar) {}
  /**
   * @param {Rect} position
   * @param {Vector2} scrollPosition
   * @param {Rect} viewRect
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @param {GUIStyle} background
   * @returns {Vector2}
   */
  static BeginScrollView(position, scrollPosition, viewRect, alwaysShowHorizontal, alwaysShowVertical, horizontalScrollbar, verticalScrollbar, background) {}
  /**
   * @param {number} skinMode
   * @param {number} editorWindowInstanceID
   * @returns {void}
   */
  static BeginWindows(skinMode, editorWindowInstanceID) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {void}
   */
  static Box(position, text) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @returns {void}
   */
  static Box(position, image) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @returns {void}
   */
  static Box(position, content) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {void}
   */
  static Box(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {void}
   */
  static Box(position, image, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {void}
   */
  static Box(position, content, style) {}
  /**
   * @param {number} windowID
   * @returns {void}
   */
  static BringWindowToBack(windowID) {}
  /**
   * @param {number} windowID
   * @returns {void}
   */
  static BringWindowToFront(windowID) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {boolean}
   */
  static Button(position, text) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @returns {boolean}
   */
  static Button(position, image) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @returns {boolean}
   */
  static Button(position, content) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Button(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Button(position, image, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Button(position, content, style) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Button(position, id, content, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent[]} contents
   * @param {number} xCount
   * @param {number} elemWidth
   * @param {number} elemHeight
   * @param {GUIStyle} style
   * @param {GUIStyle} firstStyle
   * @param {GUIStyle} midStyle
   * @param {GUIStyle} lastStyle
   * @param {number} buttonSize
   * @returns {Rect[]}
   */
  static CalcGridRects(position, contents, xCount, elemWidth, elemHeight, style, firstStyle, midStyle, lastStyle, buttonSize) {}
  /**
   * @param {Rect} position
   * @param {number} itemCount
   * @param {number} itemsPerRow
   * @param {number} elemWidth
   * @param {number} elemHeight
   * @param {number} spacingHorizontal
   * @param {number} spacingVertical
   * @returns {Rect[]}
   */
  static CalcGridRectsFixedWidthFixedMargin(position, itemCount, itemsPerRow, elemWidth, elemHeight, spacingHorizontal, spacingVertical) {}
  /**
   * @param {number} xCount
   * @param {GUIStyle} style
   * @param {GUIStyle} firstStyle
   * @param {GUIStyle} midStyle
   * @param {GUIStyle} lastStyle
   * @returns {number}
   */
  static CalcTotalHorizSpacing(xCount, style, firstStyle, midStyle, lastStyle) {}
  /**
   * @param {GUI.WindowFunction} func
   * @param {number} id
   * @param {number} instanceID
   * @param {GUISkin} _skin
   * @param {number} forceRect
   * @param {number} width
   * @param {number} height
   * @param {GUIStyle} style
   * @returns {void}
   */
  static CallWindowDelegate(func, id, instanceID, _skin, forceRect, width, height, style) {}
  /**
   * @returns {void}
   */
  static CleanupRoots() {}
  /**
   * @param {Rect} position
   * @param {Vector2} scrollPosition
   * @param {Rect} viewRect
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @param {GUIStyle} background
   * @returns {Vector2}
   */
  static DoBeginScrollView(position, scrollPosition, viewRect, alwaysShowHorizontal, alwaysShowVertical, horizontalScrollbar, verticalScrollbar, background) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static DoButton(position, id, content, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {String[]} controlNames
   * @param {number} itemsPerRow
   * @param {GUIStyle} style
   * @param {GUIStyle} firstStyle
   * @param {GUIStyle} midStyle
   * @param {GUIStyle} lastStyle
   * @param {number} buttonSize
   * @param {Boolean[]} contentsEnabled
   * @returns {number}
   */
  static DoButtonGrid(position, selected, contents, controlNames, itemsPerRow, style, firstStyle, midStyle, lastStyle, buttonSize, contentsEnabled) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {boolean} on
   * @param {boolean} hover
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static DoControl(position, id, on, hover, content, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {number} itemCount
   * @param {GUI.CustomSelectionGridItemGUI} itemGUI
   * @param {number} itemsPerRow
   * @param {GUIStyle} style
   * @returns {number}
   */
  static DoCustomSelectionGrid(position, selected, itemCount, itemGUI, itemsPerRow, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {void}
   */
  static DoLabel(position, content, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUISkin} skin
   * @returns {Rect}
   */
  static DoModalWindow(id, clientRect, func, content, style, skin) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {number} focusType
   * @returns {boolean}
   */
  static DoRepeatButton(position, content, style, focusType) {}
  /**
   * @param {GUISkin} newSkin
   * @returns {void}
   */
  static DoSetSkin(newSkin) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {boolean} multiline
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @returns {void}
   */
  static DoTextField(position, id, content, multiline, maxLength, style) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {boolean} multiline
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {string} secureText
   * @returns {void}
   */
  static DoTextField(position, id, content, multiline, maxLength, style, secureText) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {boolean} multiline
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {string} secureText
   * @param {string} maskChar
   * @returns {void}
   */
  static DoTextField(position, id, content, multiline, maxLength, style, secureText, maskChar) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {boolean} value
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static DoToggle(position, id, value, content, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} title
   * @param {GUIStyle} style
   * @param {GUISkin} skin
   * @param {boolean} forceRectOnLayout
   * @returns {Rect}
   */
  static DoWindow(id, clientRect, func, title, style, skin, forceRectOnLayout) {}
  /**
   * @param {Rect} position
   * @returns {void}
   */
  static DragWindow(position) {}
  /**
   * @returns {void}
   */
  static DragWindow() {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @returns {void}
   */
  static DrawTexture(position, image) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @param {Color} color
   * @param {number} borderWidth
   * @param {number} borderRadius
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect, color, borderWidth, borderRadius) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @param {Color} color
   * @param {Vector4} borderWidths
   * @param {number} borderRadius
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect, color, borderWidths, borderRadius) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @param {Color} color
   * @param {Vector4} borderWidths
   * @param {Vector4} borderRadiuses
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect, color, borderWidths, borderRadiuses) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @param {Color} color
   * @param {Vector4} borderWidths
   * @param {Vector4} borderRadiuses
   * @param {boolean} drawSmoothCorners
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect, color, borderWidths, borderRadiuses, drawSmoothCorners) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @param {Color} leftColor
   * @param {Color} topColor
   * @param {Color} rightColor
   * @param {Color} bottomColor
   * @param {Vector4} borderWidths
   * @param {Vector4} borderRadiuses
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect, leftColor, topColor, rightColor, bottomColor, borderWidths, borderRadiuses) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {number} scaleMode
   * @param {boolean} alphaBlend
   * @param {number} imageAspect
   * @param {Color} leftColor
   * @param {Color} topColor
   * @param {Color} rightColor
   * @param {Color} bottomColor
   * @param {Vector4} borderWidths
   * @param {Vector4} borderRadiuses
   * @param {boolean} drawSmoothCorners
   * @returns {void}
   */
  static DrawTexture(position, image, scaleMode, alphaBlend, imageAspect, leftColor, topColor, rightColor, bottomColor, borderWidths, borderRadiuses, drawSmoothCorners) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {Rect} texCoords
   * @returns {void}
   */
  static DrawTextureWithTexCoords(position, image, texCoords) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {Rect} texCoords
   * @param {boolean} alphaBlend
   * @returns {void}
   */
  static DrawTextureWithTexCoords(position, image, texCoords, alphaBlend) {}
  /**
   * @returns {void}
   */
  static EndClip() {}
  /**
   * @returns {void}
   */
  static EndGroup() {}
  /**
   * @returns {void}
   */
  static EndScrollView() {}
  /**
   * @param {boolean} handleScrollWheel
   * @returns {void}
   */
  static EndScrollView(handleScrollWheel) {}
  /**
   * @returns {void}
   */
  static EndWindows() {}
  /**
   * @param {string} name
   * @returns {void}
   */
  static FocusControl(name) {}
  /**
   * @param {number} windowID
   * @returns {void}
   */
  static FocusWindow(windowID) {}
  /**
   * @returns {string}
   */
  static GetNameOfFocusedControl() {}
  /**
   * @returns {ScrollViewState}
   */
  static GetTopScrollView() {}
  /**
   * @param {number} id
   * @returns {void}
   */
  static GrabMouseControl(id) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {boolean} multiline
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {TextEditor} editor
   * @returns {void}
   */
  static HandleTextFieldEventForDesktop(position, id, content, multiline, maxLength, style, editor) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {boolean} multiline
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {string} secureText
   * @param {TextEditor} editor
   * @returns {void}
   */
  static HandleTextFieldEventForDesktopWithForcedKeyboard(position, id, content, multiline, maxLength, style, secureText, editor) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {GUIContent} content
   * @param {boolean} multiline
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {string} secureText
   * @param {string} maskChar
   * @param {TextEditor} editor
   * @returns {void}
   */
  static HandleTextFieldEventForTouchscreen(position, id, content, multiline, maxLength, style, secureText, maskChar, editor) {}
  /**
   * @param {number} id
   * @returns {boolean}
   */
  static HasMouseControl(id) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} size
   * @param {number} leftValue
   * @param {number} rightValue
   * @returns {number}
   */
  static HorizontalScrollbar(position, value, size, leftValue, rightValue) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} size
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} style
   * @returns {number}
   */
  static HorizontalScrollbar(position, value, size, leftValue, rightValue, style) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @returns {number}
   */
  static HorizontalSlider(position, value, leftValue, rightValue) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @returns {number}
   */
  static HorizontalSlider(position, value, leftValue, rightValue, slider, thumb) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUIStyle} thumbExtent
   * @returns {number}
   */
  static HorizontalSlider(position, value, leftValue, rightValue, slider, thumb, thumbExtent) {}
  /**
   * @returns {void}
   */
  static Internal_BeginWindows() {}
  /**
   * @param {GUIContent} first
   * @param {GUIContent} second
   * @returns {string}
   */
  static Internal_Concatenate(first, second) {}
  /**
   * @param {number} id
   * @param {number} instanceID
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {Object} skin
   * @returns {Rect}
   */
  static Internal_DoModalWindow(id, instanceID, clientRect, func, content, style, skin) {}
  /**
   * @param {number} id
   * @param {number} instanceID
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} title
   * @param {GUIStyle} style
   * @param {Object} skin
   * @param {boolean} forceRectOnLayout
   * @returns {Rect}
   */
  static Internal_DoWindow(id, instanceID, clientRect, func, title, style, skin, forceRectOnLayout) {}
  /**
   * @returns {void}
   */
  static Internal_EndWindows() {}
  /**
   * @returns {string}
   */
  static Internal_GetMouseTooltip() {}
  /**
   * @returns {string}
   */
  static Internal_GetTooltip() {}
  /**
   * @param {string} value
   * @returns {void}
   */
  static Internal_SetTooltip(value) {}
  /**
   * @returns {void}
   */
  static InternalRepaintEditorWindow() {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {void}
   */
  static Label(position, text) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @returns {void}
   */
  static Label(position, image) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @returns {void}
   */
  static Label(position, content) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {void}
   */
  static Label(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {void}
   */
  static Label(position, image, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {void}
   */
  static Label(position, content, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {string} text
   * @returns {Rect}
   */
  static ModalWindow(id, clientRect, func, text) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {Texture} image
   * @returns {Rect}
   */
  static ModalWindow(id, clientRect, func, image) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @returns {Rect}
   */
  static ModalWindow(id, clientRect, func, content) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {Rect}
   */
  static ModalWindow(id, clientRect, func, text, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {Rect}
   */
  static ModalWindow(id, clientRect, func, image, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {Rect}
   */
  static ModalWindow(id, clientRect, func, content, style) {}
  /**
   * @param {Rect} position
   * @param {string} password
   * @param {string} maskChar
   * @returns {string}
   */
  static PasswordField(position, password, maskChar) {}
  /**
   * @param {Rect} position
   * @param {string} password
   * @param {string} maskChar
   * @param {number} maxLength
   * @returns {string}
   */
  static PasswordField(position, password, maskChar, maxLength) {}
  /**
   * @param {Rect} position
   * @param {string} password
   * @param {string} maskChar
   * @param {GUIStyle} style
   * @returns {string}
   */
  static PasswordField(position, password, maskChar, style) {}
  /**
   * @param {Rect} position
   * @param {string} password
   * @param {string} maskChar
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @returns {string}
   */
  static PasswordField(position, password, maskChar, maxLength, style) {}
  /**
   * @param {string} password
   * @param {string} maskChar
   * @returns {string}
   */
  static PasswordFieldGetStrToShow(password, maskChar) {}
  /**
   * @returns {void}
   */
  static ReleaseMouseControl() {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {boolean}
   */
  static RepeatButton(position, text) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @returns {boolean}
   */
  static RepeatButton(position, image) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @returns {boolean}
   */
  static RepeatButton(position, content) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static RepeatButton(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static RepeatButton(position, image, style) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static RepeatButton(position, content, style) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} size
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUIStyle} leftButton
   * @param {GUIStyle} rightButton
   * @param {boolean} horiz
   * @returns {number}
   */
  static Scroller(position, value, size, leftValue, rightValue, slider, thumb, leftButton, rightButton, horiz) {}
  /**
   * @param {number} scrollerID
   * @param {Rect} rect
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static ScrollerRepeatButton(scrollerID, rect, style) {}
  /**
   * @param {Rect} position
   * @returns {void}
   */
  static ScrollTo(position) {}
  /**
   * @param {Rect} position
   * @param {number} maxDelta
   * @returns {boolean}
   */
  static ScrollTowards(position, maxDelta) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {String[]} texts
   * @param {number} xCount
   * @returns {number}
   */
  static SelectionGrid(position, selected, texts, xCount) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {Texture[]} images
   * @param {number} xCount
   * @returns {number}
   */
  static SelectionGrid(position, selected, images, xCount) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} content
   * @param {number} xCount
   * @returns {number}
   */
  static SelectionGrid(position, selected, content, xCount) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {String[]} texts
   * @param {number} xCount
   * @param {GUIStyle} style
   * @returns {number}
   */
  static SelectionGrid(position, selected, texts, xCount, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {Texture[]} images
   * @param {number} xCount
   * @param {GUIStyle} style
   * @returns {number}
   */
  static SelectionGrid(position, selected, images, xCount, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {number} xCount
   * @param {GUIStyle} style
   * @returns {number}
   */
  static SelectionGrid(position, selected, contents, xCount, style) {}
  /**
   * @param {string} name
   * @returns {void}
   */
  static SetNextControlName(name) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} size
   * @param {number} start
   * @param {number} end
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {boolean} horiz
   * @param {number} id
   * @param {GUIStyle} thumbExtent
   * @returns {number}
   */
  static Slider(position, value, size, start, end, slider, thumb, horiz, id, thumbExtent) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {string}
   */
  static TextArea(position, text) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {number} maxLength
   * @returns {string}
   */
  static TextArea(position, text, maxLength) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {string}
   */
  static TextArea(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @returns {string}
   */
  static TextArea(position, text, maxLength, style) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @returns {string}
   */
  static TextField(position, text) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {number} maxLength
   * @returns {string}
   */
  static TextField(position, text, maxLength) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {string}
   */
  static TextField(position, text, style) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @returns {string}
   */
  static TextField(position, text, maxLength, style) {}
  /**
   * @param {Rect} position
   * @param {boolean} value
   * @param {string} text
   * @returns {boolean}
   */
  static Toggle(position, value, text) {}
  /**
   * @param {Rect} position
   * @param {boolean} value
   * @param {Texture} image
   * @returns {boolean}
   */
  static Toggle(position, value, image) {}
  /**
   * @param {Rect} position
   * @param {boolean} value
   * @param {GUIContent} content
   * @returns {boolean}
   */
  static Toggle(position, value, content) {}
  /**
   * @param {Rect} position
   * @param {boolean} value
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Toggle(position, value, text, style) {}
  /**
   * @param {Rect} position
   * @param {boolean} value
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Toggle(position, value, image, style) {}
  /**
   * @param {Rect} position
   * @param {boolean} value
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Toggle(position, value, content, style) {}
  /**
   * @param {Rect} position
   * @param {number} id
   * @param {boolean} value
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {boolean}
   */
  static Toggle(position, id, value, content, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {String[]} texts
   * @returns {number}
   */
  static Toolbar(position, selected, texts) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {Texture[]} images
   * @returns {number}
   */
  static Toolbar(position, selected, images) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @returns {number}
   */
  static Toolbar(position, selected, contents) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {String[]} texts
   * @param {GUIStyle} style
   * @returns {number}
   */
  static Toolbar(position, selected, texts, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {Texture[]} images
   * @param {GUIStyle} style
   * @returns {number}
   */
  static Toolbar(position, selected, images, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {GUIStyle} style
   * @returns {number}
   */
  static Toolbar(position, selected, contents, style) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {GUIStyle} style
   * @param {number} buttonSize
   * @returns {number}
   */
  static Toolbar(position, selected, contents, style, buttonSize) {}
  /**
   * @param {Rect} position
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {String[]} controlNames
   * @param {GUIStyle} style
   * @param {number} buttonSize
   * @param {Boolean[]} contentsEnabled
   * @returns {number}
   */
  static Toolbar(position, selected, contents, controlNames, style, buttonSize, contentsEnabled) {}
  /**
   * @returns {void}
   */
  static UnfocusWindow() {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} size
   * @param {number} topValue
   * @param {number} bottomValue
   * @returns {number}
   */
  static VerticalScrollbar(position, value, size, topValue, bottomValue) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} size
   * @param {number} topValue
   * @param {number} bottomValue
   * @param {GUIStyle} style
   * @returns {number}
   */
  static VerticalScrollbar(position, value, size, topValue, bottomValue, style) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} topValue
   * @param {number} bottomValue
   * @returns {number}
   */
  static VerticalSlider(position, value, topValue, bottomValue) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} topValue
   * @param {number} bottomValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @returns {number}
   */
  static VerticalSlider(position, value, topValue, bottomValue, slider, thumb) {}
  /**
   * @param {Rect} position
   * @param {number} value
   * @param {number} topValue
   * @param {number} bottomValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUIStyle} thumbExtent
   * @returns {number}
   */
  static VerticalSlider(position, value, topValue, bottomValue, slider, thumb, thumbExtent) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {string} text
   * @returns {Rect}
   */
  static Window(id, clientRect, func, text) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {Texture} image
   * @returns {Rect}
   */
  static Window(id, clientRect, func, image) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @returns {Rect}
   */
  static Window(id, clientRect, func, content) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {Rect}
   */
  static Window(id, clientRect, func, text, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {Rect}
   */
  static Window(id, clientRect, func, image, style) {}
  /**
   * @param {number} id
   * @param {Rect} clientRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} title
   * @param {GUIStyle} style
   * @returns {Rect}
   */
  static Window(id, clientRect, func, title, style) {}
  /**@type {Color}*/
  static get backgroundColor() {}
  /**
 * @param {Color} value
 */
  static set backgroundColor(value) {}
  /**@type {Material}*/
  static get blendMaterial() {}
  /**@type {Material}*/
  static get blitMaterial() {}
  /**@type {boolean}*/
  static get changed() {}
  /**
 * @param {boolean} value
 */
  static set changed(value) {}
  /**@type {Color}*/
  static get color() {}
  /**
 * @param {Color} value
 */
  static set color(value) {}
  /**@type {Color}*/
  static get contentColor() {}
  /**
 * @param {Color} value
 */
  static set contentColor(value) {}
  /**@type {number}*/
  static get depth() {}
  /**
 * @param {number} value
 */
  static set depth(value) {}
  /**@type {boolean}*/
  static get enabled() {}
  /**
 * @param {boolean} value
 */
  static set enabled(value) {}
  /**@type {boolean}*/
  static get isInsideList() {}
  /**
 * @param {boolean} value
 */
  static set isInsideList(value) {}
  /**@type {Matrix4x4}*/
  static get matrix() {}
  /**
 * @param {Matrix4x4} value
 */
  static set matrix(value) {}
  /**@type {string}*/
  static get mouseTooltip() {}
  /**@type {Date}*/
  static get nextScrollStepTime() {}
  /**
 * @param {Date} value
 */
  static set nextScrollStepTime(value) {}
  /**@type {Material}*/
  static get roundedRectMaterial() {}
  /**@type {Material}*/
  static get roundedRectWithColorPerBorderMaterial() {}
  /**@type {number}*/
  static get scrollTroughSide() {}
  /**
 * @param {number} value
 */
  static set scrollTroughSide(value) {}
  /**@type {GenericStack}*/
  static get scrollViewStates() {}
  /**
 * @param {GenericStack} value
 */
  static set scrollViewStates(value) {}
  /**@type {GUISkin}*/
  static get skin() {}
  /**
 * @param {GUISkin} value
 */
  static set skin(value) {}
  /**@type {string}*/
  static get tooltip() {}
  /**
 * @param {string} value
 */
  static set tooltip(value) {}
  /**@type {Rect}*/
  static get tooltipRect() {}
  /**
 * @param {Rect} value
 */
  static set tooltipRect(value) {}
  /**@type {boolean}*/
  static get usePageScrollbars() {}
}
class GUILayout {
  constructor() {
  }
  /**
   * @param {Rect} screenRect
   * @returns {void}
   */
  static BeginArea(screenRect) {}
  /**
   * @param {Rect} screenRect
   * @param {string} text
   * @returns {void}
   */
  static BeginArea(screenRect, text) {}
  /**
   * @param {Rect} screenRect
   * @param {Texture} image
   * @returns {void}
   */
  static BeginArea(screenRect, image) {}
  /**
   * @param {Rect} screenRect
   * @param {GUIContent} content
   * @returns {void}
   */
  static BeginArea(screenRect, content) {}
  /**
   * @param {Rect} screenRect
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginArea(screenRect, style) {}
  /**
   * @param {Rect} screenRect
   * @param {string} text
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginArea(screenRect, text, style) {}
  /**
   * @param {Rect} screenRect
   * @param {Texture} image
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginArea(screenRect, image, style) {}
  /**
   * @param {Rect} screenRect
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @returns {void}
   */
  static BeginArea(screenRect, content, style) {}
  /**
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginHorizontal(options) {}
  /**
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginHorizontal(style, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginHorizontal(text, style, options) {}
  /**
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginHorizontal(image, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginHorizontal(content, style, options) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {GUILayoutOption[]} options
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, options) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @param {GUILayoutOption[]} options
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, alwaysShowHorizontal, alwaysShowVertical, options) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @param {GUILayoutOption[]} options
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, horizontalScrollbar, verticalScrollbar, options) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {GUIStyle} style
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, style) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, style, options) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @param {GUILayoutOption[]} options
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, alwaysShowHorizontal, alwaysShowVertical, horizontalScrollbar, verticalScrollbar, options) {}
  /**
   * @param {Vector2} scrollPosition
   * @param {boolean} alwaysShowHorizontal
   * @param {boolean} alwaysShowVertical
   * @param {GUIStyle} horizontalScrollbar
   * @param {GUIStyle} verticalScrollbar
   * @param {GUIStyle} background
   * @param {GUILayoutOption[]} options
   * @returns {Vector2}
   */
  static BeginScrollView(scrollPosition, alwaysShowHorizontal, alwaysShowVertical, horizontalScrollbar, verticalScrollbar, background, options) {}
  /**
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginVertical(options) {}
  /**
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginVertical(style, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginVertical(text, style, options) {}
  /**
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginVertical(image, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static BeginVertical(content, style, options) {}
  /**
   * @param {Texture} image
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Box(image, options) {}
  /**
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Box(text, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Box(content, options) {}
  /**
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Box(image, style, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Box(text, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Box(content, style, options) {}
  /**
   * @param {Texture} image
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Button(image, options) {}
  /**
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Button(text, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Button(content, options) {}
  /**
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Button(image, style, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Button(text, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Button(content, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static DoBox(content, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static DoButton(content, style, options) {}
  /**
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static DoHorizontalSlider(value, leftValue, rightValue, slider, thumb, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static DoLabel(content, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static DoRepeatButton(content, style, options) {}
  /**
   * @param {string} text
   * @param {number} maxLength
   * @param {boolean} multiline
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static DoTextField(text, maxLength, multiline, style, options) {}
  /**
   * @param {boolean} value
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static DoToggle(value, content, style, options) {}
  /**
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static DoVerticalSlider(value, leftValue, rightValue, slider, thumb, options) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static DoWindow(id, screenRect, func, content, style, options) {}
  /**
   * @returns {void}
   */
  static EndArea() {}
  /**
   * @returns {void}
   */
  static EndHorizontal() {}
  /**
   * @returns {void}
   */
  static EndScrollView() {}
  /**
   * @param {boolean} handleScrollWheel
   * @returns {void}
   */
  static EndScrollView(handleScrollWheel) {}
  /**
   * @returns {void}
   */
  static EndVertical() {}
  /**
   * @param {boolean} expand
   * @returns {GUILayoutOption}
   */
  static ExpandHeight(expand) {}
  /**
   * @param {boolean} expand
   * @returns {GUILayoutOption}
   */
  static ExpandWidth(expand) {}
  /**
   * @returns {void}
   */
  static FlexibleSpace() {}
  /**
   * @param {number} height
   * @returns {GUILayoutOption}
   */
  static Height(height) {}
  /**
   * @param {number} value
   * @param {number} size
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static HorizontalScrollbar(value, size, leftValue, rightValue, options) {}
  /**
   * @param {number} value
   * @param {number} size
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static HorizontalScrollbar(value, size, leftValue, rightValue, style, options) {}
  /**
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static HorizontalSlider(value, leftValue, rightValue, options) {}
  /**
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static HorizontalSlider(value, leftValue, rightValue, slider, thumb, options) {}
  /**
   * @param {Texture} image
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Label(image, options) {}
  /**
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Label(text, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Label(content, options) {}
  /**
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Label(image, style, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Label(text, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {void}
   */
  static Label(content, style, options) {}
  /**
   * @param {number} maxHeight
   * @returns {GUILayoutOption}
   */
  static MaxHeight(maxHeight) {}
  /**
   * @param {number} maxWidth
   * @returns {GUILayoutOption}
   */
  static MaxWidth(maxWidth) {}
  /**
   * @param {number} minHeight
   * @returns {GUILayoutOption}
   */
  static MinHeight(minHeight) {}
  /**
   * @param {number} minWidth
   * @returns {GUILayoutOption}
   */
  static MinWidth(minWidth) {}
  /**
   * @param {string} password
   * @param {string} maskChar
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static PasswordField(password, maskChar, options) {}
  /**
   * @param {string} password
   * @param {string} maskChar
   * @param {number} maxLength
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static PasswordField(password, maskChar, maxLength, options) {}
  /**
   * @param {string} password
   * @param {string} maskChar
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static PasswordField(password, maskChar, style, options) {}
  /**
   * @param {string} password
   * @param {string} maskChar
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static PasswordField(password, maskChar, maxLength, style, options) {}
  /**
   * @param {Texture} image
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static RepeatButton(image, options) {}
  /**
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static RepeatButton(text, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static RepeatButton(content, options) {}
  /**
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static RepeatButton(image, style, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static RepeatButton(text, style, options) {}
  /**
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static RepeatButton(content, style, options) {}
  /**
   * @param {number} selected
   * @param {String[]} texts
   * @param {number} xCount
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static SelectionGrid(selected, texts, xCount, options) {}
  /**
   * @param {number} selected
   * @param {Texture[]} images
   * @param {number} xCount
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static SelectionGrid(selected, images, xCount, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} content
   * @param {number} xCount
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static SelectionGrid(selected, content, xCount, options) {}
  /**
   * @param {number} selected
   * @param {String[]} texts
   * @param {number} xCount
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static SelectionGrid(selected, texts, xCount, style, options) {}
  /**
   * @param {number} selected
   * @param {Texture[]} images
   * @param {number} xCount
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static SelectionGrid(selected, images, xCount, style, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {number} xCount
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static SelectionGrid(selected, contents, xCount, style, options) {}
  /**
   * @param {number} pixels
   * @returns {void}
   */
  static Space(pixels) {}
  /**
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextArea(text, options) {}
  /**
   * @param {string} text
   * @param {number} maxLength
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextArea(text, maxLength, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextArea(text, style, options) {}
  /**
   * @param {string} text
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextArea(text, maxLength, style, options) {}
  /**
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextField(text, options) {}
  /**
   * @param {string} text
   * @param {number} maxLength
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextField(text, maxLength, options) {}
  /**
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextField(text, style, options) {}
  /**
   * @param {string} text
   * @param {number} maxLength
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {string}
   */
  static TextField(text, maxLength, style, options) {}
  /**
   * @param {boolean} value
   * @param {Texture} image
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Toggle(value, image, options) {}
  /**
   * @param {boolean} value
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Toggle(value, text, options) {}
  /**
   * @param {boolean} value
   * @param {GUIContent} content
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Toggle(value, content, options) {}
  /**
   * @param {boolean} value
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Toggle(value, image, style, options) {}
  /**
   * @param {boolean} value
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Toggle(value, text, style, options) {}
  /**
   * @param {boolean} value
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {boolean}
   */
  static Toggle(value, content, style, options) {}
  /**
   * @param {number} selected
   * @param {String[]} texts
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, texts, options) {}
  /**
   * @param {number} selected
   * @param {Texture[]} images
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, images, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, contents, options) {}
  /**
   * @param {number} selected
   * @param {String[]} texts
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, texts, style, options) {}
  /**
   * @param {number} selected
   * @param {Texture[]} images
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, images, style, options) {}
  /**
   * @param {number} selected
   * @param {String[]} texts
   * @param {GUIStyle} style
   * @param {number} buttonSize
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, texts, style, buttonSize, options) {}
  /**
   * @param {number} selected
   * @param {Texture[]} images
   * @param {GUIStyle} style
   * @param {number} buttonSize
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, images, style, buttonSize, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, contents, style, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {GUIStyle} style
   * @param {number} buttonSize
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, contents, style, buttonSize, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {Boolean[]} enabled
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, contents, enabled, style, options) {}
  /**
   * @param {number} selected
   * @param {GUIContent[]} contents
   * @param {Boolean[]} enabled
   * @param {GUIStyle} style
   * @param {number} buttonSize
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static Toolbar(selected, contents, enabled, style, buttonSize, options) {}
  /**
   * @param {number} value
   * @param {number} size
   * @param {number} topValue
   * @param {number} bottomValue
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static VerticalScrollbar(value, size, topValue, bottomValue, options) {}
  /**
   * @param {number} value
   * @param {number} size
   * @param {number} topValue
   * @param {number} bottomValue
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static VerticalScrollbar(value, size, topValue, bottomValue, style, options) {}
  /**
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static VerticalSlider(value, leftValue, rightValue, options) {}
  /**
   * @param {number} value
   * @param {number} leftValue
   * @param {number} rightValue
   * @param {GUIStyle} slider
   * @param {GUIStyle} thumb
   * @param {GUILayoutOption[]} options
   * @returns {number}
   */
  static VerticalSlider(value, leftValue, rightValue, slider, thumb, options) {}
  /**
   * @param {number} width
   * @returns {GUILayoutOption}
   */
  static Width(width) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {string} text
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static Window(id, screenRect, func, text, options) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {Texture} image
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static Window(id, screenRect, func, image, options) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static Window(id, screenRect, func, content, options) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {string} text
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static Window(id, screenRect, func, text, style, options) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {Texture} image
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static Window(id, screenRect, func, image, style, options) {}
  /**
   * @param {number} id
   * @param {Rect} screenRect
   * @param {GUI.WindowFunction} func
   * @param {GUIContent} content
   * @param {GUIStyle} style
   * @param {GUILayoutOption[]} options
   * @returns {Rect}
   */
  static Window(id, screenRect, func, content, style, options) {}
}
class GUISkin {
  constructor() {
    /**@type {Font}*/
    this.m_Font = null;
    /**@type {GUIStyle}*/
    this.m_box = null;
    /**@type {GUIStyle}*/
    this.m_button = null;
    /**@type {GUIStyle}*/
    this.m_toggle = null;
    /**@type {GUIStyle}*/
    this.m_label = null;
    /**@type {GUIStyle}*/
    this.m_textField = null;
    /**@type {GUIStyle}*/
    this.m_textArea = null;
    /**@type {GUIStyle}*/
    this.m_window = null;
    /**@type {GUIStyle}*/
    this.m_horizontalSlider = null;
    /**@type {GUIStyle}*/
    this.m_horizontalSliderThumb = null;
    /**@type {GUIStyle}*/
    this.m_horizontalSliderThumbExtent = null;
    /**@type {GUIStyle}*/
    this.m_verticalSlider = null;
    /**@type {GUIStyle}*/
    this.m_verticalSliderThumb = null;
    /**@type {GUIStyle}*/
    this.m_verticalSliderThumbExtent = null;
    /**@type {GUIStyle}*/
    this.m_SliderMixed = null;
    /**@type {GUIStyle}*/
    this.m_horizontalScrollbar = null;
    /**@type {GUIStyle}*/
    this.m_horizontalScrollbarThumb = null;
    /**@type {GUIStyle}*/
    this.m_horizontalScrollbarLeftButton = null;
    /**@type {GUIStyle}*/
    this.m_horizontalScrollbarRightButton = null;
    /**@type {GUIStyle}*/
    this.m_verticalScrollbar = null;
    /**@type {GUIStyle}*/
    this.m_verticalScrollbarThumb = null;
    /**@type {GUIStyle}*/
    this.m_verticalScrollbarUpButton = null;
    /**@type {GUIStyle}*/
    this.m_verticalScrollbarDownButton = null;
    /**@type {GUIStyle}*/
    this.m_ScrollView = null;
    /**@type {GUIStyle[]}*/
    this.m_CustomStyles = null;
    /**@type {GUISettings}*/
    this.m_Settings = null;
    /**@type {Dictionary}*/
    this.m_Styles = null;
  }
  /**@type {GUIStyle}*/
  static ms_Error;
  /**@type {GUISkin.SkinChangedDelegate}*/
  static m_SkinChanged;
  /**@type {GUISkin}*/
  static current;
  /**
   * @returns {void}
   */
  Apply() {}
  /**
   * @returns {void}
   */
  BuildStyleCache() {}
  /**
   * @returns {void}
   */
  static CleanupRoots() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {string} styleName
   * @returns {GUIStyle}
   */
  FindStyle(styleName) {}
  /**
   * @returns {IEnumerator}
   */
  GetEnumerator() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {string} styleName
   * @returns {GUIStyle}
   */
  GetStyle(styleName) {}
  /**
   * @returns {void}
   */
  MakeCurrent() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  OnEnable() {}
  /**
   * @returns {void}
   */
  SetDirty() {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {GUIStyle}*/
  get box() {}
  /**
 * @param {GUIStyle} value
 */
  set box(value) {}
  /**@type {GUIStyle}*/
  get button() {}
  /**
 * @param {GUIStyle} value
 */
  set button(value) {}
  /**@type {GUIStyle[]}*/
  get customStyles() {}
  /**
 * @param {GUIStyle[]} value
 */
  set customStyles(value) {}
  /**@type {GUIStyle}*/
  static get error() {}
  /**@type {Font}*/
  get font() {}
  /**
 * @param {Font} value
 */
  set font(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {GUIStyle}*/
  get horizontalScrollbar() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalScrollbar(value) {}
  /**@type {GUIStyle}*/
  get horizontalScrollbarLeftButton() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalScrollbarLeftButton(value) {}
  /**@type {GUIStyle}*/
  get horizontalScrollbarRightButton() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalScrollbarRightButton(value) {}
  /**@type {GUIStyle}*/
  get horizontalScrollbarThumb() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalScrollbarThumb(value) {}
  /**@type {GUIStyle}*/
  get horizontalSlider() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalSlider(value) {}
  /**@type {GUIStyle}*/
  get horizontalSliderThumb() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalSliderThumb(value) {}
  /**@type {GUIStyle}*/
  get horizontalSliderThumbExtent() {}
  /**
 * @param {GUIStyle} value
 */
  set horizontalSliderThumbExtent(value) {}
  /**@type {GUIStyle}*/
  get label() {}
  /**
 * @param {GUIStyle} value
 */
  set label(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {GUIStyle}*/
  get scrollView() {}
  /**
 * @param {GUIStyle} value
 */
  set scrollView(value) {}
  /**@type {GUISettings}*/
  get settings() {}
  /**@type {GUIStyle}*/
  get sliderMixed() {}
  /**
 * @param {GUIStyle} value
 */
  set sliderMixed(value) {}
  /**@type {GUIStyle}*/
  get textArea() {}
  /**
 * @param {GUIStyle} value
 */
  set textArea(value) {}
  /**@type {GUIStyle}*/
  get textField() {}
  /**
 * @param {GUIStyle} value
 */
  set textField(value) {}
  /**@type {GUIStyle}*/
  get toggle() {}
  /**
 * @param {GUIStyle} value
 */
  set toggle(value) {}
  /**@type {GUIStyle}*/
  get verticalScrollbar() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalScrollbar(value) {}
  /**@type {GUIStyle}*/
  get verticalScrollbarDownButton() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalScrollbarDownButton(value) {}
  /**@type {GUIStyle}*/
  get verticalScrollbarThumb() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalScrollbarThumb(value) {}
  /**@type {GUIStyle}*/
  get verticalScrollbarUpButton() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalScrollbarUpButton(value) {}
  /**@type {GUIStyle}*/
  get verticalSlider() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalSlider(value) {}
  /**@type {GUIStyle}*/
  get verticalSliderThumb() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalSliderThumb(value) {}
  /**@type {GUIStyle}*/
  get verticalSliderThumbExtent() {}
  /**
 * @param {GUIStyle} value
 */
  set verticalSliderThumbExtent(value) {}
  /**@type {GUIStyle}*/
  get window() {}
  /**
 * @param {GUIStyle} value
 */
  set window(value) {}
}
class GUIStyle {
  /**
   * @param {GUIStyle} other
   */
  constructor(other) {
    /**@type {IntPtr}*/
    this.m_Ptr = null;
    /**@type {GUIStyleState}*/
    this.m_Normal = null;
    /**@type {GUIStyleState}*/
    this.m_Hover = null;
    /**@type {GUIStyleState}*/
    this.m_Active = null;
    /**@type {GUIStyleState}*/
    this.m_Focused = null;
    /**@type {GUIStyleState}*/
    this.m_OnNormal = null;
    /**@type {GUIStyleState}*/
    this.m_OnHover = null;
    /**@type {GUIStyleState}*/
    this.m_OnActive = null;
    /**@type {GUIStyleState}*/
    this.m_OnFocused = null;
    /**@type {RectOffset}*/
    this.m_Border = null;
    /**@type {RectOffset}*/
    this.m_Padding = null;
    /**@type {RectOffset}*/
    this.m_Margin = null;
    /**@type {RectOffset}*/
    this.m_Overflow = null;
    /**@type {string}*/
    this.m_Name = null;
  }
  /**@type {boolean}*/
  static showKeyboardFocus;
  /**@type {GUIStyle}*/
  static s_None;
  /**
   * @param {number} idx
   * @param {IntPtr} srcRectOffset
   * @returns {void}
   */
  AssignRectOffset(idx, srcRectOffset) {}
  /**
   * @param {number} idx
   * @param {IntPtr} srcStyleState
   * @returns {void}
   */
  AssignStyleState(idx, srcStyleState) {}
  /**
   * @param {GUIContent} content
   * @param {number} width
   * @returns {number}
   */
  CalcHeight(content, width) {}
  /**
   * @param {Vector2} contentSize
   * @returns {Vector2}
   */
  CalcScreenSize(contentSize) {}
  /**
   * @param {GUIContent} content
   * @returns {Vector2}
   */
  CalcSize(content) {}
  /**
   * @param {GUIContent} content
   * @param {Vector2} constraints
   * @returns {Vector2}
   */
  CalcSizeWithConstraints(content, constraints) {}
  /**
   * @returns {void}
   */
  static CleanupRoots() {}
  /**
   * @param {Rect} position
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @returns {void}
   */
  Draw(position, isHover, isActive, on, hasKeyboardFocus) {}
  /**
   * @param {Rect} position
   * @param {string} text
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @returns {void}
   */
  Draw(position, text, isHover, isActive, on, hasKeyboardFocus) {}
  /**
   * @param {Rect} position
   * @param {Texture} image
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @returns {void}
   */
  Draw(position, image, isHover, isActive, on, hasKeyboardFocus) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @returns {void}
   */
  Draw(position, content, isHover, isActive, on, hasKeyboardFocus) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @returns {void}
   */
  Draw(position, content, controlID) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @param {boolean} on
   * @returns {void}
   */
  Draw(position, content, controlID, on) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @param {boolean} on
   * @param {boolean} hover
   * @returns {void}
   */
  Draw(position, content, controlID, on, hover) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlId
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @returns {void}
   */
  Draw(position, content, controlId, isHover, isActive, on, hasKeyboardFocus) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @param {number} character
   * @returns {void}
   */
  DrawCursor(position, content, controlID, character) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {boolean} isActive
   * @param {boolean} hasKeyboardFocus
   * @param {number} firstSelectedCharacter
   * @param {number} lastSelectedCharacter
   * @param {boolean} drawSelectionAsComposition
   * @param {Color} selectionColor
   * @returns {void}
   */
  DrawWithTextSelection(position, content, isActive, hasKeyboardFocus, firstSelectedCharacter, lastSelectedCharacter, drawSelectionAsComposition, selectionColor) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @param {number} firstSelectedCharacter
   * @param {number} lastSelectedCharacter
   * @param {boolean} drawSelectionAsComposition
   * @returns {void}
   */
  DrawWithTextSelection(position, content, controlID, firstSelectedCharacter, lastSelectedCharacter, drawSelectionAsComposition) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @param {number} firstSelectedCharacter
   * @param {number} lastSelectedCharacter
   * @returns {void}
   */
  DrawWithTextSelection(position, content, controlID, firstSelectedCharacter, lastSelectedCharacter) {}
  /**
   * @returns {void}
   */
  Finalize() {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} cursorStringIndex
   * @returns {Vector2}
   */
  GetCursorPixelPosition(position, content, cursorStringIndex) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {Vector2} cursorPixelPosition
   * @returns {number}
   */
  GetCursorStringIndex(position, content, cursorPixelPosition) {}
  /**
   * @param {string} text
   * @param {number} width
   * @returns {number}
   */
  GetNumCharactersThatFitWithinWidth(text, width) {}
  /**
   * @param {number} idx
   * @returns {IntPtr}
   */
  GetRectOffsetPtr(idx) {}
  /**
   * @param {number} idx
   * @returns {IntPtr}
   */
  GetStyleStatePtr(idx) {}
  /**
   * @param {GUIContent} content
   * @param {number} width
   * @returns {number}
   */
  Internal_CalcHeight(content, width) {}
  /**
   * @param {GUIContent} content
   * @returns {Vector2}
   */
  Internal_CalcMinMaxWidth(content) {}
  /**
   * @param {GUIContent} content
   * @returns {Vector2}
   */
  Internal_CalcSize(content) {}
  /**
   * @param {GUIContent} content
   * @param {Vector2} maxSize
   * @returns {Vector2}
   */
  Internal_CalcSizeWithConstraints(content, maxSize) {}
  /**
   * @param {GUIStyle} self
   * @param {GUIStyle} other
   * @returns {IntPtr}
   */
  static Internal_Copy(self, other) {}
  /**
   * @param {GUIStyle} self
   * @returns {IntPtr}
   */
  static Internal_Create(self) {}
  /**
   * @param {IntPtr} self
   * @returns {void}
   */
  static Internal_Destroy(self) {}
  /**
   * @param {Rect} screenRect
   * @param {GUIContent} content
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @returns {void}
   */
  Internal_Draw(screenRect, content, isHover, isActive, on, hasKeyboardFocus) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} controlID
   * @param {boolean} on
   * @returns {void}
   */
  Internal_Draw2(position, content, controlID, on) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} pos
   * @param {Color} cursorColor
   * @returns {void}
   */
  Internal_DrawCursor(position, content, pos, cursorColor) {}
  /**
   * @param {Rect} screenRect
   * @param {GUIContent} content
   * @param {boolean} isHover
   * @param {boolean} isActive
   * @param {boolean} on
   * @param {boolean} hasKeyboardFocus
   * @param {boolean} drawSelectionAsComposition
   * @param {number} cursorFirst
   * @param {number} cursorLast
   * @param {Color} cursorColor
   * @param {Color} selectionColor
   * @returns {void}
   */
  Internal_DrawWithTextSelection(screenRect, content, isHover, isActive, on, hasKeyboardFocus, drawSelectionAsComposition, cursorFirst, cursorLast, cursorColor, selectionColor) {}
  /**
   * @returns {number}
   */
  static Internal_GetCursorFlashOffset() {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {number} cursorStringIndex
   * @returns {Vector2}
   */
  Internal_GetCursorPixelPosition(position, content, cursorStringIndex) {}
  /**
   * @param {Rect} position
   * @param {GUIContent} content
   * @param {Vector2} cursorPixelPosition
   * @returns {number}
   */
  Internal_GetCursorStringIndex(position, content, cursorPixelPosition) {}
  /**
   * @param {Rect} localPosition
   * @param {GUIContent} mContent
   * @returns {Rect[]}
   */
  Internal_GetHyperlinksRect(localPosition, mContent) {}
  /**
   * @param {IntPtr} target
   * @returns {number}
   */
  static Internal_GetLineHeight(target) {}
  /**
   * @param {string} text
   * @param {number} width
   * @returns {number}
   */
  Internal_GetNumCharactersThatFitWithinWidth(text, width) {}
  /**
   * @param {Rect} localPosition
   * @param {GUIContent} mContent
   * @param {number} selectIndex
   * @param {number} cursorIndex
   * @returns {string}
   */
  Internal_GetSelectedRenderedText(localPosition, mContent, selectIndex, cursorIndex) {}
  /**
   * @returns {void}
   */
  InternalOnAfterDeserialize() {}
  /**
   * @param {string} tooltip
   * @returns {boolean}
   */
  static IsTooltipActive(tooltip) {}
  /**
   * @param {Font} font
   * @returns {void}
   */
  static SetDefaultFont(font) {}
  /**
   * @param {string} tooltip
   * @param {Rect} screenRect
   * @returns {void}
   */
  static SetMouseTooltip(tooltip, screenRect) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {GUIStyleState}*/
  get active() {}
  /**
 * @param {GUIStyleState} value
 */
  set active(value) {}
  /**@type {number}*/
  get alignment() {}
  /**
 * @param {number} value
 */
  set alignment(value) {}
  /**@type {RectOffset}*/
  get border() {}
  /**
 * @param {RectOffset} value
 */
  set border(value) {}
  /**@type {Vector2}*/
  get clipOffset() {}
  /**
 * @param {Vector2} value
 */
  set clipOffset(value) {}
  /**@type {number}*/
  get clipping() {}
  /**
 * @param {number} value
 */
  set clipping(value) {}
  /**@type {Vector2}*/
  get contentOffset() {}
  /**
 * @param {Vector2} value
 */
  set contentOffset(value) {}
  /**@type {number}*/
  get fixedHeight() {}
  /**
 * @param {number} value
 */
  set fixedHeight(value) {}
  /**@type {number}*/
  get fixedWidth() {}
  /**
 * @param {number} value
 */
  set fixedWidth(value) {}
  /**@type {GUIStyleState}*/
  get focused() {}
  /**
 * @param {GUIStyleState} value
 */
  set focused(value) {}
  /**@type {Font}*/
  get font() {}
  /**
 * @param {Font} value
 */
  set font(value) {}
  /**@type {number}*/
  get fontSize() {}
  /**
 * @param {number} value
 */
  set fontSize(value) {}
  /**@type {number}*/
  get fontStyle() {}
  /**
 * @param {number} value
 */
  set fontStyle(value) {}
  /**@type {GUIStyleState}*/
  get hover() {}
  /**
 * @param {GUIStyleState} value
 */
  set hover(value) {}
  /**@type {number}*/
  get imagePosition() {}
  /**
 * @param {number} value
 */
  set imagePosition(value) {}
  /**@type {Vector2}*/
  get Internal_clipOffset() {}
  /**
 * @param {Vector2} value
 */
  set Internal_clipOffset(value) {}
  /**@type {boolean}*/
  get isHeightDependantOnWidth() {}
  /**@type {number}*/
  get lineHeight() {}
  /**@type {RectOffset}*/
  get margin() {}
  /**
 * @param {RectOffset} value
 */
  set margin(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {GUIStyle}*/
  static get none() {}
  /**@type {GUIStyleState}*/
  get normal() {}
  /**
 * @param {GUIStyleState} value
 */
  set normal(value) {}
  /**@type {GUIStyleState}*/
  get onActive() {}
  /**
 * @param {GUIStyleState} value
 */
  set onActive(value) {}
  /**@type {GUIStyleState}*/
  get onFocused() {}
  /**
 * @param {GUIStyleState} value
 */
  set onFocused(value) {}
  /**@type {GUIStyleState}*/
  get onHover() {}
  /**
 * @param {GUIStyleState} value
 */
  set onHover(value) {}
  /**@type {GUIStyleState}*/
  get onNormal() {}
  /**
 * @param {GUIStyleState} value
 */
  set onNormal(value) {}
  /**@type {RectOffset}*/
  get overflow() {}
  /**
 * @param {RectOffset} value
 */
  set overflow(value) {}
  /**@type {RectOffset}*/
  get padding() {}
  /**
 * @param {RectOffset} value
 */
  set padding(value) {}
  /**@type {string}*/
  get rawName() {}
  /**
 * @param {string} value
 */
  set rawName(value) {}
  /**@type {boolean}*/
  get richText() {}
  /**
 * @param {boolean} value
 */
  set richText(value) {}
  /**@type {boolean}*/
  get stretchHeight() {}
  /**
 * @param {boolean} value
 */
  set stretchHeight(value) {}
  /**@type {boolean}*/
  get stretchWidth() {}
  /**
 * @param {boolean} value
 */
  set stretchWidth(value) {}
  /**@type {boolean}*/
  get wordWrap() {}
  /**
 * @param {boolean} value
 */
  set wordWrap(value) {}
}
class Texture {
  constructor() {
  }
  /**@type {number}*/
  static GenerateAllMips;
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
   * @returns {number}
   */
  GetDataHeight() {}
  /**
   * @returns {number}
   */
  GetDataWidth() {}
  /**
   * @returns {number}
   */
  GetDimension() {}
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
   * @returns {void}
   */
  IncrementUpdateCount() {}
  /**
   * @returns {number}
   */
  Internal_GetActiveTextureColorSpace() {}
  /**
   * @returns {number}
   */
  Internal_GetStoredColorSpace() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {number} forcedMin
   * @param {number} globalMax
   * @returns {void}
   */
  static SetGlobalAnisotropicFilteringLimits(forcedMin, globalMax) {}
  /**
   * @returns {void}
   */
  static SetStreamingTextureMaterialDebugProperties() {}
  /**
   * @returns {string}
   */
  ToString() {}
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
  get activeTextureColorSpace() {}
  /**@type {boolean}*/
  static get allowThreadedTextureCreation() {}
  /**
 * @param {boolean} value
 */
  static set allowThreadedTextureCreation(value) {}
  /**@type {number}*/
  get anisoLevel() {}
  /**
 * @param {number} value
 */
  set anisoLevel(value) {}
  /**@type {number}*/
  static get anisotropicFiltering() {}
  /**
 * @param {number} value
 */
  static set anisotropicFiltering(value) {}
  /**@type {number}*/
  static get currentTextureMemory() {}
  /**@type {number}*/
  static get desiredTextureMemory() {}
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
  static get globalMipmapLimit() {}
  /**
 * @param {number} value
 */
  static set globalMipmapLimit(value) {}
  /**@type {number}*/
  get graphicsFormat() {}
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
  get isDataSRGB() {}
  /**@type {boolean}*/
  get isNativeTexture() {}
  /**@type {boolean}*/
  get isReadable() {}
  /**@type {number}*/
  static get masterTextureLimit() {}
  /**
 * @param {number} value
 */
  static set masterTextureLimit(value) {}
  /**@type {number}*/
  get mipMapBias() {}
  /**
 * @param {number} value
 */
  set mipMapBias(value) {}
  /**@type {number}*/
  get mipmapCount() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {number}*/
  static get nonStreamingTextureCount() {}
  /**@type {number}*/
  static get nonStreamingTextureMemory() {}
  /**@type {number}*/
  static get streamingMipmapUploadCount() {}
  /**@type {number}*/
  static get streamingRendererCount() {}
  /**@type {number}*/
  static get streamingTextureCount() {}
  /**@type {boolean}*/
  static get streamingTextureDiscardUnusedMips() {}
  /**
 * @param {boolean} value
 */
  static set streamingTextureDiscardUnusedMips(value) {}
  /**@type {boolean}*/
  static get streamingTextureForceLoadAll() {}
  /**
 * @param {boolean} value
 */
  static set streamingTextureForceLoadAll(value) {}
  /**@type {number}*/
  static get streamingTextureLoadingCount() {}
  /**@type {number}*/
  static get streamingTexturePendingLoadCount() {}
  /**@type {number}*/
  static get targetTextureMemory() {}
  /**@type {Vector2}*/
  get texelSize() {}
  /**@type {number}*/
  static get totalTextureMemory() {}
  /**@type {number}*/
  get updateCount() {}
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
class GameObject {
  /**
   * @param {string} name
   */
  constructor(name) {
  }
  /**
   * @param {Type} componentType
   * @returns {Component}
   */
  AddComponent(componentType) {}
  /**
   * @returns {T}
   */
  AddComponent() {}
  /**
   * @param {string} className
   * @returns {Component}
   */
  AddComponentInternal(className) {}
  /**
   * @param {string} methodName
   * @param {number} options
   * @returns {void}
   */
  BroadcastMessage(methodName, options) {}
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
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @param {number} type
   * @returns {GameObject}
   */
  static CreatePrimitive(type) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {string} name
   * @returns {GameObject}
   */
  static Find(name) {}
  /**
   * @param {string} tag
   * @returns {GameObject[]}
   */
  static FindGameObjectsWithTag(tag) {}
  /**
   * @param {string} tag
   * @returns {GameObject}
   */
  static FindGameObjectWithTag(tag) {}
  /**
   * @param {string} tag
   * @returns {GameObject}
   */
  static FindWithTag(tag) {}
  /**
   * @returns {T}
   */
  GetComponent() {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @param {string} type
   * @returns {Component}
   */
  GetComponent(type) {}
  /**
   * @param {number} index
   * @returns {Component}
   */
  GetComponentAtIndex(index) {}
  /**
   * @param {number} index
   * @returns {T}
   */
  GetComponentAtIndex(index) {}
  /**
   * @param {string} type
   * @returns {Component}
   */
  GetComponentByName(type) {}
  /**
   * @param {string} type
   * @param {boolean} caseSensitive
   * @returns {Component}
   */
  GetComponentByNameWithCase(type, caseSensitive) {}
  /**
   * @returns {number}
   */
  GetComponentCount() {}
  /**
   * @param {Type} type
   * @param {IntPtr} oneFurtherThanResultValue
   * @returns {void}
   */
  GetComponentFastPath(type, oneFurtherThanResultValue) {}
  /**
   * @param {Type} type
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInChildren(type, includeInactive) {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponentInChildren(type) {}
  /**
   * @returns {T}
   */
  GetComponentInChildren() {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInChildren(includeInactive) {}
  /**
   * @param {Component} component
   * @returns {number}
   */
  GetComponentIndex(component) {}
  /**
   * @param {Type} type
   * @param {boolean} includeInactive
   * @returns {Component}
   */
  GetComponentInParent(type, includeInactive) {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  GetComponentInParent(type) {}
  /**
   * @returns {T}
   */
  GetComponentInParent() {}
  /**
   * @param {boolean} includeInactive
   * @returns {T}
   */
  GetComponentInParent(includeInactive) {}
  /**
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponents(type) {}
  /**
   * @returns {T[]}
   */
  GetComponents() {}
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
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponentsInChildren(type) {}
  /**
   * @param {Type} type
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInChildren(type, includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInChildren(includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInChildren(includeInactive, results) {}
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
   * @param {Type} type
   * @returns {Component[]}
   */
  GetComponentsInParent(type) {}
  /**
   * @param {Type} type
   * @param {boolean} includeInactive
   * @returns {Component[]}
   */
  GetComponentsInParent(type, includeInactive) {}
  /**
   * @param {boolean} includeInactive
   * @param {List} results
   * @returns {void}
   */
  GetComponentsInParent(includeInactive, results) {}
  /**
   * @param {boolean} includeInactive
   * @returns {T[]}
   */
  GetComponentsInParent(includeInactive) {}
  /**
   * @returns {T[]}
   */
  GetComponentsInParent() {}
  /**
   * @param {Type} type
   * @param {boolean} useSearchTypeAsArrayReturnType
   * @param {boolean} recursive
   * @param {boolean} includeInactive
   * @param {boolean} reverse
   * @param {Object} resultList
   * @returns {any[]}
   */
  GetComponentsInternal(type, useSearchTypeAsArrayReturnType, recursive, includeInactive, reverse, resultList) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {number} instanceID
   * @returns {Scene}
   */
  static GetScene(instanceID) {}
  /**
   * @param {number} sourceInstanceID
   * @param {IntPtr} newInstanceIDs
   * @param {IntPtr} newTransformInstanceIDs
   * @param {number} count
   * @param {Scene} destinationScene
   * @returns {void}
   */
  static InstantiateGameObjects(sourceInstanceID, newInstanceIDs, newTransformInstanceIDs, count, destinationScene) {}
  /**
   * @param {number} sourceInstanceID
   * @param {number} count
   * @param {NativeArray} newInstanceIDs
   * @param {NativeArray} newTransformInstanceIDs
   * @param {Scene} destinationScene
   * @returns {void}
   */
  static InstantiateGameObjects(sourceInstanceID, count, newInstanceIDs, newTransformInstanceIDs, destinationScene) {}
  /**
   * @param {Type} componentType
   * @returns {Component}
   */
  Internal_AddComponentWithType(componentType) {}
  /**
   * @param {GameObject} self
   * @param {string} name
   * @returns {void}
   */
  static Internal_CreateGameObject(self, name) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {number} index
   * @returns {Component}
   */
  QueryComponentAtIndex(index) {}
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
  SendMessage(methodName, value, options) {}
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
   * @param {number} options
   * @returns {void}
   */
  SendMessageUpwards(methodName, options) {}
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
   * @param {boolean} value
   * @returns {void}
   */
  SetActive(value) {}
  /**
   * @param {boolean} state
   * @returns {void}
   */
  SetActiveRecursively(state) {}
  /**
   * @param {IntPtr} instanceIds
   * @param {number} instanceCount
   * @param {boolean} active
   * @returns {void}
   */
  static SetGameObjectsActive(instanceIds, instanceCount, active) {}
  /**
   * @param {NativeArray} instanceIDs
   * @param {boolean} active
   * @returns {void}
   */
  static SetGameObjectsActive(instanceIDs, active) {}
  /**
   * @param {ReadOnlySpan} instanceIDs
   * @param {boolean} active
   * @returns {void}
   */
  static SetGameObjectsActive(instanceIDs, active) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {Type} type
   * @param {IntPtr} oneFurtherThanResultValue
   * @returns {void}
   */
  TryGetComponentFastPath(type, oneFurtherThanResultValue) {}
  /**
   * @param {Type} type
   * @returns {Component}
   */
  TryGetComponentInternal(type) {}
  /**@type {boolean}*/
  get active() {}
  /**
 * @param {boolean} value
 */
  set active(value) {}
  /**@type {boolean}*/
  get activeInHierarchy() {}
  /**@type {boolean}*/
  get activeSelf() {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get isStatic() {}
  /**
 * @param {boolean} value
 */
  set isStatic(value) {}
  /**@type {boolean}*/
  get isStaticBatchable() {}
  /**@type {number}*/
  get layer() {}
  /**
 * @param {number} value
 */
  set layer(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {Scene}*/
  get scene() {}
  /**@type {number}*/
  get sceneCullingMask() {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {Transform}*/
  get transform() {}
}
class Component {
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
   * @param {Type} searchType
   * @param {Object} resultList
   * @returns {void}
   */
  GetComponentsForListInternal(searchType, resultList) {}
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
   * @returns {void}
   */
  MarkDirty() {}
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
   * @returns {string}
   */
  ToString() {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
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
}
class Shader {
  constructor() {
  }
  /**
   * @param {Shader} s
   * @param {number} propertyIndex
   * @returns {void}
   */
  static CheckPropertyIndex(s, propertyIndex) {}
  /**
   * @param {string} keyword
   * @returns {void}
   */
  static DisableKeyword(keyword) {}
  /**
   * @param {GlobalKeyword} keyword
   * @returns {void}
   */
  static DisableKeywordFast(keyword) {}
  /**
   * @param {string} keyword
   * @returns {void}
   */
  static EnableKeyword(keyword) {}
  /**
   * @param {GlobalKeyword} keyword
   * @returns {void}
   */
  static EnableKeywordFast(keyword) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  static ExtractGlobalFloatArray(name, values) {}
  /**
   * @param {number} name
   * @param {Single[]} val
   * @returns {void}
   */
  static ExtractGlobalFloatArrayImpl(name, val) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  static ExtractGlobalMatrixArray(name, values) {}
  /**
   * @param {number} name
   * @param {Matrix4x4[]} val
   * @returns {void}
   */
  static ExtractGlobalMatrixArrayImpl(name, val) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  static ExtractGlobalVectorArray(name, values) {}
  /**
   * @param {number} name
   * @param {Vector4[]} val
   * @returns {void}
   */
  static ExtractGlobalVectorArrayImpl(name, val) {}
  /**
   * @param {string} name
   * @returns {Shader}
   */
  static Find(name) {}
  /**
   * @param {string} name
   * @returns {Shader}
   */
  static FindBuiltin(name) {}
  /**
   * @param {number} passIndex
   * @param {ShaderTagId} tagName
   * @returns {ShaderTagId}
   */
  FindPassTagValue(passIndex, tagName) {}
  /**
   * @param {number} subshaderIndex
   * @param {number} passIndex
   * @param {ShaderTagId} tagName
   * @returns {ShaderTagId}
   */
  FindPassTagValue(subshaderIndex, passIndex, tagName) {}
  /**
   * @param {string} propertyName
   * @returns {number}
   */
  FindPropertyIndex(propertyName) {}
  /**
   * @param {number} subshaderIndex
   * @param {ShaderTagId} tagName
   * @returns {ShaderTagId}
   */
  FindSubshaderTagValue(subshaderIndex, tagName) {}
  /**
   * @returns {GlobalKeyword[]}
   */
  static GetAllGlobalKeywords() {}
  /**
   * @param {string} name
   * @returns {Shader}
   */
  GetDependency(name) {}
  /**
   * @returns {GlobalKeyword[]}
   */
  static GetEnabledGlobalKeywords() {}
  /**
   * @param {string} name
   * @returns {Color}
   */
  static GetGlobalColor(name) {}
  /**
   * @param {number} nameID
   * @returns {Color}
   */
  static GetGlobalColor(nameID) {}
  /**
   * @param {string} name
   * @returns {number}
   */
  static GetGlobalFloat(name) {}
  /**
   * @param {number} nameID
   * @returns {number}
   */
  static GetGlobalFloat(nameID) {}
  /**
   * @param {string} name
   * @returns {Single[]}
   */
  static GetGlobalFloatArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Single[]}
   */
  static GetGlobalFloatArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  static GetGlobalFloatArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  static GetGlobalFloatArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  static GetGlobalFloatArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Single[]}
   */
  static GetGlobalFloatArrayImpl(name) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  static GetGlobalFloatImpl(name) {}
  /**
   * @param {string} name
   * @returns {number}
   */
  static GetGlobalInt(name) {}
  /**
   * @param {number} nameID
   * @returns {number}
   */
  static GetGlobalInt(nameID) {}
  /**
   * @param {string} name
   * @returns {number}
   */
  static GetGlobalInteger(name) {}
  /**
   * @param {number} nameID
   * @returns {number}
   */
  static GetGlobalInteger(nameID) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  static GetGlobalIntImpl(name) {}
  /**
   * @param {string} name
   * @returns {Matrix4x4}
   */
  static GetGlobalMatrix(name) {}
  /**
   * @param {number} nameID
   * @returns {Matrix4x4}
   */
  static GetGlobalMatrix(nameID) {}
  /**
   * @param {string} name
   * @returns {Matrix4x4[]}
   */
  static GetGlobalMatrixArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Matrix4x4[]}
   */
  static GetGlobalMatrixArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  static GetGlobalMatrixArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  static GetGlobalMatrixArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  static GetGlobalMatrixArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Matrix4x4[]}
   */
  static GetGlobalMatrixArrayImpl(name) {}
  /**
   * @param {number} name
   * @returns {Matrix4x4}
   */
  static GetGlobalMatrixImpl(name) {}
  /**
   * @param {string} name
   * @returns {Texture}
   */
  static GetGlobalTexture(name) {}
  /**
   * @param {number} nameID
   * @returns {Texture}
   */
  static GetGlobalTexture(nameID) {}
  /**
   * @param {number} name
   * @returns {Texture}
   */
  static GetGlobalTextureImpl(name) {}
  /**
   * @param {string} name
   * @returns {Vector4}
   */
  static GetGlobalVector(name) {}
  /**
   * @param {number} nameID
   * @returns {Vector4}
   */
  static GetGlobalVector(nameID) {}
  /**
   * @param {string} name
   * @returns {Vector4[]}
   */
  static GetGlobalVectorArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Vector4[]}
   */
  static GetGlobalVectorArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  static GetGlobalVectorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  static GetGlobalVectorArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  static GetGlobalVectorArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Vector4[]}
   */
  static GetGlobalVectorArrayImpl(name) {}
  /**
   * @param {number} name
   * @returns {Vector4}
   */
  static GetGlobalVectorImpl(name) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {number} subshaderIndex
   * @returns {number}
   */
  GetPassCountInSubshader(subshaderIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {String[]}
   */
  static GetPropertyAttributes(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {String[]}
   */
  GetPropertyAttributes(propertyIndex) {}
  /**
   * @returns {number}
   */
  GetPropertyCount() {}
  /**
   * @param {number} propertyIndex
   * @returns {number}
   */
  GetPropertyDefaultFloatValue(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {number}
   */
  static GetPropertyDefaultIntValue(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {number}
   */
  GetPropertyDefaultIntValue(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {Vector4}
   */
  static GetPropertyDefaultValue(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {Vector4}
   */
  GetPropertyDefaultVectorValue(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {string}
   */
  static GetPropertyDescription(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {string}
   */
  GetPropertyDescription(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {number}
   */
  static GetPropertyFlags(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {number}
   */
  GetPropertyFlags(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {string}
   */
  static GetPropertyName(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {string}
   */
  GetPropertyName(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {number}
   */
  static GetPropertyNameId(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {number}
   */
  GetPropertyNameId(propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {Vector2}
   */
  GetPropertyRangeLimits(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {string}
   */
  static GetPropertyTextureDefaultName(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {string}
   */
  GetPropertyTextureDefaultName(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {number}
   */
  static GetPropertyTextureDimension(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {number}
   */
  GetPropertyTextureDimension(propertyIndex) {}
  /**
   * @param {Shader} shader
   * @param {number} propertyIndex
   * @returns {number}
   */
  static GetPropertyType(shader, propertyIndex) {}
  /**
   * @param {number} propertyIndex
   * @returns {number}
   */
  GetPropertyType(propertyIndex) {}
  /**
   * @param {number} name
   * @returns {string}
   */
  static IDToTag(name) {}
  /**
   * @param {number} passIndex
   * @param {number} tagName
   * @returns {number}
   */
  Internal_FindPassTagValue(passIndex, tagName) {}
  /**
   * @param {number} subShaderIndex
   * @param {number} passIndex
   * @param {number} tagName
   * @returns {number}
   */
  Internal_FindPassTagValueInSubShader(subShaderIndex, passIndex, tagName) {}
  /**
   * @param {number} subShaderIndex
   * @param {number} tagName
   * @returns {number}
   */
  Internal_FindSubshaderTagValue(subShaderIndex, tagName) {}
  /**
   * @param {string} keyword
   * @returns {boolean}
   */
  static IsKeywordEnabled(keyword) {}
  /**
   * @param {GlobalKeyword} keyword
   * @returns {boolean}
   */
  static IsKeywordEnabledFast(keyword) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {string} name
   * @returns {number}
   */
  static PropertyToID(name) {}
  /**
   * @param {string} name
   * @param {ComputeBuffer} value
   * @returns {void}
   */
  static SetGlobalBuffer(name, value) {}
  /**
   * @param {number} nameID
   * @param {ComputeBuffer} value
   * @returns {void}
   */
  static SetGlobalBuffer(nameID, value) {}
  /**
   * @param {string} name
   * @param {GraphicsBuffer} value
   * @returns {void}
   */
  static SetGlobalBuffer(name, value) {}
  /**
   * @param {number} nameID
   * @param {GraphicsBuffer} value
   * @returns {void}
   */
  static SetGlobalBuffer(nameID, value) {}
  /**
   * @param {number} name
   * @param {ComputeBuffer} value
   * @returns {void}
   */
  static SetGlobalBufferImpl(name, value) {}
  /**
   * @param {string} name
   * @param {Color} value
   * @returns {void}
   */
  static SetGlobalColor(name, value) {}
  /**
   * @param {number} nameID
   * @param {Color} value
   * @returns {void}
   */
  static SetGlobalColor(nameID, value) {}
  /**
   * @param {string} name
   * @param {ComputeBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  static SetGlobalConstantBuffer(name, value, offset, size) {}
  /**
   * @param {number} nameID
   * @param {ComputeBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  static SetGlobalConstantBuffer(nameID, value, offset, size) {}
  /**
   * @param {string} name
   * @param {GraphicsBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  static SetGlobalConstantBuffer(name, value, offset, size) {}
  /**
   * @param {number} nameID
   * @param {GraphicsBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  static SetGlobalConstantBuffer(nameID, value, offset, size) {}
  /**
   * @param {number} name
   * @param {ComputeBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  static SetGlobalConstantBufferImpl(name, value, offset, size) {}
  /**
   * @param {number} name
   * @param {GraphicsBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  static SetGlobalConstantGraphicsBufferImpl(name, value, offset, size) {}
  /**
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalFloat(name, value) {}
  /**
   * @param {number} nameID
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalFloat(nameID, value) {}
  /**
   * @param {number} name
   * @param {Single[]} values
   * @param {number} count
   * @returns {void}
   */
  static SetGlobalFloatArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  static SetGlobalFloatArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  static SetGlobalFloatArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Single[]} values
   * @returns {void}
   */
  static SetGlobalFloatArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Single[]} values
   * @returns {void}
   */
  static SetGlobalFloatArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Single[]} values
   * @param {number} count
   * @returns {void}
   */
  static SetGlobalFloatArrayImpl(name, values, count) {}
  /**
   * @param {number} name
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalFloatImpl(name, value) {}
  /**
   * @param {number} name
   * @param {GraphicsBuffer} value
   * @returns {void}
   */
  static SetGlobalGraphicsBufferImpl(name, value) {}
  /**
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalInt(name, value) {}
  /**
   * @param {number} nameID
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalInt(nameID, value) {}
  /**
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalInteger(name, value) {}
  /**
   * @param {number} nameID
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalInteger(nameID, value) {}
  /**
   * @param {number} name
   * @param {number} value
   * @returns {void}
   */
  static SetGlobalIntImpl(name, value) {}
  /**
   * @param {string} name
   * @param {Matrix4x4} value
   * @returns {void}
   */
  static SetGlobalMatrix(name, value) {}
  /**
   * @param {number} nameID
   * @param {Matrix4x4} value
   * @returns {void}
   */
  static SetGlobalMatrix(nameID, value) {}
  /**
   * @param {number} name
   * @param {Matrix4x4[]} values
   * @param {number} count
   * @returns {void}
   */
  static SetGlobalMatrixArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  static SetGlobalMatrixArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  static SetGlobalMatrixArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Matrix4x4[]} values
   * @returns {void}
   */
  static SetGlobalMatrixArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Matrix4x4[]} values
   * @returns {void}
   */
  static SetGlobalMatrixArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Matrix4x4[]} values
   * @param {number} count
   * @returns {void}
   */
  static SetGlobalMatrixArrayImpl(name, values, count) {}
  /**
   * @param {number} name
   * @param {Matrix4x4} value
   * @returns {void}
   */
  static SetGlobalMatrixImpl(name, value) {}
  /**
   * @param {number} name
   * @param {RenderTexture} value
   * @param {number} element
   * @returns {void}
   */
  static SetGlobalRenderTextureImpl(name, value, element) {}
  /**
   * @param {string} name
   * @param {Texture} value
   * @returns {void}
   */
  static SetGlobalTexture(name, value) {}
  /**
   * @param {number} nameID
   * @param {Texture} value
   * @returns {void}
   */
  static SetGlobalTexture(nameID, value) {}
  /**
   * @param {string} name
   * @param {RenderTexture} value
   * @param {number} element
   * @returns {void}
   */
  static SetGlobalTexture(name, value, element) {}
  /**
   * @param {number} nameID
   * @param {RenderTexture} value
   * @param {number} element
   * @returns {void}
   */
  static SetGlobalTexture(nameID, value, element) {}
  /**
   * @param {number} name
   * @param {Texture} value
   * @returns {void}
   */
  static SetGlobalTextureImpl(name, value) {}
  /**
   * @param {string} name
   * @param {Vector4} value
   * @returns {void}
   */
  static SetGlobalVector(name, value) {}
  /**
   * @param {number} nameID
   * @param {Vector4} value
   * @returns {void}
   */
  static SetGlobalVector(nameID, value) {}
  /**
   * @param {number} name
   * @param {Vector4[]} values
   * @param {number} count
   * @returns {void}
   */
  static SetGlobalVectorArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  static SetGlobalVectorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  static SetGlobalVectorArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Vector4[]} values
   * @returns {void}
   */
  static SetGlobalVectorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Vector4[]} values
   * @returns {void}
   */
  static SetGlobalVectorArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Vector4[]} values
   * @param {number} count
   * @returns {void}
   */
  static SetGlobalVectorArrayImpl(name, values, count) {}
  /**
   * @param {number} name
   * @param {Vector4} value
   * @returns {void}
   */
  static SetGlobalVectorImpl(name, value) {}
  /**
   * @param {GlobalKeyword} keyword
   * @param {boolean} value
   * @returns {void}
   */
  static SetKeywordFast(keyword, value) {}
  /**
   * @param {string} name
   * @returns {number}
   */
  static TagToID(name) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {void}
   */
  static WarmupAllShaders() {}
  /**@type {number}*/
  get disableBatching() {}
  /**@type {GlobalKeyword[]}*/
  static get enabledGlobalKeywords() {}
  /**@type {GlobalKeyword[]}*/
  static get globalKeywords() {}
  /**@type {number}*/
  static get globalMaximumLOD() {}
  /**
 * @param {number} value
 */
  static set globalMaximumLOD(value) {}
  /**@type {string}*/
  static get globalRenderPipeline() {}
  /**
 * @param {string} value
 */
  static set globalRenderPipeline(value) {}
  /**@type {number}*/
  static get globalShaderHardwareTier() {}
  /**
 * @param {number} value
 */
  static set globalShaderHardwareTier(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {boolean}*/
  get isSupported() {}
  /**@type {LocalKeywordSpace}*/
  get keywordSpace() {}
  /**@type {number}*/
  static get maximumChunksOverride() {}
  /**
 * @param {number} value
 */
  static set maximumChunksOverride(value) {}
  /**@type {number}*/
  get maximumLOD() {}
  /**
 * @param {number} value
 */
  set maximumLOD(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {number}*/
  get passCount() {}
  /**@type {number}*/
  get renderQueue() {}
  /**@type {number}*/
  get subshaderCount() {}
}
class Matrix4x4 {
  /**
   * @param {Vector4} column0
   * @param {Vector4} column1
   * @param {Vector4} column2
   * @param {Vector4} column3
   */
  constructor(column0, column1, column2, column3) {
    /**@type {number}*/
    this.m00 = null;
    /**@type {number}*/
    this.m10 = null;
    /**@type {number}*/
    this.m20 = null;
    /**@type {number}*/
    this.m30 = null;
    /**@type {number}*/
    this.m01 = null;
    /**@type {number}*/
    this.m11 = null;
    /**@type {number}*/
    this.m21 = null;
    /**@type {number}*/
    this.m31 = null;
    /**@type {number}*/
    this.m02 = null;
    /**@type {number}*/
    this.m12 = null;
    /**@type {number}*/
    this.m22 = null;
    /**@type {number}*/
    this.m32 = null;
    /**@type {number}*/
    this.m03 = null;
    /**@type {number}*/
    this.m13 = null;
    /**@type {number}*/
    this.m23 = null;
    /**@type {number}*/
    this.m33 = null;
  }
  /**@type {Matrix4x4}*/
  static zeroMatrix;
  /**@type {Matrix4x4}*/
  static identityMatrix;
  /**
   * @param {Matrix4x4} a
   * @param {Matrix4x4} b
   * @param {number} threshold
   * @returns {boolean}
   */
  static CompareApproximately(a, b, threshold) {}
  /**
   * @returns {FrustumPlanes}
   */
  DecomposeProjection() {}
  /**
   * @param {Matrix4x4} m
   * @returns {number}
   */
  static Determinant(m) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {Matrix4x4} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} left
   * @param {number} right
   * @param {number} bottom
   * @param {number} top
   * @param {number} zNear
   * @param {number} zFar
   * @returns {Matrix4x4}
   */
  static Frustum(left, right, bottom, top, zNear, zFar) {}
  /**
   * @param {FrustumPlanes} fp
   * @returns {Matrix4x4}
   */
  static Frustum(fp) {}
  /**
   * @param {number} index
   * @returns {Vector4}
   */
  GetColumn(index) {}
  /**
   * @returns {number}
   */
  GetDeterminant() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {Vector3}
   */
  GetLossyScale() {}
  /**
   * @returns {Vector3}
   */
  GetPosition() {}
  /**
   * @returns {Quaternion}
   */
  GetRotation() {}
  /**
   * @param {number} index
   * @returns {Vector4}
   */
  GetRow(index) {}
  /**
   * @param {Matrix4x4} m
   * @returns {Matrix4x4}
   */
  static Inverse(m) {}
  /**
   * @returns {boolean}
   */
  IsIdentity() {}
  /**
   * @param {Vector3} from
   * @param {Vector3} to
   * @param {Vector3} up
   * @returns {Matrix4x4}
   */
  static LookAt(from, to, up) {}
  /**
   * @param {Vector3} point
   * @returns {Vector3}
   */
  MultiplyPoint(point) {}
  /**
   * @param {Vector3} point
   * @returns {Vector3}
   */
  MultiplyPoint3x4(point) {}
  /**
   * @param {Vector3} vector
   * @returns {Vector3}
   */
  MultiplyVector(vector) {}
  /**
   * @param {number} left
   * @param {number} right
   * @param {number} bottom
   * @param {number} top
   * @param {number} zNear
   * @param {number} zFar
   * @returns {Matrix4x4}
   */
  static Ortho(left, right, bottom, top, zNear, zFar) {}
  /**
   * @param {number} fov
   * @param {number} aspect
   * @param {number} zNear
   * @param {number} zFar
   * @returns {Matrix4x4}
   */
  static Perspective(fov, aspect, zNear, zFar) {}
  /**
   * @param {Quaternion} q
   * @returns {Matrix4x4}
   */
  static Rotate(q) {}
  /**
   * @param {Vector3} vector
   * @returns {Matrix4x4}
   */
  static Scale(vector) {}
  /**
   * @param {number} index
   * @param {Vector4} column
   * @returns {void}
   */
  SetColumn(index, column) {}
  /**
   * @param {number} index
   * @param {Vector4} row
   * @returns {void}
   */
  SetRow(index, row) {}
  /**
   * @param {Vector3} pos
   * @param {Quaternion} q
   * @param {Vector3} s
   * @returns {void}
   */
  SetTRS(pos, q, s) {}
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
  /**
   * @param {Plane} plane
   * @returns {Plane}
   */
  TransformPlane(plane) {}
  /**
   * @param {Vector3} vector
   * @returns {Matrix4x4}
   */
  static Translate(vector) {}
  /**
   * @param {Matrix4x4} m
   * @returns {Matrix4x4}
   */
  static Transpose(m) {}
  /**
   * @param {Vector3} pos
   * @param {Quaternion} q
   * @param {Vector3} s
   * @returns {Matrix4x4}
   */
  static TRS(pos, q, s) {}
  /**
   * @returns {boolean}
   */
  ValidTRS() {}
  /**@type {FrustumPlanes}*/
  get decomposeProjection() {}
  /**@type {number}*/
  get determinant() {}
  /**@type {Matrix4x4}*/
  static get identity() {}
  /**@type {Matrix4x4}*/
  get inverse() {}
  /**@type {boolean}*/
  get isIdentity() {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {number}*/
  get Item() {}
  /**
 * @param {number} value
 */
  set Item(value) {}
  /**@type {Vector3}*/
  get lossyScale() {}
  /**@type {Quaternion}*/
  get rotation() {}
  /**@type {Matrix4x4}*/
  get transpose() {}
  /**@type {Matrix4x4}*/
  static get zero() {}
}
class Text {
  constructor() {
    /**@type {FontData}*/
    this.m_FontData = null;
    /**@type {string}*/
    this.m_Text = null;
    /**@type {TextGenerator}*/
    this.m_TextCache = null;
    /**@type {TextGenerator}*/
    this.m_TextCacheForLayout = null;
    /**@type {boolean}*/
    this.m_DisableFontTextureRebuiltCallback = null;
    /**@type {UIVertex[]}*/
    this.m_TempVerts = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculateStencil = null;
    /**@type {Material}*/
    this.m_MaskMaterial = null;
    /**@type {boolean}*/
    this.m_IncludeForMasking = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculate = null;
    /**@type {number}*/
    this.m_StencilValue = null;
    /**@type {Material}*/
    this.m_Material = null;
    /**@type {boolean}*/
    this.m_SkipLayoutUpdate = null;
    /**@type {boolean}*/
    this.m_SkipMaterialUpdate = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyLayoutCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyVertsCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyMaterialCallback = null;
    /**@type {Mesh}*/
    this.m_CachedMesh = null;
    /**@type {Vector2[]}*/
    this.m_CachedUvs = null;
  }
  /**@type {Material}*/
  static s_DefaultText;
  /**
   * @returns {void}
   */
  AssignDefaultFont() {}
  /**
   * @returns {void}
   */
  AssignDefaultFontIfNecessary() {}
  /**
   * @returns {void}
   */
  Awake() {}
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
  CalculateLayoutInputHorizontal() {}
  /**
   * @returns {void}
   */
  CalculateLayoutInputVertical() {}
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
   * @param {number} alpha
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @returns {void}
   */
  CrossFadeAlpha(alpha, duration, ignoreTimeScale) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @param {boolean} useRGB
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha, useRGB) {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  Cull(clipRect, validRect) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {void}
   */
  FontTextureChanged() {}
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
   * @param {Vector2} extents
   * @returns {TextGenerationSettings}
   */
  GetGenerationSettings(extents) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {Material} baseMaterial
   * @returns {Material}
   */
  GetModifiedMaterial(baseMaterial) {}
  /**
   * @returns {Rect}
   */
  GetPixelAdjustedRect() {}
  /**
   * @returns {string}
   */
  GetScriptClassName() {}
  /**
   * @param {number} anchor
   * @returns {Vector2}
   */
  static GetTextAnchorPivot(anchor) {}
  /**
   * @returns {void}
   */
  GraphicUpdateComplete() {}
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
  IsActive() {}
  /**
   * @returns {boolean}
   */
  IsDestroyed() {}
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
  LayoutComplete() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  OnBeforeTransformParentChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasGroupChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasHierarchyChanged() {}
  /**
   * @returns {void}
   */
  OnCullingChanged() {}
  /**
   * @returns {void}
   */
  OnDestroy() {}
  /**
   * @returns {void}
   */
  OnDidApplyAnimationProperties() {}
  /**
   * @returns {void}
   */
  OnDisable() {}
  /**
   * @returns {void}
   */
  OnEnable() {}
  /**
   * @param {List} vbo
   * @returns {void}
   */
  OnFillVBO(vbo) {}
  /**
   * @param {VertexHelper} toFill
   * @returns {void}
   */
  OnPopulateMesh(toFill) {}
  /**
   * @param {Mesh} m
   * @returns {void}
   */
  OnPopulateMesh(m) {}
  /**
   * @returns {void}
   */
  OnRectTransformDimensionsChange() {}
  /**
   * @returns {void}
   */
  OnTransformParentChanged() {}
  /**
   * @returns {void}
   */
  ParentMaskStateChanged() {}
  /**
   * @param {Vector2} point
   * @returns {Vector2}
   */
  PixelAdjustPoint(point) {}
  /**
   * @param {Vector2} sp
   * @param {Camera} eventCamera
   * @returns {boolean}
   */
  Raycast(sp, eventCamera) {}
  /**
   * @param {number} update
   * @returns {void}
   */
  Rebuild(update) {}
  /**
   * @returns {void}
   */
  RecalculateClipping() {}
  /**
   * @returns {void}
   */
  RecalculateMasking() {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyVerticesCallback(action) {}
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
  SetAllDirty() {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  SetClipRect(clipRect, validRect) {}
  /**
   * @param {Vector2} clipSoftness
   * @returns {void}
   */
  SetClipSoftness(clipSoftness) {}
  /**
   * @returns {void}
   */
  SetLayoutDirty() {}
  /**
   * @returns {void}
   */
  SetMaterialDirty() {}
  /**
   * @returns {void}
   */
  SetNativeSize() {}
  /**
   * @returns {void}
   */
  SetRaycastDirty() {}
  /**
   * @returns {void}
   */
  SetVerticesDirty() {}
  /**
   * @returns {void}
   */
  Start() {}
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
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyVerticesCallback(action) {}
  /**
   * @returns {void}
   */
  UpdateGeometry() {}
  /**
   * @returns {void}
   */
  UpdateMaterial() {}
  /**@type {boolean}*/
  get alignByGeometry() {}
  /**
 * @param {boolean} value
 */
  set alignByGeometry(value) {}
  /**@type {number}*/
  get alignment() {}
  /**
 * @param {number} value
 */
  set alignment(value) {}
  /**@type {TextGenerator}*/
  get cachedTextGenerator() {}
  /**@type {TextGenerator}*/
  get cachedTextGeneratorForLayout() {}
  /**@type {Canvas}*/
  get canvas() {}
  /**@type {CanvasRenderer}*/
  get canvasRenderer() {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {Material}*/
  get defaultMaterial() {}
  /**@type {number}*/
  get depth() {}
  /**@type {CancellationToken}*/
  get destroyCancellationToken() {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {number}*/
  get flexibleHeight() {}
  /**@type {number}*/
  get flexibleWidth() {}
  /**@type {Font}*/
  get font() {}
  /**
 * @param {Font} value
 */
  set font(value) {}
  /**@type {number}*/
  get fontSize() {}
  /**
 * @param {number} value
 */
  set fontSize(value) {}
  /**@type {number}*/
  get fontStyle() {}
  /**
 * @param {number} value
 */
  set fontStyle(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {number}*/
  get horizontalOverflow() {}
  /**
 * @param {number} value
 */
  set horizontalOverflow(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {boolean}*/
  get isMaskingGraphic() {}
  /**
 * @param {boolean} value
 */
  set isMaskingGraphic(value) {}
  /**@type {number}*/
  get layoutPriority() {}
  /**@type {number}*/
  get lineSpacing() {}
  /**
 * @param {number} value
 */
  set lineSpacing(value) {}
  /**@type {Texture}*/
  get mainTexture() {}
  /**@type {boolean}*/
  get maskable() {}
  /**
 * @param {boolean} value
 */
  set maskable(value) {}
  /**@type {Material}*/
  get material() {}
  /**
 * @param {Material} value
 */
  set material(value) {}
  /**@type {Material}*/
  get materialForRendering() {}
  /**@type {number}*/
  get minHeight() {}
  /**@type {number}*/
  get minWidth() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {MaskableGraphic.CullStateChangedEvent}*/
  get onCullStateChanged() {}
  /**
 * @param {MaskableGraphic.CullStateChangedEvent} value
 */
  set onCullStateChanged(value) {}
  /**@type {number}*/
  get pixelsPerUnit() {}
  /**@type {number}*/
  get preferredHeight() {}
  /**@type {number}*/
  get preferredWidth() {}
  /**@type {Vector4}*/
  get raycastPadding() {}
  /**
 * @param {Vector4} value
 */
  set raycastPadding(value) {}
  /**@type {boolean}*/
  get raycastTarget() {}
  /**
 * @param {boolean} value
 */
  set raycastTarget(value) {}
  /**@type {RectTransform}*/
  get rectTransform() {}
  /**@type {boolean}*/
  get resizeTextForBestFit() {}
  /**
 * @param {boolean} value
 */
  set resizeTextForBestFit(value) {}
  /**@type {number}*/
  get resizeTextMaxSize() {}
  /**
 * @param {number} value
 */
  set resizeTextMaxSize(value) {}
  /**@type {number}*/
  get resizeTextMinSize() {}
  /**
 * @param {number} value
 */
  set resizeTextMinSize(value) {}
  /**@type {boolean}*/
  get supportRichText() {}
  /**
 * @param {boolean} value
 */
  set supportRichText(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {string}*/
  get text() {}
  /**
 * @param {string} value
 */
  set text(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {boolean}*/
  get useGUILayout() {}
  /**
 * @param {boolean} value
 */
  set useGUILayout(value) {}
  /**@type {boolean}*/
  get useLegacyMeshGeneration() {}
  /**
 * @param {boolean} value
 */
  set useLegacyMeshGeneration(value) {}
  /**@type {number}*/
  get verticalOverflow() {}
  /**
 * @param {number} value
 */
  set verticalOverflow(value) {}
}
class TextMesh {
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
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
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
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get alignment() {}
  /**
 * @param {number} value
 */
  set alignment(value) {}
  /**@type {number}*/
  get anchor() {}
  /**
 * @param {number} value
 */
  set anchor(value) {}
  /**@type {number}*/
  get characterSize() {}
  /**
 * @param {number} value
 */
  set characterSize(value) {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {Font}*/
  get font() {}
  /**
 * @param {Font} value
 */
  set font(value) {}
  /**@type {number}*/
  get fontSize() {}
  /**
 * @param {number} value
 */
  set fontSize(value) {}
  /**@type {number}*/
  get fontStyle() {}
  /**
 * @param {number} value
 */
  set fontStyle(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {number}*/
  get lineSpacing() {}
  /**
 * @param {number} value
 */
  set lineSpacing(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {number}*/
  get offsetZ() {}
  /**
 * @param {number} value
 */
  set offsetZ(value) {}
  /**@type {boolean}*/
  get richText() {}
  /**
 * @param {boolean} value
 */
  set richText(value) {}
  /**@type {number}*/
  get tabSize() {}
  /**
 * @param {number} value
 */
  set tabSize(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {string}*/
  get text() {}
  /**
 * @param {string} value
 */
  set text(value) {}
  /**@type {Transform}*/
  get transform() {}
}
class TextMeshPro {
  constructor() {
    /**@type {number}*/
    this._SortingLayer = null;
    /**@type {number}*/
    this._SortingLayerID = null;
    /**@type {number}*/
    this._SortingOrder = null;
    /**@type {Action}*/
    this.OnPreRenderText = null;
    /**@type {boolean}*/
    this.m_currentAutoSizeMode = null;
    /**@type {boolean}*/
    this.m_hasFontAssetChanged = null;
    /**@type {number}*/
    this.m_previousLossyScaleY = null;
    /**@type {Renderer}*/
    this.m_renderer = null;
    /**@type {MeshFilter}*/
    this.m_meshFilter = null;
    /**@type {boolean}*/
    this.m_isFirstAllocation = null;
    /**@type {number}*/
    this.m_max_characters = null;
    /**@type {number}*/
    this.m_max_numberOfLines = null;
    /**@type {TMP_SubMesh[]}*/
    this.m_subTextObjects = null;
    /**@type {number}*/
    this.m_maskType = null;
    /**@type {Matrix4x4}*/
    this.m_EnvMapMatrix = null;
    /**@type {Vector3[]}*/
    this.m_RectTransformCorners = null;
    /**@type {boolean}*/
    this.m_isRegisteredForEvents = null;
    /**@type {string}*/
    this.m_text = null;
    /**@type {ITextPreprocessor}*/
    this.m_TextPreprocessor = null;
    /**@type {boolean}*/
    this.m_isRightToLeft = null;
    /**@type {TMP_FontAsset}*/
    this.m_fontAsset = null;
    /**@type {TMP_FontAsset}*/
    this.m_currentFontAsset = null;
    /**@type {boolean}*/
    this.m_isSDFShader = null;
    /**@type {Material}*/
    this.m_sharedMaterial = null;
    /**@type {Material}*/
    this.m_currentMaterial = null;
    /**@type {number}*/
    this.m_currentMaterialIndex = null;
    /**@type {Material[]}*/
    this.m_fontSharedMaterials = null;
    /**@type {Material}*/
    this.m_fontMaterial = null;
    /**@type {Material[]}*/
    this.m_fontMaterials = null;
    /**@type {boolean}*/
    this.m_isMaterialDirty = null;
    /**@type {Color32}*/
    this.m_fontColor32 = null;
    /**@type {Color}*/
    this.m_fontColor = null;
    /**@type {Color32}*/
    this.m_underlineColor = null;
    /**@type {Color32}*/
    this.m_strikethroughColor = null;
    /**@type {boolean}*/
    this.m_enableVertexGradient = null;
    /**@type {number}*/
    this.m_colorMode = null;
    /**@type {VertexGradient}*/
    this.m_fontColorGradient = null;
    /**@type {TMP_ColorGradient}*/
    this.m_fontColorGradientPreset = null;
    /**@type {TMP_SpriteAsset}*/
    this.m_spriteAsset = null;
    /**@type {boolean}*/
    this.m_tintAllSprites = null;
    /**@type {boolean}*/
    this.m_tintSprite = null;
    /**@type {Color32}*/
    this.m_spriteColor = null;
    /**@type {TMP_StyleSheet}*/
    this.m_StyleSheet = null;
    /**@type {TMP_Style}*/
    this.m_TextStyle = null;
    /**@type {number}*/
    this.m_TextStyleHashCode = null;
    /**@type {boolean}*/
    this.m_overrideHtmlColors = null;
    /**@type {Color32}*/
    this.m_faceColor = null;
    /**@type {Color32}*/
    this.m_outlineColor = null;
    /**@type {number}*/
    this.m_outlineWidth = null;
    /**@type {number}*/
    this.m_fontSize = null;
    /**@type {number}*/
    this.m_currentFontSize = null;
    /**@type {number}*/
    this.m_fontSizeBase = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_sizeStack = null;
    /**@type {number}*/
    this.m_fontWeight = null;
    /**@type {number}*/
    this.m_FontWeightInternal = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_FontWeightStack = null;
    /**@type {boolean}*/
    this.m_enableAutoSizing = null;
    /**@type {number}*/
    this.m_maxFontSize = null;
    /**@type {number}*/
    this.m_minFontSize = null;
    /**@type {number}*/
    this.m_AutoSizeIterationCount = null;
    /**@type {number}*/
    this.m_AutoSizeMaxIterationCount = null;
    /**@type {boolean}*/
    this.m_IsAutoSizePointSizeSet = null;
    /**@type {number}*/
    this.m_fontSizeMin = null;
    /**@type {number}*/
    this.m_fontSizeMax = null;
    /**@type {number}*/
    this.m_fontStyle = null;
    /**@type {number}*/
    this.m_FontStyleInternal = null;
    /**@type {TMP_FontStyleStack}*/
    this.m_fontStyleStack = null;
    /**@type {boolean}*/
    this.m_isUsingBold = null;
    /**@type {number}*/
    this.m_HorizontalAlignment = null;
    /**@type {number}*/
    this.m_VerticalAlignment = null;
    /**@type {number}*/
    this.m_textAlignment = null;
    /**@type {number}*/
    this.m_lineJustification = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_lineJustificationStack = null;
    /**@type {Vector3[]}*/
    this.m_textContainerLocalCorners = null;
    /**@type {number}*/
    this.m_characterSpacing = null;
    /**@type {number}*/
    this.m_cSpacing = null;
    /**@type {number}*/
    this.m_monoSpacing = null;
    /**@type {number}*/
    this.m_wordSpacing = null;
    /**@type {number}*/
    this.m_lineSpacing = null;
    /**@type {number}*/
    this.m_lineSpacingDelta = null;
    /**@type {number}*/
    this.m_lineHeight = null;
    /**@type {boolean}*/
    this.m_IsDrivenLineSpacing = null;
    /**@type {number}*/
    this.m_lineSpacingMax = null;
    /**@type {number}*/
    this.m_paragraphSpacing = null;
    /**@type {number}*/
    this.m_charWidthMaxAdj = null;
    /**@type {number}*/
    this.m_charWidthAdjDelta = null;
    /**@type {boolean}*/
    this.m_enableWordWrapping = null;
    /**@type {boolean}*/
    this.m_isCharacterWrappingEnabled = null;
    /**@type {boolean}*/
    this.m_isNonBreakingSpace = null;
    /**@type {boolean}*/
    this.m_isIgnoringAlignment = null;
    /**@type {number}*/
    this.m_wordWrappingRatios = null;
    /**@type {number}*/
    this.m_overflowMode = null;
    /**@type {number}*/
    this.m_firstOverflowCharacterIndex = null;
    /**@type {TMP_Text}*/
    this.m_linkedTextComponent = null;
    /**@type {TMP_Text}*/
    this.parentLinkedComponent = null;
    /**@type {boolean}*/
    this.m_isTextTruncated = null;
    /**@type {boolean}*/
    this.m_enableKerning = null;
    /**@type {number}*/
    this.m_GlyphHorizontalAdvanceAdjustment = null;
    /**@type {boolean}*/
    this.m_enableExtraPadding = null;
    /**@type {boolean}*/
    this.checkPaddingRequired = null;
    /**@type {boolean}*/
    this.m_isRichText = null;
    /**@type {boolean}*/
    this.m_parseCtrlCharacters = null;
    /**@type {boolean}*/
    this.m_isOverlay = null;
    /**@type {boolean}*/
    this.m_isOrthographic = null;
    /**@type {boolean}*/
    this.m_isCullingEnabled = null;
    /**@type {boolean}*/
    this.m_isMaskingEnabled = null;
    /**@type {boolean}*/
    this.isMaskUpdateRequired = null;
    /**@type {boolean}*/
    this.m_ignoreCulling = null;
    /**@type {number}*/
    this.m_horizontalMapping = null;
    /**@type {number}*/
    this.m_verticalMapping = null;
    /**@type {number}*/
    this.m_uvLineOffset = null;
    /**@type {number}*/
    this.m_renderMode = null;
    /**@type {number}*/
    this.m_geometrySortingOrder = null;
    /**@type {boolean}*/
    this.m_IsTextObjectScaleStatic = null;
    /**@type {boolean}*/
    this.m_VertexBufferAutoSizeReduction = null;
    /**@type {number}*/
    this.m_firstVisibleCharacter = null;
    /**@type {number}*/
    this.m_maxVisibleCharacters = null;
    /**@type {number}*/
    this.m_maxVisibleWords = null;
    /**@type {number}*/
    this.m_maxVisibleLines = null;
    /**@type {boolean}*/
    this.m_useMaxVisibleDescender = null;
    /**@type {number}*/
    this.m_pageToDisplay = null;
    /**@type {boolean}*/
    this.m_isNewPage = null;
    /**@type {Vector4}*/
    this.m_margin = null;
    /**@type {number}*/
    this.m_marginLeft = null;
    /**@type {number}*/
    this.m_marginRight = null;
    /**@type {number}*/
    this.m_marginWidth = null;
    /**@type {number}*/
    this.m_marginHeight = null;
    /**@type {number}*/
    this.m_width = null;
    /**@type {TMP_TextInfo}*/
    this.m_textInfo = null;
    /**@type {boolean}*/
    this.m_havePropertiesChanged = null;
    /**@type {boolean}*/
    this.m_isUsingLegacyAnimationComponent = null;
    /**@type {Transform}*/
    this.m_transform = null;
    /**@type {RectTransform}*/
    this.m_rectTransform = null;
    /**@type {Vector2}*/
    this.m_PreviousRectTransformSize = null;
    /**@type {Vector2}*/
    this.m_PreviousPivotPosition = null;
    /**@type {boolean}*/
    this.m_autoSizeTextContainer = null;
    /**@type {Mesh}*/
    this.m_mesh = null;
    /**@type {boolean}*/
    this.m_isVolumetricText = null;
    /**@type {TMP_SpriteAnimator}*/
    this.m_spriteAnimator = null;
    /**@type {number}*/
    this.m_flexibleHeight = null;
    /**@type {number}*/
    this.m_flexibleWidth = null;
    /**@type {number}*/
    this.m_minWidth = null;
    /**@type {number}*/
    this.m_minHeight = null;
    /**@type {number}*/
    this.m_maxWidth = null;
    /**@type {number}*/
    this.m_maxHeight = null;
    /**@type {LayoutElement}*/
    this.m_LayoutElement = null;
    /**@type {number}*/
    this.m_preferredWidth = null;
    /**@type {number}*/
    this.m_renderedWidth = null;
    /**@type {boolean}*/
    this.m_isPreferredWidthDirty = null;
    /**@type {number}*/
    this.m_preferredHeight = null;
    /**@type {number}*/
    this.m_renderedHeight = null;
    /**@type {boolean}*/
    this.m_isPreferredHeightDirty = null;
    /**@type {boolean}*/
    this.m_isCalculatingPreferredValues = null;
    /**@type {number}*/
    this.m_layoutPriority = null;
    /**@type {boolean}*/
    this.m_isLayoutDirty = null;
    /**@type {boolean}*/
    this.m_isAwake = null;
    /**@type {boolean}*/
    this.m_isWaitingOnResourceLoad = null;
    /**@type {number}*/
    this.m_inputSource = null;
    /**@type {number}*/
    this.m_fontScaleMultiplier = null;
    /**@type {number}*/
    this.tag_LineIndent = null;
    /**@type {number}*/
    this.tag_Indent = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_indentStack = null;
    /**@type {boolean}*/
    this.tag_NoParsing = null;
    /**@type {boolean}*/
    this.m_isParsingText = null;
    /**@type {Matrix4x4}*/
    this.m_FXMatrix = null;
    /**@type {boolean}*/
    this.m_isFXMatrixSet = null;
    /**@type {UnicodeChar[]}*/
    this.m_TextProcessingArray = null;
    /**@type {number}*/
    this.m_InternalTextProcessingArraySize = null;
    /**@type {number}*/
    this.m_totalCharacterCount = null;
    /**@type {number}*/
    this.m_characterCount = null;
    /**@type {number}*/
    this.m_firstCharacterOfLine = null;
    /**@type {number}*/
    this.m_firstVisibleCharacterOfLine = null;
    /**@type {number}*/
    this.m_lastCharacterOfLine = null;
    /**@type {number}*/
    this.m_lastVisibleCharacterOfLine = null;
    /**@type {number}*/
    this.m_lineNumber = null;
    /**@type {number}*/
    this.m_lineVisibleCharacterCount = null;
    /**@type {number}*/
    this.m_pageNumber = null;
    /**@type {number}*/
    this.m_PageAscender = null;
    /**@type {number}*/
    this.m_maxTextAscender = null;
    /**@type {number}*/
    this.m_maxCapHeight = null;
    /**@type {number}*/
    this.m_ElementAscender = null;
    /**@type {number}*/
    this.m_ElementDescender = null;
    /**@type {number}*/
    this.m_maxLineAscender = null;
    /**@type {number}*/
    this.m_maxLineDescender = null;
    /**@type {number}*/
    this.m_startOfLineAscender = null;
    /**@type {number}*/
    this.m_startOfLineDescender = null;
    /**@type {number}*/
    this.m_lineOffset = null;
    /**@type {Extents}*/
    this.m_meshExtents = null;
    /**@type {Color32}*/
    this.m_htmlColor = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_colorStack = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_underlineColorStack = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_strikethroughColorStack = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_HighlightStateStack = null;
    /**@type {TMP_ColorGradient}*/
    this.m_colorGradientPreset = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_colorGradientStack = null;
    /**@type {boolean}*/
    this.m_colorGradientPresetIsTinted = null;
    /**@type {number}*/
    this.m_tabSpacing = null;
    /**@type {number}*/
    this.m_spacing = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_TextStyleStacks = null;
    /**@type {number}*/
    this.m_TextStyleStackDepth = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_ItalicAngleStack = null;
    /**@type {number}*/
    this.m_ItalicAngle = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_actionStack = null;
    /**@type {number}*/
    this.m_padding = null;
    /**@type {number}*/
    this.m_baselineOffset = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_baselineOffsetStack = null;
    /**@type {number}*/
    this.m_xAdvance = null;
    /**@type {number}*/
    this.m_textElementType = null;
    /**@type {TMP_TextElement}*/
    this.m_cached_TextElement = null;
    /**@type {TMP_Text.SpecialCharacter}*/
    this.m_Ellipsis = null;
    /**@type {TMP_Text.SpecialCharacter}*/
    this.m_Underline = null;
    /**@type {TMP_SpriteAsset}*/
    this.m_defaultSpriteAsset = null;
    /**@type {TMP_SpriteAsset}*/
    this.m_currentSpriteAsset = null;
    /**@type {number}*/
    this.m_spriteCount = null;
    /**@type {number}*/
    this.m_spriteIndex = null;
    /**@type {number}*/
    this.m_spriteAnimationID = null;
    /**@type {boolean}*/
    this.m_ignoreActiveState = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculateStencil = null;
    /**@type {Material}*/
    this.m_MaskMaterial = null;
    /**@type {boolean}*/
    this.m_IncludeForMasking = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculate = null;
    /**@type {number}*/
    this.m_StencilValue = null;
    /**@type {Material}*/
    this.m_Material = null;
    /**@type {boolean}*/
    this.m_SkipLayoutUpdate = null;
    /**@type {boolean}*/
    this.m_SkipMaterialUpdate = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyLayoutCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyVertsCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyMaterialCallback = null;
    /**@type {Mesh}*/
    this.m_CachedMesh = null;
    /**@type {Vector2[]}*/
    this.m_CachedUvs = null;
  }
  /**@type {ProfilerMarker}*/
  static k_GenerateTextMarker;
  /**@type {ProfilerMarker}*/
  static k_SetArraySizesMarker;
  /**@type {ProfilerMarker}*/
  static k_GenerateTextPhaseIMarker;
  /**@type {ProfilerMarker}*/
  static k_ParseMarkupTextMarker;
  /**@type {ProfilerMarker}*/
  static k_CharacterLookupMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleGPOSFeaturesMarker;
  /**@type {ProfilerMarker}*/
  static k_CalculateVerticesPositionMarker;
  /**@type {ProfilerMarker}*/
  static k_ComputeTextMetricsMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleVisibleCharacterMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleWhiteSpacesMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleHorizontalLineBreakingMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleVerticalLineBreakingMarker;
  /**@type {ProfilerMarker}*/
  static k_SaveGlyphVertexDataMarker;
  /**@type {ProfilerMarker}*/
  static k_ComputeCharacterAdvanceMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleCarriageReturnMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleLineTerminationMarker;
  /**@type {ProfilerMarker}*/
  static k_SavePageInfoMarker;
  /**@type {ProfilerMarker}*/
  static k_SaveProcessingStatesMarker;
  /**@type {ProfilerMarker}*/
  static k_GenerateTextPhaseIIMarker;
  /**@type {ProfilerMarker}*/
  static k_GenerateTextPhaseIIIMarker;
  /**
   * @param {Action} value
   * @returns {void}
   */
  add_OnPreRenderText(value) {}
  /**
   * @param {number} startIndex
   * @param {number} endIndex
   * @param {number} offset
   * @returns {void}
   */
  AdjustLineOffset(startIndex, endIndex, offset) {}
  /**
   * @returns {void}
   */
  Awake() {}
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
  CalculateLayoutInputHorizontal() {}
  /**
   * @returns {void}
   */
  CalculateLayoutInputVertical() {}
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
   * @param {boolean} updateMesh
   * @returns {void}
   */
  ClearMesh(updateMesh) {}
  /**
   * @returns {void}
   */
  ClearMesh() {}
  /**
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @returns {void}
   */
  ComputeMarginSize() {}
  /**
   * @param {Char[]} chars
   * @param {number} startIndex
   * @param {number} length
   * @returns {number}
   */
  ConvertToFloat(chars, startIndex, length) {}
  /**
   * @returns {void}
   */
  CreateMaterialInstance() {}
  /**
   * @param {Material} source
   * @returns {Material}
   */
  CreateMaterialInstance(source) {}
  /**
   * @param {number} alpha
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @returns {void}
   */
  CrossFadeAlpha(alpha, duration, ignoreTimeScale) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @param {boolean} useRGB
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha, useRGB) {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  Cull(clipRect, validRect) {}
  /**
   * @returns {void}
   */
  DestroySubMeshObjects() {}
  /**
   * @returns {void}
   */
  DisableMasking() {}
  /**
   * @returns {void}
   */
  EnableMasking() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} i
   * @param {number} index_X4
   * @returns {void}
   */
  FillCharacterVertexBuffers(i, index_X4) {}
  /**
   * @param {number} i
   * @param {number} index_X4
   * @param {boolean} isVolumetric
   * @returns {void}
   */
  FillCharacterVertexBuffers(i, index_X4, isVolumetric) {}
  /**
   * @param {number} i
   * @param {number} index_X4
   * @returns {void}
   */
  FillSpriteVertexBuffers(i, index_X4) {}
  /**
   * @param {boolean} ignoreActiveState
   * @param {boolean} forceTextReparsing
   * @returns {void}
   */
  ForceMeshUpdate(ignoreActiveState, forceTextReparsing) {}
  /**
   * @returns {void}
   */
  GenerateTextMesh() {}
  /**
   * @returns {Rect}
   */
  GetCanvasSpaceClippingRect() {}
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
   * @returns {Bounds}
   */
  GetCompoundBounds() {}
  /**
   * @param {TMP_FontAsset} fontAsset
   * @returns {void}
   */
  GetEllipsisSpecialCharacter(fontAsset) {}
  /**
   * @param {number} fontWeight
   * @returns {TMP_FontAsset}
   */
  GetFontAssetForWeight(fontWeight) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {Material} mat
   * @returns {Material}
   */
  GetMaterial(mat) {}
  /**
   * @param {Material[]} mats
   * @returns {Material[]}
   */
  GetMaterials(mats) {}
  /**
   * @param {Material} baseMaterial
   * @returns {Material}
   */
  GetModifiedMaterial(baseMaterial) {}
  /**
   * @returns {number}
   */
  GetPaddingForMaterial() {}
  /**
   * @param {Material} mat
   * @returns {number}
   */
  GetPaddingForMaterial(mat) {}
  /**
   * @returns {string}
   */
  GetParsedText() {}
  /**
   * @returns {Rect}
   */
  GetPixelAdjustedRect() {}
  /**
   * @returns {number}
   */
  GetPreferredHeight() {}
  /**
   * @returns {Vector2}
   */
  GetPreferredValues() {}
  /**
   * @param {number} width
   * @param {number} height
   * @returns {Vector2}
   */
  GetPreferredValues(width, height) {}
  /**
   * @param {string} text
   * @returns {Vector2}
   */
  GetPreferredValues(text) {}
  /**
   * @param {string} text
   * @param {number} width
   * @param {number} height
   * @returns {Vector2}
   */
  GetPreferredValues(text, width, height) {}
  /**
   * @returns {number}
   */
  GetPreferredWidth() {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {number}
   */
  GetRenderedHeight(onlyVisibleCharacters) {}
  /**
   * @returns {Vector2}
   */
  GetRenderedValues() {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {Vector2}
   */
  GetRenderedValues(onlyVisibleCharacters) {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {number}
   */
  GetRenderedWidth(onlyVisibleCharacters) {}
  /**
   * @returns {string}
   */
  GetScriptClassName() {}
  /**
   * @returns {Material[]}
   */
  GetSharedMaterials() {}
  /**
   * @param {TMP_FontAsset} fontAsset
   * @returns {void}
   */
  GetSpecialCharacters(fontAsset) {}
  /**
   * @returns {Bounds}
   */
  GetTextBounds() {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {Bounds}
   */
  GetTextBounds(onlyVisibleCharacters) {}
  /**
   * @returns {Vector3[]}
   */
  GetTextContainerLocalCorners() {}
  /**
   * @param {string} text
   * @returns {TMP_TextInfo}
   */
  GetTextInfo(text) {}
  /**
   * @param {TMP_FontAsset} fontAsset
   * @returns {void}
   */
  GetUnderlineSpecialCharacter(fontAsset) {}
  /**
   * @param {string} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {Int32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {UInt32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {StringBuilder} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {string} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @param {Int32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @param {UInt32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @param {StringBuilder} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @returns {void}
   */
  GraphicUpdateComplete() {}
  /**
   * @param {Char[]} hexChars
   * @param {number} tagCount
   * @returns {Color32}
   */
  HexCharsToColor(hexChars, tagCount) {}
  /**
   * @param {Char[]} hexChars
   * @param {number} startIndex
   * @param {number} length
   * @returns {Color32}
   */
  HexCharsToColor(hexChars, startIndex, length) {}
  /**
   * @param {string} hex
   * @returns {number}
   */
  HexToInt(hex) {}
  /**
   * @param {number} alpha
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @returns {void}
   */
  InternalCrossFadeAlpha(alpha, duration, ignoreTimeScale) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @returns {void}
   */
  InternalCrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha) {}
  /**
   * @returns {void}
   */
  InternalUpdate() {}
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
  IsActive() {}
  /**
   * @returns {boolean}
   */
  IsDestroyed() {}
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
   * @param {TMP_Text} targetTextComponent
   * @returns {boolean}
   */
  IsSelfOrLinkedAncestor(targetTextComponent) {}
  /**
   * @returns {void}
   */
  LayoutComplete() {}
  /**
   * @returns {void}
   */
  LoadDefaultSettings() {}
  /**
   * @returns {void}
   */
  LoadFontAsset() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  OnBeforeTransformParentChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasGroupChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasHierarchyChanged() {}
  /**
   * @returns {void}
   */
  OnCullingChanged() {}
  /**
   * @returns {void}
   */
  OnDestroy() {}
  /**
   * @returns {void}
   */
  OnDidApplyAnimationProperties() {}
  /**
   * @returns {void}
   */
  OnDisable() {}
  /**
   * @returns {void}
   */
  OnEnable() {}
  /**
   * @param {List} vbo
   * @returns {void}
   */
  OnFillVBO(vbo) {}
  /**
   * @param {Mesh} m
   * @returns {void}
   */
  OnPopulateMesh(m) {}
  /**
   * @param {VertexHelper} vh
   * @returns {void}
   */
  OnPopulateMesh(vh) {}
  /**
   * @returns {void}
   */
  OnPreRenderObject() {}
  /**
   * @returns {void}
   */
  OnRectTransformDimensionsChange() {}
  /**
   * @returns {void}
   */
  OnTransformParentChanged() {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} scale
   * @returns {Vector2}
   */
  PackUV(x, y, scale) {}
  /**
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  PackUV(x, y) {}
  /**
   * @returns {void}
   */
  ParentMaskStateChanged() {}
  /**
   * @returns {void}
   */
  ParseInputText() {}
  /**
   * @param {Vector2} point
   * @returns {Vector2}
   */
  PixelAdjustPoint(point) {}
  /**
   * @param {Vector2} sp
   * @param {Camera} eventCamera
   * @returns {boolean}
   */
  Raycast(sp, eventCamera) {}
  /**
   * @param {number} update
   * @returns {void}
   */
  Rebuild(update) {}
  /**
   * @returns {void}
   */
  RecalculateClipping() {}
  /**
   * @returns {void}
   */
  RecalculateMasking() {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyVerticesCallback(action) {}
  /**
   * @param {TMP_Text} targetTextComponent
   * @returns {void}
   */
  ReleaseLinkedTextComponent(targetTextComponent) {}
  /**
   * @param {Action} value
   * @returns {void}
   */
  remove_OnPreRenderText(value) {}
  /**
   * @param {Int32[]} chars
   * @param {number} insertionIndex
   * @param {number} tagLength
   * @param {string} c
   * @returns {void}
   */
  ReplaceTagWithCharacter(chars, insertionIndex, tagLength, c) {}
  /**
   * @param {number} size
   * @returns {void}
   */
  ResizeLineExtents(size) {}
  /**
   * @param {number} padding
   * @param {number} style_padding
   * @param {Color32} vertexColor
   * @returns {void}
   */
  SaveGlyphVertexInfo(padding, style_padding, vertexColor) {}
  /**
   * @param {Color32} vertexColor
   * @returns {void}
   */
  SaveSpriteVertexInfo(vertexColor) {}
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
   * @param {boolean} state
   * @returns {void}
   */
  SetActiveSubMeshes(state) {}
  /**
   * @param {boolean} state
   * @returns {void}
   */
  SetActiveSubTextObjectRenderers(state) {}
  /**
   * @returns {void}
   */
  SetAllDirty() {}
  /**
   * @param {UnicodeChar[]} unicodeChars
   * @returns {number}
   */
  SetArraySizes(unicodeChars) {}
  /**
   * @param {Char[]} sourceText
   * @returns {void}
   */
  SetCharArray(sourceText) {}
  /**
   * @param {Char[]} sourceText
   * @param {number} start
   * @param {number} length
   * @returns {void}
   */
  SetCharArray(sourceText, start, length) {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  SetClipRect(clipRect, validRect) {}
  /**
   * @param {Vector2} clipSoftness
   * @returns {void}
   */
  SetClipSoftness(clipSoftness) {}
  /**
   * @returns {void}
   */
  SetCulling() {}
  /**
   * @param {Color32} color
   * @returns {void}
   */
  SetFaceColor(color) {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  SetFontBaseMaterial(mat) {}
  /**
   * @returns {void}
   */
  SetLayoutDirty() {}
  /**
   * @param {number} type
   * @param {Vector4} maskCoords
   * @returns {void}
   */
  SetMask(type, maskCoords) {}
  /**
   * @param {number} type
   * @param {Vector4} maskCoords
   * @param {number} softnessX
   * @param {number} softnessY
   * @returns {void}
   */
  SetMask(type, maskCoords, softnessX, softnessY) {}
  /**
   * @param {number} maskType
   * @returns {void}
   */
  SetMask(maskType) {}
  /**
   * @param {Vector4} coords
   * @returns {void}
   */
  SetMaskCoordinates(coords) {}
  /**
   * @param {Vector4} coords
   * @param {number} softX
   * @param {number} softY
   * @returns {void}
   */
  SetMaskCoordinates(coords, softX, softY) {}
  /**
   * @returns {void}
   */
  SetMaterialDirty() {}
  /**
   * @param {boolean} state
   * @returns {void}
   */
  SetMeshFilters(state) {}
  /**
   * @returns {void}
   */
  SetNativeSize() {}
  /**
   * @param {Color32} color
   * @returns {void}
   */
  SetOutlineColor(color) {}
  /**
   * @param {number} thickness
   * @returns {void}
   */
  SetOutlineThickness(thickness) {}
  /**
   * @returns {void}
   */
  SetPerspectiveCorrection() {}
  /**
   * @returns {void}
   */
  SetRaycastDirty() {}
  /**
   * @returns {void}
   */
  SetShaderDepth() {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  SetSharedMaterial(mat) {}
  /**
   * @param {Material[]} materials
   * @returns {void}
   */
  SetSharedMaterials(materials) {}
  /**
   * @param {string} sourceText
   * @param {boolean} syncTextInputBox
   * @returns {void}
   */
  SetText(sourceText, syncTextInputBox) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @returns {void}
   */
  SetText(sourceText, arg0) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @param {number} arg5
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4, arg5) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @param {number} arg5
   * @param {number} arg6
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @param {number} arg5
   * @param {number} arg6
   * @param {number} arg7
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {}
  /**
   * @param {StringBuilder} sourceText
   * @returns {void}
   */
  SetText(sourceText) {}
  /**
   * @param {Char[]} sourceText
   * @returns {void}
   */
  SetText(sourceText) {}
  /**
   * @param {Char[]} sourceText
   * @param {number} start
   * @param {number} length
   * @returns {void}
   */
  SetText(sourceText, start, length) {}
  /**
   * @param {number} order
   * @returns {void}
   */
  SetTextSortingOrder(order) {}
  /**
   * @param {Int32[]} order
   * @returns {void}
   */
  SetTextSortingOrder(order) {}
  /**
   * @param {TMP_ColorGradient} gradient
   * @returns {void}
   */
  SetVertexColorGradient(gradient) {}
  /**
   * @param {Vector3[]} vertices
   * @returns {void}
   */
  SetVertices(vertices) {}
  /**
   * @returns {void}
   */
  SetVerticesDirty() {}
  /**
   * @returns {void}
   */
  Start() {}
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
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyVerticesCallback(action) {}
  /**
   * @returns {void}
   */
  UpdateCulling() {}
  /**
   * @returns {void}
   */
  UpdateEnvMapMatrix() {}
  /**
   * @returns {void}
   */
  UpdateFontAsset() {}
  /**
   * @param {Mesh} mesh
   * @param {number} index
   * @returns {void}
   */
  UpdateGeometry(mesh, index) {}
  /**
   * @returns {void}
   */
  UpdateGeometry() {}
  /**
   * @returns {void}
   */
  UpdateMask() {}
  /**
   * @returns {void}
   */
  UpdateMaterial() {}
  /**
   * @returns {void}
   */
  UpdateMeshPadding() {}
  /**
   * @param {number} scaleDelta
   * @returns {void}
   */
  UpdateSDFScale(scaleDelta) {}
  /**
   * @param {number} id
   * @returns {void}
   */
  UpdateSubMeshSortingLayerID(id) {}
  /**
   * @param {number} order
   * @returns {void}
   */
  UpdateSubMeshSortingOrder(order) {}
  /**
   * @param {number} flags
   * @returns {void}
   */
  UpdateVertexData(flags) {}
  /**
   * @returns {void}
   */
  UpdateVertexData() {}
  /**@type {number}*/
  get alignment() {}
  /**
 * @param {number} value
 */
  set alignment(value) {}
  /**@type {number}*/
  get alpha() {}
  /**
 * @param {number} value
 */
  set alpha(value) {}
  /**@type {boolean}*/
  get autoSizeTextContainer() {}
  /**
 * @param {boolean} value
 */
  set autoSizeTextContainer(value) {}
  /**@type {Bounds}*/
  get bounds() {}
  /**@type {Canvas}*/
  get canvas() {}
  /**@type {CanvasRenderer}*/
  get canvasRenderer() {}
  /**@type {number}*/
  get characterSpacing() {}
  /**
 * @param {number} value
 */
  set characterSpacing(value) {}
  /**@type {number}*/
  get characterWidthAdjustment() {}
  /**
 * @param {number} value
 */
  set characterWidthAdjustment(value) {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {VertexGradient}*/
  get colorGradient() {}
  /**
 * @param {VertexGradient} value
 */
  set colorGradient(value) {}
  /**@type {TMP_ColorGradient}*/
  get colorGradientPreset() {}
  /**
 * @param {TMP_ColorGradient} value
 */
  set colorGradientPreset(value) {}
  /**@type {Material}*/
  get defaultMaterial() {}
  /**@type {number}*/
  get depth() {}
  /**@type {CancellationToken}*/
  get destroyCancellationToken() {}
  /**@type {boolean}*/
  get enableAutoSizing() {}
  /**
 * @param {boolean} value
 */
  set enableAutoSizing(value) {}
  /**@type {boolean}*/
  get enableCulling() {}
  /**
 * @param {boolean} value
 */
  set enableCulling(value) {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {boolean}*/
  get enableKerning() {}
  /**
 * @param {boolean} value
 */
  set enableKerning(value) {}
  /**@type {boolean}*/
  get enableVertexGradient() {}
  /**
 * @param {boolean} value
 */
  set enableVertexGradient(value) {}
  /**@type {boolean}*/
  get enableWordWrapping() {}
  /**
 * @param {boolean} value
 */
  set enableWordWrapping(value) {}
  /**@type {boolean}*/
  get extraPadding() {}
  /**
 * @param {boolean} value
 */
  set extraPadding(value) {}
  /**@type {Color32}*/
  get faceColor() {}
  /**
 * @param {Color32} value
 */
  set faceColor(value) {}
  /**@type {number}*/
  get firstOverflowCharacterIndex() {}
  /**@type {number}*/
  get firstVisibleCharacter() {}
  /**
 * @param {number} value
 */
  set firstVisibleCharacter(value) {}
  /**@type {number}*/
  get flexibleHeight() {}
  /**@type {number}*/
  get flexibleWidth() {}
  /**@type {TMP_FontAsset}*/
  get font() {}
  /**
 * @param {TMP_FontAsset} value
 */
  set font(value) {}
  /**@type {Material}*/
  get fontMaterial() {}
  /**
 * @param {Material} value
 */
  set fontMaterial(value) {}
  /**@type {Material[]}*/
  get fontMaterials() {}
  /**
 * @param {Material[]} value
 */
  set fontMaterials(value) {}
  /**@type {Material}*/
  get fontSharedMaterial() {}
  /**
 * @param {Material} value
 */
  set fontSharedMaterial(value) {}
  /**@type {Material[]}*/
  get fontSharedMaterials() {}
  /**
 * @param {Material[]} value
 */
  set fontSharedMaterials(value) {}
  /**@type {number}*/
  get fontSize() {}
  /**
 * @param {number} value
 */
  set fontSize(value) {}
  /**@type {number}*/
  get fontSizeMax() {}
  /**
 * @param {number} value
 */
  set fontSizeMax(value) {}
  /**@type {number}*/
  get fontSizeMin() {}
  /**
 * @param {number} value
 */
  set fontSizeMin(value) {}
  /**@type {number}*/
  get fontStyle() {}
  /**
 * @param {number} value
 */
  set fontStyle(value) {}
  /**@type {number}*/
  get fontWeight() {}
  /**
 * @param {number} value
 */
  set fontWeight(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get geometrySortingOrder() {}
  /**
 * @param {number} value
 */
  set geometrySortingOrder(value) {}
  /**@type {boolean}*/
  get havePropertiesChanged() {}
  /**
 * @param {boolean} value
 */
  set havePropertiesChanged(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {number}*/
  get horizontalAlignment() {}
  /**
 * @param {number} value
 */
  set horizontalAlignment(value) {}
  /**@type {number}*/
  get horizontalMapping() {}
  /**
 * @param {number} value
 */
  set horizontalMapping(value) {}
  /**@type {boolean}*/
  get ignoreVisibility() {}
  /**
 * @param {boolean} value
 */
  set ignoreVisibility(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {boolean}*/
  get isMaskingGraphic() {}
  /**
 * @param {boolean} value
 */
  set isMaskingGraphic(value) {}
  /**@type {boolean}*/
  get isOrthographic() {}
  /**
 * @param {boolean} value
 */
  set isOrthographic(value) {}
  /**@type {boolean}*/
  get isOverlay() {}
  /**
 * @param {boolean} value
 */
  set isOverlay(value) {}
  /**@type {boolean}*/
  get isRightToLeftText() {}
  /**
 * @param {boolean} value
 */
  set isRightToLeftText(value) {}
  /**@type {boolean}*/
  get isTextObjectScaleStatic() {}
  /**
 * @param {boolean} value
 */
  set isTextObjectScaleStatic(value) {}
  /**@type {boolean}*/
  get isTextOverflowing() {}
  /**@type {boolean}*/
  get isTextTruncated() {}
  /**@type {boolean}*/
  get isUsingBold() {}
  /**@type {boolean}*/
  get isUsingLegacyAnimationComponent() {}
  /**
 * @param {boolean} value
 */
  set isUsingLegacyAnimationComponent(value) {}
  /**@type {boolean}*/
  get isVolumetricText() {}
  /**
 * @param {boolean} value
 */
  set isVolumetricText(value) {}
  /**@type {LayoutElement}*/
  get layoutElement() {}
  /**@type {number}*/
  get layoutPriority() {}
  /**@type {number}*/
  get lineSpacing() {}
  /**
 * @param {number} value
 */
  set lineSpacing(value) {}
  /**@type {number}*/
  get lineSpacingAdjustment() {}
  /**
 * @param {number} value
 */
  set lineSpacingAdjustment(value) {}
  /**@type {TMP_Text}*/
  get linkedTextComponent() {}
  /**
 * @param {TMP_Text} value
 */
  set linkedTextComponent(value) {}
  /**@type {Texture}*/
  get mainTexture() {}
  /**@type {number}*/
  get mappingUvLineOffset() {}
  /**
 * @param {number} value
 */
  set mappingUvLineOffset(value) {}
  /**@type {Vector4}*/
  get margin() {}
  /**
 * @param {Vector4} value
 */
  set margin(value) {}
  /**@type {boolean}*/
  get maskable() {}
  /**
 * @param {boolean} value
 */
  set maskable(value) {}
  /**@type {number}*/
  get maskType() {}
  /**
 * @param {number} value
 */
  set maskType(value) {}
  /**@type {Material}*/
  get material() {}
  /**
 * @param {Material} value
 */
  set material(value) {}
  /**@type {Material}*/
  get materialForRendering() {}
  /**@type {number}*/
  get maxHeight() {}
  /**@type {number}*/
  get maxVisibleCharacters() {}
  /**
 * @param {number} value
 */
  set maxVisibleCharacters(value) {}
  /**@type {number}*/
  get maxVisibleLines() {}
  /**
 * @param {number} value
 */
  set maxVisibleLines(value) {}
  /**@type {number}*/
  get maxVisibleWords() {}
  /**
 * @param {number} value
 */
  set maxVisibleWords(value) {}
  /**@type {number}*/
  get maxWidth() {}
  /**@type {Mesh}*/
  get mesh() {}
  /**@type {MeshFilter}*/
  get meshFilter() {}
  /**@type {number}*/
  get minHeight() {}
  /**@type {number}*/
  get minWidth() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {MaskableGraphic.CullStateChangedEvent}*/
  get onCullStateChanged() {}
  /**
 * @param {MaskableGraphic.CullStateChangedEvent} value
 */
  set onCullStateChanged(value) {}
  /**@type {Color32}*/
  get outlineColor() {}
  /**
 * @param {Color32} value
 */
  set outlineColor(value) {}
  /**@type {number}*/
  get outlineWidth() {}
  /**
 * @param {number} value
 */
  set outlineWidth(value) {}
  /**@type {number}*/
  get overflowMode() {}
  /**
 * @param {number} value
 */
  set overflowMode(value) {}
  /**@type {boolean}*/
  get overrideColorTags() {}
  /**
 * @param {boolean} value
 */
  set overrideColorTags(value) {}
  /**@type {number}*/
  get pageToDisplay() {}
  /**
 * @param {number} value
 */
  set pageToDisplay(value) {}
  /**@type {number}*/
  get paragraphSpacing() {}
  /**
 * @param {number} value
 */
  set paragraphSpacing(value) {}
  /**@type {boolean}*/
  get parseCtrlCharacters() {}
  /**
 * @param {boolean} value
 */
  set parseCtrlCharacters(value) {}
  /**@type {number}*/
  get pixelsPerUnit() {}
  /**@type {number}*/
  get preferredHeight() {}
  /**@type {number}*/
  get preferredWidth() {}
  /**@type {Vector4}*/
  get raycastPadding() {}
  /**
 * @param {Vector4} value
 */
  set raycastPadding(value) {}
  /**@type {boolean}*/
  get raycastTarget() {}
  /**
 * @param {boolean} value
 */
  set raycastTarget(value) {}
  /**@type {RectTransform}*/
  get rectTransform() {}
  /**@type {number}*/
  get renderedHeight() {}
  /**@type {number}*/
  get renderedWidth() {}
  /**@type {Renderer}*/
  get renderer() {}
  /**@type {number}*/
  get renderMode() {}
  /**
 * @param {number} value
 */
  set renderMode(value) {}
  /**@type {boolean}*/
  get richText() {}
  /**
 * @param {boolean} value
 */
  set richText(value) {}
  /**@type {number}*/
  get sortingLayerID() {}
  /**
 * @param {number} value
 */
  set sortingLayerID(value) {}
  /**@type {number}*/
  get sortingOrder() {}
  /**
 * @param {number} value
 */
  set sortingOrder(value) {}
  /**@type {TMP_SpriteAnimator}*/
  get spriteAnimator() {}
  /**@type {TMP_SpriteAsset}*/
  get spriteAsset() {}
  /**
 * @param {TMP_SpriteAsset} value
 */
  set spriteAsset(value) {}
  /**@type {TMP_StyleSheet}*/
  get styleSheet() {}
  /**
 * @param {TMP_StyleSheet} value
 */
  set styleSheet(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {string}*/
  get text() {}
  /**
 * @param {string} value
 */
  set text(value) {}
  /**@type {Bounds}*/
  get textBounds() {}
  /**@type {TextContainer}*/
  get textContainer() {}
  /**@type {TMP_TextInfo}*/
  get textInfo() {}
  /**@type {ITextPreprocessor}*/
  get textPreprocessor() {}
  /**
 * @param {ITextPreprocessor} value
 */
  set textPreprocessor(value) {}
  /**@type {TMP_Style}*/
  get textStyle() {}
  /**
 * @param {TMP_Style} value
 */
  set textStyle(value) {}
  /**@type {boolean}*/
  get tintAllSprites() {}
  /**
 * @param {boolean} value
 */
  set tintAllSprites(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {boolean}*/
  get useGUILayout() {}
  /**
 * @param {boolean} value
 */
  set useGUILayout(value) {}
  /**@type {boolean}*/
  get useLegacyMeshGeneration() {}
  /**
 * @param {boolean} value
 */
  set useLegacyMeshGeneration(value) {}
  /**@type {boolean}*/
  get useMaxVisibleDescender() {}
  /**
 * @param {boolean} value
 */
  set useMaxVisibleDescender(value) {}
  /**@type {boolean}*/
  get vertexBufferAutoSizeReduction() {}
  /**
 * @param {boolean} value
 */
  set vertexBufferAutoSizeReduction(value) {}
  /**@type {number}*/
  get verticalAlignment() {}
  /**
 * @param {number} value
 */
  set verticalAlignment(value) {}
  /**@type {number}*/
  get verticalMapping() {}
  /**
 * @param {number} value
 */
  set verticalMapping(value) {}
  /**@type {number}*/
  get wordSpacing() {}
  /**
 * @param {number} value
 */
  set wordSpacing(value) {}
  /**@type {number}*/
  get wordWrappingRatios() {}
  /**
 * @param {number} value
 */
  set wordWrappingRatios(value) {}
}
class TextMeshProUGUI {
  constructor() {
    /**@type {boolean}*/
    this.m_isRebuildingLayout = null;
    /**@type {Coroutine}*/
    this.m_DelayedGraphicRebuild = null;
    /**@type {Coroutine}*/
    this.m_DelayedMaterialRebuild = null;
    /**@type {Rect}*/
    this.m_ClipRect = null;
    /**@type {boolean}*/
    this.m_ValidRect = null;
    /**@type {Action}*/
    this.OnPreRenderText = null;
    /**@type {boolean}*/
    this.m_hasFontAssetChanged = null;
    /**@type {TMP_SubMeshUI[]}*/
    this.m_subTextObjects = null;
    /**@type {number}*/
    this.m_previousLossyScaleY = null;
    /**@type {Vector3[]}*/
    this.m_RectTransformCorners = null;
    /**@type {CanvasRenderer}*/
    this.m_canvasRenderer = null;
    /**@type {Canvas}*/
    this.m_canvas = null;
    /**@type {number}*/
    this.m_CanvasScaleFactor = null;
    /**@type {boolean}*/
    this.m_isFirstAllocation = null;
    /**@type {number}*/
    this.m_max_characters = null;
    /**@type {Material}*/
    this.m_baseMaterial = null;
    /**@type {boolean}*/
    this.m_isScrollRegionSet = null;
    /**@type {Vector4}*/
    this.m_maskOffset = null;
    /**@type {Matrix4x4}*/
    this.m_EnvMapMatrix = null;
    /**@type {boolean}*/
    this.m_isRegisteredForEvents = null;
    /**@type {string}*/
    this.m_text = null;
    /**@type {ITextPreprocessor}*/
    this.m_TextPreprocessor = null;
    /**@type {boolean}*/
    this.m_isRightToLeft = null;
    /**@type {TMP_FontAsset}*/
    this.m_fontAsset = null;
    /**@type {TMP_FontAsset}*/
    this.m_currentFontAsset = null;
    /**@type {boolean}*/
    this.m_isSDFShader = null;
    /**@type {Material}*/
    this.m_sharedMaterial = null;
    /**@type {Material}*/
    this.m_currentMaterial = null;
    /**@type {number}*/
    this.m_currentMaterialIndex = null;
    /**@type {Material[]}*/
    this.m_fontSharedMaterials = null;
    /**@type {Material}*/
    this.m_fontMaterial = null;
    /**@type {Material[]}*/
    this.m_fontMaterials = null;
    /**@type {boolean}*/
    this.m_isMaterialDirty = null;
    /**@type {Color32}*/
    this.m_fontColor32 = null;
    /**@type {Color}*/
    this.m_fontColor = null;
    /**@type {Color32}*/
    this.m_underlineColor = null;
    /**@type {Color32}*/
    this.m_strikethroughColor = null;
    /**@type {boolean}*/
    this.m_enableVertexGradient = null;
    /**@type {number}*/
    this.m_colorMode = null;
    /**@type {VertexGradient}*/
    this.m_fontColorGradient = null;
    /**@type {TMP_ColorGradient}*/
    this.m_fontColorGradientPreset = null;
    /**@type {TMP_SpriteAsset}*/
    this.m_spriteAsset = null;
    /**@type {boolean}*/
    this.m_tintAllSprites = null;
    /**@type {boolean}*/
    this.m_tintSprite = null;
    /**@type {Color32}*/
    this.m_spriteColor = null;
    /**@type {TMP_StyleSheet}*/
    this.m_StyleSheet = null;
    /**@type {TMP_Style}*/
    this.m_TextStyle = null;
    /**@type {number}*/
    this.m_TextStyleHashCode = null;
    /**@type {boolean}*/
    this.m_overrideHtmlColors = null;
    /**@type {Color32}*/
    this.m_faceColor = null;
    /**@type {Color32}*/
    this.m_outlineColor = null;
    /**@type {number}*/
    this.m_outlineWidth = null;
    /**@type {number}*/
    this.m_fontSize = null;
    /**@type {number}*/
    this.m_currentFontSize = null;
    /**@type {number}*/
    this.m_fontSizeBase = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_sizeStack = null;
    /**@type {number}*/
    this.m_fontWeight = null;
    /**@type {number}*/
    this.m_FontWeightInternal = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_FontWeightStack = null;
    /**@type {boolean}*/
    this.m_enableAutoSizing = null;
    /**@type {number}*/
    this.m_maxFontSize = null;
    /**@type {number}*/
    this.m_minFontSize = null;
    /**@type {number}*/
    this.m_AutoSizeIterationCount = null;
    /**@type {number}*/
    this.m_AutoSizeMaxIterationCount = null;
    /**@type {boolean}*/
    this.m_IsAutoSizePointSizeSet = null;
    /**@type {number}*/
    this.m_fontSizeMin = null;
    /**@type {number}*/
    this.m_fontSizeMax = null;
    /**@type {number}*/
    this.m_fontStyle = null;
    /**@type {number}*/
    this.m_FontStyleInternal = null;
    /**@type {TMP_FontStyleStack}*/
    this.m_fontStyleStack = null;
    /**@type {boolean}*/
    this.m_isUsingBold = null;
    /**@type {number}*/
    this.m_HorizontalAlignment = null;
    /**@type {number}*/
    this.m_VerticalAlignment = null;
    /**@type {number}*/
    this.m_textAlignment = null;
    /**@type {number}*/
    this.m_lineJustification = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_lineJustificationStack = null;
    /**@type {Vector3[]}*/
    this.m_textContainerLocalCorners = null;
    /**@type {number}*/
    this.m_characterSpacing = null;
    /**@type {number}*/
    this.m_cSpacing = null;
    /**@type {number}*/
    this.m_monoSpacing = null;
    /**@type {number}*/
    this.m_wordSpacing = null;
    /**@type {number}*/
    this.m_lineSpacing = null;
    /**@type {number}*/
    this.m_lineSpacingDelta = null;
    /**@type {number}*/
    this.m_lineHeight = null;
    /**@type {boolean}*/
    this.m_IsDrivenLineSpacing = null;
    /**@type {number}*/
    this.m_lineSpacingMax = null;
    /**@type {number}*/
    this.m_paragraphSpacing = null;
    /**@type {number}*/
    this.m_charWidthMaxAdj = null;
    /**@type {number}*/
    this.m_charWidthAdjDelta = null;
    /**@type {boolean}*/
    this.m_enableWordWrapping = null;
    /**@type {boolean}*/
    this.m_isCharacterWrappingEnabled = null;
    /**@type {boolean}*/
    this.m_isNonBreakingSpace = null;
    /**@type {boolean}*/
    this.m_isIgnoringAlignment = null;
    /**@type {number}*/
    this.m_wordWrappingRatios = null;
    /**@type {number}*/
    this.m_overflowMode = null;
    /**@type {number}*/
    this.m_firstOverflowCharacterIndex = null;
    /**@type {TMP_Text}*/
    this.m_linkedTextComponent = null;
    /**@type {TMP_Text}*/
    this.parentLinkedComponent = null;
    /**@type {boolean}*/
    this.m_isTextTruncated = null;
    /**@type {boolean}*/
    this.m_enableKerning = null;
    /**@type {number}*/
    this.m_GlyphHorizontalAdvanceAdjustment = null;
    /**@type {boolean}*/
    this.m_enableExtraPadding = null;
    /**@type {boolean}*/
    this.checkPaddingRequired = null;
    /**@type {boolean}*/
    this.m_isRichText = null;
    /**@type {boolean}*/
    this.m_parseCtrlCharacters = null;
    /**@type {boolean}*/
    this.m_isOverlay = null;
    /**@type {boolean}*/
    this.m_isOrthographic = null;
    /**@type {boolean}*/
    this.m_isCullingEnabled = null;
    /**@type {boolean}*/
    this.m_isMaskingEnabled = null;
    /**@type {boolean}*/
    this.isMaskUpdateRequired = null;
    /**@type {boolean}*/
    this.m_ignoreCulling = null;
    /**@type {number}*/
    this.m_horizontalMapping = null;
    /**@type {number}*/
    this.m_verticalMapping = null;
    /**@type {number}*/
    this.m_uvLineOffset = null;
    /**@type {number}*/
    this.m_renderMode = null;
    /**@type {number}*/
    this.m_geometrySortingOrder = null;
    /**@type {boolean}*/
    this.m_IsTextObjectScaleStatic = null;
    /**@type {boolean}*/
    this.m_VertexBufferAutoSizeReduction = null;
    /**@type {number}*/
    this.m_firstVisibleCharacter = null;
    /**@type {number}*/
    this.m_maxVisibleCharacters = null;
    /**@type {number}*/
    this.m_maxVisibleWords = null;
    /**@type {number}*/
    this.m_maxVisibleLines = null;
    /**@type {boolean}*/
    this.m_useMaxVisibleDescender = null;
    /**@type {number}*/
    this.m_pageToDisplay = null;
    /**@type {boolean}*/
    this.m_isNewPage = null;
    /**@type {Vector4}*/
    this.m_margin = null;
    /**@type {number}*/
    this.m_marginLeft = null;
    /**@type {number}*/
    this.m_marginRight = null;
    /**@type {number}*/
    this.m_marginWidth = null;
    /**@type {number}*/
    this.m_marginHeight = null;
    /**@type {number}*/
    this.m_width = null;
    /**@type {TMP_TextInfo}*/
    this.m_textInfo = null;
    /**@type {boolean}*/
    this.m_havePropertiesChanged = null;
    /**@type {boolean}*/
    this.m_isUsingLegacyAnimationComponent = null;
    /**@type {Transform}*/
    this.m_transform = null;
    /**@type {RectTransform}*/
    this.m_rectTransform = null;
    /**@type {Vector2}*/
    this.m_PreviousRectTransformSize = null;
    /**@type {Vector2}*/
    this.m_PreviousPivotPosition = null;
    /**@type {boolean}*/
    this.m_autoSizeTextContainer = null;
    /**@type {Mesh}*/
    this.m_mesh = null;
    /**@type {boolean}*/
    this.m_isVolumetricText = null;
    /**@type {TMP_SpriteAnimator}*/
    this.m_spriteAnimator = null;
    /**@type {number}*/
    this.m_flexibleHeight = null;
    /**@type {number}*/
    this.m_flexibleWidth = null;
    /**@type {number}*/
    this.m_minWidth = null;
    /**@type {number}*/
    this.m_minHeight = null;
    /**@type {number}*/
    this.m_maxWidth = null;
    /**@type {number}*/
    this.m_maxHeight = null;
    /**@type {LayoutElement}*/
    this.m_LayoutElement = null;
    /**@type {number}*/
    this.m_preferredWidth = null;
    /**@type {number}*/
    this.m_renderedWidth = null;
    /**@type {boolean}*/
    this.m_isPreferredWidthDirty = null;
    /**@type {number}*/
    this.m_preferredHeight = null;
    /**@type {number}*/
    this.m_renderedHeight = null;
    /**@type {boolean}*/
    this.m_isPreferredHeightDirty = null;
    /**@type {boolean}*/
    this.m_isCalculatingPreferredValues = null;
    /**@type {number}*/
    this.m_layoutPriority = null;
    /**@type {boolean}*/
    this.m_isLayoutDirty = null;
    /**@type {boolean}*/
    this.m_isAwake = null;
    /**@type {boolean}*/
    this.m_isWaitingOnResourceLoad = null;
    /**@type {number}*/
    this.m_inputSource = null;
    /**@type {number}*/
    this.m_fontScaleMultiplier = null;
    /**@type {number}*/
    this.tag_LineIndent = null;
    /**@type {number}*/
    this.tag_Indent = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_indentStack = null;
    /**@type {boolean}*/
    this.tag_NoParsing = null;
    /**@type {boolean}*/
    this.m_isParsingText = null;
    /**@type {Matrix4x4}*/
    this.m_FXMatrix = null;
    /**@type {boolean}*/
    this.m_isFXMatrixSet = null;
    /**@type {UnicodeChar[]}*/
    this.m_TextProcessingArray = null;
    /**@type {number}*/
    this.m_InternalTextProcessingArraySize = null;
    /**@type {number}*/
    this.m_totalCharacterCount = null;
    /**@type {number}*/
    this.m_characterCount = null;
    /**@type {number}*/
    this.m_firstCharacterOfLine = null;
    /**@type {number}*/
    this.m_firstVisibleCharacterOfLine = null;
    /**@type {number}*/
    this.m_lastCharacterOfLine = null;
    /**@type {number}*/
    this.m_lastVisibleCharacterOfLine = null;
    /**@type {number}*/
    this.m_lineNumber = null;
    /**@type {number}*/
    this.m_lineVisibleCharacterCount = null;
    /**@type {number}*/
    this.m_pageNumber = null;
    /**@type {number}*/
    this.m_PageAscender = null;
    /**@type {number}*/
    this.m_maxTextAscender = null;
    /**@type {number}*/
    this.m_maxCapHeight = null;
    /**@type {number}*/
    this.m_ElementAscender = null;
    /**@type {number}*/
    this.m_ElementDescender = null;
    /**@type {number}*/
    this.m_maxLineAscender = null;
    /**@type {number}*/
    this.m_maxLineDescender = null;
    /**@type {number}*/
    this.m_startOfLineAscender = null;
    /**@type {number}*/
    this.m_startOfLineDescender = null;
    /**@type {number}*/
    this.m_lineOffset = null;
    /**@type {Extents}*/
    this.m_meshExtents = null;
    /**@type {Color32}*/
    this.m_htmlColor = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_colorStack = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_underlineColorStack = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_strikethroughColorStack = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_HighlightStateStack = null;
    /**@type {TMP_ColorGradient}*/
    this.m_colorGradientPreset = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_colorGradientStack = null;
    /**@type {boolean}*/
    this.m_colorGradientPresetIsTinted = null;
    /**@type {number}*/
    this.m_tabSpacing = null;
    /**@type {number}*/
    this.m_spacing = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_TextStyleStacks = null;
    /**@type {number}*/
    this.m_TextStyleStackDepth = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_ItalicAngleStack = null;
    /**@type {number}*/
    this.m_ItalicAngle = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_actionStack = null;
    /**@type {number}*/
    this.m_padding = null;
    /**@type {number}*/
    this.m_baselineOffset = null;
    /**@type {TMP_TextProcessingStack}*/
    this.m_baselineOffsetStack = null;
    /**@type {number}*/
    this.m_xAdvance = null;
    /**@type {number}*/
    this.m_textElementType = null;
    /**@type {TMP_TextElement}*/
    this.m_cached_TextElement = null;
    /**@type {TMP_Text.SpecialCharacter}*/
    this.m_Ellipsis = null;
    /**@type {TMP_Text.SpecialCharacter}*/
    this.m_Underline = null;
    /**@type {TMP_SpriteAsset}*/
    this.m_defaultSpriteAsset = null;
    /**@type {TMP_SpriteAsset}*/
    this.m_currentSpriteAsset = null;
    /**@type {number}*/
    this.m_spriteCount = null;
    /**@type {number}*/
    this.m_spriteIndex = null;
    /**@type {number}*/
    this.m_spriteAnimationID = null;
    /**@type {boolean}*/
    this.m_ignoreActiveState = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculateStencil = null;
    /**@type {Material}*/
    this.m_MaskMaterial = null;
    /**@type {boolean}*/
    this.m_IncludeForMasking = null;
    /**@type {boolean}*/
    this.m_ShouldRecalculate = null;
    /**@type {number}*/
    this.m_StencilValue = null;
    /**@type {Material}*/
    this.m_Material = null;
    /**@type {boolean}*/
    this.m_SkipLayoutUpdate = null;
    /**@type {boolean}*/
    this.m_SkipMaterialUpdate = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyLayoutCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyVertsCallback = null;
    /**@type {UnityAction}*/
    this.m_OnDirtyMaterialCallback = null;
    /**@type {Mesh}*/
    this.m_CachedMesh = null;
    /**@type {Vector2[]}*/
    this.m_CachedUvs = null;
  }
  /**@type {ProfilerMarker}*/
  static k_GenerateTextMarker;
  /**@type {ProfilerMarker}*/
  static k_SetArraySizesMarker;
  /**@type {ProfilerMarker}*/
  static k_GenerateTextPhaseIMarker;
  /**@type {ProfilerMarker}*/
  static k_ParseMarkupTextMarker;
  /**@type {ProfilerMarker}*/
  static k_CharacterLookupMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleGPOSFeaturesMarker;
  /**@type {ProfilerMarker}*/
  static k_CalculateVerticesPositionMarker;
  /**@type {ProfilerMarker}*/
  static k_ComputeTextMetricsMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleVisibleCharacterMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleWhiteSpacesMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleHorizontalLineBreakingMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleVerticalLineBreakingMarker;
  /**@type {ProfilerMarker}*/
  static k_SaveGlyphVertexDataMarker;
  /**@type {ProfilerMarker}*/
  static k_ComputeCharacterAdvanceMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleCarriageReturnMarker;
  /**@type {ProfilerMarker}*/
  static k_HandleLineTerminationMarker;
  /**@type {ProfilerMarker}*/
  static k_SavePageInfoMarker;
  /**@type {ProfilerMarker}*/
  static k_SaveProcessingStatesMarker;
  /**@type {ProfilerMarker}*/
  static k_GenerateTextPhaseIIMarker;
  /**@type {ProfilerMarker}*/
  static k_GenerateTextPhaseIIIMarker;
  /**
   * @param {Action} value
   * @returns {void}
   */
  add_OnPreRenderText(value) {}
  /**
   * @param {number} startIndex
   * @param {number} endIndex
   * @param {number} offset
   * @returns {void}
   */
  AdjustLineOffset(startIndex, endIndex, offset) {}
  /**
   * @returns {void}
   */
  Awake() {}
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
  CalculateLayoutInputHorizontal() {}
  /**
   * @returns {void}
   */
  CalculateLayoutInputVertical() {}
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
   * @returns {void}
   */
  ClearMesh() {}
  /**
   * @param {boolean} uploadGeometry
   * @returns {void}
   */
  ClearMesh(uploadGeometry) {}
  /**
   * @param {string} tag
   * @returns {boolean}
   */
  CompareTag(tag) {}
  /**
   * @returns {void}
   */
  ComputeMarginSize() {}
  /**
   * @param {Char[]} chars
   * @param {number} startIndex
   * @param {number} length
   * @returns {number}
   */
  ConvertToFloat(chars, startIndex, length) {}
  /**
   * @param {Material} source
   * @returns {Material}
   */
  CreateMaterialInstance(source) {}
  /**
   * @param {number} alpha
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @returns {void}
   */
  CrossFadeAlpha(alpha, duration, ignoreTimeScale) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @param {boolean} useRGB
   * @returns {void}
   */
  CrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha, useRGB) {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  Cull(clipRect, validRect) {}
  /**
   * @returns {IEnumerator}
   */
  DelayedGraphicRebuild() {}
  /**
   * @returns {IEnumerator}
   */
  DelayedMaterialRebuild() {}
  /**
   * @returns {void}
   */
  DestroySubMeshObjects() {}
  /**
   * @returns {void}
   */
  DisableMasking() {}
  /**
   * @returns {void}
   */
  EnableMasking() {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} i
   * @param {number} index_X4
   * @returns {void}
   */
  FillCharacterVertexBuffers(i, index_X4) {}
  /**
   * @param {number} i
   * @param {number} index_X4
   * @param {boolean} isVolumetric
   * @returns {void}
   */
  FillCharacterVertexBuffers(i, index_X4, isVolumetric) {}
  /**
   * @param {number} i
   * @param {number} index_X4
   * @returns {void}
   */
  FillSpriteVertexBuffers(i, index_X4) {}
  /**
   * @param {boolean} ignoreActiveState
   * @param {boolean} forceTextReparsing
   * @returns {void}
   */
  ForceMeshUpdate(ignoreActiveState, forceTextReparsing) {}
  /**
   * @returns {void}
   */
  GenerateTextMesh() {}
  /**
   * @returns {Canvas}
   */
  GetCanvas() {}
  /**
   * @returns {Rect}
   */
  GetCanvasSpaceClippingRect() {}
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
   * @returns {Bounds}
   */
  GetCompoundBounds() {}
  /**
   * @param {TMP_FontAsset} fontAsset
   * @returns {void}
   */
  GetEllipsisSpecialCharacter(fontAsset) {}
  /**
   * @param {number} fontWeight
   * @returns {TMP_FontAsset}
   */
  GetFontAssetForWeight(fontWeight) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {Material} mat
   * @returns {Material}
   */
  GetMaterial(mat) {}
  /**
   * @param {Material[]} mats
   * @returns {Material[]}
   */
  GetMaterials(mats) {}
  /**
   * @param {Material} baseMaterial
   * @returns {Material}
   */
  GetModifiedMaterial(baseMaterial) {}
  /**
   * @returns {number}
   */
  GetPaddingForMaterial() {}
  /**
   * @param {Material} mat
   * @returns {number}
   */
  GetPaddingForMaterial(mat) {}
  /**
   * @returns {string}
   */
  GetParsedText() {}
  /**
   * @returns {Rect}
   */
  GetPixelAdjustedRect() {}
  /**
   * @returns {number}
   */
  GetPreferredHeight() {}
  /**
   * @returns {Vector2}
   */
  GetPreferredValues() {}
  /**
   * @param {number} width
   * @param {number} height
   * @returns {Vector2}
   */
  GetPreferredValues(width, height) {}
  /**
   * @param {string} text
   * @returns {Vector2}
   */
  GetPreferredValues(text) {}
  /**
   * @param {string} text
   * @param {number} width
   * @param {number} height
   * @returns {Vector2}
   */
  GetPreferredValues(text, width, height) {}
  /**
   * @returns {number}
   */
  GetPreferredWidth() {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {number}
   */
  GetRenderedHeight(onlyVisibleCharacters) {}
  /**
   * @returns {Vector2}
   */
  GetRenderedValues() {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {Vector2}
   */
  GetRenderedValues(onlyVisibleCharacters) {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {number}
   */
  GetRenderedWidth(onlyVisibleCharacters) {}
  /**
   * @returns {string}
   */
  GetScriptClassName() {}
  /**
   * @returns {Material[]}
   */
  GetSharedMaterials() {}
  /**
   * @param {TMP_FontAsset} fontAsset
   * @returns {void}
   */
  GetSpecialCharacters(fontAsset) {}
  /**
   * @returns {Bounds}
   */
  GetTextBounds() {}
  /**
   * @param {boolean} onlyVisibleCharacters
   * @returns {Bounds}
   */
  GetTextBounds(onlyVisibleCharacters) {}
  /**
   * @returns {Vector3[]}
   */
  GetTextContainerLocalCorners() {}
  /**
   * @param {string} text
   * @returns {TMP_TextInfo}
   */
  GetTextInfo(text) {}
  /**
   * @param {TMP_FontAsset} fontAsset
   * @returns {void}
   */
  GetUnderlineSpecialCharacter(fontAsset) {}
  /**
   * @param {string} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {Int32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {UInt32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {StringBuilder} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF16(text, i) {}
  /**
   * @param {string} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @param {Int32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @param {UInt32[]} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @param {StringBuilder} text
   * @param {number} i
   * @returns {number}
   */
  GetUTF32(text, i) {}
  /**
   * @returns {void}
   */
  GraphicUpdateComplete() {}
  /**
   * @param {Char[]} hexChars
   * @param {number} tagCount
   * @returns {Color32}
   */
  HexCharsToColor(hexChars, tagCount) {}
  /**
   * @param {Char[]} hexChars
   * @param {number} startIndex
   * @param {number} length
   * @returns {Color32}
   */
  HexCharsToColor(hexChars, startIndex, length) {}
  /**
   * @param {string} hex
   * @returns {number}
   */
  HexToInt(hex) {}
  /**
   * @param {number} alpha
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @returns {void}
   */
  InternalCrossFadeAlpha(alpha, duration, ignoreTimeScale) {}
  /**
   * @param {Color} targetColor
   * @param {number} duration
   * @param {boolean} ignoreTimeScale
   * @param {boolean} useAlpha
   * @returns {void}
   */
  InternalCrossFadeColor(targetColor, duration, ignoreTimeScale, useAlpha) {}
  /**
   * @returns {void}
   */
  InternalUpdate() {}
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
  IsActive() {}
  /**
   * @returns {boolean}
   */
  IsDestroyed() {}
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
   * @param {TMP_Text} targetTextComponent
   * @returns {boolean}
   */
  IsSelfOrLinkedAncestor(targetTextComponent) {}
  /**
   * @returns {void}
   */
  LayoutComplete() {}
  /**
   * @returns {void}
   */
  LoadDefaultSettings() {}
  /**
   * @returns {void}
   */
  LoadFontAsset() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @returns {void}
   */
  OnBeforeTransformParentChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasGroupChanged() {}
  /**
   * @returns {void}
   */
  OnCanvasHierarchyChanged() {}
  /**
   * @returns {void}
   */
  OnCullingChanged() {}
  /**
   * @returns {void}
   */
  OnDestroy() {}
  /**
   * @returns {void}
   */
  OnDidApplyAnimationProperties() {}
  /**
   * @returns {void}
   */
  OnDisable() {}
  /**
   * @returns {void}
   */
  OnEnable() {}
  /**
   * @param {List} vbo
   * @returns {void}
   */
  OnFillVBO(vbo) {}
  /**
   * @param {Mesh} m
   * @returns {void}
   */
  OnPopulateMesh(m) {}
  /**
   * @param {VertexHelper} vh
   * @returns {void}
   */
  OnPopulateMesh(vh) {}
  /**
   * @returns {void}
   */
  OnPreRenderCanvas() {}
  /**
   * @returns {void}
   */
  OnRectTransformDimensionsChange() {}
  /**
   * @returns {void}
   */
  OnTransformParentChanged() {}
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} scale
   * @returns {Vector2}
   */
  PackUV(x, y, scale) {}
  /**
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  PackUV(x, y) {}
  /**
   * @returns {void}
   */
  ParentMaskStateChanged() {}
  /**
   * @returns {void}
   */
  ParseInputText() {}
  /**
   * @param {Vector2} point
   * @returns {Vector2}
   */
  PixelAdjustPoint(point) {}
  /**
   * @param {Vector2} sp
   * @param {Camera} eventCamera
   * @returns {boolean}
   */
  Raycast(sp, eventCamera) {}
  /**
   * @param {number} update
   * @returns {void}
   */
  Rebuild(update) {}
  /**
   * @returns {void}
   */
  RecalculateClipping() {}
  /**
   * @returns {void}
   */
  RecalculateMasking() {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  RegisterDirtyVerticesCallback(action) {}
  /**
   * @param {TMP_Text} targetTextComponent
   * @returns {void}
   */
  ReleaseLinkedTextComponent(targetTextComponent) {}
  /**
   * @param {Action} value
   * @returns {void}
   */
  remove_OnPreRenderText(value) {}
  /**
   * @param {Int32[]} chars
   * @param {number} insertionIndex
   * @param {number} tagLength
   * @param {string} c
   * @returns {void}
   */
  ReplaceTagWithCharacter(chars, insertionIndex, tagLength, c) {}
  /**
   * @param {number} size
   * @returns {void}
   */
  ResizeLineExtents(size) {}
  /**
   * @param {number} padding
   * @param {number} style_padding
   * @param {Color32} vertexColor
   * @returns {void}
   */
  SaveGlyphVertexInfo(padding, style_padding, vertexColor) {}
  /**
   * @param {Color32} vertexColor
   * @returns {void}
   */
  SaveSpriteVertexInfo(vertexColor) {}
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
   * @param {boolean} state
   * @returns {void}
   */
  SetActiveSubMeshes(state) {}
  /**
   * @returns {void}
   */
  SetAllDirty() {}
  /**
   * @param {UnicodeChar[]} unicodeChars
   * @returns {number}
   */
  SetArraySizes(unicodeChars) {}
  /**
   * @param {Char[]} sourceText
   * @returns {void}
   */
  SetCharArray(sourceText) {}
  /**
   * @param {Char[]} sourceText
   * @param {number} start
   * @param {number} length
   * @returns {void}
   */
  SetCharArray(sourceText, start, length) {}
  /**
   * @param {Rect} clipRect
   * @param {boolean} validRect
   * @returns {void}
   */
  SetClipRect(clipRect, validRect) {}
  /**
   * @param {Vector2} clipSoftness
   * @returns {void}
   */
  SetClipSoftness(clipSoftness) {}
  /**
   * @returns {void}
   */
  SetCulling() {}
  /**
   * @param {Color32} color
   * @returns {void}
   */
  SetFaceColor(color) {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  SetFontBaseMaterial(mat) {}
  /**
   * @returns {void}
   */
  SetLayoutDirty() {}
  /**
   * @returns {void}
   */
  SetMaterialDirty() {}
  /**
   * @param {number} size
   * @returns {void}
   */
  SetMeshArrays(size) {}
  /**
   * @returns {void}
   */
  SetNativeSize() {}
  /**
   * @param {Color32} color
   * @returns {void}
   */
  SetOutlineColor(color) {}
  /**
   * @param {number} thickness
   * @returns {void}
   */
  SetOutlineThickness(thickness) {}
  /**
   * @returns {void}
   */
  SetPerspectiveCorrection() {}
  /**
   * @returns {void}
   */
  SetRaycastDirty() {}
  /**
   * @returns {void}
   */
  SetShaderDepth() {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  SetSharedMaterial(mat) {}
  /**
   * @param {Material[]} materials
   * @returns {void}
   */
  SetSharedMaterials(materials) {}
  /**
   * @param {string} sourceText
   * @param {boolean} syncTextInputBox
   * @returns {void}
   */
  SetText(sourceText, syncTextInputBox) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @returns {void}
   */
  SetText(sourceText, arg0) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @param {number} arg5
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4, arg5) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @param {number} arg5
   * @param {number} arg6
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4, arg5, arg6) {}
  /**
   * @param {string} sourceText
   * @param {number} arg0
   * @param {number} arg1
   * @param {number} arg2
   * @param {number} arg3
   * @param {number} arg4
   * @param {number} arg5
   * @param {number} arg6
   * @param {number} arg7
   * @returns {void}
   */
  SetText(sourceText, arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {}
  /**
   * @param {StringBuilder} sourceText
   * @returns {void}
   */
  SetText(sourceText) {}
  /**
   * @param {Char[]} sourceText
   * @returns {void}
   */
  SetText(sourceText) {}
  /**
   * @param {Char[]} sourceText
   * @param {number} start
   * @param {number} length
   * @returns {void}
   */
  SetText(sourceText, start, length) {}
  /**
   * @param {number} order
   * @returns {void}
   */
  SetTextSortingOrder(order) {}
  /**
   * @param {Int32[]} order
   * @returns {void}
   */
  SetTextSortingOrder(order) {}
  /**
   * @param {TMP_ColorGradient} gradient
   * @returns {void}
   */
  SetVertexColorGradient(gradient) {}
  /**
   * @param {Vector3[]} vertices
   * @returns {void}
   */
  SetVertices(vertices) {}
  /**
   * @returns {void}
   */
  SetVerticesDirty() {}
  /**
   * @returns {void}
   */
  Start() {}
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
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyLayoutCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyMaterialCallback(action) {}
  /**
   * @param {UnityAction} action
   * @returns {void}
   */
  UnregisterDirtyVerticesCallback(action) {}
  /**
   * @returns {void}
   */
  UpdateCulling() {}
  /**
   * @returns {void}
   */
  UpdateEnvMapMatrix() {}
  /**
   * @returns {void}
   */
  UpdateFontAsset() {}
  /**
   * @param {Mesh} mesh
   * @param {number} index
   * @returns {void}
   */
  UpdateGeometry(mesh, index) {}
  /**
   * @returns {void}
   */
  UpdateGeometry() {}
  /**
   * @returns {void}
   */
  UpdateMask() {}
  /**
   * @returns {void}
   */
  UpdateMaterial() {}
  /**
   * @returns {void}
   */
  UpdateMeshPadding() {}
  /**
   * @param {number} scaleDelta
   * @returns {void}
   */
  UpdateSDFScale(scaleDelta) {}
  /**
   * @returns {void}
   */
  UpdateSubObjectPivot() {}
  /**
   * @param {number} flags
   * @returns {void}
   */
  UpdateVertexData(flags) {}
  /**
   * @returns {void}
   */
  UpdateVertexData() {}
  /**@type {number}*/
  get alignment() {}
  /**
 * @param {number} value
 */
  set alignment(value) {}
  /**@type {number}*/
  get alpha() {}
  /**
 * @param {number} value
 */
  set alpha(value) {}
  /**@type {boolean}*/
  get autoSizeTextContainer() {}
  /**
 * @param {boolean} value
 */
  set autoSizeTextContainer(value) {}
  /**@type {Bounds}*/
  get bounds() {}
  /**@type {Canvas}*/
  get canvas() {}
  /**@type {CanvasRenderer}*/
  get canvasRenderer() {}
  /**@type {number}*/
  get characterSpacing() {}
  /**
 * @param {number} value
 */
  set characterSpacing(value) {}
  /**@type {number}*/
  get characterWidthAdjustment() {}
  /**
 * @param {number} value
 */
  set characterWidthAdjustment(value) {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {VertexGradient}*/
  get colorGradient() {}
  /**
 * @param {VertexGradient} value
 */
  set colorGradient(value) {}
  /**@type {TMP_ColorGradient}*/
  get colorGradientPreset() {}
  /**
 * @param {TMP_ColorGradient} value
 */
  set colorGradientPreset(value) {}
  /**@type {Material}*/
  get defaultMaterial() {}
  /**@type {number}*/
  get depth() {}
  /**@type {CancellationToken}*/
  get destroyCancellationToken() {}
  /**@type {boolean}*/
  get enableAutoSizing() {}
  /**
 * @param {boolean} value
 */
  set enableAutoSizing(value) {}
  /**@type {boolean}*/
  get enableCulling() {}
  /**
 * @param {boolean} value
 */
  set enableCulling(value) {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {boolean}*/
  get enableKerning() {}
  /**
 * @param {boolean} value
 */
  set enableKerning(value) {}
  /**@type {boolean}*/
  get enableVertexGradient() {}
  /**
 * @param {boolean} value
 */
  set enableVertexGradient(value) {}
  /**@type {boolean}*/
  get enableWordWrapping() {}
  /**
 * @param {boolean} value
 */
  set enableWordWrapping(value) {}
  /**@type {boolean}*/
  get extraPadding() {}
  /**
 * @param {boolean} value
 */
  set extraPadding(value) {}
  /**@type {Color32}*/
  get faceColor() {}
  /**
 * @param {Color32} value
 */
  set faceColor(value) {}
  /**@type {number}*/
  get firstOverflowCharacterIndex() {}
  /**@type {number}*/
  get firstVisibleCharacter() {}
  /**
 * @param {number} value
 */
  set firstVisibleCharacter(value) {}
  /**@type {number}*/
  get flexibleHeight() {}
  /**@type {number}*/
  get flexibleWidth() {}
  /**@type {TMP_FontAsset}*/
  get font() {}
  /**
 * @param {TMP_FontAsset} value
 */
  set font(value) {}
  /**@type {Material}*/
  get fontMaterial() {}
  /**
 * @param {Material} value
 */
  set fontMaterial(value) {}
  /**@type {Material[]}*/
  get fontMaterials() {}
  /**
 * @param {Material[]} value
 */
  set fontMaterials(value) {}
  /**@type {Material}*/
  get fontSharedMaterial() {}
  /**
 * @param {Material} value
 */
  set fontSharedMaterial(value) {}
  /**@type {Material[]}*/
  get fontSharedMaterials() {}
  /**
 * @param {Material[]} value
 */
  set fontSharedMaterials(value) {}
  /**@type {number}*/
  get fontSize() {}
  /**
 * @param {number} value
 */
  set fontSize(value) {}
  /**@type {number}*/
  get fontSizeMax() {}
  /**
 * @param {number} value
 */
  set fontSizeMax(value) {}
  /**@type {number}*/
  get fontSizeMin() {}
  /**
 * @param {number} value
 */
  set fontSizeMin(value) {}
  /**@type {number}*/
  get fontStyle() {}
  /**
 * @param {number} value
 */
  set fontStyle(value) {}
  /**@type {number}*/
  get fontWeight() {}
  /**
 * @param {number} value
 */
  set fontWeight(value) {}
  /**@type {GameObject}*/
  get gameObject() {}
  /**@type {number}*/
  get geometrySortingOrder() {}
  /**
 * @param {number} value
 */
  set geometrySortingOrder(value) {}
  /**@type {boolean}*/
  get havePropertiesChanged() {}
  /**
 * @param {boolean} value
 */
  set havePropertiesChanged(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {number}*/
  get horizontalAlignment() {}
  /**
 * @param {number} value
 */
  set horizontalAlignment(value) {}
  /**@type {number}*/
  get horizontalMapping() {}
  /**
 * @param {number} value
 */
  set horizontalMapping(value) {}
  /**@type {boolean}*/
  get ignoreVisibility() {}
  /**
 * @param {boolean} value
 */
  set ignoreVisibility(value) {}
  /**@type {boolean}*/
  get isActiveAndEnabled() {}
  /**@type {boolean}*/
  get isMaskingGraphic() {}
  /**
 * @param {boolean} value
 */
  set isMaskingGraphic(value) {}
  /**@type {boolean}*/
  get isOrthographic() {}
  /**
 * @param {boolean} value
 */
  set isOrthographic(value) {}
  /**@type {boolean}*/
  get isOverlay() {}
  /**
 * @param {boolean} value
 */
  set isOverlay(value) {}
  /**@type {boolean}*/
  get isRightToLeftText() {}
  /**
 * @param {boolean} value
 */
  set isRightToLeftText(value) {}
  /**@type {boolean}*/
  get isTextObjectScaleStatic() {}
  /**
 * @param {boolean} value
 */
  set isTextObjectScaleStatic(value) {}
  /**@type {boolean}*/
  get isTextOverflowing() {}
  /**@type {boolean}*/
  get isTextTruncated() {}
  /**@type {boolean}*/
  get isUsingBold() {}
  /**@type {boolean}*/
  get isUsingLegacyAnimationComponent() {}
  /**
 * @param {boolean} value
 */
  set isUsingLegacyAnimationComponent(value) {}
  /**@type {boolean}*/
  get isVolumetricText() {}
  /**
 * @param {boolean} value
 */
  set isVolumetricText(value) {}
  /**@type {LayoutElement}*/
  get layoutElement() {}
  /**@type {number}*/
  get layoutPriority() {}
  /**@type {number}*/
  get lineSpacing() {}
  /**
 * @param {number} value
 */
  set lineSpacing(value) {}
  /**@type {number}*/
  get lineSpacingAdjustment() {}
  /**
 * @param {number} value
 */
  set lineSpacingAdjustment(value) {}
  /**@type {TMP_Text}*/
  get linkedTextComponent() {}
  /**
 * @param {TMP_Text} value
 */
  set linkedTextComponent(value) {}
  /**@type {Texture}*/
  get mainTexture() {}
  /**@type {number}*/
  get mappingUvLineOffset() {}
  /**
 * @param {number} value
 */
  set mappingUvLineOffset(value) {}
  /**@type {Vector4}*/
  get margin() {}
  /**
 * @param {Vector4} value
 */
  set margin(value) {}
  /**@type {boolean}*/
  get maskable() {}
  /**
 * @param {boolean} value
 */
  set maskable(value) {}
  /**@type {Vector4}*/
  get maskOffset() {}
  /**
 * @param {Vector4} value
 */
  set maskOffset(value) {}
  /**@type {Material}*/
  get material() {}
  /**
 * @param {Material} value
 */
  set material(value) {}
  /**@type {Material}*/
  get materialForRendering() {}
  /**@type {number}*/
  get maxHeight() {}
  /**@type {number}*/
  get maxVisibleCharacters() {}
  /**
 * @param {number} value
 */
  set maxVisibleCharacters(value) {}
  /**@type {number}*/
  get maxVisibleLines() {}
  /**
 * @param {number} value
 */
  set maxVisibleLines(value) {}
  /**@type {number}*/
  get maxVisibleWords() {}
  /**
 * @param {number} value
 */
  set maxVisibleWords(value) {}
  /**@type {number}*/
  get maxWidth() {}
  /**@type {Mesh}*/
  get mesh() {}
  /**@type {number}*/
  get minHeight() {}
  /**@type {number}*/
  get minWidth() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {MaskableGraphic.CullStateChangedEvent}*/
  get onCullStateChanged() {}
  /**
 * @param {MaskableGraphic.CullStateChangedEvent} value
 */
  set onCullStateChanged(value) {}
  /**@type {Color32}*/
  get outlineColor() {}
  /**
 * @param {Color32} value
 */
  set outlineColor(value) {}
  /**@type {number}*/
  get outlineWidth() {}
  /**
 * @param {number} value
 */
  set outlineWidth(value) {}
  /**@type {number}*/
  get overflowMode() {}
  /**
 * @param {number} value
 */
  set overflowMode(value) {}
  /**@type {boolean}*/
  get overrideColorTags() {}
  /**
 * @param {boolean} value
 */
  set overrideColorTags(value) {}
  /**@type {number}*/
  get pageToDisplay() {}
  /**
 * @param {number} value
 */
  set pageToDisplay(value) {}
  /**@type {number}*/
  get paragraphSpacing() {}
  /**
 * @param {number} value
 */
  set paragraphSpacing(value) {}
  /**@type {boolean}*/
  get parseCtrlCharacters() {}
  /**
 * @param {boolean} value
 */
  set parseCtrlCharacters(value) {}
  /**@type {number}*/
  get pixelsPerUnit() {}
  /**@type {number}*/
  get preferredHeight() {}
  /**@type {number}*/
  get preferredWidth() {}
  /**@type {Vector4}*/
  get raycastPadding() {}
  /**
 * @param {Vector4} value
 */
  set raycastPadding(value) {}
  /**@type {boolean}*/
  get raycastTarget() {}
  /**
 * @param {boolean} value
 */
  set raycastTarget(value) {}
  /**@type {RectTransform}*/
  get rectTransform() {}
  /**@type {number}*/
  get renderedHeight() {}
  /**@type {number}*/
  get renderedWidth() {}
  /**@type {number}*/
  get renderMode() {}
  /**
 * @param {number} value
 */
  set renderMode(value) {}
  /**@type {boolean}*/
  get richText() {}
  /**
 * @param {boolean} value
 */
  set richText(value) {}
  /**@type {TMP_SpriteAnimator}*/
  get spriteAnimator() {}
  /**@type {TMP_SpriteAsset}*/
  get spriteAsset() {}
  /**
 * @param {TMP_SpriteAsset} value
 */
  set spriteAsset(value) {}
  /**@type {TMP_StyleSheet}*/
  get styleSheet() {}
  /**
 * @param {TMP_StyleSheet} value
 */
  set styleSheet(value) {}
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {string}*/
  get text() {}
  /**
 * @param {string} value
 */
  set text(value) {}
  /**@type {Bounds}*/
  get textBounds() {}
  /**@type {TMP_TextInfo}*/
  get textInfo() {}
  /**@type {ITextPreprocessor}*/
  get textPreprocessor() {}
  /**
 * @param {ITextPreprocessor} value
 */
  set textPreprocessor(value) {}
  /**@type {TMP_Style}*/
  get textStyle() {}
  /**
 * @param {TMP_Style} value
 */
  set textStyle(value) {}
  /**@type {boolean}*/
  get tintAllSprites() {}
  /**
 * @param {boolean} value
 */
  set tintAllSprites(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {boolean}*/
  get useGUILayout() {}
  /**
 * @param {boolean} value
 */
  set useGUILayout(value) {}
  /**@type {boolean}*/
  get useLegacyMeshGeneration() {}
  /**
 * @param {boolean} value
 */
  set useLegacyMeshGeneration(value) {}
  /**@type {boolean}*/
  get useMaxVisibleDescender() {}
  /**
 * @param {boolean} value
 */
  set useMaxVisibleDescender(value) {}
  /**@type {boolean}*/
  get vertexBufferAutoSizeReduction() {}
  /**
 * @param {boolean} value
 */
  set vertexBufferAutoSizeReduction(value) {}
  /**@type {number}*/
  get verticalAlignment() {}
  /**
 * @param {number} value
 */
  set verticalAlignment(value) {}
  /**@type {number}*/
  get verticalMapping() {}
  /**
 * @param {number} value
 */
  set verticalMapping(value) {}
  /**@type {number}*/
  get wordSpacing() {}
  /**
 * @param {number} value
 */
  set wordSpacing(value) {}
  /**@type {number}*/
  get wordWrappingRatios() {}
  /**
 * @param {number} value
 */
  set wordWrappingRatios(value) {}
}
class Material {
  /**
   * @param {Shader} shader
   */
  constructor(shader) {
  }
  /**
   * @returns {number}
   */
  ComputeCRC() {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  CopyMatchingPropertiesFromMaterial(mat) {}
  /**
   * @param {Material} mat
   * @returns {void}
   */
  CopyPropertiesFromMaterial(mat) {}
  /**
   * @param {string} scriptContents
   * @returns {Material}
   */
  static Create(scriptContents) {}
  /**
   * @param {Material} self
   * @param {Material} source
   * @returns {void}
   */
  static CreateWithMaterial(self, source) {}
  /**
   * @param {Material} self
   * @param {Shader} shader
   * @returns {void}
   */
  static CreateWithShader(self, shader) {}
  /**
   * @param {Material} self
   * @returns {void}
   */
  static CreateWithString(self) {}
  /**
   * @param {string} keyword
   * @returns {void}
   */
  DisableKeyword(keyword) {}
  /**
   * @param {LocalKeyword} keyword
   * @returns {void}
   */
  DisableLocalKeyword(keyword) {}
  /**
   * @param {string} keyword
   * @returns {void}
   */
  EnableKeyword(keyword) {}
  /**
   * @param {LocalKeyword} keyword
   * @returns {void}
   */
  EnableLocalKeyword(keyword) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  ExtractColorArray(name, values) {}
  /**
   * @param {number} name
   * @param {Color[]} val
   * @returns {void}
   */
  ExtractColorArrayImpl(name, val) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  ExtractFloatArray(name, values) {}
  /**
   * @param {number} name
   * @param {Single[]} val
   * @returns {void}
   */
  ExtractFloatArrayImpl(name, val) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  ExtractMatrixArray(name, values) {}
  /**
   * @param {number} name
   * @param {Matrix4x4[]} val
   * @returns {void}
   */
  ExtractMatrixArrayImpl(name, val) {}
  /**
   * @param {number} name
   * @param {List} values
   * @returns {void}
   */
  ExtractVectorArray(name, values) {}
  /**
   * @param {number} name
   * @param {Vector4[]} val
   * @returns {void}
   */
  ExtractVectorArrayImpl(name, val) {}
  /**
   * @param {string} passName
   * @returns {number}
   */
  FindPass(passName) {}
  /**
   * @param {string} name
   * @returns {GraphicsBufferHandle}
   */
  GetBuffer(name) {}
  /**
   * @param {number} name
   * @returns {GraphicsBufferHandle}
   */
  GetBufferImpl(name) {}
  /**
   * @param {string} name
   * @returns {Color}
   */
  GetColor(name) {}
  /**
   * @param {number} nameID
   * @returns {Color}
   */
  GetColor(nameID) {}
  /**
   * @param {string} name
   * @returns {Color[]}
   */
  GetColorArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Color[]}
   */
  GetColorArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  GetColorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  GetColorArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  GetColorArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Color[]}
   */
  GetColorArrayImpl(name) {}
  /**
   * @param {number} name
   * @returns {Color}
   */
  GetColorImpl(name) {}
  /**
   * @param {string} name
   * @returns {GraphicsBufferHandle}
   */
  GetConstantBuffer(name) {}
  /**
   * @param {number} name
   * @returns {GraphicsBufferHandle}
   */
  GetConstantBufferImpl(name) {}
  /**
   * @returns {Material}
   */
  static GetDefaultLineMaterial() {}
  /**
   * @returns {Material}
   */
  static GetDefaultMaterial() {}
  /**
   * @returns {Material}
   */
  static GetDefaultParticleMaterial() {}
  /**
   * @returns {LocalKeyword[]}
   */
  GetEnabledKeywords() {}
  /**
   * @param {number} attributeFlag
   * @returns {number}
   */
  GetFirstPropertyNameIdByAttribute(attributeFlag) {}
  /**
   * @param {string} name
   * @returns {number}
   */
  GetFloat(name) {}
  /**
   * @param {number} nameID
   * @returns {number}
   */
  GetFloat(nameID) {}
  /**
   * @param {string} name
   * @returns {Single[]}
   */
  GetFloatArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Single[]}
   */
  GetFloatArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  GetFloatArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  GetFloatArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  GetFloatArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Single[]}
   */
  GetFloatArrayImpl(name) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  GetFloatImpl(name) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @param {string} name
   * @returns {number}
   */
  GetInt(name) {}
  /**
   * @param {number} nameID
   * @returns {number}
   */
  GetInt(nameID) {}
  /**
   * @param {string} name
   * @returns {number}
   */
  GetInteger(name) {}
  /**
   * @param {number} nameID
   * @returns {number}
   */
  GetInteger(nameID) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  GetIntImpl(name) {}
  /**
   * @param {string} name
   * @returns {Matrix4x4}
   */
  GetMatrix(name) {}
  /**
   * @param {number} nameID
   * @returns {Matrix4x4}
   */
  GetMatrix(nameID) {}
  /**
   * @param {string} name
   * @returns {Matrix4x4[]}
   */
  GetMatrixArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Matrix4x4[]}
   */
  GetMatrixArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  GetMatrixArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  GetMatrixArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  GetMatrixArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Matrix4x4[]}
   */
  GetMatrixArrayImpl(name) {}
  /**
   * @param {number} name
   * @returns {Matrix4x4}
   */
  GetMatrixImpl(name) {}
  /**
   * @param {number} pass
   * @returns {string}
   */
  GetPassName(pass) {}
  /**
   * @param {number} type
   * @returns {String[]}
   */
  GetPropertyNames(type) {}
  /**
   * @param {number} propertyType
   * @returns {String[]}
   */
  GetPropertyNamesImpl(propertyType) {}
  /**
   * @returns {String[]}
   */
  GetShaderKeywords() {}
  /**
   * @param {string} passName
   * @returns {boolean}
   */
  GetShaderPassEnabled(passName) {}
  /**
   * @param {string} tag
   * @param {boolean} searchFallbacks
   * @param {string} defaultValue
   * @returns {string}
   */
  GetTag(tag, searchFallbacks, defaultValue) {}
  /**
   * @param {string} tag
   * @param {boolean} searchFallbacks
   * @returns {string}
   */
  GetTag(tag, searchFallbacks) {}
  /**
   * @param {string} tag
   * @param {boolean} currentSubShaderOnly
   * @param {string} defaultValue
   * @returns {string}
   */
  GetTagImpl(tag, currentSubShaderOnly, defaultValue) {}
  /**
   * @param {string} name
   * @returns {Texture}
   */
  GetTexture(name) {}
  /**
   * @param {number} nameID
   * @returns {Texture}
   */
  GetTexture(nameID) {}
  /**
   * @param {number} name
   * @returns {Texture}
   */
  GetTextureImpl(name) {}
  /**
   * @param {string} name
   * @returns {Vector2}
   */
  GetTextureOffset(name) {}
  /**
   * @param {number} nameID
   * @returns {Vector2}
   */
  GetTextureOffset(nameID) {}
  /**
   * @returns {Int32[]}
   */
  GetTexturePropertyNameIDs() {}
  /**
   * @param {List} outNames
   * @returns {void}
   */
  GetTexturePropertyNameIDs(outNames) {}
  /**
   * @param {Object} outNames
   * @returns {void}
   */
  GetTexturePropertyNameIDsInternal(outNames) {}
  /**
   * @returns {String[]}
   */
  GetTexturePropertyNames() {}
  /**
   * @param {List} outNames
   * @returns {void}
   */
  GetTexturePropertyNames(outNames) {}
  /**
   * @param {Object} outNames
   * @returns {void}
   */
  GetTexturePropertyNamesInternal(outNames) {}
  /**
   * @param {string} name
   * @returns {Vector2}
   */
  GetTextureScale(name) {}
  /**
   * @param {number} nameID
   * @returns {Vector2}
   */
  GetTextureScale(nameID) {}
  /**
   * @param {number} name
   * @returns {Vector4}
   */
  GetTextureScaleAndOffsetImpl(name) {}
  /**
   * @param {string} name
   * @returns {Vector4}
   */
  GetVector(name) {}
  /**
   * @param {number} nameID
   * @returns {Vector4}
   */
  GetVector(nameID) {}
  /**
   * @param {string} name
   * @returns {Vector4[]}
   */
  GetVectorArray(name) {}
  /**
   * @param {number} nameID
   * @returns {Vector4[]}
   */
  GetVectorArray(nameID) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  GetVectorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  GetVectorArray(nameID, values) {}
  /**
   * @param {number} name
   * @returns {number}
   */
  GetVectorArrayCountImpl(name) {}
  /**
   * @param {number} name
   * @returns {Vector4[]}
   */
  GetVectorArrayImpl(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasBuffer(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasBuffer(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasBufferImpl(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasColor(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasColor(nameID) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasConstantBuffer(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasConstantBuffer(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasConstantBufferImpl(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasFloat(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasFloat(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasFloatImpl(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasInt(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasInt(nameID) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasInteger(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasInteger(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasIntImpl(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasMatrix(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasMatrix(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasMatrixImpl(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasProperty(nameID) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasProperty(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasTexture(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasTexture(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasTextureImpl(name) {}
  /**
   * @param {string} name
   * @returns {boolean}
   */
  HasVector(name) {}
  /**
   * @param {number} nameID
   * @returns {boolean}
   */
  HasVector(nameID) {}
  /**
   * @param {number} name
   * @returns {boolean}
   */
  HasVectorImpl(name) {}
  /**
   * @param {string} keyword
   * @returns {boolean}
   */
  IsKeywordEnabled(keyword) {}
  /**
   * @param {LocalKeyword} keyword
   * @returns {boolean}
   */
  IsLocalKeywordEnabled(keyword) {}
  /**
   * @param {Material} start
   * @param {Material} end
   * @param {number} t
   * @returns {void}
   */
  Lerp(start, end, t) {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {string} name
   * @param {ComputeBuffer} value
   * @returns {void}
   */
  SetBuffer(name, value) {}
  /**
   * @param {number} nameID
   * @param {ComputeBuffer} value
   * @returns {void}
   */
  SetBuffer(nameID, value) {}
  /**
   * @param {string} name
   * @param {GraphicsBuffer} value
   * @returns {void}
   */
  SetBuffer(name, value) {}
  /**
   * @param {number} nameID
   * @param {GraphicsBuffer} value
   * @returns {void}
   */
  SetBuffer(nameID, value) {}
  /**
   * @param {number} name
   * @param {ComputeBuffer} value
   * @returns {void}
   */
  SetBufferImpl(name, value) {}
  /**
   * @param {string} name
   * @param {Color} value
   * @returns {void}
   */
  SetColor(name, value) {}
  /**
   * @param {number} nameID
   * @param {Color} value
   * @returns {void}
   */
  SetColor(nameID, value) {}
  /**
   * @param {number} name
   * @param {Color[]} values
   * @param {number} count
   * @returns {void}
   */
  SetColorArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  SetColorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  SetColorArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Color[]} values
   * @returns {void}
   */
  SetColorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Color[]} values
   * @returns {void}
   */
  SetColorArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Color[]} values
   * @param {number} count
   * @returns {void}
   */
  SetColorArrayImpl(name, values, count) {}
  /**
   * @param {number} name
   * @param {Color} value
   * @returns {void}
   */
  SetColorImpl(name, value) {}
  /**
   * @param {string} name
   * @param {ComputeBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  SetConstantBuffer(name, value, offset, size) {}
  /**
   * @param {number} nameID
   * @param {ComputeBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  SetConstantBuffer(nameID, value, offset, size) {}
  /**
   * @param {string} name
   * @param {GraphicsBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  SetConstantBuffer(name, value, offset, size) {}
  /**
   * @param {number} nameID
   * @param {GraphicsBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  SetConstantBuffer(nameID, value, offset, size) {}
  /**
   * @param {number} name
   * @param {ComputeBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  SetConstantBufferImpl(name, value, offset, size) {}
  /**
   * @param {number} name
   * @param {GraphicsBuffer} value
   * @param {number} offset
   * @param {number} size
   * @returns {void}
   */
  SetConstantGraphicsBufferImpl(name, value, offset, size) {}
  /**
   * @param {LocalKeyword[]} keywords
   * @returns {void}
   */
  SetEnabledKeywords(keywords) {}
  /**
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  SetFloat(name, value) {}
  /**
   * @param {number} nameID
   * @param {number} value
   * @returns {void}
   */
  SetFloat(nameID, value) {}
  /**
   * @param {number} name
   * @param {Single[]} values
   * @param {number} count
   * @returns {void}
   */
  SetFloatArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  SetFloatArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  SetFloatArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Single[]} values
   * @returns {void}
   */
  SetFloatArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Single[]} values
   * @returns {void}
   */
  SetFloatArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Single[]} values
   * @param {number} count
   * @returns {void}
   */
  SetFloatArrayImpl(name, values, count) {}
  /**
   * @param {number} name
   * @param {number} value
   * @returns {void}
   */
  SetFloatImpl(name, value) {}
  /**
   * @param {number} name
   * @param {GraphicsBuffer} value
   * @returns {void}
   */
  SetGraphicsBufferImpl(name, value) {}
  /**
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  SetInt(name, value) {}
  /**
   * @param {number} nameID
   * @param {number} value
   * @returns {void}
   */
  SetInt(nameID, value) {}
  /**
   * @param {string} name
   * @param {number} value
   * @returns {void}
   */
  SetInteger(name, value) {}
  /**
   * @param {number} nameID
   * @param {number} value
   * @returns {void}
   */
  SetInteger(nameID, value) {}
  /**
   * @param {number} name
   * @param {number} value
   * @returns {void}
   */
  SetIntImpl(name, value) {}
  /**
   * @param {LocalKeyword} keyword
   * @param {boolean} value
   * @returns {void}
   */
  SetLocalKeyword(keyword, value) {}
  /**
   * @param {string} name
   * @param {Matrix4x4} value
   * @returns {void}
   */
  SetMatrix(name, value) {}
  /**
   * @param {number} nameID
   * @param {Matrix4x4} value
   * @returns {void}
   */
  SetMatrix(nameID, value) {}
  /**
   * @param {number} name
   * @param {Matrix4x4[]} values
   * @param {number} count
   * @returns {void}
   */
  SetMatrixArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  SetMatrixArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  SetMatrixArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Matrix4x4[]} values
   * @returns {void}
   */
  SetMatrixArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Matrix4x4[]} values
   * @returns {void}
   */
  SetMatrixArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Matrix4x4[]} values
   * @param {number} count
   * @returns {void}
   */
  SetMatrixArrayImpl(name, values, count) {}
  /**
   * @param {number} name
   * @param {Matrix4x4} value
   * @returns {void}
   */
  SetMatrixImpl(name, value) {}
  /**
   * @param {string} tag
   * @param {string} val
   * @returns {void}
   */
  SetOverrideTag(tag, val) {}
  /**
   * @param {number} pass
   * @returns {boolean}
   */
  SetPass(pass) {}
  /**
   * @param {number} name
   * @param {RenderTexture} value
   * @param {number} element
   * @returns {void}
   */
  SetRenderTextureImpl(name, value, element) {}
  /**
   * @param {String[]} names
   * @returns {void}
   */
  SetShaderKeywords(names) {}
  /**
   * @param {string} passName
   * @param {boolean} enabled
   * @returns {void}
   */
  SetShaderPassEnabled(passName, enabled) {}
  /**
   * @param {string} name
   * @param {Texture} value
   * @returns {void}
   */
  SetTexture(name, value) {}
  /**
   * @param {number} nameID
   * @param {Texture} value
   * @returns {void}
   */
  SetTexture(nameID, value) {}
  /**
   * @param {string} name
   * @param {RenderTexture} value
   * @param {number} element
   * @returns {void}
   */
  SetTexture(name, value, element) {}
  /**
   * @param {number} nameID
   * @param {RenderTexture} value
   * @param {number} element
   * @returns {void}
   */
  SetTexture(nameID, value, element) {}
  /**
   * @param {number} name
   * @param {Texture} value
   * @returns {void}
   */
  SetTextureImpl(name, value) {}
  /**
   * @param {string} name
   * @param {Vector2} value
   * @returns {void}
   */
  SetTextureOffset(name, value) {}
  /**
   * @param {number} nameID
   * @param {Vector2} value
   * @returns {void}
   */
  SetTextureOffset(nameID, value) {}
  /**
   * @param {number} name
   * @param {Vector2} offset
   * @returns {void}
   */
  SetTextureOffsetImpl(name, offset) {}
  /**
   * @param {string} name
   * @param {Vector2} value
   * @returns {void}
   */
  SetTextureScale(name, value) {}
  /**
   * @param {number} nameID
   * @param {Vector2} value
   * @returns {void}
   */
  SetTextureScale(nameID, value) {}
  /**
   * @param {number} name
   * @param {Vector2} scale
   * @returns {void}
   */
  SetTextureScaleImpl(name, scale) {}
  /**
   * @param {string} name
   * @param {Vector4} value
   * @returns {void}
   */
  SetVector(name, value) {}
  /**
   * @param {number} nameID
   * @param {Vector4} value
   * @returns {void}
   */
  SetVector(nameID, value) {}
  /**
   * @param {number} name
   * @param {Vector4[]} values
   * @param {number} count
   * @returns {void}
   */
  SetVectorArray(name, values, count) {}
  /**
   * @param {string} name
   * @param {List} values
   * @returns {void}
   */
  SetVectorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {List} values
   * @returns {void}
   */
  SetVectorArray(nameID, values) {}
  /**
   * @param {string} name
   * @param {Vector4[]} values
   * @returns {void}
   */
  SetVectorArray(name, values) {}
  /**
   * @param {number} nameID
   * @param {Vector4[]} values
   * @returns {void}
   */
  SetVectorArray(nameID, values) {}
  /**
   * @param {number} name
   * @param {Vector4[]} values
   * @param {number} count
   * @returns {void}
   */
  SetVectorArrayImpl(name, values, count) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {Color}*/
  get color() {}
  /**
 * @param {Color} value
 */
  set color(value) {}
  /**@type {boolean}*/
  get doubleSidedGI() {}
  /**
 * @param {boolean} value
 */
  set doubleSidedGI(value) {}
  /**@type {LocalKeyword[]}*/
  get enabledKeywords() {}
  /**
 * @param {LocalKeyword[]} value
 */
  set enabledKeywords(value) {}
  /**@type {boolean}*/
  get enableInstancing() {}
  /**
 * @param {boolean} value
 */
  set enableInstancing(value) {}
  /**@type {number}*/
  get globalIlluminationFlags() {}
  /**
 * @param {number} value
 */
  set globalIlluminationFlags(value) {}
  /**@type {number}*/
  get hideFlags() {}
  /**
 * @param {number} value
 */
  set hideFlags(value) {}
  /**@type {Texture}*/
  get mainTexture() {}
  /**
 * @param {Texture} value
 */
  set mainTexture(value) {}
  /**@type {Vector2}*/
  get mainTextureOffset() {}
  /**
 * @param {Vector2} value
 */
  set mainTextureOffset(value) {}
  /**@type {Vector2}*/
  get mainTextureScale() {}
  /**
 * @param {Vector2} value
 */
  set mainTextureScale(value) {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {number}*/
  get passCount() {}
  /**@type {number}*/
  get rawRenderQueue() {}
  /**@type {number}*/
  get renderQueue() {}
  /**
 * @param {number} value
 */
  set renderQueue(value) {}
  /**@type {Shader}*/
  get shader() {}
  /**
 * @param {Shader} value
 */
  set shader(value) {}
  /**@type {String[]}*/
  get shaderKeywords() {}
  /**
 * @param {String[]} value
 */
  set shaderKeywords(value) {}
}
class Canvas {
  constructor() {
  }
  /**@type {Canvas.WillRenderCanvases}*/
  static preWillRenderCanvases;
  /**@type {Canvas.WillRenderCanvases}*/
  static willRenderCanvases;
  /**
   * @param {Canvas.WillRenderCanvases} value
   * @returns {void}
   */
  static add_preWillRenderCanvases(value) {}
  /**
   * @param {Canvas.WillRenderCanvases} value
   * @returns {void}
   */
  static add_willRenderCanvases(value) {}
  /**
   * @param {number} displayIndex
   * @returns {void}
   */
  static BeginRenderExtraOverlays(displayIndex) {}
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
   * @param {number} displayIndex
   * @returns {void}
   */
  static EndRenderExtraOverlays(displayIndex) {}
  /**
   * @param {Object} other
   * @returns {boolean}
   */
  Equals(other) {}
  /**
   * @returns {void}
   */
  static ForceUpdateCanvases() {}
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
   * @returns {Material}
   */
  static GetDefaultCanvasMaterial() {}
  /**
   * @returns {Material}
   */
  static GetDefaultCanvasTextMaterial() {}
  /**
   * @returns {Material}
   */
  static GetETC1SupportedCanvasMaterial() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {number}
   */
  GetInstanceID() {}
  /**
   * @returns {void}
   */
  MarkDirty() {}
  /**
   * @param {Canvas.WillRenderCanvases} value
   * @returns {void}
   */
  static remove_preWillRenderCanvases(value) {}
  /**
   * @param {Canvas.WillRenderCanvases} value
   * @returns {void}
   */
  static remove_willRenderCanvases(value) {}
  /**
   * @param {number} displayIndex
   * @param {number} sortingOrder
   * @returns {void}
   */
  static RenderExtraOverlaysBefore(displayIndex, sortingOrder) {}
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
  static SendPreWillRenderCanvases() {}
  /**
   * @returns {void}
   */
  static SendWillRenderCanvases() {}
  /**
   * @param {boolean} enabled
   * @returns {void}
   */
  static SetExternalCanvasEnabled(enabled) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {boolean} alignWithCamera
   * @returns {void}
   */
  UpdateCanvasRectTransform(alignWithCamera) {}
  /**@type {number}*/
  get additionalShaderChannels() {}
  /**
 * @param {number} value
 */
  set additionalShaderChannels(value) {}
  /**@type {number}*/
  get cachedSortingLayerValue() {}
  /**@type {boolean}*/
  get enabled() {}
  /**
 * @param {boolean} value
 */
  set enabled(value) {}
  /**@type {Action}*/
  static get externBeginRenderOverlays() {}
  /**
 * @param {Action} value
 */
  static set externBeginRenderOverlays(value) {}
  /**@type {Action}*/
  static get externEndRenderOverlays() {}
  /**
 * @param {Action} value
 */
  static set externEndRenderOverlays(value) {}
  /**@type {Action}*/
  static get externRenderOverlaysBefore() {}
  /**
 * @param {Action} value
 */
  static set externRenderOverlaysBefore(value) {}
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
  /**@type {boolean}*/
  get isRootCanvas() {}
  /**@type {string}*/
  get name() {}
  /**
 * @param {string} value
 */
  set name(value) {}
  /**@type {number}*/
  get normalizedSortingGridSize() {}
  /**
 * @param {number} value
 */
  set normalizedSortingGridSize(value) {}
  /**@type {boolean}*/
  get overridePixelPerfect() {}
  /**
 * @param {boolean} value
 */
  set overridePixelPerfect(value) {}
  /**@type {boolean}*/
  get overrideSorting() {}
  /**
 * @param {boolean} value
 */
  set overrideSorting(value) {}
  /**@type {boolean}*/
  get pixelPerfect() {}
  /**
 * @param {boolean} value
 */
  set pixelPerfect(value) {}
  /**@type {Rect}*/
  get pixelRect() {}
  /**@type {number}*/
  get planeDistance() {}
  /**
 * @param {number} value
 */
  set planeDistance(value) {}
  /**@type {number}*/
  get referencePixelsPerUnit() {}
  /**
 * @param {number} value
 */
  set referencePixelsPerUnit(value) {}
  /**@type {Vector2}*/
  get renderingDisplaySize() {}
  /**@type {number}*/
  get renderMode() {}
  /**
 * @param {number} value
 */
  set renderMode(value) {}
  /**@type {number}*/
  get renderOrder() {}
  /**@type {Canvas}*/
  get rootCanvas() {}
  /**@type {number}*/
  get scaleFactor() {}
  /**
 * @param {number} value
 */
  set scaleFactor(value) {}
  /**@type {number}*/
  get sortingGridNormalizedSize() {}
  /**
 * @param {number} value
 */
  set sortingGridNormalizedSize(value) {}
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
  /**@type {string}*/
  get tag() {}
  /**
 * @param {string} value
 */
  set tag(value) {}
  /**@type {number}*/
  get targetDisplay() {}
  /**
 * @param {number} value
 */
  set targetDisplay(value) {}
  /**@type {Transform}*/
  get transform() {}
  /**@type {number}*/
  get updateRectTransformForStandalone() {}
  /**
 * @param {number} value
 */
  set updateRectTransformForStandalone(value) {}
  /**@type {boolean}*/
  get vertexColorAlwaysGammaSpace() {}
  /**
 * @param {boolean} value
 */
  set vertexColorAlwaysGammaSpace(value) {}
  /**@type {Camera}*/
  get worldCamera() {}
  /**
 * @param {Camera} value
 */
  set worldCamera(value) {}
}

