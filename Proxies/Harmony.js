// [Overlayer.Scripting JS Wrapper]
// Author: Square & Kkitut
// ProxyTypes: HarmonyLib.CodeInstruction&CodeInstruction*HarmonyLib.AccessTools&AccessTools
// Version: 1.0.0
class CodeInstruction {
  /**
   * @param {OpCode} opcode
   * @param {Object} operand
   */
  constructor(opcode, operand) {
    /**@type {OpCode}*/
    this.opcode = null;
    /**@type {Object}*/
    this.operand = null;
    /**@type {List}*/
    this.labels = null;
    /**@type {List}*/
    this.blocks = null;
  }
  /**
   * @param {Type} type
   * @param {string} name
   * @param {Type[]} parameters
   * @param {Type[]} generics
   * @returns {CodeInstruction}
   */
  static Call(type, name, parameters, generics) {}
  /**
   * @param {string} typeColonMethodname
   * @param {Type[]} parameters
   * @param {Type[]} generics
   * @returns {CodeInstruction}
   */
  static Call(typeColonMethodname, parameters, generics) {}
  /**
   * @param {Expression} expression
   * @returns {CodeInstruction}
   */
  static Call(expression) {}
  /**
   * @param {Expression} expression
   * @returns {CodeInstruction}
   */
  static Call(expression) {}
  /**
   * @param {Expression} expression
   * @returns {CodeInstruction}
   */
  static Call(expression) {}
  /**
   * @param {LambdaExpression} expression
   * @returns {CodeInstruction}
   */
  static Call(expression) {}
  /**
   * @param {T} closure
   * @returns {CodeInstruction}
   */
  static CallClosure(closure) {}
  /**
   * @returns {CodeInstruction}
   */
  Clone() {}
  /**
   * @param {OpCode} opcode
   * @returns {CodeInstruction}
   */
  Clone(opcode) {}
  /**
   * @param {Object} operand
   * @returns {CodeInstruction}
   */
  Clone(operand) {}
  /**
   * @param {number} index
   * @param {boolean} useAddress
   * @returns {CodeInstruction}
   */
  static LoadArgument(index, useAddress) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @param {boolean} useAddress
   * @returns {CodeInstruction}
   */
  static LoadField(type, name, useAddress) {}
  /**
   * @param {number} index
   * @param {boolean} useAddress
   * @returns {CodeInstruction}
   */
  static LoadLocal(index, useAddress) {}
  /**
   * @param {number} index
   * @returns {CodeInstruction}
   */
  static StoreArgument(index) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {CodeInstruction}
   */
  static StoreField(type, name) {}
  /**
   * @param {number} index
   * @returns {CodeInstruction}
   */
  static StoreLocal(index) {}
  /**
   * @returns {string}
   */
  ToString() {}
}
class AccessTools {
  constructor() {
  }
  /**@type {Type[]}*/
  static allTypesCached;
  /**@type {AccessTools}*/
  static all;
  /**@type {AccessTools}*/
  static allDeclared;
  /**@type {Dictionary}*/
  static addHandlerCache;
  /**@type {ReaderWriterLockSlim}*/
  static addHandlerCacheLock;
  /**
   * @param {MethodBase} method
   * @param {Object[]} inputs
   * @returns {Object[]}
   */
  static ActualParameters(method, inputs) {}
  /**
   * @returns {IEnumerable}
   */
  static AllAssemblies() {}
  /**
   * @returns {IEnumerable}
   */
  static AllTypes() {}
  /**
   * @param {MethodBase} method
   * @returns {MethodInfo}
   */
  static AsyncMoveNext(method) {}
  /**
   * @returns {void}
   */
  static ClearTypeSearchCache() {}
  /**
   * @param {IEnumerable} objects
   * @returns {number}
   */
  static CombinedHashCode(objects) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @param {boolean} searchForStatic
   * @returns {ConstructorInfo}
   */
  static Constructor(type, parameters, searchForStatic) {}
  /**
   * @param {Type} type
   * @returns {Object}
   */
  static CreateInstance(type) {}
  /**
   * @returns {T}
   */
  static CreateInstance() {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @param {boolean} searchForStatic
   * @returns {ConstructorInfo}
   */
  static DeclaredConstructor(type, parameters, searchForStatic) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {FieldInfo}
   */
  static DeclaredField(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {FieldInfo}
   */
  static DeclaredField(typeColonName) {}
  /**
   * @param {Type} type
   * @param {number} idx
   * @returns {FieldInfo}
   */
  static DeclaredField(type, idx) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @returns {PropertyInfo}
   */
  static DeclaredIndexer(type, parameters) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @returns {MethodInfo}
   */
  static DeclaredIndexerGetter(type, parameters) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @returns {MethodInfo}
   */
  static DeclaredIndexerSetter(type, parameters) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @param {Type[]} parameters
   * @param {Type[]} generics
   * @returns {MethodInfo}
   */
  static DeclaredMethod(type, name, parameters, generics) {}
  /**
   * @param {string} typeColonName
   * @param {Type[]} parameters
   * @param {Type[]} generics
   * @returns {MethodInfo}
   */
  static DeclaredMethod(typeColonName, parameters, generics) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {PropertyInfo}
   */
  static DeclaredProperty(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {PropertyInfo}
   */
  static DeclaredProperty(typeColonName) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {MethodInfo}
   */
  static DeclaredPropertyGetter(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {MethodInfo}
   */
  static DeclaredPropertyGetter(typeColonName) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {MethodInfo}
   */
  static DeclaredPropertySetter(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {MethodInfo}
   */
  static DeclaredPropertySetter(typeColonName) {}
  /**
   * @param {MethodBase} method
   * @returns {MethodInfo}
   */
  static EnumeratorMoveNext(method) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {FieldInfo}
   */
  static Field(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {FieldInfo}
   */
  static Field(typeColonName) {}
  /**
   * @param {string} fieldName
   * @returns {FieldRef}
   */
  static FieldRefAccess(fieldName) {}
  /**
   * @param {T} instance
   * @param {string} fieldName
   * @returns {F&}
   */
  static FieldRefAccess(instance, fieldName) {}
  /**
   * @param {Type} type
   * @param {string} fieldName
   * @returns {FieldRef}
   */
  static FieldRefAccess(type, fieldName) {}
  /**
   * @param {string} typeColonName
   * @returns {FieldRef}
   */
  static FieldRefAccess(typeColonName) {}
  /**
   * @param {FieldInfo} fieldInfo
   * @returns {FieldRef}
   */
  static FieldRefAccess(fieldInfo) {}
  /**
   * @param {T} instance
   * @param {FieldInfo} fieldInfo
   * @returns {F&}
   */
  static FieldRefAccess(instance, fieldInfo) {}
  /**
   * @param {Type} type
   * @param {Func} func
   * @returns {T}
   */
  static FindIncludingBaseTypes(type, func) {}
  /**
   * @param {Type} type
   * @param {Func} func
   * @returns {T}
   */
  static FindIncludingInnerTypes(type, func) {}
  /**
   * @param {Type} type
   * @param {Func} predicate
   * @returns {ConstructorInfo}
   */
  static FirstConstructor(type, predicate) {}
  /**
   * @param {Type} type
   * @param {Func} predicate
   * @returns {Type}
   */
  static FirstInner(type, predicate) {}
  /**
   * @param {Type} type
   * @param {Func} predicate
   * @returns {MethodInfo}
   */
  static FirstMethod(type, predicate) {}
  /**
   * @param {Type} type
   * @param {Func} predicate
   * @returns {PropertyInfo}
   */
  static FirstProperty(type, predicate) {}
  /**
   * @param {Type} type
   * @param {Nullable} searchForStatic
   * @returns {List}
   */
  static GetDeclaredConstructors(type, searchForStatic) {}
  /**
   * @param {Type} type
   * @returns {List}
   */
  static GetDeclaredFields(type) {}
  /**
   * @param {T} member
   * @returns {T}
   */
  static GetDeclaredMember(member) {}
  /**
   * @param {Type} type
   * @returns {List}
   */
  static GetDeclaredMethods(type) {}
  /**
   * @param {Type} type
   * @returns {List}
   */
  static GetDeclaredProperties(type) {}
  /**
   * @param {Type} type
   * @returns {Object}
   */
  static GetDefaultValue(type) {}
  /**
   * @param {Type} type
   * @returns {List}
   */
  static GetFieldNames(type) {}
  /**
   * @param {Object} instance
   * @returns {List}
   */
  static GetFieldNames(instance) {}
  /**
   * @param {Type} type
   * @returns {List}
   */
  static GetMethodNames(type) {}
  /**
   * @param {Object} instance
   * @returns {List}
   */
  static GetMethodNames(instance) {}
  /**
   * @returns {MethodBase}
   */
  static GetOutsideCaller() {}
  /**
   * @param {Type} type
   * @returns {List}
   */
  static GetPropertyNames(type) {}
  /**
   * @param {Object} instance
   * @returns {List}
   */
  static GetPropertyNames(instance) {}
  /**
   * @param {MethodBase} methodOrConstructor
   * @returns {Type}
   */
  static GetReturnedType(methodOrConstructor) {}
  /**
   * @param {Object[]} parameters
   * @returns {Type[]}
   */
  static GetTypes(parameters) {}
  /**
   * @param {Assembly} assembly
   * @returns {Type[]}
   */
  static GetTypesFromAssembly(assembly) {}
  /**
   * @param {MemberInfo} member
   * @returns {Type}
   */
  static GetUnderlyingType(member) {}
  /**
   * @param {Object} instance
   * @returns {DelegateType}
   */
  static HarmonyDelegate(instance) {}
  /**
   * @param {MethodInfo} method
   * @returns {MethodInfo}
   */
  static Identifiable(method) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @returns {PropertyInfo}
   */
  static Indexer(type, parameters) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @returns {MethodInfo}
   */
  static IndexerGetter(type, parameters) {}
  /**
   * @param {Type} type
   * @param {Type[]} parameters
   * @returns {MethodInfo}
   */
  static IndexerSetter(type, parameters) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {Type}
   */
  static Inner(type, name) {}
  /**
   * @param {Type} type
   * @returns {IEnumerable}
   */
  static InnerTypes(type) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsClass(type) {}
  /**
   * @param {T} member
   * @returns {boolean}
   */
  static IsDeclaredMember(member) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsFloatingPoint(type) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsInteger(type) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsNumber(type) {}
  /**
   * @param {T} instance
   * @returns {boolean}
   */
  static IsOfNullableType(instance) {}
  /**
   * @param {MemberInfo} member
   * @returns {boolean}
   */
  static IsStatic(member) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsStatic(type) {}
  /**
   * @param {PropertyInfo} propertyInfo
   * @returns {boolean}
   */
  static IsStatic(propertyInfo) {}
  /**
   * @param {EventInfo} eventInfo
   * @returns {boolean}
   */
  static IsStatic(eventInfo) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsStruct(type) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsValue(type) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsVoid(type) {}
  /**
   * @param {Object} source
   * @returns {T}
   */
  static MakeDeepCopy(source) {}
  /**
   * @param {Object} source
   * @param {Type} resultType
   * @param {Func} processor
   * @param {string} pathRoot
   * @returns {Object}
   */
  static MakeDeepCopy(source, resultType, processor, pathRoot) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @param {Type[]} parameters
   * @param {Type[]} generics
   * @returns {MethodInfo}
   */
  static Method(type, name, parameters, generics) {}
  /**
   * @param {string} typeColonName
   * @param {Type[]} parameters
   * @param {Type[]} generics
   * @returns {MethodInfo}
   */
  static Method(typeColonName, parameters, generics) {}
  /**
   * @param {MethodInfo} method
   * @param {Object} instance
   * @param {boolean} virtualCall
   * @returns {DelegateType}
   */
  static MethodDelegate(method, instance, virtualCall) {}
  /**
   * @param {MethodInfo} method
   * @param {Object} instance
   * @param {boolean} virtualCall
   * @param {Type[]} delegateArgs
   * @returns {DelegateType}
   */
  static MethodDelegate(method, instance, virtualCall, delegateArgs) {}
  /**
   * @param {string} typeColonName
   * @param {Object} instance
   * @param {boolean} virtualCall
   * @returns {DelegateType}
   */
  static MethodDelegate(typeColonName, instance, virtualCall) {}
  /**
   * @param {string} typeColonName
   * @param {Object} instance
   * @param {boolean} virtualCall
   * @param {Type[]} delegateArgs
   * @returns {DelegateType}
   */
  static MethodDelegate(typeColonName, instance, virtualCall, delegateArgs) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {PropertyInfo}
   */
  static Property(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {PropertyInfo}
   */
  static Property(typeColonName) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {MethodInfo}
   */
  static PropertyGetter(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {MethodInfo}
   */
  static PropertyGetter(typeColonName) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {MethodInfo}
   */
  static PropertySetter(type, name) {}
  /**
   * @param {string} typeColonName
   * @returns {MethodInfo}
   */
  static PropertySetter(typeColonName) {}
  /**
   * @param {Exception} exception
   * @returns {void}
   */
  static RethrowException(exception) {}
  /**
   * @param {string} fieldName
   * @returns {F&}
   */
  static StaticFieldRefAccess(fieldName) {}
  /**
   * @param {Type} type
   * @param {string} fieldName
   * @returns {F&}
   */
  static StaticFieldRefAccess(type, fieldName) {}
  /**
   * @param {string} typeColonName
   * @returns {F&}
   */
  static StaticFieldRefAccess(typeColonName) {}
  /**
   * @param {FieldInfo} fieldInfo
   * @returns {F&}
   */
  static StaticFieldRefAccess(fieldInfo) {}
  /**
   * @param {FieldInfo} fieldInfo
   * @returns {FieldRef}
   */
  static StaticFieldRefAccess(fieldInfo) {}
  /**
   * @param {string} fieldName
   * @returns {StructFieldRef}
   */
  static StructFieldRefAccess(fieldName) {}
  /**
   * @param {FieldInfo} fieldInfo
   * @returns {StructFieldRef}
   */
  static StructFieldRefAccess(fieldInfo) {}
  /**
   * @param {Type} type
   * @param {String[]} names
   * @returns {void}
   */
  static ThrowMissingMemberException(type, names) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  static TypeByName(name) {}
  /**
   * @param {Regex} search
   * @param {boolean} invalidateCache
   * @returns {Type}
   */
  static TypeSearch(search, invalidateCache) {}
  /**@type {boolean}*/
  static get IsMonoRuntime() {}
  /**@type {boolean}*/
  static get IsNetCoreRuntime() {}
  /**@type {boolean}*/
  static get IsNetFrameworkRuntime() {}
}

