(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_76ea51._.js", {

"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/@formatjs/fast-memoize/lib/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
//
// Main
//
__turbopack_esm__({
    "memoize": (()=>memoize),
    "strategies": (()=>strategies)
});
function memoize(fn, options) {
    var cache = options && options.cache ? options.cache : cacheDefault;
    var serializer = options && options.serializer ? options.serializer : serializerDefault;
    var strategy = options && options.strategy ? options.strategy : strategyDefault;
    return strategy(fn, {
        cache: cache,
        serializer: serializer
    });
}
//
// Strategy
//
function isPrimitive(value) {
    return value == null || typeof value === 'number' || typeof value === 'boolean'; // || typeof value === "string" 'unsafe' primitive for our needs
}
function monadic(fn, cache, serializer, arg) {
    var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.call(this, arg);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function variadic(fn, cache, serializer) {
    var args = Array.prototype.slice.call(arguments, 3);
    var cacheKey = serializer(args);
    var computedValue = cache.get(cacheKey);
    if (typeof computedValue === 'undefined') {
        computedValue = fn.apply(this, args);
        cache.set(cacheKey, computedValue);
    }
    return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
    return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
    var strategy = fn.length === 1 ? monadic : variadic;
    return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
    return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
    return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
//
// Serializer
//
var serializerDefault = function() {
    return JSON.stringify(arguments);
};
//
// Cache
//
var ObjectWithoutPrototypeCache = function() {
    function ObjectWithoutPrototypeCache() {
        this.cache = Object.create(null);
    }
    ObjectWithoutPrototypeCache.prototype.get = function(key) {
        return this.cache[key];
    };
    ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
        this.cache[key] = value;
    };
    return ObjectWithoutPrototypeCache;
}();
var cacheDefault = {
    create: function create() {
        return new ObjectWithoutPrototypeCache();
    }
};
var strategies = {
    variadic: strategyVariadic,
    monadic: strategyMonadic
};
}}),
"[project]/node_modules/use-intl/dist/development/initializeConfig-BhfMSHP7.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
var fastMemoize = __turbopack_require__("[project]/node_modules/@formatjs/fast-memoize/lib/index.js [app-client] (ecmascript)");
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
let IntlErrorCode = /*#__PURE__*/ function(IntlErrorCode) {
    IntlErrorCode["MISSING_MESSAGE"] = "MISSING_MESSAGE";
    IntlErrorCode["MISSING_FORMAT"] = "MISSING_FORMAT";
    IntlErrorCode["ENVIRONMENT_FALLBACK"] = "ENVIRONMENT_FALLBACK";
    IntlErrorCode["INSUFFICIENT_PATH"] = "INSUFFICIENT_PATH";
    IntlErrorCode["INVALID_MESSAGE"] = "INVALID_MESSAGE";
    IntlErrorCode["INVALID_KEY"] = "INVALID_KEY";
    IntlErrorCode["FORMATTING_ERROR"] = "FORMATTING_ERROR";
    return IntlErrorCode;
}({});
class IntlError extends Error {
    constructor(code, originalMessage){
        let message = code;
        if (originalMessage) {
            message += ': ' + originalMessage;
        }
        super(message);
        _defineProperty(this, "code", void 0);
        _defineProperty(this, "originalMessage", void 0);
        this.code = code;
        if (originalMessage) {
            this.originalMessage = originalMessage;
        }
    }
}
function joinPath() {
    for(var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++){
        parts[_key] = arguments[_key];
    }
    return parts.filter(Boolean).join('.');
}
/**
 * Contains defaults that are used for all entry points into the core.
 * See also `InitializedIntlConfiguration`.
 */ function defaultGetMessageFallback(props) {
    return joinPath(props.namespace, props.key);
}
function defaultOnError(error) {
    console.error(error);
}
function createCache() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function createMemoCache(store) {
    return {
        create () {
            return {
                get (key) {
                    return store[key];
                },
                set (key, value) {
                    store[key] = value;
                }
            };
        }
    };
}
function memoFn(fn, cache) {
    return fastMemoize.memoize(fn, {
        cache: createMemoCache(cache),
        strategy: fastMemoize.strategies.variadic
    });
}
function memoConstructor(ConstructorFn, cache) {
    return memoFn(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return new ConstructorFn(...args);
    }, cache);
}
function createIntlFormatters(cache) {
    const getDateTimeFormat = memoConstructor(Intl.DateTimeFormat, cache.dateTime);
    const getNumberFormat = memoConstructor(Intl.NumberFormat, cache.number);
    const getPluralRules = memoConstructor(Intl.PluralRules, cache.pluralRules);
    const getRelativeTimeFormat = memoConstructor(Intl.RelativeTimeFormat, cache.relativeTime);
    const getListFormat = memoConstructor(Intl.ListFormat, cache.list);
    const getDisplayNames = memoConstructor(Intl.DisplayNames, cache.displayNames);
    return {
        getDateTimeFormat,
        getNumberFormat,
        getPluralRules,
        getRelativeTimeFormat,
        getListFormat,
        getDisplayNames
    };
}
function validateMessagesSegment(messages, invalidKeyLabels, parentPath) {
    Object.entries(messages).forEach((_ref)=>{
        let [key, messageOrMessages] = _ref;
        if (key.includes('.')) {
            let keyLabel = key;
            if (parentPath) keyLabel += " (at ".concat(parentPath, ")");
            invalidKeyLabels.push(keyLabel);
        }
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (messageOrMessages != null && typeof messageOrMessages === 'object') {
            validateMessagesSegment(messageOrMessages, invalidKeyLabels, joinPath(parentPath, key));
        }
    });
}
function validateMessages(messages, onError) {
    const invalidKeyLabels = [];
    validateMessagesSegment(messages, invalidKeyLabels);
    if (invalidKeyLabels.length > 0) {
        onError(new IntlError(IntlErrorCode.INVALID_KEY, "Namespace keys can not contain the character \".\" as this is used to express nesting. Please remove it or replace it with another character.\n\nInvalid ".concat(invalidKeyLabels.length === 1 ? 'key' : 'keys', ": ").concat(invalidKeyLabels.join(', '), "\n\nIf you're migrating from a flat structure, you can convert your messages as follows:\n\nimport {set} from \"lodash\";\n\nconst input = {\n  \"one.one\": \"1.1\",\n  \"one.two\": \"1.2\",\n  \"two.one.one\": \"2.1.1\"\n};\n\nconst output = Object.entries(input).reduce(\n  (acc, [key, value]) => set(acc, key, value),\n  {}\n);\n\n// Output:\n//\n// {\n//   \"one\": {\n//     \"one\": \"1.1\",\n//     \"two\": \"1.2\"\n//   },\n//   \"two\": {\n//     \"one\": {\n//       \"one\": \"2.1.1\"\n//     }\n//   }\n// }\n")));
    }
}
/**
 * Enhances the incoming props with defaults.
 */ function initializeConfig(_ref) {
    let { getMessageFallback, messages, onError, ...rest } = _ref;
    const finalOnError = onError || defaultOnError;
    const finalGetMessageFallback = getMessageFallback || defaultGetMessageFallback;
    {
        if (messages) {
            validateMessages(messages, finalOnError);
        }
    }
    return {
        ...rest,
        messages,
        onError: finalOnError,
        getMessageFallback: finalGetMessageFallback
    };
}
exports.IntlError = IntlError;
exports.IntlErrorCode = IntlErrorCode;
exports.createCache = createCache;
exports.createIntlFormatters = createIntlFormatters;
exports.defaultGetMessageFallback = defaultGetMessageFallback;
exports.defaultOnError = defaultOnError;
exports.initializeConfig = initializeConfig;
exports.joinPath = joinPath;
exports.memoFn = memoFn;
}}),
"[project]/node_modules/use-intl/dist/development/IntlContext-BKfsnzBx.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const IntlContext = /*#__PURE__*/ React.createContext(undefined);
exports.IntlContext = IntlContext;
}}),
"[project]/node_modules/use-intl/dist/development/_IntlProvider.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var initializeConfig = __turbopack_require__("[project]/node_modules/use-intl/dist/development/initializeConfig-BhfMSHP7.js [app-client] (ecmascript)");
var IntlContext = __turbopack_require__("[project]/node_modules/use-intl/dist/development/IntlContext-BKfsnzBx.js [app-client] (ecmascript)");
__turbopack_require__("[project]/node_modules/@formatjs/fast-memoize/lib/index.js [app-client] (ecmascript)");
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var React__default = /*#__PURE__*/ _interopDefault(React);
function IntlProvider(_ref) {
    let { children, defaultTranslationValues, formats, getMessageFallback, locale, messages, now, onError, timeZone } = _ref;
    // The formatter cache is released when the locale changes. For
    // long-running apps with a persistent `IntlProvider` at the root,
    // this can reduce the memory footprint (e.g. in React Native).
    const cache = React.useMemo({
        "IntlProvider.useMemo[cache]": ()=>{
            return initializeConfig.createCache();
        }
    }["IntlProvider.useMemo[cache]"], [
        locale
    ]);
    const formatters = React.useMemo({
        "IntlProvider.useMemo[formatters]": ()=>initializeConfig.createIntlFormatters(cache)
    }["IntlProvider.useMemo[formatters]"], [
        cache
    ]);
    // Memoizing this value helps to avoid triggering a re-render of all
    // context consumers in case the configuration didn't change. However,
    // if some of the non-primitive values change, a re-render will still
    // be triggered. Note that there's no need to put `memo` on `IntlProvider`
    // itself, because the `children` typically change on every render.
    // There's some burden on the consumer side if it's important to reduce
    // re-renders, put that's how React works.
    // See: https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#context-updates-and-render-optimizations
    const value = React.useMemo({
        "IntlProvider.useMemo[value]": ()=>({
                ...initializeConfig.initializeConfig({
                    locale,
                    defaultTranslationValues,
                    formats,
                    getMessageFallback,
                    messages,
                    now,
                    onError,
                    timeZone
                }),
                formatters,
                cache
            })
    }["IntlProvider.useMemo[value]"], [
        cache,
        defaultTranslationValues,
        formats,
        formatters,
        getMessageFallback,
        locale,
        messages,
        now,
        onError,
        timeZone
    ]);
    return /*#__PURE__*/ React__default.default.createElement(IntlContext.IntlContext.Provider, {
        value: value
    }, children);
}
exports.IntlProvider = IntlProvider;
}}),
"[project]/node_modules/use-intl/dist/_IntlProvider.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/use-intl/dist/development/_IntlProvider.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next-intl/dist/esm/_virtual/_rollupPluginBabelHelpers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "extends": (()=>n)
});
function n() {
    return n = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), n.apply(null, arguments);
}
;
}}),
"[project]/node_modules/next-intl/dist/esm/shared/NextIntlClientProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$_IntlProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/use-intl/dist/_IntlProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-intl/dist/esm/_virtual/_rollupPluginBabelHelpers.js [app-client] (ecmascript)");
"use client";
;
;
;
function r(r) {
    let { locale: o, ...i } = r;
    if (!o) throw new Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$_IntlProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IntlProvider"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$_virtual$2f$_rollupPluginBabelHelpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extends"])({
        locale: o
    }, i));
}
;
}}),
}]);

//# sourceMappingURL=_76ea51._.js.map