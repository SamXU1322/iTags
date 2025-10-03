// [Overlayer.Scripting JS Wrapper]
// Author: Square & Kkitut
// ProxyTypes: System.Type&Type*System.Array&Array*System.Enum&Enum*System.IO.File&IOFile*System.IO.Path&Path*System.IO.Directory&Directory*System.Collections.IEnumerable&IEnumerable*System.Collections.IEnumerator&IEnumerator
// Version: 1.0.0
class Type {
  constructor() {
    /**@type {RuntimeTypeHandle}*/
    this._impl = null;
  }
  /**@type {Binder}*/
  static s_defaultBinder;
  /**@type {string}*/
  static Delimiter;
  /**@type {Type[]}*/
  static EmptyTypes;
  /**@type {Object}*/
  static Missing;
  /**@type {MemberFilter}*/
  static FilterAttribute;
  /**@type {MemberFilter}*/
  static FilterName;
  /**@type {MemberFilter}*/
  static FilterNameIgnoreCase;
  /**@type {Type}*/
  static DefaultLookup;
  /**@type {string}*/
  static DefaultTypeNameWhenMissingMetadata;
  /**
   * @param {any[]} array
   * @param {Object} value
   * @returns {number}
   */
  static BinarySearch(array, value) {}
  /**
   * @param {Object} o
   * @returns {boolean}
   */
  CacheEquals(o) {}
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
   * @param {MemberInfo} m
   * @param {Object} filterCriteria
   * @returns {boolean}
   */
  static FilterAttributeImpl(m, filterCriteria) {}
  /**
   * @param {MemberInfo} m
   * @param {Object} filterCriteria
   * @returns {boolean}
   */
  static FilterNameIgnoreCaseImpl(m, filterCriteria) {}
  /**
   * @param {MemberInfo} m
   * @param {Object} filterCriteria
   * @returns {boolean}
   */
  static FilterNameImpl(m, filterCriteria) {}
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
   * @returns {ConstructorInfo[]}
   */
  GetConstructors() {}
  /**
   * @param {number} bindingAttr
   * @returns {ConstructorInfo[]}
   */
  GetConstructors(bindingAttr) {}
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
   * @returns {any[]}
   */
  GetEnumRawConstantValues() {}
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
   * @returns {EventInfo}
   */
  GetEvent(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {EventInfo}
   */
  GetEvent(name, bindingAttr) {}
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
   * @returns {FieldInfo}
   */
  GetField(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {FieldInfo}
   */
  GetField(name, bindingAttr) {}
  /**
   * @param {FieldInfo} fromNoninstanciated
   * @returns {FieldInfo}
   */
  GetField(fromNoninstanciated) {}
  /**
   * @returns {FieldInfo[]}
   */
  GetFields() {}
  /**
   * @param {number} bindingAttr
   * @returns {FieldInfo[]}
   */
  GetFields(bindingAttr) {}
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
   * @returns {Type}
   */
  GetInterface(name) {}
  /**
   * @param {string} name
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  GetInterface(name, ignoreCase) {}
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
   * @param {string} name
   * @param {number} type
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMember(name, type, bindingAttr) {}
  /**
   * @returns {MemberInfo[]}
   */
  GetMembers() {}
  /**
   * @param {number} bindingAttr
   * @returns {MemberInfo[]}
   */
  GetMembers(bindingAttr) {}
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
   * @returns {MethodInfo[]}
   */
  GetMethods() {}
  /**
   * @param {number} bindingAttr
   * @returns {MethodInfo[]}
   */
  GetMethods(bindingAttr) {}
  /**
   * @param {string} name
   * @returns {Type}
   */
  GetNestedType(name) {}
  /**
   * @param {string} name
   * @param {number} bindingAttr
   * @returns {Type}
   */
  GetNestedType(name, bindingAttr) {}
  /**
   * @returns {Type[]}
   */
  GetNestedTypes() {}
  /**
   * @param {number} bindingAttr
   * @returns {Type[]}
   */
  GetNestedTypes(bindingAttr) {}
  /**
   * @returns {PropertyInfo[]}
   */
  GetProperties() {}
  /**
   * @param {number} bindingAttr
   * @returns {PropertyInfo[]}
   */
  GetProperties(bindingAttr) {}
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
   * @param {string} typeName
   * @param {boolean} throwOnError
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  static GetType(typeName, throwOnError, ignoreCase) {}
  /**
   * @param {string} typeName
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  static GetType(typeName, throwOnError) {}
  /**
   * @param {string} typeName
   * @returns {Type}
   */
  static GetType(typeName) {}
  /**
   * @param {string} typeName
   * @param {Func} assemblyResolver
   * @param {Func} typeResolver
   * @returns {Type}
   */
  static GetType(typeName, assemblyResolver, typeResolver) {}
  /**
   * @param {string} typeName
   * @param {Func} assemblyResolver
   * @param {Func} typeResolver
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  static GetType(typeName, assemblyResolver, typeResolver, throwOnError) {}
  /**
   * @param {string} typeName
   * @param {Func} assemblyResolver
   * @param {Func} typeResolver
   * @param {boolean} throwOnError
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  static GetType(typeName, assemblyResolver, typeResolver, throwOnError, ignoreCase) {}
  /**
   * @param {Object[]} args
   * @returns {Type[]}
   */
  static GetTypeArray(args) {}
  /**
   * @param {Type} type
   * @returns {number}
   */
  static GetTypeCode(type) {}
  /**
   * @returns {number}
   */
  GetTypeCodeImpl() {}
  /**
   * @param {Guid} clsid
   * @returns {Type}
   */
  static GetTypeFromCLSID(clsid) {}
  /**
   * @param {Guid} clsid
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  static GetTypeFromCLSID(clsid, throwOnError) {}
  /**
   * @param {Guid} clsid
   * @param {string} server
   * @returns {Type}
   */
  static GetTypeFromCLSID(clsid, server) {}
  /**
   * @param {Guid} clsid
   * @param {string} server
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  static GetTypeFromCLSID(clsid, server, throwOnError) {}
  /**
   * @param {RuntimeTypeHandle} handle
   * @returns {Type}
   */
  static GetTypeFromHandle(handle) {}
  /**
   * @param {string} progID
   * @returns {Type}
   */
  static GetTypeFromProgID(progID) {}
  /**
   * @param {string} progID
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  static GetTypeFromProgID(progID, throwOnError) {}
  /**
   * @param {string} progID
   * @param {string} server
   * @returns {Type}
   */
  static GetTypeFromProgID(progID, server) {}
  /**
   * @param {string} progID
   * @param {string} server
   * @param {boolean} throwOnError
   * @returns {Type}
   */
  static GetTypeFromProgID(progID, server, throwOnError) {}
  /**
   * @param {Object} o
   * @returns {RuntimeTypeHandle}
   */
  static GetTypeHandle(o) {}
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
   * @param {IntPtr} handle
   * @returns {Type}
   */
  static internal_from_handle(handle) {}
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
   * @returns {boolean}
   */
  IsArrayImpl() {}
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
   * @param {Type} t
   * @returns {boolean}
   */
  static IsIntegerType(t) {}
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
   * @param {number} position
   * @returns {Type}
   */
  static MakeGenericMethodParameter(position) {}
  /**
   * @param {Type} genericTypeDefinition
   * @param {Type[]} typeArguments
   * @returns {Type}
   */
  static MakeGenericSignatureType(genericTypeDefinition, typeArguments) {}
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
   * @param {string} typeName
   * @param {boolean} throwIfNotFound
   * @param {boolean} ignoreCase
   * @returns {Type}
   */
  static ReflectionOnlyGetType(typeName, throwIfNotFound, ignoreCase) {}
  /**
   * @returns {Type}
   */
  RuntimeResolve() {}
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
  /**@type {MethodBase}*/
  get DeclaringMethod() {}
  /**@type {Type}*/
  get DeclaringType() {}
  /**@type {Binder}*/
  static get DefaultBinder() {}
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
  /**@type {Guid}*/
  get GUID() {}
  /**@type {boolean}*/
  get HasElementType() {}
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
  /**@type {Type}*/
  get UnderlyingSystemType() {}
}
class Array {
  constructor() {
  }
  /**
   * @param {T[]} array
   * @returns {ReadOnlyCollection}
   */
  static AsReadOnly(array) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @returns {number}
   */
  static BinarySearch(array, value) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @param {number} length
   * @param {Object} value
   * @returns {number}
   */
  static BinarySearch(array, index, length, value) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @param {IComparer} comparer
   * @returns {number}
   */
  static BinarySearch(array, value, comparer) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @param {number} length
   * @param {Object} value
   * @param {IComparer} comparer
   * @returns {number}
   */
  static BinarySearch(array, index, length, value, comparer) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @returns {number}
   */
  static BinarySearch(array, value) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {IComparer} comparer
   * @returns {number}
   */
  static BinarySearch(array, value, comparer) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @param {number} length
   * @param {T} value
   * @returns {number}
   */
  static BinarySearch(array, index, length, value) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @param {number} length
   * @param {T} value
   * @param {IComparer} comparer
   * @returns {number}
   */
  static BinarySearch(array, index, length, value, comparer) {}
  /**
   * @param {Type} source
   * @param {Type} target
   * @returns {boolean}
   */
  static CanAssignArrayElement(source, target) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Clear(array, index, length) {}
  /**
   * @param {any[]} a
   * @param {number} index
   * @param {number} count
   * @returns {void}
   */
  static ClearInternal(a, index, count) {}
  /**
   * @returns {Object}
   */
  Clone() {}
  /**
   * @param {number} h1
   * @param {number} h2
   * @returns {number}
   */
  static CombineHashCodes(h1, h2) {}
  /**
   * @param {any[]} sourceArray
   * @param {number} sourceIndex
   * @param {any[]} destinationArray
   * @param {number} destinationIndex
   * @param {number} length
   * @returns {void}
   */
  static ConstrainedCopy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {}
  /**
   * @param {TInput[]} array
   * @param {Converter} converter
   * @returns {TOutput[]}
   */
  static ConvertAll(array, converter) {}
  /**
   * @param {any[]} sourceArray
   * @param {any[]} destinationArray
   * @param {number} length
   * @returns {void}
   */
  static Copy(sourceArray, destinationArray, length) {}
  /**
   * @param {any[]} sourceArray
   * @param {number} sourceIndex
   * @param {any[]} destinationArray
   * @param {number} destinationIndex
   * @param {number} length
   * @returns {void}
   */
  static Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {}
  /**
   * @param {any[]} sourceArray
   * @param {any[]} destinationArray
   * @param {number} length
   * @returns {void}
   */
  static Copy(sourceArray, destinationArray, length) {}
  /**
   * @param {any[]} sourceArray
   * @param {number} sourceIndex
   * @param {any[]} destinationArray
   * @param {number} destinationIndex
   * @param {number} length
   * @returns {void}
   */
  static Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @returns {void}
   */
  CopyTo(array, index) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @returns {void}
   */
  CopyTo(array, index) {}
  /**
   * @returns {ArrayTypeMismatchException}
   */
  static CreateArrayTypeMismatchException() {}
  /**
   * @param {Type} elementType
   * @param {Int64[]} lengths
   * @returns {any[]}
   */
  static CreateInstance(elementType, lengths) {}
  /**
   * @param {Type} elementType
   * @param {number} length
   * @returns {any[]}
   */
  static CreateInstance(elementType, length) {}
  /**
   * @param {Type} elementType
   * @param {number} length1
   * @param {number} length2
   * @returns {any[]}
   */
  static CreateInstance(elementType, length1, length2) {}
  /**
   * @param {Type} elementType
   * @param {number} length1
   * @param {number} length2
   * @param {number} length3
   * @returns {any[]}
   */
  static CreateInstance(elementType, length1, length2, length3) {}
  /**
   * @param {Type} elementType
   * @param {Int32[]} lengths
   * @returns {any[]}
   */
  static CreateInstance(elementType, lengths) {}
  /**
   * @param {Type} elementType
   * @param {Int32[]} lengths
   * @param {Int32[]} lowerBounds
   * @returns {any[]}
   */
  static CreateInstance(elementType, lengths, lowerBounds) {}
  /**
   * @param {Type} elementType
   * @param {Int32[]} lengths
   * @param {Int32[]} bounds
   * @returns {any[]}
   */
  static CreateInstanceImpl(elementType, lengths, bounds) {}
  /**
   * @returns {T[]}
   */
  static Empty() {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {boolean}
   */
  static Exists(array, match) {}
  /**
   * @param {any[]} source
   * @param {number} source_idx
   * @param {any[]} dest
   * @param {number} dest_idx
   * @param {number} length
   * @returns {boolean}
   */
  static FastCopy(source, source_idx, dest, dest_idx, length) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @returns {void}
   */
  static Fill(array, value) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {void}
   */
  static Fill(array, value, startIndex, count) {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {T}
   */
  static Find(array, match) {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {T[]}
   */
  static FindAll(array, match) {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {number}
   */
  static FindIndex(array, match) {}
  /**
   * @param {T[]} array
   * @param {number} startIndex
   * @param {Predicate} match
   * @returns {number}
   */
  static FindIndex(array, startIndex, match) {}
  /**
   * @param {T[]} array
   * @param {number} startIndex
   * @param {number} count
   * @param {Predicate} match
   * @returns {number}
   */
  static FindIndex(array, startIndex, count, match) {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {T}
   */
  static FindLast(array, match) {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {number}
   */
  static FindLastIndex(array, match) {}
  /**
   * @param {T[]} array
   * @param {number} startIndex
   * @param {Predicate} match
   * @returns {number}
   */
  static FindLastIndex(array, startIndex, match) {}
  /**
   * @param {T[]} array
   * @param {number} startIndex
   * @param {number} count
   * @param {Predicate} match
   * @returns {number}
   */
  static FindLastIndex(array, startIndex, count, match) {}
  /**
   * @param {T[]} array
   * @param {Action} action
   * @returns {void}
   */
  static ForEach(array, action) {}
  /**
   * @returns {IEnumerator}
   */
  GetEnumerator() {}
  /**
   * @param {number} dimension
   * @returns {number}
   */
  GetLength(dimension) {}
  /**
   * @param {number} dimension
   * @returns {number}
   */
  GetLongLength(dimension) {}
  /**
   * @param {number} dimension
   * @returns {number}
   */
  GetLowerBound(dimension) {}
  /**
   * @param {number} low
   * @param {number} hi
   * @returns {number}
   */
  static GetMedian(low, hi) {}
  /**
   * @returns {number}
   */
  GetRank() {}
  /**
   * @returns {Byte&}
   */
  GetRawSzArrayData() {}
  /**
   * @param {number} dimension
   * @returns {number}
   */
  GetUpperBound(dimension) {}
  /**
   * @param {number} index
   * @returns {Object}
   */
  GetValue(index) {}
  /**
   * @param {number} index1
   * @param {number} index2
   * @returns {Object}
   */
  GetValue(index1, index2) {}
  /**
   * @param {number} index1
   * @param {number} index2
   * @param {number} index3
   * @returns {Object}
   */
  GetValue(index1, index2, index3) {}
  /**
   * @param {Int64[]} indices
   * @returns {Object}
   */
  GetValue(indices) {}
  /**
   * @param {Int32[]} indices
   * @returns {Object}
   */
  GetValue(indices) {}
  /**
   * @param {number} index
   * @returns {Object}
   */
  GetValue(index) {}
  /**
   * @param {number} index1
   * @param {number} index2
   * @returns {Object}
   */
  GetValue(index1, index2) {}
  /**
   * @param {number} index1
   * @param {number} index2
   * @param {number} index3
   * @returns {Object}
   */
  GetValue(index1, index2, index3) {}
  /**
   * @param {number} pos
   * @returns {Object}
   */
  GetValueImpl(pos) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @returns {number}
   */
  static IndexOf(array, value) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @param {number} startIndex
   * @returns {number}
   */
  static IndexOf(array, value, startIndex) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {number}
   */
  static IndexOf(array, value, startIndex, count) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @returns {number}
   */
  static IndexOf(array, value) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @returns {number}
   */
  static IndexOf(array, value, startIndex) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {number}
   */
  static IndexOf(array, value, startIndex, count) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {number}
   */
  static IndexOfImpl(array, value, startIndex, count) {}
  /**
   * @returns {void}
   */
  Initialize() {}
  /**
   * @param {number} index
   * @returns {T}
   */
  InternalArray__get_Item(index) {}
  /**
   * @param {T} item
   * @returns {void}
   */
  InternalArray__ICollection_Add(item) {}
  /**
   * @returns {void}
   */
  InternalArray__ICollection_Clear() {}
  /**
   * @param {T} item
   * @returns {boolean}
   */
  InternalArray__ICollection_Contains(item) {}
  /**
   * @param {T[]} array
   * @param {number} arrayIndex
   * @returns {void}
   */
  InternalArray__ICollection_CopyTo(array, arrayIndex) {}
  /**
   * @returns {number}
   */
  InternalArray__ICollection_get_Count() {}
  /**
   * @returns {boolean}
   */
  InternalArray__ICollection_get_IsReadOnly() {}
  /**
   * @param {T} item
   * @returns {boolean}
   */
  InternalArray__ICollection_Remove(item) {}
  /**
   * @returns {IEnumerator}
   */
  InternalArray__IEnumerable_GetEnumerator() {}
  /**
   * @param {T} item
   * @returns {number}
   */
  InternalArray__IndexOf(item) {}
  /**
   * @param {number} index
   * @param {T} item
   * @returns {void}
   */
  InternalArray__Insert(index, item) {}
  /**
   * @returns {number}
   */
  InternalArray__IReadOnlyCollection_get_Count() {}
  /**
   * @param {number} index
   * @returns {T}
   */
  InternalArray__IReadOnlyList_get_Item(index) {}
  /**
   * @param {number} index
   * @returns {void}
   */
  InternalArray__RemoveAt(index) {}
  /**
   * @param {number} index
   * @param {T} item
   * @returns {void}
   */
  InternalArray__set_Item(index, item) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @returns {number}
   */
  static LastIndexOf(array, value) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @param {number} startIndex
   * @returns {number}
   */
  static LastIndexOf(array, value, startIndex) {}
  /**
   * @param {any[]} array
   * @param {Object} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {number}
   */
  static LastIndexOf(array, value, startIndex, count) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @returns {number}
   */
  static LastIndexOf(array, value) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @returns {number}
   */
  static LastIndexOf(array, value, startIndex) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {number}
   */
  static LastIndexOf(array, value, startIndex, count) {}
  /**
   * @param {T[]} array
   * @param {T} value
   * @param {number} startIndex
   * @param {number} count
   * @returns {number}
   */
  static LastIndexOfImpl(array, value, startIndex, count) {}
  /**
   * @param {any[]} array
   * @returns {void}
   */
  static Reverse(array) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Reverse(array, index, length) {}
  /**
   * @param {T[]} array
   * @returns {void}
   */
  static Reverse(array) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Reverse(array, index, length) {}
  /**
   * @param {Object} value
   * @param {number} index
   * @returns {void}
   */
  SetValue(value, index) {}
  /**
   * @param {Object} value
   * @param {number} index1
   * @param {number} index2
   * @returns {void}
   */
  SetValue(value, index1, index2) {}
  /**
   * @param {Object} value
   * @param {number} index1
   * @param {number} index2
   * @param {number} index3
   * @returns {void}
   */
  SetValue(value, index1, index2, index3) {}
  /**
   * @param {Object} value
   * @param {Int64[]} indices
   * @returns {void}
   */
  SetValue(value, indices) {}
  /**
   * @param {Object} value
   * @param {Int32[]} indices
   * @returns {void}
   */
  SetValue(value, indices) {}
  /**
   * @param {Object} value
   * @param {number} index
   * @returns {void}
   */
  SetValue(value, index) {}
  /**
   * @param {Object} value
   * @param {number} index1
   * @param {number} index2
   * @returns {void}
   */
  SetValue(value, index1, index2) {}
  /**
   * @param {Object} value
   * @param {number} index1
   * @param {number} index2
   * @param {number} index3
   * @returns {void}
   */
  SetValue(value, index1, index2, index3) {}
  /**
   * @param {Object} value
   * @param {number} pos
   * @returns {void}
   */
  SetValueImpl(value, pos) {}
  /**
   * @param {any[]} array
   * @returns {void}
   */
  static Sort(array) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Sort(array, index, length) {}
  /**
   * @param {any[]} array
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(array, comparer) {}
  /**
   * @param {any[]} array
   * @param {number} index
   * @param {number} length
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(array, index, length, comparer) {}
  /**
   * @param {any[]} keys
   * @param {any[]} items
   * @returns {void}
   */
  static Sort(keys, items) {}
  /**
   * @param {any[]} keys
   * @param {any[]} items
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(keys, items, comparer) {}
  /**
   * @param {any[]} keys
   * @param {any[]} items
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Sort(keys, items, index, length) {}
  /**
   * @param {any[]} keys
   * @param {any[]} items
   * @param {number} index
   * @param {number} length
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(keys, items, index, length, comparer) {}
  /**
   * @param {T[]} array
   * @returns {void}
   */
  static Sort(array) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Sort(array, index, length) {}
  /**
   * @param {T[]} array
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(array, comparer) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @param {number} length
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(array, index, length, comparer) {}
  /**
   * @param {T[]} array
   * @param {Comparison} comparison
   * @returns {void}
   */
  static Sort(array, comparison) {}
  /**
   * @param {TKey[]} keys
   * @param {TValue[]} items
   * @returns {void}
   */
  static Sort(keys, items) {}
  /**
   * @param {TKey[]} keys
   * @param {TValue[]} items
   * @param {number} index
   * @param {number} length
   * @returns {void}
   */
  static Sort(keys, items, index, length) {}
  /**
   * @param {TKey[]} keys
   * @param {TValue[]} items
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(keys, items, comparer) {}
  /**
   * @param {TKey[]} keys
   * @param {TValue[]} items
   * @param {number} index
   * @param {number} length
   * @param {IComparer} comparer
   * @returns {void}
   */
  static Sort(keys, items, index, length, comparer) {}
  /**
   * @param {any[]} keys
   * @param {any[]} items
   * @param {number} index
   * @param {number} length
   * @param {IComparer} comparer
   * @returns {void}
   */
  static SortImpl(keys, items, index, length, comparer) {}
  /**
   * @param {Object} value
   * @returns {number}
   */
  Add(value) {}
  /**
   * @returns {void}
   */
  Clear() {}
  /**
   * @param {Object} value
   * @returns {boolean}
   */
  Contains(value) {}
  /**
   * @param {Object} value
   * @returns {number}
   */
  IndexOf(value) {}
  /**
   * @param {number} index
   * @param {Object} value
   * @returns {void}
   */
  Insert(index, value) {}
  /**
   * @param {Object} value
   * @returns {void}
   */
  Remove(value) {}
  /**
   * @param {number} index
   * @returns {void}
   */
  RemoveAt(index) {}
  /**
   * @param {Object} other
   * @param {IComparer} comparer
   * @returns {number}
   */
  CompareTo(other, comparer) {}
  /**
   * @param {Object} other
   * @param {IEqualityComparer} comparer
   * @returns {boolean}
   */
  Equals(other, comparer) {}
  /**
   * @param {IEqualityComparer} comparer
   * @returns {number}
   */
  GetHashCode(comparer) {}
  /**
   * @param {T[]} array
   * @param {Predicate} match
   * @returns {boolean}
   */
  static TrueForAll(array, match) {}
  /**
   * @param {Type} elementType
   * @param {Int32[]} lengths
   * @param {Int32[]} lowerBounds
   * @returns {any[]}
   */
  static UnsafeCreateInstance(elementType, lengths, lowerBounds) {}
  /**
   * @param {Type} elementType
   * @param {number} length1
   * @param {number} length2
   * @returns {any[]}
   */
  static UnsafeCreateInstance(elementType, length1, length2) {}
  /**
   * @param {Type} elementType
   * @param {Int32[]} lengths
   * @returns {any[]}
   */
  static UnsafeCreateInstance(elementType, lengths) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @returns {T}
   */
  static UnsafeLoad(array, index) {}
  /**
   * @param {S} instance
   * @returns {R}
   */
  static UnsafeMov(instance) {}
  /**
   * @param {T[]} array
   * @param {number} index
   * @param {T} value
   * @returns {void}
   */
  static UnsafeStore(array, index, value) {}
  /**@type {boolean}*/
  get IsFixedSize() {}
  /**@type {boolean}*/
  get IsReadOnly() {}
  /**@type {boolean}*/
  get IsSynchronized() {}
  /**@type {number}*/
  get Length() {}
  /**@type {number}*/
  get LongLength() {}
  /**@type {number}*/
  get Rank() {}
  /**@type {Object}*/
  get SyncRoot() {}
  /**@type {number}*/
  get Count() {}
  /**@type {boolean}*/
  get IsReadOnly() {}
  /**@type {Object}*/
  get Item() {}
  /**
 * @param {Object} value
 */
  set Item(value) {}
}
class Enum {
  constructor() {
  }
  /**@type {Char[]}*/
  static enumSeperatorCharArray;
  /**@type {string}*/
  static enumSeperator;
  /**
   * @param {Object} target
   * @returns {number}
   */
  CompareTo(target) {}
  /**
   * @param {Object} obj
   * @returns {boolean}
   */
  Equals(obj) {}
  /**
   * @param {Type} enumType
   * @param {Object} value
   * @param {string} format
   * @returns {string}
   */
  static Format(enumType, value, format) {}
  /**
   * @returns {number}
   */
  get_hashcode() {}
  /**
   * @returns {Object}
   */
  get_value() {}
  /**
   * @param {RuntimeType} enumType
   * @param {boolean} getNames
   * @returns {Enum.ValuesAndNames}
   */
  static GetCachedValuesAndNames(enumType, getNames) {}
  /**
   * @returns {number}
   */
  GetHashCode() {}
  /**
   * @param {Type} enumType
   * @param {Object} value
   * @returns {string}
   */
  static GetName(enumType, value) {}
  /**
   * @param {Type} enumType
   * @returns {String[]}
   */
  static GetNames(enumType) {}
  /**
   * @returns {number}
   */
  GetTypeCode() {}
  /**
   * @param {Type} enumType
   * @returns {Type}
   */
  static GetUnderlyingType(enumType) {}
  /**
   * @returns {Object}
   */
  GetValue() {}
  /**
   * @param {Type} enumType
   * @returns {any[]}
   */
  static GetValues(enumType) {}
  /**
   * @param {Enum} flag
   * @returns {boolean}
   */
  HasFlag(flag) {}
  /**
   * @param {RuntimeType} enumType
   * @param {number} value
   * @returns {Object}
   */
  static InternalBoxEnum(enumType, value) {}
  /**
   * @param {Object} o1
   * @param {Object} o2
   * @returns {number}
   */
  static InternalCompareTo(o1, o2) {}
  /**
   * @param {RuntimeType} eT
   * @param {Object} value
   * @returns {string}
   */
  static InternalFlagsFormat(eT, value) {}
  /**
   * @param {RuntimeType} eT
   * @param {Object} value
   * @returns {string}
   */
  static InternalFormat(eT, value) {}
  /**
   * @param {Object} value
   * @returns {string}
   */
  static InternalFormattedHexString(value) {}
  /**
   * @param {RuntimeType} enumType
   * @returns {String[]}
   */
  static InternalGetNames(enumType) {}
  /**
   * @param {RuntimeType} enumType
   * @returns {RuntimeType}
   */
  static InternalGetUnderlyingType(enumType) {}
  /**
   * @param {RuntimeType} enumType
   * @returns {UInt64[]}
   */
  static InternalGetValues(enumType) {}
  /**
   * @param {Enum} flags
   * @returns {boolean}
   */
  InternalHasFlag(flags) {}
  /**
   * @param {Type} enumType
   * @param {Object} value
   * @returns {boolean}
   */
  static IsDefined(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {string} value
   * @returns {Object}
   */
  static Parse(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {string} value
   * @param {boolean} ignoreCase
   * @returns {Object}
   */
  static Parse(enumType, value, ignoreCase) {}
  /**
   * @param {string} value
   * @returns {TEnum}
   */
  static Parse(value) {}
  /**
   * @param {string} value
   * @param {boolean} ignoreCase
   * @returns {TEnum}
   */
  static Parse(value, ignoreCase) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {boolean}
   */
  ToBoolean(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToByte(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {string}
   */
  ToChar(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {Date}
   */
  ToDateTime(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToDecimal(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToDouble(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToInt16(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToInt32(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToInt64(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToSByte(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToSingle(provider) {}
  /**
   * @param {Type} type
   * @param {IFormatProvider} provider
   * @returns {Object}
   */
  ToType(type, provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToUInt16(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToUInt32(provider) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {number}
   */
  ToUInt64(provider) {}
  /**
   * @param {Type} enumType
   * @param {Object} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {number} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {string} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @param {Type} enumType
   * @param {boolean} value
   * @returns {Object}
   */
  static ToObject(enumType, value) {}
  /**
   * @returns {string}
   */
  ToString() {}
  /**
   * @param {string} format
   * @param {IFormatProvider} provider
   * @returns {string}
   */
  ToString(format, provider) {}
  /**
   * @param {string} format
   * @returns {string}
   */
  ToString(format) {}
  /**
   * @param {IFormatProvider} provider
   * @returns {string}
   */
  ToString(provider) {}
  /**
   * @param {Object} value
   * @returns {number}
   */
  static ToUInt64(value) {}
}
class IOFile {
  constructor() {
  }
  /**@type {number}*/
  static MaxByteArrayLength;
  /**@type {Encoding}*/
  static s_UTF8NoBOM;
  /**@type {number}*/
  static DefaultBufferSize;
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @returns {void}
   */
  static AppendAllLines(path, contents) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @param {Encoding} encoding
   * @returns {void}
   */
  static AppendAllLines(path, contents, encoding) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static AppendAllLinesAsync(path, contents, cancellationToken) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static AppendAllLinesAsync(path, contents, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @returns {void}
   */
  static AppendAllText(path, contents) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @param {Encoding} encoding
   * @returns {void}
   */
  static AppendAllText(path, contents, encoding) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static AppendAllTextAsync(path, contents, cancellationToken) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static AppendAllTextAsync(path, contents, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @returns {StreamWriter}
   */
  static AppendText(path) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @returns {StreamReader}
   */
  static AsyncStreamReader(path, encoding) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @param {boolean} append
   * @returns {StreamWriter}
   */
  static AsyncStreamWriter(path, encoding, append) {}
  /**
   * @param {string} sourceFileName
   * @param {string} destFileName
   * @returns {void}
   */
  static Copy(sourceFileName, destFileName) {}
  /**
   * @param {string} sourceFileName
   * @param {string} destFileName
   * @param {boolean} overwrite
   * @returns {void}
   */
  static Copy(sourceFileName, destFileName, overwrite) {}
  /**
   * @param {string} path
   * @returns {FileStream}
   */
  static Create(path) {}
  /**
   * @param {string} path
   * @param {number} bufferSize
   * @returns {FileStream}
   */
  static Create(path, bufferSize) {}
  /**
   * @param {string} path
   * @param {number} bufferSize
   * @param {number} options
   * @returns {FileStream}
   */
  static Create(path, bufferSize, options) {}
  /**
   * @param {string} path
   * @param {number} bufferSize
   * @param {number} options
   * @param {FileSecurity} fileSecurity
   * @returns {FileStream}
   */
  static Create(path, bufferSize, options, fileSecurity) {}
  /**
   * @param {string} path
   * @returns {StreamWriter}
   */
  static CreateText(path) {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static Decrypt(path) {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static Delete(path) {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static Encrypt(path) {}
  /**
   * @param {string} path
   * @returns {boolean}
   */
  static Exists(path) {}
  /**
   * @param {string} path
   * @returns {FileSecurity}
   */
  static GetAccessControl(path) {}
  /**
   * @param {string} path
   * @param {number} includeSections
   * @returns {FileSecurity}
   */
  static GetAccessControl(path, includeSections) {}
  /**
   * @param {string} path
   * @returns {number}
   */
  static GetAttributes(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetCreationTime(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetCreationTimeUtc(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastAccessTime(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastAccessTimeUtc(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastWriteTime(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastWriteTimeUtc(path) {}
  /**
   * @param {Date} dateTime
   * @returns {DateTimeOffset}
   */
  static GetUtcDateTimeOffset(dateTime) {}
  /**
   * @param {FileStream} fs
   * @param {number} count
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalReadAllBytesAsync(fs, count, cancellationToken) {}
  /**
   * @param {FileStream} fs
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalReadAllBytesUnknownLengthAsync(fs, cancellationToken) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @returns {String[]}
   */
  static InternalReadAllLines(path, encoding) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalReadAllLinesAsync(path, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @returns {string}
   */
  static InternalReadAllText(path, encoding) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalReadAllTextAsync(path, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @param {Byte[]} bytes
   * @returns {void}
   */
  static InternalWriteAllBytes(path, bytes) {}
  /**
   * @param {string} path
   * @param {Byte[]} bytes
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalWriteAllBytesAsync(path, bytes, cancellationToken) {}
  /**
   * @param {TextWriter} writer
   * @param {IEnumerable} contents
   * @returns {void}
   */
  static InternalWriteAllLines(writer, contents) {}
  /**
   * @param {TextWriter} writer
   * @param {IEnumerable} contents
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalWriteAllLinesAsync(writer, contents, cancellationToken) {}
  /**
   * @param {StreamWriter} sw
   * @param {string} contents
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static InternalWriteAllTextAsync(sw, contents, cancellationToken) {}
  /**
   * @param {string} sourceFileName
   * @param {string} destFileName
   * @returns {void}
   */
  static Move(sourceFileName, destFileName) {}
  /**
   * @param {string} path
   * @param {number} mode
   * @returns {FileStream}
   */
  static Open(path, mode) {}
  /**
   * @param {string} path
   * @param {number} mode
   * @param {number} access
   * @returns {FileStream}
   */
  static Open(path, mode, access) {}
  /**
   * @param {string} path
   * @param {number} mode
   * @param {number} access
   * @param {number} share
   * @returns {FileStream}
   */
  static Open(path, mode, access, share) {}
  /**
   * @param {string} path
   * @returns {FileStream}
   */
  static OpenRead(path) {}
  /**
   * @param {string} path
   * @returns {StreamReader}
   */
  static OpenText(path) {}
  /**
   * @param {string} path
   * @returns {FileStream}
   */
  static OpenWrite(path) {}
  /**
   * @param {string} path
   * @returns {Byte[]}
   */
  static ReadAllBytes(path) {}
  /**
   * @param {string} path
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static ReadAllBytesAsync(path, cancellationToken) {}
  /**
   * @param {FileStream} fs
   * @returns {Byte[]}
   */
  static ReadAllBytesUnknownLength(fs) {}
  /**
   * @param {string} path
   * @returns {String[]}
   */
  static ReadAllLines(path) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @returns {String[]}
   */
  static ReadAllLines(path, encoding) {}
  /**
   * @param {string} path
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static ReadAllLinesAsync(path, cancellationToken) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static ReadAllLinesAsync(path, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static ReadAllText(path) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @returns {string}
   */
  static ReadAllText(path, encoding) {}
  /**
   * @param {string} path
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static ReadAllTextAsync(path, cancellationToken) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static ReadAllTextAsync(path, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @returns {IEnumerable}
   */
  static ReadLines(path) {}
  /**
   * @param {string} path
   * @param {Encoding} encoding
   * @returns {IEnumerable}
   */
  static ReadLines(path, encoding) {}
  /**
   * @param {string} sourceFileName
   * @param {string} destinationFileName
   * @param {string} destinationBackupFileName
   * @returns {void}
   */
  static Replace(sourceFileName, destinationFileName, destinationBackupFileName) {}
  /**
   * @param {string} sourceFileName
   * @param {string} destinationFileName
   * @param {string} destinationBackupFileName
   * @param {boolean} ignoreMetadataErrors
   * @returns {void}
   */
  static Replace(sourceFileName, destinationFileName, destinationBackupFileName, ignoreMetadataErrors) {}
  /**
   * @param {string} path
   * @param {FileSecurity} fileSecurity
   * @returns {void}
   */
  static SetAccessControl(path, fileSecurity) {}
  /**
   * @param {string} path
   * @param {number} fileAttributes
   * @returns {void}
   */
  static SetAttributes(path, fileAttributes) {}
  /**
   * @param {string} path
   * @param {Date} creationTime
   * @returns {void}
   */
  static SetCreationTime(path, creationTime) {}
  /**
   * @param {string} path
   * @param {Date} creationTimeUtc
   * @returns {void}
   */
  static SetCreationTimeUtc(path, creationTimeUtc) {}
  /**
   * @param {string} path
   * @param {Date} lastAccessTime
   * @returns {void}
   */
  static SetLastAccessTime(path, lastAccessTime) {}
  /**
   * @param {string} path
   * @param {Date} lastAccessTimeUtc
   * @returns {void}
   */
  static SetLastAccessTimeUtc(path, lastAccessTimeUtc) {}
  /**
   * @param {string} path
   * @param {Date} lastWriteTime
   * @returns {void}
   */
  static SetLastWriteTime(path, lastWriteTime) {}
  /**
   * @param {string} path
   * @param {Date} lastWriteTimeUtc
   * @returns {void}
   */
  static SetLastWriteTimeUtc(path, lastWriteTimeUtc) {}
  /**
   * @param {string} path
   * @param {Byte[]} bytes
   * @returns {void}
   */
  static WriteAllBytes(path, bytes) {}
  /**
   * @param {string} path
   * @param {Byte[]} bytes
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static WriteAllBytesAsync(path, bytes, cancellationToken) {}
  /**
   * @param {string} path
   * @param {String[]} contents
   * @returns {void}
   */
  static WriteAllLines(path, contents) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @returns {void}
   */
  static WriteAllLines(path, contents) {}
  /**
   * @param {string} path
   * @param {String[]} contents
   * @param {Encoding} encoding
   * @returns {void}
   */
  static WriteAllLines(path, contents, encoding) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @param {Encoding} encoding
   * @returns {void}
   */
  static WriteAllLines(path, contents, encoding) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static WriteAllLinesAsync(path, contents, cancellationToken) {}
  /**
   * @param {string} path
   * @param {IEnumerable} contents
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static WriteAllLinesAsync(path, contents, encoding, cancellationToken) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @returns {void}
   */
  static WriteAllText(path, contents) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @param {Encoding} encoding
   * @returns {void}
   */
  static WriteAllText(path, contents, encoding) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static WriteAllTextAsync(path, contents, cancellationToken) {}
  /**
   * @param {string} path
   * @param {string} contents
   * @param {Encoding} encoding
   * @param {CancellationToken} cancellationToken
   * @returns {Task}
   */
  static WriteAllTextAsync(path, contents, encoding, cancellationToken) {}
  /**@type {Encoding}*/
  static get UTF8NoBOM() {}
}
class Path {
  constructor() {
  }
  /**@type {Char[]}*/
  static InvalidPathChars;
  /**@type {string}*/
  static AltDirectorySeparatorChar;
  /**@type {string}*/
  static DirectorySeparatorChar;
  /**@type {string}*/
  static PathSeparator;
  /**@type {string}*/
  static DirectorySeparatorStr;
  /**@type {string}*/
  static VolumeSeparatorChar;
  /**@type {Char[]}*/
  static PathSeparatorChars;
  /**@type {boolean}*/
  static dirEqualsVolume;
  /**@type {number}*/
  static MAX_PATH;
  /**@type {Char[]}*/
  static trimEndCharsWindows;
  /**@type {Char[]}*/
  static trimEndCharsUnix;
  /**
   * @param {string} path
   * @returns {string}
   */
  static CanonicalizePath(path) {}
  /**
   * @param {string} path
   * @param {string} extension
   * @returns {string}
   */
  static ChangeExtension(path, extension) {}
  /**
   * @param {string} path
   * @param {boolean} checkAdditional
   * @returns {void}
   */
  static CheckInvalidPathChars(path, checkAdditional) {}
  /**
   * @param {string} searchPattern
   * @returns {void}
   */
  static CheckSearchPattern(searchPattern) {}
  /**
   * @param {string} s
   * @returns {string}
   */
  static CleanPath(s) {}
  /**
   * @param {string} path1
   * @param {string} path2
   * @returns {string}
   */
  static Combine(path1, path2) {}
  /**
   * @param {String[]} paths
   * @returns {string}
   */
  static Combine(paths) {}
  /**
   * @param {string} path1
   * @param {string} path2
   * @param {string} path3
   * @returns {string}
   */
  static Combine(path1, path2, path3) {}
  /**
   * @param {string} path1
   * @param {string} path2
   * @param {string} path3
   * @param {string} path4
   * @returns {string}
   */
  static Combine(path1, path2, path3, path4) {}
  /**
   * @param {string} first
   * @param {string} second
   * @returns {string}
   */
  static CombineInternal(first, second) {}
  /**
   * @param {string} path
   * @returns {number}
   */
  static findExtension(path) {}
  /**
   * @returns {string}
   */
  static get_temp_path() {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetDirectoryName(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {ReadOnlySpan}
   */
  static GetDirectoryName(path) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetExtension(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {ReadOnlySpan}
   */
  static GetExtension(path) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetFileName(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {ReadOnlySpan}
   */
  static GetFileName(path) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetFileNameWithoutExtension(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {ReadOnlySpan}
   */
  static GetFileNameWithoutExtension(path) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetFullPath(path) {}
  /**
   * @param {string} path
   * @param {string} basePath
   * @returns {string}
   */
  static GetFullPath(path, basePath) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetFullPathInternal(path) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetFullPathName(path) {}
  /**
   * @returns {Char[]}
   */
  static GetInvalidFileNameChars() {}
  /**
   * @returns {Char[]}
   */
  static GetInvalidPathChars() {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetPathRoot(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {ReadOnlySpan}
   */
  static GetPathRoot(path) {}
  /**
   * @returns {string}
   */
  static GetRandomFileName() {}
  /**
   * @param {string} relativeTo
   * @param {string} path
   * @returns {string}
   */
  static GetRelativePath(relativeTo, path) {}
  /**
   * @param {string} relativeTo
   * @param {string} path
   * @param {number} comparisonType
   * @returns {string}
   */
  static GetRelativePath(relativeTo, path, comparisonType) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetServerAndShare(path) {}
  /**
   * @returns {string}
   */
  static GetTempFileName() {}
  /**
   * @returns {string}
   */
  static GetTempPath() {}
  /**
   * @param {string} path
   * @returns {boolean}
   */
  static HasExtension(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {boolean}
   */
  static HasExtension(path) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static InsecureGetFullPath(path) {}
  /**
   * @param {string} path1
   * @param {string} path2
   * @returns {string}
   */
  static InternalCombine(path1, path2) {}
  /**
   * @param {string} c
   * @returns {boolean}
   */
  static IsDirectorySeparator(c) {}
  /**
   * @param {string} path
   * @returns {boolean}
   */
  static IsPathFullyQualified(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {boolean}
   */
  static IsPathFullyQualified(path) {}
  /**
   * @param {ReadOnlySpan} path
   * @returns {boolean}
   */
  static IsPathRooted(path) {}
  /**
   * @param {string} path
   * @returns {boolean}
   */
  static IsPathRooted(path) {}
  /**
   * @param {string} subset
   * @param {string} path
   * @returns {boolean}
   */
  static IsPathSubsetOf(subset, path) {}
  /**
   * @param {ReadOnlySpan} path1
   * @param {ReadOnlySpan} path2
   * @returns {string}
   */
  static Join(path1, path2) {}
  /**
   * @param {ReadOnlySpan} path1
   * @param {ReadOnlySpan} path2
   * @param {ReadOnlySpan} path3
   * @returns {string}
   */
  static Join(path1, path2, path3) {}
  /**
   * @param {ReadOnlySpan} first
   * @param {ReadOnlySpan} second
   * @returns {string}
   */
  static JoinInternal(first, second) {}
  /**
   * @param {ReadOnlySpan} first
   * @param {ReadOnlySpan} second
   * @param {ReadOnlySpan} third
   * @returns {string}
   */
  static JoinInternal(first, second, third) {}
  /**
   * @param {ReadOnlySpan} first
   * @param {ReadOnlySpan} second
   * @param {ReadOnlySpan} third
   * @param {ReadOnlySpan} fourth
   * @returns {string}
   */
  static JoinInternal(first, second, third, fourth) {}
  /**
   * @param {string} root
   * @param {string} path
   * @returns {boolean}
   */
  static SameRoot(root, path) {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static Validate(path) {}
  /**
   * @param {string} path
   * @param {string} parameterName
   * @returns {void}
   */
  static Validate(path, parameterName) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static WindowsDriveAdjustment(path) {}
  /**@type {string}*/
  static get DirectorySeparatorCharAsString() {}
  /**@type {boolean}*/
  static get IsCaseSensitive() {}
  /**@type {boolean}*/
  static get IsWindows() {}
  /**@type {number}*/
  static get StringComparison() {}
  /**@type {Char[]}*/
  static get TrimEndChars() {}
}
class Directory {
  constructor() {
  }
  /**
   * @param {string} path
   * @returns {DirectoryInfo}
   */
  static CreateDirectory(path) {}
  /**
   * @param {string} path
   * @param {DirectorySecurity} directorySecurity
   * @returns {DirectoryInfo}
   */
  static CreateDirectory(path, directorySecurity) {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static Delete(path) {}
  /**
   * @param {string} path
   * @param {boolean} recursive
   * @returns {void}
   */
  static Delete(path, recursive) {}
  /**
   * @param {string} path
   * @returns {IEnumerable}
   */
  static EnumerateDirectories(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @returns {IEnumerable}
   */
  static EnumerateDirectories(path, searchPattern) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchOption
   * @returns {IEnumerable}
   */
  static EnumerateDirectories(path, searchPattern, searchOption) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {EnumerationOptions} enumerationOptions
   * @returns {IEnumerable}
   */
  static EnumerateDirectories(path, searchPattern, enumerationOptions) {}
  /**
   * @param {string} path
   * @returns {IEnumerable}
   */
  static EnumerateFiles(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @returns {IEnumerable}
   */
  static EnumerateFiles(path, searchPattern) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchOption
   * @returns {IEnumerable}
   */
  static EnumerateFiles(path, searchPattern, searchOption) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {EnumerationOptions} enumerationOptions
   * @returns {IEnumerable}
   */
  static EnumerateFiles(path, searchPattern, enumerationOptions) {}
  /**
   * @param {string} path
   * @returns {IEnumerable}
   */
  static EnumerateFileSystemEntries(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @returns {IEnumerable}
   */
  static EnumerateFileSystemEntries(path, searchPattern) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchOption
   * @returns {IEnumerable}
   */
  static EnumerateFileSystemEntries(path, searchPattern, searchOption) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {EnumerationOptions} enumerationOptions
   * @returns {IEnumerable}
   */
  static EnumerateFileSystemEntries(path, searchPattern, enumerationOptions) {}
  /**
   * @param {string} path
   * @returns {boolean}
   */
  static Exists(path) {}
  /**
   * @param {string} path
   * @param {number} includeSections
   * @returns {DirectorySecurity}
   */
  static GetAccessControl(path, includeSections) {}
  /**
   * @param {string} path
   * @returns {DirectorySecurity}
   */
  static GetAccessControl(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetCreationTime(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetCreationTimeUtc(path) {}
  /**
   * @returns {string}
   */
  static GetCurrentDirectory() {}
  /**
   * @param {string} path
   * @returns {String[]}
   */
  static GetDirectories(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @returns {String[]}
   */
  static GetDirectories(path, searchPattern) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchOption
   * @returns {String[]}
   */
  static GetDirectories(path, searchPattern, searchOption) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {EnumerationOptions} enumerationOptions
   * @returns {String[]}
   */
  static GetDirectories(path, searchPattern, enumerationOptions) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static GetDirectoryRoot(path) {}
  /**
   * @param {string} path
   * @returns {String[]}
   */
  static GetFiles(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @returns {String[]}
   */
  static GetFiles(path, searchPattern) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchOption
   * @returns {String[]}
   */
  static GetFiles(path, searchPattern, searchOption) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {EnumerationOptions} enumerationOptions
   * @returns {String[]}
   */
  static GetFiles(path, searchPattern, enumerationOptions) {}
  /**
   * @param {string} path
   * @returns {String[]}
   */
  static GetFileSystemEntries(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @returns {String[]}
   */
  static GetFileSystemEntries(path, searchPattern) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchOption
   * @returns {String[]}
   */
  static GetFileSystemEntries(path, searchPattern, searchOption) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {EnumerationOptions} enumerationOptions
   * @returns {String[]}
   */
  static GetFileSystemEntries(path, searchPattern, enumerationOptions) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastAccessTime(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastAccessTimeUtc(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastWriteTime(path) {}
  /**
   * @param {string} path
   * @returns {Date}
   */
  static GetLastWriteTimeUtc(path) {}
  /**
   * @returns {String[]}
   */
  static GetLogicalDrives() {}
  /**
   * @param {string} path
   * @returns {DirectoryInfo}
   */
  static GetParent(path) {}
  /**
   * @returns {string}
   */
  static InsecureGetCurrentDirectory() {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static InsecureSetCurrentDirectory(path) {}
  /**
   * @param {string} path
   * @param {string} searchPattern
   * @param {number} searchTarget
   * @param {EnumerationOptions} options
   * @returns {IEnumerable}
   */
  static InternalEnumeratePaths(path, searchPattern, searchTarget, options) {}
  /**
   * @param {string} path
   * @returns {string}
   */
  static InternalGetDirectoryRoot(path) {}
  /**
   * @param {string} sourceDirName
   * @param {string} destDirName
   * @returns {void}
   */
  static Move(sourceDirName, destDirName) {}
  /**
   * @param {string} path
   * @param {DirectorySecurity} directorySecurity
   * @returns {void}
   */
  static SetAccessControl(path, directorySecurity) {}
  /**
   * @param {string} path
   * @param {Date} creationTime
   * @returns {void}
   */
  static SetCreationTime(path, creationTime) {}
  /**
   * @param {string} path
   * @param {Date} creationTimeUtc
   * @returns {void}
   */
  static SetCreationTimeUtc(path, creationTimeUtc) {}
  /**
   * @param {string} path
   * @returns {void}
   */
  static SetCurrentDirectory(path) {}
  /**
   * @param {string} path
   * @param {Date} lastAccessTime
   * @returns {void}
   */
  static SetLastAccessTime(path, lastAccessTime) {}
  /**
   * @param {string} path
   * @param {Date} lastAccessTimeUtc
   * @returns {void}
   */
  static SetLastAccessTimeUtc(path, lastAccessTimeUtc) {}
  /**
   * @param {string} path
   * @param {Date} lastWriteTime
   * @returns {void}
   */
  static SetLastWriteTime(path, lastWriteTime) {}
  /**
   * @param {string} path
   * @param {Date} lastWriteTimeUtc
   * @returns {void}
   */
  static SetLastWriteTimeUtc(path, lastWriteTimeUtc) {}
}
class IEnumerable {
  constructor() {
  }
  /**
   * @returns {IEnumerator}
   */
  GetEnumerator() {}
}
class IEnumerator {
  constructor() {
  }
  /**
   * @returns {boolean}
   */
  MoveNext() {}
  /**
   * @returns {void}
   */
  Reset() {}
  /**@type {Object}*/
  get Current() {}
}

