/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(3);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(17);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(5);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(18);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(19);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(6);

	var _decorators = __webpack_require__(14);

	var _logger = __webpack_require__(16);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(7);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(8);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(9);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(10);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(11);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(12);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(13);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(15);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(3);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};
this["Handlebars"]["templates"]["footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"pm-footer\">\r\n	<div class=\"inner\">\r\n		<div id=\"footer-logo\"><div class=\"sr-only\">Contoso</div></div>\r\n		<div id=\"footer-nav\">\r\n			<!--nav will go here-->\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
this["Handlebars"]["templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div>\r\n<header id=\"pm-header\">\r\n	<div id=\"pm-header-inner\">\r\n		<div id=\"pm-logo\">\r\n			<h1>\r\n				<div id=\"pm-site-logo\">\r\n				</div>\r\n				<span id=\"pm-site-title\">\r\n				</span>\r\n			</h1>\r\n		</div>\r\n		<div id=\"pm-topnav\">\r\n			<div id=\"pm-topnav-wrapper\">\r\n			</div>\r\n			\r\n			<ul class=\"o365cs-base\" id=\"pm-toggles\">\r\n				<li id=\"search-toggle\"><a href=\"#\"><span class=\"ms-Icon ms-Icon--search\"></span></a></li>\r\n				<li id=\"contact-toggle\"><a href=\"#\"><span class=\"ms-Icon ms-Icon--phone\"></span></a></li>\r\n			</ul>\r\n		</div>\r\n		\r\n		\r\n	</div>\r\n</header>\r\n<div id=\"pm-search\">\r\n</div>\r\n<div id=\"pm-contact\">\r\n	<div class=\"inner\">\r\n		<strong>Site Contact:</strong> Eric Overfield at eoverfield@pixelmill.com.\r\n	</div>\r\n</div>\r\n</div>";
},"useData":true});
/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
/*
 * Delayed resize, which captures margins etc correctly AFTER all resize events have
 * been processed.
 */

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  //
  // usage:
  
  // $(window).smartresize(function(){
  //   // your code
  // });
  
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
var Pxlml = Pxlml || {};


Pxlml.console = (function($) {

	/* 
	 * Make sure console.log works with IE
	 */
	var init = function() {
    	if (!window.console) {window.console = {};}
		var console = window.console; //moar opera errors around this - console wasn't defined below, yes it wasn't resolving to window.console for some reason.
    	var noop = function noop() {};
    	var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml','error', 
	        'exception', 'group', 'groupCollapsed','groupEnd', 'info', 'log', 
	        'markTimeline', 'profile','profileEnd', 'markTimeline', 'table', 'time',
	        'timeEnd', 'timeStamp', 'trace', 'warn'];
    	var length = methods.length;
	    while (length--) {
	        /*only add method if it's not already defined.*/
	        if (!console[methods[length]]) 
	        {
	            console[methods[length]] = noop;
	        }
	    }
	};

	return {
        init: init
    };
})(jQuery);
var Pxlml = Pxlml || {};

Pxlml.mobileUI = (function($) {
	
	var init = function() {
		var $breadcrumbDropdown = $("#titleAreaRow .ms-breadcrumb-dropdownBox");

		hideOnDesktop();
		
		//add our responsive top navigation mobile buttom
		$breadcrumbDropdown.after("<button class=\"navbar-toggle  o365cs-base\" type=\"button\"><span class=\"ms-Icon--menu ms-Icon\"></span></button>");

		$(".navbar-toggle").click(function() {
			showItem($('#DeltaTopNavigation'));
			setMenuHeight();
		});
	};

	var showItem = function(element) {
		if($(element).hasClass("mobile") && $(element).hasClass("pm-active")) {
	        $(element).toggleClass("mobile");
	        $(element).toggleClass("pm-active");
	        return;
	    }

	    hideItems();

		$(element).toggleClass("mobile");
        $(element).toggleClass("pm-active");
	};

	var hideItems = function() {
		$("#s4-titlerow *").removeClass("mobile");
    	$("#s4-titlerow *").removeClass("pm-active");
	};

	var setMenuHeight = function() {
		$("#pm-topnav.mobile").css({
    		height: $(window).outerHeight() - $("HEADER").outerHeight(),
    		"overflow-y": "auto"
    	});
	};

	var hideOnDesktop = function() {
		$(window).smartresize(function() {
			var $workspace = $("#s4-workspace");

			//if mobile, ignore
			if ($workspace.outerWidth(true) < 768)
				return;

        	hideItems();

        	$("#DeltaTopNavigation").css({
                height: "auto",
                "overflow-y": "inherit"
            });
        });
	};

	return {
        init: init
    };

})(jQuery);

var Pxlml = Pxlml || {};

Pxlml.wiki = (function($) 
{
	var init = function() {
		// adds class to each row of wiki layout table
		var $table_rows = $('.ms-wikicontent #layoutsTable > tbody > tr');

		if ($table_rows.length == 1) {
			$table_rows.addClass("pm-layouttable-row").addClass("pm-layouttable-row-single");
		}
		else {
			$table_rows.each( function(i) { 
				$(this).addClass("pm-layouttable-row").addClass("pm-layouttable-row-"+ (i+1));
			});
		}
	};

	return {
        init: init
    };

})(jQuery);

var Pxlml = Pxlml || {};

Pxlml.layout = (function($) 
{
	var init = function() {

		bindHeader();

		bindFooter();
	};

	var bindHeader = function() {
		var template;
		var context;
		var currentElement;
		var newNode;

		//set up header
		currentElement = document.querySelector("#s4-titlerow");

		//get the handlebar template
		template = Handlebars.templates["header"];
		context = {};

		//create a new node to hold template
		newNode = document.createElement("div");

		//set the html based on the Handlebar template
		newNode.innerHTML = template(context);

		//finally bind to DOM
		currentElement.appendChild(newNode.firstChild);


		currentElement = document.querySelector("#pm-site-logo");
		var topNav = document.querySelector("#siteIcon");
		currentElement.appendChild(topNav.cloneNode(true));

	};

	var bindFooter = function() {
		var template;
		var context;
		var currentElement;
		var newNode;

		//set up footer
		currentElement = document.querySelector("#s4-bodyContainer");

		//get the handlebar template
		template = Handlebars.templates["footer"];
		context = {};

		//create a new node to hold template
		newNode = document.createElement("div");

		//set the html based on the Handlebar template
		newNode.innerHTML = template(context);

		//finally bind to DOM
		currentElement.appendChild(newNode.firstChild);

		//now copy navigation from header to footer
		currentElement = document.querySelector("#footer-nav");
		var topNav = document.querySelector("#DeltaTopNavigation");
		currentElement.appendChild(topNav.cloneNode(true));
	};

	return {
        init: init
    };

})(jQuery);

/**
 * Office UI Fabric JS 1.4.0
 * The JavaScript front-end framework for building experiences for Office 365.
 **/
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    "use strict";
    /**
     * Breadcrumb component
     *
     * Shows the user"s current location in a hierarchy and provides a means of navigating upward.
     *
     */
    var Breadcrumb = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Breadcrumb
         * @constructor
         *
         * If dynamically populating a list run the constructor after the list has been populated
         * in the DOM.
        */
        function Breadcrumb(container) {
            this._currentMaxItems = 0;
            this._itemCollection = [];
            this._tabIndex = 2;
            this.container = container;
            this._onResize = this._onResize.bind(this);
            this._openOverflow = this._openOverflow.bind(this);
            this._overflowKeyPress = this._overflowKeyPress.bind(this);
            this._closeOverflow = this._closeOverflow.bind(this);
            this.removeOutlinesOnClick = this.removeOutlinesOnClick.bind(this);
            this.init();
        }
        /**
         *  removes focus outlines so they don"t linger after click
        */
        Breadcrumb.prototype.removeOutlinesOnClick = function () {
            this._breadcrumbList.blur();
        };
        /**
         * Adds a breadcrumb item to a breadcrumb
         * @param itemLabel {String} the item's text label
         * @param itemLink {String} the item's href link
        */
        Breadcrumb.prototype.addItem = function (itemLabel, itemLink) {
            this._itemCollection.push({ text: itemLabel, link: itemLink });
            this._updateBreadcrumbs();
        };
        /**
         * Removes a breadcrumb item by item label in the breadcrumbs list
         * @param itemLabel {String} the item's text label
        */
        Breadcrumb.prototype.removeItemByLabel = function (itemLabel) {
            var i = this._itemCollection.length;
            while (i--) {
                if (this._itemCollection[i].text === itemLabel) {
                    this._itemCollection.splice(i, 1);
                }
            }
            this._updateBreadcrumbs();
        };
        ;
        /**
         * removes a breadcrumb item by position in the breadcrumb's list
         * index starts at 0
         * @param value {number} the item's index
        */
        Breadcrumb.prototype.removeItemByPosition = function (value) {
            this._itemCollection.splice(value, 1);
            this._updateBreadcrumbs();
        };
        /**
         * initializes component
        */
        Breadcrumb.prototype.init = function () {
            this._cacheDOM();
            this._setListeners();
            this._createItemCollection();
            this._onResize();
        };
        /**
         * create internal model of list items from DOM
        */
        Breadcrumb.prototype._createItemCollection = function () {
            var length = this._listItems.length;
            var i = 0;
            var item;
            var text;
            var link;
            var tabIndex;
            for (i; i < length; i++) {
                item = this._listItems[i].querySelector(".ms-Breadcrumb-itemLink");
                text = item.textContent;
                link = item.getAttribute("href");
                tabIndex = parseInt(item.getAttribute("tabindex"), 10);
                this._itemCollection.push({ link: link, tabIndex: tabIndex, text: text });
            }
        };
        /**
         * Re-render lists on resize
         *
        */
        Breadcrumb.prototype._onResize = function () {
            this._closeOverflow(null);
            this._renderList();
        };
        /**
         * render breadcrumbs and overflow menus
        */
        Breadcrumb.prototype._renderList = function () {
            var maxItems = window.innerWidth > Breadcrumb.MEDIUM ? 4 : 2;
            if (maxItems !== this._currentMaxItems) {
                this._updateBreadcrumbs();
            }
            this._currentMaxItems = maxItems;
        };
        /**
         * updates the breadcrumbs and overflow menu
        */
        Breadcrumb.prototype._updateBreadcrumbs = function () {
            this._tabIndex = 2;
            var maxItems = window.innerWidth > Breadcrumb.MEDIUM ? 4 : 2;
            if (this._itemCollection.length > maxItems) {
                this._breadcrumb.classList.add("is-overflow");
            }
            else {
                this._breadcrumb.classList.remove("is-overflow");
            }
            this._addItemsToOverflow(maxItems);
            this._addBreadcrumbItems(maxItems);
        };
        ;
        /**
         * creates the overflow menu
        */
        Breadcrumb.prototype._addItemsToOverflow = function (maxItems) {
            var _this = this;
            this._resetList(this._contextMenu);
            var end = this._itemCollection.length - maxItems;
            var overflowItems = this._itemCollection.slice(0, end);
            overflowItems.forEach(function (item) {
                var li = document.createElement("li");
                li.className = "ms-ContextualMenu-item";
                var a = document.createElement("a");
                a.className = "ms-ContextualMenu-link";
                if (item.link !== null) {
                    a.setAttribute("href", item.link);
                }
                a.setAttribute("tabindex", (_this._tabIndex++).toString());
                a.textContent = item.text;
                li.appendChild(a);
                _this._contextMenu.appendChild(li);
            });
        };
        /**
         * creates the breadcrumbs
        */
        Breadcrumb.prototype._addBreadcrumbItems = function (maxItems) {
            this._resetList(this._breadcrumbList);
            var i = this._itemCollection.length - maxItems;
            i = i < 0 ? 0 : i;
            if (i >= 0) {
                for (i; i < this._itemCollection.length; i++) {
                    var listItem = document.createElement("li");
                    var item = this._itemCollection[i];
                    var a = document.createElement("a");
                    var chevron = document.createElement("i");
                    listItem.className = "ms-Breadcrumb-listItem";
                    a.className = "ms-Breadcrumb-itemLink";
                    if (item.link !== null) {
                        a.setAttribute("href", item.link);
                    }
                    a.setAttribute("tabindex", (this._tabIndex++).toString());
                    a.textContent = item.text;
                    chevron.className = "ms-Breadcrumb-chevron ms-Icon ms-Icon--ChevronRight";
                    listItem.appendChild(a);
                    listItem.appendChild(chevron);
                    this._breadcrumbList.appendChild(listItem);
                }
            }
        };
        /**
         * resets a list by removing its children
        */
        Breadcrumb.prototype._resetList = function (list) {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
        };
        /**
         * opens the overflow menu
        */
        Breadcrumb.prototype._openOverflow = function (event) {
            if (this._overflowMenu.className.indexOf(" is-open") === -1) {
                this._overflowMenu.classList.add("is-open");
                this.removeOutlinesOnClick();
                // force focus rect onto overflow button
                this._overflowButton.focus();
            }
        };
        Breadcrumb.prototype._overflowKeyPress = function (event) {
            if (event.keyCode === 13) {
                this._openOverflow(event);
            }
        };
        /**
         * closes the overflow menu
        */
        Breadcrumb.prototype._closeOverflow = function (event) {
            if (!event || event.target !== this._overflowButton) {
                this._overflowMenu.classList.remove("is-open");
            }
        };
        /**
         * caches elements and values of the component
        */
        Breadcrumb.prototype._cacheDOM = function () {
            this._breadcrumb = this.container;
            this._breadcrumbList = this._breadcrumb.querySelector(".ms-Breadcrumb-list");
            this._listItems = this._breadcrumb.querySelectorAll(".ms-Breadcrumb-listItem");
            this._contextMenu = this._breadcrumb.querySelector(".ms-ContextualMenu");
            this._overflowButton = this._breadcrumb.querySelector(".ms-Breadcrumb-overflowButton");
            this._overflowMenu = this._breadcrumb.querySelector(".ms-Breadcrumb-overflowMenu");
        };
        /**
        * sets handlers for resize and button click events
        */
        Breadcrumb.prototype._setListeners = function () {
            window.addEventListener("resize", this._onResize, false);
            this._overflowButton.addEventListener("click", this._openOverflow, false);
            this._overflowButton.addEventListener("keypress", this._overflowKeyPress, false);
            document.addEventListener("click", this._closeOverflow, false);
            this._breadcrumbList.addEventListener("click", this.removeOutlinesOnClick, false);
        };
        // medium breakpoint
        Breadcrumb.MEDIUM = 639;
        return Breadcrumb;
    }());
    fabric.Breadcrumb = Breadcrumb;
})(fabric || (fabric = {})); // end fabric namespace

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * Button
 *
 * Mostly just a click handler
 *
 */
var fabric;
(function (fabric) {
    "use strict";
    var Button = (function () {
        function Button(container, clickHandler) {
            this._container = container;
            if (clickHandler) {
                this._clickHandler = clickHandler;
                this._setClick();
            }
        }
        Button.prototype.disposeEvents = function () {
            this._container.removeEventListener("click", this._clickHandler, false);
        };
        Button.prototype._setClick = function () {
            this._container.addEventListener("click", this._clickHandler, false);
        };
        return Button;
    }());
    fabric.Button = Button;
})(fabric || (fabric = {}));



// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * ContextualHost
 *
 * Hosts contextual menus and callouts
 * NOTE: Position bottom only works if html is set to max-height 100%, overflow hidden
 * and body is set to overflow scroll, body is set to height 100%
 *
 */
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    /**
     *
     * @constructor
     */
    var CONTEXT_STATE_CLASS = "is-open";
    var MODAL_STATE_POSITIONED = "is-positioned";
    var CONTEXT_HOST_MAIN_CLASS = "ms-ContextualHost-main";
    var CONTEXT_HOST_BEAK_CLASS = "ms-ContextualHost-beak";
    var ARROW_LEFT_CLASS = "ms-ContextualHost--arrowLeft";
    var ARROW_TOP_CLASS = "ms-ContextualHost--arrowTop";
    var ARROW_BOTTOM_CLASS = "ms-ContextualHost--arrowBottom";
    var ARROW_RIGHT_CLASS = "ms-ContextualHost--arrowRight";
    var MODIFIER_BASE = "ms-ContextualHost--";
    var ARROW_SIZE = 28;
    var ARROW_OFFSET = 8;
    var ContextualHost = (function () {
        function ContextualHost(content, direction, targetElement, hasArrow, modifiers, matchTargetWidth, disposalCallback) {
            if (hasArrow === void 0) { hasArrow = true; }
            this._resizeAction = this._resizeAction.bind(this);
            this._dismissAction = this._dismissAction.bind(this);
            this._handleKeyUpDismiss = this._handleKeyUpDismiss.bind(this);
            this._matchTargetWidth = matchTargetWidth || false;
            this._direction = direction;
            this._container = this.createContainer();
            this._contextualHost = this._container;
            this._contextualHostMain = this._contextualHost.getElementsByClassName(CONTEXT_HOST_MAIN_CLASS)[0];
            this._contextualHostMain.appendChild(content);
            this._hasArrow = hasArrow;
            this._arrow = this._container.getElementsByClassName(CONTEXT_HOST_BEAK_CLASS)[0];
            this._targetElement = targetElement;
            this._openModal();
            this._setResizeDisposal();
            if (disposalCallback) {
                this._disposalCallback = disposalCallback;
            }
            if (modifiers) {
                for (var i = 0; i < modifiers.length; i++) {
                    this._container.classList.add(MODIFIER_BASE + modifiers[i]);
                }
            }
            if (!ContextualHost.hosts) {
                ContextualHost.hosts = [];
            }
            ContextualHost.hosts.push(this);
        }
        ContextualHost.prototype.disposeModal = function () {
            if (ContextualHost.hosts.length > 0) {
                window.removeEventListener("resize", this._resizeAction, false);
                document.removeEventListener("click", this._dismissAction, true);
                document.removeEventListener("keyup", this._handleKeyUpDismiss, true);
                this._container.parentNode.removeChild(this._container);
                if (this._disposalCallback) {
                    this._disposalCallback();
                }
                // Dispose of all ContextualHosts
                var index = ContextualHost.hosts.indexOf(this);
                ContextualHost.hosts.splice(index, 1);
                var i = ContextualHost.hosts.length;
                while (i--) {
                    ContextualHost.hosts[i].disposeModal();
                    ContextualHost.hosts.splice(i, 1);
                }
            }
        };
        ContextualHost.prototype.setChildren = function (value) {
            if (!this._children) {
                this._children = [];
            }
            this._children.push(value);
        };
        ContextualHost.prototype.contains = function (value) {
            return this._container.contains(value);
        };
        ContextualHost.prototype.createContainer = function () {
            var ContextualHost0 = document.createElement("div");
            ContextualHost0.setAttribute("class", "ms-ContextualHost");
            ContextualHost0.innerHTML += " ";
            var ContextualHost0c1 = document.createElement("div");
            ContextualHost0c1.setAttribute("class", CONTEXT_HOST_MAIN_CLASS);
            ContextualHost0c1.innerHTML += " ";
            ContextualHost0.appendChild(ContextualHost0c1);
            ContextualHost0.innerHTML += " ";
            var ContextualHost0c3 = document.createElement("div");
            ContextualHost0c3.setAttribute("class", CONTEXT_HOST_BEAK_CLASS);
            ContextualHost0.appendChild(ContextualHost0c3);
            ContextualHost0.innerHTML += "";
            return ContextualHost0;
        };
        ContextualHost.prototype._openModal = function () {
            var _this = this;
            this._copyModalToBody();
            this._saveModalSize();
            this._findAvailablePosition();
            this._showModal();
            // Delay the click setting
            setTimeout(function () { _this._setDismissClick(); }, 100);
        };
        ContextualHost.prototype._findAvailablePosition = function () {
            var _posOk;
            switch (this._direction) {
                case "left":
                    // Try the right side
                    _posOk = this._positionOk(this._tryPosModalLeft.bind(this), this._tryPosModalRight.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));
                    this._setPosition(_posOk);
                    break;
                case "right":
                    _posOk = this._positionOk(this._tryPosModalRight.bind(this), this._tryPosModalLeft.bind(this), this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));
                    this._setPosition(_posOk);
                    break;
                case "top":
                    _posOk = this._positionOk(this._tryPosModalTop.bind(this), this._tryPosModalBottom.bind(this));
                    this._setPosition(_posOk);
                    break;
                case "bottom":
                    _posOk = this._positionOk(this._tryPosModalBottom.bind(this), this._tryPosModalTop.bind(this));
                    this._setPosition(_posOk);
                    break;
                default:
                    this._setPosition();
            }
        };
        ContextualHost.prototype._showModal = function () {
            this._container.classList.add(CONTEXT_STATE_CLASS);
        };
        ContextualHost.prototype._positionOk = function (pos1, pos2, pos3, pos4) {
            var _posOk;
            _posOk = pos1();
            if (!_posOk) {
                _posOk = pos2();
                if (!_posOk && pos3) {
                    _posOk = pos3();
                    if (!_posOk && pos4) {
                        _posOk = pos4();
                    }
                }
            }
            return _posOk;
        };
        ContextualHost.prototype._calcLeft = function (mWidth, teWidth, teLeft) {
            var mHalfWidth = mWidth / 2;
            var teHalf = teWidth / 2;
            var mHLeft = (teLeft + teHalf) - mHalfWidth;
            mHLeft = (mHLeft < mHalfWidth) ? teLeft : mHLeft;
            return mHLeft;
        };
        ContextualHost.prototype._calcTop = function (mHeight, teHeight, teTop) {
            var mHalfWidth = mHeight / 2;
            var teHalf = teHeight / 2;
            var mHLeft = (teTop + teHalf) - mHalfWidth;
            mHLeft = (mHLeft < mHalfWidth) ? teTop : mHLeft;
            return mHLeft;
        };
        ContextualHost.prototype._setPosition = function (curDirection) {
            var teBR = this._targetElement.getBoundingClientRect();
            var teLeft = teBR.left;
            var teRight = teBR.right;
            var teTop = teBR.top;
            var teWidth = teBR.width;
            var teHeight = teBR.height;
            var mHLeft;
            var mHTop;
            var mWidth = "";
            var arrowTop;
            var arrowLeft;
            var windowX = window.scrollX ? window.scrollX : 0;
            var windowY = window.scrollY ? window.scrollY : 0;
            var arrowSpace = (this._hasArrow) ? ARROW_SIZE : 0;
            if (this._matchTargetWidth) {
                mWidth = "width: " + this._modalWidth + "px;";
            }
            switch (curDirection) {
                case "left":
                    mHLeft = teLeft - this._modalWidth - arrowSpace;
                    mHTop = this._calcTop(this._modalHeight, teHeight, teTop);
                    mHTop += window.scrollY ? window.scrollY : 0;
                    this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                    this._container.classList.add(MODAL_STATE_POSITIONED);
                    if (this._hasArrow) {
                        this._container.classList.add(ARROW_RIGHT_CLASS);
                        arrowTop = ((teTop + windowY) - mHTop) + ARROW_OFFSET;
                        this._arrow.setAttribute("style", "top: " + arrowTop + "px;");
                    }
                    break;
                case "right":
                    mHTop = this._calcTop(this._modalHeight, teHeight, teTop);
                    mHTop += windowY;
                    mHLeft = teRight + arrowSpace;
                    this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                    this._container.classList.add(MODAL_STATE_POSITIONED);
                    if (this._hasArrow) {
                        arrowTop = ((windowY + teTop) - mHTop) + ARROW_OFFSET;
                        this._arrow.setAttribute("style", "top: " + arrowTop + "px;");
                        this._container.classList.add(ARROW_LEFT_CLASS);
                    }
                    break;
                case "top":
                    mHLeft = this._calcLeft(this._modalWidth, this._teWidth, teLeft);
                    mHTop = teTop - this._modalHeight - arrowSpace;
                    mHTop += windowY;
                    this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                    this._container.classList.add(MODAL_STATE_POSITIONED);
                    if (this._hasArrow) {
                        arrowTop = this._modalHeight - (arrowSpace / 2);
                        arrowLeft = Math.max(windowX + teLeft - mHLeft + ((teWidth - arrowSpace) / 2), ARROW_OFFSET);
                        this._arrow.setAttribute("style", "top: " + arrowTop + "px; left: " + arrowLeft + "px;");
                        this._container.classList.add(ARROW_BOTTOM_CLASS);
                    }
                    break;
                case "bottom":
                    mHLeft = mHLeft = this._calcLeft(this._modalWidth, this._teWidth, teLeft);
                    mHTop = teTop + teHeight + arrowSpace;
                    mHTop += window.scrollY ? window.scrollY : 0;
                    this._container.setAttribute("style", "top: " + mHTop + "px; left: " + mHLeft + "px;" + mWidth);
                    this._container.classList.add(MODAL_STATE_POSITIONED);
                    if (this._hasArrow) {
                        arrowLeft = Math.max(windowX + teLeft - mHLeft + ((teWidth - arrowSpace) / 2), ARROW_OFFSET);
                        this._arrow.setAttribute("style", "left: " + arrowLeft + "px;");
                        this._container.classList.add(ARROW_TOP_CLASS);
                    }
                    break;
                default:
                    this._container.setAttribute("style", "top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%);");
            }
        };
        ContextualHost.prototype._tryPosModalLeft = function () {
            var teLeft = this._targetElement.getBoundingClientRect().left;
            if (teLeft < this._modalWidth) {
                return false;
            }
            else {
                return "left";
            }
        };
        ContextualHost.prototype._tryPosModalRight = function () {
            var teRight = this._targetElement.getBoundingClientRect().right;
            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if ((w - teRight) < this._modalWidth) {
                return false;
            }
            else {
                return "right";
            }
        };
        ContextualHost.prototype._tryPosModalBottom = function () {
            var teBottom = window.innerHeight - this._targetElement.getBoundingClientRect().bottom;
            if (teBottom < this._modalHeight) {
                return false;
            }
            else {
                return "bottom";
            }
        };
        ContextualHost.prototype._tryPosModalTop = function () {
            var teTop = this._targetElement.getBoundingClientRect().top;
            if (teTop < this._modalHeight) {
                return false;
            }
            else {
                return "top";
            }
        };
        ContextualHost.prototype._copyModalToBody = function () {
            document.body.appendChild(this._container);
        };
        ContextualHost.prototype._saveModalSize = function () {
            var _modalStyles = window.getComputedStyle(this._container);
            this._container.setAttribute("style", "opacity: 0; z-index: -1");
            this._container.classList.add(MODAL_STATE_POSITIONED);
            this._container.classList.add(CONTEXT_STATE_CLASS);
            if (this._matchTargetWidth) {
                var teStyles = window.getComputedStyle(this._targetElement);
                this._modalWidth = this._targetElement.getBoundingClientRect().width
                    + (parseInt(teStyles.marginLeft, 10)
                        + parseInt(teStyles.marginLeft, 10));
            }
            else {
                this._modalWidth = this._container.getBoundingClientRect().width
                    + (parseInt(_modalStyles.marginLeft, 10)
                        + parseInt(_modalStyles.marginRight, 10));
                this._container.setAttribute("style", "");
            }
            this._modalHeight = this._container.getBoundingClientRect().height
                + (parseInt(_modalStyles.marginTop, 10)
                    + parseInt(_modalStyles.marginBottom, 10));
            this._container.classList.remove(MODAL_STATE_POSITIONED);
            this._container.classList.remove(CONTEXT_STATE_CLASS);
            this._teWidth = this._targetElement.getBoundingClientRect().width;
            this._teHeight = this._targetElement.getBoundingClientRect().height;
        };
        ContextualHost.prototype._dismissAction = function (e) {
            // If the element clicked is not INSIDE of contextualHost then close contextualHost
            if (!this._container.contains(e.target) && e.target !== this._container) {
                if (this._children !== undefined) {
                    var isChild_1 = false;
                    this._children.map(function (child) {
                        if (child !== undefined) {
                            isChild_1 = child.contains(e.target);
                        }
                    });
                    if (!isChild_1) {
                        this.disposeModal();
                    }
                }
                else {
                    this.disposeModal();
                }
            }
        };
        ContextualHost.prototype._setDismissClick = function () {
            document.addEventListener("click", this._dismissAction, true);
            document.addEventListener("keyup", this._handleKeyUpDismiss, true);
        };
        ContextualHost.prototype._handleKeyUpDismiss = function (e) {
            if (e.keyCode === 32 || e.keyCode === 27) {
                this._dismissAction(e);
            }
        };
        ContextualHost.prototype._resizeAction = function () {
            this.disposeModal();
        };
        ContextualHost.prototype._setResizeDisposal = function () {
            window.addEventListener("resize", this._resizeAction, false);
        };
        return ContextualHost;
    }());
    fabric.ContextualHost = ContextualHost;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../Button/Button.ts"/>
/// <reference path="../Button/IButton.ts"/>
/**
 * Callout
 *
 * Add callouts to things and stuff
 *
 */
/// <reference path="../ContextualHost/ContextualHost.ts"/>
var STATE_HIDDEN = "is-hidden";
var CLOSE_BUTTON_CLASS = ".ms-Callout-close";
var MODIFIER_OOBE_CLASS = "ms-Callout--OOBE";
var fabric;
(function (fabric) {
    "use strict";
    var Callout = (function () {
        function Callout(container, addTarget, position) {
            this._container = container;
            this._addTarget = addTarget;
            this._position = position;
            this._closeButton = document.querySelector(CLOSE_BUTTON_CLASS);
            this._setOpener();
        }
        Callout.prototype._setOpener = function () {
            this._addTarget.addEventListener("click", this._clickHandler.bind(this), true);
        };
        Callout.prototype._openContextMenu = function () {
            var modifiers = [];
            if (this._hasModifier(MODIFIER_OOBE_CLASS)) {
                modifiers.push("primaryArrow");
            }
            this._container.classList.remove(STATE_HIDDEN);
            this._contextualHost = new fabric.ContextualHost(this._container, this._position, this._addTarget, true, modifiers);
            if (this._closeButton) {
                this._closeButton.addEventListener("click", this._closeHandler.bind(this), false);
            }
        };
        Callout.prototype._hasModifier = function (modifierClass) {
            return this._container.classList.contains(modifierClass);
        };
        Callout.prototype._closeHandler = function (e) {
            this._contextualHost.disposeModal();
            this._closeButton.removeEventListener("click", this._closeHandler.bind(this), false);
            this._addTarget.removeEventListener("click", this._clickHandler.bind(this), true);
        };
        Callout.prototype._clickHandler = function (e) {
            this._openContextMenu();
        };
        return Callout;
    }());
    fabric.Callout = Callout;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
var fabric;
(function (fabric) {
    /**
     * CheckBox Plugin
     *
     * Adds basic demonstration functionality to .ms-CheckBox components.
     *
     */
    var CheckBox = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of CheckBox
         * @constructor
         */
        function CheckBox(container) {
            this._container = container;
            this._choiceField = this._container.querySelector(".ms-CheckBox-field");
            this._choiceInput = this._container.querySelector(".ms-CheckBox-input");
            if (this._choiceInput.checked) {
                this._choiceField.setAttribute("aria-checked", "true");
            }
            if (this._choiceField.getAttribute("aria-checked") === "true") {
                this._choiceField.classList.add("is-checked");
            }
            this._addListeners();
        }
        CheckBox.prototype.getValue = function () {
            return this._choiceField.getAttribute("aria-checked") === "true" ? true : false;
        };
        CheckBox.prototype.toggle = function () {
            if (this.getValue()) {
                this.unCheck();
            }
            else {
                this.check();
            }
            this._choiceInput.click();
        };
        CheckBox.prototype.check = function () {
            this._choiceField.setAttribute("aria-checked", "true");
            this._choiceField.classList.add("is-checked");
        };
        CheckBox.prototype.unCheck = function () {
            this._choiceField.setAttribute("aria-checked", "false");
            this._choiceField.classList.remove("is-checked");
        };
        CheckBox.prototype.removeListeners = function () {
            this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this));
            this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this));
            this._choiceField.removeEventListener("click", this._ClickHandler.bind(this));
            this._choiceField.removeEventListener("keydown", this._KeydownHandler.bind(this));
        };
        CheckBox.prototype._addListeners = function (events) {
            var ignore = events && events.ignore;
            if (!ignore || !(ignore.indexOf("focus") > -1)) {
                this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), false);
            }
            if (!ignore || !(ignore.indexOf("blur") > -1)) {
                this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), false);
            }
            if (!ignore || !(ignore.indexOf("click") > -1)) {
                this._choiceField.addEventListener("click", this._ClickHandler.bind(this), false);
            }
            if (!ignore || !(ignore.indexOf("keydown") > -1)) {
                this._choiceField.addEventListener("keydown", this._KeydownHandler.bind(this), false);
            }
        };
        CheckBox.prototype._FocusHandler = function () {
            this._choiceField.classList.add("in-focus");
        };
        CheckBox.prototype._BlurHandler = function () {
            this._choiceField.classList.remove("in-focus");
        };
        CheckBox.prototype._ClickHandler = function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (!this._choiceField.classList.contains("is-disabled")) {
                this.toggle();
            }
        };
        CheckBox.prototype._KeydownHandler = function (event) {
            if (event.keyCode === 32) {
                event.stopPropagation();
                event.preventDefault();
                if (!this._choiceField.classList.contains("is-disabled")) {
                    this.toggle();
                }
            }
        };
        return CheckBox;
    }());
    fabric.CheckBox = CheckBox;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../CheckBox/CheckBox.ts"/>
"use strict";
var fabric;
(function (fabric) {
    /**
     * RadioButton Plugin
     *
     * Adds basic demonstration functionality to .ms-RadioButton components.
     *
     */
    var RadioButton = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of RadioButton
         * @constructor
         */
        function RadioButton(container) {
            this._container = container;
            this._choiceField = this._container.querySelector(".ms-RadioButton-field");
            this._choiceInput = this._container.querySelector(".ms-RadioButton-input");
            if (this._choiceField.getAttribute("aria-checked") === "true") {
                this._choiceField.classList.add("is-checked");
            }
            this._addListeners();
        }
        RadioButton.prototype.getValue = function () {
            return this._choiceField.getAttribute("aria-checked") === "true" ? true : false;
        };
        RadioButton.prototype.toggle = function () {
            if (this.getValue()) {
                this.unCheck();
            }
            else {
                this.check();
            }
        };
        RadioButton.prototype.check = function () {
            this._choiceField.setAttribute("aria-checked", "true");
            this._choiceField.classList.add("is-checked");
            this._choiceInput.checked = true;
        };
        RadioButton.prototype.unCheck = function () {
            this._choiceField.setAttribute("aria-checked", "false");
            this._choiceField.classList.remove("is-checked");
            this._choiceInput.checked = false;
        };
        RadioButton.prototype.removeListeners = function () {
            this._choiceField.removeEventListener("focus", this._FocusHandler.bind(this));
            this._choiceField.removeEventListener("blur", this._BlurHandler.bind(this));
            this._choiceField.removeEventListener("click", this._RadioClickHandler.bind(this));
            this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this));
        };
        RadioButton.prototype._addListeners = function () {
            this._choiceField.addEventListener("focus", this._FocusHandler.bind(this), false);
            this._choiceField.addEventListener("blur", this._BlurHandler.bind(this), false);
            this._choiceField.addEventListener("click", this._RadioClickHandler.bind(this), false);
            this._choiceField.addEventListener("keydown", this._RadioKeydownHandler.bind(this), false);
        };
        RadioButton.prototype._RadioClickHandler = function (event) {
            event.stopPropagation();
            event.preventDefault();
            if (!this._choiceField.classList.contains("is-disabled")) {
                this._dispatchSelectEvent();
            }
        };
        RadioButton.prototype._dispatchSelectEvent = function () {
            var objDict = {
                bubbles: true,
                cancelable: true,
                detail: {
                    name: this._choiceField.getAttribute("name"),
                    item: this
                }
            };
            this._choiceField.dispatchEvent(new CustomEvent("msChoicefield", objDict));
        };
        RadioButton.prototype._RadioKeydownHandler = function (event) {
            if (event.keyCode === 32) {
                event.stopPropagation();
                event.preventDefault();
                if (!this._choiceField.classList.contains("is-disabled")) {
                    this._dispatchSelectEvent();
                }
            }
        };
        RadioButton.prototype._FocusHandler = function () {
            this._choiceField.classList.add("in-focus");
        };
        RadioButton.prototype._BlurHandler = function () {
            this._choiceField.classList.remove("in-focus");
        };
        return RadioButton;
    }());
    fabric.RadioButton = RadioButton;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../RadioButton/RadioButton.ts"/>
"use strict";
var fabric;
(function (fabric) {
    /**
     * ChoiceFieldGroup Plugin
     *
     * Adds basic demonstration functionality to .ms-ChoiceFieldGroup components.
     *
    */
    var ChoiceFieldGroup = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of ChoiceFieldGroup
         * @constructor
         */
        function ChoiceFieldGroup(container) {
            this._choiceFieldGroup = container;
            this._choiceFieldComponents = [];
            this._initalSetup();
            this._addListeners();
        }
        ChoiceFieldGroup.prototype.removeListeners = function () {
            this._choiceFieldGroup.removeEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this));
        };
        ChoiceFieldGroup.prototype._initalSetup = function () {
            var choiceFieldElements = this._choiceFieldGroup.querySelectorAll(".ms-RadioButton");
            for (var i = 0; i < choiceFieldElements.length; i++) {
                this._choiceFieldComponents[i] = new fabric.RadioButton(choiceFieldElements[i]);
            }
        };
        ChoiceFieldGroup.prototype._addListeners = function () {
            document.addEventListener("msChoicefield", this._ChoiceFieldHandler.bind(this), false);
        };
        ChoiceFieldGroup.prototype._ChoiceFieldHandler = function (event) {
            var name = event.detail.name;
            var selectedChoice = event.detail.item;
            if (this._choiceFieldGroup.id === name) {
                for (var i = 0; i < this._choiceFieldComponents.length; i++) {
                    this._choiceFieldComponents[i].unCheck();
                }
                selectedChoice.check();
            }
        };
        return ChoiceFieldGroup;
    }());
    fabric.ChoiceFieldGroup = ChoiceFieldGroup;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../ContextualHost/ContextualHost.ts"/>
/**
 * CommandButton
 *
 * Buttons used primarily in the command bar
 *
 */
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    /**
     *
     * @constructor
     */
    var CONTEXT_CLASS = ".ms-ContextualMenu";
    var CB_SPLIT_CLASS = ".ms-CommandButton-splitIcon";
    var CB_BUTTON_CLASS = ".ms-CommandButton-button";
    var MODAL_POSITION = "bottom";
    var CommandButton = (function () {
        function CommandButton(container, contextMenu) {
            this._container = container;
            this._command = this._container;
            this._commandButton = this._command.querySelector(CB_BUTTON_CLASS);
            this._splitButton = this._command.querySelector(CB_SPLIT_CLASS);
            if (contextMenu) {
                this._contextualMenu = contextMenu;
            }
            else {
                this._contextualMenu = this._container.querySelector(CONTEXT_CLASS);
            }
            this._checkForMenu();
        }
        CommandButton.prototype._createModalHostView = function () {
            this._modalHostView = new fabric.ContextualHost(this._contextualMenu, MODAL_POSITION, this._command, false);
        };
        CommandButton.prototype._setClick = function () {
            if (this._splitButton) {
                this._splitButton.addEventListener("click", this._createModalHostView.bind(this), false);
            }
            else {
                this._commandButton.addEventListener("click", this._createModalHostView.bind(this), false);
            }
        };
        CommandButton.prototype._checkForMenu = function () {
            if (this._contextualMenu) {
                this._setClick();
            }
        };
        return CommandButton;
    }());
    fabric.CommandButton = CommandButton;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * SearchBox component
 *
 * Allows you to search the world.
 *
 */
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    /**
     *
     * @param {HTMLElement} container - the target container for an instance of SearchBox
     * @constructor
     *
     */
    var SB_FIELD = ".ms-SearchBox-field";
    var SB_CLEAR_BUTTON = ".ms-SearchBox-clear";
    var SB_EXIT_BUTTON = ".ms-SearchBox-exit";
    var SB_HAS_TEXT = "has-text";
    var SB_IS_ACTIVE = "is-active";
    var SB_IS_ANIMATED = "is-animated";
    var SearchBox = (function () {
        function SearchBox(container) {
            var _this = this;
            this._container = container;
            this._saveDOMRefs(this._container);
            this._boundExpandSearchHandler = this._expandSearchHandler.bind(this);
            this._boundEnableClose = this._enableClose.bind(this);
            this._boundCollapseSearchBox = this._collapseSearchBox.bind(this);
            this._boundClearSearchBox = this._clearSearchBox.bind(this);
            this._boundHandleBlur = this._handleBlur.bind(this);
            this._boundExitSearchBox = this._exitSearchBox.bind(this);
            this._setHasText();
            this._setFocusAction(this._container);
            this._setClearButtonAction();
            this._setBlurAction();
            this._clearOnly = false;
            setTimeout(function () {
                _this._checkState();
                _this._addAnimation();
            }, 10);
        }
        SearchBox.prototype.setCollapsedListeners = function () {
            this._disposeListeners();
            this._searchBox.addEventListener("click", this._boundExpandSearchHandler, false);
            this._searchBoxField.addEventListener("focus", this._boundExpandSearchHandler, true);
        };
        SearchBox.prototype.getInputField = function () {
            return this._searchBoxField;
        };
        SearchBox.prototype._saveDOMRefs = function (context) {
            this._searchBox = context;
            this._searchBoxField = this._searchBox.querySelector(SB_FIELD);
            this._searchBoxClearButton = this._searchBox.querySelector(SB_CLEAR_BUTTON);
            this._searchBoxExitButton = this._searchBox.querySelector(SB_EXIT_BUTTON);
        };
        SearchBox.prototype._disposeListeners = function () {
            this._searchBox.removeEventListener("click", this._boundExpandSearchHandler);
            this._searchBoxField.removeEventListener("focus", this._boundExpandSearchHandler);
        };
        SearchBox.prototype._exitSearchBox = function (event) {
            event.stopPropagation();
            event.target.blur();
            this._clearSearchBox();
            this._collapseSearchBox();
            this._searchBox.removeEventListener("keyup", this._boundEnableClose);
            this.setCollapsedListeners();
        };
        SearchBox.prototype._collapseSearchBox = function () {
            this._searchBox.classList.remove("is-active");
            var event = document.createEvent("Event");
            event.initEvent("searchCollapse", true, true);
            this._searchBoxField.dispatchEvent(event);
        };
        SearchBox.prototype._expandSearchHandler = function () {
            this._disposeListeners();
            this._searchBox.classList.add("is-active");
            this._searchBoxField.focus();
        };
        SearchBox.prototype._enableClose = function () {
            this._setHasText();
        };
        SearchBox.prototype._setHasText = function () {
            if (this._searchBoxField.value.length > 0) {
                this._searchBox.classList.add(SB_HAS_TEXT);
            }
            else {
                this._searchBox.classList.remove(SB_HAS_TEXT);
            }
        };
        SearchBox.prototype._setFocusAction = function (context) {
            var _this = this;
            this._searchBoxField.addEventListener("focus", function () {
                _this._setHasText();
                _this._searchBox.addEventListener("keyup", _this._boundEnableClose, false);
                _this._searchBox.classList.add(SB_IS_ACTIVE);
                _this._searchBox.classList.add(SB_IS_ACTIVE);
            }, true);
        };
        SearchBox.prototype._clearSearchBox = function (event) {
            var _this = this;
            this._clearOnly = true;
            this._searchBoxField.value = "";
            this._setHasText();
            setTimeout(function () {
                _this._clearOnly = false;
            }, 10);
        };
        SearchBox.prototype._setClearButtonAction = function () {
            var _this = this;
            if (this._searchBoxExitButton) {
                this._searchBoxExitButton.addEventListener("click", this._boundExitSearchBox, false);
            }
            this._searchBoxClearButton.addEventListener("mousedown", this._boundClearSearchBox, false);
            this._searchBoxClearButton.addEventListener("keydown", function (e) {
                var keyCode = e.keyCode;
                if (keyCode === 13) {
                    _this._clearSearchBox(e);
                }
            }, false);
        };
        SearchBox.prototype._handleBlur = function (event) {
            var _this = this;
            if (!this._clearOnly) {
                this._searchBox.removeEventListener("keyup", this._boundEnableClose);
                setTimeout(function () {
                    if (!_this._searchBox.contains(document.activeElement)) {
                        _this._clearSearchBox();
                        _this._collapseSearchBox();
                        _this.setCollapsedListeners();
                    }
                }, 10);
            }
            else {
                this._searchBoxField.focus();
            }
            this._clearOnly = false;
        };
        SearchBox.prototype._setBlurAction = function () {
            this._searchBoxField.addEventListener("blur", this._boundHandleBlur, true);
            this._searchBoxClearButton.addEventListener("blur", this._boundHandleBlur, true);
        };
        SearchBox.prototype._checkState = function () {
            if (this._searchBox.classList.contains("is-collapsed")) {
                this.setCollapsedListeners();
            }
        };
        SearchBox.prototype._addAnimation = function () {
            this._container.classList.add(SB_IS_ANIMATED);
        };
        return SearchBox;
    }());
    fabric.SearchBox = SearchBox;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../SearchBox/SearchBox.ts"/>
/// <reference path="../CommandButton/CommandButton.ts"/>
/// <reference path="../ContextualHost/ContextualHost.ts"/>
/**
 * CommandBar
 *
 * Commanding and navigational surface
 *
 */
var fabric;
(function (fabric) {
    "use strict";
    var CONTEXTUAL_MENU = ".ms-ContextualMenu";
    var CONTEXTUAL_MENU_ITEM = ".ms-ContextualMenu-item";
    var CONTEXTUAL_MENU_LINK = ".ms-ContextualMenu-link";
    var CB_SEARCH_BOX = ".ms-SearchBox";
    var CB_MAIN_AREA = ".ms-CommandBar-mainArea";
    var CB_SIDE_COMMAND_AREA = ".ms-CommandBar-sideCommands";
    var CB_ITEM_OVERFLOW = ".ms-CommandBar-overflowButton";
    var CB_NO_LABEL_CLASS = "ms-CommandButton--noLabel";
    var SEARCH_BOX_CLOSE = ".ms-SearchBox-closeField";
    var COMMAND_BUTTON = ".ms-CommandButton";
    var COMMAND_BUTTON_LABEL = ".ms-CommandButton-label";
    var ICON = ".ms-Icon";
    var OVERFLOW_WIDTH = 40;
    var OVERFLOW_LEFT_RIGHT_PADDING = 30;
    var CommandBar = (function () {
        function CommandBar(container) {
            this.responsiveSizes = {
                "sm-min": 320,
                "md-min": 480,
                "lg-min": 640,
                "xl-min": 1024,
                "xxl-min": 1366,
                "xxxl-min": 1920
            };
            this.visibleCommands = [];
            this.commandWidths = [];
            this.overflowCommands = [];
            this.itemCollection = [];
            this._sideAreaCollection = [];
            this.breakpoint = "sm";
            this._container = container;
            this.responsiveSizes["sm-max"] = this.responsiveSizes["md-min"] - 1;
            this.responsiveSizes["md-max"] = this.responsiveSizes["lg-min"] - 1;
            this.responsiveSizes["lg-max"] = this.responsiveSizes["xl-min"] - 1;
            this.responsiveSizes["xl-max"] = this.responsiveSizes["xxl-min"] - 1;
            this.responsiveSizes["xxl-max"] = this.responsiveSizes["xxxl-min"] - 1;
            this._setElements();
            this._setBreakpoint();
            // If the overflow exists then run the overflow resizing
            if (this._elements.overflowCommand) {
                this._initOverflow();
            }
            this._setUIState();
        }
        CommandBar.prototype._runsSearchBox = function (state) {
            if (state === void 0) { state = "add"; }
            this._changeSearchState("is-collapsed", state);
        };
        CommandBar.prototype._runOverflow = function () {
            if (this._elements.overflowCommand) {
                this._saveCommandWidths();
                this._redrawMenu();
                this._updateCommands();
                this._drawCommands();
                this._checkOverflow();
            }
        };
        CommandBar.prototype._initOverflow = function () {
            this._createContextualRef();
            this._createItemCollection(this.itemCollection, CB_MAIN_AREA);
            this._createItemCollection(this._sideAreaCollection, CB_SIDE_COMMAND_AREA);
            this._saveCommandWidths();
            this._updateCommands();
            this._drawCommands();
            this._setWindowEvent();
            this._checkOverflow();
        };
        CommandBar.prototype._hasClass = function (element, cls) {
            return (" " + element.className + " ").indexOf(" " + cls + " ") > -1;
        };
        CommandBar.prototype._onSearchExpand = function () {
            if (this.breakpoint === "lg") {
                this._container.classList.add("search-expanded");
                this._doResize();
            }
        };
        CommandBar.prototype._onSearchCollapse = function () {
            if (this.breakpoint === "lg") {
                this._container.classList.remove("search-expanded");
                this._doResize();
            }
        };
        CommandBar.prototype._getScreenSize = function () {
            // First we need to set what the screen is doing, check screen size
            var w = window;
            var wSize = {
                x: 0,
                y: 0
            };
            var d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
            wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;
            wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;
            return wSize;
        };
        CommandBar.prototype._setBreakpoint = function () {
            var screenSize = this._getScreenSize().x;
            switch (true) {
                case (screenSize <= this.responsiveSizes["sm-max"]):
                    this.breakpoint = "sm";
                    break;
                case (screenSize >= this.responsiveSizes["md-min"] && screenSize <= this.responsiveSizes["md-max"]):
                    this.breakpoint = "md";
                    break;
                case (screenSize >= this.responsiveSizes["lg-min"] && screenSize <= this.responsiveSizes["lg-max"]):
                    this.breakpoint = "lg";
                    break;
                case (screenSize >= this.responsiveSizes["xl-min"] && screenSize <= this.responsiveSizes["xl-max"]):
                    this.breakpoint = "xl";
                    break;
                case (screenSize >= this.responsiveSizes["xxl-min"] && screenSize <= this.responsiveSizes["xxl-max"]):
                    this.breakpoint = "xxl";
                    break;
                case (screenSize >= this.responsiveSizes["xxxl-min"]):
                    this.breakpoint = "xxxl";
                    break;
            }
        };
        CommandBar.prototype._createSearchInstance = function () {
            if (this._elements.searchBox) {
                return new fabric.SearchBox(this._elements.searchBox);
            }
            else {
                return false;
            }
        };
        CommandBar.prototype._changeSearchState = function (state, action) {
            if (this._elements.searchBox) {
                switch (action) {
                    case "remove":
                        this._elements.searchBox.classList.remove(state);
                        break;
                    case "add":
                        this._elements.searchBox.classList.add(state);
                        break;
                    default:
                        break;
                }
            }
        };
        CommandBar.prototype._setElements = function () {
            var _this = this;
            this._elements = {
                mainArea: this._container.querySelector(CB_MAIN_AREA)
            };
            if (this._container.querySelector(CB_SIDE_COMMAND_AREA)) {
                this._elements.sideCommandArea = this._container.querySelector(CB_SIDE_COMMAND_AREA);
            }
            if (this._container.querySelector(CB_ITEM_OVERFLOW)) {
                this._elements.overflowCommand = this._container.querySelector(CB_ITEM_OVERFLOW);
                this._elements.contextMenu = this._container.querySelector(CB_ITEM_OVERFLOW).querySelector(CONTEXTUAL_MENU);
            }
            if (this._container.querySelector(CB_MAIN_AREA + " " + CB_SEARCH_BOX)) {
                this._elements.searchBox = this._container.querySelector(CB_MAIN_AREA + " " + CB_SEARCH_BOX);
                this._elements.searchBoxClose = this._container.querySelector(SEARCH_BOX_CLOSE);
                this.searchBoxInstance = this._createSearchInstance();
                this.searchBoxInstance.getInputField().addEventListener("focus", function () { _this._onSearchExpand(); }, false);
                this.searchBoxInstance.getInputField().addEventListener("searchCollapse", function () { _this._onSearchCollapse(); }, false);
            }
        };
        CommandBar.prototype._createItemCollection = function (iCollection, areaClass) {
            var item, label, iconClasses, splitClasses, items = this._container.querySelectorAll(areaClass + " > " + COMMAND_BUTTON + ":not(" + CB_ITEM_OVERFLOW + ")");
            // Initiate the overflow command
            this._commandButtonInstance = new fabric.CommandButton(this._elements.overflowCommand);
            for (var i = 0; i < items.length; i++) {
                item = items[i];
                label = item.querySelector(COMMAND_BUTTON_LABEL).textContent;
                var icon = item.querySelector(ICON);
                if (icon) {
                    iconClasses = icon.className;
                    splitClasses = iconClasses.split(" ");
                    for (var o = 0; o < splitClasses.length; o++) {
                        if (splitClasses[o].indexOf(ICON.replace(".", "") + "--") > -1) {
                            icon = splitClasses[o];
                            break;
                        }
                    }
                }
                iCollection.push({
                    item: item,
                    label: label,
                    icon: icon,
                    isCollapsed: (item.classList.contains(CB_NO_LABEL_CLASS)) ? true : false,
                    commandButtonRef: new fabric.CommandButton(item)
                });
            }
            return;
        };
        CommandBar.prototype._createContextualRef = function () {
            this.contextualItemContainerRef = this._elements.contextMenu.querySelector(CONTEXTUAL_MENU_ITEM).cloneNode(true);
            this.contextualItemLink = this._elements.contextMenu.querySelector(CONTEXTUAL_MENU_LINK).cloneNode(false);
            this.contextualItemIcon = this._elements.contextMenu.querySelector(".ms-Icon").cloneNode(false);
            this._elements.contextMenu.innerHTML = "";
        };
        CommandBar.prototype._getElementWidth = function (element) {
            var width, styles;
            if (element.offsetParent === null) {
                element.setAttribute("style", "position: absolute; opacity: 0; display: block;");
            }
            width = element.getBoundingClientRect().width;
            styles = window.getComputedStyle(element);
            width += parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
            element.setAttribute("style", "");
            return width;
        };
        CommandBar.prototype._saveCommandWidths = function () {
            for (var i = 0; i < this.itemCollection.length; i++) {
                var item = this.itemCollection[i].item;
                var width = this._getElementWidth(item);
                this.commandWidths[i] = width;
            }
        };
        CommandBar.prototype._updateCommands = function () {
            var searchCommandWidth = 0;
            var mainAreaWidth = this._elements.mainArea.getBoundingClientRect().width;
            if (this._elements.searchBox) {
                searchCommandWidth = this._getElementWidth(this._elements.searchBox);
            }
            var offset = searchCommandWidth + OVERFLOW_WIDTH + OVERFLOW_LEFT_RIGHT_PADDING;
            var totalAreaWidth = mainAreaWidth - offset; // Start with searchbox width
            // Reset overflow and visible
            this.visibleCommands = [];
            this.overflowCommands = [];
            var totalWidths = 0;
            for (var i = 0; i < this.itemCollection.length; i++) {
                totalWidths += this.commandWidths[i];
                if (totalWidths < totalAreaWidth) {
                    this.visibleCommands.push(this.itemCollection[i]);
                }
                else {
                    this.overflowCommands.push(this.itemCollection[i]);
                }
            }
        };
        CommandBar.prototype._drawCommands = function () {
            // Remove existing commands
            this._elements.contextMenu.innerHTML = "";
            for (var i = 0; i < this.overflowCommands.length; i++) {
                this.overflowCommands[i].item.classList.add("is-hidden");
                // Add all items to contextual menu.
                var newCItem = this.contextualItemContainerRef.cloneNode(false);
                var newClink = this.contextualItemLink.cloneNode(false);
                var iconClass = this.overflowCommands[i].icon;
                newClink.innerText = this.overflowCommands[i].label;
                newCItem.appendChild(newClink);
                if (iconClass) {
                    var newIcon = this.contextualItemIcon.cloneNode(false);
                    newIcon.className = ICON.replace(".", "") + " " + iconClass;
                    newCItem.appendChild(newIcon);
                }
                this._elements.contextMenu.appendChild(newCItem);
            }
            // Show visible commands
            for (var x = 0; x < this.visibleCommands.length; x++) {
                this.visibleCommands[x].item.classList.remove("is-hidden");
            }
        };
        CommandBar.prototype._setWindowEvent = function () {
            var _this = this;
            window.addEventListener("resize", function () {
                _this._doResize();
            }, false);
        };
        CommandBar.prototype._processCollapsedClasses = function (type) {
            for (var i = 0; i < this.itemCollection.length; i++) {
                var thisItem = this.itemCollection[i];
                if (!thisItem.isCollapsed) {
                    if (type === "add") {
                        thisItem.item.classList.add(CB_NO_LABEL_CLASS);
                    }
                    else {
                        thisItem.item.classList.remove(CB_NO_LABEL_CLASS);
                    }
                }
            }
            for (var i = 0; i < this._sideAreaCollection.length; i++) {
                var thisItem = this._sideAreaCollection[i];
                if (!thisItem.isCollapsed) {
                    if (type === "add") {
                        thisItem.item.classList.add(CB_NO_LABEL_CLASS);
                    }
                    else {
                        thisItem.item.classList.remove(CB_NO_LABEL_CLASS);
                    }
                }
            }
        };
        CommandBar.prototype._setUIState = function () {
            switch (this.breakpoint) {
                case "sm":
                    this._runsSearchBox();
                    this._processCollapsedClasses("add");
                    this._runOverflow();
                    break;
                case "md":
                    this._runsSearchBox();
                    // Add collapsed classes to commands
                    this._processCollapsedClasses("add");
                    this._runOverflow();
                    break;
                case "lg":
                    this._runsSearchBox();
                    this._processCollapsedClasses("remove");
                    this._runOverflow();
                    break;
                case "xl":
                    this._runsSearchBox("remove");
                    this._processCollapsedClasses("remove");
                    this._runOverflow();
                    break;
                default:
                    this._runsSearchBox("remove");
                    this._processCollapsedClasses("remove");
                    this._runOverflow();
                    break;
            }
        };
        CommandBar.prototype._checkOverflow = function () {
            if (this.overflowCommands.length > 0) {
                this._elements.overflowCommand.classList.remove("is-hidden");
            }
            else {
                this._elements.overflowCommand.classList.add("is-hidden");
                if (this.activeCommand === this._elements.overflowCommand) {
                    this._elements.contextMenu.classList.remove("is-open");
                }
            }
        };
        CommandBar.prototype._redrawMenu = function () {
            var left;
            if (this._hasClass(this._elements.contextMenu, "is-open")) {
                left = this.activeCommand.getBoundingClientRect().left;
                this._drawOverflowMenu(left);
            }
        };
        CommandBar.prototype._drawOverflowMenu = function (left) {
            this._elements.contextMenu.setAttribute("style", "left: " + left + "px; transform: translateX(-50%)");
        };
        CommandBar.prototype._doResize = function () {
            this._setBreakpoint();
            this._setUIState();
        };
        return CommandBar;
    }());
    fabric.CommandBar = CommandBar;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../ContextualHost/ContextualHost.ts"/>
/// <reference path="../Button/Button.ts"/>
var fabric;
(function (fabric) {
    var MODAL_POSITION = "bottom";
    var SUBMENU_POSITION = "right";
    var ContextualMenu = (function () {
        function ContextualMenu(container, hostTarget, position) {
            this._container = container;
            this._hostTarget = hostTarget;
            this._position = position ? position : MODAL_POSITION;
            this._isOpen = false;
            this._setOpener(hostTarget);
            this._init();
        }
        ContextualMenu.prototype.getHost = function () {
            return this._host;
        };
        ContextualMenu.prototype._init = function () {
            this._container.addEventListener("click", this._onContextualMenuClick.bind(this), true);
            document.addEventListener("click", this._onDocumentClick.bind(this), false);
        };
        ContextualMenu.prototype._onDocumentClick = function (event) {
            var target = event.target;
            var classList = target.classList;
            if (!this._hostTarget.contains(target) && !classList.contains("ms-ContextualMenu-link")) {
                this._isOpen = false;
            }
        };
        ContextualMenu.prototype._onContextualMenuClick = function (event) {
            var target = event.target;
            var classList = target.classList;
            if (classList.contains("ms-ContextualMenu-link") && !classList.contains("is-disabled")) {
                if (this._container.classList.contains("ms-ContextualMenu--multiselect")) {
                    this._multiSelect(target);
                }
                else {
                    this._singleSelect(target);
                    if (!target.parentElement.classList.contains("ms-ContextualMenu-item--hasMenu")) {
                        this._host.disposeModal();
                        this._isOpen = false;
                    }
                }
            }
        };
        ContextualMenu.prototype._multiSelect = function (target) {
            if (target.classList.contains("is-selected")) {
                target.classList.remove("is-selected");
            }
            else {
                target.classList.add("is-selected");
            }
        };
        ContextualMenu.prototype._singleSelect = function (target) {
            var selecteds = this._container.querySelectorAll(".is-selected");
            var i = selecteds.length;
            while (i--) {
                selecteds[i].classList.remove("is-selected");
            }
            target.classList.add("is-selected");
        };
        ContextualMenu.prototype._toggleMenu = function (event) {
            (!this._isOpen) ? this._openContextMenu(event) : this._host.disposeModal();
            this._isOpen = !this._isOpen;
        };
        ContextualMenu.prototype._setOpener = function (hostTarget) {
            var _this = this;
            hostTarget.addEventListener("click", function (event) {
                event.preventDefault();
                _this._toggleMenu(event);
            });
        };
        ContextualMenu.prototype._openContextMenu = function (event) {
            this._createModalHostView(this._container, this._position, this._hostTarget);
            this._checkForSubmenus(this._container);
        };
        ContextualMenu.prototype._checkForSubmenus = function (container) {
            var _this = this;
            var submenus = container.querySelectorAll(".ms-ContextualMenu-item.ms-ContextualMenu-item--hasMenu");
            var i = submenus.length;
            if (submenus.length) {
                var _loop_1 = function() {
                    var button = submenus[i].querySelector(".ms-ContextualMenu-link");
                    var menu = submenus[i].querySelector(".ms-ContextualMenu");
                    if (menu) {
                        var contextualMenu_1 = new fabric.ContextualMenu(menu, button, SUBMENU_POSITION);
                        menu.addEventListener("hostAdded", function () {
                            _this._host.setChildren(contextualMenu_1.getHost());
                        });
                    }
                };
                while (i--) {
                    _loop_1();
                }
            }
        };
        ContextualMenu.prototype._createModalHostView = function (container, position, hostTarget) {
            container.classList.remove("is-hidden");
            this._host = new fabric.ContextualHost(container, position, hostTarget, false);
            var event = document.createEvent("Event");
            event.initEvent("hostAdded", true, true);
            container.dispatchEvent(event);
        };
        return ContextualMenu;
    }());
    fabric.ContextualMenu = ContextualMenu;
})(fabric || (fabric = {}));

"use strict";

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// @TODO - we can add this once jquery is removed
// "use strict";
/// <reference path="../../../typings/jquery.d.ts"/>
/// <reference path="../../../typings/pickadate.d.ts"/>
var fabric;
(function (fabric) {
    /**
     * DatePicker Plugin
     */
    var DatePicker = (function () {
        function DatePicker(container, options) {
            var _this = this;
            /** Set up letiables and run the Pickadate plugin. */
            var $datePicker = $(container);
            var $dateField = $datePicker.find(".ms-TextField-field").pickadate($.extend({
                // Strings and translations.
                weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
                // Don't render the buttons
                clear: "",
                close: "",
                today: "",
                // Events
                onStart: function () {
                    _this.initCustomView($datePicker);
                },
                // Classes
                klass: {
                    // The element states
                    input: "ms-DatePicker-input",
                    active: "ms-DatePicker-input--active",
                    // The root picker and states
                    picker: "ms-DatePicker-picker",
                    opened: "ms-DatePicker-picker--opened",
                    focused: "ms-DatePicker-picker--focused",
                    // The picker holder
                    holder: "ms-DatePicker-holder",
                    // The picker frame, wrapper, and box
                    frame: "ms-DatePicker-frame",
                    wrap: "ms-DatePicker-wrap",
                    box: "ms-DatePicker-dayPicker",
                    // The picker header
                    header: "ms-DatePicker-header",
                    // Month & year labels
                    month: "ms-DatePicker-month",
                    year: "ms-DatePicker-year",
                    // Table of dates
                    table: "ms-DatePicker-table",
                    // Weekday labels
                    weekdays: "ms-DatePicker-weekday",
                    // Day states
                    day: "ms-DatePicker-day",
                    disabled: "ms-DatePicker-day--disabled",
                    selected: "ms-DatePicker-day--selected",
                    highlighted: "ms-DatePicker-day--highlighted",
                    now: "ms-DatePicker-day--today",
                    infocus: "ms-DatePicker-day--infocus",
                    outfocus: "ms-DatePicker-day--outfocus"
                }
            }, options || {}));
            var $picker = $dateField.pickadate("picker");
            this.picker = $picker;
            /** Respond to built-in picker events. */
            $picker.on({
                render: function () {
                    _this.updateCustomView($datePicker);
                }
            });
        }
        /**
         * After the Pickadate plugin starts, this function
         * adds additional controls to the picker view.
         */
        DatePicker.prototype.initCustomView = function ($datePicker) {
            var _this = this;
            /** Get some letiables ready. */
            var $monthControls = $datePicker.find(".ms-DatePicker-monthComponents");
            var $goToday = $datePicker.find(".ms-DatePicker-goToday");
            var $monthPicker = $datePicker.find(".ms-DatePicker-monthPicker");
            var $yearPicker = $datePicker.find(".ms-DatePicker-yearPicker");
            var $pickerWrapper = $datePicker.find(".ms-DatePicker-wrap");
            var $picker = $datePicker.find(".ms-TextField-field").pickadate("picker");
            /** Move the month picker into position. */
            $monthControls.appendTo($pickerWrapper);
            $goToday.appendTo($pickerWrapper);
            $monthPicker.appendTo($pickerWrapper);
            $yearPicker.appendTo($pickerWrapper);
            /** Update the custom view. */
            this.updateCustomView($datePicker);
            /** dispatch click on document so anything listening can be notified */
            $picker.on("open", function (e) {
                var evt = document.createEvent("MouseEvents");
                evt.initEvent("click", true, true);
                document.dispatchEvent(evt);
            });
            /** Move back one month. */
            $monthControls.on("click", ".js-prevMonth", function (event) {
                event.preventDefault();
                var newMonth = $picker.get("highlight").month - 1;
                _this.changeHighlightedDate([null, newMonth, null]);
            });
            /** Move ahead one month. */
            $monthControls.on("click", ".js-nextMonth", function (event) {
                event.preventDefault();
                var newMonth = $picker.get("highlight").month + 1;
                _this.changeHighlightedDate([null, newMonth, null]);
            });
            /** Move back one year. */
            $monthPicker.on("click", ".js-prevYear", function (event) {
                event.preventDefault();
                var newYear = $picker.get("highlight").year - 1;
                _this.changeHighlightedDate([newYear, null, null]);
            });
            /** Move ahead one year. */
            $monthPicker.on("click", ".js-nextYear", function (event) {
                event.preventDefault();
                var newYear = $picker.get("highlight").year + 1;
                _this.changeHighlightedDate([newYear, null, null]);
            });
            /** Move back one decade. */
            $yearPicker.on("click", ".js-prevDecade", function (event) {
                event.preventDefault();
                var newYear = $picker.get("highlight").year - 10;
                _this.changeHighlightedDate([newYear, null, null]);
            });
            /** Move ahead one decade. */
            $yearPicker.on("click", ".js-nextDecade", function (event) {
                event.preventDefault();
                var newYear = $picker.get("highlight").year + 10;
                _this.changeHighlightedDate([newYear, null, null]);
            });
            /** Go to the current date, shown in the day picking view. */
            $goToday.click(function (event) {
                event.preventDefault();
                /** Select the current date, while keeping the picker open. */
                var now = new Date();
                $picker.set("select", [now.getFullYear(), now.getMonth(), now.getDate()]);
                /** Switch to the default (calendar) view. */
                $datePicker.removeClass("is-pickingMonths").removeClass("is-pickingYears");
            });
            /** Change the highlighted month. */
            $monthPicker.on("click", ".js-changeDate", function (event) {
                event.preventDefault();
                var $changeDate = $(event.target);
                /** Get the requested date from the data attributes. */
                var newYear = $changeDate.attr("data-year");
                var newMonth = $changeDate.attr("data-month");
                var newDay = $changeDate.attr("data-day");
                /** Update the date. */
                _this.changeHighlightedDate([newYear, newMonth, newDay]);
                /** If we"ve been in the "picking months" state on mobile, remove that state so we show the calendar again. */
                if ($datePicker.hasClass("is-pickingMonths")) {
                    $datePicker.removeClass("is-pickingMonths");
                }
            });
            /** Change the highlighted year. */
            $yearPicker.on("click", ".js-changeDate", function (event) {
                event.preventDefault();
                var $changeDate = $(event.target);
                /** Get the requested date from the data attributes. */
                var newYear = $changeDate.attr("data-year");
                var newMonth = $changeDate.attr("data-month");
                var newDay = $changeDate.attr("data-day");
                /** Update the date. */
                _this.changeHighlightedDate([newYear, newMonth, newDay]);
                /** If we"ve been in the "picking years" state on mobile, remove that state so we show the calendar again. */
                if ($datePicker.hasClass("is-pickingYears")) {
                    $datePicker.removeClass("is-pickingYears");
                }
            });
            /** Switch to the default state. */
            $monthPicker.on("click", ".js-showDayPicker", function () {
                $datePicker.removeClass("is-pickingMonths");
                $datePicker.removeClass("is-pickingYears");
            });
            /** Switch to the is-pickingMonths state. */
            $monthControls.on("click", ".js-showMonthPicker", function () {
                $datePicker.toggleClass("is-pickingMonths");
            });
            /** Switch to the is-pickingYears state. */
            $monthPicker.on("click", ".js-showYearPicker", function () {
                $datePicker.toggleClass("is-pickingYears");
            });
        };
        /** Change the highlighted date. */
        DatePicker.prototype.changeHighlightedDate = function (dateArr) {
            var newDateArr = this.setDateAttributes(dateArr);
            /** Update it. */
            this.picker.set("highlight", newDateArr);
        };
        /** Whenever the picker renders, do our own rendering on the custom controls. */
        DatePicker.prototype.updateCustomView = function ($datePicker) {
            /** Get some letiables ready. */
            var $monthPicker = $datePicker.find(".ms-DatePicker-monthPicker");
            var $yearPicker = $datePicker.find(".ms-DatePicker-yearPicker");
            var $picker = $datePicker.find(".ms-TextField-field").pickadate("picker");
            /** Set the correct year. */
            $monthPicker.find(".ms-DatePicker-currentYear").text($picker.get("view").year);
            /** Highlight the current month. */
            $monthPicker.find(".ms-DatePicker-monthOption").removeClass("is-highlighted");
            $monthPicker.find(".ms-DatePicker-monthOption[data-month='" + $picker.get("highlight").month + "']").addClass("is-highlighted");
            /** Generate the grid of years for the year picker view. */
            // Start by removing any existing generated output. */
            $yearPicker.find(".ms-DatePicker-currentDecade").remove();
            $yearPicker.find(".ms-DatePicker-optionGrid").remove();
            // Generate the output by going through the years.
            var startingYear = $picker.get("highlight").year - 11;
            var decadeText = startingYear + " - " + (startingYear + 11);
            var output = "<div class='ms-DatePicker-currentDecade'>" + decadeText + "</div>";
            output += "<div class='ms-DatePicker-optionGrid'>";
            for (var year = startingYear; year < (startingYear + 12); year++) {
                output += "<span class='ms-DatePicker-yearOption js-changeDate' data-year='" + year + "'>" + year + "</span>";
            }
            output += "</div>";
            // Output the title and grid of years generated above.
            $yearPicker.append(output);
            /** Highlight the current year. */
            $yearPicker.find(".ms-DatePicker-yearOption").removeClass("is-highlighted");
            $yearPicker.find(".ms-DatePicker-yearOption[data-year='" + $picker.get("highlight").year + "']").addClass("is-highlighted");
        };
        DatePicker.prototype.setDateAttributes = function (dateArr) {
            var newYear = dateArr[0], newMonth = dateArr[1], newDay = dateArr[2];
            /** All letiables are optional. If not provided, default to the current value. */
            if (typeof newYear === "undefined" || newYear === null) {
                newYear = this.picker.get("highlight").year;
            }
            if (typeof newMonth === "undefined" || newMonth === null) {
                newMonth = this.picker.get("highlight").month;
            }
            if (typeof newDay === "undefined" || newDay === null) {
                newDay = this.picker.get("highlight").date;
            }
            return [newYear, newMonth, newDay];
        };
        return DatePicker;
    }());
    fabric.DatePicker = DatePicker;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
var fabric;
(function (fabric) {
    var Overlay = (function () {
        function Overlay(overlayElement) {
            if (overlayElement) {
                this.overlayElement = overlayElement;
            }
            else {
                var overlayContainer = document.createElement("div");
                overlayContainer.setAttribute("class", "ms-Overlay");
                this.overlayElement = overlayContainer;
            }
            this.overlayElement.addEventListener("click", this.hide.bind(this), false);
        }
        Overlay.prototype.remove = function () {
            this.overlayElement.parentElement.removeChild(this.overlayElement);
        };
        Overlay.prototype.show = function () {
            this.overlayElement.classList.add("is-visible");
            document.body.classList.add("ms-u-overflowHidden");
        };
        Overlay.prototype.hide = function () {
            this.overlayElement.classList.remove("is-visible");
            document.body.classList.remove("ms-u-overflowHidden");
        };
        return Overlay;
    }());
    fabric.Overlay = Overlay;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// @TODO - we can add this once jquery is removed
/// <reference path="../Overlay/Overlay.ts"/>
var fabric;
(function (fabric) {
    var Dialog = (function () {
        function Dialog(dialog) {
            this._dialog = dialog;
            this._closeButtonElement = this._dialog.querySelector(".ms-Dialog-buttonClose");
            this._actionButtonElements = this._dialog.querySelectorAll(".ms-Dialog-action");
            if (this._closeButtonElement) {
                this._closeButtonElement.addEventListener("click", this.close.bind(this), false);
            }
            for (var i = 0; i < this._actionButtonElements.length; i++) {
                this._actionButtonElements[i].addEventListener("click", this.close.bind(this), false);
            }
        }
        Dialog.prototype.close = function () {
            this._overlay.remove();
            this._dialog.classList.remove("is-open");
            document.body.classList.remove("ms-u-overflowHidden");
            this._overlay.overlayElement.removeEventListener("click", this.close.bind(this));
        };
        Dialog.prototype.open = function () {
            this._dialog.classList.add("is-open");
            this._overlay = new fabric.Overlay();
            if (!this._dialog.classList.contains("ms-Dialog--blocking")) {
                this._overlay.overlayElement.addEventListener("click", this.close.bind(this), false);
                this._overlay.show();
                document.body.classList.add("ms-u-overflowHidden");
            }
            this._dialog.parentElement.appendChild(this._overlay.overlayElement);
        };
        return Dialog;
    }());
    fabric.Dialog = Dialog;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// "use strict";
var fabric;
(function (fabric) {
    /**
     * DialogHost class
     */
    var DialogHost = (function () {
        function DialogHost() {
        }
        return DialogHost;
    }());
    fabric.DialogHost = DialogHost;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../Overlay/Overlay.ts"/>
var fabric;
(function (fabric) {
    /**
     * Panel Host
     *
     * A host for the panel control
     *
     */
    var PANEL_HOST_CLASS = "ms-PanelHost";
    var PanelHost = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Panel
         * @constructor
         */
        function PanelHost(layer, callBack) {
            this._layer = layer;
            this._callBack = callBack;
            this._createElements();
            this._renderElements();
        }
        PanelHost.prototype.dismiss = function () {
            this.overlay.hide();
            document.body.removeChild(this.panelHost);
        };
        PanelHost.prototype.update = function (layer, callBack) {
            this.panelHost.replaceChild(layer, this._layer);
            if (callBack) {
                callBack();
            }
        };
        PanelHost.prototype._renderElements = function () {
            document.body.appendChild(this.panelHost);
            if (this._callBack) {
                this._callBack(this._layer);
            }
        };
        PanelHost.prototype._createElements = function () {
            this.panelHost = document.createElement("div");
            this.panelHost.classList.add(PANEL_HOST_CLASS);
            this.panelHost.appendChild(this._layer);
            this.overlay = new fabric.Overlay(this._overlayContainer);
            this.overlay.show();
            // Append Elements
            this.panelHost.appendChild(this.overlay.overlayElement);
        };
        return PanelHost;
    }());
    fabric.PanelHost = PanelHost;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../PanelHost/PanelHost.ts"/>
var fabric;
(function (fabric) {
    /**
     * Panel Host
     *
     * A host for the panel control
     *
     */
    var ANIMATE_IN_STATE = "animate-in";
    var ANIMATE_OUT_STATE = "animate-out";
    var ANIMATION_END = 400;
    var Panel = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Panel
         * @constructor
         */
        function Panel(panel, direction, animateOverlay) {
            this._panel = panel;
            this._direction = direction || "right";
            this._animateOverlay = animateOverlay || true;
            this.panelHost = new fabric.PanelHost(this._panel, this._animateInPanel);
            this._closeButton = this._panel.querySelector(".ms-PanelAction-close");
            this._clickHandler = this.dismiss.bind(this, null);
            this._setEvents();
            // Set body height to 100% and overflow hidden while panel is open
            document.body.setAttribute("style", "height: 100%; overflow: hidden;");
        }
        Panel.prototype.dismiss = function (callBack) {
            var _this = this;
            this._panel.classList.add(ANIMATE_OUT_STATE);
            setTimeout(function () {
                _this._panel.classList.remove(ANIMATE_OUT_STATE);
                _this._panel.classList.remove("is-open");
                _this.panelHost.dismiss();
                if (callBack) {
                    callBack();
                }
                // Remove temporary body styles
                document.body.setAttribute("style", "");
            }, ANIMATION_END);
            if (this._closeButton !== null) {
                this._closeButton.removeEventListener("click", this._clickHandler);
            }
        };
        Panel.prototype._setEvents = function () {
            this.panelHost.overlay.overlayElement.addEventListener("click", this._clickHandler);
            if (this._closeButton !== null) {
                this._closeButton.addEventListener("click", this._clickHandler);
            }
        };
        Panel.prototype._animateInPanel = function (layer) {
            layer.classList.add(ANIMATE_IN_STATE);
            layer.classList.add("is-open");
            setTimeout(function () {
                layer.classList.remove(ANIMATE_IN_STATE);
            }, ANIMATION_END);
        };
        return Panel;
    }());
    fabric.Panel = Panel;
})(fabric || (fabric = {}));

/// <reference path="../Panel/Panel.ts"/>
// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
var fabric;
(function (fabric) {
    var DROPDOWN_CLASS = "ms-Dropdown";
    var DROPDOWN_TITLE_CLASS = "ms-Dropdown-title";
    var DROPDOWN_LABEL_HELPER = "ms-Dropdown-truncator";
    var DROPDOWN_ITEMS_CLASS = "ms-Dropdown-items";
    var DROPDOWN_ITEM_CLASS = "ms-Dropdown-item";
    var DROPDOWN_SELECT_CLASS_SELECTOR = ".ms-Dropdown-select";
    var PANEL_CLASS = "ms-Panel";
    var IS_OPEN_CLASS = "is-open";
    var IS_DISABLED_CLASS = "is-disabled";
    var IS_SELECTED_CLASS = "is-selected";
    var ANIMATE_IN_CLASS = "animate-in";
    var SMALL_MAX_WIDTH = 479;
    /**
     * Dropdown Plugin
     *
     * Given .ms-Dropdown containers with generic <select> elements inside, this plugin hides the original
     * dropdown and creates a new "fake" dropdown that can more easily be styled across browsers.
     *
     */
    var Dropdown = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Dropdown
         * @constructor
         */
        function Dropdown(container) {
            this._container = container;
            this._dropdownLabelHelper = document.createElement("span");
            this._dropdownLabelHelper.classList.add(DROPDOWN_LABEL_HELPER);
            this._dropdownLabelHelper.classList.add(DROPDOWN_TITLE_CLASS);
            this._newDropdownLabel = document.createElement("span");
            this._newDropdownLabel.classList.add(DROPDOWN_TITLE_CLASS);
            this._newDropdown = document.createElement("ul");
            this._newDropdown.classList.add(DROPDOWN_ITEMS_CLASS);
            this._dropdownItems = [];
            this._originalDropdown = container.querySelector(DROPDOWN_SELECT_CLASS_SELECTOR);
            var _originalOptions = this._originalDropdown.querySelectorAll("option");
            /** Bind the callbacks to retain their context */
            this._onCloseDropdown = this._onCloseDropdown.bind(this);
            this._onItemSelection = this._onItemSelection.bind(this);
            this._onOpenDropdown = this._onOpenDropdown.bind(this);
            /** Create a new option as a list item, and add it to the replacement dropdown */
            for (var i = 0; i < _originalOptions.length; ++i) {
                var option = _originalOptions[i];
                if (option.selected) {
                    this._newDropdownLabel.innerHTML = option.text;
                }
                var newItem = document.createElement("li");
                newItem.classList.add(DROPDOWN_ITEM_CLASS);
                if (option.disabled) {
                    newItem.classList.add(IS_DISABLED_CLASS);
                }
                newItem.innerHTML = option.text;
                newItem.addEventListener("click", this._onItemSelection);
                this._newDropdown.appendChild(newItem);
                this._dropdownItems.push({
                    oldOption: option,
                    newItem: newItem
                });
            }
            /** Add the new replacement dropdown */
            container.appendChild(this._newDropdownLabel);
            container.appendChild(this._newDropdown);
            /** Add dropdown label helper for truncation */
            container.appendChild(this._dropdownLabelHelper);
            /** Toggle open/closed state of the dropdown when clicking its title. */
            this._newDropdownLabel.addEventListener("click", this._onOpenDropdown);
            this._checkTruncation();
            this._setWindowEvent();
        }
        Dropdown.prototype._setWindowEvent = function () {
            var _this = this;
            window.addEventListener("resize", function () {
                _this._doResize();
                _this._checkTruncation();
            }, false);
        };
        Dropdown.prototype._checkTruncation = function () {
            var selected = this._newDropdown.querySelector("." + IS_SELECTED_CLASS);
            var origText = (selected ?
                selected.textContent :
                this._newDropdown.querySelectorAll("." + DROPDOWN_ITEM_CLASS)[0].textContent);
            this._dropdownLabelHelper.textContent = origText;
            if (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight) {
                var i = 0;
                var ellipsis = "...";
                var newText = void 0;
                do {
                    i--;
                    newText = origText.slice(0, i);
                    this._dropdownLabelHelper.textContent = newText + ellipsis;
                } while (this._dropdownLabelHelper.offsetHeight > this._newDropdownLabel.offsetHeight);
            }
            this._newDropdownLabel.textContent = this._dropdownLabelHelper.textContent;
        };
        Dropdown.prototype._getScreenSize = function () {
            var w = window;
            var wSize = {
                x: 0,
                y: 0
            };
            var d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
            wSize.x = w.innerWidth || e.clientWidth || g.clientWidth;
            wSize.y = w.innerHeight || e.clientHeight || g.clientHeight;
            return wSize;
        };
        Dropdown.prototype._doResize = function () {
            var isOpen = this._container.classList.contains(IS_OPEN_CLASS);
            if (!isOpen) {
                return;
            }
            var screenSize = this._getScreenSize().x;
            if (screenSize <= SMALL_MAX_WIDTH) {
                this._openDropdownAsPanel();
            }
            else {
                this._removeDropdownAsPanel();
            }
        };
        Dropdown.prototype._openDropdownAsPanel = function () {
            if (this._panel === undefined) {
                this._panelContainer = document.createElement("div");
                this._panelContainer.classList.add(PANEL_CLASS);
                this._panelContainer.classList.add(DROPDOWN_CLASS);
                this._panelContainer.classList.add(IS_OPEN_CLASS);
                this._panelContainer.classList.add(ANIMATE_IN_CLASS);
                this._panelContainer.appendChild(this._newDropdown);
                /** Assign the script to the new panel, which creates a panel host, overlay, and attaches it to the DOM */
                this._panel = new fabric.Panel(this._panelContainer);
            }
        };
        Dropdown.prototype._removeDropdownAsPanel = function (evt) {
            var _this = this;
            if (this._panel !== undefined) {
                /** destroy panel and move dropdown back to outside the panel */
                /* if event target is overlay element, only append dropdown to prevent */
                /* double dismiss bug, otherwise, dismiss and append */
                if (evt && evt.target === this._panel.panelHost.overlay.overlayElement) {
                    this._container.appendChild(this._newDropdown);
                }
                else {
                    this._panel.dismiss(function () {
                        _this._container.appendChild(_this._newDropdown);
                    });
                }
                this._panel = undefined;
            }
        };
        Dropdown.prototype._onOpenDropdown = function (evt) {
            var isDisabled = this._container.classList.contains(IS_DISABLED_CLASS);
            var isOpen = this._container.classList.contains(IS_OPEN_CLASS);
            if (!isDisabled && !isOpen) {
                /** Stop the click event from propagating, which would just close the dropdown immediately. */
                evt.stopPropagation();
                this._closeOtherDropdowns();
                /** Go ahead and open that dropdown. */
                this._container.classList.add(IS_OPEN_CLASS);
                /** Temporarily bind an event to the document that will close this dropdown when clicking anywhere. */
                document.addEventListener("click", this._onCloseDropdown);
                var screenSize = this._getScreenSize().x;
                if (screenSize <= SMALL_MAX_WIDTH) {
                    this._openDropdownAsPanel();
                }
            }
        };
        Dropdown.prototype._closeOtherDropdowns = function () {
            var dropdowns = document.querySelectorAll("." + DROPDOWN_CLASS + "." + IS_OPEN_CLASS);
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].classList.remove(IS_OPEN_CLASS);
            }
        };
        Dropdown.prototype._onCloseDropdown = function (evt) {
            this._removeDropdownAsPanel(evt);
            this._container.classList.remove(IS_OPEN_CLASS);
            document.removeEventListener("click", this._onCloseDropdown);
        };
        Dropdown.prototype._onItemSelection = function (evt) {
            var item = evt.target;
            var isDropdownDisabled = this._container.classList.contains(IS_DISABLED_CLASS);
            var isOptionDisabled = item.classList.contains(IS_DISABLED_CLASS);
            if (!isDropdownDisabled && !isOptionDisabled) {
                /** Deselect all items and select this one. */
                /** Update the original dropdown. */
                for (var i = 0; i < this._dropdownItems.length; ++i) {
                    if (this._dropdownItems[i].newItem === item) {
                        this._dropdownItems[i].newItem.classList.add(IS_SELECTED_CLASS);
                        this._dropdownItems[i].oldOption.selected = true;
                    }
                    else {
                        this._dropdownItems[i].newItem.classList.remove(IS_SELECTED_CLASS);
                        this._dropdownItems[i].oldOption.selected = false;
                    }
                }
                /** Update the replacement dropdown's title. */
                this._newDropdownLabel.innerHTML = item.textContent;
                this._checkTruncation();
                /** Trigger any change event tied to the original dropdown. */
                var changeEvent = document.createEvent("HTMLEvents");
                changeEvent.initEvent("change", false, true);
                this._originalDropdown.dispatchEvent(changeEvent);
            }
        };
        return Dropdown;
    }());
    fabric.Dropdown = Dropdown;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// "use strict";
var fabric;
(function (fabric) {
    var SCROLL_FRAME_RATE = 33;
    var Animate = (function () {
        function Animate() {
        }
        /**
        * @param {HTMLElement} element
        * @param {object} props Transition properties
        * @param {number} props.duration The duration of the transition in seconds
        * @param {number} props.delay A delay in seconds that occurs before the transition starts
        * @param {string} props.ease An easing equation applied to the transition
        * @param {function} props.onEnd A function that is called when the transition ends
        * @param {array} props.onEndArgs An array of parameters applied to the onEnd function
        * @param {number} props.x props.y props.left, props.opacity etc... CSS values to transition to
         */
        Animate.transition = function (element, props) {
            var obj = { element: element, props: props, transformations: {} };
            Animate._animationObjects.push(obj);
            Animate._parseProperties(obj);
            Animate._createTransition(obj);
            setTimeout(Animate._setProperties, 0, obj);
            Animate._setCallback(obj);
        };
        /**
         * @param {HTMLElement} element
         * @param {string} keyframes A name of a keyframe animation
         * @param {object} props Animation properties
         * @param {number} props.duration The duration of the animation in seconds
         * @param {number} props.delay A delay in seconds that occurs before the animation starts
         * @param {string} props.ease An easing equation applied to the animation
         * @param {function} props.onEnd A function that is called when the animation ends
         * @param {array} props.onEndArgs An array of parameters applied to the onEnd function
        */
        Animate.animation = function (element, keyframes, props) {
            var obj = { element: element, keyframes: keyframes, props: props };
            Animate._animationObjects.push(obj);
            Animate._parseProperties(obj);
            Animate._createAnimation(obj);
            Animate._setCallback(obj);
        };
        /**
         * @param {HTMLElement} element
         * @param {object} props Scroll animation properties
         * @param {number} props.duration The duration of the transition in seconds
         * @param {number} props.top The end scroll position of the element
         * @param {number} props.delay A delay in seconds that occurs before the scroll starts
         * @param {function} props.onEnd A function that is called when the scrolling animation ends
         * @param {array} props.onEndArgs An array of parameters applied to the onEnd function
        */
        Animate.scrollTo = function (element, props) {
            var obj = { element: element, props: props, step: 0 };
            Animate._setScrollProperties(obj);
            if (obj.props.delay) {
                setTimeout(Animate._animationObjects, obj.props.delay * 1000, obj);
            }
            else {
                Animate._animateScroll(obj);
            }
            Animate._animationObjects.push(obj);
        };
        Animate._setScrollProperties = function (obj) {
            obj.beginTop = obj.element.scrollTop;
            obj.change = obj.props.top - obj.beginTop;
            obj.props.duration = obj.props.duration * 1000;
        };
        Animate._parseProperties = function (obj) {
            var nonTweenProps = Animate._timeProps.concat(Animate._callbackProps);
            obj.tweenObj = {};
            for (var key in obj.props) {
                if (Animate._contains(nonTweenProps, key)) {
                    obj[key] = obj.props[key];
                }
                else {
                    obj.tweenObj[key] = obj.props[key];
                }
            }
        };
        Animate._animateScroll = function (obj) {
            var totalSteps = obj.props.duration / SCROLL_FRAME_RATE;
            var top = Animate._easeOutExpo(obj.step++, obj.beginTop, obj.change, totalSteps);
            obj.element.scrollTop = top;
            if (obj.step >= totalSteps) {
                obj.element.scrollTop = obj.props.top;
                Animate._executeCallback(obj.props);
                Animate._removeAnimationObject(obj);
            }
            else {
                setTimeout(function () {
                    requestAnimationFrame(function () {
                        Animate._animateScroll(obj);
                    });
                }, SCROLL_FRAME_RATE);
            }
        };
        Animate._createTransition = function (obj) {
            var duration = obj.duration || 0;
            var delay = obj.delay || 0;
            obj.element.style.transitionProperty = Animate._getTransitionProperties(obj.tweenObj);
            obj.element.style.transitionDuration = duration.toString() + "s";
            obj.element.style.transitionTimingFunction = obj.ease || "linear";
            obj.element.style.transitionDelay = delay.toString() + "s";
        };
        Animate._createAnimation = function (obj) {
            var duration = obj.duration || 0;
            var delay = obj.delay || 0;
            obj.element.style.animationName = obj.keyframes;
            obj.element.style.animationDuration = duration.toString() + "s";
            obj.element.style.animationTimingFunction = obj.ease || "linear";
            obj.element.style.animationDelay = delay.toString() + "s";
            obj.element.style.animationFillMode = "both";
        };
        Animate._getTransitionProperties = function (obj) {
            var hasTransform = false;
            var hasFilter = false;
            var properties = [];
            for (var key in obj) {
                if (Animate._contains(Animate._transformProps, key)) {
                    hasTransform = true;
                }
                else if (Animate._contains(Animate._filters, key)) {
                    hasFilter = true;
                }
                else {
                    properties.push(Animate._camelCaseToDash(key));
                }
            }
            if (hasTransform) {
                properties.push("transform");
            }
            if (hasFilter) {
                properties.push("-webkit-filter");
                properties.push("filter");
            }
            return properties.join(", ");
        };
        Animate._setProperties = function (obj) {
            for (var key in obj.tweenObj) {
                if (Animate._contains(Animate._transformProps, key)) {
                    Animate._setTransformValues(obj, key);
                }
                else if (Animate._contains(Animate._filters, key)) {
                    Animate._setFilterValues(obj, key);
                }
                else {
                    Animate._setRegularValues(obj, key);
                }
            }
            if (obj.transformations) {
                Animate._setTransformations(obj);
            }
        };
        Animate._setRegularValues = function (obj, key) {
            var value = obj.tweenObj[key];
            if (value.toString().indexOf("%") === -1) {
                value += (key !== "opacity") && (key !== "backgroundColor") && (key !== "boxShadow") ? "px" : "";
            }
            obj.element.style[key] = value;
        };
        Animate._setFilterValues = function (obj, key) {
            var value = obj.tweenObj[key];
            if (key === "hueRotate") {
                value = "(" + value + "deg)";
            }
            else {
                value = key === "blur" ? "(" + value + "px)" : "(" + value + "%)";
            }
            key = Animate._camelCaseToDash(key);
            obj.element.style.webkitFilter = key + value;
            obj.element.style.filter = key + value;
        };
        Animate._setTransformValues = function (obj, key) {
            if (/x|y|z|scaleX|scaleY|scaleZ|rotate|rotateX|rotateY|rotateZ|skewX|skewY/.test(key)) {
                obj.transformations[key] = obj.tweenObj[key];
            }
        };
        Animate._setTransformations = function (obj) {
            var rotate = "", scale = "", skew = "", translate = "";
            var trans = obj.transformations;
            translate += trans.x !== undefined && trans.x ? "translateX(" + trans.x + "px) " : "";
            translate += trans.y !== undefined && trans.y ? "translateY(" + trans.y + "px) " : "";
            translate += trans.z !== undefined && trans.z ? "translateZ(" + trans.z + "px) " : "";
            rotate += trans.rotate !== undefined && trans.rotate ? "rotate(" + trans.rotate + "deg) " : "";
            rotate += trans.rotateX !== undefined && trans.rotateX ? "rotateX(" + trans.rotateX + "deg) " : "";
            rotate += trans.rotateY !== undefined && trans.rotateY ? "rotate(" + trans.rotateY + "deg) " : "";
            rotate += trans.rotateZ !== undefined && trans.rotateZ ? "rotate(" + trans.rotateZ + "deg) " : "";
            scale += trans.scaleX !== undefined && trans.scaleX ? "scaleX(" + trans.scaleX + ") " : "";
            scale += trans.scaleY !== undefined && trans.scaleY ? "scaleY(" + trans.scaleY + ") " : "";
            scale += trans.scaleZ !== undefined && trans.scaleZ ? "scaleZ(" + trans.scaleZ + ") " : "";
            skew += trans.skewX !== undefined && trans.skewX ? "skewX(" + trans.skewX + "deg) " : "";
            skew += trans.skewY !== undefined && trans.skewY ? "skewY(" + trans.skewY + "deg) " : "";
            obj.element.style.transform = translate + rotate + scale + skew;
        };
        Animate._setCallback = function (obj) {
            obj.element.addEventListener("webkitTransitionEnd", Animate._complete, false);
            obj.element.addEventListener("transitionend", Animate._complete, false);
            obj.element.addEventListener("webkitAnimationEnd", Animate._complete, false);
            obj.element.addEventListener("animationend", Animate._complete, false);
        };
        Animate._complete = function (event) {
            event.target.removeEventListener("webkitTransitionEnd", Animate._complete);
            event.target.removeEventListener("transitionend", Animate._complete);
            event.target.removeEventListener("webkitAnimationEnd", Animate._complete);
            event.target.removeEventListener("animationend", Animate._complete);
            var obj = Animate._getAnimationObjByElement(event.target);
            Animate._executeCallback(obj);
            Animate._removeAnimationObject(obj);
        };
        Animate._getAnimationObjByElement = function (element) {
            var i = Animate._animationObjects.length;
            while (i--) {
                if (Animate._animationObjects[i].element === element) {
                    return Animate._animationObjects[i];
                }
            }
            return null;
        };
        Animate._removeAnimationObject = function (obj) {
            var i = Animate._animationObjects.length;
            while (i--) {
                if (Animate._animationObjects[i] === obj) {
                    Animate._animationObjects.splice(i, 1);
                }
            }
        };
        Animate._executeCallback = function (obj) {
            if (obj.onEnd) {
                var endArgs = obj.onEndArgs || [];
                obj.onEnd.apply(null, endArgs);
            }
        };
        Animate._contains = function (array, value) {
            var i = array.length;
            while (i--) {
                if (value === array[i]) {
                    return true;
                }
            }
            return false;
        };
        Animate._camelCaseToDash = function (value) {
            return value.replace(/\W+/g, "-").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase();
        };
        Animate._easeOutExpo = function (time, begin, change, duration) {
            return (time === duration) ? begin + change : change * (-Math.pow(2, -10 * time / duration) + 1) + begin;
        };
        Animate._transformProps = [
            "x",
            "y",
            "z",
            "scaleX",
            "scaleY",
            "scaleZ",
            "rotate",
            "rotateX",
            "rotateY",
            "rotateZ",
            "skewX",
            "skewY"
        ];
        Animate._filters = [
            "blur",
            "brightness",
            "contrast",
            "dropShadow",
            "grayscale",
            "hueRotate",
            "invert",
            "saturate",
            "sepia"
        ];
        Animate._timeProps = ["duration", "ease", "delay"];
        Animate._callbackProps = ["onEnd", "onEndArgs"];
        Animate._animationObjects = [];
        return Animate;
    }());
    fabric.Animate = Animate;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// "use strict";
var fabric;
(function (fabric) {
    var Ease = (function () {
        function Ease() {
        }
        Ease.QUAD_EASE_IN = Ease.CB + "(0.550, 0.085, 0.680, 0.530)";
        Ease.CUBIC_EASE_IN = Ease.CB + "(0.550, 0.055, 0.675, 0.190)";
        Ease.QUART_EASE_IN = Ease.CB + "(0.895, 0.030, 0.685, 0.220)";
        Ease.QUINT_EASE_IN = Ease.CB + "(0.755, 0.050, 0.855, 0.060)";
        Ease.SINE_EASE_IN = Ease.CB + "(0.470, 0, 0.745, 0.715)";
        Ease.EXPO_EASE_IN = Ease.CB + "(0.950, 0.050, 0.795, 0.035)";
        Ease.CIRC_EASE_IN = Ease.CB + "(0.600, 0.040, 0.980, 0.335)";
        Ease.BACK_EASE_IN = Ease.CB + "(0.600, 0.040, 0.980, 0.335)";
        Ease.QUAD_EASE_OUT = Ease.CB + "(0.250, 0.460, 0.450, 0.940)";
        Ease.CUBIC_EASE_OUT = Ease.CB + "(0.215, 0.610, 0.355, 1)";
        Ease.QUART_EASE_OUT = Ease.CB + "(0.165, 0.840, 0.440, 1)";
        Ease.QUINT_EASE_OUT = Ease.CB + "(0.230, 1, 0.320, 1)";
        Ease.SINE_EASE_OUT = Ease.CB + "(0.390, 0.575, 0.565, 1)";
        Ease.EXPO_EASE_OUT = Ease.CB + "(0.190, 1, 0.220, 1)";
        Ease.CIRC_EASE_OUT = Ease.CB + "(0.075, 0.820, 0.165, 1)";
        Ease.BACK_EASE_OUT = Ease.CB + "(0.175, 0.885, 0.320, 1.275)";
        Ease.QUAD_EASE_IN_OUT = Ease.CB + "(0.455, 0.030, 0.515, 0.955)";
        Ease.CUBIC_EASE_IN_OUT = Ease.CB + "(0.645, 0.045, 0.355, 1)";
        Ease.QUART_EASE_IN_OUT = Ease.CB + "(0.770, 0, 0.175, 1)";
        Ease.QUINT_EASE_IN_OUT = Ease.CB + "(0.860, 0, 0.070, 1)";
        Ease.SINE_EASE_IN_OUT = Ease.CB + "(0.445, 0.050, 0.550, 0.950)";
        Ease.EXPO_EASE_IN_OUT = Ease.CB + "(1, 0, 0, 1)";
        Ease.CIRC_EASE_IN_OUT = Ease.CB + "(0.785, 0.135, 0.150, 0.860)";
        Ease.BACK_EASE_IN_OUT = Ease.CB + "(0.680, -0.550, 0.265, 1.550)";
        Ease.CB = "cubic-bezier";
        return Ease;
    }());
    fabric.Ease = Ease;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// "use strict";
/// <reference path="../../utilities/Animate.ts"/>
/// <reference path="../../utilities/Ease.ts"/>
var fabric;
(function (fabric) {
    /**
     *
     * Adds basic demonstration functionality to .ms-PersonaCard components.
     *
     */
    var PersonaCard = (function () {
        /**
         *
         * @param {Element} container - the target container for an instance of PersonaCard
         * @constructor
         */
        function PersonaCard(container) {
            this._container = container;
            var activeElement = this._container.querySelector(".ms-PersonaCard-action.is-active");
            var activeId = activeElement.getAttribute("data-action-id");
            this._actions = this._container.querySelector(".ms-PersonaCard-actions");
            this._expander = this._container.querySelector(".ms-PersonaCard-detailExpander");
            this._actionDetailBox = this._container.querySelector(".ms-PersonaCard-actionDetailBox");
            this._setDetail(activeId);
            this._boundOnActionClick = this._onActionClick.bind(this);
            this._boundOnExpanderClick = this._onExpanderClick.bind(this);
            this._boundOnTab = this._onTab.bind(this);
            this._addListeners();
        }
        PersonaCard.prototype.removeListeners = function () {
            this._actions.removeEventListener("click", this._boundOnActionClick);
            this._expander.removeEventListener("click", this._boundOnExpanderClick);
            this._container.removeEventListener("keydown", this._boundOnTab);
        };
        PersonaCard.prototype._addListeners = function () {
            this._actions.addEventListener("click", this._boundOnActionClick, false);
            this._expander.addEventListener("click", this._boundOnExpanderClick, false);
            this._container.addEventListener("keydown", this._boundOnTab, false);
        };
        PersonaCard.prototype._onTab = function (event) {
            var target = event.target;
            if (event.keyCode === 9 && target.classList.contains("ms-PersonaCard-action")) {
                this._onActionClick(event);
            }
        };
        PersonaCard.prototype._onExpanderClick = function (event) {
            var parent = event.target.parentElement;
            if (parent.classList.contains("is-collapsed")) {
                parent.classList.remove("is-collapsed");
            }
            else {
                parent.classList.add("is-collapsed");
            }
            var parentHeight = parent.clientHeight;
            this._animateDetail(parentHeight);
        };
        PersonaCard.prototype._onActionClick = function (event) {
            var target = event.target;
            var actionId = target.getAttribute("data-action-id");
            if (actionId && target.className.indexOf("is-active") === -1) {
                this._setAction(target);
                this._setDetail(actionId);
            }
        };
        PersonaCard.prototype._setAction = function (target) {
            var activeElement = this._container.querySelector(".ms-PersonaCard-action.is-active");
            activeElement.classList.remove("is-active");
            target.classList.add("is-active");
        };
        PersonaCard.prototype._setDetail = function (activeId) {
            var selector = ".ms-PersonaCard-details[data-detail-id='" + activeId + "']";
            var lastDetail = this._container.querySelector(".ms-PersonaCard-details.is-active");
            var activeDetail = this._container.querySelector(selector);
            if (lastDetail) {
                lastDetail.classList.remove("is-active");
            }
            activeDetail.classList.add("is-active");
            var detailHeight = activeDetail.clientHeight;
            this._animateDetail(detailHeight);
        };
        PersonaCard.prototype._animateDetail = function (height) {
            var _this = this;
            this._actionDetailBox.style.overflowY = "hidden";
            fabric.Animate.transition(this._actionDetailBox, {
                height: height,
                duration: 0.25,
                ease: fabric.Ease.SINE_EASE_OUT,
                onEnd: function () {
                    _this._actionDetailBox.style.overflowY = "auto";
                }
            });
        };
        return PersonaCard;
    }());
    fabric.PersonaCard = PersonaCard;
})(fabric || (fabric = {}));

/// <reference path="../ContextualHost/ContextualHost.ts"/>
/// <reference path="../PersonaCard/PersonaCard.ts"/>
/**
 * FacePile
 *
 * A host for FacePile
 *
 */
var fabric;
(function (fabric) {
    // const CONTEXTUAL_HOST_CLASS = ".ms-ContextualHost";
    var MODAL_POSITION = "top";
    var Persona = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of FacePile
         * @constructor
         */
        function Persona(container) {
            this._persona = container;
            // If Persona Card and Contextual host exist continue
            // this._contextualHost = this._persona.querySelector(CONTEXTUAL_HOST_CLASS);
            this._personaCard = this._persona.querySelector(".ms-PersonaCard");
            if (this._personaCard) {
                this._assignEvents();
                this._personaCard.setAttribute("style", "display: none;");
                this._createPersonaCard();
            }
        }
        Persona.prototype._createPersonaCard = function () {
            this._personaCardInstance = new fabric.PersonaCard(this._personaCard);
        };
        Persona.prototype._createContextualHostInstance = function () {
            this._personaCard.setAttribute("style", "display: block;");
            this._contextualHostInstance = new fabric.ContextualHost(this._personaCard, MODAL_POSITION, this._persona);
        };
        Persona.prototype._personaEventHandler = function () {
            this._createContextualHostInstance();
        };
        Persona.prototype._assignEvents = function () {
            var _this = this;
            this._persona.addEventListener("click", this._personaEventHandler.bind(this), false);
            this._persona.addEventListener("keyup", function (e) { return (e.keyCode === 32) ? _this._personaEventHandler() : null; }, false);
        };
        return Persona;
    }());
    fabric.Persona = Persona;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../Persona/Persona.ts"/>
var fabric;
(function (fabric) {
    /**
     * FacePile
     *
     * A host for FacePile
     *
     */
    var PERSONA_CLASS = ".ms-Persona--facePile";
    var PERSONA_INITIALS = ".ms-Persona-initials";
    var PERSONA_IMAGE = ".ms-Persona-image";
    var PERSONA_PRIMARY_CLASS = ".ms-Persona-primaryText";
    var PERSONA_SECONDARY_CLASS = ".ms-Persona-secondaryText";
    var FacePile = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of FacePile
         * @constructor
         */
        function FacePile(container) {
            this._personaCollection = [];
            this._facePile = container;
            this._createPersonaCollection();
        }
        FacePile.prototype._createPersonaCollection = function () {
            var _personas = document.querySelectorAll(PERSONA_CLASS);
            for (var i = 0; i < _personas.length; i++) {
                var _thisPersona = _personas[i];
                this._personaCollection.push({
                    item: _thisPersona,
                    initials: _thisPersona.querySelector(PERSONA_INITIALS).textContent,
                    image: _thisPersona.querySelector(PERSONA_IMAGE) ?
                        _thisPersona.querySelector(PERSONA_IMAGE).getAttribute("src") : null,
                    primaryText: _thisPersona.querySelector(PERSONA_PRIMARY_CLASS) ?
                        _thisPersona.querySelector(PERSONA_PRIMARY_CLASS).textContent : "",
                    secondaryText: _thisPersona.querySelector(PERSONA_SECONDARY_CLASS) ?
                        _thisPersona.querySelector(PERSONA_SECONDARY_CLASS).textContent : "",
                    personaInstance: new fabric.Persona(_thisPersona)
                });
            }
        };
        return FacePile;
    }());
    fabric.FacePile = FacePile;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
var fabric;
(function (fabric) {
    /**
     * List Item Plugin
     *
     * Adds basic demonstration functionality to .ms-ListItem components.
     *
     */
    var ListItem = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of ListItem
         * @constructor
         */
        function ListItem(container) {
            this._container = container;
            this._toggleElement = this._container.querySelector(".ms-ListItem-selectionTarget");
            this._addListeners();
        }
        ListItem.prototype.removeListeners = function () {
            this._toggleElement.removeEventListener("click", this._toggleHandler.bind(this));
        };
        ListItem.prototype._addListeners = function () {
            this._toggleElement.addEventListener("click", this._toggleHandler.bind(this), false);
        };
        ListItem.prototype._toggleHandler = function () {
            this._container.classList.toggle("is-selected");
        };
        return ListItem;
    }());
    fabric.ListItem = ListItem;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../ListItem/ListItem.ts"/>
"use strict";
var fabric;
(function (fabric) {
    /**
     * List Item Plugin
     *
     * Adds basic demonstration functionality to .ms-List components.
     *
     */
    var List = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of List
         * @constructor
         */
        function List(container) {
            this._container = container;
            this._listItemComponents = [];
            var choiceFieldElements = this._container.querySelectorAll(".ms-ListItem");
            for (var i = 0; i < choiceFieldElements.length; i++) {
                this._listItemComponents[i] = new fabric.ListItem(choiceFieldElements[i]);
            }
        }
        return List;
    }());
    fabric.List = List;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    "use strict";
    /**
     * MessageBanner component
     *
     * A component to display error messages
     *
     */
    var MessageBanner = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of MessageBanner
         * @constructor
         */
        function MessageBanner(container) {
            this._textContainerMaxWidth = 700;
            this._bufferElementsWidth = 88;
            this._bufferElementsWidthSmall = 35;
            this.SMALL_BREAK_POINT = 480;
            this.container = container;
            this.init();
        }
        /**
         * initializes component
         */
        MessageBanner.prototype.init = function () {
            this._cacheDOM();
            this._setListeners();
            this._clientWidth = this._errorBanner.offsetWidth;
            this._initTextWidth = this._clipper.offsetWidth;
            this._onResize();
        };
        /**
         * shows banner if the banner is hidden
         */
        MessageBanner.prototype.showBanner = function () {
            this._errorBanner.className = "ms-MessageBanner";
        };
        /**
         * sets styles on resize
         */
        MessageBanner.prototype._onResize = function () {
            this._clientWidth = this._errorBanner.offsetWidth;
            if (window.innerWidth >= this.SMALL_BREAK_POINT) {
                this._resizeRegular();
            }
            else {
                this._resizeSmall();
            }
        };
        /**
         * resize above 480 pixel breakpoint
         */
        MessageBanner.prototype._resizeRegular = function () {
            if ((this._clientWidth - this._bufferSize) > this._initTextWidth && this._initTextWidth < this._textContainerMaxWidth) {
                this._textWidth = "auto";
                this._chevronButton.className = "ms-MessageBanner-expand";
                this._collapse();
            }
            else {
                this._textWidth = Math.min((this._clientWidth - this._bufferSize), this._textContainerMaxWidth) + "px";
                if (this._chevronButton.className.indexOf("is-visible") === -1) {
                    this._chevronButton.className += " is-visible";
                }
            }
            this._clipper.style.width = this._textWidth;
        };
        /**
         * resize below 480 pixel breakpoint
         */
        MessageBanner.prototype._resizeSmall = function () {
            if (this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth) > this._initTextWidth) {
                this._textWidth = "auto";
                this._collapse();
            }
            else {
                this._textWidth = (this._clientWidth - (this._bufferElementsWidthSmall + this._closeButton.offsetWidth)) + "px";
            }
            this._clipper.style.width = this._textWidth;
        };
        /**
         * caches elements and values of the component
         */
        MessageBanner.prototype._cacheDOM = function () {
            this._errorBanner = this.container;
            this._clipper = this.container.querySelector(".ms-MessageBanner-clipper");
            this._chevronButton = this.container.querySelector(".ms-MessageBanner-expand");
            this._actionButton = this.container.querySelector(".ms-MessageBanner-action");
            this._bufferSize = this._actionButton.offsetWidth + this._bufferElementsWidth;
            this._closeButton = this.container.querySelector(".ms-MessageBanner-close");
        };
        /**
         * expands component to show full error message
         */
        MessageBanner.prototype._expand = function () {
            var icon = this._chevronButton.querySelector(".ms-Icon");
            this._errorBanner.className += " is-expanded";
            icon.className = "ms-Icon ms-Icon--DoubleChevronUp";
        };
        /**
         * collapses component to only show truncated message
         */
        MessageBanner.prototype._collapse = function () {
            var icon = this._chevronButton.querySelector(".ms-Icon");
            this._errorBanner.className = "ms-MessageBanner";
            icon.className = "ms-Icon ms-Icon--DoubleChevronDown";
        };
        MessageBanner.prototype._toggleExpansion = function () {
            if (this._errorBanner.className.indexOf("is-expanded") > -1) {
                this._collapse();
            }
            else {
                this._expand();
            }
        };
        MessageBanner.prototype._hideMessageBanner = function () {
            this._errorBanner.className = "ms-MessageBanner is-hidden";
        };
        /**
         * hides banner when close button is clicked
         */
        MessageBanner.prototype._hideBanner = function () {
            if (this._errorBanner.className.indexOf("hide") === -1) {
                this._errorBanner.className += " hide";
                setTimeout(this._hideMessageBanner.bind(this), 500);
            }
        };
        /**
         * sets handlers for resize and button click events
         */
        MessageBanner.prototype._setListeners = function () {
            window.addEventListener("resize", this._onResize.bind(this), false);
            this._chevronButton.addEventListener("click", this._toggleExpansion.bind(this), false);
            this._closeButton.addEventListener("click", this._hideBanner.bind(this), false);
        };
        return MessageBanner;
    }());
    fabric.MessageBanner = MessageBanner;
})(fabric || (fabric = {})); // end fabric namespace

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/// <reference path="../Overlay/Overlay.ts"/>
/// <reference path="../ContextualHost/ContextualHost.ts"/>
var fabric;
(function (fabric) {
    /**
     * People Picker
     *
     * People picker control
     *
     */
    var MODAL_POSITION = "bottom";
    var TOKEN_CLASS = "ms-Persona--token";
    var PeoplePicker = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of People Picker
         * @constructor
         */
        function PeoplePicker(container) {
            this._container = container;
            this._peoplePickerMenu = this._container.querySelector(".ms-PeoplePicker-results");
            this._peoplePickerSearch = this._container.querySelector(".ms-TextField-field");
            this._peoplePickerSearchBox = this._container.querySelector(".ms-PeoplePicker-searchBox");
            this._selectedPeople = this._container.querySelector(".ms-PeoplePicker-selectedPeople");
            this._assignClicks();
            if (this._selectedPeople) {
                this._assignRemoveHandler();
                this._selectedCount = this._container.querySelector(".ms-PeoplePicker-selectedCount");
                this._selectedPlural = this._container.querySelector(".ms-PeoplePicker-selectedCountPlural");
            }
            if (this._peoplePickerMenu) {
                this._peoplePickerMenu.setAttribute("style", "display: none;");
            }
        }
        PeoplePicker.prototype._createModalHost = function (e) {
            e.stopPropagation();
            this._peoplePickerMenu.setAttribute("style", "display: block;");
            this._contextualHostView = new fabric.ContextualHost(this._peoplePickerMenu, MODAL_POSITION, this._peoplePickerSearchBox, false, [""], true, this._contextHostCallBack.bind(this));
            this._peoplePickerSearchBox.classList.add("is-active");
            this._isContextualMenuOpen = true;
        };
        PeoplePicker.prototype._clickHandler = function (e) {
            this._createModalHost(e);
            // Select all results and remove event listeners by cloning
            var peoplePickerResults = this._peoplePickerMenu.querySelector(".ms-PeoplePicker-result");
            var resultsParent = peoplePickerResults.parentNode;
            var resultsClone = resultsParent.cloneNode(true);
            resultsParent.parentNode.replaceChild(resultsClone, resultsParent);
            // Get all results
            this._peoplePickerResults = this._peoplePickerMenu.querySelectorAll(".ms-PeoplePicker-result");
            // Add _selectResult listeners to each result
            for (var i = 0; i < this._peoplePickerResults.length; i++) {
                var personaResult = this._peoplePickerResults[i].querySelector(".ms-Persona");
                var removeButton = this._peoplePickerResults[i].querySelector(".ms-PeoplePicker-resultAction");
                personaResult.addEventListener("click", this._selectResult.bind(this), true);
                removeButton.addEventListener("click", this._removeItem.bind(this), true);
            }
        };
        PeoplePicker.prototype._selectResult = function (e) {
            e.stopPropagation();
            var currentResult = this._findElement(e.target, "ms-Persona");
            var clonedResult = currentResult.cloneNode(true);
            // if facePile - add to members list / else tokenize
            if (this._container.classList.contains("ms-PeoplePicker--facePile")) {
                this._addResultToMembers(clonedResult);
            }
            else {
                this._tokenizeResult(clonedResult);
            }
            this._updateCount();
            // Close the open contextual host
            this._contextualHostView.disposeModal();
        };
        PeoplePicker.prototype._findElement = function (childObj, className) {
            var currentElement = childObj.parentNode;
            while (!currentElement.classList.contains(className)) {
                currentElement = currentElement.parentNode;
            }
            return currentElement;
        };
        PeoplePicker.prototype._addRemoveBtn = function (persona, token) {
            var actionBtn;
            var actionIcon = document.createElement("i");
            if (token) {
                actionBtn = document.createElement("div");
                actionBtn.classList.add("ms-Persona-actionIcon");
                actionBtn.addEventListener("click", this._removeToken.bind(this), true);
            }
            else {
                actionBtn = document.createElement("button");
                actionBtn.classList.add("ms-PeoplePicker-resultAction");
                actionBtn.addEventListener("click", this._removeResult.bind(this), true);
            }
            actionIcon.classList.add("ms-Icon", "ms-Icon--Cancel");
            actionBtn.appendChild(actionIcon);
            persona.appendChild(actionBtn);
        };
        PeoplePicker.prototype._removeToken = function (e) {
            var currentToken = this._findElement(e.target, "ms-Persona");
            currentToken.remove();
        };
        PeoplePicker.prototype._removeResult = function (e) {
            var currentResult = this._findElement(e.target, "ms-PeoplePicker-selectedPerson");
            currentResult.remove();
            this._updateCount();
        };
        PeoplePicker.prototype._removeItem = function (e) {
            var currentItem = this._findElement(e.target, "ms-PeoplePicker-result");
            currentItem.remove();
        };
        PeoplePicker.prototype._updateCount = function () {
            if (this._selectedPeople) {
                var count = this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson").length;
                this._selectedCount.textContent = count.toString();
                this._selectedPlural.style.display = (count === 1) ? "none" : "inline";
            }
        };
        PeoplePicker.prototype._tokenizeResult = function (tokenResult) {
            var searchBox = this._container.querySelector(".ms-PeoplePicker-searchBox");
            var textField = searchBox.querySelector(".ms-TextField");
            // Add token classes to persona
            tokenResult.classList.add(TOKEN_CLASS, "ms-PeoplePicker-persona");
            // Add the remove button to the token
            this._addRemoveBtn(tokenResult, true);
            // Use persona xs variant for token
            if (tokenResult.classList.contains("ms-Persona--sm")) {
                tokenResult.classList.remove("ms-Persona--sm");
                tokenResult.classList.add("ms-Persona--xs");
            }
            // Prepend the token before the search field
            searchBox.insertBefore(tokenResult, textField);
        };
        PeoplePicker.prototype._addResultToMembers = function (persona) {
            var membersList = this._container.querySelector(".ms-PeoplePicker-selectedPeople");
            var firstMember = membersList.querySelector(".ms-PeoplePicker-selectedPerson");
            var selectedItem = document.createElement("li");
            // Create the selectedPerson list item
            selectedItem.classList.add("ms-PeoplePicker-selectedPerson");
            selectedItem.tabIndex = 1;
            // Append the result persona to list item
            selectedItem.appendChild(persona);
            // Add the remove button to the persona
            this._addRemoveBtn(selectedItem, false);
            // Add removeResult event to resultAction
            selectedItem.querySelector(".ms-PeoplePicker-resultAction").addEventListener("click", this._removeResult.bind(this), true);
            membersList.insertBefore(selectedItem, firstMember);
        };
        PeoplePicker.prototype._assignClicks = function () {
            var _this = this;
            this._peoplePickerSearch.addEventListener("click", this._clickHandler.bind(this), true);
            this._peoplePickerSearch.addEventListener("keyup", function (e) {
                if (e.keyCode !== 27 && !_this._isContextualMenuOpen) {
                    _this._clickHandler(e);
                }
            }, true);
        };
        PeoplePicker.prototype._assignRemoveHandler = function () {
            var selectedPeople = this._selectedPeople.querySelectorAll(".ms-PeoplePicker-selectedPerson");
            for (var i = 0; i < selectedPeople.length; i++) {
                selectedPeople[i].querySelector(".ms-PeoplePicker-resultAction").addEventListener("click", this._removeResult.bind(this), true);
            }
        };
        PeoplePicker.prototype._contextHostCallBack = function () {
            this._peoplePickerSearchBox.classList.remove("is-active");
            this._isContextualMenuOpen = false;
        };
        return PeoplePicker;
    }());
    fabric.PeoplePicker = PeoplePicker;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
var fabric;
(function (fabric) {
    /**
     * Pivot Plugin
     *
     * Adds basic demonstration functionality to .ms-Pivot components.
     *
     */
    var Pivot = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Pivot
         * @constructor
         */
        function Pivot(container) {
            this._container = container;
            this._addListeners();
            // Show the first pivot's content
            var firstContent = this._container.querySelector(".ms-Pivot-content");
            firstContent.style.display = "block";
        }
        Pivot.prototype.removeListeners = function () {
            this._container.removeEventListener("click", this._selectTab.bind(this));
        };
        Pivot.prototype._addListeners = function () {
            var _this = this;
            this._container.querySelector(".ms-Pivot-links").addEventListener("click", this._selectTabMouse.bind(this), false);
            this._container.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
                    _this._selectTabKeyboard(event);
                }
            }, true);
        };
        Pivot.prototype._selectTab = function (selectedTab) {
            // Only if its a pivot link and if it doesn't have ellipsis
            if (selectedTab.classList.contains("ms-Pivot-link") && !selectedTab.querySelector(".ms-Pivot-ellipsis")) {
                // Iterate over siblings and un-select them
                var sibling = selectedTab.parentElement.firstElementChild;
                while (sibling) {
                    sibling.classList.remove("is-selected");
                    sibling = sibling.nextElementSibling;
                }
                // Select the clicked tab
                selectedTab.classList.add("is-selected");
                // Hide all of the content
                var containers = this._container.querySelectorAll(".ms-Pivot-content");
                Array.prototype.forEach.call(containers, function (el, i) {
                    el.style.display = "none";
                });
                // Show the content that corresponds to the selected tab
                var selectedContentName = selectedTab.getAttribute("data-content");
                var selectedContent = this._container.querySelector(".ms-Pivot-content[data-content='" + selectedContentName + "']");
                selectedContent.style.display = "block";
            }
        };
        Pivot.prototype._selectTabMouse = function (event) {
            event.preventDefault();
            var selectedTab = event.target;
            this._selectTab(selectedTab);
        };
        Pivot.prototype._selectTabKeyboard = function (event) {
            event.preventDefault();
            var selectedTab = event.target;
            this._selectTab(selectedTab);
        };
        return Pivot;
    }());
    fabric.Pivot = Pivot;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    "use strict";
    /**
     * ProgressIndicator component
     *
     * A component for outputting determinate progress
     *
     */
    var ProgressIndicator = (function () {
        /**
         *
         * @param {HTMLDivElement} container - the target container for an instance of ProgressIndicator
         * @constructor
         */
        function ProgressIndicator(container) {
            this.container = container;
            this.cacheDOM();
        }
        /**
         * Sets the progress percentage for a determinate
         * operation. Either use this or setProgress
         * and setTotal as setProgressPercent assumes
         * you've done a percentage calculation before
         * injecting it into the function
         * @param {number} percent - a floating point number from 0 to 1
         */
        ProgressIndicator.prototype.setProgressPercent = function (percent) {
            this._progressBar.style.width = Math.round(this._width * percent) + "px";
        };
        /**
         * Sets the progress for a determinate operation.
         * Use this in combination with setTotal.
         * @param {number} progress
         */
        ProgressIndicator.prototype.setProgress = function (progress) {
            this._progress = progress;
            var percentage = this._progress / this._total;
            this.setProgressPercent(percentage);
        };
        /**
         * Sets the total file size, etc. for a
         * determinate operation. Use this in
         * combination with setProgress
         * @param {number} total
         */
        ProgressIndicator.prototype.setTotal = function (total) {
            this._total = total;
        };
        /**
         * Sets the text for the title or label
         * of an instance
         * @param {string} name
         */
        ProgressIndicator.prototype.setName = function (name) {
            this._itemName.innerHTML = name;
        };
        /**
         * Sets the text for a description
         * of an instance
         * @param {string} name
         */
        ProgressIndicator.prototype.setDescription = function (description) {
            this._itemDescription.innerHTML = description;
        };
        /**
         * caches elements and values of the component
         *
         */
        ProgressIndicator.prototype.cacheDOM = function () {
            // an itemName element is optional
            this._itemName = this.container.querySelector(".ms-ProgressIndicator-itemName") || null;
            // an itemDescription element is optional
            this._itemDescription = this.container.querySelector(".ms-ProgressIndicator-itemDescription") || null;
            this._progressBar = this.container.querySelector(".ms-ProgressIndicator-progressBar");
            var itemProgress = this.container.querySelector(".ms-ProgressIndicator-itemProgress");
            this._width = itemProgress.offsetWidth;
        };
        return ProgressIndicator;
    }());
    fabric.ProgressIndicator = ProgressIndicator;
})(fabric || (fabric = {})); // end fabric namespace

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    var CircleObject = (function () {
        function CircleObject(element, j) {
            this.element = element;
            this.j = j;
        }
        return CircleObject;
    }());
    /**
     * Spinner Component
     *
     * An animating activity indicator.
     *
     */
    var Spinner = (function () {
        /**
         * @param {HTMLDOMElement} target - The element the Spinner will attach itself to.
         */
        function Spinner(container) {
            this.eightSize = 0.2;
            this.animationSpeed = 90;
            this.parentSize = 20;
            this.fadeIncrement = 0;
            this.circleObjects = [];
            this._target = container;
            this._init();
        }
        /**
         * @function start - starts or restarts the animation sequence
         * @memberOf fabric.Spinner
         */
        Spinner.prototype.start = function () {
            var _this = this;
            this.stop();
            this.interval = setInterval(function () {
                var i = _this.circleObjects.length;
                while (i--) {
                    _this._fade(_this.circleObjects[i]);
                }
            }, this.animationSpeed);
        };
        /**
         * @function stop - stops the animation sequence
         * @memberOf fabric.Spinner
         */
        Spinner.prototype.stop = function () {
            clearInterval(this.interval);
        };
        // private methods
        Spinner.prototype._init = function () {
            this._setTargetElement();
            this._setPropertiesForSize();
            this._createCirclesAndArrange();
            this._initializeOpacities();
            this.start();
        };
        Spinner.prototype._setPropertiesForSize = function () {
            if (this.spinner.className.indexOf("large") > -1) {
                this.parentSize = 28;
                this.eightSize = 0.179;
            }
            this.offsetSize = this.eightSize;
            this.numCircles = 8;
        };
        Spinner.prototype._setTargetElement = function () {
            // for backwards compatibility
            if (this._target.className.indexOf("ms-Spinner") === -1) {
                this.spinner = document.createElement("div");
                this.spinner.className = "ms-Spinner";
                this._target.appendChild(this.spinner);
            }
            else {
                this.spinner = this._target;
            }
        };
        Spinner.prototype._initializeOpacities = function () {
            var i = 0;
            var j = 1;
            var opacity;
            this.fadeIncrement = 1 / this.numCircles;
            for (i; i < this.numCircles; i++) {
                var circleObject = this.circleObjects[i];
                opacity = (this.fadeIncrement * j++);
                this._setOpacity(circleObject.element, opacity);
            }
        };
        Spinner.prototype._fade = function (circleObject) {
            var opacity = this._getOpacity(circleObject.element) - this.fadeIncrement;
            if (opacity <= 0) {
                opacity = 1;
            }
            this._setOpacity(circleObject.element, opacity);
        };
        Spinner.prototype._getOpacity = function (element) {
            return parseFloat(window.getComputedStyle(element).getPropertyValue("opacity"));
        };
        Spinner.prototype._setOpacity = function (element, opacity) {
            element.style.opacity = opacity.toString();
        };
        Spinner.prototype._createCircle = function () {
            var circle = document.createElement("div");
            circle.className = "ms-Spinner-circle";
            circle.style.width = circle.style.height = this.parentSize * this.offsetSize + "px";
            return circle;
        };
        Spinner.prototype._createCirclesAndArrange = function () {
            var angle = 0;
            var offset = this.parentSize * this.offsetSize;
            var step = (2 * Math.PI) / this.numCircles;
            var i = this.numCircles;
            var circleObject;
            var radius = (this.parentSize - offset) * 0.5;
            while (i--) {
                var circle = this._createCircle();
                var x = Math.round(this.parentSize * 0.5 + radius * Math.cos(angle) - circle.clientWidth * 0.5) - offset * 0.5;
                var y = Math.round(this.parentSize * 0.5 + radius * Math.sin(angle) - circle.clientHeight * 0.5) - offset * 0.5;
                this.spinner.appendChild(circle);
                circle.style.left = x + "px";
                circle.style.top = y + "px";
                angle += step;
                circleObject = new CircleObject(circle, i);
                this.circleObjects.push(circleObject);
            }
        };
        return Spinner;
    }());
    fabric.Spinner = Spinner;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
/**
 * @namespace fabric
 */
var fabric;
(function (fabric) {
    "use strict";
    var Table = (function () {
        function Table(container) {
            this.container = container;
            // Is the table selectable?
            if (this.container.className.indexOf("ms-Table--selectable") !== -1) {
                this._addListeners();
            }
        }
        /**
         * Add event listeners
         */
        Table.prototype._addListeners = function () {
            this.container.addEventListener("click", this._toggleRowSelection.bind(this), false);
        };
        /**
         * Select or deselect a row
         */
        Table.prototype._toggleRowSelection = function (event) {
            var selectedRow = event.target.parentElement;
            if (selectedRow.tagName === "TR") {
                var selectedStateClass = "is-selected";
                // Toggle the selected state class
                if (selectedRow.className === selectedStateClass) {
                    selectedRow.className = "";
                }
                else {
                    selectedRow.className = selectedStateClass;
                }
            }
        };
        return Table;
    }());
    fabric.Table = Table;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
var fabric;
(function (fabric) {
    var TextFieldConsts;
    (function (TextFieldConsts) {
        (function (Type) {
            Type[Type["Placeholder"] = 0] = "Placeholder";
            Type[Type["Underlined"] = 1] = "Underlined";
        })(TextFieldConsts.Type || (TextFieldConsts.Type = {}));
        var Type = TextFieldConsts.Type;
    })(TextFieldConsts || (TextFieldConsts = {}));
    /**
     * Text Field Plugin
     *
     * Adds basic demonstration functionality to .ms-TextField components.
     */
    var TextField = (function () {
        /**
         *
         * @param {HTMLDivElement} container - the target container for an instance of TextField
         * @constructor
         */
        function TextField(container) {
            this._container = container;
            this._type = [];
            this._textField = this._container.querySelector(".ms-TextField-field");
            this._textFieldLabel = this._container.querySelector(".ms-Label");
            this._setTextFieldType();
            this._addListeners();
        }
        /** Populate _type with various kinds of text fields */
        TextField.prototype._setTextFieldType = function () {
            if (this._container.classList.contains("ms-TextField--placeholder")) {
                this._type.push(TextFieldConsts.Type.Placeholder);
            }
            if (this._container.classList.contains("ms-TextField--underlined")) {
                this._type.push(TextFieldConsts.Type.Underlined);
            }
        };
        /** Add event listeners according to the type(s) of text field */
        TextField.prototype._addListeners = function () {
            var _this = this;
            // Ensure that the text box gets focus when the label is clicked.
            this._textFieldLabel.addEventListener("click", function (event) {
                _this._textField.focus();
            });
            /** Placeholder - hide/unhide the placeholder  */
            if (this._type.indexOf(TextFieldConsts.Type.Placeholder) >= 0) {
                this._textField.addEventListener("focus", function (event) {
                    _this._textFieldLabel.style.display = "none";
                });
                this._textField.addEventListener("blur", function (event) {
                    // Show only if no value in the text field
                    if (_this._textField.value.length === 0) {
                        _this._textFieldLabel.style.display = "block";
                    }
                });
            }
            /** Underlined - adding/removing a focus class  */
            if (this._type.indexOf(TextFieldConsts.Type.Underlined) >= 0) {
                this._textField.addEventListener("focus", function (event) {
                    _this._container.classList.add("is-active");
                });
                this._textField.addEventListener("blur", function (event) {
                    _this._container.classList.remove("is-active");
                });
            }
        };
        return TextField;
    }());
    fabric.TextField = TextField;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
"use strict";
var fabric;
(function (fabric) {
    /**
     * Toggle Plugin
     *
     * Adds basic demonstration functionality to .ms-Toggle components.
     *
     */
    var Toggle = (function () {
        /**
         *
         * @param {HTMLElement} container - the target container for an instance of Toggle
         * @constructor
         */
        function Toggle(container) {
            this._container = container;
            this._toggleField = this._container.querySelector(".ms-Toggle-field");
            this._addListeners();
        }
        Toggle.prototype.removeListeners = function () {
            this._toggleField.removeEventListener("click", this._toggleHandler.bind(this));
        };
        Toggle.prototype._addListeners = function () {
            var _this = this;
            this._toggleField.addEventListener("click", this._toggleHandler.bind(this), false);
            this._toggleField.addEventListener("keyup", function (e) { return (e.keyCode === 32) ? _this._toggleHandler() : null; }, false);
        };
        Toggle.prototype._toggleHandler = function () {
            this._toggleField.classList.toggle("is-selected");
        };
        return Toggle;
    }());
    fabric.Toggle = Toggle;
})(fabric || (fabric = {}));

// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.
// "use strict";
// CustomEvent Polyfill to support IE
(function () {
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    ;
    CustomEvent.prototype = Event.prototype;
    window.CustomEvent = CustomEvent;
})();

// prevent console.log() from breaking IE
Pxlml.console.init();

jQuery(document).ready(function($) {
	//set up mobile ui including mobile nav
	Pxlml.mobileUI.init();

	//set up wiki layout help classes
	Pxlml.wiki.init(); 

	Pxlml.layout.init();
});
