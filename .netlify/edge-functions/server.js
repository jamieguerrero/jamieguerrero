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

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    init_react();
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (a === null || typeof a !== "object")
        return null;
      a = z && a[z] || a["@@iterator"];
      return typeof a === "function" ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if (typeof a !== "object" && typeof a !== "function" && a != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (b != null)
        for (d in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (g === 1)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          c[d] === void 0 && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return typeof a === "object" && a !== null && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if (k === "undefined" || k === "boolean")
        a = null;
      var h = false;
      if (a === null)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = d === "" ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), typeof f === "function")
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if (k === "object")
        throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (a == null)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (a._status === -1) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (a._status === 0 || a._status === -1)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (a._status === 0 || a._status === -1)
            a._status = 2, a._result = b2;
        });
        a._status === -1 && (a._status = 0, a._result = b);
      }
      if (a._status === 1)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (a === null || a === void 0)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (b != null) {
        b.ref !== void 0 && (k = b.ref, h = K.current);
        b.key !== void 0 && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: b === void 0 ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.1.0";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    init_react();
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
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
      !meta2.relativePath.startsWith(parentPath) ? false ? invariant(false, 'Absolute route path "' + meta2.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : invariant(false) : void 0;
      meta2.relativePath = meta2.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta2.relativePath]);
    let routesMeta = parentsMeta.concat(meta2);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? false ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : invariant(false) : void 0;
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
  false ? warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".')) : void 0;
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
    false ? warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ").")) : void 0;
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
  !useInRouterContext() ? false ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
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
  !useInRouterContext() ? false ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return (0, import_react.useContext)(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? false ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
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
    false ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
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
  !useInRouterContext() ? false ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = (0, import_react.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (false) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location2;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? false ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (false) {
    false ? warning(parentRoute || matches != null, 'No routes matched location "' + location2.pathname + location2.search + location2.hash + '" ') : void 0;
    false ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location2.pathname + location2.search + location2.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
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
  !!useInRouterContext() ? false ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
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
  false ? warning(location2 != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
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
var import_react, NavigationContext, LocationContext, RouteContext, paramRe, dynamicSegmentValue, indexRouteValue, emptySegmentValue, staticSegmentValue, splatPenalty, isSplat, joinPaths, normalizePathname, normalizeSearch, normalizeHash, OutletContext;
var init_react_router = __esm({
  "node_modules/react-router/index.js"() {
    init_react();
    init_history();
    init_history();
    import_react = __toESM(require_react());
    NavigationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (false) {
      NavigationContext.displayName = "Navigation";
    }
    LocationContext = /* @__PURE__ */ (0, import_react.createContext)(null);
    if (false) {
      LocationContext.displayName = "Location";
    }
    RouteContext = /* @__PURE__ */ (0, import_react.createContext)({
      outlet: null,
      matches: []
    });
    if (false) {
      RouteContext.displayName = "Route";
    }
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
    if (false) {
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
    if (false) {
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
    if (false) {
      NavLink.displayName = "NavLink";
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js
var require_react_dom_server_legacy_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.min.js"(exports) {
    "use strict";
    init_react();
    var aa = require_react();
    function k(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var ba = false;
    function m(a, b) {
      ba && (ba = false, b[0] !== "<" && a.push("<!-- -->"));
      return b === "<!-- -->" ? ba = true : a.push(b);
    }
    var q = Object.prototype.hasOwnProperty;
    var ca = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var da = {};
    var ea = {};
    function fa(a) {
      if (q.call(ea, a))
        return true;
      if (q.call(da, a))
        return false;
      if (ca.test(a))
        return ea[a] = true;
      da[a] = true;
      return false;
    }
    function r(a, b, c, d, f, e, g) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var t = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      t[a] = new r(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      t[b] = new r(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      t[a] = new r(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      t[a] = new r(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      t[a] = new r(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      t[a] = new r(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      t[a] = new r(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      t[a] = new r(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      t[a] = new r(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ha = /[\-:]([a-z])/g;
    function ia(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(ha, ia);
      t[b] = new r(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ha, ia);
      t[b] = new r(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ha, ia);
      t[b] = new r(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      t[a] = new r(a, 1, false, a.toLowerCase(), null, false, false);
    });
    t.xlinkHref = new r("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      t[a] = new r(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var u = {
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
    var ja = ["Webkit", "ms", "Moz", "O"];
    Object.keys(u).forEach(function(a) {
      ja.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        u[b] = u[a];
      });
    });
    var ka = /["'&<>]/;
    function v(a) {
      if (typeof a === "boolean" || typeof a === "number")
        return "" + a;
      a = "" + a;
      var b = ka.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var la = /([A-Z])/g;
    var ma = /^ms-/;
    var na = Array.isArray;
    function w(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function oa(a, b, c) {
      switch (b) {
        case "select":
          return w(1, c.value != null ? c.value : c.defaultValue);
        case "svg":
          return w(2, null);
        case "math":
          return w(3, null);
        case "foreignObject":
          return w(1, null);
        case "table":
          return w(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return w(5, null);
        case "colgroup":
          return w(7, null);
        case "tr":
          return w(6, null);
      }
      return 4 <= a.insertionMode || a.insertionMode === 0 ? w(1, null) : a;
    }
    function pa(a, b) {
      b !== "" && a.push(v(b), "<!-- -->");
    }
    var qa = /* @__PURE__ */ new Map();
    function ra(a, b, c) {
      if (typeof c !== "object")
        throw Error(k(62));
      b = true;
      for (var d in c)
        if (q.call(c, d)) {
          var f = c[d];
          if (f != null && typeof f !== "boolean" && f !== "") {
            if (d.indexOf("--") === 0) {
              var e = v(d);
              f = v(("" + f).trim());
            } else {
              e = d;
              var g = qa.get(e);
              g !== void 0 ? e = g : (g = v(e.replace(la, "-$1").toLowerCase().replace(ma, "-ms-")), qa.set(e, g), e = g);
              f = typeof f === "number" ? f === 0 || q.call(u, d) ? "" + f : f + "px" : v(("" + f).trim());
            }
            b ? (b = false, a.push(' style="', e, ":", f)) : a.push(";", e, ":", f);
          }
        }
      b || a.push('"');
    }
    function y(a, b, c, d) {
      switch (c) {
        case "style":
          ra(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || c[0] !== "o" && c[0] !== "O" || c[1] !== "n" && c[1] !== "N") {
        if (b = t.hasOwnProperty(c) ? t[c] : null, b !== null) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans)
                return;
          }
          c = b.attributeName;
          switch (b.type) {
            case 3:
              d && a.push(" ", c, '=""');
              break;
            case 4:
              d === true ? a.push(" ", c, '=""') : d !== false && a.push(" ", c, '="', v(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c, '="', v(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c, '="', v(d), '"');
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(" ", c, '="', v(d), '"');
          }
        } else if (fa(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), b !== "data-" && b !== "aria-")
                return;
          }
          a.push(" ", c, '="', v(d), '"');
        }
      }
    }
    function A(a, b, c) {
      if (b != null) {
        if (c != null)
          throw Error(k(60));
        if (typeof b !== "object" || !("__html" in b))
          throw Error(k(61));
        b = b.__html;
        b !== null && b !== void 0 && a.push("" + b);
      }
    }
    function sa(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    function ta(a, b, c, d) {
      a.push(B(c));
      var f = c = null, e;
      for (e in b)
        if (q.call(b, e)) {
          var g = b[e];
          if (g != null)
            switch (e) {
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              default:
                y(a, d, e, g);
            }
        }
      a.push(">");
      A(a, f, c);
      return typeof c === "string" ? (a.push(v(c)), null) : c;
    }
    var ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var va = /* @__PURE__ */ new Map();
    function B(a) {
      var b = va.get(a);
      if (b === void 0) {
        if (!ua.test(a))
          throw Error(k(65, a));
        b = "<" + a;
        va.set(a, b);
      }
      return b;
    }
    function wa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(B("select"));
          var e = null, g = null;
          for (n in c)
            if (q.call(c, n)) {
              var h = c[n];
              if (h != null)
                switch (n) {
                  case "children":
                    e = h;
                    break;
                  case "dangerouslySetInnerHTML":
                    g = h;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    y(a, d, n, h);
                }
            }
          a.push(">");
          A(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(B("option"));
          var l = h = null, p = null;
          var n = null;
          for (e in c)
            if (q.call(c, e) && (b = c[e], b != null))
              switch (e) {
                case "children":
                  h = b;
                  break;
                case "selected":
                  p = b;
                  break;
                case "dangerouslySetInnerHTML":
                  n = b;
                  break;
                case "value":
                  l = b;
                default:
                  y(a, d, e, b);
              }
          if (g != null)
            if (c = l !== null ? "" + l : sa(h), na(g))
              for (d = 0; d < g.length; d++) {
                if ("" + g[d] === c) {
                  a.push(' selected=""');
                  break;
                }
              }
            else
              "" + g === c && a.push(' selected=""');
          else
            p && a.push(' selected=""');
          a.push(">");
          A(a, n, h);
          return h;
        case "textarea":
          a.push(B("textarea"));
          n = g = e = null;
          for (h in c)
            if (q.call(c, h) && (l = c[h], l != null))
              switch (h) {
                case "children":
                  n = l;
                  break;
                case "value":
                  e = l;
                  break;
                case "defaultValue":
                  g = l;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k(91));
                default:
                  y(a, d, h, l);
              }
          e === null && g !== null && (e = g);
          a.push(">");
          if (n != null) {
            if (e != null)
              throw Error(k(92));
            if (na(n) && 1 < n.length)
              throw Error(k(93));
            e = "" + n;
          }
          typeof e === "string" && e[0] === "\n" && a.push("\n");
          e !== null && a.push(v("" + e));
          return null;
        case "input":
          a.push(B("input"));
          l = n = h = e = null;
          for (g in c)
            if (q.call(c, g) && (p = c[g], p != null))
              switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, "input"));
                case "defaultChecked":
                  l = p;
                  break;
                case "defaultValue":
                  h = p;
                  break;
                case "checked":
                  n = p;
                  break;
                case "value":
                  e = p;
                  break;
                default:
                  y(a, d, g, p);
              }
          n !== null ? y(a, d, "checked", n) : l !== null && y(a, d, "checked", l);
          e !== null ? y(a, d, "value", e) : h !== null && y(a, d, "value", h);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(B("menuitem"));
          for (var z in c)
            if (q.call(c, z) && (e = c[z], e != null))
              switch (z) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(400));
                default:
                  y(a, d, z, e);
              }
          a.push(">");
          return null;
        case "listing":
        case "pre":
          a.push(B(b));
          g = e = null;
          for (l in c)
            if (q.call(c, l) && (h = c[l], h != null))
              switch (l) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                default:
                  y(a, d, l, h);
              }
          a.push(">");
          if (g != null) {
            if (e != null)
              throw Error(k(60));
            if (typeof g !== "object" || !("__html" in g))
              throw Error(k(61));
            c = g.__html;
            c !== null && c !== void 0 && (typeof c === "string" && 0 < c.length && c[0] === "\n" ? a.push("\n", c) : a.push("" + c));
          }
          typeof e === "string" && e[0] === "\n" && a.push("\n");
          return e;
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
        case "wbr":
          a.push(B(b));
          for (var C in c)
            if (q.call(c, C) && (e = c[C], e != null))
              switch (C) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, b));
                default:
                  y(a, d, C, e);
              }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return ta(a, c, b, d);
        case "html":
          return f.insertionMode === 0 && a.push("<!DOCTYPE html>"), ta(a, c, b, d);
        default:
          if (b.indexOf("-") === -1 && typeof c.is !== "string")
            return ta(a, c, b, d);
          a.push(B(b));
          g = e = null;
          for (p in c)
            if (q.call(c, p) && (h = c[p], h != null))
              switch (p) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                case "style":
                  ra(a, d, h);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  fa(p) && typeof h !== "function" && typeof h !== "symbol" && a.push(" ", p, '="', v(h), '"');
              }
          a.push(">");
          A(a, g, e);
          return e;
      }
    }
    function xa(a, b, c) {
      m(a, '<!--$?--><template id="');
      if (c === null)
        throw Error(k(395));
      m(a, c);
      return m(a, '"></template>');
    }
    function ya(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return m(a, '<div hidden id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        case 2:
          return m(a, '<svg aria-hidden="true" style="display:none" id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        case 3:
          return m(a, '<math aria-hidden="true" style="display:none" id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        case 4:
          return m(a, '<table hidden id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        case 5:
          return m(a, '<table hidden><tbody id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        case 6:
          return m(a, '<table hidden><tr id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        case 7:
          return m(a, '<table hidden><colgroup id="'), m(a, b.segmentPrefix), b = d.toString(16), m(a, b), m(a, '">');
        default:
          throw Error(k(397));
      }
    }
    function za(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return m(a, "</div>");
        case 2:
          return m(a, "</svg>");
        case 3:
          return m(a, "</math>");
        case 4:
          return m(a, "</table>");
        case 5:
          return m(a, "</tbody></table>");
        case 6:
          return m(a, "</tr></table>");
        case 7:
          return m(a, "</colgroup></table>");
        default:
          throw Error(k(397));
      }
    }
    function Aa(a, b) {
      b = b === void 0 ? "" : b;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b + "P:", segmentPrefix: b + "S:", boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    var D = Object.assign;
    var Ba = Symbol.for("react.element");
    var Ca = Symbol.for("react.portal");
    var Da = Symbol.for("react.fragment");
    var Ea = Symbol.for("react.strict_mode");
    var Fa = Symbol.for("react.profiler");
    var Ga = Symbol.for("react.provider");
    var Ha = Symbol.for("react.context");
    var Ia = Symbol.for("react.forward_ref");
    var Ja = Symbol.for("react.suspense");
    var Ka = Symbol.for("react.suspense_list");
    var La = Symbol.for("react.memo");
    var Ma = Symbol.for("react.lazy");
    var Na = Symbol.for("react.scope");
    var Oa = Symbol.for("react.debug_trace_mode");
    var Pa = Symbol.for("react.legacy_hidden");
    var Qa = Symbol.for("react.default_value");
    var Ra = Symbol.iterator;
    function Sa(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case Da:
          return "Fragment";
        case Ca:
          return "Portal";
        case Fa:
          return "Profiler";
        case Ea:
          return "StrictMode";
        case Ja:
          return "Suspense";
        case Ka:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case Ha:
            return (a.displayName || "Context") + ".Consumer";
          case Ga:
            return (a._context.displayName || "Context") + ".Provider";
          case Ia:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case La:
            return b = a.displayName || null, b !== null ? b : Sa(a.type) || "Memo";
          case Ma:
            b = a._payload;
            a = a._init;
            try {
              return Sa(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    var Ta = {};
    function Ua(a, b) {
      a = a.contextTypes;
      if (!a)
        return Ta;
      var c = {}, d;
      for (d in a)
        c[d] = b[d];
      return c;
    }
    var E = null;
    function F(a, b) {
      if (a !== b) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (a === null) {
          if (c !== null)
            throw Error(k(401));
        } else {
          if (c === null)
            throw Error(k(401));
          F(a, c);
        }
        b.context._currentValue2 = b.value;
      }
    }
    function Va(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      a !== null && Va(a);
    }
    function Wa(a) {
      var b = a.parent;
      b !== null && Wa(b);
      a.context._currentValue2 = a.value;
    }
    function Xa(a, b) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (a === null)
        throw Error(k(402));
      a.depth === b.depth ? F(a, b) : Xa(a, b);
    }
    function Ya(a, b) {
      var c = b.parent;
      if (c === null)
        throw Error(k(402));
      a.depth === c.depth ? F(a, c) : Ya(a, c);
      b.context._currentValue2 = b.value;
    }
    function G(a) {
      var b = E;
      b !== a && (b === null ? Wa(a) : a === null ? Va(b) : b.depth === a.depth ? F(b, a) : b.depth > a.depth ? Xa(b, a) : Ya(b, a), E = a);
    }
    var Za = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      a.queue !== null && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function $a(a, b, c, d) {
      var f = a.state !== void 0 ? a.state : null;
      a.updater = Za;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = typeof g === "object" && g !== null ? g._currentValue2 : d;
      g = b.getDerivedStateFromProps;
      typeof g === "function" && (g = g(c, f), f = g === null || g === void 0 ? f : D({}, f, g), a.state = f);
      if (typeof b.getDerivedStateFromProps !== "function" && typeof a.getSnapshotBeforeUpdate !== "function" && (typeof a.UNSAFE_componentWillMount === "function" || typeof a.componentWillMount === "function"))
        if (b = a.state, typeof a.componentWillMount === "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount === "function" && a.UNSAFE_componentWillMount(), b !== a.state && Za.enqueueReplaceState(a, a.state, null), e.queue !== null && 0 < e.queue.length)
          if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && b.length === 1)
            a.state = b[0];
          else {
            e = g ? b[0] : a.state;
            f = true;
            for (g = g ? 1 : 0; g < b.length; g++) {
              var h = b[g];
              h = typeof h === "function" ? h.call(a, e, c, d) : h;
              h != null && (f ? (f = false, e = D({}, e, h)) : D(e, h));
            }
            a.state = e;
          }
        else
          e.queue = null;
    }
    var ab = { id: 1, overflow: "" };
    function bb(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - H(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - H(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - H(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var H = Math.clz32 ? Math.clz32 : cb;
    var db = Math.log;
    var eb = Math.LN2;
    function cb(a) {
      a >>>= 0;
      return a === 0 ? 32 : 31 - (db(a) / eb | 0) | 0;
    }
    function fb(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var gb = typeof Object.is === "function" ? Object.is : fb;
    var I = null;
    var hb = null;
    var J = null;
    var K = null;
    var L = false;
    var M = false;
    var N = 0;
    var O = null;
    var P = 0;
    function Q() {
      if (I === null)
        throw Error(k(321));
      return I;
    }
    function ib() {
      if (0 < P)
        throw Error(k(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function jb() {
      K === null ? J === null ? (L = false, J = K = ib()) : (L = true, K = J) : K.next === null ? (L = false, K = K.next = ib()) : (L = true, K = K.next);
      return K;
    }
    function kb() {
      hb = I = null;
      M = false;
      J = null;
      P = 0;
      K = O = null;
    }
    function lb(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function mb(a, b, c) {
      I = Q();
      K = jb();
      if (L) {
        var d = K.queue;
        b = d.dispatch;
        if (O !== null && (c = O.get(d), c !== void 0)) {
          O.delete(d);
          d = K.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (c !== null);
          K.memoizedState = d;
          return [d, b];
        }
        return [K.memoizedState, b];
      }
      a = a === lb ? typeof b === "function" ? b() : b : c !== void 0 ? c(b) : b;
      K.memoizedState = a;
      a = K.queue = { last: null, dispatch: null };
      a = a.dispatch = nb.bind(null, I, a);
      return [K.memoizedState, a];
    }
    function ob(a, b) {
      I = Q();
      K = jb();
      b = b === void 0 ? null : b;
      if (K !== null) {
        var c = K.memoizedState;
        if (c !== null && b !== null) {
          var d = c[1];
          a:
            if (d === null)
              d = false;
            else {
              for (var f = 0; f < d.length && f < b.length; f++)
                if (!gb(b[f], d[f])) {
                  d = false;
                  break a;
                }
              d = true;
            }
          if (d)
            return c[0];
        }
      }
      a = a();
      K.memoizedState = [a, b];
      return a;
    }
    function nb(a, b, c) {
      if (25 <= P)
        throw Error(k(301));
      if (a === I)
        if (M = true, a = { action: c, next: null }, O === null && (O = /* @__PURE__ */ new Map()), c = O.get(b), c === void 0)
          O.set(b, a);
        else {
          for (b = c; b.next !== null; )
            b = b.next;
          b.next = a;
        }
    }
    function pb() {
      throw Error(k(394));
    }
    function R() {
    }
    var qb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      Q();
      return a._currentValue2;
    }, useMemo: ob, useReducer: mb, useRef: function(a) {
      I = Q();
      K = jb();
      var b = K.memoizedState;
      return b === null ? (a = { current: a }, K.memoizedState = a) : b;
    }, useState: function(a) {
      return mb(lb, a);
    }, useInsertionEffect: R, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return ob(function() {
        return a;
      }, b);
    }, useImperativeHandle: R, useEffect: R, useDebugValue: R, useDeferredValue: function(a) {
      Q();
      return a;
    }, useTransition: function() {
      Q();
      return [
        false,
        pb
      ];
    }, useId: function() {
      var a = hb.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - H(a) - 1)).toString(32) + b;
      var c = S;
      if (c === null)
        throw Error(k(404));
      b = N++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      Q();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (c === void 0)
        throw Error(k(407));
      return c();
    } };
    var S = null;
    var rb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function sb(a) {
      console.error(a);
    }
    function T() {
    }
    function tb(a, b, c, d, f, e, g, h, l) {
      var p = [], n = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: d === void 0 ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: n, pingedTasks: p, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? sb : f, onAllReady: e === void 0 ? T : e, onShellReady: g === void 0 ? T : g, onShellError: h === void 0 ? T : h, onFatalError: l === void 0 ? T : l };
      c = U(b, 0, null, c);
      c.parentFlushed = true;
      a = ub(b, a, null, c, n, Ta, null, ab);
      p.push(a);
      return b;
    }
    function ub(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      c === null ? a.pendingRootTasks++ : c.pendingTasks++;
      var l = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(l);
        b2.length === 1 && vb(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(l);
      return l;
    }
    function U(a, b, c, d) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c };
    }
    function V(a, b) {
      a = a.onError;
      a(b);
    }
    function W(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      a.destination !== null ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
    }
    function wb(a, b, c, d, f) {
      I = {};
      hb = b;
      N = 0;
      for (a = c(d, f); M; )
        M = false, N = 0, P += 1, K = null, a = c(d, f);
      kb();
      return a;
    }
    function xb(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (e !== null && e !== void 0) {
        var g = b.legacyContext;
        if (typeof c.getChildContext !== "function")
          d = g;
        else {
          c = c.getChildContext();
          for (var h in c)
            if (!(h in e))
              throw Error(k(108, Sa(d) || "Unknown", h));
          d = D({}, g, c);
        }
        b.legacyContext = d;
        X(a, b, f);
        b.legacyContext = g;
      } else
        X(a, b, f);
    }
    function yb(a, b) {
      if (a && a.defaultProps) {
        b = D({}, b);
        a = a.defaultProps;
        for (var c in a)
          b[c] === void 0 && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function zb(a, b, c, d, f) {
      if (typeof c === "function")
        if (c.prototype && c.prototype.isReactComponent) {
          f = Ua(c, b.legacyContext);
          var e = c.contextType;
          e = new c(d, typeof e === "object" && e !== null ? e._currentValue2 : f);
          $a(e, c, d, f);
          xb(a, b, e, c);
        } else {
          e = Ua(c, b.legacyContext);
          f = wb(a, b, c, d, e);
          var g = N !== 0;
          if (typeof f === "object" && f !== null && typeof f.render === "function" && f.$$typeof === void 0)
            $a(f, c, d, e), xb(a, b, f, c);
          else if (g) {
            d = b.treeContext;
            b.treeContext = bb(d, 1, 0);
            try {
              X(a, b, f);
            } finally {
              b.treeContext = d;
            }
          } else
            X(a, b, f);
        }
      else if (typeof c === "string")
        switch (f = b.blockedSegment, e = wa(f.chunks, c, d, a.responseState, f.formatContext), g = f.formatContext, f.formatContext = oa(g, c, d), Ab(a, b, e), f.formatContext = g, c) {
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
          case "wbr":
            break;
          default:
            f.chunks.push("</", c, ">");
        }
      else {
        switch (c) {
          case Pa:
          case Oa:
          case Ea:
          case Fa:
          case Da:
            X(a, b, d.children);
            return;
          case Ka:
            X(a, b, d.children);
            return;
          case Na:
            throw Error(k(343));
          case Ja:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g }, l = U(a, f.chunks.length, h, f.formatContext);
              f.children.push(l);
              var p = U(a, 0, null, f.formatContext);
              p.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = p;
              try {
                if (Ab(a, b, d), p.status = 1, Y(h, p), h.pendingTasks === 0)
                  break a;
              } catch (n) {
                p.status = 4, V(a, n), h.forceClientRender = true;
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = ub(a, e, c, l, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if (typeof c === "object" && c !== null)
          switch (c.$$typeof) {
            case Ia:
              d = wb(a, b, c.render, d, f);
              if (N !== 0) {
                c = b.treeContext;
                b.treeContext = bb(c, 1, 0);
                try {
                  X(a, b, d);
                } finally {
                  b.treeContext = c;
                }
              } else
                X(a, b, d);
              return;
            case La:
              c = c.type;
              d = yb(c, d);
              zb(a, b, c, d, f);
              return;
            case Ga:
              f = d.children;
              c = c._context;
              d = d.value;
              e = c._currentValue2;
              c._currentValue2 = d;
              g = E;
              E = d = { parent: g, depth: g === null ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
              b.context = d;
              X(a, b, f);
              a = E;
              if (a === null)
                throw Error(k(403));
              d = a.parentValue;
              a.context._currentValue2 = d === Qa ? a.context._defaultValue : d;
              a = E = a.parent;
              b.context = a;
              return;
            case Ha:
              d = d.children;
              d = d(c._currentValue2);
              X(a, b, d);
              return;
            case Ma:
              f = c._init;
              c = f(c._payload);
              d = yb(c, d);
              zb(a, b, c, d, void 0);
              return;
          }
        throw Error(k(130, c == null ? c : typeof c, ""));
      }
    }
    function X(a, b, c) {
      b.node = c;
      if (typeof c === "object" && c !== null) {
        switch (c.$$typeof) {
          case Ba:
            zb(a, b, c.type, c.props, c.ref);
            return;
          case Ca:
            throw Error(k(257));
          case Ma:
            var d = c._init;
            c = d(c._payload);
            X(a, b, c);
            return;
        }
        if (na(c)) {
          Bb(a, b, c);
          return;
        }
        c === null || typeof c !== "object" ? d = null : (d = Ra && c[Ra] || c["@@iterator"], d = typeof d === "function" ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Bb(a, b, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c);
        throw Error(k(31, a === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : a));
      }
      typeof c === "string" ? (b = b.blockedSegment.chunks, a.responseState.generateStaticMarkup ? b.push(v(c)) : pa(b, c)) : typeof c === "number" && (b = b.blockedSegment.chunks, c = "" + c, a.responseState.generateStaticMarkup ? b.push(v(c)) : pa(b, c));
    }
    function Bb(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = bb(e, d, f);
        try {
          Ab(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Ab(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return X(a, b, c);
      } catch (l) {
        if (kb(), typeof l === "object" && l !== null && typeof l.then === "function") {
          c = l;
          var g = b.blockedSegment, h = U(a, g.chunks.length, null, g.formatContext);
          g.children.push(h);
          a = ub(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          G(e);
        } else
          throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, G(e), l;
      }
    }
    function Cb(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Db(this, b, a);
    }
    function Eb(a) {
      var b = a.blockedBoundary;
      a.blockedSegment.status = 3;
      b === null ? (this.allPendingTasks--, this.status !== 2 && (this.status = 2, this.destination !== null && this.destination.push(null))) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = true, b.parentFlushed && this.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(Eb, this), b.fallbackAbortableTasks.clear(), this.allPendingTasks--, this.allPendingTasks === 0 && (a = this.onAllReady, a()));
    }
    function Y(a, b) {
      if (b.chunks.length === 0 && b.children.length === 1 && b.children[0].boundary === null) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        c.status === 1 && Y(a, c);
      } else
        a.completedSegments.push(b);
    }
    function Db(a, b, c) {
      if (b === null) {
        if (c.parentFlushed) {
          if (a.completedRootSegment !== null)
            throw Error(k(389));
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        a.pendingRootTasks === 0 && (a.onShellError = T, b = a.onShellReady, b());
      } else
        b.pendingTasks--, b.forceClientRender || (b.pendingTasks === 0 ? (c.parentFlushed && c.status === 1 && Y(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Cb, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && c.status === 1 && (Y(b, c), b.completedSegments.length === 1 && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      a.allPendingTasks === 0 && (a = a.onAllReady, a());
    }
    function vb(a) {
      if (a.status !== 2) {
        var b = E, c = rb.current;
        rb.current = qb;
        var d = S;
        S = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, l = g.blockedSegment;
            if (l.status === 0) {
              G(g.context);
              try {
                X(h, g, g.node), g.abortSet.delete(g), l.status = 1, Db(h, g.blockedBoundary, l);
              } catch (x) {
                if (kb(), typeof x === "object" && x !== null && typeof x.then === "function") {
                  var p = g.ping;
                  x.then(p, p);
                } else {
                  g.abortSet.delete(g);
                  l.status = 4;
                  var n = g.blockedBoundary, z = x;
                  V(h, z);
                  n === null ? W(h, z) : (n.pendingTasks--, n.forceClientRender || (n.forceClientRender = true, n.parentFlushed && h.clientRenderedBoundaries.push(n)));
                  h.allPendingTasks--;
                  if (h.allPendingTasks === 0) {
                    var C = h.onAllReady;
                    C();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          a.destination !== null && Fb(a, a.destination);
        } catch (x) {
          V(a, x), W(a, x);
        } finally {
          S = d, rb.current = c, c === qb && G(b);
        }
      }
    }
    function Z(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          a = a.responseState;
          m(b, '<template id="');
          m(b, a.placeholderPrefix);
          a = d.toString(16);
          m(b, a);
          return m(b, '"></template>');
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++)
              m(b, d[e]);
            f = Gb(a, b, f);
          }
          for (; e < d.length - 1; e++)
            m(b, d[e]);
          e < d.length && (f = m(b, d[e]));
          return f;
        default:
          throw Error(k(390));
      }
    }
    function Gb(a, b, c) {
      var d = c.boundary;
      if (d === null)
        return Z(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender)
        return a.responseState.generateStaticMarkup || m(b, "<!--$!-->"), Z(a, b, c), a = a.responseState.generateStaticMarkup ? true : m(b, "<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = f.boundaryPrefix + e.toString(16);
        d = d.id = f;
        xa(b, a.responseState, d);
        Z(a, b, c);
        return m(b, "<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize)
        return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), xa(b, a.responseState, d.id), Z(a, b, c), m(b, "<!--/$-->");
      a.responseState.generateStaticMarkup || m(b, "<!--$-->");
      c = d.completedSegments;
      if (c.length !== 1)
        throw Error(k(391));
      Gb(a, b, c[0]);
      a = a.responseState.generateStaticMarkup ? true : m(b, "<!--/$-->");
      return a;
    }
    function Hb(a, b, c) {
      ya(b, a.responseState, c.formatContext, c.id);
      Gb(a, b, c);
      return za(b, c.formatContext);
    }
    function Ib(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++)
        Jb(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      m(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? m(b, '$RC("') : (a.sentCompleteBoundaryFunction = true, m(b, 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (d === null)
        throw Error(k(395));
      c = c.toString(16);
      m(b, d);
      m(b, '","');
      m(b, a.segmentPrefix);
      m(b, c);
      return m(b, '")<\/script>');
    }
    function Jb(a, b, c, d) {
      if (d.status === 2)
        return true;
      var f = d.id;
      if (f === -1) {
        if ((d.id = c.rootSegmentID) === -1)
          throw Error(k(392));
        return Hb(a, b, d);
      }
      Hb(a, b, d);
      a = a.responseState;
      m(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? m(b, '$RS("') : (a.sentCompleteSegmentFunction = true, m(b, 'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      m(b, a.segmentPrefix);
      f = f.toString(16);
      m(b, f);
      m(b, '","');
      m(b, a.placeholderPrefix);
      m(b, f);
      return m(b, '")<\/script>');
    }
    function Fb(a, b) {
      try {
        var c = a.completedRootSegment;
        if (c !== null && a.pendingRootTasks === 0) {
          Gb(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++)
            m(b, d[c]);
          c < d.length && m(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          d = b;
          var g = a.responseState, h = f[e].id;
          m(d, g.startInlineScript);
          g.sentClientRenderFunction ? m(d, '$RX("') : (g.sentClientRenderFunction = true, m(d, 'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("'));
          if (h === null)
            throw Error(k(395));
          m(d, h);
          if (!m(d, '")<\/script>')) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var l = a.completedBoundaries;
        for (e = 0; e < l.length; e++)
          if (!Ib(a, b, l[e])) {
            a.destination = null;
            e++;
            l.splice(0, e);
            return;
          }
        l.splice(0, e);
        var p = a.partialBoundaries;
        for (e = 0; e < p.length; e++) {
          var n = p[e];
          a: {
            f = a;
            g = b;
            var z = n.completedSegments;
            for (h = 0; h < z.length; h++)
              if (!Jb(f, g, n, z[h])) {
                h++;
                z.splice(0, h);
                var C = false;
                break a;
              }
            z.splice(0, h);
            C = true;
          }
          if (!C) {
            a.destination = null;
            e++;
            p.splice(0, e);
            return;
          }
        }
        p.splice(0, e);
        var x = a.completedBoundaries;
        for (e = 0; e < x.length; e++)
          if (!Ib(a, b, x[e])) {
            a.destination = null;
            e++;
            x.splice(0, e);
            return;
          }
        x.splice(0, e);
      } finally {
        a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && b.push(null);
      }
    }
    function Kb(a) {
      try {
        var b = a.abortableTasks;
        b.forEach(Eb, a);
        b.clear();
        a.destination !== null && Fb(a, a.destination);
      } catch (c) {
        V(a, c), W(a, c);
      }
    }
    function Lb() {
    }
    function Mb(a, b, c) {
      var d = false, f = null, e = "", g = { push: function(a2) {
        a2 !== null && (e += a2);
        return true;
      }, destroy: function(a2) {
        d = true;
        f = a2;
      } }, h = false;
      a = tb(a, Aa(c, b ? b.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, Infinity, Lb, void 0, function() {
        h = true;
      }, void 0, void 0);
      vb(a);
      Kb(a);
      if (a.status === 1)
        a.status = 2, g.destroy(a.fatalError);
      else if (a.status !== 2 && a.destination === null) {
        a.destination = g;
        try {
          Fb(a, g);
        } catch (l) {
          V(a, l), W(a, l);
        }
      }
      if (d)
        throw f;
      if (!h)
        throw Error(k(426));
      return e;
    }
    exports.renderToNodeStream = function() {
      throw Error(k(207));
    };
    exports.renderToStaticMarkup = function(a, b) {
      return Mb(a, b, true);
    };
    exports.renderToStaticNodeStream = function() {
      throw Error(k(208));
    };
    exports.renderToString = function(a, b) {
      return Mb(a, b, false);
    };
    exports.version = "18.1.0";
  }
});

// node_modules/react-dom/cjs/react-dom-server.browser.production.min.js
var require_react_dom_server_browser_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports) {
    "use strict";
    init_react();
    var aa = require_react();
    function k(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var l = null;
    var n = 0;
    function p(a, b) {
      if (b.length !== 0)
        if (512 < b.length)
          0 < n && (a.enqueue(new Uint8Array(l.buffer, 0, n)), l = new Uint8Array(512), n = 0), a.enqueue(b);
        else {
          var c = l.length - n;
          c < b.length && (c === 0 ? a.enqueue(l) : (l.set(b.subarray(0, c), n), a.enqueue(l), b = b.subarray(c)), l = new Uint8Array(512), n = 0);
          l.set(b, n);
          n += b.length;
        }
    }
    function t(a, b) {
      p(a, b);
      return true;
    }
    function ba(a) {
      l && 0 < n && (a.enqueue(new Uint8Array(l.buffer, 0, n)), l = null, n = 0);
    }
    var ca = new TextEncoder();
    function u(a) {
      return ca.encode(a);
    }
    function v(a) {
      return ca.encode(a);
    }
    function da(a, b) {
      typeof a.error === "function" ? a.error(b) : a.close();
    }
    var w = Object.prototype.hasOwnProperty;
    var ea = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var fa = {};
    var ha = {};
    function ia(a) {
      if (w.call(ha, a))
        return true;
      if (w.call(fa, a))
        return false;
      if (ea.test(a))
        return ha[a] = true;
      fa[a] = true;
      return false;
    }
    function x(a, b, c, d, f, e, g) {
      this.acceptsBooleans = b === 2 || b === 3 || b === 4;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = e;
      this.removeEmptyString = g;
    }
    var y = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      y[a] = new x(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      y[b] = new x(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      y[a] = new x(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      y[a] = new x(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      y[a] = new x(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      y[a] = new x(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      y[a] = new x(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      y[a] = new x(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      y[a] = new x(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ja = /[\-:]([a-z])/g;
    function ka(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(ja, ka);
      y[b] = new x(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ja, ka);
      y[b] = new x(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ja, ka);
      y[b] = new x(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      y[a] = new x(a, 1, false, a.toLowerCase(), null, false, false);
    });
    y.xlinkHref = new x("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      y[a] = new x(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var z = {
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
    var la = ["Webkit", "ms", "Moz", "O"];
    Object.keys(z).forEach(function(a) {
      la.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        z[b] = z[a];
      });
    });
    var ma = /["'&<>]/;
    function A(a) {
      if (typeof a === "boolean" || typeof a === "number")
        return "" + a;
      a = "" + a;
      var b = ma.exec(a);
      if (b) {
        var c = "", d, f = 0;
        for (d = b.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b = "&quot;";
              break;
            case 38:
              b = "&amp;";
              break;
            case 39:
              b = "&#x27;";
              break;
            case 60:
              b = "&lt;";
              break;
            case 62:
              b = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c += a.substring(f, d));
          f = d + 1;
          c += b;
        }
        a = f !== d ? c + a.substring(f, d) : c;
      }
      return a;
    }
    var na = /([A-Z])/g;
    var oa = /^ms-/;
    var pa = Array.isArray;
    var qa = v("<script>");
    var ra = v("<\/script>");
    var sa = v('<script src="');
    var ta = v('<script type="module" src="');
    var ua = v('" async=""><\/script>');
    var va = /(<\/|<)(s)(cript)/gi;
    function wa(a, b, c, d) {
      return "" + b + (c === "s" ? "\\u0073" : "\\u0053") + d;
    }
    function xa(a, b, c, d, f) {
      a = a === void 0 ? "" : a;
      b = b === void 0 ? qa : v('<script nonce="' + A(b) + '">');
      var e = [];
      c !== void 0 && e.push(b, u(("" + c).replace(va, wa)), ra);
      if (d !== void 0)
        for (c = 0; c < d.length; c++)
          e.push(sa, u(A(d[c])), ua);
      if (f !== void 0)
        for (d = 0; d < f.length; d++)
          e.push(ta, u(A(f[d])), ua);
      return { bootstrapChunks: e, startInlineScript: b, placeholderPrefix: v(a + "P:"), segmentPrefix: v(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false };
    }
    function B(a, b) {
      return { insertionMode: a, selectedValue: b };
    }
    function ya(a) {
      return B(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
    }
    function za(a, b, c) {
      switch (b) {
        case "select":
          return B(1, c.value != null ? c.value : c.defaultValue);
        case "svg":
          return B(2, null);
        case "math":
          return B(3, null);
        case "foreignObject":
          return B(1, null);
        case "table":
          return B(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return B(5, null);
        case "colgroup":
          return B(7, null);
        case "tr":
          return B(6, null);
      }
      return 4 <= a.insertionMode || a.insertionMode === 0 ? B(1, null) : a;
    }
    var Aa = v("<!-- -->");
    var Ba = /* @__PURE__ */ new Map();
    var Ca = v(' style="');
    var Da = v(":");
    var Ea = v(";");
    function Fa(a, b, c) {
      if (typeof c !== "object")
        throw Error(k(62));
      b = true;
      for (var d in c)
        if (w.call(c, d)) {
          var f = c[d];
          if (f != null && typeof f !== "boolean" && f !== "") {
            if (d.indexOf("--") === 0) {
              var e = u(A(d));
              f = u(A(("" + f).trim()));
            } else {
              e = d;
              var g = Ba.get(e);
              g !== void 0 ? e = g : (g = v(A(e.replace(na, "-$1").toLowerCase().replace(oa, "-ms-"))), Ba.set(e, g), e = g);
              f = typeof f === "number" ? f === 0 || w.call(z, d) ? u("" + f) : u(f + "px") : u(A(("" + f).trim()));
            }
            b ? (b = false, a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
          }
        }
      b || a.push(D);
    }
    var G = v(" ");
    var H = v('="');
    var D = v('"');
    var Ga = v('=""');
    function I(a, b, c, d) {
      switch (c) {
        case "style":
          Fa(a, b, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c.length) || c[0] !== "o" && c[0] !== "O" || c[1] !== "n" && c[1] !== "N") {
        if (b = y.hasOwnProperty(c) ? y[c] : null, b !== null) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b.acceptsBooleans)
                return;
          }
          c = u(b.attributeName);
          switch (b.type) {
            case 3:
              d && a.push(G, c, Ga);
              break;
            case 4:
              d === true ? a.push(G, c, Ga) : d !== false && a.push(G, c, H, u(A(d)), D);
              break;
            case 5:
              isNaN(d) || a.push(G, c, H, u(A(d)), D);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(G, c, H, u(A(d)), D);
              break;
            default:
              b.sanitizeURL && (d = "" + d), a.push(G, c, H, u(A(d)), D);
          }
        } else if (ia(c)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b = c.toLowerCase().slice(0, 5), b !== "data-" && b !== "aria-")
                return;
          }
          a.push(G, u(c), H, u(A(d)), D);
        }
      }
    }
    var J = v(">");
    var Ha = v("/>");
    function K(a, b, c) {
      if (b != null) {
        if (c != null)
          throw Error(k(60));
        if (typeof b !== "object" || !("__html" in b))
          throw Error(k(61));
        b = b.__html;
        b !== null && b !== void 0 && a.push(u("" + b));
      }
    }
    function Ia(a) {
      var b = "";
      aa.Children.forEach(a, function(a2) {
        a2 != null && (b += a2);
      });
      return b;
    }
    var Ja = v(' selected=""');
    function Ka(a, b, c, d) {
      a.push(L(c));
      var f = c = null, e;
      for (e in b)
        if (w.call(b, e)) {
          var g = b[e];
          if (g != null)
            switch (e) {
              case "children":
                c = g;
                break;
              case "dangerouslySetInnerHTML":
                f = g;
                break;
              default:
                I(a, d, e, g);
            }
        }
      a.push(J);
      K(a, f, c);
      return typeof c === "string" ? (a.push(u(A(c))), null) : c;
    }
    var La = v("\n");
    var Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na = /* @__PURE__ */ new Map();
    function L(a) {
      var b = Na.get(a);
      if (b === void 0) {
        if (!Ma.test(a))
          throw Error(k(65, a));
        b = v("<" + a);
        Na.set(a, b);
      }
      return b;
    }
    var Oa = v("<!DOCTYPE html>");
    function Pa(a, b, c, d, f) {
      switch (b) {
        case "select":
          a.push(L("select"));
          var e = null, g = null;
          for (r in c)
            if (w.call(c, r)) {
              var h = c[r];
              if (h != null)
                switch (r) {
                  case "children":
                    e = h;
                    break;
                  case "dangerouslySetInnerHTML":
                    g = h;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    I(a, d, r, h);
                }
            }
          a.push(J);
          K(a, g, e);
          return e;
        case "option":
          g = f.selectedValue;
          a.push(L("option"));
          var m = h = null, q = null;
          var r = null;
          for (e in c)
            if (w.call(c, e) && (b = c[e], b != null))
              switch (e) {
                case "children":
                  h = b;
                  break;
                case "selected":
                  q = b;
                  break;
                case "dangerouslySetInnerHTML":
                  r = b;
                  break;
                case "value":
                  m = b;
                default:
                  I(a, d, e, b);
              }
          if (g != null)
            if (c = m !== null ? "" + m : Ia(h), pa(g))
              for (d = 0; d < g.length; d++) {
                if ("" + g[d] === c) {
                  a.push(Ja);
                  break;
                }
              }
            else
              "" + g === c && a.push(Ja);
          else
            q && a.push(Ja);
          a.push(J);
          K(a, r, h);
          return h;
        case "textarea":
          a.push(L("textarea"));
          r = g = e = null;
          for (h in c)
            if (w.call(c, h) && (m = c[h], m != null))
              switch (h) {
                case "children":
                  r = m;
                  break;
                case "value":
                  e = m;
                  break;
                case "defaultValue":
                  g = m;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(k(91));
                default:
                  I(a, d, h, m);
              }
          e === null && g !== null && (e = g);
          a.push(J);
          if (r != null) {
            if (e != null)
              throw Error(k(92));
            if (pa(r) && 1 < r.length)
              throw Error(k(93));
            e = "" + r;
          }
          typeof e === "string" && e[0] === "\n" && a.push(La);
          e !== null && a.push(u(A("" + e)));
          return null;
        case "input":
          a.push(L("input"));
          m = r = h = e = null;
          for (g in c)
            if (w.call(c, g) && (q = c[g], q != null))
              switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, "input"));
                case "defaultChecked":
                  m = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "checked":
                  r = q;
                  break;
                case "value":
                  e = q;
                  break;
                default:
                  I(a, d, g, q);
              }
          r !== null ? I(a, d, "checked", r) : m !== null && I(a, d, "checked", m);
          e !== null ? I(a, d, "value", e) : h !== null && I(a, d, "value", h);
          a.push(Ha);
          return null;
        case "menuitem":
          a.push(L("menuitem"));
          for (var E in c)
            if (w.call(c, E) && (e = c[E], e != null))
              switch (E) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(400));
                default:
                  I(a, d, E, e);
              }
          a.push(J);
          return null;
        case "listing":
        case "pre":
          a.push(L(b));
          g = e = null;
          for (m in c)
            if (w.call(c, m) && (h = c[m], h != null))
              switch (m) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                default:
                  I(a, d, m, h);
              }
          a.push(J);
          if (g != null) {
            if (e != null)
              throw Error(k(60));
            if (typeof g !== "object" || !("__html" in g))
              throw Error(k(61));
            c = g.__html;
            c !== null && c !== void 0 && (typeof c === "string" && 0 < c.length && c[0] === "\n" ? a.push(La, u(c)) : a.push(u("" + c)));
          }
          typeof e === "string" && e[0] === "\n" && a.push(La);
          return e;
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
        case "wbr":
          a.push(L(b));
          for (var F in c)
            if (w.call(c, F) && (e = c[F], e != null))
              switch (F) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(k(399, b));
                default:
                  I(a, d, F, e);
              }
          a.push(Ha);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka(a, c, b, d);
        case "html":
          return f.insertionMode === 0 && a.push(Oa), Ka(a, c, b, d);
        default:
          if (b.indexOf("-") === -1 && typeof c.is !== "string")
            return Ka(a, c, b, d);
          a.push(L(b));
          g = e = null;
          for (q in c)
            if (w.call(c, q) && (h = c[q], h != null))
              switch (q) {
                case "children":
                  e = h;
                  break;
                case "dangerouslySetInnerHTML":
                  g = h;
                  break;
                case "style":
                  Fa(a, d, h);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                  break;
                default:
                  ia(q) && typeof h !== "function" && typeof h !== "symbol" && a.push(G, u(q), H, u(A(h)), D);
              }
          a.push(J);
          K(a, g, e);
          return e;
      }
    }
    var Qa = v("</");
    var Ra = v(">");
    var Sa = v('<template id="');
    var Ta = v('"></template>');
    var Ua = v("<!--$-->");
    var Va = v('<!--$?--><template id="');
    var Wa = v('"></template>');
    var Xa = v("<!--$!-->");
    var Ya = v("<!--/$-->");
    function Za(a, b, c) {
      p(a, Va);
      if (c === null)
        throw Error(k(395));
      p(a, c);
      return t(a, Wa);
    }
    var $a = v('<div hidden id="');
    var ab = v('">');
    var bb = v("</div>");
    var cb = v('<svg aria-hidden="true" style="display:none" id="');
    var db = v('">');
    var eb = v("</svg>");
    var fb = v('<math aria-hidden="true" style="display:none" id="');
    var gb = v('">');
    var hb = v("</math>");
    var ib = v('<table hidden id="');
    var jb = v('">');
    var kb = v("</table>");
    var lb = v('<table hidden><tbody id="');
    var mb = v('">');
    var nb = v("</tbody></table>");
    var ob = v('<table hidden><tr id="');
    var pb = v('">');
    var qb = v("</tr></table>");
    var rb = v('<table hidden><colgroup id="');
    var sb = v('">');
    var tb = v("</colgroup></table>");
    function ub(a, b, c, d) {
      switch (c.insertionMode) {
        case 0:
        case 1:
          return p(a, $a), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, ab);
        case 2:
          return p(a, cb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, db);
        case 3:
          return p(a, fb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, gb);
        case 4:
          return p(a, ib), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, jb);
        case 5:
          return p(a, lb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, mb);
        case 6:
          return p(a, ob), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, pb);
        case 7:
          return p(a, rb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, sb);
        default:
          throw Error(k(397));
      }
    }
    function vb(a, b) {
      switch (b.insertionMode) {
        case 0:
        case 1:
          return t(a, bb);
        case 2:
          return t(a, eb);
        case 3:
          return t(a, hb);
        case 4:
          return t(a, kb);
        case 5:
          return t(a, nb);
        case 6:
          return t(a, qb);
        case 7:
          return t(a, tb);
        default:
          throw Error(k(397));
      }
    }
    var wb = v('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var xb = v('$RS("');
    var yb = v('","');
    var zb = v('")<\/script>');
    var Ab = v('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Bb = v('$RC("');
    var Cb = v('","');
    var Db = v('")<\/script>');
    var Eb = v('function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("');
    var Fb = v('$RX("');
    var Gb = v('")<\/script>');
    var M = Object.assign;
    var Hb = Symbol.for("react.element");
    var Ib = Symbol.for("react.portal");
    var Jb = Symbol.for("react.fragment");
    var Kb = Symbol.for("react.strict_mode");
    var Lb = Symbol.for("react.profiler");
    var Mb = Symbol.for("react.provider");
    var Nb = Symbol.for("react.context");
    var Ob = Symbol.for("react.forward_ref");
    var Pb = Symbol.for("react.suspense");
    var Qb = Symbol.for("react.suspense_list");
    var Rb = Symbol.for("react.memo");
    var Sb = Symbol.for("react.lazy");
    var Tb = Symbol.for("react.scope");
    var Ub = Symbol.for("react.debug_trace_mode");
    var Vb = Symbol.for("react.legacy_hidden");
    var Wb = Symbol.for("react.default_value");
    var Xb = Symbol.iterator;
    function Yb(a) {
      if (a == null)
        return null;
      if (typeof a === "function")
        return a.displayName || a.name || null;
      if (typeof a === "string")
        return a;
      switch (a) {
        case Jb:
          return "Fragment";
        case Ib:
          return "Portal";
        case Lb:
          return "Profiler";
        case Kb:
          return "StrictMode";
        case Pb:
          return "Suspense";
        case Qb:
          return "SuspenseList";
      }
      if (typeof a === "object")
        switch (a.$$typeof) {
          case Nb:
            return (a.displayName || "Context") + ".Consumer";
          case Mb:
            return (a._context.displayName || "Context") + ".Provider";
          case Ob:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Rb:
            return b = a.displayName || null, b !== null ? b : Yb(a.type) || "Memo";
          case Sb:
            b = a._payload;
            a = a._init;
            try {
              return Yb(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    var Zb = {};
    function $b(a, b) {
      a = a.contextTypes;
      if (!a)
        return Zb;
      var c = {}, d;
      for (d in a)
        c[d] = b[d];
      return c;
    }
    var N = null;
    function O(a, b) {
      if (a !== b) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c = b.parent;
        if (a === null) {
          if (c !== null)
            throw Error(k(401));
        } else {
          if (c === null)
            throw Error(k(401));
          O(a, c);
        }
        b.context._currentValue = b.value;
      }
    }
    function ac(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      a !== null && ac(a);
    }
    function bc(a) {
      var b = a.parent;
      b !== null && bc(b);
      a.context._currentValue = a.value;
    }
    function cc(a, b) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (a === null)
        throw Error(k(402));
      a.depth === b.depth ? O(a, b) : cc(a, b);
    }
    function dc(a, b) {
      var c = b.parent;
      if (c === null)
        throw Error(k(402));
      a.depth === c.depth ? O(a, c) : dc(a, c);
      b.context._currentValue = b.value;
    }
    function P(a) {
      var b = N;
      b !== a && (b === null ? bc(a) : a === null ? ac(b) : b.depth === a.depth ? O(b, a) : b.depth > a.depth ? cc(b, a) : dc(b, a), N = a);
    }
    var ec = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b) {
      a = a._reactInternals;
      a.queue !== null && a.queue.push(b);
    }, enqueueReplaceState: function(a, b) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b];
    }, enqueueForceUpdate: function() {
    } };
    function fc(a, b, c, d) {
      var f = a.state !== void 0 ? a.state : null;
      a.updater = ec;
      a.props = c;
      a.state = f;
      var e = { queue: [], replace: false };
      a._reactInternals = e;
      var g = b.contextType;
      a.context = typeof g === "object" && g !== null ? g._currentValue : d;
      g = b.getDerivedStateFromProps;
      typeof g === "function" && (g = g(c, f), f = g === null || g === void 0 ? f : M({}, f, g), a.state = f);
      if (typeof b.getDerivedStateFromProps !== "function" && typeof a.getSnapshotBeforeUpdate !== "function" && (typeof a.UNSAFE_componentWillMount === "function" || typeof a.componentWillMount === "function"))
        if (b = a.state, typeof a.componentWillMount === "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount === "function" && a.UNSAFE_componentWillMount(), b !== a.state && ec.enqueueReplaceState(a, a.state, null), e.queue !== null && 0 < e.queue.length)
          if (b = e.queue, g = e.replace, e.queue = null, e.replace = false, g && b.length === 1)
            a.state = b[0];
          else {
            e = g ? b[0] : a.state;
            f = true;
            for (g = g ? 1 : 0; g < b.length; g++) {
              var h = b[g];
              h = typeof h === "function" ? h.call(a, e, c, d) : h;
              h != null && (f ? (f = false, e = M({}, e, h)) : M(e, h));
            }
            a.state = e;
          }
        else
          e.queue = null;
    }
    var gc = { id: 1, overflow: "" };
    function hc(a, b, c) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - Q(d) - 1;
      d &= ~(1 << f);
      c += 1;
      var e = 32 - Q(b) + f;
      if (30 < e) {
        var g = f - f % 5;
        e = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - Q(b) + f | c << f | d, overflow: e + a };
      }
      return { id: 1 << e | c << f | d, overflow: a };
    }
    var Q = Math.clz32 ? Math.clz32 : ic;
    var jc = Math.log;
    var kc = Math.LN2;
    function ic(a) {
      a >>>= 0;
      return a === 0 ? 32 : 31 - (jc(a) / kc | 0) | 0;
    }
    function lc(a, b) {
      return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var mc = typeof Object.is === "function" ? Object.is : lc;
    var R = null;
    var nc = null;
    var oc = null;
    var S = null;
    var T = false;
    var pc = false;
    var U = 0;
    var V = null;
    var qc = 0;
    function W() {
      if (R === null)
        throw Error(k(321));
      return R;
    }
    function rc() {
      if (0 < qc)
        throw Error(k(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function sc() {
      S === null ? oc === null ? (T = false, oc = S = rc()) : (T = true, S = oc) : S.next === null ? (T = false, S = S.next = rc()) : (T = true, S = S.next);
      return S;
    }
    function tc() {
      nc = R = null;
      pc = false;
      oc = null;
      qc = 0;
      S = V = null;
    }
    function uc(a, b) {
      return typeof b === "function" ? b(a) : b;
    }
    function vc(a, b, c) {
      R = W();
      S = sc();
      if (T) {
        var d = S.queue;
        b = d.dispatch;
        if (V !== null && (c = V.get(d), c !== void 0)) {
          V.delete(d);
          d = S.memoizedState;
          do
            d = a(d, c.action), c = c.next;
          while (c !== null);
          S.memoizedState = d;
          return [d, b];
        }
        return [S.memoizedState, b];
      }
      a = a === uc ? typeof b === "function" ? b() : b : c !== void 0 ? c(b) : b;
      S.memoizedState = a;
      a = S.queue = { last: null, dispatch: null };
      a = a.dispatch = wc.bind(null, R, a);
      return [S.memoizedState, a];
    }
    function xc(a, b) {
      R = W();
      S = sc();
      b = b === void 0 ? null : b;
      if (S !== null) {
        var c = S.memoizedState;
        if (c !== null && b !== null) {
          var d = c[1];
          a:
            if (d === null)
              d = false;
            else {
              for (var f = 0; f < d.length && f < b.length; f++)
                if (!mc(b[f], d[f])) {
                  d = false;
                  break a;
                }
              d = true;
            }
          if (d)
            return c[0];
        }
      }
      a = a();
      S.memoizedState = [a, b];
      return a;
    }
    function wc(a, b, c) {
      if (25 <= qc)
        throw Error(k(301));
      if (a === R)
        if (pc = true, a = { action: c, next: null }, V === null && (V = /* @__PURE__ */ new Map()), c = V.get(b), c === void 0)
          V.set(b, a);
        else {
          for (b = c; b.next !== null; )
            b = b.next;
          b.next = a;
        }
    }
    function yc() {
      throw Error(k(394));
    }
    function zc() {
    }
    var Bc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W();
      return a._currentValue;
    }, useMemo: xc, useReducer: vc, useRef: function(a) {
      R = W();
      S = sc();
      var b = S.memoizedState;
      return b === null ? (a = { current: a }, S.memoizedState = a) : b;
    }, useState: function(a) {
      return vc(uc, a);
    }, useInsertionEffect: zc, useLayoutEffect: function() {
    }, useCallback: function(a, b) {
      return xc(function() {
        return a;
      }, b);
    }, useImperativeHandle: zc, useEffect: zc, useDebugValue: zc, useDeferredValue: function(a) {
      W();
      return a;
    }, useTransition: function() {
      W();
      return [false, yc];
    }, useId: function() {
      var a = nc.treeContext;
      var b = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - Q(a) - 1)).toString(32) + b;
      var c = Ac;
      if (c === null)
        throw Error(k(404));
      b = U++;
      a = ":" + c.idPrefix + "R" + a;
      0 < b && (a += "H" + b.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b) {
      W();
      return b(a._source);
    }, useSyncExternalStore: function(a, b, c) {
      if (c === void 0)
        throw Error(k(407));
      return c();
    } };
    var Ac = null;
    var Cc = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Dc(a) {
      console.error(a);
    }
    function X() {
    }
    function Ec(a, b, c, d, f, e, g, h, m) {
      var q = [], r = /* @__PURE__ */ new Set();
      b = { destination: null, responseState: b, progressiveChunkSize: d === void 0 ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: r, pingedTasks: q, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: f === void 0 ? Dc : f, onAllReady: e === void 0 ? X : e, onShellReady: g === void 0 ? X : g, onShellError: h === void 0 ? X : h, onFatalError: m === void 0 ? X : m };
      c = Fc(b, 0, null, c);
      c.parentFlushed = true;
      a = Gc(b, a, null, c, r, Zb, null, gc);
      q.push(a);
      return b;
    }
    function Gc(a, b, c, d, f, e, g, h) {
      a.allPendingTasks++;
      c === null ? a.pendingRootTasks++ : c.pendingTasks++;
      var m = { node: b, ping: function() {
        var b2 = a.pingedTasks;
        b2.push(m);
        b2.length === 1 && Hc(a);
      }, blockedBoundary: c, blockedSegment: d, abortSet: f, legacyContext: e, context: g, treeContext: h };
      f.add(m);
      return m;
    }
    function Fc(a, b, c, d) {
      return { status: 0, id: -1, index: b, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c };
    }
    function Y(a, b) {
      a = a.onError;
      a(b);
    }
    function Ic(a, b) {
      var c = a.onShellError;
      c(b);
      c = a.onFatalError;
      c(b);
      a.destination !== null ? (a.status = 2, da(a.destination, b)) : (a.status = 1, a.fatalError = b);
    }
    function Jc(a, b, c, d, f) {
      R = {};
      nc = b;
      U = 0;
      for (a = c(d, f); pc; )
        pc = false, U = 0, qc += 1, S = null, a = c(d, f);
      tc();
      return a;
    }
    function Kc(a, b, c, d) {
      var f = c.render(), e = d.childContextTypes;
      if (e !== null && e !== void 0) {
        var g = b.legacyContext;
        if (typeof c.getChildContext !== "function")
          d = g;
        else {
          c = c.getChildContext();
          for (var h in c)
            if (!(h in e))
              throw Error(k(108, Yb(d) || "Unknown", h));
          d = M({}, g, c);
        }
        b.legacyContext = d;
        Z(a, b, f);
        b.legacyContext = g;
      } else
        Z(a, b, f);
    }
    function Lc(a, b) {
      if (a && a.defaultProps) {
        b = M({}, b);
        a = a.defaultProps;
        for (var c in a)
          b[c] === void 0 && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Mc(a, b, c, d, f) {
      if (typeof c === "function")
        if (c.prototype && c.prototype.isReactComponent) {
          f = $b(c, b.legacyContext);
          var e = c.contextType;
          e = new c(d, typeof e === "object" && e !== null ? e._currentValue : f);
          fc(e, c, d, f);
          Kc(a, b, e, c);
        } else {
          e = $b(c, b.legacyContext);
          f = Jc(a, b, c, d, e);
          var g = U !== 0;
          if (typeof f === "object" && f !== null && typeof f.render === "function" && f.$$typeof === void 0)
            fc(f, c, d, e), Kc(a, b, f, c);
          else if (g) {
            d = b.treeContext;
            b.treeContext = hc(d, 1, 0);
            try {
              Z(a, b, f);
            } finally {
              b.treeContext = d;
            }
          } else
            Z(a, b, f);
        }
      else if (typeof c === "string")
        switch (f = b.blockedSegment, e = Pa(f.chunks, c, d, a.responseState, f.formatContext), g = f.formatContext, f.formatContext = za(g, c, d), Nc(a, b, e), f.formatContext = g, c) {
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
          case "wbr":
            break;
          default:
            f.chunks.push(Qa, u(c), Ra);
        }
      else {
        switch (c) {
          case Vb:
          case Ub:
          case Kb:
          case Lb:
          case Jb:
            Z(a, b, d.children);
            return;
          case Qb:
            Z(a, b, d.children);
            return;
          case Tb:
            throw Error(k(343));
          case Pb:
            a: {
              c = b.blockedBoundary;
              f = b.blockedSegment;
              e = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g }, m = Fc(a, f.chunks.length, h, f.formatContext);
              f.children.push(m);
              var q = Fc(a, 0, null, f.formatContext);
              q.parentFlushed = true;
              b.blockedBoundary = h;
              b.blockedSegment = q;
              try {
                if (Nc(a, b, d), q.status = 1, Oc(h, q), h.pendingTasks === 0)
                  break a;
              } catch (r) {
                q.status = 4, Y(a, r), h.forceClientRender = true;
              } finally {
                b.blockedBoundary = c, b.blockedSegment = f;
              }
              b = Gc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
              a.pingedTasks.push(b);
            }
            return;
        }
        if (typeof c === "object" && c !== null)
          switch (c.$$typeof) {
            case Ob:
              d = Jc(a, b, c.render, d, f);
              if (U !== 0) {
                c = b.treeContext;
                b.treeContext = hc(c, 1, 0);
                try {
                  Z(a, b, d);
                } finally {
                  b.treeContext = c;
                }
              } else
                Z(a, b, d);
              return;
            case Rb:
              c = c.type;
              d = Lc(c, d);
              Mc(a, b, c, d, f);
              return;
            case Mb:
              f = d.children;
              c = c._context;
              d = d.value;
              e = c._currentValue;
              c._currentValue = d;
              g = N;
              N = d = { parent: g, depth: g === null ? 0 : g.depth + 1, context: c, parentValue: e, value: d };
              b.context = d;
              Z(a, b, f);
              a = N;
              if (a === null)
                throw Error(k(403));
              d = a.parentValue;
              a.context._currentValue = d === Wb ? a.context._defaultValue : d;
              a = N = a.parent;
              b.context = a;
              return;
            case Nb:
              d = d.children;
              d = d(c._currentValue);
              Z(a, b, d);
              return;
            case Sb:
              f = c._init;
              c = f(c._payload);
              d = Lc(c, d);
              Mc(a, b, c, d, void 0);
              return;
          }
        throw Error(k(130, c == null ? c : typeof c, ""));
      }
    }
    function Z(a, b, c) {
      b.node = c;
      if (typeof c === "object" && c !== null) {
        switch (c.$$typeof) {
          case Hb:
            Mc(a, b, c.type, c.props, c.ref);
            return;
          case Ib:
            throw Error(k(257));
          case Sb:
            var d = c._init;
            c = d(c._payload);
            Z(a, b, c);
            return;
        }
        if (pa(c)) {
          Pc(a, b, c);
          return;
        }
        c === null || typeof c !== "object" ? d = null : (d = Xb && c[Xb] || c["@@iterator"], d = typeof d === "function" ? d : null);
        if (d && (d = d.call(c))) {
          c = d.next();
          if (!c.done) {
            var f = [];
            do
              f.push(c.value), c = d.next();
            while (!c.done);
            Pc(a, b, f);
          }
          return;
        }
        b = Object.prototype.toString.call(c);
        throw Error(k(31, b === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : b));
      }
      typeof c === "string" ? c !== "" && b.blockedSegment.chunks.push(u(A(c)), Aa) : typeof c === "number" && (a = "" + c, a !== "" && b.blockedSegment.chunks.push(u(A(a)), Aa));
    }
    function Pc(a, b, c) {
      for (var d = c.length, f = 0; f < d; f++) {
        var e = b.treeContext;
        b.treeContext = hc(e, d, f);
        try {
          Nc(a, b, c[f]);
        } finally {
          b.treeContext = e;
        }
      }
    }
    function Nc(a, b, c) {
      var d = b.blockedSegment.formatContext, f = b.legacyContext, e = b.context;
      try {
        return Z(a, b, c);
      } catch (m) {
        if (tc(), typeof m === "object" && m !== null && typeof m.then === "function") {
          c = m;
          var g = b.blockedSegment, h = Fc(a, g.chunks.length, null, g.formatContext);
          g.children.push(h);
          a = Gc(a, b.node, b.blockedBoundary, h, b.abortSet, b.legacyContext, b.context, b.treeContext).ping;
          c.then(a, a);
          b.blockedSegment.formatContext = d;
          b.legacyContext = f;
          b.context = e;
          P(e);
        } else
          throw b.blockedSegment.formatContext = d, b.legacyContext = f, b.context = e, P(e), m;
      }
    }
    function Qc(a) {
      var b = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Rc(this, b, a);
    }
    function Sc(a) {
      var b = a.blockedBoundary;
      a.blockedSegment.status = 3;
      b === null ? (this.allPendingTasks--, this.status !== 2 && (this.status = 2, this.destination !== null && this.destination.close())) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = true, b.parentFlushed && this.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(Sc, this), b.fallbackAbortableTasks.clear(), this.allPendingTasks--, this.allPendingTasks === 0 && (a = this.onAllReady, a()));
    }
    function Oc(a, b) {
      if (b.chunks.length === 0 && b.children.length === 1 && b.children[0].boundary === null) {
        var c = b.children[0];
        c.id = b.id;
        c.parentFlushed = true;
        c.status === 1 && Oc(a, c);
      } else
        a.completedSegments.push(b);
    }
    function Rc(a, b, c) {
      if (b === null) {
        if (c.parentFlushed) {
          if (a.completedRootSegment !== null)
            throw Error(k(389));
          a.completedRootSegment = c;
        }
        a.pendingRootTasks--;
        a.pendingRootTasks === 0 && (a.onShellError = X, b = a.onShellReady, b());
      } else
        b.pendingTasks--, b.forceClientRender || (b.pendingTasks === 0 ? (c.parentFlushed && c.status === 1 && Oc(b, c), b.parentFlushed && a.completedBoundaries.push(b), b.fallbackAbortableTasks.forEach(Qc, a), b.fallbackAbortableTasks.clear()) : c.parentFlushed && c.status === 1 && (Oc(b, c), b.completedSegments.length === 1 && b.parentFlushed && a.partialBoundaries.push(b)));
      a.allPendingTasks--;
      a.allPendingTasks === 0 && (a = a.onAllReady, a());
    }
    function Hc(a) {
      if (a.status !== 2) {
        var b = N, c = Cc.current;
        Cc.current = Bc;
        var d = Ac;
        Ac = a.responseState;
        try {
          var f = a.pingedTasks, e;
          for (e = 0; e < f.length; e++) {
            var g = f[e];
            var h = a, m = g.blockedSegment;
            if (m.status === 0) {
              P(g.context);
              try {
                Z(h, g, g.node), g.abortSet.delete(g), m.status = 1, Rc(h, g.blockedBoundary, m);
              } catch (C) {
                if (tc(), typeof C === "object" && C !== null && typeof C.then === "function") {
                  var q = g.ping;
                  C.then(q, q);
                } else {
                  g.abortSet.delete(g);
                  m.status = 4;
                  var r = g.blockedBoundary, E = C;
                  Y(h, E);
                  r === null ? Ic(h, E) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = true, r.parentFlushed && h.clientRenderedBoundaries.push(r)));
                  h.allPendingTasks--;
                  if (h.allPendingTasks === 0) {
                    var F = h.onAllReady;
                    F();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e);
          a.destination !== null && Tc(a, a.destination);
        } catch (C) {
          Y(a, C), Ic(a, C);
        } finally {
          Ac = d, Cc.current = c, c === Bc && P(b);
        }
      }
    }
    function Uc(a, b, c) {
      c.parentFlushed = true;
      switch (c.status) {
        case 0:
          var d = c.id = a.nextSegmentId++;
          a = a.responseState;
          p(b, Sa);
          p(b, a.placeholderPrefix);
          a = u(d.toString(16));
          p(b, a);
          return t(b, Ta);
        case 1:
          c.status = 2;
          var f = true;
          d = c.chunks;
          var e = 0;
          c = c.children;
          for (var g = 0; g < c.length; g++) {
            for (f = c[g]; e < f.index; e++)
              p(b, d[e]);
            f = Vc(a, b, f);
          }
          for (; e < d.length - 1; e++)
            p(b, d[e]);
          e < d.length && (f = t(b, d[e]));
          return f;
        default:
          throw Error(k(390));
      }
    }
    function Vc(a, b, c) {
      var d = c.boundary;
      if (d === null)
        return Uc(a, b, c);
      d.parentFlushed = true;
      if (d.forceClientRender)
        t(b, Xa), Uc(a, b, c);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e = f.nextSuspenseID++;
        f = v(f.boundaryPrefix + e.toString(16));
        d = d.id = f;
        Za(b, a.responseState, d);
        Uc(a, b, c);
      } else if (d.byteSize > a.progressiveChunkSize)
        d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Za(b, a.responseState, d.id), Uc(a, b, c);
      else {
        t(b, Ua);
        c = d.completedSegments;
        if (c.length !== 1)
          throw Error(k(391));
        Vc(a, b, c[0]);
      }
      return t(b, Ya);
    }
    function Wc(a, b, c) {
      ub(b, a.responseState, c.formatContext, c.id);
      Vc(a, b, c);
      return vb(b, c.formatContext);
    }
    function Xc(a, b, c) {
      for (var d = c.completedSegments, f = 0; f < d.length; f++)
        Yc(a, b, c, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c.id;
      c = c.rootSegmentID;
      p(b, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? p(b, Bb) : (a.sentCompleteBoundaryFunction = true, p(b, Ab));
      if (d === null)
        throw Error(k(395));
      c = u(c.toString(16));
      p(b, d);
      p(b, Cb);
      p(b, a.segmentPrefix);
      p(b, c);
      return t(b, Db);
    }
    function Yc(a, b, c, d) {
      if (d.status === 2)
        return true;
      var f = d.id;
      if (f === -1) {
        if ((d.id = c.rootSegmentID) === -1)
          throw Error(k(392));
        return Wc(a, b, d);
      }
      Wc(a, b, d);
      a = a.responseState;
      p(b, a.startInlineScript);
      a.sentCompleteSegmentFunction ? p(b, xb) : (a.sentCompleteSegmentFunction = true, p(b, wb));
      p(b, a.segmentPrefix);
      f = u(f.toString(16));
      p(b, f);
      p(b, yb);
      p(b, a.placeholderPrefix);
      p(b, f);
      return t(b, zb);
    }
    function Tc(a, b) {
      l = new Uint8Array(512);
      n = 0;
      try {
        var c = a.completedRootSegment;
        if (c !== null && a.pendingRootTasks === 0) {
          Vc(a, b, c);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c = 0; c < d.length - 1; c++)
            p(b, d[c]);
          c < d.length && t(b, d[c]);
        }
        var f = a.clientRenderedBoundaries, e;
        for (e = 0; e < f.length; e++) {
          d = b;
          var g = a.responseState, h = f[e].id;
          p(d, g.startInlineScript);
          g.sentClientRenderFunction ? p(d, Fb) : (g.sentClientRenderFunction = true, p(d, Eb));
          if (h === null)
            throw Error(k(395));
          p(d, h);
          if (!t(d, Gb)) {
            a.destination = null;
            e++;
            f.splice(0, e);
            return;
          }
        }
        f.splice(0, e);
        var m = a.completedBoundaries;
        for (e = 0; e < m.length; e++)
          if (!Xc(a, b, m[e])) {
            a.destination = null;
            e++;
            m.splice(0, e);
            return;
          }
        m.splice(0, e);
        ba(b);
        l = new Uint8Array(512);
        n = 0;
        var q = a.partialBoundaries;
        for (e = 0; e < q.length; e++) {
          var r = q[e];
          a: {
            f = a;
            g = b;
            var E = r.completedSegments;
            for (h = 0; h < E.length; h++)
              if (!Yc(f, g, r, E[h])) {
                h++;
                E.splice(0, h);
                var F = false;
                break a;
              }
            E.splice(0, h);
            F = true;
          }
          if (!F) {
            a.destination = null;
            e++;
            q.splice(0, e);
            return;
          }
        }
        q.splice(0, e);
        var C = a.completedBoundaries;
        for (e = 0; e < C.length; e++)
          if (!Xc(a, b, C[e])) {
            a.destination = null;
            e++;
            C.splice(0, e);
            return;
          }
        C.splice(0, e);
      } finally {
        ba(b), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && b.close();
      }
    }
    function Zc(a) {
      try {
        var b = a.abortableTasks;
        b.forEach(Sc, a);
        b.clear();
        a.destination !== null && Tc(a, a.destination);
      } catch (c) {
        Y(a, c), Ic(a, c);
      }
    }
    exports.renderToReadableStream = function(a, b) {
      return new Promise(function(c, d) {
        var f, e, g = new Promise(function(a2, b2) {
          e = a2;
          f = b2;
        }), h = Ec(a, xa(b ? b.identifierPrefix : void 0, b ? b.nonce : void 0, b ? b.bootstrapScriptContent : void 0, b ? b.bootstrapScripts : void 0, b ? b.bootstrapModules : void 0), ya(b ? b.namespaceURI : void 0), b ? b.progressiveChunkSize : void 0, b ? b.onError : void 0, e, function() {
          var a2 = new ReadableStream({ type: "bytes", pull: function(a3) {
            if (h.status === 1)
              h.status = 2, da(a3, h.fatalError);
            else if (h.status !== 2 && h.destination === null) {
              h.destination = a3;
              try {
                Tc(h, a3);
              } catch (F) {
                Y(h, F), Ic(h, F);
              }
            }
          }, cancel: function() {
            Zc(h);
          } });
          a2.allReady = g;
          c(a2);
        }, function(a2) {
          g.catch(function() {
          });
          d(a2);
        }, f);
        if (b && b.signal) {
          var m = b.signal, q = function() {
            Zc(h);
            m.removeEventListener("abort", q);
          };
          m.addEventListener("abort", q);
        }
        Hc(h);
      });
    };
    exports.version = "18.1.0";
  }
});

// node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "node_modules/react-dom/server.browser.js"(exports) {
    "use strict";
    init_react();
    var l;
    var s;
    if (true) {
      l = require_react_dom_server_legacy_browser_production_min();
      s = require_react_dom_server_browser_production_min();
    } else {
      l = null;
      s = null;
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
  if (!condition && !alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}
var alreadyWarned;
var init_warnings = __esm({
  "node_modules/@remix-run/server-runtime/esm/warnings.js"() {
    init_react();
    alreadyWarned = {};
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
var LiveReload = true ? () => null : function LiveReload2({
  port = Number(52883),
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
  }, /* @__PURE__ */ React.createElement("h1", null, "oh shit this is gonna be fun!"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5e0fa231", "entry": { "module": "/build/entry.client-2NZQEP7B.js", "imports": ["/build/_shared/chunk-LLMT5BDW.js", "/build/_shared/chunk-FOGSAFZ3.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OUSNVUGO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-GOLEIZGU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/op1/index": { "id": "routes/op1/index", "parentId": "root", "path": "op1", "index": true, "caseSensitive": void 0, "module": "/build/routes/op1/index-LAFYDSIA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-5E0FA231.js" };

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
  mode: "production"
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
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
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
