// [Overlayer.Scripting JS Wrapper]
// Author: Square & Kkitut
// ProxyTypes: System.Reflection.MemberInfo&MemberInfo*System.Reflection.MethodBase&MethodBase*System.Reflection.ConstructorInfo&ConstructorInfo*System.Reflection.Assembly&Assembly*System.Reflection.FieldInfo&FieldInfo*System.Reflection.MethodInfo&MethodInfo*System.Reflection.PropertyInfo&PropertyInfo*System.Reflection.EventInfo&EventInfo*System.Reflection.ParameterInfo&ParameterInfo*System.Reflection.BindingFlags&BindingFlags*System.Reflection.Emit.DynamicMethod&DynamicMethod*System.Reflection.Emit.AssemblyBuilder&AssemblyBuilder*System.Reflection.Emit.EnumBuilder&EnumBuilder*System.Reflection.Emit.TypeBuilder&TypeBuilder*System.Reflection.Emit.MethodBuilder&MethodBuilder*System.Reflection.Emit.PropertyBuilder&PropertyBuilder*System.Reflection.Emit.FieldBuilder&FieldBuilder*System.Reflection.Emit.EventBuilder&EventBuilder*System.Reflection.Emit.ParameterBuilder&ParameterBuilder*System.Reflection.ParameterAttributes&ParameterAttributes*System.Reflection.MethodAttributes&MethodAttributes*System.Reflection.FieldAttributes&FieldAttributes*System.Reflection.TypeAttributes&TypeAttributes*System.Reflection.PropertyAttributes&PropertyAttributes*System.Reflection.EventAttributes&EventAttributes*System.Reflection.Emit.ILGenerator&ILGenerator*System.Reflection.Emit.OpCode&OpCode*System.Reflection.Emit.OpCodes&OpCodes
// Version: 1.0.0
class MemberInfo {
  constructor() {
  }
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
}
class MethodBase {
  constructor() {
  }
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Type[]} parameterTypes
   * @param {number} callingConvention
   * @param {boolean} serialization
   * @returns {string}
   */
  static ConstructParameters(parameterTypes, callingConvention, serialization) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatNameAndSig(serialization) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @returns {MethodBase}
   */
  static GetCurrentMethod() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {MethodBody}
   */
  GetMethodBody() {}
  /**
   * @param {RuntimeMethodHandle} handle
   * @returns {MethodBase}
   */
  static GetMethodFromHandle(handle) {}
  /**
   * @param {RuntimeMethodHandle} handle
   * @param {RuntimeTypeHandle} declaringType
   * @returns {MethodBase}
   */
  static GetMethodFromHandle(handle, declaringType) {}
  /**
   * @returns {number}
   */
  GetMethodImplementationFlags() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParameters() {}
  /**
   * @returns {number}
   */
  GetParametersCount() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersInternal() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersNoCopy() {}
  /**
   * @param {number} pos
   * @returns {Type}
   */
  GetParameterType(pos) {}
  /**
   * @returns {Type[]}
   */
  GetParameterTypes() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Object} obj
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke(obj, parameters) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke(obj, invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {number}*/
  get CallingConvention() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsConstructedGenericMethod() {}
  /**@type {boolean}*/
  get IsConstructor() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsFinal() {}
  /**@type {boolean}*/
  get IsGenericMethod() {}
  /**@type {boolean}*/
  get IsGenericMethodDefinition() {}
  /**@type {boolean}*/
  get IsHideBySig() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {boolean}*/
  get IsVirtual() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {RuntimeMethodHandle}*/
  get MethodHandle() {}
  /**@type {number}*/
  get MethodImplementationFlags() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
}
class ConstructorInfo {
  constructor() {
  }
  /**@type {string}*/
  static ConstructorName;
  /**@type {string}*/
  static TypeConstructorName;
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatNameAndSig(serialization) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {MethodBody}
   */
  GetMethodBody() {}
  /**
   * @returns {number}
   */
  GetMethodImplementationFlags() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParameters() {}
  /**
   * @returns {number}
   */
  GetParametersCount() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersInternal() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersNoCopy() {}
  /**
   * @param {number} pos
   * @returns {Type}
   */
  GetParameterType(pos) {}
  /**
   * @returns {Type[]}
   */
  GetParameterTypes() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke(parameters) {}
  /**
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke(invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Object} obj
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke(obj, parameters) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke(obj, invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke_2(obj, invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Object} obj
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke_3(obj, parameters) {}
  /**
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke_4(invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke_5(parameters) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {number}*/
  get CallingConvention() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsConstructedGenericMethod() {}
  /**@type {boolean}*/
  get IsConstructor() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsFinal() {}
  /**@type {boolean}*/
  get IsGenericMethod() {}
  /**@type {boolean}*/
  get IsGenericMethodDefinition() {}
  /**@type {boolean}*/
  get IsHideBySig() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {boolean}*/
  get IsVirtual() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {RuntimeMethodHandle}*/
  get MethodHandle() {}
  /**@type {number}*/
  get MethodImplementationFlags() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
}
class Assembly {
  constructor() {
  }
  /**
   * @param {ModuleResolveEventHandler} value
   * @returns {void}
   */
  add_ModuleResolve(value) {}
  /**
   * @param {string} typeName
   * @returns {Object}
   */
  CreateInstance(typeName) {}
  /**
   * @param {string} typeName
   * @param {boolean} ignoreCase
   * @returns {Object}
   */
  CreateInstance(typeName, ignoreCase) {}
  /**
   * @param {string} typeName
   * @param {boolean} ignoreCase
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Object[]} args
   * @param {CultureInfo} culture
   * @param {Object[]} activationAttributes
   * @returns {Object}
   */
  CreateInstance(typeName, ignoreCase, bindingAttr, binder, args, culture, activationAttributes) {}
  /**
   * @returns {Exception}
   */
  static CreateNIE() {}
  /**
   * @param {string} assemblyName
   * @param {string} typeName
   * @returns {string}
   */
  static CreateQualifiedName(assemblyName, typeName) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  Equals(o) {}
  /**
   * @param {Type} type
   * @returns {Assembly}
   */
  static GetAssembly(type) {}
  /**
   * @returns {Assembly}
   */
  static GetCallingAssembly() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {Assembly}
   */
  static GetEntryAssembly() {}
  /**
   * @returns {Assembly}
   */
  static GetExecutingAssembly() {}
  /**
   * @returns {Type[]}
   */
  GetExportedTypes() {}
  /**
   * @param {string} name
   * @returns {FileStream}
   */
  GetFile(name) {}
  /**
   * @returns {FileStream[]}
   */
  GetFiles() {}
  /**
   * @param {boolean} getResourceModules
   * @returns {FileStream[]}
   */
  GetFiles(getResourceModules) {}
  /**
   * @returns {number}
   */
  GetFlags() {}
  /**
   * @returns {Type[]}
   */
  GetForwardedTypes() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {Module[]}
   */
  GetLoadedModules() {}
  /**
   * @param {boolean} getResourceModules
   * @returns {Module[]}
   */
  GetLoadedModules(getResourceModules) {}
  /**
   * @returns {Module}
   */
  GetManifestModule() {}
  /**
   * @param {string} resourceName
   * @returns {ManifestResourceInfo}
   */
  GetManifestResourceInfo(resourceName) {}
  /**
   * @returns {String[]}
   */
  GetManifestResourceNames() {}
  /**
   * @param {string} name
   * @returns {Stream}
   */
  GetManifestResourceStream(name) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {Stream}
   */
  GetManifestResourceStream(type, name) {}
  /**
   * @param {string} name
   * @returns {Module}
   */
  GetModule(name) {}
  /**
   * @returns {Module[]}
   */
  GetModules() {}
  /**
   * @param {boolean} getResourceModules
   * @returns {Module[]}
   */
  GetModules(getResourceModules) {}
  /**
   * @returns {Module[]}
   */
  GetModulesInternal() {}
  /**
   * @param {boolean} copiedName
   * @returns {AssemblyName}
   */
  GetName(copiedName) {}
  /**
   * @returns {AssemblyName}
   */
  GetName() {}
  /**
   * @param {SerializationInfo} info
   * @param {StreamingContext} context
   * @returns {void}
   */
  GetObjectData(info, context) {}
  /**
   * @returns {Byte[]}
   */
  GetPublicKey() {}
  /**
   * @param {Assembly} module
   * @returns {AssemblyName[]}
   */
  static GetReferencedAssemblies(module) {}
  /**
   * @returns {AssemblyName[]}
   */
  GetReferencedAssemblies() {}
  /**
   * @param {CultureInfo} culture
   * @returns {Assembly}
   */
  GetSatelliteAssembly(culture) {}
  /**
   * @param {CultureInfo} culture
   * @param {Version} version
   * @returns {Assembly}
   */
  GetSatelliteAssembly(culture, version) {}
  /**
   * @returns {string}
   */
  GetSimpleName() {}
  /**
   * @param {string} name
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  GetType(name, throwOnError) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetType(name) {}
  /**
   * @param {string} name
   * @param {boolean} throwOnError
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  GetType(name, throwOnError, ignoreCase) {}
  /**
   * @param {boolean} exportedOnly
   * @returns {Type[]}
   */
  GetTypes(exportedOnly) {}
  /**
   * @returns {Type[]}
   */
  GetTypes() {}
  /**
   * @returns {Version}
   */
  GetVersion() {}
  /**
   * @param {Assembly} module
   * @returns {IntPtr}
   */
  static InternalGetReferencedAssemblies(module) {}
  /**
   * @param {Module} module
   * @param {string} name
   * @param {boolean} throwOnError
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  InternalGetType(module, name, throwOnError, ignoreCase) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {string} assemblyString
   * @returns {Assembly}
   */
  static Load(assemblyString) {}
  /**
   * @param {string} assemblyString
   * @param {Evidence} assemblySecurity
   * @returns {Assembly}
   */
  static Load(assemblyString, assemblySecurity) {}
  /**
   * @param {AssemblyName} assemblyRef
   * @returns {Assembly}
   */
  static Load(assemblyRef) {}
  /**
   * @param {AssemblyName} assemblyRef
   * @param {Evidence} assemblySecurity
   * @returns {Assembly}
   */
  static Load(assemblyRef, assemblySecurity) {}
  /**
   * @param {Byte[]} rawAssembly
   * @returns {Assembly}
   */
  static Load(rawAssembly) {}
  /**
   * @param {Byte[]} rawAssembly
   * @param {Byte[]} rawSymbolStore
   * @returns {Assembly}
   */
  static Load(rawAssembly, rawSymbolStore) {}
  /**
   * @param {Byte[]} rawAssembly
   * @param {Byte[]} rawSymbolStore
   * @param {Evidence} securityEvidence
   * @returns {Assembly}
   */
  static Load(rawAssembly, rawSymbolStore, securityEvidence) {}
  /**
   * @param {Byte[]} rawAssembly
   * @param {Byte[]} rawSymbolStore
   * @param {number} securityContextSource
   * @returns {Assembly}
   */
  static Load(rawAssembly, rawSymbolStore, securityContextSource) {}
  /**
   * @param {string} name
   * @param {Evidence} e
   * @returns {Assembly}
   */
  static load_with_partial_name(name, e) {}
  /**
   * @param {string} path
   * @param {Evidence} securityEvidence
   * @returns {Assembly}
   */
  static LoadFile(path, securityEvidence) {}
  /**
   * @param {string} path
   * @returns {Assembly}
   */
  static LoadFile(path) {}
  /**
   * @param {string} assemblyFile
   * @returns {Assembly}
   */
  static LoadFrom(assemblyFile) {}
  /**
   * @param {string} assemblyFile
   * @param {Evidence} securityEvidence
   * @returns {Assembly}
   */
  static LoadFrom(assemblyFile, securityEvidence) {}
  /**
   * @param {string} assemblyFile
   * @param {Evidence} securityEvidence
   * @param {Byte[]} hashValue
   * @param {number} hashAlgorithm
   * @returns {Assembly}
   */
  static LoadFrom(assemblyFile, securityEvidence, hashValue, hashAlgorithm) {}
  /**
   * @param {string} assemblyFile
   * @param {Byte[]} hashValue
   * @param {number} hashAlgorithm
   * @returns {Assembly}
   */
  static LoadFrom(assemblyFile, hashValue, hashAlgorithm) {}
  /**
   * @param {string} moduleName
   * @param {Byte[]} rawModule
   * @returns {Module}
   */
  LoadModule(moduleName, rawModule) {}
  /**
   * @param {string} moduleName
   * @param {Byte[]} rawModule
   * @param {Byte[]} rawSymbolStore
   * @returns {Module}
   */
  LoadModule(moduleName, rawModule, rawSymbolStore) {}
  /**
   * @param {string} partialName
   * @returns {Assembly}
   */
  static LoadWithPartialName(partialName) {}
  /**
   * @param {string} partialName
   * @param {Evidence} securityEvidence
   * @returns {Assembly}
   */
  static LoadWithPartialName(partialName, securityEvidence) {}
  /**
   * @param {string} partialName
   * @param {Evidence} securityEvidence
   * @param {boolean} oldBehavior
   * @returns {Assembly}
   */
  static LoadWithPartialName(partialName, securityEvidence, oldBehavior) {}
  /**
   * @param {Byte[]} rawAssembly
   * @returns {Assembly}
   */
  static ReflectionOnlyLoad(rawAssembly) {}
  /**
   * @param {string} assemblyString
   * @returns {Assembly}
   */
  static ReflectionOnlyLoad(assemblyString) {}
  /**
   * @param {string} assemblyFile
   * @returns {Assembly}
   */
  static ReflectionOnlyLoadFrom(assemblyFile) {}
  /**
   * @param {ModuleResolveEventHandler} value
   * @returns {void}
   */
  remove_ModuleResolve(value) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {Evidence}
   */
  UnprotectedGetEvidence() {}
  /**
   * @param {string} assemblyFile
   * @returns {Assembly}
   */
  static UnsafeLoadFrom(assemblyFile) {}
  /**@type {string}*/
  get CodeBase() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {IEnumerable}*/
  get DefinedTypes() {}
  /**@type {PermissionSet}*/
  get DeniedPermissionSet() {}
  /**@type {MethodInfo}*/
  get EntryPoint() {}
  /**@type {string}*/
  get EscapedCodeBase() {}
  /**@type {Evidence}*/
  get Evidence() {}
  /**@type {IEnumerable}*/
  get ExportedTypes() {}
  /**
 * @param {boolean} value
 */
  set FromByteArray(value) {}
  /**@type {string}*/
  get FullName() {}
  /**@type {boolean}*/
  get GlobalAssemblyCache() {}
  /**@type {PermissionSet}*/
  get GrantedPermissionSet() {}
  /**@type {number}*/
  get HostContext() {}
  /**@type {string}*/
  get ImageRuntimeVersion() {}
  /**@type {boolean}*/
  get IsDynamic() {}
  /**@type {boolean}*/
  get IsFullyTrusted() {}
  /**@type {string}*/
  get Location() {}
  /**@type {Module}*/
  get ManifestModule() {}
  /**@type {IEnumerable}*/
  get Modules() {}
  /**@type {IntPtr}*/
  get MonoAssembly() {}
  /**@type {PermissionSet}*/
  get PermissionSet() {}
  /**@type {boolean}*/
  get ReflectionOnly() {}
  /**@type {number}*/
  get SecurityRuleSet() {}
}
class FieldInfo {
  constructor() {
  }
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @returns {MarshalAsAttribute}
   */
  get_marshal_info() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @param {RuntimeFieldHandle} handle
   * @returns {FieldInfo}
   */
  static GetFieldFromHandle(handle) {}
  /**
   * @param {RuntimeFieldHandle} handle
   * @param {RuntimeTypeHandle} declaringType
   * @returns {FieldInfo}
   */
  static GetFieldFromHandle(handle, declaringType) {}
  /**
   * @returns {number}
   */
  GetFieldOffset() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {Type[]}
   */
  GetOptionalCustomModifiers() {}
  /**
   * @returns {Object[]}
   */
  GetPseudoCustomAttributes() {}
  /**
   * @returns {CustomAttributeData[]}
   */
  GetPseudoCustomAttributesData() {}
  /**
   * @returns {Object}
   */
  GetRawConstantValue() {}
  /**
   * @returns {Type[]}
   */
  GetRequiredCustomModifiers() {}
  /**
   * @param {Object} obj
   * @returns {Object}
   */
  GetValue(obj) {}
  /**
   * @param {TypedReference} obj
   * @returns {Object}
   */
  GetValueDirect(obj) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {IntPtr} field_handle
   * @param {IntPtr} type_handle
   * @returns {FieldInfo}
   */
  static internal_from_handle_type(field_handle, type_handle) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @returns {void}
   */
  SetValue(obj, value) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {CultureInfo} culture
   * @returns {void}
   */
  SetValue(obj, value, invokeAttr, binder, culture) {}
  /**
   * @param {TypedReference} obj
   * @param {Object} value
   * @returns {void}
   */
  SetValueDirect(obj, value) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {RuntimeFieldHandle}*/
  get FieldHandle() {}
  /**@type {Type}*/
  get FieldType() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsInitOnly() {}
  /**@type {boolean}*/
  get IsLiteral() {}
  /**@type {boolean}*/
  get IsNotSerialized() {}
  /**@type {boolean}*/
  get IsPinvokeImpl() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
}
class MethodInfo {
  constructor() {
  }
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Type} delegateType
   * @returns {Delegate}
   */
  CreateDelegate(delegateType) {}
  /**
   * @param {Type} delegateType
   * @param {Object} target
   * @returns {Delegate}
   */
  CreateDelegate(delegateType, target) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatNameAndSig(serialization) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @returns {MethodInfo}
   */
  GetBaseDefinition() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {MethodInfo}
   */
  GetGenericMethodDefinition() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {MethodBody}
   */
  GetMethodBody() {}
  /**
   * @returns {number}
   */
  GetMethodImplementationFlags() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParameters() {}
  /**
   * @returns {number}
   */
  GetParametersCount() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersInternal() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersNoCopy() {}
  /**
   * @param {number} pos
   * @returns {Type}
   */
  GetParameterType(pos) {}
  /**
   * @returns {Type[]}
   */
  GetParameterTypes() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Object} obj
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke(obj, parameters) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke(obj, invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Type[]} typeArguments
   * @returns {MethodInfo}
   */
  MakeGenericMethod(typeArguments) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {number}*/
  get CallingConvention() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {number}*/
  get GenericParameterCount() {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsConstructedGenericMethod() {}
  /**@type {boolean}*/
  get IsConstructor() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsFinal() {}
  /**@type {boolean}*/
  get IsGenericMethod() {}
  /**@type {boolean}*/
  get IsGenericMethodDefinition() {}
  /**@type {boolean}*/
  get IsHideBySig() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {boolean}*/
  get IsVirtual() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {RuntimeMethodHandle}*/
  get MethodHandle() {}
  /**@type {number}*/
  get MethodImplementationFlags() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {ParameterInfo}*/
  get ReturnParameter() {}
  /**@type {Type}*/
  get ReturnType() {}
  /**@type {ICustomAttributeProvider}*/
  get ReturnTypeCustomAttributes() {}
}
class PropertyInfo {
  constructor() {
  }
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @returns {MethodInfo[]}
   */
  GetAccessors() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo[]}
   */
  GetAccessors(nonPublic) {}
  /**
   * @returns {Object}
   */
  GetConstantValue() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {MethodInfo}
   */
  GetGetMethod() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetGetMethod(nonPublic) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetIndexParameters() {}
  /**
   * @returns {Type[]}
   */
  GetOptionalCustomModifiers() {}
  /**
   * @returns {Object}
   */
  GetRawConstantValue() {}
  /**
   * @returns {Type[]}
   */
  GetRequiredCustomModifiers() {}
  /**
   * @returns {MethodInfo}
   */
  GetSetMethod() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetSetMethod(nonPublic) {}
  /**
   * @param {Object} obj
   * @returns {Object}
   */
  GetValue(obj) {}
  /**
   * @param {Object} obj
   * @param {Object[]} index
   * @returns {Object}
   */
  GetValue(obj, index) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} index
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  GetValue(obj, invokeAttr, binder, index, culture) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @returns {void}
   */
  SetValue(obj, value) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @param {Object[]} index
   * @returns {void}
   */
  SetValue(obj, value, index) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} index
   * @param {CultureInfo} culture
   * @returns {void}
   */
  SetValue(obj, value, invokeAttr, binder, index, culture) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {boolean}*/
  get CanRead() {}
  /**@type {boolean}*/
  get CanWrite() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {MethodInfo}*/
  get GetMethod() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get PropertyType() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {MethodInfo}*/
  get SetMethod() {}
}
class EventInfo {
  constructor() {
    /**@type {EventInfo.AddEventAdapter}*/
    this.cached_add_event = null;
  }
  /**
   * @param {AddEvent} addEvent
   * @param {Object} obj
   * @param {Object} dele
   * @returns {void}
   */
  static AddEventFrame(addEvent, obj, dele) {}
  /**
   * @param {Object} target
   * @param {Delegate} handler
   * @returns {void}
   */
  AddEventHandler(target, handler) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {MethodInfo} method
   * @returns {EventInfo.AddEventAdapter}
   */
  static CreateAddEventDelegate(method) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @returns {MethodInfo}
   */
  GetAddMethod() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetAddMethod(nonPublic) {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @param {RuntimeEventHandle} handle
   * @param {RuntimeTypeHandle} reflectedType
   * @returns {EventInfo}
   */
  static GetEventFromHandle(handle, reflectedType) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {MethodInfo[]}
   */
  GetOtherMethods() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo[]}
   */
  GetOtherMethods(nonPublic) {}
  /**
   * @returns {MethodInfo}
   */
  GetRaiseMethod() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetRaiseMethod(nonPublic) {}
  /**
   * @returns {MethodInfo}
   */
  GetRemoveMethod() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetRemoveMethod(nonPublic) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {IntPtr} event_handle
   * @param {IntPtr} type_handle
   * @returns {EventInfo}
   */
  static internal_from_handle_type(event_handle, type_handle) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Object} target
   * @param {Delegate} handler
   * @returns {void}
   */
  RemoveEventHandler(target, handler) {}
  /**
   * @param {StaticAddEvent} addEvent
   * @param {Object} obj
   * @param {Object} dele
   * @returns {void}
   */
  static StaticAddEventAdapterFrame(addEvent, obj, dele) {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {MethodInfo}*/
  get AddMethod() {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {Type}*/
  get EventHandlerType() {}
  /**@type {boolean}*/
  get IsMulticast() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {MethodInfo}*/
  get RaiseMethod() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {MethodInfo}*/
  get RemoveMethod() {}
}
class ParameterInfo {
  constructor() {
    /**@type {number}*/
    this.AttrsImpl = null;
    /**@type {Type}*/
    this.ClassImpl = null;
    /**@type {Object}*/
    this.DefaultValueImpl = null;
    /**@type {MemberInfo}*/
    this.MemberImpl = null;
    /**@type {string}*/
    this.NameImpl = null;
    /**@type {number}*/
    this.PositionImpl = null;
  }
  /**@type {number}*/
  static MetadataToken_ParamDef;
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {Type[]}
   */
  GetOptionalCustomModifiers() {}
  /**
   * @param {StreamingContext} context
   * @returns {Object}
   */
  GetRealObject(context) {}
  /**
   * @returns {Type[]}
   */
  GetRequiredCustomModifiers() {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Object}*/
  get DefaultValue() {}
  /**@type {boolean}*/
  get HasDefaultValue() {}
  /**@type {boolean}*/
  get IsIn() {}
  /**@type {boolean}*/
  get IsLcid() {}
  /**@type {boolean}*/
  get IsOptional() {}
  /**@type {boolean}*/
  get IsOut() {}
  /**@type {boolean}*/
  get IsRetval() {}
  /**@type {MemberInfo}*/
  get Member() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ParameterType() {}
  /**@type {number}*/
  get Position() {}
  /**@type {Object}*/
  get RawDefaultValue() {}
}
class BindingFlags {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {BindingFlags}*/
  static Default;
  /**@type {BindingFlags}*/
  static IgnoreCase;
  /**@type {BindingFlags}*/
  static DeclaredOnly;
  /**@type {BindingFlags}*/
  static Instance;
  /**@type {BindingFlags}*/
  static Static;
  /**@type {BindingFlags}*/
  static Public;
  /**@type {BindingFlags}*/
  static NonPublic;
  /**@type {BindingFlags}*/
  static FlattenHierarchy;
  /**@type {BindingFlags}*/
  static InvokeMethod;
  /**@type {BindingFlags}*/
  static CreateInstance;
  /**@type {BindingFlags}*/
  static GetField;
  /**@type {BindingFlags}*/
  static SetField;
  /**@type {BindingFlags}*/
  static GetProperty;
  /**@type {BindingFlags}*/
  static SetProperty;
  /**@type {BindingFlags}*/
  static PutDispProperty;
  /**@type {BindingFlags}*/
  static PutRefDispProperty;
  /**@type {BindingFlags}*/
  static ExactBinding;
  /**@type {BindingFlags}*/
  static SuppressChangeType;
  /**@type {BindingFlags}*/
  static OptionalParamBinding;
  /**@type {BindingFlags}*/
  static IgnoreReturn;
  /**@type {BindingFlags}*/
  static DoNotWrapExceptions;
}
class DynamicMethod {
  /**
   * @param {string} name
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @param {Module} m
   */
  constructor(name, returnType, parameterTypes, m) {
    /**@type {RuntimeMethodHandle}*/
    this.mhandle = null;
    /**@type {string}*/
    this.name = null;
    /**@type {Type}*/
    this.returnType = null;
    /**@type {Type[]}*/
    this.parameters = null;
    /**@type {number}*/
    this.attributes = null;
    /**@type {number}*/
    this.callingConvention = null;
    /**@type {Module}*/
    this.module = null;
    /**@type {boolean}*/
    this.skipVisibility = null;
    /**@type {boolean}*/
    this.init_locals = null;
    /**@type {ILGenerator}*/
    this.ilgen = null;
    /**@type {number}*/
    this.nrefs = null;
    /**@type {Object[]}*/
    this.refs = null;
    /**@type {IntPtr}*/
    this.referenced_by = null;
    /**@type {Type}*/
    this.owner = null;
    /**@type {Delegate}*/
    this.deleg = null;
    /**@type {RuntimeMethodInfo}*/
    this.method = null;
    /**@type {ParameterBuilder[]}*/
    this.pinfo = null;
    /**@type {boolean}*/
    this.creating = null;
    /**@type {DynamicILInfo}*/
    this.il_info = null;
  }
  /**
   * @param {Object} reference
   * @returns {number}
   */
  AddRef(reference) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {DynamicMethod} m
   * @returns {void}
   */
  static create_dynamic_method(m) {}
  /**
   * @param {Type} delegateType
   * @returns {Delegate}
   */
  CreateDelegate(delegateType) {}
  /**
   * @param {Type} delegateType
   * @param {Object} target
   * @returns {Delegate}
   */
  CreateDelegate(delegateType, target) {}
  /**
   * @returns {void}
   */
  CreateDynMethod() {}
  /**
   * @param {number} position
   * @param {number} attributes
   * @param {string} parameterName
   * @returns {ParameterBuilder}
   */
  DefineParameter(position, attributes, parameterName) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatNameAndSig(serialization) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @returns {MethodInfo}
   */
  GetBaseDefinition() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {DynamicILInfo}
   */
  GetDynamicILInfo() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {MethodInfo}
   */
  GetGenericMethodDefinition() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {ILGenerator}
   */
  GetILGenerator() {}
  /**
   * @param {number} streamSize
   * @returns {ILGenerator}
   */
  GetILGenerator(streamSize) {}
  /**
   * @returns {MethodBody}
   */
  GetMethodBody() {}
  /**
   * @returns {number}
   */
  GetMethodImplementationFlags() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParameters() {}
  /**
   * @returns {number}
   */
  GetParametersCount() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersInternal() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersNoCopy() {}
  /**
   * @param {number} pos
   * @returns {Type}
   */
  GetParameterType(pos) {}
  /**
   * @returns {Type[]}
   */
  GetParameterTypes() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke(obj, invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Object} obj
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke(obj, parameters) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Type[]} typeArguments
   * @returns {MethodInfo}
   */
  MakeGenericMethod(typeArguments) {}
  /**
   * @returns {void}
   */
  RejectIfCreated() {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {number}*/
  get CallingConvention() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {number}*/
  get GenericParameterCount() {}
  /**@type {boolean}*/
  get InitLocals() {}
  /**
 * @param {boolean} value
 */
  set InitLocals(value) {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsConstructedGenericMethod() {}
  /**@type {boolean}*/
  get IsConstructor() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsFinal() {}
  /**@type {boolean}*/
  get IsGenericMethod() {}
  /**@type {boolean}*/
  get IsGenericMethodDefinition() {}
  /**@type {boolean}*/
  get IsHideBySig() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {boolean}*/
  get IsVirtual() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {RuntimeMethodHandle}*/
  get MethodHandle() {}
  /**@type {number}*/
  get MethodImplementationFlags() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {ParameterInfo}*/
  get ReturnParameter() {}
  /**@type {Type}*/
  get ReturnType() {}
  /**@type {ICustomAttributeProvider}*/
  get ReturnTypeCustomAttributes() {}
}
class AssemblyBuilder {
  constructor() {
    /**@type {IntPtr}*/
    this._mono_assembly = null;
    /**@type {Evidence}*/
    this._evidence = null;
    /**@type {UIntPtr}*/
    this.dynamic_assembly = null;
    /**@type {MethodInfo}*/
    this.entry_point = null;
    /**@type {ModuleBuilder[]}*/
    this.modules = null;
    /**@type {string}*/
    this.name = null;
    /**@type {string}*/
    this.dir = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {MonoResource[]}*/
    this.resources = null;
    /**@type {Byte[]}*/
    this.public_key = null;
    /**@type {string}*/
    this.version = null;
    /**@type {string}*/
    this.culture = null;
    /**@type {number}*/
    this.algid = null;
    /**@type {number}*/
    this.flags = null;
    /**@type {number}*/
    this.pekind = null;
    /**@type {boolean}*/
    this.delay_sign = null;
    /**@type {number}*/
    this.access = null;
    /**@type {Module[]}*/
    this.loaded_modules = null;
    /**@type {MonoWin32Resource[]}*/
    this.win32_resources = null;
    /**@type {RefEmitPermissionSet[]}*/
    this.permissions_minimum = null;
    /**@type {RefEmitPermissionSet[]}*/
    this.permissions_optional = null;
    /**@type {RefEmitPermissionSet[]}*/
    this.permissions_refused = null;
    /**@type {number}*/
    this.peKind = null;
    /**@type {number}*/
    this.machine = null;
    /**@type {boolean}*/
    this.corlib_internal = null;
    /**@type {Type[]}*/
    this.type_forwarders = null;
    /**@type {Byte[]}*/
    this.pktoken = null;
    /**@type {PermissionSet}*/
    this._minimum = null;
    /**@type {PermissionSet}*/
    this._optional = null;
    /**@type {PermissionSet}*/
    this._refuse = null;
    /**@type {PermissionSet}*/
    this._granted = null;
    /**@type {PermissionSet}*/
    this._denied = null;
    /**@type {string}*/
    this.assemblyName = null;
    /**@type {Type}*/
    this.corlib_object_type = null;
    /**@type {Type}*/
    this.corlib_value_type = null;
    /**@type {Type}*/
    this.corlib_enum_type = null;
    /**@type {Type}*/
    this.corlib_void_type = null;
    /**@type {ArrayList}*/
    this.resource_writers = null;
    /**@type {Win32VersionResource}*/
    this.version_res = null;
    /**@type {boolean}*/
    this.created = null;
    /**@type {boolean}*/
    this.is_module_only = null;
    /**@type {StrongName}*/
    this.sn = null;
    /**@type {number}*/
    this.native_resource = null;
    /**@type {string}*/
    this.versioninfo_culture = null;
    /**@type {ModuleBuilder}*/
    this.manifest_module = null;
  }
  /**@type {AssemblyBuilder}*/
  static COMPILER_ACCESS;
  /**
   * @param {ModuleResolveEventHandler} value
   * @returns {void}
   */
  add_ModuleResolve(value) {}
  /**
   * @param {PermissionSet} required
   * @param {PermissionSet} optional
   * @param {PermissionSet} refused
   * @returns {void}
   */
  AddPermissionRequests(required, optional, refused) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @returns {void}
   */
  AddResourceFile(name, fileName) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @param {number} attribute
   * @returns {void}
   */
  AddResourceFile(name, fileName, attribute) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @param {number} attribute
   * @param {boolean} fileNeedsToExists
   * @returns {void}
   */
  AddResourceFile(name, fileName, attribute, fileNeedsToExists) {}
  /**
   * @param {Win32Resource} res
   * @returns {void}
   */
  AddUnmanagedResource(res) {}
  /**
   * @param {AssemblyBuilder} ab
   * @returns {void}
   */
  static basic_init(ab) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @param {boolean} fileNeedsToExists
   * @returns {void}
   */
  check_name_and_filename(name, fileName, fileNeedsToExists) {}
  /**
   * @param {string} version
   * @returns {string}
   */
  create_assembly_version(version) {}
  /**
   * @param {string} typeName
   * @returns {Object}
   */
  CreateInstance(typeName) {}
  /**
   * @param {string} typeName
   * @param {boolean} ignoreCase
   * @returns {Object}
   */
  CreateInstance(typeName, ignoreCase) {}
  /**
   * @param {string} typeName
   * @param {boolean} ignoreCase
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Object[]} args
   * @param {CultureInfo} culture
   * @param {Object[]} activationAttributes
   * @returns {Object}
   */
  CreateInstance(typeName, ignoreCase, bindingAttr, binder, args, culture, activationAttributes) {}
  /**
   * @param {AssemblyName} name
   * @param {number} access
   * @returns {AssemblyBuilder}
   */
  static DefineDynamicAssembly(name, access) {}
  /**
   * @param {AssemblyName} name
   * @param {number} access
   * @param {IEnumerable} assemblyAttributes
   * @returns {AssemblyBuilder}
   */
  static DefineDynamicAssembly(name, access, assemblyAttributes) {}
  /**
   * @param {string} name
   * @returns {ModuleBuilder}
   */
  DefineDynamicModule(name) {}
  /**
   * @param {string} name
   * @param {boolean} emitSymbolInfo
   * @returns {ModuleBuilder}
   */
  DefineDynamicModule(name, emitSymbolInfo) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @returns {ModuleBuilder}
   */
  DefineDynamicModule(name, fileName) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @param {boolean} emitSymbolInfo
   * @returns {ModuleBuilder}
   */
  DefineDynamicModule(name, fileName, emitSymbolInfo) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @param {boolean} emitSymbolInfo
   * @param {boolean} transient
   * @returns {ModuleBuilder}
   */
  DefineDynamicModule(name, fileName, emitSymbolInfo, transient) {}
  /**
   * @param {string} name
   * @param {string} description
   * @param {string} fileName
   * @returns {IResourceWriter}
   */
  DefineResource(name, description, fileName) {}
  /**
   * @param {string} name
   * @param {string} description
   * @param {string} fileName
   * @param {number} attribute
   * @returns {IResourceWriter}
   */
  DefineResource(name, description, fileName, attribute) {}
  /**
   * @param {Byte[]} resource
   * @returns {void}
   */
  DefineUnmanagedResource(resource) {}
  /**
   * @param {string} resourceFileName
   * @returns {void}
   */
  DefineUnmanagedResource(resourceFileName) {}
  /**
   * @returns {void}
   */
  DefineVersionInfoResource() {}
  /**
   * @param {string} product
   * @param {string} productVersion
   * @param {string} company
   * @param {string} copyright
   * @param {string} trademark
   * @returns {void}
   */
  DefineVersionInfoResource(product, productVersion, company, copyright, trademark) {}
  /**
   * @param {string} fileName
   * @returns {void}
   */
  DefineVersionInfoResourceImpl(fileName) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @returns {void}
   */
  EmbedResourceFile(name, fileName) {}
  /**
   * @param {string} name
   * @param {string} fileName
   * @param {number} attribute
   * @returns {void}
   */
  EmbedResourceFile(name, fileName, attribute) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {string} str
   * @returns {string}
   */
  GetCultureString(str) {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @param {string} name
   * @returns {ModuleBuilder}
   */
  GetDynamicModule(name) {}
  /**
   * @returns {Type[]}
   */
  GetExportedTypes() {}
  /**
   * @param {string} name
   * @returns {FileStream}
   */
  GetFile(name) {}
  /**
   * @param {boolean} getResourceModules
   * @returns {FileStream[]}
   */
  GetFiles(getResourceModules) {}
  /**
   * @returns {FileStream[]}
   */
  GetFiles() {}
  /**
   * @returns {Type[]}
   */
  GetForwardedTypes() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {boolean} getResourceModules
   * @returns {Module[]}
   */
  GetLoadedModules(getResourceModules) {}
  /**
   * @returns {Module[]}
   */
  GetLoadedModules() {}
  /**
   * @returns {Module}
   */
  GetManifestModule() {}
  /**
   * @param {string} resourceName
   * @returns {ManifestResourceInfo}
   */
  GetManifestResourceInfo(resourceName) {}
  /**
   * @returns {String[]}
   */
  GetManifestResourceNames() {}
  /**
   * @param {string} name
   * @returns {Stream}
   */
  GetManifestResourceStream(name) {}
  /**
   * @param {Type} type
   * @param {string} name
   * @returns {Stream}
   */
  GetManifestResourceStream(type, name) {}
  /**
   * @param {string} name
   * @returns {Module}
   */
  GetModule(name) {}
  /**
   * @param {boolean} getResourceModules
   * @returns {Module[]}
   */
  GetModules(getResourceModules) {}
  /**
   * @returns {Module[]}
   */
  GetModules() {}
  /**
   * @returns {Module[]}
   */
  GetModulesInternal() {}
  /**
   * @param {boolean} copiedName
   * @returns {AssemblyName}
   */
  GetName(copiedName) {}
  /**
   * @returns {AssemblyName}
   */
  GetName() {}
  /**
   * @param {SerializationInfo} info
   * @param {StreamingContext} context
   * @returns {void}
   */
  GetObjectData(info, context) {}
  /**
   * @returns {Byte[]}
   */
  GetPublicKey() {}
  /**
   * @returns {AssemblyName[]}
   */
  GetReferencedAssemblies() {}
  /**
   * @param {CultureInfo} culture
   * @returns {Assembly}
   */
  GetSatelliteAssembly(culture) {}
  /**
   * @param {CultureInfo} culture
   * @param {Version} version
   * @returns {Assembly}
   */
  GetSatelliteAssembly(culture, version) {}
  /**
   * @returns {string}
   */
  GetSimpleName() {}
  /**
   * @param {string} name
   * @param {boolean} throwOnError
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  GetType(name, throwOnError, ignoreCase) {}
  /**
   * @param {string} name
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  GetType(name, throwOnError) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetType(name) {}
  /**
   * @param {boolean} exportedOnly
   * @returns {Type[]}
   */
  GetTypes(exportedOnly) {}
  /**
   * @returns {Type[]}
   */
  GetTypes() {}
  /**
   * @returns {Version}
   */
  GetVersion() {}
  /**
   * @param {Module} module
   * @param {string} name
   * @param {boolean} throwOnError
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  InternalGetType(module, name, throwOnError, ignoreCase) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {string} moduleName
   * @param {Byte[]} rawModule
   * @returns {Module}
   */
  LoadModule(moduleName, rawModule) {}
  /**
   * @param {string} moduleName
   * @param {Byte[]} rawModule
   * @param {Byte[]} rawSymbolStore
   * @returns {Module}
   */
  LoadModule(moduleName, rawModule, rawSymbolStore) {}
  /**
   * @param {Type} gtd
   * @param {Type[]} typeArguments
   * @returns {Type}
   */
  MakeGenericType(gtd, typeArguments) {}
  /**
   * @returns {Exception}
   */
  not_supported() {}
  /**
   * @param {ModuleResolveEventHandler} value
   * @returns {void}
   */
  remove_ModuleResolve(value) {}
  /**
   * @param {string} assemblyFileName
   * @param {number} portableExecutableKind
   * @param {number} imageFileMachine
   * @returns {void}
   */
  Save(assemblyFileName, portableExecutableKind, imageFileMachine) {}
  /**
   * @param {string} assemblyFileName
   * @returns {void}
   */
  Save(assemblyFileName) {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {MethodInfo} entryMethod
   * @returns {void}
   */
  SetEntryPoint(entryMethod) {}
  /**
   * @param {MethodInfo} entryMethod
   * @param {number} fileKind
   * @returns {void}
   */
  SetEntryPoint(entryMethod, fileKind) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @returns {Evidence}
   */
  UnprotectedGetEvidence() {}
  /**
   * @param {AssemblyBuilder} ab
   * @returns {void}
   */
  static UpdateNativeCustomAttributes(ab) {}
  /**@type {string}*/
  get AssemblyDir() {}
  /**@type {string}*/
  get CodeBase() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {IEnumerable}*/
  get DefinedTypes() {}
  /**@type {PermissionSet}*/
  get DeniedPermissionSet() {}
  /**@type {MethodInfo}*/
  get EntryPoint() {}
  /**@type {string}*/
  get EscapedCodeBase() {}
  /**@type {Evidence}*/
  get Evidence() {}
  /**@type {IEnumerable}*/
  get ExportedTypes() {}
  /**
 * @param {boolean} value
 */
  set FromByteArray(value) {}
  /**@type {string}*/
  get FullName() {}
  /**@type {boolean}*/
  get GlobalAssemblyCache() {}
  /**@type {PermissionSet}*/
  get GrantedPermissionSet() {}
  /**@type {number}*/
  get HostContext() {}
  /**@type {string}*/
  get ImageRuntimeVersion() {}
  /**@type {boolean}*/
  get IsDynamic() {}
  /**@type {boolean}*/
  get IsFullyTrusted() {}
  /**@type {boolean}*/
  get IsModuleOnly() {}
  /**
 * @param {boolean} value
 */
  set IsModuleOnly(value) {}
  /**@type {boolean}*/
  get IsRun() {}
  /**@type {boolean}*/
  get IsSave() {}
  /**@type {string}*/
  get Location() {}
  /**@type {Module}*/
  get ManifestModule() {}
  /**@type {IEnumerable}*/
  get Modules() {}
  /**@type {IntPtr}*/
  get MonoAssembly() {}
  /**@type {PermissionSet}*/
  get PermissionSet() {}
  /**@type {boolean}*/
  get ReflectionOnly() {}
  /**@type {number}*/
  get SecurityRuleSet() {}
}
class EnumBuilder {
  constructor() {
    /**@type {TypeBuilder}*/
    this._tb = null;
    /**@type {FieldBuilder}*/
    this._underlyingField = null;
    /**@type {Type}*/
    this._underlyingType = null;
    /**@type {RuntimeTypeHandle}*/
    this._impl = null;
  }
  /**
   * @returns {Type}
   */
  AsType() {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @returns {Exception}
   */
  CreateNotSupportedException() {}
  /**
   * @returns {Type}
   */
  CreateType() {}
  /**
   * @returns {TypeInfo}
   */
  CreateTypeInfo() {}
  /**
   * @param {string} literalName
   * @param {Object} literalValue
   * @returns {FieldBuilder}
   */
  DefineLiteral(literalName, literalValue) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  Equals(o) {}
  /**
   * @param {Type} o
   * @returns {boolean}
   */
  Equals(o) {}
  /**
   * @param {TypeFilter} filter
   * @param {Object} filterCriteria
   * @returns {Type[]}
   */
  FindInterfaces(filter, filterCriteria) {}
  /**
   * @param {number} memberType
   * @param {number} bindingAttr
   * @param {MemberFilter} filter
   * @param {Object} filterCriteria
   * @returns {MemberInfo[]}
   */
  FindMembers(memberType, bindingAttr, filter, filterCriteria) {}
  /**
   * @returns {string}
   */
  FormatTypeName() {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatTypeName(serialization) {}
  /**
   * @returns {number}
   */
  GetArrayRank() {}
  /**
   * @returns {number}
   */
  GetAttributeFlagsImpl() {}
  /**
   * @param {Type[]} types
   * @returns {ConstructorInfo}
   */
  GetConstructor(types) {}
  /**
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {ConstructorInfo}
   */
  GetConstructor(bindingAttr, binder, types, modifiers) {}
  /**
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {ConstructorInfo}
   */
  GetConstructor(bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {ConstructorInfo} fromNoninstanciated
   * @returns {ConstructorInfo}
   */
  GetConstructor(fromNoninstanciated) {}
  /**
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {ConstructorInfo}
   */
  GetConstructorImpl(bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {number} bindingAttr
   * @returns {ConstructorInfo[]}
   */
  GetConstructors(bindingAttr) {}
  /**
   * @returns {ConstructorInfo[]}
   */
  GetConstructors() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @param {string} name
   * @returns {EventInfo}
   */
  GetDeclaredEvent(name) {}
  /**
   * @param {string} name
   * @returns {FieldInfo}
   */
  GetDeclaredField(name) {}
  /**
   * @param {string} name
   * @returns {MethodInfo}
   */
  GetDeclaredMethod(name) {}
  /**
   * @param {string} name
   * @returns {IEnumerable}
   */
  GetDeclaredMethods(name) {}
  /**
   * @param {string} name
   * @returns {TypeInfo}
   */
  GetDeclaredNestedType(name) {}
  /**
   * @param {string} name
   * @returns {PropertyInfo}
   */
  GetDeclaredProperty(name) {}
  /**
   * @returns {MemberInfo[]}
   */
  GetDefaultMembers() {}
  /**
   * @returns {Type}
   */
  GetElementType() {}
  /**
   * @param {Object} value
   * @returns {string}
   */
  GetEnumName(value) {}
  /**
   * @returns {String[]}
   */
  GetEnumNames() {}
  /**
   * @returns {Type}
   */
  GetEnumUnderlyingType() {}
  /**
   * @returns {any[]}
   */
  GetEnumValues() {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {EventInfo}
   */
  GetEvent(name, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {EventInfo}
   */
  GetEvent(name) {}
  /**
   * @returns {EventInfo[]}
   */
  GetEvents() {}
  /**
   * @param {number} bindingAttr
   * @returns {EventInfo[]}
   */
  GetEvents(bindingAttr) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {FieldInfo}
   */
  GetField(name, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {FieldInfo}
   */
  GetField(name) {}
  /**
   * @param {FieldInfo} fromNoninstanciated
   * @returns {FieldInfo}
   */
  GetField(fromNoninstanciated) {}
  /**
   * @param {number} bindingAttr
   * @returns {FieldInfo[]}
   */
  GetFields(bindingAttr) {}
  /**
   * @returns {FieldInfo[]}
   */
  GetFields() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {Type[]}
   */
  GetGenericParameterConstraints() {}
  /**
   * @returns {Type}
   */
  GetGenericTypeDefinition() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {string} name
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  GetInterface(name, ignoreCase) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetInterface(name) {}
  /**
   * @param {Type} interfaceType
   * @returns {InterfaceMapping}
   */
  GetInterfaceMap(interfaceType) {}
  /**
   * @returns {Type[]}
   */
  GetInterfaces() {}
  /**
   * @param {string} name
   * @param {number} type
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMember(name, type, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {MemberInfo[]}
   */
  GetMember(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMember(name, bindingAttr) {}
  /**
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMembers(bindingAttr) {}
  /**
   * @returns {MemberInfo[]}
   */
  GetMembers() {}
  /**
   * @param {string} name
   * @returns {MethodInfo}
   */
  GetMethod(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {MethodInfo}
   */
  GetMethod(name, bindingAttr) {}
  /**
   * @param {string} name
   * @param {Type[]} types
   * @returns {MethodInfo}
   */
  GetMethod(name, types) {}
  /**
   * @param {string} name
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, bindingAttr, binder, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {Type[]} types
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, types) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, bindingAttr, binder, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {MethodInfo} fromNoninstanciated
   * @returns {MethodInfo}
   */
  GetMethod(fromNoninstanciated) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethodImpl(name, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethodImpl(name, genericParameterCount, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {number} bindingAttr
   * @returns {MethodInfo[]}
   */
  GetMethods(bindingAttr) {}
  /**
   * @returns {MethodInfo[]}
   */
  GetMethods() {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {Type}
   */
  GetNestedType(name, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetNestedType(name) {}
  /**
   * @param {number} bindingAttr
   * @returns {Type[]}
   */
  GetNestedTypes(bindingAttr) {}
  /**
   * @returns {Type[]}
   */
  GetNestedTypes() {}
  /**
   * @param {number} bindingAttr
   * @returns {PropertyInfo[]}
   */
  GetProperties(bindingAttr) {}
  /**
   * @returns {PropertyInfo[]}
   */
  GetProperties() {}
  /**
   * @param {string} name
   * @returns {PropertyInfo}
   */
  GetProperty(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {PropertyInfo}
   */
  GetProperty(name, bindingAttr) {}
  /**
   * @param {string} name
   * @param {Type} returnType
   * @returns {PropertyInfo}
   */
  GetProperty(name, returnType) {}
  /**
   * @param {string} name
   * @param {Type[]} types
   * @returns {PropertyInfo}
   */
  GetProperty(name, types) {}
  /**
   * @param {string} name
   * @param {Type} returnType
   * @param {Type[]} types
   * @returns {PropertyInfo}
   */
  GetProperty(name, returnType, types) {}
  /**
   * @param {string} name
   * @param {Type} returnType
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {PropertyInfo}
   */
  GetProperty(name, returnType, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type} returnType
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {PropertyInfo}
   */
  GetProperty(name, bindingAttr, binder, returnType, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type} returnType
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {PropertyInfo}
   */
  GetPropertyImpl(name, bindingAttr, binder, returnType, types, modifiers) {}
  /**
   * @returns {Type}
   */
  GetRootElementType() {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @returns {TypeBuilder}
   */
  GetTypeBuilder() {}
  /**
   * @returns {number}
   */
  GetTypeCodeImpl() {}
  /**
   * @returns {RuntimeTypeHandle}
   */
  GetTypeHandleInternal() {}
  /**
   * @returns {boolean}
   */
  HasElementTypeImpl() {}
  /**
   * @returns {boolean}
   */
  HasProxyAttributeImpl() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Type} ifaceType
   * @returns {boolean}
   */
  ImplementInterface(ifaceType) {}
  /**
   * @returns {Type}
   */
  InternalResolve() {}
  /**
   * @param {string} name
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object} target
   * @param {Object[]} args
   * @param {ParameterModifier[]} modifiers
   * @param {CultureInfo} culture
   * @param {String[]} namedParameters
   * @returns {Object}
   */
  InvokeMember(name, invokeAttr, binder, target, args, modifiers, culture, namedParameters) {}
  /**
   * @param {string} name
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object} target
   * @param {Object[]} args
   * @returns {Object}
   */
  InvokeMember(name, invokeAttr, binder, target, args) {}
  /**
   * @param {string} name
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object} target
   * @param {Object[]} args
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  InvokeMember(name, invokeAttr, binder, target, args, culture) {}
  /**
   * @returns {boolean}
   */
  IsArrayImpl() {}
  /**
   * @param {TypeInfo} typeInfo
   * @returns {boolean}
   */
  IsAssignableFrom(typeInfo) {}
  /**
   * @param {Type} c
   * @returns {boolean}
   */
  IsAssignableFrom(c) {}
  /**
   * @returns {boolean}
   */
  IsByRefImpl() {}
  /**
   * @returns {boolean}
   */
  IsCOMObjectImpl() {}
  /**
   * @returns {boolean}
   */
  IsContextfulImpl() {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Object} value
   * @returns {boolean}
   */
  IsEnumDefined(value) {}
  /**
   * @param {Type} other
   * @returns {boolean}
   */
  IsEquivalentTo(other) {}
  /**
   * @returns {boolean}
   */
  IsExportedToWindowsRuntimeImpl() {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  IsInstanceOfType(o) {}
  /**
   * @returns {boolean}
   */
  IsMarshalByRefImpl() {}
  /**
   * @returns {boolean}
   */
  IsPointerImpl() {}
  /**
   * @returns {boolean}
   */
  IsPrimitiveImpl() {}
  /**
   * @returns {boolean}
   */
  IsRuntimeImplemented() {}
  /**
   * @param {Type} c
   * @returns {boolean}
   */
  IsSubclassOf(c) {}
  /**
   * @returns {boolean}
   */
  IsValueTypeImpl() {}
  /**
   * @returns {boolean}
   */
  IsWindowsRuntimeObjectImpl() {}
  /**
   * @returns {Type}
   */
  MakeArrayType() {}
  /**
   * @param {number} rank
   * @returns {Type}
   */
  MakeArrayType(rank) {}
  /**
   * @returns {Type}
   */
  MakeByRefType() {}
  /**
   * @param {Type[]} typeArguments
   * @returns {Type}
   */
  MakeGenericType(typeArguments) {}
  /**
   * @returns {Type}
   */
  MakePointerType() {}
  /**
   * @returns {Type}
   */
  RuntimeResolve() {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {Type} t
   * @returns {void}
   */
  setup_enum_type(t) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {Assembly}*/
  get Assembly() {}
  /**@type {string}*/
  get AssemblyQualifiedName() {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {Type}*/
  get BaseType() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {IEnumerable}*/
  get DeclaredConstructors() {}
  /**@type {IEnumerable}*/
  get DeclaredEvents() {}
  /**@type {IEnumerable}*/
  get DeclaredFields() {}
  /**@type {IEnumerable}*/
  get DeclaredMembers() {}
  /**@type {IEnumerable}*/
  get DeclaredMethods() {}
  /**@type {IEnumerable}*/
  get DeclaredNestedTypes() {}
  /**@type {IEnumerable}*/
  get DeclaredProperties() {}
  /**@type {MethodBase}*/
  get DeclaringMethod() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {string}*/
  get FullName() {}
  /**@type {string}*/
  get FullNameOrDefault() {}
  /**@type {number}*/
  get GenericParameterAttributes() {}
  /**@type {number}*/
  get GenericParameterPosition() {}
  /**@type {Type[]}*/
  get GenericTypeArguments() {}
  /**@type {Type[]}*/
  get GenericTypeParameters() {}
  /**@type {Guid}*/
  get GUID() {}
  /**@type {boolean}*/
  get HasElementType() {}
  /**@type {IEnumerable}*/
  get ImplementedInterfaces() {}
  /**@type {string}*/
  get InternalNameIfAvailable() {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAnsiClass() {}
  /**@type {boolean}*/
  get IsArray() {}
  /**@type {boolean}*/
  get IsAutoClass() {}
  /**@type {boolean}*/
  get IsAutoLayout() {}
  /**@type {boolean}*/
  get IsByRef() {}
  /**@type {boolean}*/
  get IsByRefLike() {}
  /**@type {boolean}*/
  get IsClass() {}
  /**@type {boolean}*/
  get IsCollectible() {}
  /**@type {boolean}*/
  get IsCOMObject() {}
  /**@type {boolean}*/
  get IsConstructedGenericType() {}
  /**@type {boolean}*/
  get IsContextful() {}
  /**@type {boolean}*/
  get IsEnum() {}
  /**@type {boolean}*/
  get IsExplicitLayout() {}
  /**@type {boolean}*/
  get IsExportedToWindowsRuntime() {}
  /**@type {boolean}*/
  get IsGenericMethodParameter() {}
  /**@type {boolean}*/
  get IsGenericParameter() {}
  /**@type {boolean}*/
  get IsGenericType() {}
  /**@type {boolean}*/
  get IsGenericTypeDefinition() {}
  /**@type {boolean}*/
  get IsGenericTypeParameter() {}
  /**@type {boolean}*/
  get IsImport() {}
  /**@type {boolean}*/
  get IsInterface() {}
  /**@type {boolean}*/
  get IsLayoutSequential() {}
  /**@type {boolean}*/
  get IsMarshalByRef() {}
  /**@type {boolean}*/
  get IsNested() {}
  /**@type {boolean}*/
  get IsNestedAssembly() {}
  /**@type {boolean}*/
  get IsNestedFamANDAssem() {}
  /**@type {boolean}*/
  get IsNestedFamily() {}
  /**@type {boolean}*/
  get IsNestedFamORAssem() {}
  /**@type {boolean}*/
  get IsNestedPrivate() {}
  /**@type {boolean}*/
  get IsNestedPublic() {}
  /**@type {boolean}*/
  get IsNotPublic() {}
  /**@type {boolean}*/
  get IsPointer() {}
  /**@type {boolean}*/
  get IsPrimitive() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSealed() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSerializable() {}
  /**@type {boolean}*/
  get IsSignatureType() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsSzArray() {}
  /**@type {boolean}*/
  get IsSZArray() {}
  /**@type {boolean}*/
  get IsTypeDefinition() {}
  /**@type {boolean}*/
  get IsUnicodeClass() {}
  /**@type {boolean}*/
  get IsUserType() {}
  /**@type {boolean}*/
  get IsValueType() {}
  /**@type {boolean}*/
  get IsVariableBoundArray() {}
  /**@type {boolean}*/
  get IsVisible() {}
  /**@type {boolean}*/
  get IsWindowsRuntimeObject() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {string}*/
  get NameOrDefault() {}
  /**@type {string}*/
  get Namespace() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {StructLayoutAttribute}*/
  get StructLayoutAttribute() {}
  /**@type {RuntimeTypeHandle}*/
  get TypeHandle() {}
  /**@type {ConstructorInfo}*/
  get TypeInitializer() {}
  /**@type {TypeToken}*/
  get TypeToken() {}
  /**@type {FieldBuilder}*/
  get UnderlyingField() {}
  /**@type {Type}*/
  get UnderlyingSystemType() {}
}
class TypeBuilder {
  constructor() {
    /**@type {string}*/
    this.tname = null;
    /**@type {string}*/
    this.nspace = null;
    /**@type {Type}*/
    this.parent = null;
    /**@type {Type}*/
    this.nesting_type = null;
    /**@type {Type[]}*/
    this.interfaces = null;
    /**@type {number}*/
    this.num_methods = null;
    /**@type {MethodBuilder[]}*/
    this.methods = null;
    /**@type {ConstructorBuilder[]}*/
    this.ctors = null;
    /**@type {PropertyBuilder[]}*/
    this.properties = null;
    /**@type {number}*/
    this.num_fields = null;
    /**@type {FieldBuilder[]}*/
    this.fields = null;
    /**@type {EventBuilder[]}*/
    this.events = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {TypeBuilder[]}*/
    this.subtypes = null;
    /**@type {number}*/
    this.attrs = null;
    /**@type {number}*/
    this.table_idx = null;
    /**@type {ModuleBuilder}*/
    this.pmodule = null;
    /**@type {number}*/
    this.class_size = null;
    /**@type {number}*/
    this.packing_size = null;
    /**@type {IntPtr}*/
    this.generic_container = null;
    /**@type {GenericTypeParameterBuilder[]}*/
    this.generic_params = null;
    /**@type {RefEmitPermissionSet[]}*/
    this.permissions = null;
    /**@type {TypeInfo}*/
    this.created = null;
    /**@type {number}*/
    this.state = null;
    /**@type {TypeName}*/
    this.fullname = null;
    /**@type {boolean}*/
    this.createTypeCalled = null;
    /**@type {Type}*/
    this.underlying_type = null;
    /**@type {RuntimeTypeHandle}*/
    this._impl = null;
  }
  /**@type {number}*/
  static UnspecifiedTypeSize;
  /**
   * @param {number} action
   * @param {PermissionSet} pset
   * @returns {void}
   */
  AddDeclarativeSecurity(action, pset) {}
  /**
   * @param {Type} interfaceType
   * @returns {void}
   */
  AddInterfaceImplementation(interfaceType) {}
  /**
   * @param {MethodBuilder} mb
   * @returns {void}
   */
  append_method(mb) {}
  /**
   * @returns {Type}
   */
  AsType() {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @returns {void}
   */
  check_created() {}
  /**
   * @param {string} argName
   * @param {string} name
   * @returns {void}
   */
  check_name(argName, name) {}
  /**
   * @returns {void}
   */
  check_not_created() {}
  /**
   * @returns {TypeInfo}
   */
  create_runtime_class() {}
  /**
   * @returns {Type}
   */
  CreateType() {}
  /**
   * @returns {TypeInfo}
   */
  CreateTypeInfo() {}
  /**
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type[]} parameterTypes
   * @returns {ConstructorBuilder}
   */
  DefineConstructor(attributes, callingConvention, parameterTypes) {}
  /**
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type[]} parameterTypes
   * @param {Type[][]} requiredCustomModifiers
   * @param {Type[][]} optionalCustomModifiers
   * @returns {ConstructorBuilder}
   */
  DefineConstructor(attributes, callingConvention, parameterTypes, requiredCustomModifiers, optionalCustomModifiers) {}
  /**
   * @param {number} attributes
   * @returns {ConstructorBuilder}
   */
  DefineDefaultConstructor(attributes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {Type} eventtype
   * @returns {EventBuilder}
   */
  DefineEvent(name, attributes, eventtype) {}
  /**
   * @param {string} fieldName
   * @param {Type} type
   * @param {number} attributes
   * @returns {FieldBuilder}
   */
  DefineField(fieldName, type, attributes) {}
  /**
   * @param {string} fieldName
   * @param {Type} type
   * @param {Type[]} requiredCustomModifiers
   * @param {Type[]} optionalCustomModifiers
   * @param {number} attributes
   * @returns {FieldBuilder}
   */
  DefineField(fieldName, type, requiredCustomModifiers, optionalCustomModifiers, attributes) {}
  /**
   * @param {String[]} names
   * @returns {GenericTypeParameterBuilder[]}
   */
  DefineGenericParameters(names) {}
  /**
   * @param {string} name
   * @param {Byte[]} data
   * @param {number} attributes
   * @returns {FieldBuilder}
   */
  DefineInitializedData(name, data, attributes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @returns {MethodBuilder}
   */
  DefineMethod(name, attributes, returnType, parameterTypes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @returns {MethodBuilder}
   */
  DefineMethod(name, attributes, callingConvention, returnType, parameterTypes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} returnTypeRequiredCustomModifiers
   * @param {Type[]} returnTypeOptionalCustomModifiers
   * @param {Type[]} parameterTypes
   * @param {Type[][]} parameterTypeRequiredCustomModifiers
   * @param {Type[][]} parameterTypeOptionalCustomModifiers
   * @returns {MethodBuilder}
   */
  DefineMethod(name, attributes, callingConvention, returnType, returnTypeRequiredCustomModifiers, returnTypeOptionalCustomModifiers, parameterTypes, parameterTypeRequiredCustomModifiers, parameterTypeOptionalCustomModifiers) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @returns {MethodBuilder}
   */
  DefineMethod(name, attributes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {number} callingConvention
   * @returns {MethodBuilder}
   */
  DefineMethod(name, attributes, callingConvention) {}
  /**
   * @param {MethodInfo} methodInfoBody
   * @param {MethodInfo} methodInfoDeclaration
   * @returns {void}
   */
  DefineMethodOverride(methodInfoBody, methodInfoDeclaration) {}
  /**
   * @param {string} name
   * @returns {TypeBuilder}
   */
  DefineNestedType(name) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @param {Type} parent
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr, parent) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @param {Type} parent
   * @param {Type[]} interfaces
   * @param {number} packSize
   * @param {number} typeSize
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr, parent, interfaces, packSize, typeSize) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @param {Type} parent
   * @param {Type[]} interfaces
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr, parent, interfaces) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @param {Type} parent
   * @param {number} typeSize
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr, parent, typeSize) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @param {Type} parent
   * @param {number} packSize
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr, parent, packSize) {}
  /**
   * @param {string} name
   * @param {number} attr
   * @param {Type} parent
   * @param {number} packSize
   * @param {number} typeSize
   * @returns {TypeBuilder}
   */
  DefineNestedType(name, attr, parent, packSize, typeSize) {}
  /**
   * @param {string} name
   * @param {string} dllName
   * @param {string} entryName
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @param {number} nativeCallConv
   * @param {number} nativeCharSet
   * @returns {MethodBuilder}
   */
  DefinePInvokeMethod(name, dllName, entryName, attributes, callingConvention, returnType, parameterTypes, nativeCallConv, nativeCharSet) {}
  /**
   * @param {string} name
   * @param {string} dllName
   * @param {string} entryName
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} returnTypeRequiredCustomModifiers
   * @param {Type[]} returnTypeOptionalCustomModifiers
   * @param {Type[]} parameterTypes
   * @param {Type[][]} parameterTypeRequiredCustomModifiers
   * @param {Type[][]} parameterTypeOptionalCustomModifiers
   * @param {number} nativeCallConv
   * @param {number} nativeCharSet
   * @returns {MethodBuilder}
   */
  DefinePInvokeMethod(name, dllName, entryName, attributes, callingConvention, returnType, returnTypeRequiredCustomModifiers, returnTypeOptionalCustomModifiers, parameterTypes, parameterTypeRequiredCustomModifiers, parameterTypeOptionalCustomModifiers, nativeCallConv, nativeCharSet) {}
  /**
   * @param {string} name
   * @param {string} dllName
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @param {number} nativeCallConv
   * @param {number} nativeCharSet
   * @returns {MethodBuilder}
   */
  DefinePInvokeMethod(name, dllName, attributes, callingConvention, returnType, parameterTypes, nativeCallConv, nativeCharSet) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @returns {PropertyBuilder}
   */
  DefineProperty(name, attributes, returnType, parameterTypes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @returns {PropertyBuilder}
   */
  DefineProperty(name, attributes, callingConvention, returnType, parameterTypes) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {Type} returnType
   * @param {Type[]} returnTypeRequiredCustomModifiers
   * @param {Type[]} returnTypeOptionalCustomModifiers
   * @param {Type[]} parameterTypes
   * @param {Type[][]} parameterTypeRequiredCustomModifiers
   * @param {Type[][]} parameterTypeOptionalCustomModifiers
   * @returns {PropertyBuilder}
   */
  DefineProperty(name, attributes, returnType, returnTypeRequiredCustomModifiers, returnTypeOptionalCustomModifiers, parameterTypes, parameterTypeRequiredCustomModifiers, parameterTypeOptionalCustomModifiers) {}
  /**
   * @param {string} name
   * @param {number} attributes
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} returnTypeRequiredCustomModifiers
   * @param {Type[]} returnTypeOptionalCustomModifiers
   * @param {Type[]} parameterTypes
   * @param {Type[][]} parameterTypeRequiredCustomModifiers
   * @param {Type[][]} parameterTypeOptionalCustomModifiers
   * @returns {PropertyBuilder}
   */
  DefineProperty(name, attributes, callingConvention, returnType, returnTypeRequiredCustomModifiers, returnTypeOptionalCustomModifiers, parameterTypes, parameterTypeRequiredCustomModifiers, parameterTypeOptionalCustomModifiers) {}
  /**
   * @returns {ConstructorBuilder}
   */
  DefineTypeInitializer() {}
  /**
   * @param {string} name
   * @param {number} size
   * @param {number} attributes
   * @returns {FieldBuilder}
   */
  DefineUninitializedData(name, size, attributes) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  Equals(o) {}
  /**
   * @param {Type} o
   * @returns {boolean}
   */
  Equals(o) {}
  /**
   * @param {TypeFilter} filter
   * @param {Object} filterCriteria
   * @returns {Type[]}
   */
  FindInterfaces(filter, filterCriteria) {}
  /**
   * @param {number} memberType
   * @param {number} bindingAttr
   * @param {MemberFilter} filter
   * @param {Object} filterCriteria
   * @returns {MemberInfo[]}
   */
  FindMembers(memberType, bindingAttr, filter, filterCriteria) {}
  /**
   * @param {Dictionary} token_map
   * @param {Dictionary} member_map
   * @returns {void}
   */
  FixupTokens(token_map, member_map) {}
  /**
   * @returns {string}
   */
  FormatTypeName() {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatTypeName(serialization) {}
  /**
   * @param {ISymbolWriter} symbolWriter
   * @returns {void}
   */
  GenerateDebugInfo(symbolWriter) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @returns {number}
   */
  GetArrayRank() {}
  /**
   * @returns {number}
   */
  GetAttributeFlagsImpl() {}
  /**
   * @param {Type} type
   * @param {ConstructorInfo} constructor
   * @returns {ConstructorInfo}
   */
  static GetConstructor(type, constructor) {}
  /**
   * @param {Type[]} types
   * @returns {ConstructorInfo}
   */
  GetConstructor(types) {}
  /**
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {ConstructorInfo}
   */
  GetConstructor(bindingAttr, binder, types, modifiers) {}
  /**
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {ConstructorInfo}
   */
  GetConstructor(bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {ConstructorInfo} fromNoninstanciated
   * @returns {ConstructorInfo}
   */
  GetConstructor(fromNoninstanciated) {}
  /**
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {ConstructorInfo}
   */
  GetConstructorImpl(bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {number} bindingAttr
   * @returns {ConstructorInfo[]}
   */
  GetConstructors(bindingAttr) {}
  /**
   * @returns {ConstructorInfo[]}
   */
  GetConstructors() {}
  /**
   * @param {number} bindingAttr
   * @returns {ConstructorInfo[]}
   */
  GetConstructorsInternal(bindingAttr) {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @param {string} name
   * @returns {EventInfo}
   */
  GetDeclaredEvent(name) {}
  /**
   * @param {string} name
   * @returns {FieldInfo}
   */
  GetDeclaredField(name) {}
  /**
   * @param {string} name
   * @returns {MethodInfo}
   */
  GetDeclaredMethod(name) {}
  /**
   * @param {string} name
   * @returns {IEnumerable}
   */
  GetDeclaredMethods(name) {}
  /**
   * @param {string} name
   * @returns {TypeInfo}
   */
  GetDeclaredNestedType(name) {}
  /**
   * @param {string} name
   * @returns {PropertyInfo}
   */
  GetDeclaredProperty(name) {}
  /**
   * @returns {MemberInfo[]}
   */
  GetDefaultMembers() {}
  /**
   * @returns {Type}
   */
  GetElementType() {}
  /**
   * @param {Object} value
   * @returns {string}
   */
  GetEnumName(value) {}
  /**
   * @returns {String[]}
   */
  GetEnumNames() {}
  /**
   * @returns {Type}
   */
  GetEnumUnderlyingType() {}
  /**
   * @returns {any[]}
   */
  GetEnumValues() {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {EventInfo}
   */
  GetEvent(name, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {EventInfo}
   */
  GetEvent(name) {}
  /**
   * @returns {EventInfo[]}
   */
  GetEvents() {}
  /**
   * @param {number} bindingAttr
   * @returns {EventInfo[]}
   */
  GetEvents(bindingAttr) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {FieldInfo}
   */
  GetField(name, bindingAttr) {}
  /**
   * @param {Type} type
   * @param {FieldInfo} field
   * @returns {FieldInfo}
   */
  static GetField(type, field) {}
  /**
   * @param {string} name
   * @returns {FieldInfo}
   */
  GetField(name) {}
  /**
   * @param {FieldInfo} fromNoninstanciated
   * @returns {FieldInfo}
   */
  GetField(fromNoninstanciated) {}
  /**
   * @param {number} bindingAttr
   * @returns {FieldInfo[]}
   */
  GetFields(bindingAttr) {}
  /**
   * @returns {FieldInfo[]}
   */
  GetFields() {}
  /**
   * @returns {TypeName}
   */
  GetFullName() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {Type[]}
   */
  GetGenericParameterConstraints() {}
  /**
   * @returns {Type}
   */
  GetGenericTypeDefinition() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {string} name
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  GetInterface(name, ignoreCase) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetInterface(name) {}
  /**
   * @param {Type} interfaceType
   * @returns {InterfaceMapping}
   */
  GetInterfaceMap(interfaceType) {}
  /**
   * @returns {Type[]}
   */
  GetInterfaces() {}
  /**
   * @param {string} name
   * @param {number} type
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMember(name, type, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {MemberInfo[]}
   */
  GetMember(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMember(name, bindingAttr) {}
  /**
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMembers(bindingAttr) {}
  /**
   * @returns {MemberInfo[]}
   */
  GetMembers() {}
  /**
   * @param {Type} type
   * @param {MethodInfo} method
   * @returns {MethodInfo}
   */
  static GetMethod(type, method) {}
  /**
   * @param {string} name
   * @returns {MethodInfo}
   */
  GetMethod(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {MethodInfo}
   */
  GetMethod(name, bindingAttr) {}
  /**
   * @param {string} name
   * @param {Type[]} types
   * @returns {MethodInfo}
   */
  GetMethod(name, types) {}
  /**
   * @param {string} name
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, bindingAttr, binder, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {Type[]} types
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, types) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, bindingAttr, binder, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethod(name, genericParameterCount, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {MethodInfo} fromNoninstanciated
   * @returns {MethodInfo}
   */
  GetMethod(fromNoninstanciated) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethodImpl(name, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} genericParameterCount
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {number} callConvention
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {MethodInfo}
   */
  GetMethodImpl(name, genericParameterCount, bindingAttr, binder, callConvention, types, modifiers) {}
  /**
   * @param {number} bindingAttr
   * @returns {MethodInfo[]}
   */
  GetMethods(bindingAttr) {}
  /**
   * @returns {MethodInfo[]}
   */
  GetMethods() {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {boolean} ignoreCase
   * @param {Type} reflected_type
   * @returns {MethodInfo[]}
   */
  GetMethodsByName(name, bindingAttr, ignoreCase, reflected_type) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {Type}
   */
  GetNestedType(name, bindingAttr) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetNestedType(name) {}
  /**
   * @param {number} bindingAttr
   * @returns {Type[]}
   */
  GetNestedTypes(bindingAttr) {}
  /**
   * @returns {Type[]}
   */
  GetNestedTypes() {}
  /**
   * @param {number} bindingAttr
   * @returns {PropertyInfo[]}
   */
  GetProperties(bindingAttr) {}
  /**
   * @returns {PropertyInfo[]}
   */
  GetProperties() {}
  /**
   * @param {string} name
   * @returns {PropertyInfo}
   */
  GetProperty(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {PropertyInfo}
   */
  GetProperty(name, bindingAttr) {}
  /**
   * @param {string} name
   * @param {Type} returnType
   * @returns {PropertyInfo}
   */
  GetProperty(name, returnType) {}
  /**
   * @param {string} name
   * @param {Type[]} types
   * @returns {PropertyInfo}
   */
  GetProperty(name, types) {}
  /**
   * @param {string} name
   * @param {Type} returnType
   * @param {Type[]} types
   * @returns {PropertyInfo}
   */
  GetProperty(name, returnType, types) {}
  /**
   * @param {string} name
   * @param {Type} returnType
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {PropertyInfo}
   */
  GetProperty(name, returnType, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type} returnType
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {PropertyInfo}
   */
  GetProperty(name, bindingAttr, binder, returnType, types, modifiers) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @param {Binder} binder
   * @param {Type} returnType
   * @param {Type[]} types
   * @param {ParameterModifier[]} modifiers
   * @returns {PropertyInfo}
   */
  GetPropertyImpl(name, bindingAttr, binder, returnType, types, modifiers) {}
  /**
   * @returns {Type}
   */
  GetRootElementType() {}
  /**
   * @returns {Type}
   */
  GetType() {}
  /**
   * @returns {number}
   */
  GetTypeCodeImpl() {}
  /**
   * @returns {RuntimeTypeHandle}
   */
  GetTypeHandleInternal() {}
  /**
   * @returns {boolean}
   */
  has_ctor_method() {}
  /**
   * @returns {boolean}
   */
  HasElementTypeImpl() {}
  /**
   * @returns {boolean}
   */
  HasProxyAttributeImpl() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Type} ifaceType
   * @returns {boolean}
   */
  ImplementInterface(ifaceType) {}
  /**
   * @returns {Type}
   */
  InternalResolve() {}
  /**
   * @param {string} name
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object} target
   * @param {Object[]} args
   * @param {ParameterModifier[]} modifiers
   * @param {CultureInfo} culture
   * @param {String[]} namedParameters
   * @returns {Object}
   */
  InvokeMember(name, invokeAttr, binder, target, args, modifiers, culture, namedParameters) {}
  /**
   * @param {string} name
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object} target
   * @param {Object[]} args
   * @returns {Object}
   */
  InvokeMember(name, invokeAttr, binder, target, args) {}
  /**
   * @param {string} name
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object} target
   * @param {Object[]} args
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  InvokeMember(name, invokeAttr, binder, target, args, culture) {}
  /**
   * @param {Type} t
   * @returns {boolean}
   */
  is_nested_in(t) {}
  /**
   * @returns {boolean}
   */
  IsArrayImpl() {}
  /**
   * @param {Type} c
   * @returns {boolean}
   */
  IsAssignableFrom(c) {}
  /**
   * @param {TypeInfo} typeInfo
   * @returns {boolean}
   */
  IsAssignableFrom(typeInfo) {}
  /**
   * @param {Type} c
   * @returns {boolean}
   */
  IsAssignableTo(c) {}
  /**
   * @returns {boolean}
   */
  IsByRefImpl() {}
  /**
   * @returns {boolean}
   */
  IsCOMObjectImpl() {}
  /**
   * @returns {boolean}
   */
  IsContextfulImpl() {}
  /**
   * @returns {boolean}
   */
  IsCreated() {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Object} value
   * @returns {boolean}
   */
  IsEnumDefined(value) {}
  /**
   * @param {Type} other
   * @returns {boolean}
   */
  IsEquivalentTo(other) {}
  /**
   * @returns {boolean}
   */
  IsExportedToWindowsRuntimeImpl() {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  IsInstanceOfType(o) {}
  /**
   * @returns {boolean}
   */
  IsMarshalByRefImpl() {}
  /**
   * @returns {boolean}
   */
  IsPointerImpl() {}
  /**
   * @returns {boolean}
   */
  IsPrimitiveImpl() {}
  /**
   * @returns {boolean}
   */
  IsRuntimeImplemented() {}
  /**
   * @param {Type} c
   * @returns {boolean}
   */
  IsSubclassOf(c) {}
  /**
   * @param {Type} type
   * @returns {boolean}
   */
  static IsValidGetMethodType(type) {}
  /**
   * @returns {boolean}
   */
  IsValueTypeImpl() {}
  /**
   * @returns {boolean}
   */
  IsWindowsRuntimeObjectImpl() {}
  /**
   * @returns {Type}
   */
  MakeArrayType() {}
  /**
   * @param {number} rank
   * @returns {Type}
   */
  MakeArrayType(rank) {}
  /**
   * @returns {Type}
   */
  MakeByRefType() {}
  /**
   * @param {Type[]} typeArguments
   * @returns {Type}
   */
  MakeGenericType(typeArguments) {}
  /**
   * @returns {Type}
   */
  MakePointerType() {}
  /**
   * @returns {Exception}
   */
  not_supported() {}
  /**
   * @param {Type} t
   * @returns {Type}
   */
  static ResolveUserType(t) {}
  /**
   * @returns {void}
   */
  ResolveUserTypes() {}
  /**
   * @param {Type[]} types
   * @returns {void}
   */
  static ResolveUserTypes(types) {}
  /**
   * @returns {Type}
   */
  RuntimeResolve() {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {Type} parent
   * @returns {void}
   */
  SetParent(parent) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @returns {void}
   */
  static throw_argument_ConstantDoesntMatch() {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {Assembly}*/
  get Assembly() {}
  /**@type {string}*/
  get AssemblyQualifiedName() {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {Type}*/
  get BaseType() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {IEnumerable}*/
  get DeclaredConstructors() {}
  /**@type {IEnumerable}*/
  get DeclaredEvents() {}
  /**@type {IEnumerable}*/
  get DeclaredFields() {}
  /**@type {IEnumerable}*/
  get DeclaredMembers() {}
  /**@type {IEnumerable}*/
  get DeclaredMethods() {}
  /**@type {IEnumerable}*/
  get DeclaredNestedTypes() {}
  /**@type {IEnumerable}*/
  get DeclaredProperties() {}
  /**@type {MethodBase}*/
  get DeclaringMethod() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {string}*/
  get FullName() {}
  /**@type {string}*/
  get FullNameOrDefault() {}
  /**@type {number}*/
  get GenericParameterAttributes() {}
  /**@type {number}*/
  get GenericParameterPosition() {}
  /**@type {Type[]}*/
  get GenericTypeArguments() {}
  /**@type {Type[]}*/
  get GenericTypeParameters() {}
  /**@type {Guid}*/
  get GUID() {}
  /**@type {boolean}*/
  get HasElementType() {}
  /**@type {IEnumerable}*/
  get ImplementedInterfaces() {}
  /**@type {string}*/
  get InternalNameIfAvailable() {}
  /**@type {boolean}*/
  get is_created() {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAnsiClass() {}
  /**@type {boolean}*/
  get IsArray() {}
  /**@type {boolean}*/
  get IsAutoClass() {}
  /**@type {boolean}*/
  get IsAutoLayout() {}
  /**@type {boolean}*/
  get IsByRef() {}
  /**@type {boolean}*/
  get IsByRefLike() {}
  /**@type {boolean}*/
  get IsClass() {}
  /**@type {boolean}*/
  get IsCollectible() {}
  /**@type {boolean}*/
  get IsCOMObject() {}
  /**@type {boolean}*/
  get IsConstructedGenericType() {}
  /**@type {boolean}*/
  get IsContextful() {}
  /**@type {boolean}*/
  get IsEnum() {}
  /**@type {boolean}*/
  get IsExplicitLayout() {}
  /**@type {boolean}*/
  get IsExportedToWindowsRuntime() {}
  /**@type {boolean}*/
  get IsGenericMethodParameter() {}
  /**@type {boolean}*/
  get IsGenericParameter() {}
  /**@type {boolean}*/
  get IsGenericType() {}
  /**@type {boolean}*/
  get IsGenericTypeDefinition() {}
  /**@type {boolean}*/
  get IsGenericTypeParameter() {}
  /**@type {boolean}*/
  get IsImport() {}
  /**@type {boolean}*/
  get IsInterface() {}
  /**@type {boolean}*/
  get IsLayoutSequential() {}
  /**@type {boolean}*/
  get IsMarshalByRef() {}
  /**@type {boolean}*/
  get IsNested() {}
  /**@type {boolean}*/
  get IsNestedAssembly() {}
  /**@type {boolean}*/
  get IsNestedFamANDAssem() {}
  /**@type {boolean}*/
  get IsNestedFamily() {}
  /**@type {boolean}*/
  get IsNestedFamORAssem() {}
  /**@type {boolean}*/
  get IsNestedPrivate() {}
  /**@type {boolean}*/
  get IsNestedPublic() {}
  /**@type {boolean}*/
  get IsNotPublic() {}
  /**@type {boolean}*/
  get IsPointer() {}
  /**@type {boolean}*/
  get IsPrimitive() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSealed() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSerializable() {}
  /**@type {boolean}*/
  get IsSignatureType() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsSzArray() {}
  /**@type {boolean}*/
  get IsSZArray() {}
  /**@type {boolean}*/
  get IsTypeDefinition() {}
  /**@type {boolean}*/
  get IsUnicodeClass() {}
  /**@type {boolean}*/
  get IsUserType() {}
  /**@type {boolean}*/
  get IsValueType() {}
  /**@type {boolean}*/
  get IsVariableBoundArray() {}
  /**@type {boolean}*/
  get IsVisible() {}
  /**@type {boolean}*/
  get IsWindowsRuntimeObject() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {string}*/
  get NameOrDefault() {}
  /**@type {string}*/
  get Namespace() {}
  /**@type {number}*/
  get PackingSize() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {number}*/
  get Size() {}
  /**@type {StructLayoutAttribute}*/
  get StructLayoutAttribute() {}
  /**@type {RuntimeTypeHandle}*/
  get TypeHandle() {}
  /**@type {ConstructorInfo}*/
  get TypeInitializer() {}
  /**@type {TypeToken}*/
  get TypeToken() {}
  /**@type {Type}*/
  get UnderlyingSystemType() {}
}
class MethodBuilder {
  constructor() {
    /**@type {RuntimeMethodHandle}*/
    this.mhandle = null;
    /**@type {Type}*/
    this.rtype = null;
    /**@type {Type[]}*/
    this.parameters = null;
    /**@type {number}*/
    this.attrs = null;
    /**@type {number}*/
    this.iattrs = null;
    /**@type {string}*/
    this.name = null;
    /**@type {number}*/
    this.table_idx = null;
    /**@type {Byte[]}*/
    this.code = null;
    /**@type {ILGenerator}*/
    this.ilgen = null;
    /**@type {TypeBuilder}*/
    this.type = null;
    /**@type {ParameterBuilder[]}*/
    this.pinfo = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {MethodInfo[]}*/
    this.override_methods = null;
    /**@type {string}*/
    this.pi_dll = null;
    /**@type {string}*/
    this.pi_entry = null;
    /**@type {number}*/
    this.charset = null;
    /**@type {number}*/
    this.extra_flags = null;
    /**@type {number}*/
    this.native_cc = null;
    /**@type {number}*/
    this.call_conv = null;
    /**@type {boolean}*/
    this.init_locals = null;
    /**@type {IntPtr}*/
    this.generic_container = null;
    /**@type {GenericTypeParameterBuilder[]}*/
    this.generic_params = null;
    /**@type {Type[]}*/
    this.returnModReq = null;
    /**@type {Type[]}*/
    this.returnModOpt = null;
    /**@type {Type[][]}*/
    this.paramModReq = null;
    /**@type {Type[][]}*/
    this.paramModOpt = null;
    /**@type {RefEmitPermissionSet[]}*/
    this.permissions = null;
  }
  /**
   * @param {number} action
   * @param {PermissionSet} pset
   * @returns {void}
   */
  AddDeclarativeSecurity(action, pset) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @returns {void}
   */
  check_override() {}
  /**
   * @param {Type} delegateType
   * @returns {Delegate}
   */
  CreateDelegate(delegateType) {}
  /**
   * @param {Type} delegateType
   * @param {Object} target
   * @returns {Delegate}
   */
  CreateDelegate(delegateType, target) {}
  /**
   * @param {Byte[]} il
   * @param {number} count
   * @returns {void}
   */
  CreateMethodBody(il, count) {}
  /**
   * @param {String[]} names
   * @returns {GenericTypeParameterBuilder[]}
   */
  DefineGenericParameters(names) {}
  /**
   * @param {number} position
   * @param {number} attributes
   * @param {string} strParamName
   * @returns {ParameterBuilder}
   */
  DefineParameter(position, attributes, strParamName) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @returns {void}
   */
  fixup() {}
  /**
   * @param {Dictionary} token_map
   * @param {Dictionary} member_map
   * @returns {void}
   */
  FixupTokens(token_map, member_map) {}
  /**
   * @param {boolean} serialization
   * @returns {string}
   */
  FormatNameAndSig(serialization) {}
  /**
   * @param {ISymbolWriter} symbolWriter
   * @returns {void}
   */
  GenerateDebugInfo(symbolWriter) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @returns {MethodInfo}
   */
  GetBaseDefinition() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {Type[]}
   */
  GetGenericArguments() {}
  /**
   * @returns {MethodInfo}
   */
  GetGenericMethodDefinition() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {ILGenerator}
   */
  GetILGenerator() {}
  /**
   * @param {number} size
   * @returns {ILGenerator}
   */
  GetILGenerator(size) {}
  /**
   * @returns {MethodBody}
   */
  GetMethodBody() {}
  /**
   * @returns {number}
   */
  GetMethodImplementationFlags() {}
  /**
   * @returns {Module}
   */
  GetModule() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParameters() {}
  /**
   * @returns {number}
   */
  GetParametersCount() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersInternal() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetParametersNoCopy() {}
  /**
   * @param {number} pos
   * @returns {Type}
   */
  GetParameterType(pos) {}
  /**
   * @returns {Type[]}
   */
  GetParameterTypes() {}
  /**
   * @returns {MethodToken}
   */
  GetToken() {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} parameters
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  Invoke(obj, invokeAttr, binder, parameters, culture) {}
  /**
   * @param {Object} obj
   * @param {Object[]} parameters
   * @returns {Object}
   */
  Invoke(obj, parameters) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @param {Type[]} typeArguments
   * @returns {MethodInfo}
   */
  MakeGenericMethod(typeArguments) {}
  /**
   * @returns {Exception}
   */
  NotSupported() {}
  /**
   * @returns {void}
   */
  RejectIfCreated() {}
  /**
   * @returns {void}
   */
  ResolveUserTypes() {}
  /**
   * @returns {MethodBase}
   */
  RuntimeResolve() {}
  /**
   * @param {MethodInfo} mdecl
   * @returns {void}
   */
  set_override(mdecl) {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {number} attributes
   * @returns {void}
   */
  SetImplementationFlags(attributes) {}
  /**
   * @param {UnmanagedMarshal} unmanagedMarshal
   * @returns {void}
   */
  SetMarshal(unmanagedMarshal) {}
  /**
   * @param {Byte[]} il
   * @param {number} maxStack
   * @param {Byte[]} localSignature
   * @param {IEnumerable} exceptionHandlers
   * @param {IEnumerable} tokenFixups
   * @returns {void}
   */
  SetMethodBody(il, maxStack, localSignature, exceptionHandlers, tokenFixups) {}
  /**
   * @param {Type[]} parameterTypes
   * @returns {void}
   */
  SetParameters(parameterTypes) {}
  /**
   * @param {Type} returnType
   * @returns {void}
   */
  SetReturnType(returnType) {}
  /**
   * @param {Type} returnType
   * @param {Type[]} returnTypeRequiredCustomModifiers
   * @param {Type[]} returnTypeOptionalCustomModifiers
   * @param {Type[]} parameterTypes
   * @param {Type[][]} parameterTypeRequiredCustomModifiers
   * @param {Type[][]} parameterTypeOptionalCustomModifiers
   * @returns {void}
   */
  SetSignature(returnType, returnTypeRequiredCustomModifiers, returnTypeOptionalCustomModifiers, parameterTypes, parameterTypeRequiredCustomModifiers, parameterTypeOptionalCustomModifiers) {}
  /**
   * @param {string} name
   * @param {Byte[]} data
   * @returns {void}
   */
  SetSymCustomAttribute(name, data) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get Attributes() {}
  /**
 * @param {boolean} value
 */
  set BestFitMapping(value) {}
  /**@type {number}*/
  get CallingConvention() {}
  /**@type {boolean}*/
  get ContainsGenericParameters() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**
 * @param {boolean} value
 */
  set ExactSpelling(value) {}
  /**@type {number}*/
  get GenericParameterCount() {}
  /**@type {boolean}*/
  get InitLocals() {}
  /**
 * @param {boolean} value
 */
  set InitLocals(value) {}
  /**@type {boolean}*/
  get IsAbstract() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsConstructedGenericMethod() {}
  /**@type {boolean}*/
  get IsConstructor() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsFinal() {}
  /**@type {boolean}*/
  get IsGenericMethod() {}
  /**@type {boolean}*/
  get IsGenericMethodDefinition() {}
  /**@type {boolean}*/
  get IsHideBySig() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {boolean}*/
  get IsVirtual() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {RuntimeMethodHandle}*/
  get MethodHandle() {}
  /**@type {RuntimeMethodHandle}*/
  get MethodHandleInternal() {}
  /**@type {number}*/
  get MethodImplementationFlags() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {ParameterInfo}*/
  get ReturnParameter() {}
  /**@type {Type}*/
  get ReturnType() {}
  /**@type {ICustomAttributeProvider}*/
  get ReturnTypeCustomAttributes() {}
  /**
 * @param {boolean} value
 */
  set SetLastError(value) {}
  /**@type {string}*/
  get Signature() {}
  /**
 * @param {boolean} value
 */
  set ThrowOnUnmappableChar(value) {}
  /**@type {TypeBuilder}*/
  get TypeBuilder() {}
}
class PropertyBuilder {
  constructor() {
    /**@type {number}*/
    this.attrs = null;
    /**@type {string}*/
    this.name = null;
    /**@type {Type}*/
    this.type = null;
    /**@type {Type[]}*/
    this.parameters = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {Object}*/
    this.def_value = null;
    /**@type {MethodBuilder}*/
    this.set_method = null;
    /**@type {MethodBuilder}*/
    this.get_method = null;
    /**@type {number}*/
    this.table_idx = null;
    /**@type {TypeBuilder}*/
    this.typeb = null;
    /**@type {Type[]}*/
    this.returnModReq = null;
    /**@type {Type[]}*/
    this.returnModOpt = null;
    /**@type {Type[][]}*/
    this.paramModReq = null;
    /**@type {Type[][]}*/
    this.paramModOpt = null;
    /**@type {number}*/
    this.callingConvention = null;
  }
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  AddOtherMethod(mdBuilder) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo[]}
   */
  GetAccessors(nonPublic) {}
  /**
   * @returns {MethodInfo[]}
   */
  GetAccessors() {}
  /**
   * @returns {Object}
   */
  GetConstantValue() {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetGetMethod(nonPublic) {}
  /**
   * @returns {MethodInfo}
   */
  GetGetMethod() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {ParameterInfo[]}
   */
  GetIndexParameters() {}
  /**
   * @returns {Type[]}
   */
  GetOptionalCustomModifiers() {}
  /**
   * @returns {Object}
   */
  GetRawConstantValue() {}
  /**
   * @returns {Type[]}
   */
  GetRequiredCustomModifiers() {}
  /**
   * @param {boolean} nonPublic
   * @returns {MethodInfo}
   */
  GetSetMethod(nonPublic) {}
  /**
   * @returns {MethodInfo}
   */
  GetSetMethod() {}
  /**
   * @param {Object} obj
   * @param {Object[]} index
   * @returns {Object}
   */
  GetValue(obj, index) {}
  /**
   * @param {Object} obj
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} index
   * @param {CultureInfo} culture
   * @returns {Object}
   */
  GetValue(obj, invokeAttr, binder, index, culture) {}
  /**
   * @param {Object} obj
   * @returns {Object}
   */
  GetValue(obj) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @returns {Exception}
   */
  not_supported() {}
  /**
   * @param {Object} defaultValue
   * @returns {void}
   */
  SetConstant(defaultValue) {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  SetGetMethod(mdBuilder) {}
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  SetSetMethod(mdBuilder) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @param {Object[]} index
   * @returns {void}
   */
  SetValue(obj, value, index) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {Object[]} index
   * @param {CultureInfo} culture
   * @returns {void}
   */
  SetValue(obj, value, invokeAttr, binder, index, culture) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @returns {void}
   */
  SetValue(obj, value) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {boolean}*/
  get CanRead() {}
  /**@type {boolean}*/
  get CanWrite() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {MethodInfo}*/
  get GetMethod() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {PropertyToken}*/
  get PropertyToken() {}
  /**@type {Type}*/
  get PropertyType() {}
  /**@type {Type}*/
  get ReflectedType() {}
  /**@type {MethodInfo}*/
  get SetMethod() {}
}
class FieldBuilder {
  constructor() {
    /**@type {number}*/
    this.attrs = null;
    /**@type {Type}*/
    this.type = null;
    /**@type {string}*/
    this.name = null;
    /**@type {Object}*/
    this.def_value = null;
    /**@type {number}*/
    this.offset = null;
    /**@type {TypeBuilder}*/
    this.typeb = null;
    /**@type {Byte[]}*/
    this.rva_data = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {UnmanagedMarshal}*/
    this.marshal_info = null;
    /**@type {RuntimeFieldHandle}*/
    this.handle = null;
    /**@type {Type[]}*/
    this.modReq = null;
    /**@type {Type[]}*/
    this.modOpt = null;
  }
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
  /**
   * @returns {Exception}
   */
  CreateNotSupportedException() {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(inherit) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {Object[]}
   */
  GetCustomAttributes(attributeType, inherit) {}
  /**
   * @returns {IList}
   */
  GetCustomAttributesData() {}
  /**
   * @returns {number}
   */
  GetFieldOffset() {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {Type[]}
   */
  GetOptionalCustomModifiers() {}
  /**
   * @returns {Object[]}
   */
  GetPseudoCustomAttributes() {}
  /**
   * @returns {CustomAttributeData[]}
   */
  GetPseudoCustomAttributesData() {}
  /**
   * @returns {Object}
   */
  GetRawConstantValue() {}
  /**
   * @returns {Type[]}
   */
  GetRequiredCustomModifiers() {}
  /**
   * @returns {FieldToken}
   */
  GetToken() {}
  /**
   * @param {Object} obj
   * @returns {Object}
   */
  GetValue(obj) {}
  /**
   * @param {TypedReference} obj
   * @returns {Object}
   */
  GetValueDirect(obj) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAs(other) {}
  /**
   * @param {MemberInfo} other
   * @returns {boolean}
   */
  HasSameMetadataDefinitionAsCore(other) {}
  /**
   * @param {Type} attributeType
   * @param {boolean} inherit
   * @returns {boolean}
   */
  IsDefined(attributeType, inherit) {}
  /**
   * @returns {void}
   */
  RejectIfCreated() {}
  /**
   * @returns {void}
   */
  ResolveUserTypes() {}
  /**
   * @returns {FieldInfo}
   */
  RuntimeResolve() {}
  /**
   * @param {Object} defaultValue
   * @returns {void}
   */
  SetConstant(defaultValue) {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {UnmanagedMarshal} unmanagedMarshal
   * @returns {void}
   */
  SetMarshal(unmanagedMarshal) {}
  /**
   * @param {number} iOffset
   * @returns {void}
   */
  SetOffset(iOffset) {}
  /**
   * @param {Byte[]} data
   * @returns {void}
   */
  SetRVAData(data) {}
  /**
   * @param {Object} obj
   * @param {Object} val
   * @param {number} invokeAttr
   * @param {Binder} binder
   * @param {CultureInfo} culture
   * @returns {void}
   */
  SetValue(obj, val, invokeAttr, binder, culture) {}
  /**
   * @param {Object} obj
   * @param {Object} value
   * @returns {void}
   */
  SetValue(obj, value) {}
  /**
   * @param {TypedReference} obj
   * @param {Object} value
   * @returns {void}
   */
  SetValueDirect(obj, value) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {IEnumerable}*/
  get CustomAttributes() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {RuntimeFieldHandle}*/
  get FieldHandle() {}
  /**@type {Type}*/
  get FieldType() {}
  /**@type {boolean}*/
  get IsAssembly() {}
  /**@type {boolean}*/
  get IsFamily() {}
  /**@type {boolean}*/
  get IsFamilyAndAssembly() {}
  /**@type {boolean}*/
  get IsFamilyOrAssembly() {}
  /**@type {boolean}*/
  get IsInitOnly() {}
  /**@type {boolean}*/
  get IsLiteral() {}
  /**@type {boolean}*/
  get IsNotSerialized() {}
  /**@type {boolean}*/
  get IsPinvokeImpl() {}
  /**@type {boolean}*/
  get IsPrivate() {}
  /**@type {boolean}*/
  get IsPublic() {}
  /**@type {boolean}*/
  get IsSecurityCritical() {}
  /**@type {boolean}*/
  get IsSecuritySafeCritical() {}
  /**@type {boolean}*/
  get IsSecurityTransparent() {}
  /**@type {boolean}*/
  get IsSpecialName() {}
  /**@type {boolean}*/
  get IsStatic() {}
  /**@type {number}*/
  get MemberType() {}
  /**@type {number}*/
  get MetadataToken() {}
  /**@type {Module}*/
  get Module() {}
  /**@type {string}*/
  get Name() {}
  /**@type {Type}*/
  get ReflectedType() {}
}
class EventBuilder {
  constructor() {
    /**@type {string}*/
    this.name = null;
    /**@type {Type}*/
    this.type = null;
    /**@type {TypeBuilder}*/
    this.typeb = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {MethodBuilder}*/
    this.add_method = null;
    /**@type {MethodBuilder}*/
    this.remove_method = null;
    /**@type {MethodBuilder}*/
    this.raise_method = null;
    /**@type {MethodBuilder[]}*/
    this.other_methods = null;
    /**@type {number}*/
    this.attrs = null;
    /**@type {number}*/
    this.table_idx = null;
  }
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  AddOtherMethod(mdBuilder) {}
  /**
   * @param {Object} obj
   * @param {number} table
   * @param {number} count
   * @returns {number}
   */
  get_next_table_index(obj, table, count) {}
  /**
   * @returns {EventToken}
   */
  GetEventToken() {}
  /**
   * @returns {void}
   */
  RejectIfCreated() {}
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  SetAddOnMethod(mdBuilder) {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  SetRaiseMethod(mdBuilder) {}
  /**
   * @param {MethodBuilder} mdBuilder
   * @returns {void}
   */
  SetRemoveOnMethod(mdBuilder) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
}
class ParameterBuilder {
  constructor() {
    /**@type {MethodBase}*/
    this.methodb = null;
    /**@type {string}*/
    this.name = null;
    /**@type {CustomAttributeBuilder[]}*/
    this.cattrs = null;
    /**@type {UnmanagedMarshal}*/
    this.marshal_info = null;
    /**@type {number}*/
    this.attrs = null;
    /**@type {number}*/
    this.position = null;
    /**@type {number}*/
    this.table_idx = null;
    /**@type {Object}*/
    this.def_value = null;
  }
  /**
   * @returns {ParameterToken}
   */
  GetToken() {}
  /**
   * @param {Object} defaultValue
   * @returns {void}
   */
  SetConstant(defaultValue) {}
  /**
   * @param {CustomAttributeBuilder} customBuilder
   * @returns {void}
   */
  SetCustomAttribute(customBuilder) {}
  /**
   * @param {ConstructorInfo} con
   * @param {Byte[]} binaryAttribute
   * @returns {void}
   */
  SetCustomAttribute(con, binaryAttribute) {}
  /**
   * @param {UnmanagedMarshal} unmanagedMarshal
   * @returns {void}
   */
  SetMarshal(unmanagedMarshal) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**@type {number}*/
  get Attributes() {}
  /**@type {boolean}*/
  get IsIn() {}
  /**@type {boolean}*/
  get IsOptional() {}
  /**@type {boolean}*/
  get IsOut() {}
  /**@type {string}*/
  get Name() {}
  /**@type {number}*/
  get Position() {}
}
class ParameterAttributes {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {ParameterAttributes}*/
  static None;
  /**@type {ParameterAttributes}*/
  static In;
  /**@type {ParameterAttributes}*/
  static Out;
  /**@type {ParameterAttributes}*/
  static Lcid;
  /**@type {ParameterAttributes}*/
  static Retval;
  /**@type {ParameterAttributes}*/
  static Optional;
  /**@type {ParameterAttributes}*/
  static HasDefault;
  /**@type {ParameterAttributes}*/
  static HasFieldMarshal;
  /**@type {ParameterAttributes}*/
  static Reserved3;
  /**@type {ParameterAttributes}*/
  static Reserved4;
  /**@type {ParameterAttributes}*/
  static ReservedMask;
}
class MethodAttributes {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {MethodAttributes}*/
  static MemberAccessMask;
  /**@type {MethodAttributes}*/
  static PrivateScope;
  /**@type {MethodAttributes}*/
  static Private;
  /**@type {MethodAttributes}*/
  static FamANDAssem;
  /**@type {MethodAttributes}*/
  static Assembly;
  /**@type {MethodAttributes}*/
  static Family;
  /**@type {MethodAttributes}*/
  static FamORAssem;
  /**@type {MethodAttributes}*/
  static Public;
  /**@type {MethodAttributes}*/
  static Static;
  /**@type {MethodAttributes}*/
  static Final;
  /**@type {MethodAttributes}*/
  static Virtual;
  /**@type {MethodAttributes}*/
  static HideBySig;
  /**@type {MethodAttributes}*/
  static CheckAccessOnOverride;
  /**@type {MethodAttributes}*/
  static VtableLayoutMask;
  /**@type {MethodAttributes}*/
  static ReuseSlot;
  /**@type {MethodAttributes}*/
  static NewSlot;
  /**@type {MethodAttributes}*/
  static Abstract;
  /**@type {MethodAttributes}*/
  static SpecialName;
  /**@type {MethodAttributes}*/
  static PinvokeImpl;
  /**@type {MethodAttributes}*/
  static UnmanagedExport;
  /**@type {MethodAttributes}*/
  static RTSpecialName;
  /**@type {MethodAttributes}*/
  static HasSecurity;
  /**@type {MethodAttributes}*/
  static RequireSecObject;
  /**@type {MethodAttributes}*/
  static ReservedMask;
}
class FieldAttributes {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {FieldAttributes}*/
  static FieldAccessMask;
  /**@type {FieldAttributes}*/
  static PrivateScope;
  /**@type {FieldAttributes}*/
  static Private;
  /**@type {FieldAttributes}*/
  static FamANDAssem;
  /**@type {FieldAttributes}*/
  static Assembly;
  /**@type {FieldAttributes}*/
  static Family;
  /**@type {FieldAttributes}*/
  static FamORAssem;
  /**@type {FieldAttributes}*/
  static Public;
  /**@type {FieldAttributes}*/
  static Static;
  /**@type {FieldAttributes}*/
  static InitOnly;
  /**@type {FieldAttributes}*/
  static Literal;
  /**@type {FieldAttributes}*/
  static NotSerialized;
  /**@type {FieldAttributes}*/
  static SpecialName;
  /**@type {FieldAttributes}*/
  static PinvokeImpl;
  /**@type {FieldAttributes}*/
  static RTSpecialName;
  /**@type {FieldAttributes}*/
  static HasFieldMarshal;
  /**@type {FieldAttributes}*/
  static HasDefault;
  /**@type {FieldAttributes}*/
  static HasFieldRVA;
  /**@type {FieldAttributes}*/
  static ReservedMask;
}
class TypeAttributes {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {TypeAttributes}*/
  static VisibilityMask;
  /**@type {TypeAttributes}*/
  static NotPublic;
  /**@type {TypeAttributes}*/
  static Public;
  /**@type {TypeAttributes}*/
  static NestedPublic;
  /**@type {TypeAttributes}*/
  static NestedPrivate;
  /**@type {TypeAttributes}*/
  static NestedFamily;
  /**@type {TypeAttributes}*/
  static NestedAssembly;
  /**@type {TypeAttributes}*/
  static NestedFamANDAssem;
  /**@type {TypeAttributes}*/
  static NestedFamORAssem;
  /**@type {TypeAttributes}*/
  static LayoutMask;
  /**@type {TypeAttributes}*/
  static AutoLayout;
  /**@type {TypeAttributes}*/
  static SequentialLayout;
  /**@type {TypeAttributes}*/
  static ExplicitLayout;
  /**@type {TypeAttributes}*/
  static ClassSemanticsMask;
  /**@type {TypeAttributes}*/
  static Class;
  /**@type {TypeAttributes}*/
  static Interface;
  /**@type {TypeAttributes}*/
  static Abstract;
  /**@type {TypeAttributes}*/
  static Sealed;
  /**@type {TypeAttributes}*/
  static SpecialName;
  /**@type {TypeAttributes}*/
  static Import;
  /**@type {TypeAttributes}*/
  static Serializable;
  /**@type {TypeAttributes}*/
  static WindowsRuntime;
  /**@type {TypeAttributes}*/
  static StringFormatMask;
  /**@type {TypeAttributes}*/
  static AnsiClass;
  /**@type {TypeAttributes}*/
  static UnicodeClass;
  /**@type {TypeAttributes}*/
  static AutoClass;
  /**@type {TypeAttributes}*/
  static CustomFormatClass;
  /**@type {TypeAttributes}*/
  static CustomFormatMask;
  /**@type {TypeAttributes}*/
  static BeforeFieldInit;
  /**@type {TypeAttributes}*/
  static RTSpecialName;
  /**@type {TypeAttributes}*/
  static HasSecurity;
  /**@type {TypeAttributes}*/
  static ReservedMask;
}
class PropertyAttributes {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {PropertyAttributes}*/
  static None;
  /**@type {PropertyAttributes}*/
  static SpecialName;
  /**@type {PropertyAttributes}*/
  static RTSpecialName;
  /**@type {PropertyAttributes}*/
  static HasDefault;
  /**@type {PropertyAttributes}*/
  static Reserved2;
  /**@type {PropertyAttributes}*/
  static Reserved3;
  /**@type {PropertyAttributes}*/
  static Reserved4;
  /**@type {PropertyAttributes}*/
  static ReservedMask;
}
class EventAttributes {
  constructor() {
    /**@type {number}*/
    this.value__ = null;
  }
  /**@type {EventAttributes}*/
  static None;
  /**@type {EventAttributes}*/
  static SpecialName;
  /**@type {EventAttributes}*/
  static RTSpecialName;
  /**@type {EventAttributes}*/
  static ReservedMask;
}
class ILGenerator {
  constructor() {
    /**@type {Byte[]}*/
    this.code = null;
    /**@type {number}*/
    this.code_len = null;
    /**@type {number}*/
    this.max_stack = null;
    /**@type {number}*/
    this.cur_stack = null;
    /**@type {LocalBuilder[]}*/
    this.locals = null;
    /**@type {ILExceptionInfo[]}*/
    this.ex_handlers = null;
    /**@type {number}*/
    this.num_token_fixups = null;
    /**@type {ILTokenInfo[]}*/
    this.token_fixups = null;
    /**@type {LabelData[]}*/
    this.labels = null;
    /**@type {number}*/
    this.num_labels = null;
    /**@type {LabelFixup[]}*/
    this.fixups = null;
    /**@type {number}*/
    this.num_fixups = null;
    /**@type {Module}*/
    this.module = null;
    /**@type {number}*/
    this.cur_block = null;
    /**@type {Stack}*/
    this.open_blocks = null;
    /**@type {TokenGenerator}*/
    this.token_gen = null;
    /**@type {ArrayList}*/
    this.sequencePointLists = null;
    /**@type {SequencePointList}*/
    this.currentSequence = null;
  }
  /**@type {number}*/
  static defaultFixupSize;
  /**@type {number}*/
  static defaultLabelsSize;
  /**@type {number}*/
  static defaultExceptionStackSize;
  /**
   * @param {MemberInfo} mi
   * @returns {void}
   */
  add_token_fixup(mi) {}
  /**
   * @param {Type} exceptionType
   * @returns {void}
   */
  BeginCatchBlock(exceptionType) {}
  /**
   * @returns {void}
   */
  BeginExceptFilterBlock() {}
  /**
   * @returns {Label}
   */
  BeginExceptionBlock() {}
  /**
   * @returns {void}
   */
  BeginFaultBlock() {}
  /**
   * @returns {void}
   */
  BeginFinallyBlock() {}
  /**
   * @returns {void}
   */
  BeginScope() {}
  /**
   * @param {Type} localType
   * @returns {LocalBuilder}
   */
  DeclareLocal(localType) {}
  /**
   * @param {Type} localType
   * @param {boolean} pinned
   * @returns {LocalBuilder}
   */
  DeclareLocal(localType, pinned) {}
  /**
   * @returns {Label}
   */
  DefineLabel() {}
  /**
   * @param {OpCode} opcode
   * @returns {void}
   */
  Emit(opcode) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {ConstructorInfo} con
   * @returns {void}
   */
  Emit(opcode, con) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {FieldInfo} field
   * @returns {void}
   */
  Emit(opcode, field) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {Label} label
   * @returns {void}
   */
  Emit(opcode, label) {}
  /**
   * @param {OpCode} opcode
   * @param {Label[]} labels
   * @returns {void}
   */
  Emit(opcode, labels) {}
  /**
   * @param {OpCode} opcode
   * @param {LocalBuilder} local
   * @returns {void}
   */
  Emit(opcode, local) {}
  /**
   * @param {OpCode} opcode
   * @param {MethodInfo} meth
   * @returns {void}
   */
  Emit(opcode, meth) {}
  /**
   * @param {OpCode} opcode
   * @param {MethodInfo} method
   * @param {number} token
   * @returns {void}
   */
  Emit(opcode, method, token) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {SignatureHelper} signature
   * @returns {void}
   */
  Emit(opcode, signature) {}
  /**
   * @param {OpCode} opcode
   * @param {number} arg
   * @returns {void}
   */
  Emit(opcode, arg) {}
  /**
   * @param {OpCode} opcode
   * @param {string} str
   * @returns {void}
   */
  Emit(opcode, str) {}
  /**
   * @param {OpCode} opcode
   * @param {Type} cls
   * @returns {void}
   */
  Emit(opcode, cls) {}
  /**
   * @param {number} val
   * @returns {void}
   */
  emit_int(val) {}
  /**
   * @param {OpCode} opcode
   * @param {MethodInfo} methodInfo
   * @param {Type[]} optionalParameterTypes
   * @returns {void}
   */
  EmitCall(opcode, methodInfo, optionalParameterTypes) {}
  /**
   * @param {OpCode} opcode
   * @param {number} unmanagedCallConv
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @returns {void}
   */
  EmitCalli(opcode, unmanagedCallConv, returnType, parameterTypes) {}
  /**
   * @param {OpCode} opcode
   * @param {number} callingConvention
   * @param {Type} returnType
   * @param {Type[]} parameterTypes
   * @param {Type[]} optionalParameterTypes
   * @returns {void}
   */
  EmitCalli(opcode, callingConvention, returnType, parameterTypes, optionalParameterTypes) {}
  /**
   * @param {FieldInfo} fld
   * @returns {void}
   */
  EmitWriteLine(fld) {}
  /**
   * @param {LocalBuilder} localBuilder
   * @returns {void}
   */
  EmitWriteLine(localBuilder) {}
  /**
   * @param {string} value
   * @returns {void}
   */
  EmitWriteLine(value) {}
  /**
   * @returns {void}
   */
  EndExceptionBlock() {}
  /**
   * @returns {void}
   */
  EndScope() {}
  /**
   * @param {Dictionary} token_map
   * @param {Dictionary} member_map
   * @returns {void}
   */
  FixupTokens(token_map, member_map) {}
  /**
   * @param {ISymbolWriter} symbolWriter
   * @returns {void}
   */
  GenerateDebugInfo(symbolWriter) {}
  /**
   * @param {Byte[]} il
   * @param {number} maxStack
   * @param {Byte[]} localSignature
   * @param {IEnumerable} exceptionHandlers
   * @param {IEnumerable} tokenFixups
   * @returns {void}
   */
  Init(il, maxStack, localSignature, exceptionHandlers, tokenFixups) {}
  /**
   * @returns {void}
   */
  InternalEndClause() {}
  /**
   * @param {MethodBase} mb
   * @returns {void}
   */
  label_fixup(mb) {}
  /**
   * @param {OpCode} opcode
   * @returns {void}
   */
  ll_emit(opcode) {}
  /**
   * @param {number} nbytes
   * @returns {void}
   */
  make_room(nbytes) {}
  /**
   * @param {Label} loc
   * @returns {void}
   */
  MarkLabel(loc) {}
  /**
   * @param {ISymbolDocumentWriter} document
   * @param {number} startLine
   * @param {number} startColumn
   * @param {number} endLine
   * @param {number} endColumn
   * @returns {void}
   */
  MarkSequencePoint(document, startLine, startColumn, endLine, endColumn) {}
  /**
   * @param {ILGenerator} ig
   * @returns {number}
   */
  static Mono_GetCurrentOffset(ig) {}
  /**
   * @param {Byte[]} code
   * @param {number} max_stack
   * @returns {void}
   */
  SetCode(code, max_stack) {}
  /**
   * @param {Byte*} code
   * @param {number} code_size
   * @param {number} max_stack
   * @returns {void}
   */
  SetCode(code, code_size, max_stack) {}
  /**
   * @param {ILExceptionInfo[]} exHandlers
   * @returns {void}
   */
  SetExceptionHandlers(exHandlers) {}
  /**
   * @param {ILTokenInfo[]} tokenFixups
   * @returns {void}
   */
  SetTokenFixups(tokenFixups) {}
  /**
   * @param {number} iTInfo
   * @param {number} lcid
   * @param {IntPtr} ppTInfo
   * @returns {void}
   */
  GetTypeInfo(iTInfo, lcid, ppTInfo) {}
  /**
   * @param {OpCode} opcode
   * @returns {number}
   */
  static target_len(opcode) {}
  /**
   * @param {Type} excType
   * @returns {void}
   */
  ThrowException(excType) {}
  /**
   * @param {string} usingNamespace
   * @returns {void}
   */
  UsingNamespace(usingNamespace) {}
  /**@type {boolean}*/
  get HasDebugInfo() {}
  /**@type {number}*/
  get ILOffset() {}
  /**@type {TokenGenerator}*/
  get TokenGenerator() {}
}
class OpCode {
  constructor() {
    /**@type {number}*/
    this.op1 = null;
    /**@type {number}*/
    this.op2 = null;
    /**@type {number}*/
    this.push = null;
    /**@type {number}*/
    this.pop = null;
    /**@type {number}*/
    this.size = null;
    /**@type {number}*/
    this.type = null;
    /**@type {number}*/
    this.args = null;
    /**@type {number}*/
    this.flow = null;
  }
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {OpCode} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**@type {number}*/
  get FlowControl() {}
  /**@type {string}*/
  get Name() {}
  /**@type {number}*/
  get OpCodeType() {}
  /**@type {number}*/
  get OperandType() {}
  /**@type {number}*/
  get Size() {}
  /**@type {number}*/
  get StackBehaviourPop() {}
  /**@type {number}*/
  get StackBehaviourPush() {}
  /**@type {number}*/
  get Value() {}
}
class OpCodes {
  constructor() {
  }
  /**@type {OpCode}*/
  static Nop;
  /**@type {OpCode}*/
  static Break;
  /**@type {OpCode}*/
  static Ldarg_0;
  /**@type {OpCode}*/
  static Ldarg_1;
  /**@type {OpCode}*/
  static Ldarg_2;
  /**@type {OpCode}*/
  static Ldarg_3;
  /**@type {OpCode}*/
  static Ldloc_0;
  /**@type {OpCode}*/
  static Ldloc_1;
  /**@type {OpCode}*/
  static Ldloc_2;
  /**@type {OpCode}*/
  static Ldloc_3;
  /**@type {OpCode}*/
  static Stloc_0;
  /**@type {OpCode}*/
  static Stloc_1;
  /**@type {OpCode}*/
  static Stloc_2;
  /**@type {OpCode}*/
  static Stloc_3;
  /**@type {OpCode}*/
  static Ldarg_S;
  /**@type {OpCode}*/
  static Ldarga_S;
  /**@type {OpCode}*/
  static Starg_S;
  /**@type {OpCode}*/
  static Ldloc_S;
  /**@type {OpCode}*/
  static Ldloca_S;
  /**@type {OpCode}*/
  static Stloc_S;
  /**@type {OpCode}*/
  static Ldnull;
  /**@type {OpCode}*/
  static Ldc_I4_M1;
  /**@type {OpCode}*/
  static Ldc_I4_0;
  /**@type {OpCode}*/
  static Ldc_I4_1;
  /**@type {OpCode}*/
  static Ldc_I4_2;
  /**@type {OpCode}*/
  static Ldc_I4_3;
  /**@type {OpCode}*/
  static Ldc_I4_4;
  /**@type {OpCode}*/
  static Ldc_I4_5;
  /**@type {OpCode}*/
  static Ldc_I4_6;
  /**@type {OpCode}*/
  static Ldc_I4_7;
  /**@type {OpCode}*/
  static Ldc_I4_8;
  /**@type {OpCode}*/
  static Ldc_I4_S;
  /**@type {OpCode}*/
  static Ldc_I4;
  /**@type {OpCode}*/
  static Ldc_I8;
  /**@type {OpCode}*/
  static Ldc_R4;
  /**@type {OpCode}*/
  static Ldc_R8;
  /**@type {OpCode}*/
  static Dup;
  /**@type {OpCode}*/
  static Pop;
  /**@type {OpCode}*/
  static Jmp;
  /**@type {OpCode}*/
  static Call;
  /**@type {OpCode}*/
  static Calli;
  /**@type {OpCode}*/
  static Ret;
  /**@type {OpCode}*/
  static Br_S;
  /**@type {OpCode}*/
  static Brfalse_S;
  /**@type {OpCode}*/
  static Brtrue_S;
  /**@type {OpCode}*/
  static Beq_S;
  /**@type {OpCode}*/
  static Bge_S;
  /**@type {OpCode}*/
  static Bgt_S;
  /**@type {OpCode}*/
  static Ble_S;
  /**@type {OpCode}*/
  static Blt_S;
  /**@type {OpCode}*/
  static Bne_Un_S;
  /**@type {OpCode}*/
  static Bge_Un_S;
  /**@type {OpCode}*/
  static Bgt_Un_S;
  /**@type {OpCode}*/
  static Ble_Un_S;
  /**@type {OpCode}*/
  static Blt_Un_S;
  /**@type {OpCode}*/
  static Br;
  /**@type {OpCode}*/
  static Brfalse;
  /**@type {OpCode}*/
  static Brtrue;
  /**@type {OpCode}*/
  static Beq;
  /**@type {OpCode}*/
  static Bge;
  /**@type {OpCode}*/
  static Bgt;
  /**@type {OpCode}*/
  static Ble;
  /**@type {OpCode}*/
  static Blt;
  /**@type {OpCode}*/
  static Bne_Un;
  /**@type {OpCode}*/
  static Bge_Un;
  /**@type {OpCode}*/
  static Bgt_Un;
  /**@type {OpCode}*/
  static Ble_Un;
  /**@type {OpCode}*/
  static Blt_Un;
  /**@type {OpCode}*/
  static Switch;
  /**@type {OpCode}*/
  static Ldind_I1;
  /**@type {OpCode}*/
  static Ldind_U1;
  /**@type {OpCode}*/
  static Ldind_I2;
  /**@type {OpCode}*/
  static Ldind_U2;
  /**@type {OpCode}*/
  static Ldind_I4;
  /**@type {OpCode}*/
  static Ldind_U4;
  /**@type {OpCode}*/
  static Ldind_I8;
  /**@type {OpCode}*/
  static Ldind_I;
  /**@type {OpCode}*/
  static Ldind_R4;
  /**@type {OpCode}*/
  static Ldind_R8;
  /**@type {OpCode}*/
  static Ldind_Ref;
  /**@type {OpCode}*/
  static Stind_Ref;
  /**@type {OpCode}*/
  static Stind_I1;
  /**@type {OpCode}*/
  static Stind_I2;
  /**@type {OpCode}*/
  static Stind_I4;
  /**@type {OpCode}*/
  static Stind_I8;
  /**@type {OpCode}*/
  static Stind_R4;
  /**@type {OpCode}*/
  static Stind_R8;
  /**@type {OpCode}*/
  static Add;
  /**@type {OpCode}*/
  static Sub;
  /**@type {OpCode}*/
  static Mul;
  /**@type {OpCode}*/
  static Div;
  /**@type {OpCode}*/
  static Div_Un;
  /**@type {OpCode}*/
  static Rem;
  /**@type {OpCode}*/
  static Rem_Un;
  /**@type {OpCode}*/
  static And;
  /**@type {OpCode}*/
  static Or;
  /**@type {OpCode}*/
  static Xor;
  /**@type {OpCode}*/
  static Shl;
  /**@type {OpCode}*/
  static Shr;
  /**@type {OpCode}*/
  static Shr_Un;
  /**@type {OpCode}*/
  static Neg;
  /**@type {OpCode}*/
  static Not;
  /**@type {OpCode}*/
  static Conv_I1;
  /**@type {OpCode}*/
  static Conv_I2;
  /**@type {OpCode}*/
  static Conv_I4;
  /**@type {OpCode}*/
  static Conv_I8;
  /**@type {OpCode}*/
  static Conv_R4;
  /**@type {OpCode}*/
  static Conv_R8;
  /**@type {OpCode}*/
  static Conv_U4;
  /**@type {OpCode}*/
  static Conv_U8;
  /**@type {OpCode}*/
  static Callvirt;
  /**@type {OpCode}*/
  static Cpobj;
  /**@type {OpCode}*/
  static Ldobj;
  /**@type {OpCode}*/
  static Ldstr;
  /**@type {OpCode}*/
  static Newobj;
  /**@type {OpCode}*/
  static Castclass;
  /**@type {OpCode}*/
  static Isinst;
  /**@type {OpCode}*/
  static Conv_R_Un;
  /**@type {OpCode}*/
  static Unbox;
  /**@type {OpCode}*/
  static Throw;
  /**@type {OpCode}*/
  static Ldfld;
  /**@type {OpCode}*/
  static Ldflda;
  /**@type {OpCode}*/
  static Stfld;
  /**@type {OpCode}*/
  static Ldsfld;
  /**@type {OpCode}*/
  static Ldsflda;
  /**@type {OpCode}*/
  static Stsfld;
  /**@type {OpCode}*/
  static Stobj;
  /**@type {OpCode}*/
  static Conv_Ovf_I1_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_I2_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_I4_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_I8_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_U1_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_U2_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_U4_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_U8_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_I_Un;
  /**@type {OpCode}*/
  static Conv_Ovf_U_Un;
  /**@type {OpCode}*/
  static Box;
  /**@type {OpCode}*/
  static Newarr;
  /**@type {OpCode}*/
  static Ldlen;
  /**@type {OpCode}*/
  static Ldelema;
  /**@type {OpCode}*/
  static Ldelem_I1;
  /**@type {OpCode}*/
  static Ldelem_U1;
  /**@type {OpCode}*/
  static Ldelem_I2;
  /**@type {OpCode}*/
  static Ldelem_U2;
  /**@type {OpCode}*/
  static Ldelem_I4;
  /**@type {OpCode}*/
  static Ldelem_U4;
  /**@type {OpCode}*/
  static Ldelem_I8;
  /**@type {OpCode}*/
  static Ldelem_I;
  /**@type {OpCode}*/
  static Ldelem_R4;
  /**@type {OpCode}*/
  static Ldelem_R8;
  /**@type {OpCode}*/
  static Ldelem_Ref;
  /**@type {OpCode}*/
  static Stelem_I;
  /**@type {OpCode}*/
  static Stelem_I1;
  /**@type {OpCode}*/
  static Stelem_I2;
  /**@type {OpCode}*/
  static Stelem_I4;
  /**@type {OpCode}*/
  static Stelem_I8;
  /**@type {OpCode}*/
  static Stelem_R4;
  /**@type {OpCode}*/
  static Stelem_R8;
  /**@type {OpCode}*/
  static Stelem_Ref;
  /**@type {OpCode}*/
  static Ldelem;
  /**@type {OpCode}*/
  static Stelem;
  /**@type {OpCode}*/
  static Unbox_Any;
  /**@type {OpCode}*/
  static Conv_Ovf_I1;
  /**@type {OpCode}*/
  static Conv_Ovf_U1;
  /**@type {OpCode}*/
  static Conv_Ovf_I2;
  /**@type {OpCode}*/
  static Conv_Ovf_U2;
  /**@type {OpCode}*/
  static Conv_Ovf_I4;
  /**@type {OpCode}*/
  static Conv_Ovf_U4;
  /**@type {OpCode}*/
  static Conv_Ovf_I8;
  /**@type {OpCode}*/
  static Conv_Ovf_U8;
  /**@type {OpCode}*/
  static Refanyval;
  /**@type {OpCode}*/
  static Ckfinite;
  /**@type {OpCode}*/
  static Mkrefany;
  /**@type {OpCode}*/
  static Ldtoken;
  /**@type {OpCode}*/
  static Conv_U2;
  /**@type {OpCode}*/
  static Conv_U1;
  /**@type {OpCode}*/
  static Conv_I;
  /**@type {OpCode}*/
  static Conv_Ovf_I;
  /**@type {OpCode}*/
  static Conv_Ovf_U;
  /**@type {OpCode}*/
  static Add_Ovf;
  /**@type {OpCode}*/
  static Add_Ovf_Un;
  /**@type {OpCode}*/
  static Mul_Ovf;
  /**@type {OpCode}*/
  static Mul_Ovf_Un;
  /**@type {OpCode}*/
  static Sub_Ovf;
  /**@type {OpCode}*/
  static Sub_Ovf_Un;
  /**@type {OpCode}*/
  static Endfinally;
  /**@type {OpCode}*/
  static Leave;
  /**@type {OpCode}*/
  static Leave_S;
  /**@type {OpCode}*/
  static Stind_I;
  /**@type {OpCode}*/
  static Conv_U;
  /**@type {OpCode}*/
  static Prefix7;
  /**@type {OpCode}*/
  static Prefix6;
  /**@type {OpCode}*/
  static Prefix5;
  /**@type {OpCode}*/
  static Prefix4;
  /**@type {OpCode}*/
  static Prefix3;
  /**@type {OpCode}*/
  static Prefix2;
  /**@type {OpCode}*/
  static Prefix1;
  /**@type {OpCode}*/
  static Prefixref;
  /**@type {OpCode}*/
  static Arglist;
  /**@type {OpCode}*/
  static Ceq;
  /**@type {OpCode}*/
  static Cgt;
  /**@type {OpCode}*/
  static Cgt_Un;
  /**@type {OpCode}*/
  static Clt;
  /**@type {OpCode}*/
  static Clt_Un;
  /**@type {OpCode}*/
  static Ldftn;
  /**@type {OpCode}*/
  static Ldvirtftn;
  /**@type {OpCode}*/
  static Ldarg;
  /**@type {OpCode}*/
  static Ldarga;
  /**@type {OpCode}*/
  static Starg;
  /**@type {OpCode}*/
  static Ldloc;
  /**@type {OpCode}*/
  static Ldloca;
  /**@type {OpCode}*/
  static Stloc;
  /**@type {OpCode}*/
  static Localloc;
  /**@type {OpCode}*/
  static Endfilter;
  /**@type {OpCode}*/
  static Unaligned;
  /**@type {OpCode}*/
  static Volatile;
  /**@type {OpCode}*/
  static Tailcall;
  /**@type {OpCode}*/
  static Initobj;
  /**@type {OpCode}*/
  static Constrained;
  /**@type {OpCode}*/
  static Cpblk;
  /**@type {OpCode}*/
  static Initblk;
  /**@type {OpCode}*/
  static Rethrow;
  /**@type {OpCode}*/
  static Sizeof;
  /**@type {OpCode}*/
  static Refanytype;
  /**@type {OpCode}*/
  static Readonly;
  /**
   * @param {OpCode} inst
   * @returns {boolean}
   */
  static TakesSingleByteArgument(inst) {}
}

