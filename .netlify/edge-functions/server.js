var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module, temp) => {
    return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.1.0";
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement7(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement2(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement2(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext3(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef3(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext4(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState4(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef5(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect4(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect4(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback5(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo4(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition2() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement2(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement2(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement2(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement7.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children2 = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children2;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext3;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef3;
        exports.isValidElement = isValidElement2;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback5;
        exports.useContext = useContext4;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect4;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect4;
        exports.useMemo = useMemo4;
        exports.useReducer = useReducer;
        exports.useRef = useRef5;
        exports.useState = useState4;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition2;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require_react());
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
var init_extends = __esm({
  "node_modules/@babel/runtime/helpers/esm/extends.js"() {
    init_react();
  }
});

// node_modules/history/index.js
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var Action;
var init_history = __esm({
  "node_modules/history/index.js"() {
    init_react();
    init_extends();
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
  }
});

// node_modules/react-router/index.js
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    true ? warning(false, message) : void 0;
  }
}
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], pathname);
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes2.forEach((route, index) => {
    let meta2 = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta2.relativePath.startsWith("/")) {
      !meta2.relativePath.startsWith(parentPath) ? true ? invariant(false, 'Absolute route path "' + meta2.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta2.relativePath = meta2.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta2.relativePath]);
    let routesMeta = parentsMeta.concat(meta2);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? true ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta2) => meta2.childrenIndex), b.routesMeta.map((meta2) => meta2.childrenIndex)));
}
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta2 = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta2.relativePath,
      caseSensitive: meta2.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta2.route;
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  true ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    true ? warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
    return value;
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
function useHref(to) {
  !useInRouterContext() ? true ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return (0, import_react.useContext)(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? true ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? true ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0, import_react.useContext)(NavigationContext);
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  let activeRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0, import_react.useCallback)(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
function useOutlet(context) {
  let outlet = (0, import_react.useContext)(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ (0, import_react.createElement)(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to) {
  let {
    matches
  } = (0, import_react.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
  return (0, import_react.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
function useRoutes(routes2, locationArg) {
  !useInRouterContext() ? true ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = (0, import_react.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location2;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (true) {
    true ? warning(parentRoute || matches != null, 'No routes matched location "' + location2.pathname + location2.search + location2.hash + '" ') : void 0;
    true ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location2.pathname + location2.search + location2.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null)
    return null;
  return matches.reduceRight((outlet, match, index) => {
    return /* @__PURE__ */ (0, import_react.createElement)(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0, import_react.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location2 = (0, import_react.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  true ? warning(location2 != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (location2 == null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_react.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ (0, import_react.createElement)(LocationContext.Provider, {
    children,
    value: {
      location: location2,
      navigationType
    }
  }));
}
var import_react, NavigationContext, LocationContext, RouteContext, alreadyWarned, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash, OutletContext;
var init_react_router = __esm({
  "node_modules/react-router/index.js"() {
    init_react();
    init_history();
    init_history();
    import_react = __toESM(require_react());
    NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (true) {
      NavigationContext.displayName = "Navigation";
    }
    LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (true) {
      LocationContext.displayName = "Location";
    }
    RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
      outlet: null,
      matches: []
    });
    if (true) {
      RouteContext.displayName = "Route";
    }
    alreadyWarned = {};
    paramRe = /^:\w+$/;
    dynamicSegmentValue = 3;
    indexRouteValue = 2;
    emptySegmentValue = 1;
    staticSegmentValue = 10;
    splatPenalty = -2;
    isSplat = (s) => s === "*";
    joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    OutletContext = /* @__PURE__ */ (0, import_react.createContext)(null);
  }
});

// node_modules/react-router-dom/index.js
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = (0, import_react2.useState)({
    action: history.action,
    location: history.location
  });
  (0, import_react2.useLayoutEffect)(() => history.listen(setState), [history]);
  return /* @__PURE__ */ (0, import_react2.createElement)(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location2 = useLocation();
  let path = useResolvedPath(to);
  return (0, import_react2.useCallback)((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location2) === createPath(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location2, navigate, path, replaceProp, state, target, to]);
}
var import_react2, _excluded, _excluded2, Link, NavLink;
var init_react_router_dom = __esm({
  "node_modules/react-router-dom/index.js"() {
    init_react();
    import_react2 = __toESM(require_react());
    init_react_router();
    init_react_router();
    _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
    _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    if (true) {
      HistoryRouter.displayName = "unstable_HistoryRouter";
    }
    Link = /* @__PURE__ */ (0, import_react2.forwardRef)(function LinkWithRef(_ref4, ref) {
      let {
        onClick,
        reloadDocument,
        replace = false,
        state,
        target,
        to
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
      let href = useHref(to);
      let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented && !reloadDocument) {
          internalOnClick(event);
        }
      }
      return /* @__PURE__ */ (0, import_react2.createElement)("a", _extends3({}, rest, {
        href,
        onClick: handleClick,
        ref,
        target
      }));
    });
    if (true) {
      Link.displayName = "Link";
    }
    NavLink = /* @__PURE__ */ (0, import_react2.forwardRef)(function NavLinkWithRef(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
      let location2 = useLocation();
      let path = useResolvedPath(to);
      let locationPathname = location2.pathname;
      let toPathname = path.pathname;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        toPathname = toPathname.toLowerCase();
      }
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp({
          isActive
        });
      } else {
        className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp({
        isActive
      }) : styleProp;
      return /* @__PURE__ */ (0, import_react2.createElement)(Link, _extends3({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to
      }), typeof children === "function" ? children({
        isActive
      }) : children);
    });
    if (true) {
      NavLink.displayName = "NavLink";
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js
var require_react_dom_server_legacy_browser_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.browser.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var ReactVersion = "18.1.0";
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function scheduleWork(callback) {
          callback();
        }
        function beginWriting(destination) {
        }
        var prevWasCommentSegmenter = false;
        function writeChunk(destination, chunk) {
          writeChunkAndReturn(destination, chunk);
        }
        function writeChunkAndReturn(destination, chunk) {
          if (prevWasCommentSegmenter) {
            prevWasCommentSegmenter = false;
            if (chunk[0] !== "<") {
              destination.push("<!-- -->");
            }
          }
          if (chunk === "<!-- -->") {
            prevWasCommentSegmenter = true;
            return true;
          }
          return destination.push(chunk);
        }
        function completeWriting(destination) {
        }
        function close(destination) {
          destination.push(null);
        }
        function stringToChunk(content) {
          return content;
        }
        function stringToPrecomputedChunk(content) {
          return content;
        }
        function closeWithError(destination, error2) {
          destination.destroy(error2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkHtmlStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ariaProperties = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern, "ms-")));
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          {
            checkHtmlStringCoercion(string);
          }
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var startInlineScript = stringToPrecomputedChunk("<script>");
        var endInlineScript = stringToPrecomputedChunk("<\/script>");
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
        function escapeBootstrapScriptContent(scriptText) {
          {
            checkHtmlStringCoercion(scriptText);
          }
          return ("" + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix2, s, suffix) {
          return "" + prefix2 + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
          var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
          var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
          var bootstrapChunks = [];
          if (bootstrapScriptContent !== void 0) {
            bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
          }
          if (bootstrapScripts !== void 0) {
            for (var i = 0; i < bootstrapScripts.length; i++) {
              bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
            }
          }
          if (bootstrapModules !== void 0) {
            for (var _i = 0; _i < bootstrapModules.length; _i++) {
              bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
            }
          }
          return {
            bootstrapChunks,
            startInlineScript: inlineScriptWithNonce,
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: idPrefix + "B:",
            idPrefix,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: false,
            sentCompleteBoundaryFunction: false,
            sentClientRenderFunction: false
          };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue) {
          return {
            insertionMode,
            selectedValue
          };
        }
        function getChildFormatContext(parentContext, type, props) {
          switch (type) {
            case "select":
              return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
            case "svg":
              return createFormatContext(SVG_MODE, null);
            case "math":
              return createFormatContext(MATHML_MODE, null);
            case "foreignObject":
              return createFormatContext(HTML_MODE, null);
            case "table":
              return createFormatContext(HTML_TABLE_MODE, null);
            case "thead":
            case "tbody":
            case "tfoot":
              return createFormatContext(HTML_TABLE_BODY_MODE, null);
            case "colgroup":
              return createFormatContext(HTML_COLGROUP_MODE, null);
            case "tr":
              return createFormatContext(HTML_TABLE_ROW_MODE, null);
          }
          if (parentContext.insertionMode >= HTML_TABLE_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          if (parentContext.insertionMode === ROOT_HTML_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
          var generatedID = responseState.nextSuspenseID++;
          return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
          var idPrefix = responseState.idPrefix;
          var id = ":" + idPrefix + "R" + treeId;
          if (localId > 0) {
            id += "H" + localId.toString(32);
          }
          return id + ":";
        }
        function encodeHTMLTextNode(text) {
          return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk("<!-- -->");
        function pushTextInstance(target, text, responseState) {
          if (text === "") {
            return;
          }
          target.push(stringToChunk(encodeHTMLTextNode(text)), textSeparator);
        }
        var styleNameCache = /* @__PURE__ */ new Map();
        function processStyleName(styleName) {
          var chunk = styleNameCache.get(styleName);
          if (chunk !== void 0) {
            return chunk;
          }
          var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
          styleNameCache.set(styleName, result);
          return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(":");
        var styleSeparator = stringToPrecomputedChunk(";");
        function pushStyle(target, responseState, style) {
          if (typeof style !== "object") {
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
          }
          var isFirst = true;
          for (var styleName in style) {
            if (!hasOwnProperty.call(style, styleName)) {
              continue;
            }
            var styleValue = style[styleName];
            if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
              continue;
            }
            var nameChunk = void 0;
            var valueChunk = void 0;
            var isCustomProperty = styleName.indexOf("--") === 0;
            if (isCustomProperty) {
              nameChunk = stringToChunk(escapeTextForBrowser(styleName));
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            } else {
              {
                warnValidStyle$1(styleName, styleValue);
              }
              nameChunk = processStyleName(styleName);
              if (typeof styleValue === "number") {
                if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                  valueChunk = stringToChunk(styleValue + "px");
                } else {
                  valueChunk = stringToChunk("" + styleValue);
                }
              } else {
                {
                  checkCSSPropertyStringCoercion(styleValue, styleName);
                }
                valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
              }
            }
            if (isFirst) {
              isFirst = false;
              target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
            } else {
              target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
          if (!isFirst) {
            target.push(attributeEnd);
          }
        }
        var attributeSeparator = stringToPrecomputedChunk(" ");
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
          switch (name) {
            case "style": {
              pushStyle(target, responseState, value);
              return;
            }
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return;
          }
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                if (!propertyInfo.acceptsBooleans) {
                  return;
                }
              }
            }
            var attributeName = propertyInfo.attributeName;
            var attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                if (value) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                }
                return;
              case OVERLOADED_BOOLEAN:
                if (value === true) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                } else if (value === false)
                  ;
                else {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                return;
              case NUMERIC:
                if (!isNaN(value)) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              case POSITIVE_NUMERIC:
                if (!isNaN(value) && value >= 1) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              default:
                if (propertyInfo.sanitizeURL) {
                  {
                    checkAttributeStringCoercion(value, attributeName);
                  }
                  value = "" + value;
                  sanitizeURL(value);
                }
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-") {
                  return;
                }
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
        var endOfStartTag = stringToPrecomputedChunk(">");
        var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
        function pushInnerHTML(target, innerHTML, children) {
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
          {
            var value = props[propName];
            if (value != null) {
              var array = isArray(value);
              if (props.multiple && !array) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
              } else if (!props.multiple && array) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
              }
            }
          }
        }
        function pushStartSelect(target, props, responseState) {
          {
            checkControlledValueProps("select", props);
            checkSelectProp(props, "value");
            checkSelectProp(props, "defaultValue");
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultSelectValue = true;
            }
          }
          target.push(startChunkForTag("select"));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function flattenOptionChildren(children) {
          var content = "";
          React6.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
              }
            }
          });
          return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
          var selectedValue = formatContext.selectedValue;
          target.push(startChunkForTag("option"));
          var children = null;
          var value = null;
          var selected = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "selected":
                  selected = propValue;
                  {
                    if (!didWarnSelectedSetOnOption) {
                      error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                      didWarnSelectedSetOnOption = true;
                    }
                  }
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "value":
                  value = propValue;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (selectedValue != null) {
            var stringValue;
            if (value !== null) {
              {
                checkAttributeStringCoercion(value, "value");
              }
              stringValue = "" + value;
            } else {
              {
                if (innerHTML !== null) {
                  if (!didWarnInvalidOptionInnerHTML) {
                    didWarnInvalidOptionInnerHTML = true;
                    error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                  }
                }
              }
              stringValue = flattenOptionChildren(children);
            }
            if (isArray(selectedValue)) {
              for (var i = 0; i < selectedValue.length; i++) {
                {
                  checkAttributeStringCoercion(selectedValue[i], "value");
                }
                var v = "" + selectedValue[i];
                if (v === stringValue) {
                  target.push(selectedMarkerAttribute);
                  break;
                }
              }
            } else {
              {
                checkAttributeStringCoercion(selectedValue, "select.value");
              }
              if ("" + selectedValue === stringValue) {
                target.push(selectedMarkerAttribute);
              }
            }
          } else if (selected) {
            target.push(selectedMarkerAttribute);
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function pushInput(target, props, responseState) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultInputValue = true;
            }
          }
          target.push(startChunkForTag("input"));
          var value = null;
          var defaultValue = null;
          var checked = null;
          var defaultChecked = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                case "defaultChecked":
                  defaultChecked = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "checked":
                  checked = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (checked !== null) {
            pushAttribute(target, responseState, "checked", checked);
          } else if (defaultChecked !== null) {
            pushAttribute(target, responseState, "checked", defaultChecked);
          }
          if (value !== null) {
            pushAttribute(target, responseState, "value", value);
          } else if (defaultValue !== null) {
            pushAttribute(target, responseState, "value", defaultValue);
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartTextArea(target, props, responseState) {
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
              error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultTextareaValue = true;
            }
          }
          target.push(startChunkForTag("textarea"));
          var value = null;
          var defaultValue = null;
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (value === null && defaultValue !== null) {
            value = defaultValue;
          }
          target.push(endOfStartTag);
          if (children != null) {
            {
              error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            if (value != null) {
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
            if (isArray(children)) {
              if (children.length > 1) {
                throw new Error("<textarea> can only have at most one child.");
              }
              {
                checkHtmlStringCoercion(children[0]);
              }
              value = "" + children[0];
            }
            {
              checkHtmlStringCoercion(children);
            }
            value = "" + children;
          }
          if (typeof value === "string" && value[0] === "\n") {
            target.push(leadingNewline);
          }
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            target.push(stringToChunk(encodeHTMLTextNode("" + value)));
          }
          return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartMenuItem(target, props, responseState) {
          target.push(startChunkForTag("menuitem"));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          return null;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          if (typeof children === "string") {
            target.push(stringToChunk(encodeHTMLTextNode(children)));
            return null;
          }
          return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "style":
                  pushStyle(target, responseState, propValue);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                    target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                  }
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        var leadingNewline = stringToPrecomputedChunk("\n");
        function pushStartPreformattedElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
                target.push(leadingNewline, stringToChunk(html));
              } else {
                {
                  checkHtmlStringCoercion(html);
                }
                target.push(stringToChunk("" + html));
              }
            }
          }
          if (typeof children === "string" && children[0] === "\n") {
            target.push(leadingNewline);
          }
          return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = /* @__PURE__ */ new Map();
        function startChunkForTag(tag) {
          var tagStartChunk = validatedTagCache.get(tag);
          if (tagStartChunk === void 0) {
            if (!VALID_TAG_REGEX.test(tag)) {
              throw new Error("Invalid tag: " + tag);
            }
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
          }
          return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
        function pushStartInstance(target, type, props, responseState, formatContext) {
          {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
            if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
              if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
          }
          switch (type) {
            case "select":
              return pushStartSelect(target, props, responseState);
            case "option":
              return pushStartOption(target, props, responseState, formatContext);
            case "textarea":
              return pushStartTextArea(target, props, responseState);
            case "input":
              return pushInput(target, props, responseState);
            case "menuitem":
              return pushStartMenuItem(target, props, responseState);
            case "listing":
            case "pre": {
              return pushStartPreformattedElement(target, props, type, responseState);
            }
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              return pushSelfClosing(target, props, type, responseState);
            }
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": {
              return pushStartGenericElement(target, props, type, responseState);
            }
            case "html": {
              if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
              }
              return pushStartGenericElement(target, props, type, responseState);
            }
            default: {
              if (type.indexOf("-") === -1 && typeof props.is !== "string") {
                return pushStartGenericElement(target, props, type, responseState);
              } else {
                return pushStartCustomElement(target, props, type, responseState);
              }
            }
          }
        }
        var endTag1 = stringToPrecomputedChunk("</");
        var endTag2 = stringToPrecomputedChunk(">");
        function pushEndInstance(target, type, props) {
          switch (type) {
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              break;
            }
            default: {
              target.push(endTag1, stringToChunk(type), endTag2);
            }
          }
        }
        function writeCompletedRoot(destination, responseState) {
          var bootstrapChunks = responseState.bootstrapChunks;
          var i = 0;
          for (; i < bootstrapChunks.length - 1; i++) {
            writeChunk(destination, bootstrapChunks[i]);
          }
          if (i < bootstrapChunks.length) {
            return writeChunkAndReturn(destination, bootstrapChunks[i]);
          }
          return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
          writeChunk(destination, placeholder1);
          writeChunk(destination, responseState.placeholderPrefix);
          var formattedID = stringToChunk(id.toString(16));
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
        var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
          writeChunk(destination, startPendingSuspenseBoundary1);
          if (id === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, id);
          return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk("</div>");
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk("</svg>");
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk("</math>");
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk("</table>");
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
        function writeStartSegment(destination, responseState, formatContext, id) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              writeChunk(destination, startSegmentHTML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentHTML2);
            }
            case SVG_MODE: {
              writeChunk(destination, startSegmentSVG);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentSVG2);
            }
            case MATHML_MODE: {
              writeChunk(destination, startSegmentMathML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentMathML2);
            }
            case HTML_TABLE_MODE: {
              writeChunk(destination, startSegmentTable);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTable2);
            }
            case HTML_TABLE_BODY_MODE: {
              writeChunk(destination, startSegmentTableBody);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableBody2);
            }
            case HTML_TABLE_ROW_MODE: {
              writeChunk(destination, startSegmentTableRow);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableRow2);
            }
            case HTML_COLGROUP_MODE: {
              writeChunk(destination, startSegmentColGroup);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentColGroup2);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        function writeEndSegment(destination, formatContext) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              return writeChunkAndReturn(destination, endSegmentHTML);
            }
            case SVG_MODE: {
              return writeChunkAndReturn(destination, endSegmentSVG);
            }
            case MATHML_MODE: {
              return writeChunkAndReturn(destination, endSegmentMathML);
            }
            case HTML_TABLE_MODE: {
              return writeChunkAndReturn(destination, endSegmentTable);
            }
            case HTML_TABLE_BODY_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableBody);
            }
            case HTML_TABLE_ROW_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableRow);
            }
            case HTML_COLGROUP_MODE: {
              return writeChunkAndReturn(destination, endSegmentColGroup);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
        var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
        var clientRenderFunction = 'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()}';
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteSegmentFunction) {
            responseState.sentCompleteSegmentFunction = true;
            writeChunk(destination, completeSegmentScript1Full);
          } else {
            writeChunk(destination, completeSegmentScript1Partial);
          }
          writeChunk(destination, responseState.segmentPrefix);
          var formattedID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, formattedID);
          writeChunk(destination, completeSegmentScript2);
          writeChunk(destination, responseState.placeholderPrefix);
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, completeSegmentScript3);
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteBoundaryFunction) {
            responseState.sentCompleteBoundaryFunction = true;
            writeChunk(destination, completeBoundaryScript1Full);
          } else {
            writeChunk(destination, completeBoundaryScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          var formattedContentID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, boundaryID);
          writeChunk(destination, completeBoundaryScript2);
          writeChunk(destination, responseState.segmentPrefix);
          writeChunk(destination, formattedContentID);
          return writeChunkAndReturn(destination, completeBoundaryScript3);
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript2 = stringToPrecomputedChunk('")<\/script>');
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentClientRenderFunction) {
            responseState.sentClientRenderFunction = true;
            writeChunk(destination, clientRenderScript1Full);
          } else {
            writeChunk(destination, clientRenderScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, boundaryID);
          return writeChunkAndReturn(destination, clientRenderScript2);
        }
        function createResponseState$1(generateStaticMarkup, identifierPrefix) {
          var responseState = createResponseState(identifierPrefix, void 0);
          return {
            bootstrapChunks: responseState.bootstrapChunks,
            startInlineScript: responseState.startInlineScript,
            placeholderPrefix: responseState.placeholderPrefix,
            segmentPrefix: responseState.segmentPrefix,
            boundaryPrefix: responseState.boundaryPrefix,
            idPrefix: responseState.idPrefix,
            nextSuspenseID: responseState.nextSuspenseID,
            sentCompleteSegmentFunction: responseState.sentCompleteSegmentFunction,
            sentCompleteBoundaryFunction: responseState.sentCompleteBoundaryFunction,
            sentClientRenderFunction: responseState.sentClientRenderFunction,
            generateStaticMarkup
          };
        }
        function createRootFormatContext() {
          return {
            insertionMode: HTML_MODE,
            selectedValue: null
          };
        }
        function pushTextInstance$1(target, text, responseState) {
          if (responseState.generateStaticMarkup) {
            target.push(stringToChunk(escapeTextForBrowser(text)));
          } else {
            pushTextInstance(target, text);
          }
        }
        function writeStartCompletedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeStartCompletedSuspenseBoundary(destination);
        }
        function writeStartClientRenderedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeStartClientRenderedSuspenseBoundary(destination);
        }
        function writeEndCompletedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeEndCompletedSuspenseBoundary(destination);
        }
        function writeEndClientRenderedSuspenseBoundary$1(destination, responseState) {
          if (responseState.generateStaticMarkup) {
            return true;
          }
          return writeEndClientRenderedSuspenseBoundary(destination);
        }
        var assign = Object.assign;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
          {
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            return context;
          }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
          {
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              }
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return assign({}, parentContext, childContext);
          }
        }
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
          {
            prev.context._currentValue2 = prev.parentValue;
          }
        }
        function pushNode(next) {
          {
            next.context._currentValue2 = next.value;
          }
        }
        function popToNearestCommonAncestor(prev, next) {
          if (prev === next)
            ;
          else {
            popNode(prev);
            var parentPrev = prev.parent;
            var parentNext = next.parent;
            if (parentPrev === null) {
              if (parentNext !== null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
            } else {
              if (parentNext === null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
              popToNearestCommonAncestor(parentPrev, parentNext);
            }
            pushNode(next);
          }
        }
        function popAllPrevious(prev) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev !== null) {
            popAllPrevious(parentPrev);
          }
        }
        function pushAllNext(next) {
          var parentNext = next.parent;
          if (parentNext !== null) {
            pushAllNext(parentNext);
          }
          pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (parentPrev.depth === next.depth) {
            popToNearestCommonAncestor(parentPrev, next);
          } else {
            popPreviousToCommonLevel(parentPrev, next);
          }
        }
        function popNextToCommonLevel(prev, next) {
          var parentNext = next.parent;
          if (parentNext === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (prev.depth === parentNext.depth) {
            popToNearestCommonAncestor(prev, parentNext);
          } else {
            popNextToCommonLevel(prev, parentNext);
          }
          pushNode(next);
        }
        function switchContext(newSnapshot) {
          var prev = currentActiveSnapshot;
          var next = newSnapshot;
          if (prev !== next) {
            if (prev === null) {
              pushAllNext(next);
            } else if (next === null) {
              popAllPrevious(prev);
            } else if (prev.depth === next.depth) {
              popToNearestCommonAncestor(prev, next);
            } else if (prev.depth > next.depth) {
              popPreviousToCommonLevel(prev, next);
            } else {
              popNextToCommonLevel(prev, next);
            }
            currentActiveSnapshot = next;
          }
        }
        function pushProvider(context, nextValue) {
          var prevValue;
          {
            prevValue = context._currentValue2;
            context._currentValue2 = nextValue;
            {
              if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer2 = rendererSigil;
            }
          }
          var prevNode = currentActiveSnapshot;
          var newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context,
            parentValue: prevValue,
            value: nextValue
          };
          currentActiveSnapshot = newNode;
          return newNode;
        }
        function popProvider(context) {
          var prevSnapshot = currentActiveSnapshot;
          if (prevSnapshot === null) {
            throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          }
          {
            if (prevSnapshot.context !== context) {
              error("The parent context is not the expected context. This is probably a bug in React.");
            }
          }
          {
            var _value = prevSnapshot.parentValue;
            if (_value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
              prevSnapshot.context._currentValue2 = prevSnapshot.context._defaultValue;
            } else {
              prevSnapshot.context._currentValue2 = _value;
            }
            {
              if (context._currentRenderer2 !== void 0 && context._currentRenderer2 !== null && context._currentRenderer2 !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer2 = rendererSigil;
            }
          }
          return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
          return currentActiveSnapshot;
        }
        function readContext(context) {
          var value = context._currentValue2;
          return value;
        }
        function get(key) {
          return key._reactInternals;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
          didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
          var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentNameFromType(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        var classComponentUpdater = {
          isMounted: function(inst) {
            return false;
          },
          enqueueSetState: function(inst, payload, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "setState");
            } else {
              internals.queue.push(payload);
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var internals = get(inst);
            internals.replace = true;
            internals.queue = [payload];
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          },
          enqueueForceUpdate: function(inst, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "forceUpdate");
            } else {
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
          return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            context = maskedLegacyContext;
          }
          var instance = new ctor(props, context);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentNameFromType(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
          {
            var name = getComponentNameFromType(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function callComponentWillMount(type, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!didWarnAboutDeprecatedWillMount[componentName]) {
                  warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", componentName);
                  didWarnAboutDeprecatedWillMount[componentName] = true;
                }
              }
            }
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
          if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
            var oldQueue = internalInstance.queue;
            var oldReplace = internalInstance.replace;
            internalInstance.queue = null;
            internalInstance.replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];
                var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                if (partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = assign({}, nextState, partialState);
                  } else {
                    assign(nextState, partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            internalInstance.queue = null;
          }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
          {
            checkClassInstance(instance, ctor, newProps);
          }
          var initialState = instance.state !== void 0 ? instance.state : null;
          instance.updater = classComponentUpdater;
          instance.props = newProps;
          instance.state = initialState;
          var internalInstance = {
            queue: [],
            replace: false
          };
          set(instance, internalInstance);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            instance.context = maskedLegacyContext;
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(ctor, instance);
            processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
          }
        }
        var emptyTreeContext = {
          id: 1,
          overflow: ""
        };
        function getTreeId(context) {
          var overflow = context.overflow;
          var idWithLeadingBit = context.id;
          var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
          return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
          var baseIdWithLeadingBit = baseContext.id;
          var baseOverflow = baseContext.overflow;
          var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
          var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
          var slot = index + 1;
          var length = getBitLength(totalChildren) + baseLength;
          if (length > 30) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            var newOverflowBits = (1 << numberOfOverflowBits) - 1;
            var newOverflow = (baseId & newOverflowBits).toString(32);
            var restOfBaseId = baseId >> numberOfOverflowBits;
            var restOfBaseLength = baseLength - numberOfOverflowBits;
            var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
            var restOfNewBits = slot << restOfBaseLength;
            var id = restOfNewBits | restOfBaseId;
            var overflow = newOverflow + baseOverflow;
            return {
              id: 1 << restOfLength | id,
              overflow
            };
          } else {
            var newBits = slot << baseLength;
            var _id = newBits | baseId;
            var _overflow = baseOverflow;
            return {
              id: 1 << length | _id,
              overflow: _overflow
            };
          }
        }
        function getBitLength(number) {
          return 32 - clz32(number);
        }
        function getLeadingBit(id) {
          return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x) {
          var asUint = x >>> 0;
          if (asUint === 0) {
            return 32;
          }
          return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (currentlyRenderingComponent === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
            if (objectIs(nextDeps[i], prevDeps[i])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            throw new Error("Rendered more hooks than during the previous render");
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          currentlyRenderingTask = task;
          {
            isInHookUserCodeInDev = false;
          }
          localIdCounter = 0;
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            localIdCounter = 0;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function checkDidRenderIdHook() {
          var didRenderIdHook = localIdCounter !== 0;
          return didRenderIdHook;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          currentlyRenderingTask = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext$1(context) {
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return readContext(context);
        }
        function useContext4(context) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          return readContext(context);
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState4(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo4(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef5(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect4(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback5(callback, deps) {
          return useMemo4(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          if (getServerSnapshot === void 0) {
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
          }
          return getServerSnapshot();
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function unsupportedStartTransition() {
          throw new Error("startTransition cannot be called during server rendering.");
        }
        function useTransition2() {
          resolveCurrentlyRenderingComponent();
          return [false, unsupportedStartTransition];
        }
        function useId() {
          var task = currentlyRenderingTask;
          var treeId = getTreeId(task.treeContext);
          var responseState = currentResponseState;
          if (responseState === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
          }
          var localId = localIdCounter++;
          return makeId(responseState, treeId, localId);
        }
        function noop() {
        }
        var Dispatcher = {
          readContext: readContext$1,
          useContext: useContext4,
          useMemo: useMemo4,
          useReducer,
          useRef: useRef5,
          useState: useState4,
          useInsertionEffect: noop,
          useLayoutEffect: useLayoutEffect4,
          useCallback: useCallback5,
          useImperativeHandle: noop,
          useEffect: noop,
          useDebugValue: noop,
          useDeferredValue,
          useTransition: useTransition2,
          useId,
          useMutableSource,
          useSyncExternalStore
        };
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
          currentResponseState = responseState;
        }
        function getStackByComponentStackNode(componentStack) {
          try {
            var info = "";
            var node = componentStack;
            do {
              switch (node.tag) {
                case 0:
                  info += describeBuiltInComponentFrame(node.type, null, null);
                  break;
                case 1:
                  info += describeFunctionComponentFrame(node.type, null, null);
                  break;
                case 2:
                  info += describeClassComponentFrame(node.type, null, null);
                  break;
              }
              node = node.parent;
            } while (node);
            return info;
          } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error2) {
          console["error"](error2);
        }
        function noop$1() {
        }
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError2, onAllReady, onShellReady, onShellError, onFatalError) {
          var pingedTasks = [];
          var abortSet = /* @__PURE__ */ new Set();
          var request = {
            destination: null,
            responseState,
            progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
            status: OPEN,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: abortSet,
            pingedTasks,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: onError2 === void 0 ? defaultErrorHandler : onError2,
            onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
            onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
            onShellError: onShellError === void 0 ? noop$1 : onShellError,
            onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
          };
          var rootSegment = createPendingSegment(request, 0, null, rootFormatContext);
          rootSegment.parentFlushed = true;
          var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
          pingedTasks.push(rootTask);
          return request;
        }
        function pingTask(request, task) {
          var pingedTasks = request.pingedTasks;
          pingedTasks.push(task);
          if (pingedTasks.length === 1) {
            scheduleWork(function() {
              return performWork(request);
            });
          }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
          return {
            id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
            rootSegmentID: -1,
            parentFlushed: false,
            pendingTasks: 0,
            forceClientRender: false,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks
          };
        }
        function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
          request.allPendingTasks++;
          if (blockedBoundary === null) {
            request.pendingRootTasks++;
          } else {
            blockedBoundary.pendingTasks++;
          }
          var task = {
            node,
            ping: function() {
              return pingTask(request, task);
            },
            blockedBoundary,
            blockedSegment,
            abortSet,
            legacyContext,
            context,
            treeContext
          };
          {
            task.componentStack = null;
          }
          abortSet.add(task);
          return task;
        }
        function createPendingSegment(request, index, boundary, formatContext) {
          return {
            status: PENDING,
            id: -1,
            index,
            parentFlushed: false,
            chunks: [],
            children: [],
            formatContext,
            boundary
          };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
          {
            if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
              return "";
            }
            return getStackByComponentStackNode(currentTaskInDEV.componentStack);
          }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 0,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushFunctionComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 1,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushClassComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 2,
              parent: task.componentStack,
              type
            };
          }
        }
        function popComponentStackInDEV(task) {
          {
            if (task.componentStack === null) {
              error("Unexpectedly popped too many stack frames. This is a bug in React.");
            } else {
              task.componentStack = task.componentStack.parent;
            }
          }
        }
        function logRecoverableError(request, error2) {
          var onError2 = request.onError;
          onError2(error2);
        }
        function fatalError(request, error2) {
          var onShellError = request.onShellError;
          onShellError(error2);
          var onFatalError = request.onFatalError;
          onFatalError(error2);
          if (request.destination !== null) {
            request.status = CLOSED;
            closeWithError(request.destination, error2);
          } else {
            request.status = CLOSING;
            request.fatalError = error2;
          }
        }
        function renderSuspenseBoundary(request, task, props) {
          pushBuiltInComponentStackInDEV(task, "Suspense");
          var parentBoundary = task.blockedBoundary;
          var parentSegment = task.blockedSegment;
          var fallback = props.fallback;
          var content = props.children;
          var fallbackAbortSet = /* @__PURE__ */ new Set();
          var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
          var insertionIndex = parentSegment.chunks.length;
          var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext);
          parentSegment.children.push(boundarySegment);
          var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext);
          contentRootSegment.parentFlushed = true;
          task.blockedBoundary = newBoundary;
          task.blockedSegment = contentRootSegment;
          try {
            renderNode(request, task, content);
            contentRootSegment.status = COMPLETED;
            queueCompletedSegment(newBoundary, contentRootSegment);
            if (newBoundary.pendingTasks === 0) {
              popComponentStackInDEV(task);
              return;
            }
          } catch (error2) {
            contentRootSegment.status = ERRORED;
            logRecoverableError(request, error2);
            newBoundary.forceClientRender = true;
          } finally {
            task.blockedBoundary = parentBoundary;
            task.blockedSegment = parentSegment;
          }
          var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
          {
            suspendedFallbackTask.componentStack = task.componentStack;
          }
          request.pingedTasks.push(suspendedFallbackTask);
          popComponentStackInDEV(task);
        }
        function renderHostElement(request, task, type, props) {
          pushBuiltInComponentStackInDEV(task, type);
          var segment = task.blockedSegment;
          var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
          var prevContext = segment.formatContext;
          segment.formatContext = getChildFormatContext(prevContext, type, props);
          renderNode(request, task, children);
          segment.formatContext = prevContext;
          pushEndInstance(segment.chunks, type);
          popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, Component, props, secondArg) {
          var componentIdentity = {};
          prepareToUseHooks(task, componentIdentity);
          var result = Component(props, secondArg);
          return finishHooks(Component, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component, props) {
          var nextChildren = instance.render();
          {
            if (instance.props !== props) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          {
            var childContextTypes = Component.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              var previousContext = task.legacyContext;
              var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
              task.legacyContext = mergedContext;
              renderNodeDestructive(request, task, nextChildren);
              task.legacyContext = previousContext;
              return;
            }
          }
          renderNodeDestructive(request, task, nextChildren);
        }
        function renderClassComponent(request, task, Component, props) {
          pushClassComponentStackInDEV(task, Component);
          var maskedContext = getMaskedContext(Component, task.legacyContext);
          var instance = constructClassInstance(Component, props, maskedContext);
          mountClassInstance(instance, Component, props, maskedContext);
          finishClassComponent(request, task, instance, Component, props);
          popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, Component, props) {
          var legacyContext;
          {
            legacyContext = getMaskedContext(Component, task.legacyContext);
          }
          pushFunctionComponentStackInDEV(task, Component);
          {
            if (Component.prototype && typeof Component.prototype.render === "function") {
              var componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
          }
          var value = renderWithHooks(request, task, Component, props, legacyContext);
          var hasId = checkDidRenderIdHook();
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            {
              var _componentName2 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            mountClassInstance(value, Component, props, legacyContext);
            finishClassComponent(request, task, value, Component, props);
          } else {
            {
              validateFunctionComponentInDev(Component);
            }
            if (hasId) {
              var prevTreeContext = task.treeContext;
              var totalChildren = 1;
              var index = 0;
              task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
              try {
                renderNodeDestructive(request, task, value);
              } finally {
                task.treeContext = prevTreeContext;
              }
            } else {
              renderNodeDestructive(request, task, value);
            }
          }
          popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component) {
          {
            if (Component) {
              if (Component.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
              }
            }
            if (typeof Component.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component.contextType === "object" && Component.contextType !== null) {
              var _componentName4 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        function resolveDefaultProps(Component, baseProps) {
          if (Component && Component.defaultProps) {
            var props = assign({}, baseProps);
            var defaultProps = Component.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        function renderForwardRef(request, task, type, props, ref) {
          pushFunctionComponentStackInDEV(task, type.render);
          var children = renderWithHooks(request, task, type.render, props, ref);
          var hasId = checkDidRenderIdHook();
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, children);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, children);
          }
          popComponentStackInDEV(task);
        }
        function renderMemo(request, task, type, props, ref) {
          var innerType = type.type;
          var resolvedProps = resolveDefaultProps(innerType, props);
          renderElement(request, task, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var render = props.children;
          {
            if (typeof render !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          var newValue = readContext(context);
          var newChildren = render(newValue);
          renderNodeDestructive(request, task, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
          var context = type._context;
          var value = props.value;
          var children = props.children;
          var prevSnapshot;
          {
            prevSnapshot = task.context;
          }
          task.context = pushProvider(context, value);
          renderNodeDestructive(request, task, children);
          task.context = popProvider(context);
          {
            if (prevSnapshot !== task.context) {
              error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
            }
          }
        }
        function renderLazyComponent(request, task, lazyComponent, props, ref) {
          pushBuiltInComponentStackInDEV(task, "Lazy");
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component = init(payload);
          var resolvedProps = resolveDefaultProps(Component, props);
          renderElement(request, task, Component, resolvedProps, ref);
          popComponentStackInDEV(task);
        }
        function renderElement(request, task, type, props, ref) {
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              renderClassComponent(request, task, type, props);
              return;
            } else {
              renderIndeterminateComponent(request, task, type, props);
              return;
            }
          }
          if (typeof type === "string") {
            renderHostElement(request, task, type, props);
            return;
          }
          switch (type) {
            case REACT_LEGACY_HIDDEN_TYPE:
            case REACT_DEBUG_TRACING_MODE_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE: {
              renderNodeDestructive(request, task, props.children);
              return;
            }
            case REACT_SUSPENSE_LIST_TYPE: {
              pushBuiltInComponentStackInDEV(task, "SuspenseList");
              renderNodeDestructive(request, task, props.children);
              popComponentStackInDEV(task);
              return;
            }
            case REACT_SCOPE_TYPE: {
              throw new Error("ReactDOMServer does not yet support scope components.");
            }
            case REACT_SUSPENSE_TYPE: {
              {
                renderSuspenseBoundary(request, task, props);
              }
              return;
            }
          }
          if (typeof type === "object" && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE: {
                renderForwardRef(request, task, type, props, ref);
                return;
              }
              case REACT_MEMO_TYPE: {
                renderMemo(request, task, type, props, ref);
                return;
              }
              case REACT_PROVIDER_TYPE: {
                renderContextProvider(request, task, type, props);
                return;
              }
              case REACT_CONTEXT_TYPE: {
                renderContextConsumer(request, task, type, props);
                return;
              }
              case REACT_LAZY_TYPE: {
                renderLazyComponent(request, task, type, props);
                return;
              }
            }
          }
          var info = "";
          {
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
          {
            if (typeof Symbol === "function" && iterable[Symbol.toStringTag] === "Generator") {
              if (!didWarnAboutGenerators) {
                error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
              }
              didWarnAboutGenerators = true;
            }
            if (iterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
              }
              didWarnAboutMaps = true;
            }
          }
        }
        function renderNodeDestructive(request, task, node) {
          task.node = node;
          if (typeof node === "object" && node !== null) {
            switch (node.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var element = node;
                var type = element.type;
                var props = element.props;
                var ref = element.ref;
                renderElement(request, task, type, props, ref);
                return;
              }
              case REACT_PORTAL_TYPE:
                throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
              case REACT_LAZY_TYPE: {
                var lazyNode = node;
                var payload = lazyNode._payload;
                var init = lazyNode._init;
                var resolvedNode = init(payload);
                renderNodeDestructive(request, task, resolvedNode);
                return;
              }
            }
            if (isArray(node)) {
              renderChildrenArray(request, task, node);
              return;
            }
            var iteratorFn = getIteratorFn(node);
            if (iteratorFn) {
              {
                validateIterable(node, iteratorFn);
              }
              var iterator = iteratorFn.call(node);
              if (iterator) {
                var step = iterator.next();
                if (!step.done) {
                  var children = [];
                  do {
                    children.push(step.value);
                    step = iterator.next();
                  } while (!step.done);
                  renderChildrenArray(request, task, children);
                  return;
                }
                return;
              }
            }
            var childString = Object.prototype.toString.call(node);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          if (typeof node === "string") {
            pushTextInstance$1(task.blockedSegment.chunks, node, request.responseState);
            return;
          }
          if (typeof node === "number") {
            pushTextInstance$1(task.blockedSegment.chunks, "" + node, request.responseState);
            return;
          }
          {
            if (typeof node === "function") {
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
        }
        function renderChildrenArray(request, task, children) {
          var totalChildren = children.length;
          for (var i = 0; i < totalChildren; i++) {
            var prevTreeContext = task.treeContext;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
            try {
              renderNode(request, task, children[i]);
            } finally {
              task.treeContext = prevTreeContext;
            }
          }
        }
        function spawnNewSuspendedTask(request, task, x) {
          var segment = task.blockedSegment;
          var insertionIndex = segment.chunks.length;
          var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext);
          segment.children.push(newSegment);
          var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
          {
            if (task.componentStack !== null) {
              newTask.componentStack = task.componentStack.parent;
            }
          }
          var ping = newTask.ping;
          x.then(ping, ping);
        }
        function renderNode(request, task, node) {
          var previousFormatContext = task.blockedSegment.formatContext;
          var previousLegacyContext = task.legacyContext;
          var previousContext = task.context;
          var previousComponentStack = null;
          {
            previousComponentStack = task.componentStack;
          }
          try {
            return renderNodeDestructive(request, task, node);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              spawnNewSuspendedTask(request, task, x);
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              return;
            } else {
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              throw x;
            }
          }
        }
        function erroredTask(request, boundary, segment, error2) {
          logRecoverableError(request, error2);
          if (boundary === null) {
            fatalError(request, error2);
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function abortTaskSoft(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          finishedTask(request, boundary, segment);
        }
        function abortTask(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          if (boundary === null) {
            request.allPendingTasks--;
            if (request.status !== CLOSED) {
              request.status = CLOSED;
              if (request.destination !== null) {
                close(request.destination);
              }
            }
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
            boundary.fallbackAbortableTasks.forEach(abortTask, request);
            boundary.fallbackAbortableTasks.clear();
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
              var onAllReady = request.onAllReady;
              onAllReady();
            }
          }
        }
        function queueCompletedSegment(boundary, segment) {
          if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = true;
            if (childSegment.status === COMPLETED) {
              queueCompletedSegment(boundary, childSegment);
            }
          } else {
            var completedSegments = boundary.completedSegments;
            completedSegments.push(segment);
          }
        }
        function finishedTask(request, boundary, segment) {
          if (boundary === null) {
            if (segment.parentFlushed) {
              if (request.completedRootSegment !== null) {
                throw new Error("There can only be one root segment. This is a bug in React.");
              }
              request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            if (request.pendingRootTasks === 0) {
              request.onShellError = noop$1;
              var onShellReady = request.onShellReady;
              onShellReady();
            }
          } else {
            boundary.pendingTasks--;
            if (boundary.forceClientRender)
              ;
            else if (boundary.pendingTasks === 0) {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                }
              }
              if (boundary.parentFlushed) {
                request.completedBoundaries.push(boundary);
              }
              boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
              boundary.fallbackAbortableTasks.clear();
            } else {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                  var completedSegments = boundary.completedSegments;
                  if (completedSegments.length === 1) {
                    if (boundary.parentFlushed) {
                      request.partialBoundaries.push(boundary);
                    }
                  }
                }
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function retryTask(request, task) {
          var segment = task.blockedSegment;
          if (segment.status !== PENDING) {
            return;
          }
          switchContext(task.context);
          var prevTaskInDEV = null;
          {
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = task;
          }
          try {
            renderNodeDestructive(request, task, task.node);
            task.abortSet.delete(task);
            segment.status = COMPLETED;
            finishedTask(request, task.blockedBoundary, segment);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              var ping = task.ping;
              x.then(ping, ping);
            } else {
              task.abortSet.delete(task);
              segment.status = ERRORED;
              erroredTask(request, task.blockedBoundary, segment, x);
            }
          } finally {
            {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        }
        function performWork(request) {
          if (request.status === CLOSED) {
            return;
          }
          var prevContext = getActiveContext();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          {
            prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
            ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          }
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks;
            var i;
            for (i = 0; i < pingedTasks.length; i++) {
              var task = pingedTasks[i];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i);
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState);
            ReactCurrentDispatcher$1.current = prevDispatcher;
            {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
            }
            if (prevDispatcher === Dispatcher) {
              switchContext(prevContext);
            }
          }
        }
        function flushSubtree(request, destination, segment) {
          segment.parentFlushed = true;
          switch (segment.status) {
            case PENDING: {
              var segmentID = segment.id = request.nextSegmentId++;
              return writePlaceholder(destination, request.responseState, segmentID);
            }
            case COMPLETED: {
              segment.status = FLUSHED;
              var r = true;
              var chunks = segment.chunks;
              var chunkIdx = 0;
              var children = segment.children;
              for (var childIdx = 0; childIdx < children.length; childIdx++) {
                var nextChild = children[childIdx];
                for (; chunkIdx < nextChild.index; chunkIdx++) {
                  writeChunk(destination, chunks[chunkIdx]);
                }
                r = flushSegment(request, destination, nextChild);
              }
              for (; chunkIdx < chunks.length - 1; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              if (chunkIdx < chunks.length) {
                r = writeChunkAndReturn(destination, chunks[chunkIdx]);
              }
              return r;
            }
            default: {
              throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
            }
          }
        }
        function flushSegment(request, destination, segment) {
          var boundary = segment.boundary;
          if (boundary === null) {
            return flushSubtree(request, destination, segment);
          }
          boundary.parentFlushed = true;
          if (boundary.forceClientRender) {
            writeStartClientRenderedSuspenseBoundary$1(destination, request.responseState);
            flushSubtree(request, destination, segment);
            return writeEndClientRenderedSuspenseBoundary$1(destination, request.responseState);
          } else if (boundary.pendingTasks > 0) {
            boundary.rootSegmentID = request.nextSegmentId++;
            if (boundary.completedSegments.length > 0) {
              request.partialBoundaries.push(boundary);
            }
            var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
            writeStartPendingSuspenseBoundary(destination, request.responseState, id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else if (boundary.byteSize > request.progressiveChunkSize) {
            boundary.rootSegmentID = request.nextSegmentId++;
            request.completedBoundaries.push(boundary);
            writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else {
            writeStartCompletedSuspenseBoundary$1(destination, request.responseState);
            var completedSegments = boundary.completedSegments;
            if (completedSegments.length !== 1) {
              throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            }
            var contentSegment = completedSegments[0];
            flushSegment(request, destination, contentSegment);
            return writeEndCompletedSuspenseBoundary$1(destination, request.responseState);
          }
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
          return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id);
        }
        function flushSegmentContainer(request, destination, segment) {
          writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
          flushSegment(request, destination, segment);
          return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            flushPartiallyCompletedSegment(request, destination, boundary, segment);
          }
          completedSegments.length = 0;
          return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
        }
        function flushPartialBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
              i++;
              completedSegments.splice(0, i);
              return false;
            }
          }
          completedSegments.splice(0, i);
          return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
          if (segment.status === FLUSHED) {
            return true;
          }
          var segmentID = segment.id;
          if (segmentID === -1) {
            var rootSegmentID = segment.id = boundary.rootSegmentID;
            if (rootSegmentID === -1) {
              throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
            }
            return flushSegmentContainer(request, destination, segment);
          } else {
            flushSegmentContainer(request, destination, segment);
            return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
          }
        }
        function flushCompletedQueues(request, destination) {
          try {
            var completedRootSegment = request.completedRootSegment;
            if (completedRootSegment !== null && request.pendingRootTasks === 0) {
              flushSegment(request, destination, completedRootSegment);
              request.completedRootSegment = null;
              writeCompletedRoot(destination, request.responseState);
            }
            var clientRenderedBoundaries = request.clientRenderedBoundaries;
            var i;
            for (i = 0; i < clientRenderedBoundaries.length; i++) {
              var boundary = clientRenderedBoundaries[i];
              if (!flushClientRenderedBoundary(request, destination, boundary)) {
                request.destination = null;
                i++;
                clientRenderedBoundaries.splice(0, i);
                return;
              }
            }
            clientRenderedBoundaries.splice(0, i);
            var completedBoundaries = request.completedBoundaries;
            for (i = 0; i < completedBoundaries.length; i++) {
              var _boundary = completedBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary)) {
                request.destination = null;
                i++;
                completedBoundaries.splice(0, i);
                return;
              }
            }
            completedBoundaries.splice(0, i);
            completeWriting(destination);
            beginWriting(destination);
            var partialBoundaries = request.partialBoundaries;
            for (i = 0; i < partialBoundaries.length; i++) {
              var _boundary2 = partialBoundaries[i];
              if (!flushPartialBoundary(request, destination, _boundary2)) {
                request.destination = null;
                i++;
                partialBoundaries.splice(0, i);
                return;
              }
            }
            partialBoundaries.splice(0, i);
            var largeBoundaries = request.completedBoundaries;
            for (i = 0; i < largeBoundaries.length; i++) {
              var _boundary3 = largeBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary3)) {
                request.destination = null;
                i++;
                largeBoundaries.splice(0, i);
                return;
              }
            }
            largeBoundaries.splice(0, i);
          } finally {
            if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
              {
                if (request.abortableTasks.size !== 0) {
                  error("There was still abortable task at the root when we closed. This is a bug in React.");
                }
              }
              close(destination);
            }
          }
        }
        function startWork(request) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
        function startFlowing(request, destination) {
          if (request.status === CLOSING) {
            request.status = CLOSED;
            closeWithError(destination, request.fatalError);
            return;
          }
          if (request.status === CLOSED) {
            return;
          }
          if (request.destination !== null) {
            return;
          }
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function abort(request) {
          try {
            var abortableTasks = request.abortableTasks;
            abortableTasks.forEach(abortTask, request);
            abortableTasks.clear();
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function onError() {
        }
        function renderToStringImpl(children, options, generateStaticMarkup) {
          var didFatal = false;
          var fatalError2 = null;
          var result = "";
          var destination = {
            push: function(chunk) {
              if (chunk !== null) {
                result += chunk;
              }
              return true;
            },
            destroy: function(error2) {
              didFatal = true;
              fatalError2 = error2;
            }
          };
          var readyToStream = false;
          function onShellReady() {
            readyToStream = true;
          }
          var request = createRequest(children, createResponseState$1(generateStaticMarkup, options ? options.identifierPrefix : void 0), createRootFormatContext(), Infinity, onError, void 0, onShellReady, void 0, void 0);
          startWork(request);
          abort(request);
          startFlowing(request, destination);
          if (didFatal) {
            throw fatalError2;
          }
          if (!readyToStream) {
            throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          }
          return result;
        }
        function renderToString(children, options) {
          return renderToStringImpl(children, options, false);
        }
        function renderToStaticMarkup(children, options) {
          return renderToStringImpl(children, options, true);
        }
        function renderToNodeStream() {
          throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
        }
        function renderToStaticNodeStream() {
          throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
        }
        exports.renderToNodeStream = renderToNodeStream;
        exports.renderToStaticMarkup = renderToStaticMarkup;
        exports.renderToStaticNodeStream = renderToStaticNodeStream;
        exports.renderToString = renderToString;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.development.js
var require_react_dom_server_browser_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var ReactVersion = "18.1.0";
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function scheduleWork(callback) {
          callback();
        }
        var VIEW_SIZE = 512;
        var currentView = null;
        var writtenBytes = 0;
        function beginWriting(destination) {
          currentView = new Uint8Array(VIEW_SIZE);
          writtenBytes = 0;
        }
        function writeChunk(destination, chunk) {
          if (chunk.length === 0) {
            return;
          }
          if (chunk.length > VIEW_SIZE) {
            if (writtenBytes > 0) {
              destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
              currentView = new Uint8Array(VIEW_SIZE);
              writtenBytes = 0;
            }
            destination.enqueue(chunk);
            return;
          }
          var bytesToWrite = chunk;
          var allowableBytes = currentView.length - writtenBytes;
          if (allowableBytes < bytesToWrite.length) {
            if (allowableBytes === 0) {
              destination.enqueue(currentView);
            } else {
              currentView.set(bytesToWrite.subarray(0, allowableBytes), writtenBytes);
              destination.enqueue(currentView);
              bytesToWrite = bytesToWrite.subarray(allowableBytes);
            }
            currentView = new Uint8Array(VIEW_SIZE);
            writtenBytes = 0;
          }
          currentView.set(bytesToWrite, writtenBytes);
          writtenBytes += bytesToWrite.length;
        }
        function writeChunkAndReturn(destination, chunk) {
          writeChunk(destination, chunk);
          return true;
        }
        function completeWriting(destination) {
          if (currentView && writtenBytes > 0) {
            destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes));
            currentView = null;
            writtenBytes = 0;
          }
        }
        function close(destination) {
          destination.close();
        }
        var textEncoder = new TextEncoder();
        function stringToChunk(content) {
          return textEncoder.encode(content);
        }
        function stringToPrecomputedChunk(content) {
          return textEncoder.encode(content);
        }
        function closeWithError(destination, error2) {
          if (typeof destination.error === "function") {
            destination.error(error2);
          } else {
            destination.close();
          }
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkAttributeStringCoercion(value, attributeName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          {
            if (willCoercionThrow(value)) {
              error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function checkHtmlStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED = 0;
        var STRING = 1;
        var BOOLEANISH_STRING = 2;
        var BOOLEAN = 3;
        var OVERLOADED_BOOLEAN = 4;
        var NUMERIC = 5;
        var POSITIVE_NUMERIC = 6;
        var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
        var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
        var illegalAttributeNameCache = {};
        var validatedAttributeNameCache = {};
        function isAttributeNameSafe(attributeName) {
          if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
            return true;
          }
          if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
            return false;
          }
          if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
            validatedAttributeNameCache[attributeName] = true;
            return true;
          }
          illegalAttributeNameCache[attributeName] = true;
          {
            error("Invalid attribute name: `%s`", attributeName);
          }
          return false;
        }
        function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
          if (propertyInfo !== null && propertyInfo.type === RESERVED) {
            return false;
          }
          switch (typeof value) {
            case "function":
            case "symbol":
              return true;
            case "boolean": {
              if (isCustomComponentTag) {
                return false;
              }
              if (propertyInfo !== null) {
                return !propertyInfo.acceptsBooleans;
              } else {
                var prefix2 = name.toLowerCase().slice(0, 5);
                return prefix2 !== "data-" && prefix2 !== "aria-";
              }
            }
            default:
              return false;
          }
        }
        function getPropertyInfo(name) {
          return properties.hasOwnProperty(name) ? properties[name] : null;
        }
        function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL2, removeEmptyString) {
          this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
          this.attributeName = attributeName;
          this.attributeNamespace = attributeNamespace;
          this.mustUseProperty = mustUseProperty;
          this.propertyName = name;
          this.type = type;
          this.sanitizeURL = sanitizeURL2;
          this.removeEmptyString = removeEmptyString;
        }
        var properties = {};
        var reservedProps = [
          "children",
          "dangerouslySetInnerHTML",
          "defaultValue",
          "defaultChecked",
          "innerHTML",
          "suppressContentEditableWarning",
          "suppressHydrationWarning",
          "style"
        ];
        reservedProps.forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
        });
        [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(_ref) {
          var name = _ref[0], attributeName = _ref[1];
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
        });
        ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
        });
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
        });
        [
          "checked",
          "multiple",
          "muted",
          "selected"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
        });
        [
          "capture",
          "download"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
        });
        [
          "cols",
          "rows",
          "size",
          "span"
        ].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
        });
        ["rowSpan", "start"].forEach(function(name) {
          properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
        });
        var CAMELIZE = /[\-\:]([a-z])/g;
        var capitalize = function(token) {
          return token[1].toUpperCase();
        };
        [
          "accent-height",
          "alignment-baseline",
          "arabic-form",
          "baseline-shift",
          "cap-height",
          "clip-path",
          "clip-rule",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "dominant-baseline",
          "enable-background",
          "fill-opacity",
          "fill-rule",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "glyph-name",
          "glyph-orientation-horizontal",
          "glyph-orientation-vertical",
          "horiz-adv-x",
          "horiz-origin-x",
          "image-rendering",
          "letter-spacing",
          "lighting-color",
          "marker-end",
          "marker-mid",
          "marker-start",
          "overline-position",
          "overline-thickness",
          "paint-order",
          "panose-1",
          "pointer-events",
          "rendering-intent",
          "shape-rendering",
          "stop-color",
          "stop-opacity",
          "strikethrough-position",
          "strikethrough-thickness",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke-width",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "underline-position",
          "underline-thickness",
          "unicode-bidi",
          "unicode-range",
          "units-per-em",
          "v-alphabetic",
          "v-hanging",
          "v-ideographic",
          "v-mathematical",
          "vector-effect",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "word-spacing",
          "writing-mode",
          "xmlns:xlink",
          "x-height"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
        });
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
        });
        [
          "xml:base",
          "xml:lang",
          "xml:space"
        ].forEach(function(attributeName) {
          var name = attributeName.replace(CAMELIZE, capitalize);
          properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
        });
        ["tabIndex", "crossOrigin"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
        });
        var xlinkHref = "xlinkHref";
        properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
        ["src", "href", "action", "formAction"].forEach(function(attributeName) {
          properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
        });
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function prefixKey(prefix2, key) {
          return prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
        }
        var prefixes = ["Webkit", "ms", "Moz", "O"];
        Object.keys(isUnitlessNumber).forEach(function(prop) {
          prefixes.forEach(function(prefix2) {
            isUnitlessNumber[prefixKey(prefix2, prop)] = isUnitlessNumber[prop];
          });
        });
        var hasReadOnlyValue = {
          button: true,
          checkbox: true,
          image: true,
          hidden: true,
          radio: true,
          reset: true,
          submit: true
        };
        function checkControlledValueProps(tagName, props) {
          {
            if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
              error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
            }
            if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
              error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
            }
          }
        }
        function isCustomComponent(tagName, props) {
          if (tagName.indexOf("-") === -1) {
            return typeof props.is === "string";
          }
          switch (tagName) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return false;
            default:
              return true;
          }
        }
        var ariaProperties = {
          "aria-current": 0,
          "aria-description": 0,
          "aria-details": 0,
          "aria-disabled": 0,
          "aria-hidden": 0,
          "aria-invalid": 0,
          "aria-keyshortcuts": 0,
          "aria-label": 0,
          "aria-roledescription": 0,
          "aria-autocomplete": 0,
          "aria-checked": 0,
          "aria-expanded": 0,
          "aria-haspopup": 0,
          "aria-level": 0,
          "aria-modal": 0,
          "aria-multiline": 0,
          "aria-multiselectable": 0,
          "aria-orientation": 0,
          "aria-placeholder": 0,
          "aria-pressed": 0,
          "aria-readonly": 0,
          "aria-required": 0,
          "aria-selected": 0,
          "aria-sort": 0,
          "aria-valuemax": 0,
          "aria-valuemin": 0,
          "aria-valuenow": 0,
          "aria-valuetext": 0,
          "aria-atomic": 0,
          "aria-busy": 0,
          "aria-live": 0,
          "aria-relevant": 0,
          "aria-dropeffect": 0,
          "aria-grabbed": 0,
          "aria-activedescendant": 0,
          "aria-colcount": 0,
          "aria-colindex": 0,
          "aria-colspan": 0,
          "aria-controls": 0,
          "aria-describedby": 0,
          "aria-errormessage": 0,
          "aria-flowto": 0,
          "aria-labelledby": 0,
          "aria-owns": 0,
          "aria-posinset": 0,
          "aria-rowcount": 0,
          "aria-rowindex": 0,
          "aria-rowspan": 0,
          "aria-setsize": 0
        };
        var warnedProperties = {};
        var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
        var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
        function validateProperty(tagName, name) {
          {
            if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) {
              return true;
            }
            if (rARIACamel.test(name)) {
              var ariaName = "aria-" + name.slice(4).toLowerCase();
              var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
              if (correctName == null) {
                error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
                warnedProperties[name] = true;
                return true;
              }
              if (name !== correctName) {
                error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
                warnedProperties[name] = true;
                return true;
              }
            }
            if (rARIA.test(name)) {
              var lowerCasedName = name.toLowerCase();
              var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
              if (standardName == null) {
                warnedProperties[name] = true;
                return false;
              }
              if (name !== standardName) {
                error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties[name] = true;
                return true;
              }
            }
          }
          return true;
        }
        function warnInvalidARIAProps(type, props) {
          {
            var invalidProps = [];
            for (var key in props) {
              var isValid = validateProperty(type, key);
              if (!isValid) {
                invalidProps.push(key);
              }
            }
            var unknownPropString = invalidProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (invalidProps.length === 1) {
              error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            } else if (invalidProps.length > 1) {
              error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
            }
          }
        }
        function validateProperties(type, props) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnInvalidARIAProps(type, props);
        }
        var didWarnValueNull = false;
        function validateProperties$1(type, props) {
          {
            if (type !== "input" && type !== "textarea" && type !== "select") {
              return;
            }
            if (props != null && props.value === null && !didWarnValueNull) {
              didWarnValueNull = true;
              if (type === "select" && props.multiple) {
                error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
              } else {
                error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
              }
            }
          }
        }
        var possibleStandardNames = {
          accept: "accept",
          acceptcharset: "acceptCharset",
          "accept-charset": "acceptCharset",
          accesskey: "accessKey",
          action: "action",
          allowfullscreen: "allowFullScreen",
          alt: "alt",
          as: "as",
          async: "async",
          autocapitalize: "autoCapitalize",
          autocomplete: "autoComplete",
          autocorrect: "autoCorrect",
          autofocus: "autoFocus",
          autoplay: "autoPlay",
          autosave: "autoSave",
          capture: "capture",
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          challenge: "challenge",
          charset: "charSet",
          checked: "checked",
          children: "children",
          cite: "cite",
          class: "className",
          classid: "classID",
          classname: "className",
          cols: "cols",
          colspan: "colSpan",
          content: "content",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          controls: "controls",
          controlslist: "controlsList",
          coords: "coords",
          crossorigin: "crossOrigin",
          dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
          data: "data",
          datetime: "dateTime",
          default: "default",
          defaultchecked: "defaultChecked",
          defaultvalue: "defaultValue",
          defer: "defer",
          dir: "dir",
          disabled: "disabled",
          disablepictureinpicture: "disablePictureInPicture",
          disableremoteplayback: "disableRemotePlayback",
          download: "download",
          draggable: "draggable",
          enctype: "encType",
          enterkeyhint: "enterKeyHint",
          for: "htmlFor",
          form: "form",
          formmethod: "formMethod",
          formaction: "formAction",
          formenctype: "formEncType",
          formnovalidate: "formNoValidate",
          formtarget: "formTarget",
          frameborder: "frameBorder",
          headers: "headers",
          height: "height",
          hidden: "hidden",
          high: "high",
          href: "href",
          hreflang: "hrefLang",
          htmlfor: "htmlFor",
          httpequiv: "httpEquiv",
          "http-equiv": "httpEquiv",
          icon: "icon",
          id: "id",
          imagesizes: "imageSizes",
          imagesrcset: "imageSrcSet",
          innerhtml: "innerHTML",
          inputmode: "inputMode",
          integrity: "integrity",
          is: "is",
          itemid: "itemID",
          itemprop: "itemProp",
          itemref: "itemRef",
          itemscope: "itemScope",
          itemtype: "itemType",
          keyparams: "keyParams",
          keytype: "keyType",
          kind: "kind",
          label: "label",
          lang: "lang",
          list: "list",
          loop: "loop",
          low: "low",
          manifest: "manifest",
          marginwidth: "marginWidth",
          marginheight: "marginHeight",
          max: "max",
          maxlength: "maxLength",
          media: "media",
          mediagroup: "mediaGroup",
          method: "method",
          min: "min",
          minlength: "minLength",
          multiple: "multiple",
          muted: "muted",
          name: "name",
          nomodule: "noModule",
          nonce: "nonce",
          novalidate: "noValidate",
          open: "open",
          optimum: "optimum",
          pattern: "pattern",
          placeholder: "placeholder",
          playsinline: "playsInline",
          poster: "poster",
          preload: "preload",
          profile: "profile",
          radiogroup: "radioGroup",
          readonly: "readOnly",
          referrerpolicy: "referrerPolicy",
          rel: "rel",
          required: "required",
          reversed: "reversed",
          role: "role",
          rows: "rows",
          rowspan: "rowSpan",
          sandbox: "sandbox",
          scope: "scope",
          scoped: "scoped",
          scrolling: "scrolling",
          seamless: "seamless",
          selected: "selected",
          shape: "shape",
          size: "size",
          sizes: "sizes",
          span: "span",
          spellcheck: "spellCheck",
          src: "src",
          srcdoc: "srcDoc",
          srclang: "srcLang",
          srcset: "srcSet",
          start: "start",
          step: "step",
          style: "style",
          summary: "summary",
          tabindex: "tabIndex",
          target: "target",
          title: "title",
          type: "type",
          usemap: "useMap",
          value: "value",
          width: "width",
          wmode: "wmode",
          wrap: "wrap",
          about: "about",
          accentheight: "accentHeight",
          "accent-height": "accentHeight",
          accumulate: "accumulate",
          additive: "additive",
          alignmentbaseline: "alignmentBaseline",
          "alignment-baseline": "alignmentBaseline",
          allowreorder: "allowReorder",
          alphabetic: "alphabetic",
          amplitude: "amplitude",
          arabicform: "arabicForm",
          "arabic-form": "arabicForm",
          ascent: "ascent",
          attributename: "attributeName",
          attributetype: "attributeType",
          autoreverse: "autoReverse",
          azimuth: "azimuth",
          basefrequency: "baseFrequency",
          baselineshift: "baselineShift",
          "baseline-shift": "baselineShift",
          baseprofile: "baseProfile",
          bbox: "bbox",
          begin: "begin",
          bias: "bias",
          by: "by",
          calcmode: "calcMode",
          capheight: "capHeight",
          "cap-height": "capHeight",
          clip: "clip",
          clippath: "clipPath",
          "clip-path": "clipPath",
          clippathunits: "clipPathUnits",
          cliprule: "clipRule",
          "clip-rule": "clipRule",
          color: "color",
          colorinterpolation: "colorInterpolation",
          "color-interpolation": "colorInterpolation",
          colorinterpolationfilters: "colorInterpolationFilters",
          "color-interpolation-filters": "colorInterpolationFilters",
          colorprofile: "colorProfile",
          "color-profile": "colorProfile",
          colorrendering: "colorRendering",
          "color-rendering": "colorRendering",
          contentscripttype: "contentScriptType",
          contentstyletype: "contentStyleType",
          cursor: "cursor",
          cx: "cx",
          cy: "cy",
          d: "d",
          datatype: "datatype",
          decelerate: "decelerate",
          descent: "descent",
          diffuseconstant: "diffuseConstant",
          direction: "direction",
          display: "display",
          divisor: "divisor",
          dominantbaseline: "dominantBaseline",
          "dominant-baseline": "dominantBaseline",
          dur: "dur",
          dx: "dx",
          dy: "dy",
          edgemode: "edgeMode",
          elevation: "elevation",
          enablebackground: "enableBackground",
          "enable-background": "enableBackground",
          end: "end",
          exponent: "exponent",
          externalresourcesrequired: "externalResourcesRequired",
          fill: "fill",
          fillopacity: "fillOpacity",
          "fill-opacity": "fillOpacity",
          fillrule: "fillRule",
          "fill-rule": "fillRule",
          filter: "filter",
          filterres: "filterRes",
          filterunits: "filterUnits",
          floodopacity: "floodOpacity",
          "flood-opacity": "floodOpacity",
          floodcolor: "floodColor",
          "flood-color": "floodColor",
          focusable: "focusable",
          fontfamily: "fontFamily",
          "font-family": "fontFamily",
          fontsize: "fontSize",
          "font-size": "fontSize",
          fontsizeadjust: "fontSizeAdjust",
          "font-size-adjust": "fontSizeAdjust",
          fontstretch: "fontStretch",
          "font-stretch": "fontStretch",
          fontstyle: "fontStyle",
          "font-style": "fontStyle",
          fontvariant: "fontVariant",
          "font-variant": "fontVariant",
          fontweight: "fontWeight",
          "font-weight": "fontWeight",
          format: "format",
          from: "from",
          fx: "fx",
          fy: "fy",
          g1: "g1",
          g2: "g2",
          glyphname: "glyphName",
          "glyph-name": "glyphName",
          glyphorientationhorizontal: "glyphOrientationHorizontal",
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphorientationvertical: "glyphOrientationVertical",
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphref: "glyphRef",
          gradienttransform: "gradientTransform",
          gradientunits: "gradientUnits",
          hanging: "hanging",
          horizadvx: "horizAdvX",
          "horiz-adv-x": "horizAdvX",
          horizoriginx: "horizOriginX",
          "horiz-origin-x": "horizOriginX",
          ideographic: "ideographic",
          imagerendering: "imageRendering",
          "image-rendering": "imageRendering",
          in2: "in2",
          in: "in",
          inlist: "inlist",
          intercept: "intercept",
          k1: "k1",
          k2: "k2",
          k3: "k3",
          k4: "k4",
          k: "k",
          kernelmatrix: "kernelMatrix",
          kernelunitlength: "kernelUnitLength",
          kerning: "kerning",
          keypoints: "keyPoints",
          keysplines: "keySplines",
          keytimes: "keyTimes",
          lengthadjust: "lengthAdjust",
          letterspacing: "letterSpacing",
          "letter-spacing": "letterSpacing",
          lightingcolor: "lightingColor",
          "lighting-color": "lightingColor",
          limitingconeangle: "limitingConeAngle",
          local: "local",
          markerend: "markerEnd",
          "marker-end": "markerEnd",
          markerheight: "markerHeight",
          markermid: "markerMid",
          "marker-mid": "markerMid",
          markerstart: "markerStart",
          "marker-start": "markerStart",
          markerunits: "markerUnits",
          markerwidth: "markerWidth",
          mask: "mask",
          maskcontentunits: "maskContentUnits",
          maskunits: "maskUnits",
          mathematical: "mathematical",
          mode: "mode",
          numoctaves: "numOctaves",
          offset: "offset",
          opacity: "opacity",
          operator: "operator",
          order: "order",
          orient: "orient",
          orientation: "orientation",
          origin: "origin",
          overflow: "overflow",
          overlineposition: "overlinePosition",
          "overline-position": "overlinePosition",
          overlinethickness: "overlineThickness",
          "overline-thickness": "overlineThickness",
          paintorder: "paintOrder",
          "paint-order": "paintOrder",
          panose1: "panose1",
          "panose-1": "panose1",
          pathlength: "pathLength",
          patterncontentunits: "patternContentUnits",
          patterntransform: "patternTransform",
          patternunits: "patternUnits",
          pointerevents: "pointerEvents",
          "pointer-events": "pointerEvents",
          points: "points",
          pointsatx: "pointsAtX",
          pointsaty: "pointsAtY",
          pointsatz: "pointsAtZ",
          prefix: "prefix",
          preservealpha: "preserveAlpha",
          preserveaspectratio: "preserveAspectRatio",
          primitiveunits: "primitiveUnits",
          property: "property",
          r: "r",
          radius: "radius",
          refx: "refX",
          refy: "refY",
          renderingintent: "renderingIntent",
          "rendering-intent": "renderingIntent",
          repeatcount: "repeatCount",
          repeatdur: "repeatDur",
          requiredextensions: "requiredExtensions",
          requiredfeatures: "requiredFeatures",
          resource: "resource",
          restart: "restart",
          result: "result",
          results: "results",
          rotate: "rotate",
          rx: "rx",
          ry: "ry",
          scale: "scale",
          security: "security",
          seed: "seed",
          shaperendering: "shapeRendering",
          "shape-rendering": "shapeRendering",
          slope: "slope",
          spacing: "spacing",
          specularconstant: "specularConstant",
          specularexponent: "specularExponent",
          speed: "speed",
          spreadmethod: "spreadMethod",
          startoffset: "startOffset",
          stddeviation: "stdDeviation",
          stemh: "stemh",
          stemv: "stemv",
          stitchtiles: "stitchTiles",
          stopcolor: "stopColor",
          "stop-color": "stopColor",
          stopopacity: "stopOpacity",
          "stop-opacity": "stopOpacity",
          strikethroughposition: "strikethroughPosition",
          "strikethrough-position": "strikethroughPosition",
          strikethroughthickness: "strikethroughThickness",
          "strikethrough-thickness": "strikethroughThickness",
          string: "string",
          stroke: "stroke",
          strokedasharray: "strokeDasharray",
          "stroke-dasharray": "strokeDasharray",
          strokedashoffset: "strokeDashoffset",
          "stroke-dashoffset": "strokeDashoffset",
          strokelinecap: "strokeLinecap",
          "stroke-linecap": "strokeLinecap",
          strokelinejoin: "strokeLinejoin",
          "stroke-linejoin": "strokeLinejoin",
          strokemiterlimit: "strokeMiterlimit",
          "stroke-miterlimit": "strokeMiterlimit",
          strokewidth: "strokeWidth",
          "stroke-width": "strokeWidth",
          strokeopacity: "strokeOpacity",
          "stroke-opacity": "strokeOpacity",
          suppresscontenteditablewarning: "suppressContentEditableWarning",
          suppresshydrationwarning: "suppressHydrationWarning",
          surfacescale: "surfaceScale",
          systemlanguage: "systemLanguage",
          tablevalues: "tableValues",
          targetx: "targetX",
          targety: "targetY",
          textanchor: "textAnchor",
          "text-anchor": "textAnchor",
          textdecoration: "textDecoration",
          "text-decoration": "textDecoration",
          textlength: "textLength",
          textrendering: "textRendering",
          "text-rendering": "textRendering",
          to: "to",
          transform: "transform",
          typeof: "typeof",
          u1: "u1",
          u2: "u2",
          underlineposition: "underlinePosition",
          "underline-position": "underlinePosition",
          underlinethickness: "underlineThickness",
          "underline-thickness": "underlineThickness",
          unicode: "unicode",
          unicodebidi: "unicodeBidi",
          "unicode-bidi": "unicodeBidi",
          unicoderange: "unicodeRange",
          "unicode-range": "unicodeRange",
          unitsperem: "unitsPerEm",
          "units-per-em": "unitsPerEm",
          unselectable: "unselectable",
          valphabetic: "vAlphabetic",
          "v-alphabetic": "vAlphabetic",
          values: "values",
          vectoreffect: "vectorEffect",
          "vector-effect": "vectorEffect",
          version: "version",
          vertadvy: "vertAdvY",
          "vert-adv-y": "vertAdvY",
          vertoriginx: "vertOriginX",
          "vert-origin-x": "vertOriginX",
          vertoriginy: "vertOriginY",
          "vert-origin-y": "vertOriginY",
          vhanging: "vHanging",
          "v-hanging": "vHanging",
          videographic: "vIdeographic",
          "v-ideographic": "vIdeographic",
          viewbox: "viewBox",
          viewtarget: "viewTarget",
          visibility: "visibility",
          vmathematical: "vMathematical",
          "v-mathematical": "vMathematical",
          vocab: "vocab",
          widths: "widths",
          wordspacing: "wordSpacing",
          "word-spacing": "wordSpacing",
          writingmode: "writingMode",
          "writing-mode": "writingMode",
          x1: "x1",
          x2: "x2",
          x: "x",
          xchannelselector: "xChannelSelector",
          xheight: "xHeight",
          "x-height": "xHeight",
          xlinkactuate: "xlinkActuate",
          "xlink:actuate": "xlinkActuate",
          xlinkarcrole: "xlinkArcrole",
          "xlink:arcrole": "xlinkArcrole",
          xlinkhref: "xlinkHref",
          "xlink:href": "xlinkHref",
          xlinkrole: "xlinkRole",
          "xlink:role": "xlinkRole",
          xlinkshow: "xlinkShow",
          "xlink:show": "xlinkShow",
          xlinktitle: "xlinkTitle",
          "xlink:title": "xlinkTitle",
          xlinktype: "xlinkType",
          "xlink:type": "xlinkType",
          xmlbase: "xmlBase",
          "xml:base": "xmlBase",
          xmllang: "xmlLang",
          "xml:lang": "xmlLang",
          xmlns: "xmlns",
          "xml:space": "xmlSpace",
          xmlnsxlink: "xmlnsXlink",
          "xmlns:xlink": "xmlnsXlink",
          xmlspace: "xmlSpace",
          y1: "y1",
          y2: "y2",
          y: "y",
          ychannelselector: "yChannelSelector",
          z: "z",
          zoomandpan: "zoomAndPan"
        };
        var validateProperty$1 = function() {
        };
        {
          var warnedProperties$1 = {};
          var EVENT_NAME_REGEX = /^on./;
          var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
          var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
          var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
          validateProperty$1 = function(tagName, name, value, eventRegistry) {
            if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
              return true;
            }
            var lowerCasedName = name.toLowerCase();
            if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
              error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (eventRegistry != null) {
              var registrationNameDependencies = eventRegistry.registrationNameDependencies, possibleRegistrationNames = eventRegistry.possibleRegistrationNames;
              if (registrationNameDependencies.hasOwnProperty(name)) {
                return true;
              }
              var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
              if (registrationName != null) {
                error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
                warnedProperties$1[name] = true;
                return true;
              }
              if (EVENT_NAME_REGEX.test(name)) {
                error("Unknown event handler property `%s`. It will be ignored.", name);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (EVENT_NAME_REGEX.test(name)) {
              if (INVALID_EVENT_NAME_REGEX.test(name)) {
                error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
              return true;
            }
            if (lowerCasedName === "innerhtml") {
              error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "aria") {
              error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
              warnedProperties$1[name] = true;
              return true;
            }
            if (lowerCasedName === "is" && value !== null && value !== void 0 && typeof value !== "string") {
              error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "number" && isNaN(value)) {
              error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
              warnedProperties$1[name] = true;
              return true;
            }
            var propertyInfo = getPropertyInfo(name);
            var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
            if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
              var standardName = possibleStandardNames[lowerCasedName];
              if (standardName !== name) {
                error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
                warnedProperties$1[name] = true;
                return true;
              }
            } else if (!isReserved && name !== lowerCasedName) {
              error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
              warnedProperties$1[name] = true;
              return true;
            }
            if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              if (value) {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name);
              } else {
                error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
              }
              warnedProperties$1[name] = true;
              return true;
            }
            if (isReserved) {
              return true;
            }
            if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
              warnedProperties$1[name] = true;
              return false;
            }
            if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
              error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
              warnedProperties$1[name] = true;
              return true;
            }
            return true;
          };
        }
        var warnUnknownProperties = function(type, props, eventRegistry) {
          {
            var unknownProps = [];
            for (var key in props) {
              var isValid = validateProperty$1(type, key, props[key], eventRegistry);
              if (!isValid) {
                unknownProps.push(key);
              }
            }
            var unknownPropString = unknownProps.map(function(prop) {
              return "`" + prop + "`";
            }).join(", ");
            if (unknownProps.length === 1) {
              error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            } else if (unknownProps.length > 1) {
              error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
            }
          }
        };
        function validateProperties$2(type, props, eventRegistry) {
          if (isCustomComponent(type, props)) {
            return;
          }
          warnUnknownProperties(type, props, eventRegistry);
        }
        var warnValidStyle = function() {
        };
        {
          var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
          var msPattern = /^-ms-/;
          var hyphenPattern = /-(.)/g;
          var badStyleValueWithSemicolonPattern = /;\s*$/;
          var warnedStyleNames = {};
          var warnedStyleValues = {};
          var warnedForNaNValue = false;
          var warnedForInfinityValue = false;
          var camelize = function(string) {
            return string.replace(hyphenPattern, function(_, character) {
              return character.toUpperCase();
            });
          };
          var warnHyphenatedStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern, "ms-")));
          };
          var warnBadVendoredStyleName = function(name) {
            if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
              return;
            }
            warnedStyleNames[name] = true;
            error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
          };
          var warnStyleValueWithSemicolon = function(name, value) {
            if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
              return;
            }
            warnedStyleValues[value] = true;
            error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, name, value.replace(badStyleValueWithSemicolonPattern, ""));
          };
          var warnStyleValueIsNaN = function(name, value) {
            if (warnedForNaNValue) {
              return;
            }
            warnedForNaNValue = true;
            error("`NaN` is an invalid value for the `%s` css style property.", name);
          };
          var warnStyleValueIsInfinity = function(name, value) {
            if (warnedForInfinityValue) {
              return;
            }
            warnedForInfinityValue = true;
            error("`Infinity` is an invalid value for the `%s` css style property.", name);
          };
          warnValidStyle = function(name, value) {
            if (name.indexOf("-") > -1) {
              warnHyphenatedStyleName(name);
            } else if (badVendoredStyleNamePattern.test(name)) {
              warnBadVendoredStyleName(name);
            } else if (badStyleValueWithSemicolonPattern.test(value)) {
              warnStyleValueWithSemicolon(name, value);
            }
            if (typeof value === "number") {
              if (isNaN(value)) {
                warnStyleValueIsNaN(name, value);
              } else if (!isFinite(value)) {
                warnStyleValueIsInfinity(name, value);
              }
            }
          };
        }
        var warnValidStyle$1 = warnValidStyle;
        var matchHtmlRegExp = /["'&<>]/;
        function escapeHtml(string) {
          {
            checkHtmlStringCoercion(string);
          }
          var str = "" + string;
          var match = matchHtmlRegExp.exec(str);
          if (!match) {
            return str;
          }
          var escape;
          var html = "";
          var index;
          var lastIndex = 0;
          for (index = match.index; index < str.length; index++) {
            switch (str.charCodeAt(index)) {
              case 34:
                escape = "&quot;";
                break;
              case 38:
                escape = "&amp;";
                break;
              case 39:
                escape = "&#x27;";
                break;
              case 60:
                escape = "&lt;";
                break;
              case 62:
                escape = "&gt;";
                break;
              default:
                continue;
            }
            if (lastIndex !== index) {
              html += str.substring(lastIndex, index);
            }
            lastIndex = index + 1;
            html += escape;
          }
          return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
        }
        function escapeTextForBrowser(text) {
          if (typeof text === "boolean" || typeof text === "number") {
            return "" + text;
          }
          return escapeHtml(text);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern$1 = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern$1, "-ms-");
        }
        var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
        var didWarn = false;
        function sanitizeURL(url) {
          {
            if (!didWarn && isJavaScriptProtocol.test(url)) {
              didWarn = true;
              error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        var startInlineScript = stringToPrecomputedChunk("<script>");
        var endInlineScript = stringToPrecomputedChunk("<\/script>");
        var startScriptSrc = stringToPrecomputedChunk('<script src="');
        var startModuleSrc = stringToPrecomputedChunk('<script type="module" src="');
        var endAsyncScript = stringToPrecomputedChunk('" async=""><\/script>');
        function escapeBootstrapScriptContent(scriptText) {
          {
            checkHtmlStringCoercion(scriptText);
          }
          return ("" + scriptText).replace(scriptRegex, scriptReplacer);
        }
        var scriptRegex = /(<\/|<)(s)(cript)/gi;
        var scriptReplacer = function(match, prefix2, s, suffix) {
          return "" + prefix2 + (s === "s" ? "\\u0073" : "\\u0053") + suffix;
        };
        function createResponseState(identifierPrefix, nonce, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
          var idPrefix = identifierPrefix === void 0 ? "" : identifierPrefix;
          var inlineScriptWithNonce = nonce === void 0 ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">');
          var bootstrapChunks = [];
          if (bootstrapScriptContent !== void 0) {
            bootstrapChunks.push(inlineScriptWithNonce, stringToChunk(escapeBootstrapScriptContent(bootstrapScriptContent)), endInlineScript);
          }
          if (bootstrapScripts !== void 0) {
            for (var i = 0; i < bootstrapScripts.length; i++) {
              bootstrapChunks.push(startScriptSrc, stringToChunk(escapeTextForBrowser(bootstrapScripts[i])), endAsyncScript);
            }
          }
          if (bootstrapModules !== void 0) {
            for (var _i = 0; _i < bootstrapModules.length; _i++) {
              bootstrapChunks.push(startModuleSrc, stringToChunk(escapeTextForBrowser(bootstrapModules[_i])), endAsyncScript);
            }
          }
          return {
            bootstrapChunks,
            startInlineScript: inlineScriptWithNonce,
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: idPrefix + "B:",
            idPrefix,
            nextSuspenseID: 0,
            sentCompleteSegmentFunction: false,
            sentCompleteBoundaryFunction: false,
            sentClientRenderFunction: false
          };
        }
        var ROOT_HTML_MODE = 0;
        var HTML_MODE = 1;
        var SVG_MODE = 2;
        var MATHML_MODE = 3;
        var HTML_TABLE_MODE = 4;
        var HTML_TABLE_BODY_MODE = 5;
        var HTML_TABLE_ROW_MODE = 6;
        var HTML_COLGROUP_MODE = 7;
        function createFormatContext(insertionMode, selectedValue) {
          return {
            insertionMode,
            selectedValue
          };
        }
        function createRootFormatContext(namespaceURI) {
          var insertionMode = namespaceURI === "http://www.w3.org/2000/svg" ? SVG_MODE : namespaceURI === "http://www.w3.org/1998/Math/MathML" ? MATHML_MODE : ROOT_HTML_MODE;
          return createFormatContext(insertionMode, null);
        }
        function getChildFormatContext(parentContext, type, props) {
          switch (type) {
            case "select":
              return createFormatContext(HTML_MODE, props.value != null ? props.value : props.defaultValue);
            case "svg":
              return createFormatContext(SVG_MODE, null);
            case "math":
              return createFormatContext(MATHML_MODE, null);
            case "foreignObject":
              return createFormatContext(HTML_MODE, null);
            case "table":
              return createFormatContext(HTML_TABLE_MODE, null);
            case "thead":
            case "tbody":
            case "tfoot":
              return createFormatContext(HTML_TABLE_BODY_MODE, null);
            case "colgroup":
              return createFormatContext(HTML_COLGROUP_MODE, null);
            case "tr":
              return createFormatContext(HTML_TABLE_ROW_MODE, null);
          }
          if (parentContext.insertionMode >= HTML_TABLE_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          if (parentContext.insertionMode === ROOT_HTML_MODE) {
            return createFormatContext(HTML_MODE, null);
          }
          return parentContext;
        }
        var UNINITIALIZED_SUSPENSE_BOUNDARY_ID = null;
        function assignSuspenseBoundaryID(responseState) {
          var generatedID = responseState.nextSuspenseID++;
          return stringToPrecomputedChunk(responseState.boundaryPrefix + generatedID.toString(16));
        }
        function makeId(responseState, treeId, localId) {
          var idPrefix = responseState.idPrefix;
          var id = ":" + idPrefix + "R" + treeId;
          if (localId > 0) {
            id += "H" + localId.toString(32);
          }
          return id + ":";
        }
        function encodeHTMLTextNode(text) {
          return escapeTextForBrowser(text);
        }
        var textSeparator = stringToPrecomputedChunk("<!-- -->");
        function pushTextInstance(target, text, responseState) {
          if (text === "") {
            return;
          }
          target.push(stringToChunk(encodeHTMLTextNode(text)), textSeparator);
        }
        var styleNameCache = /* @__PURE__ */ new Map();
        function processStyleName(styleName) {
          var chunk = styleNameCache.get(styleName);
          if (chunk !== void 0) {
            return chunk;
          }
          var result = stringToPrecomputedChunk(escapeTextForBrowser(hyphenateStyleName(styleName)));
          styleNameCache.set(styleName, result);
          return result;
        }
        var styleAttributeStart = stringToPrecomputedChunk(' style="');
        var styleAssign = stringToPrecomputedChunk(":");
        var styleSeparator = stringToPrecomputedChunk(";");
        function pushStyle(target, responseState, style) {
          if (typeof style !== "object") {
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
          }
          var isFirst = true;
          for (var styleName in style) {
            if (!hasOwnProperty.call(style, styleName)) {
              continue;
            }
            var styleValue = style[styleName];
            if (styleValue == null || typeof styleValue === "boolean" || styleValue === "") {
              continue;
            }
            var nameChunk = void 0;
            var valueChunk = void 0;
            var isCustomProperty = styleName.indexOf("--") === 0;
            if (isCustomProperty) {
              nameChunk = stringToChunk(escapeTextForBrowser(styleName));
              {
                checkCSSPropertyStringCoercion(styleValue, styleName);
              }
              valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
            } else {
              {
                warnValidStyle$1(styleName, styleValue);
              }
              nameChunk = processStyleName(styleName);
              if (typeof styleValue === "number") {
                if (styleValue !== 0 && !hasOwnProperty.call(isUnitlessNumber, styleName)) {
                  valueChunk = stringToChunk(styleValue + "px");
                } else {
                  valueChunk = stringToChunk("" + styleValue);
                }
              } else {
                {
                  checkCSSPropertyStringCoercion(styleValue, styleName);
                }
                valueChunk = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
              }
            }
            if (isFirst) {
              isFirst = false;
              target.push(styleAttributeStart, nameChunk, styleAssign, valueChunk);
            } else {
              target.push(styleSeparator, nameChunk, styleAssign, valueChunk);
            }
          }
          if (!isFirst) {
            target.push(attributeEnd);
          }
        }
        var attributeSeparator = stringToPrecomputedChunk(" ");
        var attributeAssign = stringToPrecomputedChunk('="');
        var attributeEnd = stringToPrecomputedChunk('"');
        var attributeEmptyString = stringToPrecomputedChunk('=""');
        function pushAttribute(target, responseState, name, value) {
          switch (name) {
            case "style": {
              pushStyle(target, responseState, value);
              return;
            }
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              return;
          }
          if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) {
            return;
          }
          var propertyInfo = getPropertyInfo(name);
          if (propertyInfo !== null) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                if (!propertyInfo.acceptsBooleans) {
                  return;
                }
              }
            }
            var attributeName = propertyInfo.attributeName;
            var attributeNameChunk = stringToChunk(attributeName);
            switch (propertyInfo.type) {
              case BOOLEAN:
                if (value) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                }
                return;
              case OVERLOADED_BOOLEAN:
                if (value === true) {
                  target.push(attributeSeparator, attributeNameChunk, attributeEmptyString);
                } else if (value === false)
                  ;
                else {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                return;
              case NUMERIC:
                if (!isNaN(value)) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              case POSITIVE_NUMERIC:
                if (!isNaN(value) && value >= 1) {
                  target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                }
                break;
              default:
                if (propertyInfo.sanitizeURL) {
                  {
                    checkAttributeStringCoercion(value, attributeName);
                  }
                  value = "" + value;
                  sanitizeURL(value);
                }
                target.push(attributeSeparator, attributeNameChunk, attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
            }
          } else if (isAttributeNameSafe(name)) {
            switch (typeof value) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                var prefix2 = name.toLowerCase().slice(0, 5);
                if (prefix2 !== "data-" && prefix2 !== "aria-") {
                  return;
                }
              }
            }
            target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
          }
        }
        var endOfStartTag = stringToPrecomputedChunk(">");
        var endOfStartTagSelfClosing = stringToPrecomputedChunk("/>");
        function pushInnerHTML(target, innerHTML, children) {
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              {
                checkHtmlStringCoercion(html);
              }
              target.push(stringToChunk("" + html));
            }
          }
        }
        var didWarnDefaultInputValue = false;
        var didWarnDefaultChecked = false;
        var didWarnDefaultSelectValue = false;
        var didWarnDefaultTextareaValue = false;
        var didWarnInvalidOptionChildren = false;
        var didWarnInvalidOptionInnerHTML = false;
        var didWarnSelectedSetOnOption = false;
        function checkSelectProp(props, propName) {
          {
            var value = props[propName];
            if (value != null) {
              var array = isArray(value);
              if (props.multiple && !array) {
                error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName);
              } else if (!props.multiple && array) {
                error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName);
              }
            }
          }
        }
        function pushStartSelect(target, props, responseState) {
          {
            checkControlledValueProps("select", props);
            checkSelectProp(props, "value");
            checkSelectProp(props, "defaultValue");
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultSelectValue) {
              error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultSelectValue = true;
            }
          }
          target.push(startChunkForTag("select"));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function flattenOptionChildren(children) {
          var content = "";
          React6.Children.forEach(children, function(child) {
            if (child == null) {
              return;
            }
            content += child;
            {
              if (!didWarnInvalidOptionChildren && typeof child !== "string" && typeof child !== "number") {
                didWarnInvalidOptionChildren = true;
                error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
              }
            }
          });
          return content;
        }
        var selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""');
        function pushStartOption(target, props, responseState, formatContext) {
          var selectedValue = formatContext.selectedValue;
          target.push(startChunkForTag("option"));
          var children = null;
          var value = null;
          var selected = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "selected":
                  selected = propValue;
                  {
                    if (!didWarnSelectedSetOnOption) {
                      error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
                      didWarnSelectedSetOnOption = true;
                    }
                  }
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "value":
                  value = propValue;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (selectedValue != null) {
            var stringValue;
            if (value !== null) {
              {
                checkAttributeStringCoercion(value, "value");
              }
              stringValue = "" + value;
            } else {
              {
                if (innerHTML !== null) {
                  if (!didWarnInvalidOptionInnerHTML) {
                    didWarnInvalidOptionInnerHTML = true;
                    error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
                  }
                }
              }
              stringValue = flattenOptionChildren(children);
            }
            if (isArray(selectedValue)) {
              for (var i = 0; i < selectedValue.length; i++) {
                {
                  checkAttributeStringCoercion(selectedValue[i], "value");
                }
                var v = "" + selectedValue[i];
                if (v === stringValue) {
                  target.push(selectedMarkerAttribute);
                  break;
                }
              }
            } else {
              {
                checkAttributeStringCoercion(selectedValue, "select.value");
              }
              if ("" + selectedValue === stringValue) {
                target.push(selectedMarkerAttribute);
              }
            }
          } else if (selected) {
            target.push(selectedMarkerAttribute);
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        function pushInput(target, props, responseState) {
          {
            checkControlledValueProps("input", props);
            if (props.checked !== void 0 && props.defaultChecked !== void 0 && !didWarnDefaultChecked) {
              error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultChecked = true;
            }
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultInputValue) {
              error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", props.type);
              didWarnDefaultInputValue = true;
            }
          }
          target.push(startChunkForTag("input"));
          var value = null;
          var defaultValue = null;
          var checked = null;
          var defaultChecked = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                case "defaultChecked":
                  defaultChecked = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "checked":
                  checked = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (checked !== null) {
            pushAttribute(target, responseState, "checked", checked);
          } else if (defaultChecked !== null) {
            pushAttribute(target, responseState, "checked", defaultChecked);
          }
          if (value !== null) {
            pushAttribute(target, responseState, "value", value);
          } else if (defaultValue !== null) {
            pushAttribute(target, responseState, "value", defaultValue);
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartTextArea(target, props, responseState) {
          {
            checkControlledValueProps("textarea", props);
            if (props.value !== void 0 && props.defaultValue !== void 0 && !didWarnDefaultTextareaValue) {
              error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components");
              didWarnDefaultTextareaValue = true;
            }
          }
          target.push(startChunkForTag("textarea"));
          var value = null;
          var defaultValue = null;
          var children = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "value":
                  value = propValue;
                  break;
                case "defaultValue":
                  defaultValue = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          if (value === null && defaultValue !== null) {
            value = defaultValue;
          }
          target.push(endOfStartTag);
          if (children != null) {
            {
              error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            }
            if (value != null) {
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            }
            if (isArray(children)) {
              if (children.length > 1) {
                throw new Error("<textarea> can only have at most one child.");
              }
              {
                checkHtmlStringCoercion(children[0]);
              }
              value = "" + children[0];
            }
            {
              checkHtmlStringCoercion(children);
            }
            value = "" + children;
          }
          if (typeof value === "string" && value[0] === "\n") {
            target.push(leadingNewline);
          }
          if (value !== null) {
            {
              checkAttributeStringCoercion(value, "value");
            }
            target.push(stringToChunk(encodeHTMLTextNode("" + value)));
          }
          return null;
        }
        function pushSelfClosing(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTagSelfClosing);
          return null;
        }
        function pushStartMenuItem(target, props, responseState) {
          target.push(startChunkForTag("menuitem"));
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          return null;
        }
        function pushStartGenericElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          if (typeof children === "string") {
            target.push(stringToChunk(encodeHTMLTextNode(children)));
            return null;
          }
          return children;
        }
        function pushStartCustomElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                case "style":
                  pushStyle(target, responseState, propValue);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  if (isAttributeNameSafe(propKey) && typeof propValue !== "function" && typeof propValue !== "symbol") {
                    target.push(attributeSeparator, stringToChunk(propKey), attributeAssign, stringToChunk(escapeTextForBrowser(propValue)), attributeEnd);
                  }
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          pushInnerHTML(target, innerHTML, children);
          return children;
        }
        var leadingNewline = stringToPrecomputedChunk("\n");
        function pushStartPreformattedElement(target, props, tag, responseState) {
          target.push(startChunkForTag(tag));
          var children = null;
          var innerHTML = null;
          for (var propKey in props) {
            if (hasOwnProperty.call(props, propKey)) {
              var propValue = props[propKey];
              if (propValue == null) {
                continue;
              }
              switch (propKey) {
                case "children":
                  children = propValue;
                  break;
                case "dangerouslySetInnerHTML":
                  innerHTML = propValue;
                  break;
                default:
                  pushAttribute(target, responseState, propKey, propValue);
                  break;
              }
            }
          }
          target.push(endOfStartTag);
          if (innerHTML != null) {
            if (children != null) {
              throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            }
            if (typeof innerHTML !== "object" || !("__html" in innerHTML)) {
              throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            }
            var html = innerHTML.__html;
            if (html !== null && html !== void 0) {
              if (typeof html === "string" && html.length > 0 && html[0] === "\n") {
                target.push(leadingNewline, stringToChunk(html));
              } else {
                {
                  checkHtmlStringCoercion(html);
                }
                target.push(stringToChunk("" + html));
              }
            }
          }
          if (typeof children === "string" && children[0] === "\n") {
            target.push(leadingNewline);
          }
          return children;
        }
        var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
        var validatedTagCache = /* @__PURE__ */ new Map();
        function startChunkForTag(tag) {
          var tagStartChunk = validatedTagCache.get(tag);
          if (tagStartChunk === void 0) {
            if (!VALID_TAG_REGEX.test(tag)) {
              throw new Error("Invalid tag: " + tag);
            }
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
          }
          return tagStartChunk;
        }
        var DOCTYPE = stringToPrecomputedChunk("<!DOCTYPE html>");
        function pushStartInstance(target, type, props, responseState, formatContext) {
          {
            validateProperties(type, props);
            validateProperties$1(type, props);
            validateProperties$2(type, props, null);
            if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
              error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
            }
            if (formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE) {
              if (type.indexOf("-") === -1 && typeof props.is !== "string" && type.toLowerCase() !== type) {
                error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
              }
            }
          }
          switch (type) {
            case "select":
              return pushStartSelect(target, props, responseState);
            case "option":
              return pushStartOption(target, props, responseState, formatContext);
            case "textarea":
              return pushStartTextArea(target, props, responseState);
            case "input":
              return pushInput(target, props, responseState);
            case "menuitem":
              return pushStartMenuItem(target, props, responseState);
            case "listing":
            case "pre": {
              return pushStartPreformattedElement(target, props, type, responseState);
            }
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              return pushSelfClosing(target, props, type, responseState);
            }
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": {
              return pushStartGenericElement(target, props, type, responseState);
            }
            case "html": {
              if (formatContext.insertionMode === ROOT_HTML_MODE) {
                target.push(DOCTYPE);
              }
              return pushStartGenericElement(target, props, type, responseState);
            }
            default: {
              if (type.indexOf("-") === -1 && typeof props.is !== "string") {
                return pushStartGenericElement(target, props, type, responseState);
              } else {
                return pushStartCustomElement(target, props, type, responseState);
              }
            }
          }
        }
        var endTag1 = stringToPrecomputedChunk("</");
        var endTag2 = stringToPrecomputedChunk(">");
        function pushEndInstance(target, type, props) {
          switch (type) {
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr": {
              break;
            }
            default: {
              target.push(endTag1, stringToChunk(type), endTag2);
            }
          }
        }
        function writeCompletedRoot(destination, responseState) {
          var bootstrapChunks = responseState.bootstrapChunks;
          var i = 0;
          for (; i < bootstrapChunks.length - 1; i++) {
            writeChunk(destination, bootstrapChunks[i]);
          }
          if (i < bootstrapChunks.length) {
            return writeChunkAndReturn(destination, bootstrapChunks[i]);
          }
          return true;
        }
        var placeholder1 = stringToPrecomputedChunk('<template id="');
        var placeholder2 = stringToPrecomputedChunk('"></template>');
        function writePlaceholder(destination, responseState, id) {
          writeChunk(destination, placeholder1);
          writeChunk(destination, responseState.placeholderPrefix);
          var formattedID = stringToChunk(id.toString(16));
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, placeholder2);
        }
        var startCompletedSuspenseBoundary = stringToPrecomputedChunk("<!--$-->");
        var startPendingSuspenseBoundary1 = stringToPrecomputedChunk('<!--$?--><template id="');
        var startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>');
        var startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("<!--$!-->");
        var endSuspenseBoundary = stringToPrecomputedChunk("<!--/$-->");
        function writeStartCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        }
        function writeStartPendingSuspenseBoundary(destination, responseState, id) {
          writeChunk(destination, startPendingSuspenseBoundary1);
          if (id === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, id);
          return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
        }
        function writeStartClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
        }
        function writeEndCompletedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndPendingSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        function writeEndClientRenderedSuspenseBoundary(destination, responseState) {
          return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        var startSegmentHTML = stringToPrecomputedChunk('<div hidden id="');
        var startSegmentHTML2 = stringToPrecomputedChunk('">');
        var endSegmentHTML = stringToPrecomputedChunk("</div>");
        var startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
        var startSegmentSVG2 = stringToPrecomputedChunk('">');
        var endSegmentSVG = stringToPrecomputedChunk("</svg>");
        var startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
        var startSegmentMathML2 = stringToPrecomputedChunk('">');
        var endSegmentMathML = stringToPrecomputedChunk("</math>");
        var startSegmentTable = stringToPrecomputedChunk('<table hidden id="');
        var startSegmentTable2 = stringToPrecomputedChunk('">');
        var endSegmentTable = stringToPrecomputedChunk("</table>");
        var startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="');
        var startSegmentTableBody2 = stringToPrecomputedChunk('">');
        var endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>");
        var startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="');
        var startSegmentTableRow2 = stringToPrecomputedChunk('">');
        var endSegmentTableRow = stringToPrecomputedChunk("</tr></table>");
        var startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="');
        var startSegmentColGroup2 = stringToPrecomputedChunk('">');
        var endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>");
        function writeStartSegment(destination, responseState, formatContext, id) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              writeChunk(destination, startSegmentHTML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentHTML2);
            }
            case SVG_MODE: {
              writeChunk(destination, startSegmentSVG);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentSVG2);
            }
            case MATHML_MODE: {
              writeChunk(destination, startSegmentMathML);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentMathML2);
            }
            case HTML_TABLE_MODE: {
              writeChunk(destination, startSegmentTable);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTable2);
            }
            case HTML_TABLE_BODY_MODE: {
              writeChunk(destination, startSegmentTableBody);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableBody2);
            }
            case HTML_TABLE_ROW_MODE: {
              writeChunk(destination, startSegmentTableRow);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentTableRow2);
            }
            case HTML_COLGROUP_MODE: {
              writeChunk(destination, startSegmentColGroup);
              writeChunk(destination, responseState.segmentPrefix);
              writeChunk(destination, stringToChunk(id.toString(16)));
              return writeChunkAndReturn(destination, startSegmentColGroup2);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        function writeEndSegment(destination, formatContext) {
          switch (formatContext.insertionMode) {
            case ROOT_HTML_MODE:
            case HTML_MODE: {
              return writeChunkAndReturn(destination, endSegmentHTML);
            }
            case SVG_MODE: {
              return writeChunkAndReturn(destination, endSegmentSVG);
            }
            case MATHML_MODE: {
              return writeChunkAndReturn(destination, endSegmentMathML);
            }
            case HTML_TABLE_MODE: {
              return writeChunkAndReturn(destination, endSegmentTable);
            }
            case HTML_TABLE_BODY_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableBody);
            }
            case HTML_TABLE_ROW_MODE: {
              return writeChunkAndReturn(destination, endSegmentTableRow);
            }
            case HTML_COLGROUP_MODE: {
              return writeChunkAndReturn(destination, endSegmentColGroup);
            }
            default: {
              throw new Error("Unknown insertion mode. This is a bug in React.");
            }
          }
        }
        var completeSegmentFunction = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
        var completeBoundaryFunction = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
        var clientRenderFunction = 'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()}';
        var completeSegmentScript1Full = stringToPrecomputedChunk(completeSegmentFunction + ';$RS("');
        var completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("');
        var completeSegmentScript2 = stringToPrecomputedChunk('","');
        var completeSegmentScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedSegmentInstruction(destination, responseState, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteSegmentFunction) {
            responseState.sentCompleteSegmentFunction = true;
            writeChunk(destination, completeSegmentScript1Full);
          } else {
            writeChunk(destination, completeSegmentScript1Partial);
          }
          writeChunk(destination, responseState.segmentPrefix);
          var formattedID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, formattedID);
          writeChunk(destination, completeSegmentScript2);
          writeChunk(destination, responseState.placeholderPrefix);
          writeChunk(destination, formattedID);
          return writeChunkAndReturn(destination, completeSegmentScript3);
        }
        var completeBoundaryScript1Full = stringToPrecomputedChunk(completeBoundaryFunction + ';$RC("');
        var completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("');
        var completeBoundaryScript2 = stringToPrecomputedChunk('","');
        var completeBoundaryScript3 = stringToPrecomputedChunk('")<\/script>');
        function writeCompletedBoundaryInstruction(destination, responseState, boundaryID, contentSegmentID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentCompleteBoundaryFunction) {
            responseState.sentCompleteBoundaryFunction = true;
            writeChunk(destination, completeBoundaryScript1Full);
          } else {
            writeChunk(destination, completeBoundaryScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          var formattedContentID = stringToChunk(contentSegmentID.toString(16));
          writeChunk(destination, boundaryID);
          writeChunk(destination, completeBoundaryScript2);
          writeChunk(destination, responseState.segmentPrefix);
          writeChunk(destination, formattedContentID);
          return writeChunkAndReturn(destination, completeBoundaryScript3);
        }
        var clientRenderScript1Full = stringToPrecomputedChunk(clientRenderFunction + ';$RX("');
        var clientRenderScript1Partial = stringToPrecomputedChunk('$RX("');
        var clientRenderScript2 = stringToPrecomputedChunk('")<\/script>');
        function writeClientRenderBoundaryInstruction(destination, responseState, boundaryID) {
          writeChunk(destination, responseState.startInlineScript);
          if (!responseState.sentClientRenderFunction) {
            responseState.sentClientRenderFunction = true;
            writeChunk(destination, clientRenderScript1Full);
          } else {
            writeChunk(destination, clientRenderScript1Partial);
          }
          if (boundaryID === null) {
            throw new Error("An ID must have been assigned before we can complete the boundary.");
          }
          writeChunk(destination, boundaryID);
          return writeChunkAndReturn(destination, clientRenderScript2);
        }
        var assign = Object.assign;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_SCOPE_TYPE = Symbol.for("react.scope");
        var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
        var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
        var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for("react.default_value");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeClassComponentFrame(ctor, source, ownerFn) {
          {
            return describeNativeComponentFrame(ctor, true);
          }
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var warnedAboutMissingGetChildContext;
        {
          warnedAboutMissingGetChildContext = {};
        }
        var emptyContextObject = {};
        {
          Object.freeze(emptyContextObject);
        }
        function getMaskedContext(type, unmaskedContext) {
          {
            var contextTypes = type.contextTypes;
            if (!contextTypes) {
              return emptyContextObject;
            }
            var context = {};
            for (var key in contextTypes) {
              context[key] = unmaskedContext[key];
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(contextTypes, context, "context", name);
            }
            return context;
          }
        }
        function processChildContext(instance, type, parentContext, childContextTypes) {
          {
            if (typeof instance.getChildContext !== "function") {
              {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!warnedAboutMissingGetChildContext[componentName]) {
                  warnedAboutMissingGetChildContext[componentName] = true;
                  error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
                }
              }
              return parentContext;
            }
            var childContext = instance.getChildContext();
            for (var contextKey in childContext) {
              if (!(contextKey in childContextTypes)) {
                throw new Error((getComponentNameFromType(type) || "Unknown") + '.getChildContext(): key "' + contextKey + '" is not defined in childContextTypes.');
              }
            }
            {
              var name = getComponentNameFromType(type) || "Unknown";
              checkPropTypes(childContextTypes, childContext, "child context", name);
            }
            return assign({}, parentContext, childContext);
          }
        }
        var rendererSigil;
        {
          rendererSigil = {};
        }
        var rootContextSnapshot = null;
        var currentActiveSnapshot = null;
        function popNode(prev) {
          {
            prev.context._currentValue = prev.parentValue;
          }
        }
        function pushNode(next) {
          {
            next.context._currentValue = next.value;
          }
        }
        function popToNearestCommonAncestor(prev, next) {
          if (prev === next)
            ;
          else {
            popNode(prev);
            var parentPrev = prev.parent;
            var parentNext = next.parent;
            if (parentPrev === null) {
              if (parentNext !== null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
            } else {
              if (parentNext === null) {
                throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
              }
              popToNearestCommonAncestor(parentPrev, parentNext);
            }
            pushNode(next);
          }
        }
        function popAllPrevious(prev) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev !== null) {
            popAllPrevious(parentPrev);
          }
        }
        function pushAllNext(next) {
          var parentNext = next.parent;
          if (parentNext !== null) {
            pushAllNext(parentNext);
          }
          pushNode(next);
        }
        function popPreviousToCommonLevel(prev, next) {
          popNode(prev);
          var parentPrev = prev.parent;
          if (parentPrev === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (parentPrev.depth === next.depth) {
            popToNearestCommonAncestor(parentPrev, next);
          } else {
            popPreviousToCommonLevel(parentPrev, next);
          }
        }
        function popNextToCommonLevel(prev, next) {
          var parentNext = next.parent;
          if (parentNext === null) {
            throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
          }
          if (prev.depth === parentNext.depth) {
            popToNearestCommonAncestor(prev, parentNext);
          } else {
            popNextToCommonLevel(prev, parentNext);
          }
          pushNode(next);
        }
        function switchContext(newSnapshot) {
          var prev = currentActiveSnapshot;
          var next = newSnapshot;
          if (prev !== next) {
            if (prev === null) {
              pushAllNext(next);
            } else if (next === null) {
              popAllPrevious(prev);
            } else if (prev.depth === next.depth) {
              popToNearestCommonAncestor(prev, next);
            } else if (prev.depth > next.depth) {
              popPreviousToCommonLevel(prev, next);
            } else {
              popNextToCommonLevel(prev, next);
            }
            currentActiveSnapshot = next;
          }
        }
        function pushProvider(context, nextValue) {
          var prevValue;
          {
            prevValue = context._currentValue;
            context._currentValue = nextValue;
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
          var prevNode = currentActiveSnapshot;
          var newNode = {
            parent: prevNode,
            depth: prevNode === null ? 0 : prevNode.depth + 1,
            context,
            parentValue: prevValue,
            value: nextValue
          };
          currentActiveSnapshot = newNode;
          return newNode;
        }
        function popProvider(context) {
          var prevSnapshot = currentActiveSnapshot;
          if (prevSnapshot === null) {
            throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          }
          {
            if (prevSnapshot.context !== context) {
              error("The parent context is not the expected context. This is probably a bug in React.");
            }
          }
          {
            var value = prevSnapshot.parentValue;
            if (value === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
              prevSnapshot.context._currentValue = prevSnapshot.context._defaultValue;
            } else {
              prevSnapshot.context._currentValue = value;
            }
            {
              if (context._currentRenderer !== void 0 && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) {
                error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
              }
              context._currentRenderer = rendererSigil;
            }
          }
          return currentActiveSnapshot = prevSnapshot.parent;
        }
        function getActiveContext() {
          return currentActiveSnapshot;
        }
        function readContext(context) {
          var value = context._currentValue;
          return value;
        }
        function get(key) {
          return key._reactInternals;
        }
        function set(key, value) {
          key._reactInternals = value;
        }
        var didWarnAboutNoopUpdateForComponent = {};
        var didWarnAboutDeprecatedWillMount = {};
        var didWarnAboutUninitializedState;
        var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
        var didWarnAboutLegacyLifecyclesAndDerivedState;
        var didWarnAboutUndefinedDerivedState;
        var warnOnUndefinedDerivedState;
        var warnOnInvalidCallback;
        var didWarnAboutDirectlyAssigningPropsToState;
        var didWarnAboutContextTypeAndContextTypes;
        var didWarnAboutInvalidateContextType;
        {
          didWarnAboutUninitializedState = /* @__PURE__ */ new Set();
          didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = /* @__PURE__ */ new Set();
          didWarnAboutLegacyLifecyclesAndDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutDirectlyAssigningPropsToState = /* @__PURE__ */ new Set();
          didWarnAboutUndefinedDerivedState = /* @__PURE__ */ new Set();
          didWarnAboutContextTypeAndContextTypes = /* @__PURE__ */ new Set();
          didWarnAboutInvalidateContextType = /* @__PURE__ */ new Set();
          var didWarnOnInvalidCallback = /* @__PURE__ */ new Set();
          warnOnInvalidCallback = function(callback, callerName) {
            if (callback === null || typeof callback === "function") {
              return;
            }
            var key = callerName + "_" + callback;
            if (!didWarnOnInvalidCallback.has(key)) {
              didWarnOnInvalidCallback.add(key);
              error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
            }
          };
          warnOnUndefinedDerivedState = function(type, partialState) {
            if (partialState === void 0) {
              var componentName = getComponentNameFromType(type) || "Component";
              if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
                didWarnAboutUndefinedDerivedState.add(componentName);
                error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
              }
            }
          };
        }
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && getComponentNameFromType(_constructor) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnAboutNoopUpdateForComponent[warningKey]) {
              return;
            }
            error("%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, callerName, componentName);
            didWarnAboutNoopUpdateForComponent[warningKey] = true;
          }
        }
        var classComponentUpdater = {
          isMounted: function(inst) {
            return false;
          },
          enqueueSetState: function(inst, payload, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "setState");
            } else {
              internals.queue.push(payload);
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          },
          enqueueReplaceState: function(inst, payload, callback) {
            var internals = get(inst);
            internals.replace = true;
            internals.queue = [payload];
            {
              if (callback !== void 0 && callback !== null) {
                warnOnInvalidCallback(callback, "setState");
              }
            }
          },
          enqueueForceUpdate: function(inst, callback) {
            var internals = get(inst);
            if (internals.queue === null) {
              warnNoop(inst, "forceUpdate");
            } else {
              {
                if (callback !== void 0 && callback !== null) {
                  warnOnInvalidCallback(callback, "setState");
                }
              }
            }
          }
        };
        function applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, prevState, nextProps) {
          var partialState = getDerivedStateFromProps(nextProps, prevState);
          {
            warnOnUndefinedDerivedState(ctor, partialState);
          }
          var newState = partialState === null || partialState === void 0 ? prevState : assign({}, prevState, partialState);
          return newState;
        }
        function constructClassInstance(ctor, props, maskedLegacyContext) {
          var context = emptyContextObject;
          var contextType = ctor.contextType;
          {
            if ("contextType" in ctor) {
              var isValid = contextType === null || contextType !== void 0 && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === void 0;
              if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
                didWarnAboutInvalidateContextType.add(ctor);
                var addendum = "";
                if (contextType === void 0) {
                  addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
                } else if (typeof contextType !== "object") {
                  addendum = " However, it is set to a " + typeof contextType + ".";
                } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
                  addendum = " Did you accidentally pass the Context.Provider instead?";
                } else if (contextType._context !== void 0) {
                  addendum = " Did you accidentally pass the Context.Consumer instead?";
                } else {
                  addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                }
                error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
              }
            }
          }
          if (typeof contextType === "object" && contextType !== null) {
            context = readContext(contextType);
          } else {
            context = maskedLegacyContext;
          }
          var instance = new ctor(props, context);
          {
            if (typeof ctor.getDerivedStateFromProps === "function" && (instance.state === null || instance.state === void 0)) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutUninitializedState.has(componentName)) {
                didWarnAboutUninitializedState.add(componentName);
                error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
              }
            }
            if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
              var foundWillMountName = null;
              var foundWillReceivePropsName = null;
              var foundWillUpdateName = null;
              if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) {
                foundWillMountName = "componentWillMount";
              } else if (typeof instance.UNSAFE_componentWillMount === "function") {
                foundWillMountName = "UNSAFE_componentWillMount";
              }
              if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) {
                foundWillReceivePropsName = "componentWillReceiveProps";
              } else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") {
                foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
              }
              if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) {
                foundWillUpdateName = "componentWillUpdate";
              } else if (typeof instance.UNSAFE_componentWillUpdate === "function") {
                foundWillUpdateName = "UNSAFE_componentWillUpdate";
              }
              if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
                var _componentName = getComponentNameFromType(ctor) || "Component";
                var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
                  didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
                  error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
                }
              }
            }
          }
          return instance;
        }
        function checkClassInstance(instance, ctor, newProps) {
          {
            var name = getComponentNameFromType(ctor) || "Component";
            var renderPresent = instance.render;
            if (!renderPresent) {
              if (ctor.prototype && typeof ctor.prototype.render === "function") {
                error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
              } else {
                error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
              }
            }
            if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) {
              error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            }
            if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            }
            if (instance.propTypes) {
              error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
            }
            if (instance.contextType) {
              error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            }
            {
              if (instance.contextTypes) {
                error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
              }
              if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
                didWarnAboutContextTypeAndContextTypes.add(ctor);
                error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
              }
            }
            if (typeof instance.componentShouldUpdate === "function") {
              error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            }
            if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") {
              error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
            }
            if (typeof instance.componentDidUnmount === "function") {
              error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            }
            if (typeof instance.componentDidReceiveProps === "function") {
              error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            }
            if (typeof instance.componentWillRecieveProps === "function") {
              error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            }
            if (typeof instance.UNSAFE_componentWillRecieveProps === "function") {
              error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            }
            var hasMutatedProps = instance.props !== newProps;
            if (instance.props !== void 0 && hasMutatedProps) {
              error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
            }
            if (instance.defaultProps) {
              error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            }
            if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
              didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
              error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
            }
            if (typeof instance.getDerivedStateFromProps === "function") {
              error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof instance.getDerivedStateFromError === "function") {
              error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            }
            if (typeof ctor.getSnapshotBeforeUpdate === "function") {
              error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            }
            var _state = instance.state;
            if (_state && (typeof _state !== "object" || isArray(_state))) {
              error("%s.state: must be set to an object or null", name);
            }
            if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") {
              error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            }
          }
        }
        function callComponentWillMount(type, instance) {
          var oldState = instance.state;
          if (typeof instance.componentWillMount === "function") {
            {
              if (instance.componentWillMount.__suppressDeprecationWarning !== true) {
                var componentName = getComponentNameFromType(type) || "Unknown";
                if (!didWarnAboutDeprecatedWillMount[componentName]) {
                  warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", componentName);
                  didWarnAboutDeprecatedWillMount[componentName] = true;
                }
              }
            }
            instance.componentWillMount();
          }
          if (typeof instance.UNSAFE_componentWillMount === "function") {
            instance.UNSAFE_componentWillMount();
          }
          if (oldState !== instance.state) {
            {
              error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component");
            }
            classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
          }
        }
        function processUpdateQueue(internalInstance, inst, props, maskedLegacyContext) {
          if (internalInstance.queue !== null && internalInstance.queue.length > 0) {
            var oldQueue = internalInstance.queue;
            var oldReplace = internalInstance.replace;
            internalInstance.queue = null;
            internalInstance.replace = false;
            if (oldReplace && oldQueue.length === 1) {
              inst.state = oldQueue[0];
            } else {
              var nextState = oldReplace ? oldQueue[0] : inst.state;
              var dontMutate = true;
              for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
                var partial = oldQueue[i];
                var partialState = typeof partial === "function" ? partial.call(inst, nextState, props, maskedLegacyContext) : partial;
                if (partialState != null) {
                  if (dontMutate) {
                    dontMutate = false;
                    nextState = assign({}, nextState, partialState);
                  } else {
                    assign(nextState, partialState);
                  }
                }
              }
              inst.state = nextState;
            }
          } else {
            internalInstance.queue = null;
          }
        }
        function mountClassInstance(instance, ctor, newProps, maskedLegacyContext) {
          {
            checkClassInstance(instance, ctor, newProps);
          }
          var initialState = instance.state !== void 0 ? instance.state : null;
          instance.updater = classComponentUpdater;
          instance.props = newProps;
          instance.state = initialState;
          var internalInstance = {
            queue: [],
            replace: false
          };
          set(instance, internalInstance);
          var contextType = ctor.contextType;
          if (typeof contextType === "object" && contextType !== null) {
            instance.context = readContext(contextType);
          } else {
            instance.context = maskedLegacyContext;
          }
          {
            if (instance.state === newProps) {
              var componentName = getComponentNameFromType(ctor) || "Component";
              if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
                didWarnAboutDirectlyAssigningPropsToState.add(componentName);
                error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
              }
            }
          }
          var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
          if (typeof getDerivedStateFromProps === "function") {
            instance.state = applyDerivedStateFromProps(instance, ctor, getDerivedStateFromProps, initialState, newProps);
          }
          if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
            callComponentWillMount(ctor, instance);
            processUpdateQueue(internalInstance, instance, newProps, maskedLegacyContext);
          }
        }
        var emptyTreeContext = {
          id: 1,
          overflow: ""
        };
        function getTreeId(context) {
          var overflow = context.overflow;
          var idWithLeadingBit = context.id;
          var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
          return id.toString(32) + overflow;
        }
        function pushTreeContext(baseContext, totalChildren, index) {
          var baseIdWithLeadingBit = baseContext.id;
          var baseOverflow = baseContext.overflow;
          var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
          var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
          var slot = index + 1;
          var length = getBitLength(totalChildren) + baseLength;
          if (length > 30) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            var newOverflowBits = (1 << numberOfOverflowBits) - 1;
            var newOverflow = (baseId & newOverflowBits).toString(32);
            var restOfBaseId = baseId >> numberOfOverflowBits;
            var restOfBaseLength = baseLength - numberOfOverflowBits;
            var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
            var restOfNewBits = slot << restOfBaseLength;
            var id = restOfNewBits | restOfBaseId;
            var overflow = newOverflow + baseOverflow;
            return {
              id: 1 << restOfLength | id,
              overflow
            };
          } else {
            var newBits = slot << baseLength;
            var _id = newBits | baseId;
            var _overflow = baseOverflow;
            return {
              id: 1 << length | _id,
              overflow: _overflow
            };
          }
        }
        function getBitLength(number) {
          return 32 - clz32(number);
        }
        function getLeadingBit(id) {
          return 1 << getBitLength(id) - 1;
        }
        var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
        var log = Math.log;
        var LN2 = Math.LN2;
        function clz32Fallback(x) {
          var asUint = x >>> 0;
          if (asUint === 0) {
            return 32;
          }
          return 31 - (log(asUint) / LN2 | 0) | 0;
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var currentlyRenderingComponent = null;
        var currentlyRenderingTask = null;
        var firstWorkInProgressHook = null;
        var workInProgressHook = null;
        var isReRender = false;
        var didScheduleRenderPhaseUpdate = false;
        var localIdCounter = 0;
        var renderPhaseUpdates = null;
        var numberOfReRenders = 0;
        var RE_RENDER_LIMIT = 25;
        var isInHookUserCodeInDev = false;
        var currentHookNameInDev;
        function resolveCurrentlyRenderingComponent() {
          if (currentlyRenderingComponent === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
          {
            if (isInHookUserCodeInDev) {
              error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
            }
          }
          return currentlyRenderingComponent;
        }
        function areHookInputsEqual(nextDeps, prevDeps) {
          if (prevDeps === null) {
            {
              error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
            }
            return false;
          }
          {
            if (nextDeps.length !== prevDeps.length) {
              error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + nextDeps.join(", ") + "]", "[" + prevDeps.join(", ") + "]");
            }
          }
          for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
            if (objectIs(nextDeps[i], prevDeps[i])) {
              continue;
            }
            return false;
          }
          return true;
        }
        function createHook() {
          if (numberOfReRenders > 0) {
            throw new Error("Rendered more hooks than during the previous render");
          }
          return {
            memoizedState: null,
            queue: null,
            next: null
          };
        }
        function createWorkInProgressHook() {
          if (workInProgressHook === null) {
            if (firstWorkInProgressHook === null) {
              isReRender = false;
              firstWorkInProgressHook = workInProgressHook = createHook();
            } else {
              isReRender = true;
              workInProgressHook = firstWorkInProgressHook;
            }
          } else {
            if (workInProgressHook.next === null) {
              isReRender = false;
              workInProgressHook = workInProgressHook.next = createHook();
            } else {
              isReRender = true;
              workInProgressHook = workInProgressHook.next;
            }
          }
          return workInProgressHook;
        }
        function prepareToUseHooks(task, componentIdentity) {
          currentlyRenderingComponent = componentIdentity;
          currentlyRenderingTask = task;
          {
            isInHookUserCodeInDev = false;
          }
          localIdCounter = 0;
        }
        function finishHooks(Component, props, children, refOrContext) {
          while (didScheduleRenderPhaseUpdate) {
            didScheduleRenderPhaseUpdate = false;
            localIdCounter = 0;
            numberOfReRenders += 1;
            workInProgressHook = null;
            children = Component(props, refOrContext);
          }
          resetHooksState();
          return children;
        }
        function checkDidRenderIdHook() {
          var didRenderIdHook = localIdCounter !== 0;
          return didRenderIdHook;
        }
        function resetHooksState() {
          {
            isInHookUserCodeInDev = false;
          }
          currentlyRenderingComponent = null;
          currentlyRenderingTask = null;
          didScheduleRenderPhaseUpdate = false;
          firstWorkInProgressHook = null;
          numberOfReRenders = 0;
          renderPhaseUpdates = null;
          workInProgressHook = null;
        }
        function readContext$1(context) {
          {
            if (isInHookUserCodeInDev) {
              error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            }
          }
          return readContext(context);
        }
        function useContext4(context) {
          {
            currentHookNameInDev = "useContext";
          }
          resolveCurrentlyRenderingComponent();
          return readContext(context);
        }
        function basicStateReducer(state, action) {
          return typeof action === "function" ? action(state) : action;
        }
        function useState4(initialState) {
          {
            currentHookNameInDev = "useState";
          }
          return useReducer(basicStateReducer, initialState);
        }
        function useReducer(reducer, initialArg, init) {
          {
            if (reducer !== basicStateReducer) {
              currentHookNameInDev = "useReducer";
            }
          }
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          if (isReRender) {
            var queue = workInProgressHook.queue;
            var dispatch = queue.dispatch;
            if (renderPhaseUpdates !== null) {
              var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
              if (firstRenderPhaseUpdate !== void 0) {
                renderPhaseUpdates.delete(queue);
                var newState = workInProgressHook.memoizedState;
                var update = firstRenderPhaseUpdate;
                do {
                  var action = update.action;
                  {
                    isInHookUserCodeInDev = true;
                  }
                  newState = reducer(newState, action);
                  {
                    isInHookUserCodeInDev = false;
                  }
                  update = update.next;
                } while (update !== null);
                workInProgressHook.memoizedState = newState;
                return [newState, dispatch];
              }
            }
            return [workInProgressHook.memoizedState, dispatch];
          } else {
            {
              isInHookUserCodeInDev = true;
            }
            var initialState;
            if (reducer === basicStateReducer) {
              initialState = typeof initialArg === "function" ? initialArg() : initialArg;
            } else {
              initialState = init !== void 0 ? init(initialArg) : initialArg;
            }
            {
              isInHookUserCodeInDev = false;
            }
            workInProgressHook.memoizedState = initialState;
            var _queue = workInProgressHook.queue = {
              last: null,
              dispatch: null
            };
            var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);
            return [workInProgressHook.memoizedState, _dispatch];
          }
        }
        function useMemo4(nextCreate, deps) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var nextDeps = deps === void 0 ? null : deps;
          if (workInProgressHook !== null) {
            var prevState = workInProgressHook.memoizedState;
            if (prevState !== null) {
              if (nextDeps !== null) {
                var prevDeps = prevState[1];
                if (areHookInputsEqual(nextDeps, prevDeps)) {
                  return prevState[0];
                }
              }
            }
          }
          {
            isInHookUserCodeInDev = true;
          }
          var nextValue = nextCreate();
          {
            isInHookUserCodeInDev = false;
          }
          workInProgressHook.memoizedState = [nextValue, nextDeps];
          return nextValue;
        }
        function useRef5(initialValue) {
          currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
          workInProgressHook = createWorkInProgressHook();
          var previousRef = workInProgressHook.memoizedState;
          if (previousRef === null) {
            var ref = {
              current: initialValue
            };
            {
              Object.seal(ref);
            }
            workInProgressHook.memoizedState = ref;
            return ref;
          } else {
            return previousRef;
          }
        }
        function useLayoutEffect4(create, inputs) {
          {
            currentHookNameInDev = "useLayoutEffect";
            error("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
          }
        }
        function dispatchAction(componentIdentity, queue, action) {
          if (numberOfReRenders >= RE_RENDER_LIMIT) {
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          }
          if (componentIdentity === currentlyRenderingComponent) {
            didScheduleRenderPhaseUpdate = true;
            var update = {
              action,
              next: null
            };
            if (renderPhaseUpdates === null) {
              renderPhaseUpdates = /* @__PURE__ */ new Map();
            }
            var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
            if (firstRenderPhaseUpdate === void 0) {
              renderPhaseUpdates.set(queue, update);
            } else {
              var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
              while (lastRenderPhaseUpdate.next !== null) {
                lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
              }
              lastRenderPhaseUpdate.next = update;
            }
          }
        }
        function useCallback5(callback, deps) {
          return useMemo4(function() {
            return callback;
          }, deps);
        }
        function useMutableSource(source, getSnapshot, subscribe) {
          resolveCurrentlyRenderingComponent();
          return getSnapshot(source._source);
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          if (getServerSnapshot === void 0) {
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
          }
          return getServerSnapshot();
        }
        function useDeferredValue(value) {
          resolveCurrentlyRenderingComponent();
          return value;
        }
        function unsupportedStartTransition() {
          throw new Error("startTransition cannot be called during server rendering.");
        }
        function useTransition2() {
          resolveCurrentlyRenderingComponent();
          return [false, unsupportedStartTransition];
        }
        function useId() {
          var task = currentlyRenderingTask;
          var treeId = getTreeId(task.treeContext);
          var responseState = currentResponseState;
          if (responseState === null) {
            throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
          }
          var localId = localIdCounter++;
          return makeId(responseState, treeId, localId);
        }
        function noop() {
        }
        var Dispatcher = {
          readContext: readContext$1,
          useContext: useContext4,
          useMemo: useMemo4,
          useReducer,
          useRef: useRef5,
          useState: useState4,
          useInsertionEffect: noop,
          useLayoutEffect: useLayoutEffect4,
          useCallback: useCallback5,
          useImperativeHandle: noop,
          useEffect: noop,
          useDebugValue: noop,
          useDeferredValue,
          useTransition: useTransition2,
          useId,
          useMutableSource,
          useSyncExternalStore
        };
        var currentResponseState = null;
        function setCurrentResponseState(responseState) {
          currentResponseState = responseState;
        }
        function getStackByComponentStackNode(componentStack) {
          try {
            var info = "";
            var node = componentStack;
            do {
              switch (node.tag) {
                case 0:
                  info += describeBuiltInComponentFrame(node.type, null, null);
                  break;
                case 1:
                  info += describeFunctionComponentFrame(node.type, null, null);
                  break;
                case 2:
                  info += describeClassComponentFrame(node.type, null, null);
                  break;
              }
              node = node.parent;
            } while (node);
            return info;
          } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        var PENDING = 0;
        var COMPLETED = 1;
        var FLUSHED = 2;
        var ABORTED = 3;
        var ERRORED = 4;
        var OPEN = 0;
        var CLOSING = 1;
        var CLOSED = 2;
        var DEFAULT_PROGRESSIVE_CHUNK_SIZE = 12800;
        function defaultErrorHandler(error2) {
          console["error"](error2);
        }
        function noop$1() {
        }
        function createRequest(children, responseState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError) {
          var pingedTasks = [];
          var abortSet = /* @__PURE__ */ new Set();
          var request = {
            destination: null,
            responseState,
            progressiveChunkSize: progressiveChunkSize === void 0 ? DEFAULT_PROGRESSIVE_CHUNK_SIZE : progressiveChunkSize,
            status: OPEN,
            fatalError: null,
            nextSegmentId: 0,
            allPendingTasks: 0,
            pendingRootTasks: 0,
            completedRootSegment: null,
            abortableTasks: abortSet,
            pingedTasks,
            clientRenderedBoundaries: [],
            completedBoundaries: [],
            partialBoundaries: [],
            onError: onError === void 0 ? defaultErrorHandler : onError,
            onAllReady: onAllReady === void 0 ? noop$1 : onAllReady,
            onShellReady: onShellReady === void 0 ? noop$1 : onShellReady,
            onShellError: onShellError === void 0 ? noop$1 : onShellError,
            onFatalError: onFatalError === void 0 ? noop$1 : onFatalError
          };
          var rootSegment = createPendingSegment(request, 0, null, rootFormatContext);
          rootSegment.parentFlushed = true;
          var rootTask = createTask(request, children, null, rootSegment, abortSet, emptyContextObject, rootContextSnapshot, emptyTreeContext);
          pingedTasks.push(rootTask);
          return request;
        }
        function pingTask(request, task) {
          var pingedTasks = request.pingedTasks;
          pingedTasks.push(task);
          if (pingedTasks.length === 1) {
            scheduleWork(function() {
              return performWork(request);
            });
          }
        }
        function createSuspenseBoundary(request, fallbackAbortableTasks) {
          return {
            id: UNINITIALIZED_SUSPENSE_BOUNDARY_ID,
            rootSegmentID: -1,
            parentFlushed: false,
            pendingTasks: 0,
            forceClientRender: false,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks
          };
        }
        function createTask(request, node, blockedBoundary, blockedSegment, abortSet, legacyContext, context, treeContext) {
          request.allPendingTasks++;
          if (blockedBoundary === null) {
            request.pendingRootTasks++;
          } else {
            blockedBoundary.pendingTasks++;
          }
          var task = {
            node,
            ping: function() {
              return pingTask(request, task);
            },
            blockedBoundary,
            blockedSegment,
            abortSet,
            legacyContext,
            context,
            treeContext
          };
          {
            task.componentStack = null;
          }
          abortSet.add(task);
          return task;
        }
        function createPendingSegment(request, index, boundary, formatContext) {
          return {
            status: PENDING,
            id: -1,
            index,
            parentFlushed: false,
            chunks: [],
            children: [],
            formatContext,
            boundary
          };
        }
        var currentTaskInDEV = null;
        function getCurrentStackInDEV() {
          {
            if (currentTaskInDEV === null || currentTaskInDEV.componentStack === null) {
              return "";
            }
            return getStackByComponentStackNode(currentTaskInDEV.componentStack);
          }
        }
        function pushBuiltInComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 0,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushFunctionComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 1,
              parent: task.componentStack,
              type
            };
          }
        }
        function pushClassComponentStackInDEV(task, type) {
          {
            task.componentStack = {
              tag: 2,
              parent: task.componentStack,
              type
            };
          }
        }
        function popComponentStackInDEV(task) {
          {
            if (task.componentStack === null) {
              error("Unexpectedly popped too many stack frames. This is a bug in React.");
            } else {
              task.componentStack = task.componentStack.parent;
            }
          }
        }
        function logRecoverableError(request, error2) {
          var onError = request.onError;
          onError(error2);
        }
        function fatalError(request, error2) {
          var onShellError = request.onShellError;
          onShellError(error2);
          var onFatalError = request.onFatalError;
          onFatalError(error2);
          if (request.destination !== null) {
            request.status = CLOSED;
            closeWithError(request.destination, error2);
          } else {
            request.status = CLOSING;
            request.fatalError = error2;
          }
        }
        function renderSuspenseBoundary(request, task, props) {
          pushBuiltInComponentStackInDEV(task, "Suspense");
          var parentBoundary = task.blockedBoundary;
          var parentSegment = task.blockedSegment;
          var fallback = props.fallback;
          var content = props.children;
          var fallbackAbortSet = /* @__PURE__ */ new Set();
          var newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
          var insertionIndex = parentSegment.chunks.length;
          var boundarySegment = createPendingSegment(request, insertionIndex, newBoundary, parentSegment.formatContext);
          parentSegment.children.push(boundarySegment);
          var contentRootSegment = createPendingSegment(request, 0, null, parentSegment.formatContext);
          contentRootSegment.parentFlushed = true;
          task.blockedBoundary = newBoundary;
          task.blockedSegment = contentRootSegment;
          try {
            renderNode(request, task, content);
            contentRootSegment.status = COMPLETED;
            queueCompletedSegment(newBoundary, contentRootSegment);
            if (newBoundary.pendingTasks === 0) {
              popComponentStackInDEV(task);
              return;
            }
          } catch (error2) {
            contentRootSegment.status = ERRORED;
            logRecoverableError(request, error2);
            newBoundary.forceClientRender = true;
          } finally {
            task.blockedBoundary = parentBoundary;
            task.blockedSegment = parentSegment;
          }
          var suspendedFallbackTask = createTask(request, fallback, parentBoundary, boundarySegment, fallbackAbortSet, task.legacyContext, task.context, task.treeContext);
          {
            suspendedFallbackTask.componentStack = task.componentStack;
          }
          request.pingedTasks.push(suspendedFallbackTask);
          popComponentStackInDEV(task);
        }
        function renderHostElement(request, task, type, props) {
          pushBuiltInComponentStackInDEV(task, type);
          var segment = task.blockedSegment;
          var children = pushStartInstance(segment.chunks, type, props, request.responseState, segment.formatContext);
          var prevContext = segment.formatContext;
          segment.formatContext = getChildFormatContext(prevContext, type, props);
          renderNode(request, task, children);
          segment.formatContext = prevContext;
          pushEndInstance(segment.chunks, type);
          popComponentStackInDEV(task);
        }
        function shouldConstruct$1(Component) {
          return Component.prototype && Component.prototype.isReactComponent;
        }
        function renderWithHooks(request, task, Component, props, secondArg) {
          var componentIdentity = {};
          prepareToUseHooks(task, componentIdentity);
          var result = Component(props, secondArg);
          return finishHooks(Component, props, result, secondArg);
        }
        function finishClassComponent(request, task, instance, Component, props) {
          var nextChildren = instance.render();
          {
            if (instance.props !== props) {
              if (!didWarnAboutReassigningProps) {
                error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(Component) || "a component");
              }
              didWarnAboutReassigningProps = true;
            }
          }
          {
            var childContextTypes = Component.childContextTypes;
            if (childContextTypes !== null && childContextTypes !== void 0) {
              var previousContext = task.legacyContext;
              var mergedContext = processChildContext(instance, Component, previousContext, childContextTypes);
              task.legacyContext = mergedContext;
              renderNodeDestructive(request, task, nextChildren);
              task.legacyContext = previousContext;
              return;
            }
          }
          renderNodeDestructive(request, task, nextChildren);
        }
        function renderClassComponent(request, task, Component, props) {
          pushClassComponentStackInDEV(task, Component);
          var maskedContext = getMaskedContext(Component, task.legacyContext);
          var instance = constructClassInstance(Component, props, maskedContext);
          mountClassInstance(instance, Component, props, maskedContext);
          finishClassComponent(request, task, instance, Component, props);
          popComponentStackInDEV(task);
        }
        var didWarnAboutBadClass = {};
        var didWarnAboutModulePatternComponent = {};
        var didWarnAboutContextTypeOnFunctionComponent = {};
        var didWarnAboutGetDerivedStateOnFunctionComponent = {};
        var didWarnAboutReassigningProps = false;
        var didWarnAboutGenerators = false;
        var didWarnAboutMaps = false;
        var hasWarnedAboutUsingContextAsConsumer = false;
        function renderIndeterminateComponent(request, task, Component, props) {
          var legacyContext;
          {
            legacyContext = getMaskedContext(Component, task.legacyContext);
          }
          pushFunctionComponentStackInDEV(task, Component);
          {
            if (Component.prototype && typeof Component.prototype.render === "function") {
              var componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutBadClass[componentName]) {
                error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
                didWarnAboutBadClass[componentName] = true;
              }
            }
          }
          var value = renderWithHooks(request, task, Component, props, legacyContext);
          var hasId = checkDidRenderIdHook();
          {
            if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
              var _componentName = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
                didWarnAboutModulePatternComponent[_componentName] = true;
              }
            }
          }
          if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === void 0) {
            {
              var _componentName2 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutModulePatternComponent[_componentName2]) {
                error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
                didWarnAboutModulePatternComponent[_componentName2] = true;
              }
            }
            mountClassInstance(value, Component, props, legacyContext);
            finishClassComponent(request, task, value, Component, props);
          } else {
            {
              validateFunctionComponentInDev(Component);
            }
            if (hasId) {
              var prevTreeContext = task.treeContext;
              var totalChildren = 1;
              var index = 0;
              task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
              try {
                renderNodeDestructive(request, task, value);
              } finally {
                task.treeContext = prevTreeContext;
              }
            } else {
              renderNodeDestructive(request, task, value);
            }
          }
          popComponentStackInDEV(task);
        }
        function validateFunctionComponentInDev(Component) {
          {
            if (Component) {
              if (Component.childContextTypes) {
                error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
              }
            }
            if (typeof Component.getDerivedStateFromProps === "function") {
              var _componentName3 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
                error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
              }
            }
            if (typeof Component.contextType === "object" && Component.contextType !== null) {
              var _componentName4 = getComponentNameFromType(Component) || "Unknown";
              if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
                error("%s: Function components do not support contextType.", _componentName4);
                didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
              }
            }
          }
        }
        function resolveDefaultProps(Component, baseProps) {
          if (Component && Component.defaultProps) {
            var props = assign({}, baseProps);
            var defaultProps = Component.defaultProps;
            for (var propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
            return props;
          }
          return baseProps;
        }
        function renderForwardRef(request, task, type, props, ref) {
          pushFunctionComponentStackInDEV(task, type.render);
          var children = renderWithHooks(request, task, type.render, props, ref);
          var hasId = checkDidRenderIdHook();
          if (hasId) {
            var prevTreeContext = task.treeContext;
            var totalChildren = 1;
            var index = 0;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, index);
            try {
              renderNodeDestructive(request, task, children);
            } finally {
              task.treeContext = prevTreeContext;
            }
          } else {
            renderNodeDestructive(request, task, children);
          }
          popComponentStackInDEV(task);
        }
        function renderMemo(request, task, type, props, ref) {
          var innerType = type.type;
          var resolvedProps = resolveDefaultProps(innerType, props);
          renderElement(request, task, innerType, resolvedProps, ref);
        }
        function renderContextConsumer(request, task, context, props) {
          {
            if (context._context === void 0) {
              if (context !== context.Consumer) {
                if (!hasWarnedAboutUsingContextAsConsumer) {
                  hasWarnedAboutUsingContextAsConsumer = true;
                  error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                }
              }
            } else {
              context = context._context;
            }
          }
          var render = props.children;
          {
            if (typeof render !== "function") {
              error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
            }
          }
          var newValue = readContext(context);
          var newChildren = render(newValue);
          renderNodeDestructive(request, task, newChildren);
        }
        function renderContextProvider(request, task, type, props) {
          var context = type._context;
          var value = props.value;
          var children = props.children;
          var prevSnapshot;
          {
            prevSnapshot = task.context;
          }
          task.context = pushProvider(context, value);
          renderNodeDestructive(request, task, children);
          task.context = popProvider(context);
          {
            if (prevSnapshot !== task.context) {
              error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
            }
          }
        }
        function renderLazyComponent(request, task, lazyComponent, props, ref) {
          pushBuiltInComponentStackInDEV(task, "Lazy");
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;
          var Component = init(payload);
          var resolvedProps = resolveDefaultProps(Component, props);
          renderElement(request, task, Component, resolvedProps, ref);
          popComponentStackInDEV(task);
        }
        function renderElement(request, task, type, props, ref) {
          if (typeof type === "function") {
            if (shouldConstruct$1(type)) {
              renderClassComponent(request, task, type, props);
              return;
            } else {
              renderIndeterminateComponent(request, task, type, props);
              return;
            }
          }
          if (typeof type === "string") {
            renderHostElement(request, task, type, props);
            return;
          }
          switch (type) {
            case REACT_LEGACY_HIDDEN_TYPE:
            case REACT_DEBUG_TRACING_MODE_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_FRAGMENT_TYPE: {
              renderNodeDestructive(request, task, props.children);
              return;
            }
            case REACT_SUSPENSE_LIST_TYPE: {
              pushBuiltInComponentStackInDEV(task, "SuspenseList");
              renderNodeDestructive(request, task, props.children);
              popComponentStackInDEV(task);
              return;
            }
            case REACT_SCOPE_TYPE: {
              throw new Error("ReactDOMServer does not yet support scope components.");
            }
            case REACT_SUSPENSE_TYPE: {
              {
                renderSuspenseBoundary(request, task, props);
              }
              return;
            }
          }
          if (typeof type === "object" && type !== null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE: {
                renderForwardRef(request, task, type, props, ref);
                return;
              }
              case REACT_MEMO_TYPE: {
                renderMemo(request, task, type, props, ref);
                return;
              }
              case REACT_PROVIDER_TYPE: {
                renderContextProvider(request, task, type, props);
                return;
              }
              case REACT_CONTEXT_TYPE: {
                renderContextConsumer(request, task, type, props);
                return;
              }
              case REACT_LAZY_TYPE: {
                renderLazyComponent(request, task, type, props);
                return;
              }
            }
          }
          var info = "";
          {
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
          }
          throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
        }
        function validateIterable(iterable, iteratorFn) {
          {
            if (typeof Symbol === "function" && iterable[Symbol.toStringTag] === "Generator") {
              if (!didWarnAboutGenerators) {
                error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
              }
              didWarnAboutGenerators = true;
            }
            if (iterable.entries === iteratorFn) {
              if (!didWarnAboutMaps) {
                error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
              }
              didWarnAboutMaps = true;
            }
          }
        }
        function renderNodeDestructive(request, task, node) {
          task.node = node;
          if (typeof node === "object" && node !== null) {
            switch (node.$$typeof) {
              case REACT_ELEMENT_TYPE: {
                var element = node;
                var type = element.type;
                var props = element.props;
                var ref = element.ref;
                renderElement(request, task, type, props, ref);
                return;
              }
              case REACT_PORTAL_TYPE:
                throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
              case REACT_LAZY_TYPE: {
                var lazyNode = node;
                var payload = lazyNode._payload;
                var init = lazyNode._init;
                var resolvedNode = init(payload);
                renderNodeDestructive(request, task, resolvedNode);
                return;
              }
            }
            if (isArray(node)) {
              renderChildrenArray(request, task, node);
              return;
            }
            var iteratorFn = getIteratorFn(node);
            if (iteratorFn) {
              {
                validateIterable(node, iteratorFn);
              }
              var iterator = iteratorFn.call(node);
              if (iterator) {
                var step = iterator.next();
                if (!step.done) {
                  var children = [];
                  do {
                    children.push(step.value);
                    step = iterator.next();
                  } while (!step.done);
                  renderChildrenArray(request, task, children);
                  return;
                }
                return;
              }
            }
            var childString = Object.prototype.toString.call(node);
            throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(node).join(", ") + "}" : childString) + "). If you meant to render a collection of children, use an array instead.");
          }
          if (typeof node === "string") {
            pushTextInstance(task.blockedSegment.chunks, node, request.responseState);
            return;
          }
          if (typeof node === "number") {
            pushTextInstance(task.blockedSegment.chunks, "" + node, request.responseState);
            return;
          }
          {
            if (typeof node === "function") {
              error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
            }
          }
        }
        function renderChildrenArray(request, task, children) {
          var totalChildren = children.length;
          for (var i = 0; i < totalChildren; i++) {
            var prevTreeContext = task.treeContext;
            task.treeContext = pushTreeContext(prevTreeContext, totalChildren, i);
            try {
              renderNode(request, task, children[i]);
            } finally {
              task.treeContext = prevTreeContext;
            }
          }
        }
        function spawnNewSuspendedTask(request, task, x) {
          var segment = task.blockedSegment;
          var insertionIndex = segment.chunks.length;
          var newSegment = createPendingSegment(request, insertionIndex, null, segment.formatContext);
          segment.children.push(newSegment);
          var newTask = createTask(request, task.node, task.blockedBoundary, newSegment, task.abortSet, task.legacyContext, task.context, task.treeContext);
          {
            if (task.componentStack !== null) {
              newTask.componentStack = task.componentStack.parent;
            }
          }
          var ping = newTask.ping;
          x.then(ping, ping);
        }
        function renderNode(request, task, node) {
          var previousFormatContext = task.blockedSegment.formatContext;
          var previousLegacyContext = task.legacyContext;
          var previousContext = task.context;
          var previousComponentStack = null;
          {
            previousComponentStack = task.componentStack;
          }
          try {
            return renderNodeDestructive(request, task, node);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              spawnNewSuspendedTask(request, task, x);
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              return;
            } else {
              task.blockedSegment.formatContext = previousFormatContext;
              task.legacyContext = previousLegacyContext;
              task.context = previousContext;
              switchContext(previousContext);
              {
                task.componentStack = previousComponentStack;
              }
              throw x;
            }
          }
        }
        function erroredTask(request, boundary, segment, error2) {
          logRecoverableError(request, error2);
          if (boundary === null) {
            fatalError(request, error2);
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function abortTaskSoft(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          finishedTask(request, boundary, segment);
        }
        function abortTask(task) {
          var request = this;
          var boundary = task.blockedBoundary;
          var segment = task.blockedSegment;
          segment.status = ABORTED;
          if (boundary === null) {
            request.allPendingTasks--;
            if (request.status !== CLOSED) {
              request.status = CLOSED;
              if (request.destination !== null) {
                close(request.destination);
              }
            }
          } else {
            boundary.pendingTasks--;
            if (!boundary.forceClientRender) {
              boundary.forceClientRender = true;
              if (boundary.parentFlushed) {
                request.clientRenderedBoundaries.push(boundary);
              }
            }
            boundary.fallbackAbortableTasks.forEach(abortTask, request);
            boundary.fallbackAbortableTasks.clear();
            request.allPendingTasks--;
            if (request.allPendingTasks === 0) {
              var onAllReady = request.onAllReady;
              onAllReady();
            }
          }
        }
        function queueCompletedSegment(boundary, segment) {
          if (segment.chunks.length === 0 && segment.children.length === 1 && segment.children[0].boundary === null) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = true;
            if (childSegment.status === COMPLETED) {
              queueCompletedSegment(boundary, childSegment);
            }
          } else {
            var completedSegments = boundary.completedSegments;
            completedSegments.push(segment);
          }
        }
        function finishedTask(request, boundary, segment) {
          if (boundary === null) {
            if (segment.parentFlushed) {
              if (request.completedRootSegment !== null) {
                throw new Error("There can only be one root segment. This is a bug in React.");
              }
              request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            if (request.pendingRootTasks === 0) {
              request.onShellError = noop$1;
              var onShellReady = request.onShellReady;
              onShellReady();
            }
          } else {
            boundary.pendingTasks--;
            if (boundary.forceClientRender)
              ;
            else if (boundary.pendingTasks === 0) {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                }
              }
              if (boundary.parentFlushed) {
                request.completedBoundaries.push(boundary);
              }
              boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request);
              boundary.fallbackAbortableTasks.clear();
            } else {
              if (segment.parentFlushed) {
                if (segment.status === COMPLETED) {
                  queueCompletedSegment(boundary, segment);
                  var completedSegments = boundary.completedSegments;
                  if (completedSegments.length === 1) {
                    if (boundary.parentFlushed) {
                      request.partialBoundaries.push(boundary);
                    }
                  }
                }
              }
            }
          }
          request.allPendingTasks--;
          if (request.allPendingTasks === 0) {
            var onAllReady = request.onAllReady;
            onAllReady();
          }
        }
        function retryTask(request, task) {
          var segment = task.blockedSegment;
          if (segment.status !== PENDING) {
            return;
          }
          switchContext(task.context);
          var prevTaskInDEV = null;
          {
            prevTaskInDEV = currentTaskInDEV;
            currentTaskInDEV = task;
          }
          try {
            renderNodeDestructive(request, task, task.node);
            task.abortSet.delete(task);
            segment.status = COMPLETED;
            finishedTask(request, task.blockedBoundary, segment);
          } catch (x) {
            resetHooksState();
            if (typeof x === "object" && x !== null && typeof x.then === "function") {
              var ping = task.ping;
              x.then(ping, ping);
            } else {
              task.abortSet.delete(task);
              segment.status = ERRORED;
              erroredTask(request, task.blockedBoundary, segment, x);
            }
          } finally {
            {
              currentTaskInDEV = prevTaskInDEV;
            }
          }
        }
        function performWork(request) {
          if (request.status === CLOSED) {
            return;
          }
          var prevContext = getActiveContext();
          var prevDispatcher = ReactCurrentDispatcher$1.current;
          ReactCurrentDispatcher$1.current = Dispatcher;
          var prevGetCurrentStackImpl;
          {
            prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
            ReactDebugCurrentFrame$1.getCurrentStack = getCurrentStackInDEV;
          }
          var prevResponseState = currentResponseState;
          setCurrentResponseState(request.responseState);
          try {
            var pingedTasks = request.pingedTasks;
            var i;
            for (i = 0; i < pingedTasks.length; i++) {
              var task = pingedTasks[i];
              retryTask(request, task);
            }
            pingedTasks.splice(0, i);
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          } finally {
            setCurrentResponseState(prevResponseState);
            ReactCurrentDispatcher$1.current = prevDispatcher;
            {
              ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
            }
            if (prevDispatcher === Dispatcher) {
              switchContext(prevContext);
            }
          }
        }
        function flushSubtree(request, destination, segment) {
          segment.parentFlushed = true;
          switch (segment.status) {
            case PENDING: {
              var segmentID = segment.id = request.nextSegmentId++;
              return writePlaceholder(destination, request.responseState, segmentID);
            }
            case COMPLETED: {
              segment.status = FLUSHED;
              var r = true;
              var chunks = segment.chunks;
              var chunkIdx = 0;
              var children = segment.children;
              for (var childIdx = 0; childIdx < children.length; childIdx++) {
                var nextChild = children[childIdx];
                for (; chunkIdx < nextChild.index; chunkIdx++) {
                  writeChunk(destination, chunks[chunkIdx]);
                }
                r = flushSegment(request, destination, nextChild);
              }
              for (; chunkIdx < chunks.length - 1; chunkIdx++) {
                writeChunk(destination, chunks[chunkIdx]);
              }
              if (chunkIdx < chunks.length) {
                r = writeChunkAndReturn(destination, chunks[chunkIdx]);
              }
              return r;
            }
            default: {
              throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
            }
          }
        }
        function flushSegment(request, destination, segment) {
          var boundary = segment.boundary;
          if (boundary === null) {
            return flushSubtree(request, destination, segment);
          }
          boundary.parentFlushed = true;
          if (boundary.forceClientRender) {
            writeStartClientRenderedSuspenseBoundary(destination, request.responseState);
            flushSubtree(request, destination, segment);
            return writeEndClientRenderedSuspenseBoundary(destination, request.responseState);
          } else if (boundary.pendingTasks > 0) {
            boundary.rootSegmentID = request.nextSegmentId++;
            if (boundary.completedSegments.length > 0) {
              request.partialBoundaries.push(boundary);
            }
            var id = boundary.id = assignSuspenseBoundaryID(request.responseState);
            writeStartPendingSuspenseBoundary(destination, request.responseState, id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else if (boundary.byteSize > request.progressiveChunkSize) {
            boundary.rootSegmentID = request.nextSegmentId++;
            request.completedBoundaries.push(boundary);
            writeStartPendingSuspenseBoundary(destination, request.responseState, boundary.id);
            flushSubtree(request, destination, segment);
            return writeEndPendingSuspenseBoundary(destination, request.responseState);
          } else {
            writeStartCompletedSuspenseBoundary(destination, request.responseState);
            var completedSegments = boundary.completedSegments;
            if (completedSegments.length !== 1) {
              throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            }
            var contentSegment = completedSegments[0];
            flushSegment(request, destination, contentSegment);
            return writeEndCompletedSuspenseBoundary(destination, request.responseState);
          }
        }
        function flushClientRenderedBoundary(request, destination, boundary) {
          return writeClientRenderBoundaryInstruction(destination, request.responseState, boundary.id);
        }
        function flushSegmentContainer(request, destination, segment) {
          writeStartSegment(destination, request.responseState, segment.formatContext, segment.id);
          flushSegment(request, destination, segment);
          return writeEndSegment(destination, segment.formatContext);
        }
        function flushCompletedBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            flushPartiallyCompletedSegment(request, destination, boundary, segment);
          }
          completedSegments.length = 0;
          return writeCompletedBoundaryInstruction(destination, request.responseState, boundary.id, boundary.rootSegmentID);
        }
        function flushPartialBoundary(request, destination, boundary) {
          var completedSegments = boundary.completedSegments;
          var i = 0;
          for (; i < completedSegments.length; i++) {
            var segment = completedSegments[i];
            if (!flushPartiallyCompletedSegment(request, destination, boundary, segment)) {
              i++;
              completedSegments.splice(0, i);
              return false;
            }
          }
          completedSegments.splice(0, i);
          return true;
        }
        function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
          if (segment.status === FLUSHED) {
            return true;
          }
          var segmentID = segment.id;
          if (segmentID === -1) {
            var rootSegmentID = segment.id = boundary.rootSegmentID;
            if (rootSegmentID === -1) {
              throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
            }
            return flushSegmentContainer(request, destination, segment);
          } else {
            flushSegmentContainer(request, destination, segment);
            return writeCompletedSegmentInstruction(destination, request.responseState, segmentID);
          }
        }
        function flushCompletedQueues(request, destination) {
          beginWriting();
          try {
            var completedRootSegment = request.completedRootSegment;
            if (completedRootSegment !== null && request.pendingRootTasks === 0) {
              flushSegment(request, destination, completedRootSegment);
              request.completedRootSegment = null;
              writeCompletedRoot(destination, request.responseState);
            }
            var clientRenderedBoundaries = request.clientRenderedBoundaries;
            var i;
            for (i = 0; i < clientRenderedBoundaries.length; i++) {
              var boundary = clientRenderedBoundaries[i];
              if (!flushClientRenderedBoundary(request, destination, boundary)) {
                request.destination = null;
                i++;
                clientRenderedBoundaries.splice(0, i);
                return;
              }
            }
            clientRenderedBoundaries.splice(0, i);
            var completedBoundaries = request.completedBoundaries;
            for (i = 0; i < completedBoundaries.length; i++) {
              var _boundary = completedBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary)) {
                request.destination = null;
                i++;
                completedBoundaries.splice(0, i);
                return;
              }
            }
            completedBoundaries.splice(0, i);
            completeWriting(destination);
            beginWriting(destination);
            var partialBoundaries = request.partialBoundaries;
            for (i = 0; i < partialBoundaries.length; i++) {
              var _boundary2 = partialBoundaries[i];
              if (!flushPartialBoundary(request, destination, _boundary2)) {
                request.destination = null;
                i++;
                partialBoundaries.splice(0, i);
                return;
              }
            }
            partialBoundaries.splice(0, i);
            var largeBoundaries = request.completedBoundaries;
            for (i = 0; i < largeBoundaries.length; i++) {
              var _boundary3 = largeBoundaries[i];
              if (!flushCompletedBoundary(request, destination, _boundary3)) {
                request.destination = null;
                i++;
                largeBoundaries.splice(0, i);
                return;
              }
            }
            largeBoundaries.splice(0, i);
          } finally {
            completeWriting(destination);
            if (request.allPendingTasks === 0 && request.pingedTasks.length === 0 && request.clientRenderedBoundaries.length === 0 && request.completedBoundaries.length === 0) {
              {
                if (request.abortableTasks.size !== 0) {
                  error("There was still abortable task at the root when we closed. This is a bug in React.");
                }
              }
              close(destination);
            }
          }
        }
        function startWork(request) {
          scheduleWork(function() {
            return performWork(request);
          });
        }
        function startFlowing(request, destination) {
          if (request.status === CLOSING) {
            request.status = CLOSED;
            closeWithError(destination, request.fatalError);
            return;
          }
          if (request.status === CLOSED) {
            return;
          }
          if (request.destination !== null) {
            return;
          }
          request.destination = destination;
          try {
            flushCompletedQueues(request, destination);
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function abort(request) {
          try {
            var abortableTasks = request.abortableTasks;
            abortableTasks.forEach(abortTask, request);
            abortableTasks.clear();
            if (request.destination !== null) {
              flushCompletedQueues(request, request.destination);
            }
          } catch (error2) {
            logRecoverableError(request, error2);
            fatalError(request, error2);
          }
        }
        function renderToReadableStream2(children, options) {
          return new Promise(function(resolve, reject) {
            var onFatalError;
            var onAllReady;
            var allReady = new Promise(function(res, rej) {
              onAllReady = res;
              onFatalError = rej;
            });
            function onShellReady() {
              var stream = new ReadableStream({
                type: "bytes",
                pull: function(controller) {
                  startFlowing(request, controller);
                },
                cancel: function(reason) {
                  abort(request);
                }
              });
              stream.allReady = allReady;
              resolve(stream);
            }
            function onShellError(error2) {
              allReady.catch(function() {
              });
              reject(error2);
            }
            var request = createRequest(children, createResponseState(options ? options.identifierPrefix : void 0, options ? options.nonce : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, onAllReady, onShellReady, onShellError, onFatalError);
            if (options && options.signal) {
              var signal = options.signal;
              var listener = function() {
                abort(request);
                signal.removeEventListener("abort", listener);
              };
              signal.addEventListener("abort", listener);
            }
            startWork(request);
          });
        }
        exports.renderToReadableStream = renderToReadableStream2;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    init_react();
    var l;
    var s;
    if (false) {
      l = null;
      s = null;
    } else {
      l = require_react_dom_server_legacy_browser_development();
      s = require_react_dom_server_browser_development();
    }
    exports.version = l.version;
    exports.renderToString = l.renderToString;
    exports.renderToStaticMarkup = l.renderToStaticMarkup;
    exports.renderToNodeStream = l.renderToNodeStream;
    exports.renderToStaticNodeStream = l.renderToStaticNodeStream;
    exports.renderToReadableStream = s.renderToReadableStream;
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_react();
    exports.parse = parse2;
    exports.serialize = serialize2;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(";");
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index = pair.indexOf("=");
        if (index < 0) {
          continue;
        }
        var key = pair.substring(0, index).trim();
        if (obj[key] == void 0) {
          var val = pair.substring(index + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@remix-run/server-runtime/esm/cookies.js
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length)
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
var import_cookie, createCookieFactory, isCookie;
var init_cookies = __esm({
  "node_modules/@remix-run/server-runtime/esm/cookies.js"() {
    init_react();
    import_cookie = __toESM(require_cookie());
    createCookieFactory = ({
      sign,
      unsign
    }) => (name, cookieOptions = {}) => {
      let _a = __spreadValues({
        secrets: [],
        path: "/"
      }, cookieOptions), {
        secrets
      } = _a, options = __objRest(_a, [
        "secrets"
      ]);
      return {
        get name() {
          return name;
        },
        get isSigned() {
          return secrets.length > 0;
        },
        get expires() {
          return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
        },
        async parse(cookieHeader, parseOptions) {
          if (!cookieHeader)
            return null;
          let cookies = (0, import_cookie.parse)(cookieHeader, __spreadValues(__spreadValues({}, options), parseOptions));
          return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
        },
        async serialize(value, serializeOptions) {
          return (0, import_cookie.serialize)(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), __spreadValues(__spreadValues({}, options), serializeOptions));
        }
      };
    };
    isCookie = (object) => {
      return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
    };
  }
});

// node_modules/@remix-run/server-runtime/esm/responses.js
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse2(response) {
  return redirectStatusCodes.has(response.status);
}
function isCatchResponse2(response) {
  return response.headers.get("X-Remix-Catch") != null;
}
var json, redirect, redirectStatusCodes;
var init_responses = __esm({
  "node_modules/@remix-run/server-runtime/esm/responses.js"() {
    init_react();
    json = (data, init = {}) => {
      let responseInit = typeof init === "number" ? {
        status: init
      } : init;
      let headers = new Headers(responseInit.headers);
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
      }
      return new Response(JSON.stringify(data), __spreadProps(__spreadValues({}, responseInit), {
        headers
      }));
    };
    redirect = (url, init = 302) => {
      let responseInit = init;
      if (typeof responseInit === "number") {
        responseInit = {
          status: responseInit
        };
      } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
      }
      let headers = new Headers(responseInit.headers);
      headers.set("Location", url);
      return new Response(null, __spreadProps(__spreadValues({}, responseInit), {
        headers
      }));
    };
    redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  }
});

// node_modules/@remix-run/server-runtime/esm/data.js
async function callRouteAction({
  loadContext,
  match,
  request
}) {
  let action = match.route.module.action;
  if (!action) {
    let response = new Response(null, {
      status: 405
    });
    response.headers.set("X-Remix-Catch", "yes");
    return response;
  }
  let result;
  try {
    result = await action({
      request: stripDataParam(stripIndexParam(request)),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse2(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
async function callRouteLoader({
  loadContext,
  match,
  request
}) {
  let loader = match.route.module.loader;
  if (!loader) {
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide a \`loader\` for route "${match.route.id}", so there is no way to handle the request.`);
  }
  let result;
  try {
    result = await loader({
      request: stripDataParam(stripIndexParam(request.clone())),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse2(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined a loader for route "${match.route.id}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return new Request(url.href, request);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_data");
  return new Request(url.href, request);
}
function extractData2(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/esm/data.js"() {
    init_react();
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/esm/entry.js
function createEntryMatches(matches, routes2) {
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: routes2[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/esm/entry.js"() {
    init_react();
  }
});

// node_modules/@remix-run/server-runtime/esm/errors.js
async function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}
var init_errors = __esm({
  "node_modules/@remix-run/server-runtime/esm/errors.js"() {
    init_react();
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    init_react();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValue = parts.shift().split("=");
      var name = nameValue.shift();
      var value = nameValue.join("=");
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
        }
      });
      return cookie;
    }
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/@remix-run/server-runtime/esm/headers.js
function getDocumentHeaders(build, matches, routeLoaderResponses, actionResponse) {
  return matches.reduce((parentHeaders, match, index) => {
    let routeModule = build.routes[match.route.id].module;
    let routeLoaderResponse = routeLoaderResponses[match.route.id];
    let loaderHeaders = routeLoaderResponse ? routeLoaderResponse.headers : new Headers();
    let actionHeaders = actionResponse ? actionResponse.headers : new Headers();
    let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders
    }) : routeModule.headers : void 0);
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0, import_set_cookie_parser.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}
var import_set_cookie_parser;
var init_headers = __esm({
  "node_modules/@remix-run/server-runtime/esm/headers.js"() {
    init_react();
    import_set_cookie_parser = __toESM(require_set_cookie());
  }
});

// node_modules/@remix-run/server-runtime/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode;
var init_mode = __esm({
  "node_modules/@remix-run/server-runtime/esm/mode.js"() {
    init_react();
    (function(ServerMode2) {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
    })(ServerMode || (ServerMode = {}));
  }
});

// node_modules/@remix-run/server-runtime/esm/routeMatching.js
function matchServerRoutes(routes2, pathname) {
  let matches = matchRoutes(routes2, pathname);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/esm/routeMatching.js"() {
    init_react();
    init_react_router_dom();
  }
});

// node_modules/@remix-run/server-runtime/esm/routes.js
function createRoutes(manifest, parentId) {
  return Object.entries(manifest).filter(([, route]) => route.parentId === parentId).map(([id, route]) => __spreadProps(__spreadValues({}, route), {
    children: createRoutes(manifest, id)
  }));
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/esm/routes.js"() {
    init_react();
  }
});

// node_modules/jsesc/jsesc.js
var require_jsesc = __commonJS({
  "node_modules/jsesc/jsesc.js"(exports, module) {
    "use strict";
    init_react();
    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var forOwn = (object2, callback) => {
      for (const key in object2) {
        if (hasOwnProperty.call(object2, key)) {
          callback(key, object2[key]);
        }
      }
    };
    var extend = (destination, source) => {
      if (!source) {
        return destination;
      }
      forOwn(source, (key, value) => {
        destination[key] = value;
      });
      return destination;
    };
    var forEach = (array, callback) => {
      const length = array.length;
      let index = -1;
      while (++index < length) {
        callback(array[index]);
      }
    };
    var fourHexEscape = (hex2) => {
      return "\\u" + ("0000" + hex2).slice(-4);
    };
    var hexadecimal = (code, lowercase) => {
      let hexadecimal2 = code.toString(16);
      if (lowercase)
        return hexadecimal2;
      return hexadecimal2.toUpperCase();
    };
    var toString = object.toString;
    var isArray = Array.isArray;
    var isBuffer = (value) => {
      return typeof Buffer === "function" && Buffer.isBuffer(value);
    };
    var isObject = (value) => {
      return toString.call(value) == "[object Object]";
    };
    var isString = (value) => {
      return typeof value == "string" || toString.call(value) == "[object String]";
    };
    var isNumber = (value) => {
      return typeof value == "number" || toString.call(value) == "[object Number]";
    };
    var isFunction = (value) => {
      return typeof value == "function";
    };
    var isMap = (value) => {
      return toString.call(value) == "[object Map]";
    };
    var isSet = (value) => {
      return toString.call(value) == "[object Set]";
    };
    var singleEscapes = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t"
    };
    var regexSingleEscape = /[\\\b\f\n\r\t]/;
    var regexDigit = /[0-9]/;
    var regexWhitespace = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    var escapeEverythingRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g;
    var escapeNonAsciiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g;
    var jsesc2 = (argument, options) => {
      const increaseIndentation = () => {
        oldIndent = indent;
        ++options.indentLevel;
        indent = options.indent.repeat(options.indentLevel);
      };
      const defaults = {
        "escapeEverything": false,
        "minimal": false,
        "isScriptContext": false,
        "quotes": "single",
        "wrap": false,
        "es6": false,
        "json": false,
        "compact": true,
        "lowercaseHex": false,
        "numbers": "decimal",
        "indent": "	",
        "indentLevel": 0,
        "__inline1__": false,
        "__inline2__": false
      };
      const json2 = options && options.json;
      if (json2) {
        defaults.quotes = "double";
        defaults.wrap = true;
      }
      options = extend(defaults, options);
      if (options.quotes != "single" && options.quotes != "double" && options.quotes != "backtick") {
        options.quotes = "single";
      }
      const quote = options.quotes == "double" ? '"' : options.quotes == "backtick" ? "`" : "'";
      const compact = options.compact;
      const lowercaseHex = options.lowercaseHex;
      let indent = options.indent.repeat(options.indentLevel);
      let oldIndent = "";
      const inline1 = options.__inline1__;
      const inline2 = options.__inline2__;
      const newLine = compact ? "" : "\n";
      let result;
      let isEmpty = true;
      const useBinNumbers = options.numbers == "binary";
      const useOctNumbers = options.numbers == "octal";
      const useDecNumbers = options.numbers == "decimal";
      const useHexNumbers = options.numbers == "hexadecimal";
      if (json2 && argument && isFunction(argument.toJSON)) {
        argument = argument.toJSON();
      }
      if (!isString(argument)) {
        if (isMap(argument)) {
          if (argument.size == 0) {
            return "new Map()";
          }
          if (!compact) {
            options.__inline1__ = true;
            options.__inline2__ = false;
          }
          return "new Map(" + jsesc2(Array.from(argument), options) + ")";
        }
        if (isSet(argument)) {
          if (argument.size == 0) {
            return "new Set()";
          }
          return "new Set(" + jsesc2(Array.from(argument), options) + ")";
        }
        if (isBuffer(argument)) {
          if (argument.length == 0) {
            return "Buffer.from([])";
          }
          return "Buffer.from(" + jsesc2(Array.from(argument), options) + ")";
        }
        if (isArray(argument)) {
          result = [];
          options.wrap = true;
          if (inline1) {
            options.__inline1__ = false;
            options.__inline2__ = true;
          }
          if (!inline2) {
            increaseIndentation();
          }
          forEach(argument, (value) => {
            isEmpty = false;
            if (inline2) {
              options.__inline2__ = false;
            }
            result.push((compact || inline2 ? "" : indent) + jsesc2(value, options));
          });
          if (isEmpty) {
            return "[]";
          }
          if (inline2) {
            return "[" + result.join(", ") + "]";
          }
          return "[" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "]";
        } else if (isNumber(argument)) {
          if (json2) {
            return JSON.stringify(argument);
          }
          if (useDecNumbers) {
            return String(argument);
          }
          if (useHexNumbers) {
            let hexadecimal2 = argument.toString(16);
            if (!lowercaseHex) {
              hexadecimal2 = hexadecimal2.toUpperCase();
            }
            return "0x" + hexadecimal2;
          }
          if (useBinNumbers) {
            return "0b" + argument.toString(2);
          }
          if (useOctNumbers) {
            return "0o" + argument.toString(8);
          }
        } else if (!isObject(argument)) {
          if (json2) {
            return JSON.stringify(argument) || "null";
          }
          return String(argument);
        } else {
          result = [];
          options.wrap = true;
          increaseIndentation();
          forOwn(argument, (key, value) => {
            isEmpty = false;
            result.push((compact ? "" : indent) + jsesc2(key, options) + ":" + (compact ? "" : " ") + jsesc2(value, options));
          });
          if (isEmpty) {
            return "{}";
          }
          return "{" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "}";
        }
      }
      const regex = options.escapeEverything ? escapeEverythingRegex : escapeNonAsciiRegex;
      result = argument.replace(regex, (char, pair, lone, quoteChar, index, string) => {
        if (pair) {
          if (options.minimal)
            return pair;
          const first = pair.charCodeAt(0);
          const second = pair.charCodeAt(1);
          if (options.es6) {
            const codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
            const hex3 = hexadecimal(codePoint, lowercaseHex);
            return "\\u{" + hex3 + "}";
          }
          return fourHexEscape(hexadecimal(first, lowercaseHex)) + fourHexEscape(hexadecimal(second, lowercaseHex));
        }
        if (lone) {
          return fourHexEscape(hexadecimal(lone.charCodeAt(0), lowercaseHex));
        }
        if (char == "\0" && !json2 && !regexDigit.test(string.charAt(index + 1))) {
          return "\\0";
        }
        if (quoteChar) {
          if (quoteChar == quote || options.escapeEverything) {
            return "\\" + quoteChar;
          }
          return quoteChar;
        }
        if (regexSingleEscape.test(char)) {
          return singleEscapes[char];
        }
        if (options.minimal && !regexWhitespace.test(char)) {
          return char;
        }
        const hex2 = hexadecimal(char.charCodeAt(0), lowercaseHex);
        if (json2 || hex2.length > 2) {
          return fourHexEscape(hex2);
        }
        return "\\x" + ("00" + hex2).slice(-2);
      });
      if (quote == "`") {
        result = result.replace(/\$\{/g, "\\${");
      }
      if (options.isScriptContext) {
        result = result.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, json2 ? "\\u003C!--" : "\\x3C!--");
      }
      if (options.wrap) {
        result = quote + result + quote;
      }
      return result;
    };
    jsesc2.version = "3.0.2";
    module.exports = jsesc2;
  }
});

// node_modules/@remix-run/server-runtime/esm/serverHandoff.js
function createServerHandoffString(serverHandoff) {
  return (0, import_jsesc.default)(serverHandoff, {
    isScriptContext: true
  });
}
var import_jsesc;
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/esm/serverHandoff.js"() {
    init_react();
    import_jsesc = __toESM(require_jsesc());
  }
});

// node_modules/@remix-run/server-runtime/esm/server.js
async function handleDataRequest({
  handleDataRequest: handleDataRequest2,
  loadContext,
  matches,
  request,
  serverMode
}) {
  if (!isValidRequestMethod(request)) {
    return errorBoundaryError(new Error(`Invalid request method "${request.method}"`), 405);
  }
  let url = new URL(request.url);
  if (!matches) {
    return errorBoundaryError(new Error(`No route matches URL "${url.pathname}"`), 404);
  }
  let response;
  let match;
  try {
    if (isActionRequest(request)) {
      match = getRequestMatch(url, matches);
      response = await callRouteAction({
        loadContext,
        match,
        request
      });
    } else {
      let routeId = url.searchParams.get("_data");
      if (!routeId) {
        return errorBoundaryError(new Error(`Missing route id in ?_data`), 403);
      }
      let tempMatch = matches.find((match2) => match2.route.id === routeId);
      if (!tempMatch) {
        return errorBoundaryError(new Error(`Route "${routeId}" does not match URL "${url.pathname}"`), 403);
      }
      match = tempMatch;
      response = await callRouteLoader({
        loadContext,
        match,
        request
      });
    }
    if (isRedirectResponse2(response)) {
      let headers = new Headers(response.headers);
      headers.set("X-Remix-Redirect", headers.get("Location"));
      headers.delete("Location");
      if (response.headers.get("Set-Cookie") !== null) {
        headers.set("X-Remix-Revalidate", "yes");
      }
      return new Response(null, {
        status: 204,
        headers
      });
    }
    if (handleDataRequest2) {
      response = await handleDataRequest2(response.clone(), {
        context: loadContext,
        params: match.params,
        request: request.clone()
      });
    }
    return response;
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    if (serverMode === ServerMode.Development) {
      return errorBoundaryError(error, 500);
    }
    return errorBoundaryError(new Error("Unexpected Server Error"), 500);
  }
}
async function handleDocumentRequest({
  build,
  loadContext,
  matches,
  request,
  routes: routes2,
  serverMode
}) {
  let url = new URL(request.url);
  let appState = {
    trackBoundaries: true,
    trackCatchBoundaries: true,
    catchBoundaryRouteId: null,
    renderBoundaryRouteId: null,
    loaderBoundaryRouteId: null,
    error: void 0,
    catch: void 0
  };
  if (!isValidRequestMethod(request)) {
    matches = null;
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 405,
      statusText: "Method Not Allowed"
    };
  } else if (!matches) {
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 404,
      statusText: "Not Found"
    };
  }
  let actionStatus;
  let actionData;
  let actionMatch;
  let actionResponse;
  if (matches && isActionRequest(request)) {
    actionMatch = getRequestMatch(url, matches);
    try {
      actionResponse = await callRouteAction({
        loadContext,
        match: actionMatch,
        request
      });
      if (isRedirectResponse2(actionResponse)) {
        return actionResponse;
      }
      actionStatus = {
        status: actionResponse.status,
        statusText: actionResponse.statusText
      };
      if (isCatchResponse2(actionResponse)) {
        appState.catchBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "CatchBoundary");
        appState.trackCatchBoundaries = false;
        appState.catch = __spreadProps(__spreadValues({}, actionStatus), {
          data: await extractData2(actionResponse)
        });
      } else {
        actionData = {
          [actionMatch.route.id]: await extractData2(actionResponse)
        };
      }
    } catch (error) {
      appState.loaderBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "ErrorBoundary");
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the action for route ${actionMatch.route.id}`);
      }
    }
  }
  let routeModules = createEntryRouteModules(build.routes);
  let matchesToLoad = matches || [];
  if (appState.catch) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad.slice(0, -1), "CatchBoundary");
  } else if (appState.error) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad.slice(0, -1), "ErrorBoundary");
  }
  let routeLoaderResults = await Promise.allSettled(matchesToLoad.map((match) => match.route.module.loader ? callRouteLoader({
    loadContext,
    match,
    request
  }) : Promise.resolve(void 0)));
  let actionCatch = appState.catch;
  let actionError = appState.error;
  let actionCatchBoundaryRouteId = appState.catchBoundaryRouteId;
  let actionLoaderBoundaryRouteId = appState.loaderBoundaryRouteId;
  appState.catch = void 0;
  appState.error = void 0;
  let routeLoaderResponses = {};
  let loaderStatusCodes = [];
  let routeData = {};
  for (let index = 0; index < matchesToLoad.length; index++) {
    let match = matchesToLoad[index];
    let result = routeLoaderResults[index];
    let error = result.status === "rejected" ? result.reason : void 0;
    let response = result.status === "fulfilled" ? result.value : void 0;
    let isRedirect = response ? isRedirectResponse2(response) : false;
    let isCatch = response ? isCatchResponse2(response) : false;
    if (appState.catch || appState.error) {
      break;
    }
    if (!actionCatch && !actionError && response && isRedirect) {
      return response;
    }
    if (match.route.module.CatchBoundary) {
      appState.catchBoundaryRouteId = match.route.id;
    }
    if (match.route.module.ErrorBoundary) {
      appState.loaderBoundaryRouteId = match.route.id;
    }
    if (error) {
      loaderStatusCodes.push(500);
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the data loader for route ${match.route.id}`);
      }
      break;
    } else if (response) {
      routeLoaderResponses[match.route.id] = response;
      loaderStatusCodes.push(response.status);
      if (isCatch) {
        appState.trackCatchBoundaries = false;
        appState.catch = {
          data: await extractData2(response),
          status: response.status,
          statusText: response.statusText
        };
        break;
      } else {
        routeData[match.route.id] = await extractData2(response);
      }
    }
  }
  if (!appState.catch) {
    appState.catchBoundaryRouteId = actionCatchBoundaryRouteId;
  }
  if (!appState.error) {
    appState.loaderBoundaryRouteId = actionLoaderBoundaryRouteId;
  }
  appState.catch = actionCatch || appState.catch;
  appState.error = actionError || appState.error;
  let renderableMatches = getRenderableMatches(matches, appState);
  if (!renderableMatches) {
    renderableMatches = [];
    let root = routes2[0];
    if (root !== null && root !== void 0 && root.module.CatchBoundary) {
      appState.catchBoundaryRouteId = "root";
      renderableMatches.push({
        params: {},
        pathname: "",
        route: routes2[0]
      });
    }
  }
  let notOkResponse = actionStatus && actionStatus.status !== 200 ? actionStatus.status : loaderStatusCodes.find((status) => status !== 200);
  let responseStatusCode = appState.error ? 500 : typeof notOkResponse === "number" ? notOkResponse : appState.catch ? appState.catch.status : 200;
  let responseHeaders = getDocumentHeaders(build, renderableMatches, routeLoaderResponses, actionResponse);
  let entryMatches = createEntryMatches(renderableMatches, build.assets.routes);
  let serverHandoff = {
    actionData,
    appState,
    matches: entryMatches,
    routeData
  };
  let entryContext = __spreadProps(__spreadValues({}, serverHandoff), {
    manifest: build.assets,
    routeModules,
    serverHandoffString: createServerHandoffString(serverHandoff)
  });
  let handleDocumentRequest2 = build.entry.module.default;
  try {
    return await handleDocumentRequest2(request.clone(), responseStatusCode, responseHeaders, entryContext);
  } catch (error) {
    responseStatusCode = 500;
    appState.trackBoundaries = false;
    appState.error = await serializeError(error);
    entryContext.serverHandoffString = createServerHandoffString(serverHandoff);
    try {
      return await handleDocumentRequest2(request.clone(), responseStatusCode, responseHeaders, entryContext);
    } catch (error2) {
      if (serverMode !== ServerMode.Test) {
        console.error(error2);
      }
      let message = "Unexpected Server Error";
      if (serverMode === ServerMode.Development) {
        message += `

${String(error2)}`;
      }
      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
  }
}
async function handleResourceRequest({
  loadContext,
  matches,
  request,
  serverMode
}) {
  let match = matches.slice(-1)[0];
  try {
    if (isActionRequest(request)) {
      return await callRouteAction({
        match,
        loadContext,
        request
      });
    } else {
      return await callRouteLoader({
        match,
        loadContext,
        request
      });
    }
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    let message = "Unexpected Server Error";
    if (serverMode === ServerMode.Development) {
      message += `

${String(error)}`;
    }
    return new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
function isActionRequest({
  method
}) {
  return validActionMethods.has(method.toUpperCase());
}
function isValidRequestMethod({
  method
}) {
  return validRequestMethods.has(method.toUpperCase());
}
async function errorBoundaryError(error, status) {
  return json(await serializeError(error), {
    status,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isIndexRequestUrl(url) {
  for (let param of url.searchParams.getAll("index")) {
    if (param === "") {
      return true;
    }
  }
  return false;
}
function getRequestMatch(url, matches) {
  let match = matches.slice(-1)[0];
  if (!isIndexRequestUrl(url) && match.route.id.endsWith("/index")) {
    return matches.slice(-2)[0];
  }
  return match;
}
function getDeepestRouteIdWithBoundary(matches, key) {
  let matched = getMatchesUpToDeepestBoundary(matches, key).slice(-1)[0];
  return matched ? matched.route.id : null;
}
function getMatchesUpToDeepestBoundary(matches, key) {
  let deepestBoundaryIndex = -1;
  matches.forEach((match, index) => {
    if (match.route.module[key]) {
      deepestBoundaryIndex = index;
    }
  });
  if (deepestBoundaryIndex === -1) {
    return [];
  }
  return matches.slice(0, deepestBoundaryIndex + 1);
}
function getRenderableMatches(matches, appState) {
  if (!matches) {
    return null;
  }
  if (!appState.catch && !appState.error) {
    return matches;
  }
  let lastRenderableIndex = -1;
  matches.forEach((match, index) => {
    let id = match.route.id;
    if (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id || appState.catchBoundaryRouteId === id) {
      lastRenderableIndex = index;
    }
  });
  return matches.slice(0, lastRenderableIndex + 1);
}
var createRequestHandler, validActionMethods, validRequestMethods;
var init_server = __esm({
  "node_modules/@remix-run/server-runtime/esm/server.js"() {
    init_react();
    init_data();
    init_entry();
    init_errors();
    init_headers();
    init_mode();
    init_routeMatching();
    init_routes();
    init_responses();
    init_serverHandoff();
    createRequestHandler = (build, mode) => {
      let routes2 = createRoutes(build.routes);
      let serverMode = isServerMode(mode) ? mode : ServerMode.Production;
      return async function requestHandler(request, loadContext) {
        let url = new URL(request.url);
        let matches = matchServerRoutes(routes2, url.pathname);
        let response;
        if (url.searchParams.has("_data")) {
          response = await handleDataRequest({
            request,
            loadContext,
            matches,
            handleDataRequest: build.entry.module.handleDataRequest,
            serverMode
          });
        } else if (matches && !matches[matches.length - 1].route.module.default) {
          response = await handleResourceRequest({
            request,
            loadContext,
            matches,
            serverMode
          });
        } else {
          response = await handleDocumentRequest({
            build,
            loadContext,
            matches,
            request,
            routes: routes2,
            serverMode
          });
        }
        if (request.method === "HEAD") {
          return new Response(null, {
            headers: response.headers,
            status: response.status,
            statusText: response.statusText
          });
        }
        return response;
      };
    };
    validActionMethods = /* @__PURE__ */ new Set(["POST", "PUT", "PATCH", "DELETE"]);
    validRequestMethods = /* @__PURE__ */ new Set(["GET", "HEAD", ...validActionMethods]);
  }
});

// node_modules/@remix-run/server-runtime/esm/warnings.js
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned2[message]) {
    alreadyWarned2[message] = true;
    console.warn(message);
  }
}
var alreadyWarned2;
var init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/esm/warnings.js"() {
    init_react();
    alreadyWarned2 = {};
  }
});

// node_modules/@remix-run/server-runtime/esm/sessions.js
function flash(name) {
  return `__flash_${name}__`;
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/api/remix#signing-cookies for more information.`);
}
var createSession, isSession, createSessionStorageFactory;
var init_sessions = __esm({
  "node_modules/@remix-run/server-runtime/esm/sessions.js"() {
    init_react();
    init_cookies();
    init_warnings();
    createSession = (initialData = {}, id = "") => {
      let map = new Map(Object.entries(initialData));
      return {
        get id() {
          return id;
        },
        get data() {
          return Object.fromEntries(map);
        },
        has(name) {
          return map.has(name) || map.has(flash(name));
        },
        get(name) {
          if (map.has(name))
            return map.get(name);
          let flashName = flash(name);
          if (map.has(flashName)) {
            let value = map.get(flashName);
            map.delete(flashName);
            return value;
          }
          return void 0;
        },
        set(name, value) {
          map.set(name, value);
        },
        flash(name, value) {
          map.set(flash(name), value);
        },
        unset(name) {
          map.delete(name);
        }
      };
    };
    isSession = (object) => {
      return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
    };
    createSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg,
      createData,
      readData,
      updateData,
      deleteData
    }) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          let id = cookieHeader && await cookie.parse(cookieHeader, options);
          let data = id && await readData(id);
          return createSession(data || {}, id || "");
        },
        async commitSession(session, options) {
          let {
            id,
            data
          } = session;
          if (id) {
            await updateData(id, data, cookie.expires);
          } else {
            id = await createData(data, cookie.expires);
          }
          return cookie.serialize(id, options);
        },
        async destroySession(session, options) {
          await deleteData(session.id);
          return cookie.serialize("", __spreadProps(__spreadValues({}, options), {
            expires: new Date(0)
          }));
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/esm/sessions/cookieStorage.js
var createCookieSessionStorageFactory;
var init_cookieStorage = __esm({
  "node_modules/@remix-run/server-runtime/esm/sessions/cookieStorage.js"() {
    init_react();
    init_cookies();
    init_sessions();
    createCookieSessionStorageFactory = (createCookie) => ({
      cookie: cookieArg
    } = {}) => {
      let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
      warnOnceAboutSigningSessionCookie(cookie);
      return {
        async getSession(cookieHeader, options) {
          return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
        },
        async commitSession(session, options) {
          let serializedCookie = await cookie.serialize(session.data, options);
          if (serializedCookie.length > 4096) {
            throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
          }
          return serializedCookie;
        },
        async destroySession(_session, options) {
          return cookie.serialize("", __spreadProps(__spreadValues({}, options), {
            expires: new Date(0)
          }));
        }
      };
    };
  }
});

// node_modules/@remix-run/server-runtime/esm/sessions/memoryStorage.js
var createMemorySessionStorageFactory;
var init_memoryStorage = __esm({
  "node_modules/@remix-run/server-runtime/esm/sessions/memoryStorage.js"() {
    init_react();
    createMemorySessionStorageFactory = (createSessionStorage) => ({
      cookie
    } = {}) => {
      let uniqueId = 0;
      let map = /* @__PURE__ */ new Map();
      return createSessionStorage({
        cookie,
        async createData(data, expires) {
          let id = (++uniqueId).toString();
          map.set(id, {
            data,
            expires
          });
          return id;
        },
        async readData(id) {
          if (map.has(id)) {
            let {
              data,
              expires
            } = map.get(id);
            if (!expires || expires > new Date()) {
              return data;
            }
            if (expires)
              map.delete(id);
          }
          return null;
        },
        async updateData(id, data, expires) {
          map.set(id, {
            data,
            expires
          });
        },
        async deleteData(id) {
          map.delete(id);
        }
      });
    };
  }
});

// node_modules/@remix-run/server-runtime/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  createCookieFactory: () => createCookieFactory,
  createCookieSessionStorageFactory: () => createCookieSessionStorageFactory,
  createMemorySessionStorageFactory: () => createMemorySessionStorageFactory,
  createRequestHandler: () => createRequestHandler,
  createSession: () => createSession,
  createSessionStorageFactory: () => createSessionStorageFactory,
  isCookie: () => isCookie,
  isSession: () => isSession,
  json: () => json,
  redirect: () => redirect
});
var init_esm = __esm({
  "node_modules/@remix-run/server-runtime/esm/index.js"() {
    init_react();
    init_cookies();
    init_responses();
    init_server();
    init_sessions();
    init_cookieStorage();
    init_memoryStorage();
  }
});

// node_modules/@remix-run/netlify-edge/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/netlify-edge/server.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    function createRequestHandler3({
      build,
      mode,
      getLoadContext
    }) {
      let remixHandler = serverRuntime.createRequestHandler(build, mode);
      let assetPath = build.assets.url.split("/").slice(0, -1).join("/");
      return async (request, context) => {
        let {
          pathname
        } = new URL(request.url);
        if (pathname.startsWith(`${assetPath}/`)) {
          return;
        }
        try {
          let loadContext = getLoadContext ? await getLoadContext(request, context) : context;
          let response = await remixHandler(request, loadContext);
          if (response.status === 404) {
            let originResponse = await context.next({
              sendConditionalRequest: true
            });
            if (originResponse.status !== 404) {
              return originResponse;
            }
          }
          return response;
        } catch (e) {
          console.error(e);
          return new Response("Internal Error", {
            status: 500
          });
        }
      };
    }
    exports.createRequestHandler = createRequestHandler3;
  }
});

// node_modules/@remix-run/netlify-edge/remix-deno/crypto.js
var require_crypto = __commonJS({
  "node_modules/@remix-run/netlify-edge/remix-deno/crypto.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var encoder = new TextEncoder();
    var sign = async (value, secret) => {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, ["sign"]);
      let data = encoder.encode(value);
      let signature = await crypto.subtle.sign("HMAC", key, data);
      let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=+$/, "");
      return value + "." + hash;
    };
    var unsign = async (cookie, secret) => {
      let key = await crypto.subtle.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: "SHA-256"
      }, false, ["verify"]);
      let value = cookie.slice(0, cookie.lastIndexOf("."));
      let hash = cookie.slice(cookie.lastIndexOf(".") + 1);
      let data = encoder.encode(value);
      let signature = byteStringToUint8Array(atob(hash));
      let valid = await crypto.subtle.verify("HMAC", key, signature, data);
      return valid ? value : false;
    };
    function byteStringToUint8Array(byteString) {
      let array = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        array[i] = byteString.charCodeAt(i);
      }
      return array;
    }
    exports.sign = sign;
    exports.unsign = unsign;
  }
});

// node_modules/@remix-run/netlify-edge/remix-deno/implementations.js
var require_implementations = __commonJS({
  "node_modules/@remix-run/netlify-edge/remix-deno/implementations.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = (init_esm(), __toCommonJS(esm_exports));
    var crypto2 = require_crypto();
    var createCookie = serverRuntime.createCookieFactory({
      sign: crypto2.sign,
      unsign: crypto2.unsign
    });
    var createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie);
    var createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie);
    var createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
    exports.createCookie = createCookie;
    exports.createCookieSessionStorage = createCookieSessionStorage;
    exports.createMemorySessionStorage = createMemorySessionStorage;
    exports.createSessionStorage = createSessionStorage;
  }
});

// node_modules/@remix-run/netlify-edge/index.js
var require_netlify_edge = __commonJS({
  "node_modules/@remix-run/netlify-edge/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var server = require_server();
    var implementations = require_implementations();
    exports.createRequestHandler = server.createRequestHandler;
    exports.createCookie = implementations.createCookie;
    exports.createCookieSessionStorage = implementations.createCookieSessionStorage;
    exports.createMemorySessionStorage = implementations.createMemorySessionStorage;
    exports.createSessionStorage = implementations.createSessionStorage;
  }
});

// server.js
init_react();

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();

// node_modules/@remix-run/react/esm/index.js
init_react();

// node_modules/@remix-run/react/esm/components.js
init_react();

// node_modules/@remix-run/react/esm/_virtual/_rollupPluginBabelHelpers.js
init_react();
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// node_modules/@remix-run/react/esm/components.js
var React3 = __toESM(require_react());
init_react_router_dom();

// node_modules/@remix-run/react/esm/errorBoundaries.js
init_react();
var import_react3 = __toESM(require_react());
var RemixErrorBoundary = class extends import_react3.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error || null,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ import_react3.default.createElement(this.props.component, {
        error: this.state.error
      });
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ import_react3.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
var RemixCatchContext = /* @__PURE__ */ import_react3.default.createContext(void 0);
function useCatch() {
  return (0, import_react3.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  if (catchVal) {
    return /* @__PURE__ */ import_react3.default.createElement(RemixCatchContext.Provider, {
      value: catchVal
    }, /* @__PURE__ */ import_react3.default.createElement(Component, null));
  }
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react3.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react3.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react3.default.createElement("body", null, /* @__PURE__ */ import_react3.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react3.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/esm/invariant.js
init_react();
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// node_modules/@remix-run/react/esm/links.js
init_react();
init_history();

// node_modules/@remix-run/react/esm/routeModules.js
init_react();
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push(__spreadProps(__spreadValues({}, descriptor), {
        rel: "preload",
        as: "style"
      }));
    }
  }
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  return object != null && typeof object.rel === "string" && typeof object.href === "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  let links3 = await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }));
  return links3.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((_a) => {
    var _b = _a, {
      rel
    } = _b, attrs = __objRest(_b, [
      "rel"
    ]);
    return rel === "preload" ? __spreadValues({
      rel: "prefetch"
    }, attrs) : __spreadValues({
      rel: "prefetch",
      as: "style"
    }, attrs);
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location2, mode) {
  let path = parsePathPatch(page);
  let isNew = (match, index) => {
    if (!currentMatches[index])
      return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  let newMatches = mode === "data" && location2.search !== path.search ? nextMatches.filter((match, index) => {
    if (!match.route.hasLoader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      return match.route.shouldReload({
        params: match.params,
        prevUrl: new URL(location2.pathname + location2.search + location2.hash, window.origin),
        url: new URL(page, window.origin)
      });
    }
    return true;
  }) : nextMatches.filter((match, index) => {
    return (mode === "assets" || match.route.hasLoader) && (isNew(match, index) || matchPathChanged(match, index));
  });
  return newMatches;
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path;
    let searchParams = new URLSearchParams(search);
    searchParams.set("_data", match.route.id);
    return `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let str = JSON.stringify(descriptor);
    if (!set.has(str)) {
      set.add(str);
      deduped.push(descriptor);
    }
    return deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  if (path.search === void 0)
    path.search = "";
  return path;
}

// node_modules/@remix-run/react/esm/markup.js
init_react();
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/esm/routes.js
init_react();
var React2 = __toESM(require_react());

// node_modules/@remix-run/react/esm/data.js
init_react();
function isCatchResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url, routeId, signal, submission) {
  url.searchParams.set("_data", routeId);
  let init = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  };
  let response = await fetch(url.href, init);
  if (isErrorResponse(response)) {
    let data = await response.json();
    let error = new Error(data.message);
    error.stack = data.stack;
    return error;
  }
  return response;
}
async function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission;
  let headers = void 0;
  let body = formData;
  if (encType === "application/x-www-form-urlencoded") {
    body = new URLSearchParams();
    for (let [key, value] of formData) {
      invariant2(typeof value === "string", `File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.`);
      body.append(key, value);
    }
    headers = {
      "Content-Type": encType
    };
  }
  return {
    method,
    body,
    signal,
    credentials: "same-origin",
    headers
  };
}

// node_modules/@remix-run/react/esm/transition.js
init_react();
init_history();

// node_modules/@remix-run/react/esm/routeMatching.js
init_react();
init_react_router_dom();
function matchClientRoutes(routes2, location2) {
  let matches = matchRoutes(routes2, location2);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

// node_modules/@remix-run/react/esm/transition.js
var CatchValue = class {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
};
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location2) {
  return Boolean(location2.state) && location2.state.isRedirect;
}
function isLoaderRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "loader";
}
function isActionRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "action";
}
function isFetchActionRedirect(location2) {
  return isRedirectLocation(location2) && location2.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location2) {
  return isRedirectLocation(location2) && location2.state.type === "loaderSubmission";
}
var TransitionRedirect = class {
  constructor(location2, setCookie) {
    this.setCookie = setCookie;
    this.location = typeof location2 === "string" ? location2 : location2.pathname + location2.search;
  }
};
var IDLE_TRANSITION = {
  state: "idle",
  submission: void 0,
  location: void 0,
  type: "idle"
};
var IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: void 0,
  submission: void 0
};
function createTransitionManager(init) {
  let {
    routes: routes2
  } = init;
  let pendingNavigationController;
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let navigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let matches = matchClientRoutes(routes2, init.location);
  if (!matches) {
    matches = [{
      params: {},
      pathname: "",
      route: routes2[0]
    }];
  }
  let state = {
    location: init.location,
    loaderData: init.loaderData || {},
    actionData: init.actionData,
    catch: init.catch,
    error: init.error,
    catchBoundaryId: init.catchBoundaryId || null,
    errorBoundaryId: init.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: /* @__PURE__ */ new Map()
  };
  function update(updates) {
    if (updates.transition) {
      if (updates.transition === IDLE_TRANSITION) {
        pendingNavigationController = void 0;
      }
    }
    state = Object.assign({}, state, updates);
    init.onChange(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function setFetcher(key, fetcher) {
    state.fetchers.set(key, fetcher);
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key))
      abortFetcher(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action,
          location: location2,
          submission
        } = event;
        let matches2 = matchClientRoutes(routes2, location2);
        if (!matches2) {
          matches2 = [{
            params: {},
            pathname: "",
            route: routes2[0]
          }];
          await handleNotFoundNavigation(location2, matches2);
        } else if (!submission && isHashChangeOnly(location2)) {
          await handleHashChange(location2, matches2);
        } else if (action === Action.Pop) {
          await handleLoad(location2, matches2);
        } else if (submission && isActionSubmission(submission)) {
          await handleActionSubmissionNavigation(location2, submission, matches2);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderSubmissionNavigation(location2, submission, matches2);
        } else if (isActionRedirectLocation(location2)) {
          await handleActionRedirect(location2, matches2);
        } else if (isLoaderSubmissionRedirectLocation(location2)) {
          await handleLoaderSubmissionRedirect(location2, matches2);
        } else if (isLoaderRedirectLocation(location2)) {
          await handleLoaderRedirect(location2, matches2);
        } else if (isFetchActionRedirect(location2)) {
          await handleFetchActionRedirect(location2, matches2);
        } else {
          await handleLoad(location2, matches2);
        }
        navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event;
        let matches2 = matchClientRoutes(routes2, href);
        invariant2(matches2, "No matches found");
        if (fetchControllers.has(key))
          abortFetcher(key);
        let match = getFetcherRequestMatch(new URL(href, window.location.href), matches2);
        if (submission && isActionSubmission(submission)) {
          await handleActionFetchSubmission(key, submission, match);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderFetchSubmission(href, key, submission, match);
        } else {
          await handleLoaderFetch(href, key, match);
        }
        break;
      }
      default: {
        throw new Error(`Unknown data event type: ${event.type}`);
      }
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers) {
      controller.abort();
    }
  }
  function isIndexRequestUrl2(url) {
    for (let param of url.searchParams.getAll("index")) {
      if (param === "") {
        return true;
      }
    }
    return false;
  }
  function getFetcherRequestMatch(url, matches2) {
    let match = matches2.slice(-1)[0];
    if (!isIndexRequestUrl2(url) && match.route.index) {
      return matches2.slice(-2)[0];
    }
    return match;
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "fetchAction",
        setCookie: result.value.setCookie
      };
      fetchRedirectIds.add(key);
      init.onRedirect(result.value.location, locationState);
      let loadingFetcher = {
        state: "loading",
        type: "actionRedirect",
        submission,
        data: void 0
      };
      setFetcher(key, loadingFetcher);
      update({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    setFetcher(key, loadFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0;
    let maybeActionCatchResult = isCatchResult(result) ? result : void 0;
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches;
    let results = await callLoaders(state, state.transition.location || state.location, matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
    if (controller.signal.aborted) {
      return;
    }
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    let redirect2 = findRedirect(results);
    if (redirect2) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: redirect2.setCookie
      };
      init.onRedirect(redirect2.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult) || [];
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys) {
      markFetchersDone(abortedKeys);
    }
    let yeetedNavigation = yeetStaleNavigationLoad(loadId);
    if (yeetedNavigation) {
      let {
        transition
      } = state;
      invariant2(transition.state === "loading", "Expected loading transition");
      update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else {
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
    }
  }
  function yeetStaleNavigationLoad(landedId) {
    let isLoadingNavigation = state.transition.state === "loading";
    if (isLoadingNavigation && navigationLoadId < landedId) {
      abortNormalNavigation();
      return true;
    }
    return false;
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      setFetcher(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant2(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    return yeetedKeys.length ? yeetedKeys : false;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    fetchControllers.delete(key);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    if (typeof AbortController === "undefined") {
      throw new Error("handleLoaderFetch was called during the server render, but it shouldn't be. You are likely calling useFetcher.load() in the body of your component. Try moving it to a useEffect or a callback.");
    }
    let currentFetcher = state.fetchers.get(key);
    let fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: (currentFetcher === null || currentFetcher === void 0 ? void 0 : currentFetcher.data) || void 0
    };
    setFetcher(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    fetchControllers.delete(key);
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    setFetcher(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      });
      return true;
    }
    return false;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      });
      return true;
    }
    return false;
  }
  async function handleNotFoundNavigation(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location: location2,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location2, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    let actionMatches = matches2;
    if (!isIndexRequestUrl2(createUrl(submission.action)) && actionMatches[matches2.length - 1].route.index) {
      actionMatches = actionMatches.slice(0, -1);
    }
    let leafMatch = actionMatches.slice(-1)[0];
    let result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "action",
        setCookie: result.value.setCookie
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    let catchVal, catchBoundaryId;
    if (isCatchResult(result)) {
      [catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], actionMatches, result) || [];
    }
    let loadTransition = {
      state: "loading",
      type: "actionReload",
      submission,
      location: location2
    };
    update({
      transition: loadTransition,
      actionData: {
        [leafMatch.route.id]: result.value
      }
    });
    await loadPageData(location2, matches2, submission, leafMatch.route.id, result, catchVal, catchBoundaryId);
  }
  async function handleLoaderSubmissionNavigation(location2, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  async function handleHashChange(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    update({
      location: location2,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleLoaderRedirect(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalRedirect",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleLoaderSubmissionRedirect(location2, matches2) {
    abortNormalNavigation();
    invariant2(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "loaderSubmissionRedirect",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  async function handleFetchActionRedirect(location2, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "fetchActionRedirect",
      submission: void 0,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2);
  }
  async function handleActionRedirect(location2, matches2) {
    abortNormalNavigation();
    invariant2(state.transition.type === "actionSubmission" || state.transition.type === "actionReload", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "actionRedirect",
      submission,
      location: location2
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location2, matches2, submission);
  }
  function isHashChangeOnly(location2) {
    return createHref(state.location) === createHref(location2) && state.location.hash !== location2.hash;
  }
  async function loadPageData(location2, matches2, submission, submissionRouteId, actionResult, catchVal, catchBoundaryId) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0;
    let maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0;
    let controller = new AbortController();
    pendingNavigationController = controller;
    navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, location2, matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId, void 0, catchBoundaryId);
    if (controller.signal.aborted) {
      return;
    }
    let redirect2 = findRedirect(results);
    if (redirect2) {
      if (state.transition.type === "actionReload") {
        let locationState = {
          isRedirect: true,
          type: "action",
          setCookie: redirect2.setCookie
        };
        init.onRedirect(redirect2.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: true,
          type: "loaderSubmission",
          setCookie: redirect2.setCookie
        };
        init.onRedirect(redirect2.location, locationState);
      } else {
        let locationState = {
          isRedirect: true,
          type: "loader",
          setCookie: redirect2.setCookie
        };
        init.onRedirect(redirect2.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult) || [catchVal, catchBoundaryId];
    markFetchRedirectsDone();
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    if (abortedIds) {
      markFetchersDone(abortedIds);
    }
    update({
      location: location2,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    if (pendingNavigationController) {
      pendingNavigationController.abort();
    }
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant2(controller, `Expected fetch controller: ${key}`);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant2(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.type === "actionRedirect") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }
    markFetchersDone(doneKeys);
  }
  return {
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
async function callLoaders(state, location2, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  let url = createUrl(createHref(location2));
  let matchesToLoad = filterMatchesToLoad(state, location2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url, signal)));
}
async function callLoader(match, url, signal) {
  invariant2(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match;
    let value = await match.route.loader({
      params,
      url,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, location2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher, catchBoundaryId) {
  var _location$state;
  if (catchBoundaryId || submissionRouteId && (actionCatchResult || actionErrorResult)) {
    let foundProblematicRoute = false;
    matches = matches.filter((match) => {
      if (foundProblematicRoute) {
        return false;
      }
      if (match.route.id === submissionRouteId || match.route.id === catchBoundaryId) {
        foundProblematicRoute = true;
        return false;
      }
      return true;
    });
  }
  let isNew = (match, index) => {
    if (!state.matches[index])
      return true;
    return match.route.id !== state.matches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _state$matches$index$;
    return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
  };
  let url = createUrl(createHref(location2));
  let filterByRouteProps = (match, index) => {
    if (!match.route.loader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url,
        submission,
        params: match.params
      });
    }
    return true;
  };
  let isInRootCatchBoundary = state.matches.length === 1;
  if (isInRootCatchBoundary) {
    return matches.filter((match) => !!match.route.loader);
  }
  if ((fetcher === null || fetcher === void 0 ? void 0 : fetcher.type) === "actionReload") {
    return matches.filter(filterByRouteProps);
  } else if (state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || state.transition.type === "fetchActionRedirect" || createHref(url) === createHref(state.location) || url.searchParams.toString() !== state.location.search.substring(1) || (_location$state = location2.state) !== null && _location$state !== void 0 && _location$state.setCookie) {
    return matches.filter(filterByRouteProps);
  }
  return matches.filter((match, index, arr) => {
    var _location$state2;
    if ((actionErrorResult || actionCatchResult) && arr.length - 1 === index) {
      return false;
    }
    return match.route.loader && (isNew(match, index) || matchPathChanged(match, index) || ((_location$state2 = location2.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.setCookie));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location2) {
  return location2.pathname + location2.search;
}
function findRedirect(results) {
  for (let result of results) {
    if (isRedirectResult(result)) {
      return result.value;
    }
  }
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results) {
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return null;
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results) {
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.CatchBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.ErrorBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results) {
    newData[match.route.id] = value;
  }
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    if (value !== void 0) {
      loaderData[route.id] = value;
    }
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}

// node_modules/@remix-run/react/esm/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ React2.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute, routeModulesCache),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component);
    let children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    if (children.length > 0)
      route.children = children;
    return route;
  });
}
function createShouldReload(route, routeModules) {
  let shouldReload = (arg) => {
    let module = routeModules[route.id];
    invariant2(module, `Expected route module to be loaded for ${route.id}`);
    if (module.unstable_shouldReload) {
      return module.unstable_shouldReload(arg);
    }
    return true;
  };
  return shouldReload;
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(routeModule);
  return routeModule;
}
function createLoader(route, routeModules) {
  let loader = async ({
    url,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect2 = await checkRedirect(result);
      if (redirect2)
        return redirect2;
      if (isCatchResponse(result)) {
        throw new CatchValue(result.status, result.statusText, await extractData(result.clone()));
      }
      return extractData(result);
    } else {
      await loadRouteModuleWithBlockingLinks(route, routeModules);
    }
  };
  return loader;
}
function createAction(route, routeModules) {
  let action = async ({
    url,
    signal,
    submission
  }) => {
    if (!route.hasAction) {
      console.error(`Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
    }
    let result = await fetchData(url, route.id, signal, submission);
    if (result instanceof Error) {
      throw result;
    }
    let redirect2 = await checkRedirect(result);
    if (redirect2)
      return redirect2;
    await loadRouteModuleWithBlockingLinks(route, routeModules);
    if (isCatchResponse(result)) {
      throw new CatchValue(result.status, result.statusText, await extractData(result.clone()));
    }
    return extractData(result);
  };
  return action;
}
async function checkRedirect(response) {
  if (isRedirectResponse(response)) {
    let url = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url.origin !== window.location.origin) {
      await new Promise(() => {
        window.location.replace(url.href);
      });
    } else {
      return new TransitionRedirect(url.pathname + url.search + url.hash, response.headers.get("X-Remix-Revalidate") !== null);
    }
  }
  return null;
}

// node_modules/@remix-run/react/esm/components.js
var RemixEntryContext = /* @__PURE__ */ React3.createContext(void 0);
function useRemixEntryContext() {
  let context = React3.useContext(RemixEntryContext);
  invariant2(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixEntry({
  context: entryContext,
  action,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = false
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    appState: entryComponentDidCatchEmulator
  } = entryContext;
  let clientRoutes = React3.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]);
  let [clientState, setClientState] = React3.useState(entryComponentDidCatchEmulator);
  let [transitionManager] = React3.useState(() => {
    return createTransitionManager({
      routes: clientRoutes,
      actionData: documentActionData,
      loaderData: documentLoaderData,
      location: historyLocation,
      catch: entryComponentDidCatchEmulator.catch,
      catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
      onRedirect: _navigator.replace,
      onChange: (state) => {
        setClientState({
          catch: state.catch,
          error: state.error,
          catchBoundaryRouteId: state.catchBoundaryId,
          loaderBoundaryRouteId: state.errorBoundaryId,
          renderBoundaryRouteId: null,
          trackBoundaries: false,
          trackCatchBoundaries: false
        });
      }
    });
  });
  let navigator = React3.useMemo(() => {
    let push = (to, state) => {
      return transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
    };
    return __spreadProps(__spreadValues({}, _navigator), {
      push
    });
  }, [_navigator, transitionManager]);
  let {
    location: location2,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  React3.useEffect(() => {
    let {
      location: location3
    } = transitionManager.getState();
    if (historyLocation === location3)
      return;
    transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action
    });
  }, [transitionManager, historyLocation, action]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0;
  let ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ React3.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      appState: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ React3.createElement(RemixErrorBoundary, {
    location: location2,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
    location: location2,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ React3.createElement(Router, {
    navigationType: action,
    location: location2,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ React3.createElement(Routes2, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  error.stack = data.stack;
  return error;
}
function Routes2() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let element = useRoutes(clientRoutes) || clientRoutes[0].element;
  return element;
}
var RemixRouteContext = /* @__PURE__ */ React3.createContext(void 0);
function useRemixRouteContext() {
  let context = React3.useContext(RemixRouteContext);
  invariant2(context, "You must render this element in a remix route element");
  return context;
}
function DefaultRouteComponent({
  id
}) {
  throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id
}) {
  let location2 = useLocation();
  let {
    routeData,
    routeModules,
    appState
  } = useRemixEntryContext();
  invariant2(routeData, "Cannot initialize 'routeData'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  invariant2(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let data = routeData[id];
  let {
    default: Component,
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  let element = Component ? /* @__PURE__ */ React3.createElement(Component, null) : /* @__PURE__ */ React3.createElement(DefaultRouteComponent, {
    id
  });
  let context = {
    data,
    id
  };
  if (CatchBoundary) {
    let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
    if (appState.trackCatchBoundaries) {
      appState.catchBoundaryRouteId = id;
    }
    context = maybeServerCaught ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ React3.createElement(RemixCatchBoundary, {
      location: location2,
      component: CatchBoundary,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary) {
    let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
    if (appState.trackBoundaries) {
      appState.renderBoundaryRouteId = id;
    }
    context = maybeServerRenderError ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ React3.createElement(RemixErrorBoundary, {
      location: location2,
      component: ErrorBoundary,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ React3.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React3.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React3.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React3.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
    }
  };
  React3.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var NavLink2 = /* @__PURE__ */ React3.forwardRef((_a, forwardedRef) => {
  var _b = _a, {
    to,
    prefetch = "none"
  } = _b, props = __objRest(_b, [
    "to",
    "prefetch"
  ]);
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(NavLink, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink2.displayName = "NavLink";
var Link2 = /* @__PURE__ */ React3.forwardRef((_a, forwardedRef) => {
  var _b = _a, {
    to,
    prefetch = "none"
  } = _b, props = __objRest(_b, [
    "to",
    "prefetch"
  ]);
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement(Link, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link2.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext();
  let links3 = React3.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, links3.map((link) => isPageLinkDescriptor(link) ? /* @__PURE__ */ React3.createElement(PrefetchPageLinks, _extends2({
    key: link.page
  }, link)) : /* @__PURE__ */ React3.createElement("link", _extends2({
    key: link.rel + link.href
  }, link))));
}
function PrefetchPageLinks(_a) {
  var _b = _a, {
    page
  } = _b, dataLinkProps = __objRest(_b, [
    "page"
  ]);
  let {
    clientRoutes
  } = useRemixEntryContext();
  let matches = React3.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ React3.createElement(PrefetchPageLinksImpl, _extends2({
    page,
    matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext();
  let [styleLinks, setStyleLinks] = React3.useState([]);
  React3.useEffect(() => {
    let interrupted = false;
    getStylesheetPrefetchLinks(matches, routeModules).then((links3) => {
      if (!interrupted)
        setStyleLinks(links3);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl(_a) {
  var _b = _a, {
    page,
    matches: nextMatches
  } = _b, linkProps = __objRest(_b, [
    "page",
    "matches"
  ]);
  let location2 = useLocation();
  let {
    matches,
    manifest
  } = useRemixEntryContext();
  let newMatchesForData = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location2, "data"), [page, nextMatches, matches, location2]);
  let newMatchesForAssets = React3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location2, "assets"), [page, nextMatches, matches, location2]);
  let dataHrefs = React3.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = React3.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends2({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React3.createElement("link", _extends2({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React3.createElement("link", _extends2({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext();
  let location2 = useLocation();
  let meta2 = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = routeData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location: location2
      }) : routeModule.meta;
      Object.assign(meta2, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, Object.entries(meta2).map(([name, value]) => {
    if (!value) {
      return null;
    }
    if (["charset", "charSet"].includes(name)) {
      return /* @__PURE__ */ React3.createElement("meta", {
        key: "charset",
        charSet: value
      });
    }
    if (name === "title") {
      return /* @__PURE__ */ React3.createElement("title", {
        key: "title"
      }, value);
    }
    let isOpenGraphTag = name.startsWith("og:");
    return [value].flat().map((content) => {
      if (isOpenGraphTag) {
        return /* @__PURE__ */ React3.createElement("meta", {
          content,
          key: name + content,
          property: name
        });
      }
      if (typeof content === "string") {
        return /* @__PURE__ */ React3.createElement("meta", {
          content,
          name,
          key: name + content
        });
      }
      return /* @__PURE__ */ React3.createElement("meta", _extends2({
        key: name + JSON.stringify(content)
      }, content));
    });
  }));
}
var isHydrated = false;
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  React3.useEffect(() => {
    isHydrated = true;
  }, []);
  let initialScripts = React3.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "";
    let routeModulesScript = `${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};`;
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(contextScript)
    })), /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      src: manifest.url
    })), /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module"
    })), /* @__PURE__ */ React3.createElement("script", _extends2({}, props, {
      src: manifest.entry.module,
      type: "module"
    })));
  }, []);
  let nextMatches = React3.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      invariant2(matches2, `No routes match path "${pendingLocation.pathname}"`);
      return matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]);
  let routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, dedupe2(preloads).map((path) => /* @__PURE__ */ React3.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), isHydrated ? null : initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
var Form = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  return /* @__PURE__ */ React3.createElement(FormImpl, _extends2({}, props, {
    ref
  }));
});
Form.displayName = "Form";
var FormImpl = /* @__PURE__ */ React3.forwardRef((_a, forwardedRef) => {
  var _b = _a, {
    reloadDocument = false,
    replace = false,
    method = "get",
    action = ".",
    encType = "application/x-www-form-urlencoded",
    fetchKey,
    onSubmit
  } = _b, props = __objRest(_b, [
    "reloadDocument",
    "replace",
    "method",
    "action",
    "encType",
    "fetchKey",
    "onSubmit"
  ]);
  let submit = useSubmitImpl(fetchKey);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action);
  let formRef = React3.useRef();
  let ref = useComposedRefs(forwardedRef, formRef);
  let clickedButtonRef = React3.useRef();
  React3.useEffect(() => {
    let form = formRef.current;
    if (!form)
      return;
    function handleClick(event) {
      if (!(event.target instanceof Element))
        return;
      let submitButton = event.target.closest("button,input[type=submit]");
      if (submitButton && submitButton.form === form && submitButton.type === "submit") {
        clickedButtonRef.current = submitButton;
      }
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return /* @__PURE__ */ React3.createElement("form", _extends2({
    ref,
    method: formMethod,
    action: formAction,
    encType,
    onSubmit: reloadDocument ? void 0 : (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented)
        return;
      event.preventDefault();
      submit(clickedButtonRef.current || event.currentTarget, {
        method,
        replace
      });
      clickedButtonRef.current = null;
    }
  }, props));
});
FormImpl.displayName = "FormImpl";
function useFormAction(action = ".", method = "get") {
  let {
    id
  } = useRemixRouteContext();
  let path = useResolvedPath(action);
  let search = path.search;
  let isIndexRoute = id.endsWith("/index");
  if (action === "." && isIndexRoute) {
    search = search ? search.replace(/^\?/, "?index&") : "?index";
  }
  return path.pathname + search;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function useSubmitImpl(key) {
  let navigate = useNavigate();
  let defaultAction = useFormAction();
  let {
    transitionManager
  } = useRemixEntryContext();
  return React3.useCallback((target, options = {}) => {
    let method;
    let action;
    let encType;
    let formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("enctype") || defaultEncType;
      formData = new FormData(target);
      if (submissionTrigger && submissionTrigger.name) {
        formData.append(submissionTrigger.name, submissionTrigger.value);
      }
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(`Cannot submit a <button> without a <form>`);
      }
      method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
      formData = new FormData(form);
      if (target.name) {
        formData.set(target.name, target.value);
      }
    } else {
      if (isHtmlElement(target)) {
        throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
      }
      method = options.method || "get";
      action = options.action || defaultAction;
      encType = options.encType || "application/x-www-form-urlencoded";
      if (target instanceof FormData) {
        formData = target;
      } else {
        formData = new FormData();
        if (target instanceof URLSearchParams) {
          for (let [name, value] of target) {
            formData.append(name, value);
          }
        } else if (target != null) {
          for (let name of Object.keys(target)) {
            formData.append(name, target[name]);
          }
        }
      }
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    }
    let {
      protocol,
      host
    } = window.location;
    let url = new URL(action, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      for (let [name, value] of formData) {
        if (typeof value === "string") {
          url.searchParams.append(name, value);
        } else {
          throw new Error(`Cannot submit binary form data using GET`);
        }
      }
    }
    let submission = {
      formData,
      action: url.pathname + url.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    if (key) {
      transitionManager.send({
        type: "fetcher",
        href: submission.action,
        submission,
        key
      });
    } else {
      setNextNavigationSubmission(submission);
      navigate(url.pathname + url.search, {
        replace: options.replace
      });
    }
  }, [defaultAction, key, navigate, transitionManager]);
}
var nextNavigationSubmission;
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  nextNavigationSubmission = void 0;
  return submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  React3.useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
var liveReloadMounted = false;
var LiveReload = false ? () => null : function LiveReload2({
  port = Number(8002),
  nonce = void 0
}) {
  let setupLiveReload = (port2) => {
    let protocol = location.protocol === "https:" ? "wss:" : "ws:";
    let host = location.hostname;
    let socketPath = `${protocol}//${host}:${port2}/socket`;
    let ws = new WebSocket(socketPath);
    ws.onmessage = (message) => {
      let event = JSON.parse(message.data);
      if (event.type === "LOG") {
        console.log(event.message);
      }
      if (event.type === "RELOAD") {
        console.log("\u{1F4BF} Reloading window ...");
        window.location.reload();
      }
    };
    ws.onerror = (error) => {
      console.log("Remix dev asset server web socket error:");
      console.error(error);
    };
  };
  React3.useEffect(() => {
    if (!liveReloadMounted) {
      setupLiveReload(port);
      liveReloadMounted = true;
    }
  }, []);
  return null;
};
function useComposedRefs(...refs) {
  return React3.useCallback((node) => {
    for (let ref of refs) {
      if (ref == null)
        continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        try {
          ref.current = node;
        } catch (_) {
        }
      }
    }
  }, refs);
}

// node_modules/@remix-run/react/esm/index.js
init_react_router_dom();

// node_modules/@remix-run/react/esm/scroll-restoration.js
init_react();
var React4 = __toESM(require_react());
init_react_router_dom();
var STORAGE_KEY = "positions";
var positions = {};
if (typeof document !== "undefined") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  if (sessionPositions) {
    positions = JSON.parse(sessionPositions);
  }
}
function ScrollRestoration({
  nonce = void 0
}) {
  useScrollRestoration();
  React4.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useBeforeUnload(React4.useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  let restoreScroll = ((STORAGE_KEY2) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key
      }, "");
    }
    try {
      let positions2 = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}");
      let storedY = positions2[window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React4.createElement("script", {
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)})`
    }
  });
}
var hydrated = false;
function useScrollRestoration() {
  let location2 = useLocation();
  let transition = useTransition();
  let wasSubmissionRef = React4.useRef(false);
  React4.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
  React4.useEffect(() => {
    if (transition.location) {
      positions[location2.key] = window.scrollY;
    }
  }, [transition, location2]);
  useBeforeUnload(React4.useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, []));
  if (typeof document !== "undefined") {
    React4.useLayoutEffect(() => {
      if (!hydrated) {
        hydrated = true;
        return;
      }
      let y = positions[location2.key];
      if (y != void 0) {
        window.scrollTo(0, y);
        return;
      }
      if (location2.hash) {
        let el = document.getElementById(location2.hash.slice(1));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (wasSubmissionRef.current === true) {
        wasSubmissionRef.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [location2]);
  }
  React4.useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
}

// node_modules/@remix-run/react/esm/server.js
init_react();
init_history();
var React5 = __toESM(require_react());
function RemixServer({
  context,
  url
}) {
  if (typeof url === "string") {
    url = new URL(url);
  }
  let location2 = {
    pathname: url.pathname,
    search: url.search,
    hash: "",
    state: null,
    key: "default"
  };
  let staticNavigator = {
    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    },
    block() {
      throw new Error(`You cannot use navigator.block() on the server because it is a stateless environment.`);
    }
  };
  return /* @__PURE__ */ React5.createElement(RemixEntry, {
    context,
    action: Action.Pop,
    location: location2,
    navigator: staticNavigator,
    static: true
  });
}

// app/entry.server.tsx
var import_server2 = __toESM(require_server_browser());

// node_modules/isbot/index.mjs
init_react();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}
var list = [
  " daum[ /]",
  " deusu/",
  "(?:^| )site",
  "@[a-z]",
  "\\(at\\)[a-z]",
  "\\(github\\.com/",
  "\\[at\\][a-z]",
  "^12345",
  "^<",
  "^[\\w \\.]+/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?$",
  "^[\\w]+$",
  "^[^ ]{50,}$",
  "^ace explorer",
  "^acoon",
  "^active",
  "^ad muncher",
  "^anglesharp/",
  "^anonymous",
  "^apple-pubsub/",
  "^astute srm",
  "^avsdevicesdk/",
  "^axios/",
  "^bidtellect/",
  "^biglotron",
  "^blackboard safeassign",
  "^blocknote.net",
  "^braze sender",
  "^captivenetworksupport",
  "^castro",
  "^cf-uc ",
  "^clamav[ /]",
  "^cobweb/",
  "^coccoc",
  "^dap ",
  "^ddg[_-]android",
  "^discourse",
  "^dispatch/\\d",
  "^downcast/",
  "^duckduckgo",
  "^email",
  "^enigma browser",
  "^evernote clip resolver",
  "^facebook",
  "^faraday",
  "^fdm[ /]\\d",
  "^getright/",
  "^gozilla/",
  "^hatena",
  "^hobbit",
  "^hotzonu",
  "^hwcdn/",
  "^infox-wisg",
  "^invision",
  "^jeode/",
  "^jetbrains",
  "^jetty/",
  "^jigsaw",
  "^linkdex",
  "^lwp[-: ]",
  "^mailchimp\\.com$",
  "^metauri",
  "^microsoft bits",
  "^microsoft data",
  "^microsoft office existence",
  "^microsoft office protocol discovery",
  "^microsoft windows network diagnostics",
  "^microsoft-cryptoapi",
  "^microsoft-webdav-miniredir",
  "^movabletype",
  "^mozilla/\\d\\.\\d \\(compatible;?\\)$",
  "^mozilla/\\d\\.\\d \\w*$",
  "^my browser$",
  "^navermailapp",
  "^netsurf",
  "^node-superagent",
  "^octopus",
  "^offline explorer",
  "^pagething",
  "^panscient",
  "^perimeterx",
  "^php",
  "^postman",
  "^postrank",
  "^python",
  "^read",
  "^reed",
  "^request-promise$",
  "^restsharp/",
  "^shareaza",
  "^shockwave flash",
  "^snapchat",
  "^space bison",
  "^sprinklr",
  "^svn",
  "^swcd ",
  "^t-online browser",
  "^taringa",
  "^test certificate info",
  "^the knowledge ai",
  "^thinklab",
  "^thumbor/",
  "^traackr.com",
  "^tumblr/",
  "^vbulletin",
  "^venus/fedoraplanet",
  "^w3c",
  "^webbandit/",
  "^webcopier",
  "^wget",
  "^whatsapp",
  "^www-mechanize",
  "^xenu link sleuth",
  "^yahoo",
  "^yandex",
  "^zdm/\\d",
  "^zeushdthree",
  "^zoom marketplace/",
  "adbeat\\.com",
  "appinsights",
  "archive",
  "ask jeeves/teoma",
  "bit\\.ly/",
  "bluecoat drtr",
  "bot",
  "browsex",
  "burpcollaborator",
  "capture",
  "catch",
  "check",
  "chrome-lighthouse",
  "chromeframe",
  "client",
  "cloud",
  "crawl",
  "daemon",
  "dareboost",
  "datanyze",
  "dataprovider",
  "dejaclick",
  "dmbrowser",
  "download",
  "evc-batch/",
  "feed",
  "fetch",
  "firephp",
  "freesafeip",
  "ghost",
  "gomezagent",
  "google",
  "headlesschrome/",
  "http",
  "httrack",
  "hubspot marketing grader",
  "hydra",
  "ibisbrowser",
  "images",
  "index",
  "ips-agent",
  "java",
  "library",
  "mail\\.ru/",
  "manager",
  "monitor",
  "morningscore/",
  "neustar wpm",
  "news",
  "nutch",
  "offbyone",
  "optimize",
  "pagespeed",
  "parse",
  "perl",
  "phantom",
  "pingdom",
  "powermarks",
  "preview",
  "probe",
  "proxy",
  "ptst[ /]\\d",
  "reader",
  "rexx;",
  "rigor",
  "rss",
  "scan",
  "scrape",
  "search",
  "server",
  "sogou",
  "sparkler/",
  "spider",
  "statuscake",
  "stumbleupon\\.com",
  "supercleaner",
  "synapse",
  "synthetic",
  "taginspector/",
  "toolbar",
  "torrent",
  "tracemyfile",
  "transcoder",
  "trendsmapresolver",
  "twingly recon",
  "url",
  "valid",
  "virtuoso",
  "wappalyzer",
  "webglance",
  "webkit2png",
  "websitemetadataretriever",
  "whatcms/",
  "wordpress",
  "zgrab"
];
function amend(list2) {
  try {
    new RegExp("(?<! cu)bot").test("dangerbot");
  } catch (error) {
    return list2;
  }
  list2.splice(list2.lastIndexOf("bot"), 1);
  list2.push("(?<! cu)bot");
  list2.splice(list2.lastIndexOf("google"), 1);
  list2.push("(?<! (channel\\/|google\\/))google(?!(app|\\/google))");
  list2.splice(list2.lastIndexOf("search"), 1);
  list2.push("(?<! (ya|yandex))search");
  list2.splice(list2.lastIndexOf("http"), 1);
  list2.push("(?<!(lib))http");
  list2.splice(list2.lastIndexOf("java"), 1);
  list2.push("java(?!;)");
  list2.splice(list2.lastIndexOf("fetch"), 1);
  list2.push("(?<!(mozac))fetch");
  return list2;
}
amend(list);
var flags = "i";
var _list = /* @__PURE__ */ new WeakMap();
var _pattern = /* @__PURE__ */ new WeakMap();
var _update = /* @__PURE__ */ new WeakSet();
var _index = /* @__PURE__ */ new WeakSet();
var Isbot = /* @__PURE__ */ function() {
  function Isbot2(patterns) {
    var _this = this;
    _classCallCheck(this, Isbot2);
    _classPrivateMethodInitSpec(this, _index);
    _classPrivateMethodInitSpec(this, _update);
    _classPrivateFieldInitSpec(this, _list, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _pattern, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _list, patterns || list.slice());
    _classPrivateMethodGet(this, _update, _update2).call(this);
    var isbot2 = function isbot3(ua) {
      return _this.test(ua);
    };
    return Object.defineProperties(isbot2, Object.getOwnPropertyNames(Isbot2.prototype).filter(function(prop) {
      return !["constructor"].includes(prop);
    }).reduce(function(accumulator, prop) {
      return Object.assign(accumulator, _defineProperty({}, prop, {
        get: function get() {
          return _this[prop].bind(_this);
        }
      }));
    }, {}));
  }
  _createClass(Isbot2, [{
    key: "test",
    value: function test(ua) {
      return Boolean(ua) && _classPrivateFieldGet(this, _pattern).test(ua);
    }
  }, {
    key: "find",
    value: function find() {
      var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var match = ua.match(_classPrivateFieldGet(this, _pattern));
      return match && match[0];
    }
  }, {
    key: "matches",
    value: function matches() {
      var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return _classPrivateFieldGet(this, _list).filter(function(entry2) {
        return new RegExp(entry2, flags).test(ua);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      var ua = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      this.exclude(this.matches(ua));
    }
  }, {
    key: "extend",
    value: function extend() {
      var _this2 = this;
      var filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      [].push.apply(_classPrivateFieldGet(this, _list), filters.filter(function(rule) {
        return _classPrivateMethodGet(_this2, _index, _index2).call(_this2, rule) === -1;
      }).map(function(filter) {
        return filter.toLowerCase();
      }));
      _classPrivateMethodGet(this, _update, _update2).call(this);
    }
  }, {
    key: "exclude",
    value: function exclude() {
      var filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var length = filters.length;
      while (length--) {
        var index = _classPrivateMethodGet(this, _index, _index2).call(this, filters[length]);
        if (index > -1) {
          _classPrivateFieldGet(this, _list).splice(index, 1);
        }
      }
      _classPrivateMethodGet(this, _update, _update2).call(this);
    }
  }, {
    key: "spawn",
    value: function spawn(list2) {
      return new Isbot2(list2 || _classPrivateFieldGet(this, _list));
    }
  }]);
  return Isbot2;
}();
function _update2() {
  _classPrivateFieldSet(this, _pattern, new RegExp(_classPrivateFieldGet(this, _list).join("|"), flags));
}
function _index2(rule) {
  return _classPrivateFieldGet(this, _list).indexOf(rule.toLowerCase());
}
var isbot = new Isbot();

// app/entry.server.tsx
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let body = await (0, import_server2.renderToReadableStream)(/* @__PURE__ */ React.createElement(RemixServer, {
    context: remixContext,
    url: request.url
  }), {
    onError() {
      responseStatusCode = 500;
    }
  });
  if (isbot(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/jamie/src/@jamieguerrero/jamieguerrero/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var meta = () => ({
  charset: "utf-8",
  title: "Jamie Guerrero",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}

// route:/Users/jamie/src/@jamieguerrero/jamieguerrero/app/routes/op1/index.tsx
var op1_exports = {};
__export(op1_exports, {
  default: () => Index,
  links: () => links
});
init_react();

// app/styles/op1.css
var op1_default = "/build/_assets/op1-WTKTK523.css";

// route:/Users/jamie/src/@jamieguerrero/jamieguerrero/app/routes/op1/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: op1_default }];
};
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "op-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "op-outer-border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "op-inner-border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "speaker"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "volume"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "chatbox"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "metronome"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "screen"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "knob-blue"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "knob-green"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "knob-white"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "knob-orange"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mic"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "com"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "synth"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "drum"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "tape"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "levels"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "button-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "button-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "button-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "button-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-1"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-5"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-6"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-7"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "option-8"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "arpeggiator"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "lift"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "drop"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "join"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "record"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "play"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "stop"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "shift"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "keyboard"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "black-keys"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "black-right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-center"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-center"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-left"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-right"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "black-left"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "white-keys"
  }, /* @__PURE__ */ React.createElement("div", {
    key: "f1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "g1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "a1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "b1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "c1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "d1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "e1",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "f2",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "g2",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "a2",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "b2",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "c2",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "d2",
    className: "white-key"
  }), /* @__PURE__ */ React.createElement("div", {
    key: "e2",
    className: "white-key"
  }))))), /* @__PURE__ */ React.createElement("img", {
    className: "op-reference",
    src: "https://cdn.glitch.global/e8c416b0-b267-4f97-b85c-a89ab0a34377/op1.webp?v=1650494144624",
    alt: "Op 1"
  }));
}

// route:/Users/jamie/src/@jamieguerrero/jamieguerrero/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  links: () => links2
});
init_react();

// app/styles/index.css
var styles_default = "/build/_assets/index-55DNWN2R.css";

// route:/Users/jamie/src/@jamieguerrero/jamieguerrero/app/routes/index.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "oh shit this is gonna be fun"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "aaeb8b4f", "entry": { "module": "/build/entry.client-MPZOSVNI.js", "imports": ["/build/_shared/chunk-VQ53OORO.js", "/build/_shared/chunk-KDLP5LGO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-L35LPD5G.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-D7BGWOIE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/op1/index": { "id": "routes/op1/index", "parentId": "root", "path": "op1", "index": true, "caseSensitive": void 0, "module": "/build/routes/op1/index-3WN3FRAJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-AAEB8B4F.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/op1/index": {
    id: "routes/op1/index",
    parentId: "root",
    path: "op1",
    index: true,
    caseSensitive: void 0,
    module: op1_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var import_netlify_edge = __toESM(require_netlify_edge());
var server_default = (0, import_netlify_edge.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
});
export {
  server_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @remix-run/netlify-edge v0.0.0-experimental-fd9fa7f4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v0.0.0-experimental-fd9fa7f4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v0.0.0-experimental-fd9fa7f4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=server.js.map
