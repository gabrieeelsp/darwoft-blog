import {
  require_Draft,
  require_immutable
} from "./chunk-6HFA5IY7.js";
import "./chunk-6IPORAYN.js";
import "./chunk-BM6B6MNN.js";
import {
  __toESM
} from "./chunk-UV5CTPV7.js";

// node_modules/draft-js-export-html/esm/helpers/combineOrderedStyles.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function combineOrderedStyles(customMap, defaults) {
  if (customMap == null) {
    return defaults;
  }
  var _defaults = _slicedToArray(defaults, 2), defaultStyleMap = _defaults[0], defaultStyleOrder = _defaults[1];
  var styleMap = _objectSpread({}, defaultStyleMap);
  var styleOrder = _toConsumableArray(defaultStyleOrder);
  for (var _i2 = 0, _Object$keys = Object.keys(customMap); _i2 < _Object$keys.length; _i2++) {
    var _styleName = _Object$keys[_i2];
    if (defaultStyleMap.hasOwnProperty(_styleName)) {
      var defaultStyles = defaultStyleMap[_styleName];
      styleMap[_styleName] = _objectSpread({}, defaultStyles, {}, customMap[_styleName]);
    } else {
      styleMap[_styleName] = customMap[_styleName];
      styleOrder.push(_styleName);
    }
  }
  return [styleMap, styleOrder];
}
var combineOrderedStyles_default = combineOrderedStyles;

// node_modules/draft-js-export-html/esm/helpers/normalizeAttributes.js
var ATTR_NAME_MAP = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
function normalizeAttributes(attributes) {
  if (attributes == null) {
    return attributes;
  }
  var normalized = {};
  var didNormalize = false;
  for (var _i = 0, _Object$keys = Object.keys(attributes); _i < _Object$keys.length; _i++) {
    var name = _Object$keys[_i];
    var newName = name;
    if (ATTR_NAME_MAP.hasOwnProperty(name)) {
      newName = ATTR_NAME_MAP[name];
      didNormalize = true;
    }
    normalized[newName] = attributes[name];
  }
  return didNormalize ? normalized : attributes;
}
var normalizeAttributes_default = normalizeAttributes;

// node_modules/draft-js-export-html/esm/helpers/styleToCSS.js
var VENDOR_PREFIX = /^(moz|ms|o|webkit)-/;
var NUMERIC_STRING = /^\d+$/;
var UPPERCASE_PATTERN = /([A-Z])/g;
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
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
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
function processStyleName(name) {
  return name.replace(UPPERCASE_PATTERN, "-$1").toLowerCase().replace(VENDOR_PREFIX, "-$1-");
}
function processStyleValue(name, value) {
  var isNumeric;
  if (typeof value === "string") {
    isNumeric = NUMERIC_STRING.test(value);
  } else {
    isNumeric = true;
    value = String(value);
  }
  if (!isNumeric || value === "0" || isUnitlessNumber[name] === true) {
    return value;
  } else {
    return value + "px";
  }
}
function styleToCSS(styleDescr) {
  return Object.keys(styleDescr).map(function(name) {
    var styleValue = processStyleValue(name, styleDescr[name]);
    var styleName = processStyleName(name);
    return "".concat(styleName, ": ").concat(styleValue);
  }).join("; ");
}
var styleToCSS_default = styleToCSS;

// node_modules/draft-js-utils/esm/Constants.js
var BLOCK_TYPE = {
  // This is used to represent a normal text block (paragraph).
  UNSTYLED: "unstyled",
  HEADER_ONE: "header-one",
  HEADER_TWO: "header-two",
  HEADER_THREE: "header-three",
  HEADER_FOUR: "header-four",
  HEADER_FIVE: "header-five",
  HEADER_SIX: "header-six",
  UNORDERED_LIST_ITEM: "unordered-list-item",
  ORDERED_LIST_ITEM: "ordered-list-item",
  BLOCKQUOTE: "blockquote",
  PULLQUOTE: "pullquote",
  CODE: "code-block",
  ATOMIC: "atomic"
};
var ENTITY_TYPE = {
  LINK: "LINK",
  IMAGE: "IMAGE",
  EMBED: "embed"
};
var INLINE_STYLE = {
  BOLD: "BOLD",
  CODE: "CODE",
  ITALIC: "ITALIC",
  STRIKETHROUGH: "STRIKETHROUGH",
  UNDERLINE: "UNDERLINE"
};

// node_modules/draft-js-utils/esm/getEntityRanges.js
var import_immutable = __toESM(require_immutable());
var EMPTY_SET = new import_immutable.OrderedSet();
function getEntityRanges(text, charMetaList) {
  var charEntity = null;
  var prevCharEntity = null;
  var ranges = [];
  var rangeStart = 0;
  for (var i = 0, len = text.length; i < len; i++) {
    prevCharEntity = charEntity;
    var meta = charMetaList.get(i);
    charEntity = meta ? meta.getEntity() : null;
    if (i > 0 && charEntity !== prevCharEntity) {
      ranges.push([prevCharEntity, getStyleRanges(text.slice(rangeStart, i), charMetaList.slice(rangeStart, i))]);
      rangeStart = i;
    }
  }
  ranges.push([charEntity, getStyleRanges(text.slice(rangeStart), charMetaList.slice(rangeStart))]);
  return ranges;
}
function getStyleRanges(text, charMetaList) {
  var charStyle = EMPTY_SET;
  var prevCharStyle = EMPTY_SET;
  var ranges = [];
  var rangeStart = 0;
  for (var i = 0, len = text.length; i < len; i++) {
    prevCharStyle = charStyle;
    var meta = charMetaList.get(i);
    charStyle = meta ? meta.getStyle() : EMPTY_SET;
    if (i > 0 && !(0, import_immutable.is)(charStyle, prevCharStyle)) {
      ranges.push([text.slice(rangeStart, i), prevCharStyle]);
      rangeStart = i;
    }
  }
  ranges.push([text.slice(rangeStart), charStyle]);
  return ranges;
}

// node_modules/draft-js-utils/esm/callModifierForSelectedBlocks.js
var import_draft_js = __toESM(require_Draft());

// node_modules/draft-js-export-html/esm/stateToHTML.js
var _DEFAULT_STYLE_MAP;
var _ENTITY_ATTR_MAP;
var _DATA_TO_ATTR;
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }
  if (enumerableOnly)
    keys = keys.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(source, true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(source).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit2(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
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
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BOLD = INLINE_STYLE.BOLD;
var CODE = INLINE_STYLE.CODE;
var ITALIC = INLINE_STYLE.ITALIC;
var STRIKETHROUGH = INLINE_STYLE.STRIKETHROUGH;
var UNDERLINE = INLINE_STYLE.UNDERLINE;
var INDENT = "  ";
var BREAK = "<br>";
var DATA_ATTRIBUTE = /^data-([a-z0-9-]+)$/;
var DEFAULT_STYLE_MAP = (_DEFAULT_STYLE_MAP = {}, _defineProperty2(_DEFAULT_STYLE_MAP, BOLD, {
  element: "strong"
}), _defineProperty2(_DEFAULT_STYLE_MAP, CODE, {
  element: "code"
}), _defineProperty2(_DEFAULT_STYLE_MAP, ITALIC, {
  element: "em"
}), _defineProperty2(_DEFAULT_STYLE_MAP, STRIKETHROUGH, {
  element: "del"
}), _defineProperty2(_DEFAULT_STYLE_MAP, UNDERLINE, {
  element: "u"
}), _DEFAULT_STYLE_MAP);
var DEFAULT_STYLE_ORDER = [BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE];
var ENTITY_ATTR_MAP = (_ENTITY_ATTR_MAP = {}, _defineProperty2(_ENTITY_ATTR_MAP, ENTITY_TYPE.LINK, {
  url: "href",
  href: "href",
  rel: "rel",
  target: "target",
  title: "title",
  className: "class"
}), _defineProperty2(_ENTITY_ATTR_MAP, ENTITY_TYPE.IMAGE, {
  src: "src",
  height: "height",
  width: "width",
  alt: "alt",
  className: "class"
}), _ENTITY_ATTR_MAP);
var DATA_TO_ATTR = (_DATA_TO_ATTR = {}, _defineProperty2(_DATA_TO_ATTR, ENTITY_TYPE.LINK, function(entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
    var dataKey = _Object$keys[_i];
    var dataValue = data[dataKey];
    if (attrMap.hasOwnProperty(dataKey)) {
      var attrKey = attrMap[dataKey];
      attrs[attrKey] = dataValue;
    } else if (DATA_ATTRIBUTE.test(dataKey)) {
      attrs[dataKey] = dataValue;
    }
  }
  return attrs;
}), _defineProperty2(_DATA_TO_ATTR, ENTITY_TYPE.IMAGE, function(entityType, entity) {
  var attrMap = ENTITY_ATTR_MAP.hasOwnProperty(entityType) ? ENTITY_ATTR_MAP[entityType] : {};
  var data = entity.getData();
  var attrs = {};
  for (var _i2 = 0, _Object$keys2 = Object.keys(data); _i2 < _Object$keys2.length; _i2++) {
    var dataKey = _Object$keys2[_i2];
    var dataValue = data[dataKey];
    if (attrMap.hasOwnProperty(dataKey)) {
      var attrKey = attrMap[dataKey];
      attrs[attrKey] = dataValue;
    } else if (DATA_ATTRIBUTE.test(dataKey)) {
      attrs[dataKey] = dataValue;
    }
  }
  return attrs;
}), _DATA_TO_ATTR);
function getTags(blockType, defaultBlockTag) {
  switch (blockType) {
    case BLOCK_TYPE.HEADER_ONE:
      return ["h1"];
    case BLOCK_TYPE.HEADER_TWO:
      return ["h2"];
    case BLOCK_TYPE.HEADER_THREE:
      return ["h3"];
    case BLOCK_TYPE.HEADER_FOUR:
      return ["h4"];
    case BLOCK_TYPE.HEADER_FIVE:
      return ["h5"];
    case BLOCK_TYPE.HEADER_SIX:
      return ["h6"];
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return ["li"];
    case BLOCK_TYPE.BLOCKQUOTE:
      return ["blockquote"];
    case BLOCK_TYPE.CODE:
      return ["pre", "code"];
    case BLOCK_TYPE.ATOMIC:
      return ["figure"];
    default:
      if (defaultBlockTag === null) {
        return [];
      }
      return [defaultBlockTag || "p"];
  }
}
function getWrapperTag(blockType) {
  switch (blockType) {
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
      return "ul";
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return "ol";
    default:
      return null;
  }
}
var MarkupGenerator = function() {
  function MarkupGenerator2(contentState, options) {
    _classCallCheck(this, MarkupGenerator2);
    _defineProperty2(this, "blocks", void 0);
    _defineProperty2(this, "contentState", void 0);
    _defineProperty2(this, "currentBlock", void 0);
    _defineProperty2(this, "indentLevel", void 0);
    _defineProperty2(this, "output", void 0);
    _defineProperty2(this, "totalBlocks", void 0);
    _defineProperty2(this, "wrapperTag", void 0);
    _defineProperty2(this, "options", void 0);
    _defineProperty2(this, "inlineStyles", void 0);
    _defineProperty2(this, "inlineStyleFn", void 0);
    _defineProperty2(this, "styleOrder", void 0);
    if (options == null) {
      options = {};
    }
    this.contentState = contentState;
    this.options = options;
    var _combineOrderedStyles = combineOrderedStyles_default(options.inlineStyles, [DEFAULT_STYLE_MAP, DEFAULT_STYLE_ORDER]), _combineOrderedStyles2 = _slicedToArray2(_combineOrderedStyles, 2), inlineStyles = _combineOrderedStyles2[0], styleOrder = _combineOrderedStyles2[1];
    this.inlineStyles = inlineStyles;
    this.inlineStyleFn = options.inlineStyleFn;
    this.styleOrder = styleOrder;
  }
  _createClass(MarkupGenerator2, [{
    key: "generate",
    value: function generate() {
      this.output = [];
      this.blocks = this.contentState.getBlocksAsArray();
      this.totalBlocks = this.blocks.length;
      this.currentBlock = 0;
      this.indentLevel = 0;
      this.wrapperTag = null;
      while (this.currentBlock < this.totalBlocks) {
        this.processBlock();
      }
      this.closeWrapperTag();
      return this.output.join("").trim();
    }
  }, {
    key: "processBlock",
    value: function processBlock() {
      var _this$options = this.options, blockRenderers = _this$options.blockRenderers, defaultBlockTag = _this$options.defaultBlockTag;
      var block = this.blocks[this.currentBlock];
      var blockType = block.getType();
      var newWrapperTag = getWrapperTag(blockType);
      if (this.wrapperTag !== newWrapperTag) {
        if (this.wrapperTag) {
          this.closeWrapperTag();
        }
        if (newWrapperTag) {
          this.openWrapperTag(newWrapperTag);
        }
      }
      this.indent();
      var customRenderer = blockRenderers != null && blockRenderers.hasOwnProperty(blockType) ? blockRenderers[blockType] : null;
      var customRendererOutput = customRenderer ? customRenderer(block) : null;
      if (customRendererOutput != null) {
        this.output.push(customRendererOutput);
        this.output.push("\n");
        this.currentBlock += 1;
        return;
      }
      this.writeStartTag(block, defaultBlockTag);
      this.output.push(this.renderBlockContent(block));
      var nextBlock = this.getNextBlock();
      if (canHaveDepth(blockType) && nextBlock && nextBlock.getDepth() === block.getDepth() + 1) {
        this.output.push("\n");
        var thisWrapperTag = this.wrapperTag;
        this.wrapperTag = null;
        this.indentLevel += 1;
        this.currentBlock += 1;
        this.processBlocksAtDepth(nextBlock.getDepth());
        this.wrapperTag = thisWrapperTag;
        this.indentLevel -= 1;
        this.indent();
      } else {
        this.currentBlock += 1;
      }
      this.writeEndTag(block, defaultBlockTag);
    }
  }, {
    key: "processBlocksAtDepth",
    value: function processBlocksAtDepth(depth) {
      var block = this.blocks[this.currentBlock];
      while (block && block.getDepth() === depth) {
        this.processBlock();
        block = this.blocks[this.currentBlock];
      }
      this.closeWrapperTag();
    }
  }, {
    key: "getNextBlock",
    value: function getNextBlock() {
      return this.blocks[this.currentBlock + 1];
    }
  }, {
    key: "writeStartTag",
    value: function writeStartTag(block, defaultBlockTag) {
      var tags = getTags(block.getType(), defaultBlockTag);
      var attrString;
      if (this.options.blockStyleFn) {
        var _ref = this.options.blockStyleFn(block) || {}, attributes = _ref.attributes, _style = _ref.style;
        attributes = normalizeAttributes_default(attributes);
        if (_style != null) {
          var styleAttr = styleToCSS_default(_style);
          attributes = attributes == null ? {
            style: styleAttr
          } : _objectSpread2({}, attributes, {
            style: styleAttr
          });
        }
        attrString = stringifyAttrs(attributes);
      } else {
        attrString = "";
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tag = _step.value;
          this.output.push("<".concat(tag).concat(attrString, ">"));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "writeEndTag",
    value: function writeEndTag(block, defaultBlockTag) {
      var tags = getTags(block.getType(), defaultBlockTag);
      if (tags.length === 1) {
        this.output.push("</".concat(tags[0], ">\n"));
      } else {
        var output = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = void 0;
        try {
          for (var _iterator2 = tags[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tag = _step2.value;
            output.unshift("</".concat(tag, ">"));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
        this.output.push(output.join("") + "\n");
      }
    }
  }, {
    key: "openWrapperTag",
    value: function openWrapperTag(wrapperTag) {
      this.wrapperTag = wrapperTag;
      this.indent();
      this.output.push("<".concat(wrapperTag, ">\n"));
      this.indentLevel += 1;
    }
  }, {
    key: "closeWrapperTag",
    value: function closeWrapperTag() {
      var wrapperTag = this.wrapperTag;
      if (wrapperTag) {
        this.indentLevel -= 1;
        this.indent();
        this.output.push("</".concat(wrapperTag, ">\n"));
        this.wrapperTag = null;
      }
    }
  }, {
    key: "indent",
    value: function indent() {
      this.output.push(INDENT.repeat(this.indentLevel));
    }
  }, {
    key: "withCustomInlineStyles",
    value: function withCustomInlineStyles(content, styleSet) {
      if (!this.inlineStyleFn) {
        return content;
      }
      var renderConfig = this.inlineStyleFn(styleSet);
      if (!renderConfig) {
        return content;
      }
      var _renderConfig$element = renderConfig.element, element = _renderConfig$element === void 0 ? "span" : _renderConfig$element, attributes = renderConfig.attributes, style = renderConfig.style;
      var attrString = stringifyAttrs(_objectSpread2({}, attributes, {
        style: style && styleToCSS_default(style)
      }));
      return "<".concat(element).concat(attrString, ">").concat(content, "</").concat(element, ">");
    }
  }, {
    key: "renderBlockContent",
    value: function renderBlockContent(block) {
      var _this = this;
      var blockType = block.getType();
      var text = block.getText();
      if (text === "") {
        return BREAK;
      }
      text = this.preserveWhitespace(text);
      var charMetaList = block.getCharacterList();
      var entityPieces = getEntityRanges(text, charMetaList);
      return entityPieces.map(function(_ref2) {
        var _ref3 = _slicedToArray2(_ref2, 2), entityKey = _ref3[0], stylePieces = _ref3[1];
        var content = stylePieces.map(function(_ref4) {
          var _ref5 = _slicedToArray2(_ref4, 2), text2 = _ref5[0], styleSet = _ref5[1];
          var content2 = encodeContent(text2);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = void 0;
          try {
            for (var _iterator3 = _this.styleOrder[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _styleName = _step3.value;
              if (_styleName === CODE && blockType === BLOCK_TYPE.CODE) {
                continue;
              }
              if (styleSet.has(_styleName)) {
                var _this$inlineStyles$_s = _this.inlineStyles[_styleName], element2 = _this$inlineStyles$_s.element, attributes2 = _this$inlineStyles$_s.attributes, _style2 = _this$inlineStyles$_s.style;
                if (element2 == null) {
                  element2 = "span";
                }
                attributes2 = normalizeAttributes_default(attributes2);
                if (_style2 != null) {
                  var styleAttr2 = styleToCSS_default(_style2);
                  attributes2 = attributes2 == null ? {
                    style: styleAttr2
                  } : _objectSpread2({}, attributes2, {
                    style: styleAttr2
                  });
                }
                var attrString2 = stringifyAttrs(attributes2);
                content2 = "<".concat(element2).concat(attrString2, ">").concat(content2, "</").concat(element2, ">");
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          return _this.withCustomInlineStyles(content2, styleSet);
        }).join("");
        var entity = entityKey ? _this.contentState.getEntity(entityKey) : null;
        var entityType = entity == null ? null : entity.getType().toUpperCase();
        var entityStyle;
        if (entity != null && _this.options.entityStyleFn && (entityStyle = _this.options.entityStyleFn(entity))) {
          var _entityStyle = entityStyle, element = _entityStyle.element, attributes = _entityStyle.attributes, _style3 = _entityStyle.style;
          if (element == null) {
            element = "span";
          }
          attributes = normalizeAttributes_default(attributes);
          if (_style3 != null) {
            var styleAttr = styleToCSS_default(_style3);
            attributes = attributes == null ? {
              style: styleAttr
            } : _objectSpread2({}, attributes, {
              style: styleAttr
            });
          }
          var attrString = stringifyAttrs(attributes);
          return "<".concat(element).concat(attrString, ">").concat(content, "</").concat(element, ">");
        } else if (entityType != null && entityType === ENTITY_TYPE.LINK) {
          var attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
          var _attrString = stringifyAttrs(attrs);
          return "<a".concat(_attrString, ">").concat(content, "</a>");
        } else if (entityType != null && entityType === ENTITY_TYPE.IMAGE) {
          var _attrs = DATA_TO_ATTR.hasOwnProperty(entityType) ? DATA_TO_ATTR[entityType](entityType, entity) : null;
          var _attrString2 = stringifyAttrs(_attrs);
          return "<img".concat(_attrString2, "/>");
        } else {
          return content;
        }
      }).join("");
    }
  }, {
    key: "preserveWhitespace",
    value: function preserveWhitespace(text) {
      var length = text.length;
      var newText = new Array(length);
      for (var i = 0; i < length; i++) {
        if (text[i] === " " && (i === 0 || i === length - 1 || text[i - 1] === " ")) {
          newText[i] = " ";
        } else {
          newText[i] = text[i];
        }
      }
      return newText.join("");
    }
  }]);
  return MarkupGenerator2;
}();
function stringifyAttrs(attrs) {
  if (attrs == null) {
    return "";
  }
  var parts = [];
  for (var _i3 = 0, _Object$keys3 = Object.keys(attrs); _i3 < _Object$keys3.length; _i3++) {
    var name = _Object$keys3[_i3];
    var value = attrs[name];
    if (value != null) {
      parts.push(" ".concat(name, '="').concat(encodeAttr(value + ""), '"'));
    }
  }
  return parts.join("");
}
function canHaveDepth(blockType) {
  switch (blockType) {
    case BLOCK_TYPE.UNORDERED_LIST_ITEM:
    case BLOCK_TYPE.ORDERED_LIST_ITEM:
      return true;
    default:
      return false;
  }
}
function encodeContent(text) {
  return text.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join("&nbsp;").split("\n").join(BREAK + "\n");
}
function encodeAttr(text) {
  return text.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;");
}
function stateToHTML(content, options) {
  return new MarkupGenerator(content, options).generate();
}
export {
  stateToHTML
};
//# sourceMappingURL=draft-js-export-html.js.map
