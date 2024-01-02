(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_SecondPage_vue"],{

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-body.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-body.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardBody": () => (/* binding */ BCardBody),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
/* harmony import */ var _card_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-title */ "./node_modules/bootstrap-vue/esm/components/card/card-title.js");
/* harmony import */ var _card_sub_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-sub-title */ "./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _card_title__WEBPACK_IMPORTED_MODULE_2__.props), _card_sub_title__WEBPACK_IMPORTED_MODULE_3__.props), (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_mixins_card__WEBPACK_IMPORTED_MODULE_4__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'body'))), {}, {
  bodyClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_ARRAY_OBJECT_STRING),
  overlay: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_6__.NAME_CARD_BODY); // --- Main component ---
// @vue/component

var BCardBody = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_7__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_6__.NAME_CARD_BODY,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var bodyBgVariant = props.bodyBgVariant,
        bodyBorderVariant = props.bodyBorderVariant,
        bodyTextVariant = props.bodyTextVariant;
    var $title = h();

    if (props.title) {
      $title = h(_card_title__WEBPACK_IMPORTED_MODULE_2__.BCardTitle, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_title__WEBPACK_IMPORTED_MODULE_2__.props, props)
      });
    }

    var $subTitle = h();

    if (props.subTitle) {
      $subTitle = h(_card_sub_title__WEBPACK_IMPORTED_MODULE_3__.BCardSubTitle, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_sub_title__WEBPACK_IMPORTED_MODULE_3__.props, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, (0,_vue__WEBPACK_IMPORTED_MODULE_8__.mergeData)(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, _defineProperty(_ref2, "bg-".concat(bodyBgVariant), bodyBgVariant), _defineProperty(_ref2, "border-".concat(bodyBorderVariant), bodyBorderVariant), _defineProperty(_ref2, "text-".concat(bodyTextVariant), bodyTextVariant), _ref2), props.bodyClass]
    }), [$title, $subTitle, children]);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-footer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-footer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardFooter": () => (/* binding */ BCardFooter),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_mixins_card__WEBPACK_IMPORTED_MODULE_2__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'footer'))), {}, {
  footer: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  footerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_OBJECT_STRING),
  footerHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING)
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_FOOTER); // --- Main component ---
// @vue/component

var BCardFooter = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_FOOTER,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var footerBgVariant = props.footerBgVariant,
        footerBorderVariant = props.footerBorderVariant,
        footerTextVariant = props.footerTextVariant;
    return h(props.footerTag, (0,_vue__WEBPACK_IMPORTED_MODULE_6__.mergeData)(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(footerBgVariant), footerBgVariant), _defineProperty(_ref2, "border-".concat(footerBorderVariant), footerBorderVariant), _defineProperty(_ref2, "text-".concat(footerTextVariant), footerTextVariant), _ref2)],
      domProps: children ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_7__.htmlOrText)(props.footerHtml, props.footer)
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-header.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-header.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardHeader": () => (/* binding */ BCardHeader),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_mixins_card__WEBPACK_IMPORTED_MODULE_2__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'header'))), {}, {
  header: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  headerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_OBJECT_STRING),
  headerHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING)
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_HEADER); // --- Main component ---
// @vue/component

var BCardHeader = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_HEADER,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var headerBgVariant = props.headerBgVariant,
        headerBorderVariant = props.headerBorderVariant,
        headerTextVariant = props.headerTextVariant;
    return h(props.headerTag, (0,_vue__WEBPACK_IMPORTED_MODULE_6__.mergeData)(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(headerBgVariant), headerBgVariant), _defineProperty(_ref2, "border-".concat(headerBorderVariant), headerBorderVariant), _defineProperty(_ref2, "text-".concat(headerTextVariant), headerTextVariant), _ref2)],
      domProps: children ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_7__.htmlOrText)(props.headerHtml, props.header)
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-img.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-img.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardImg": () => (/* binding */ BCardImg),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _image_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/img */ "./node_modules/bootstrap-vue/esm/components/image/img.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread({}, (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.pick)(_image_img__WEBPACK_IMPORTED_MODULE_2__.props, ['src', 'alt', 'width', 'height', 'left', 'right'])), {}, {
  bottom: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  end: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  start: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  top: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_IMG); // --- Main component ---
// @vue/component

var BCardImg = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_IMG,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var src = props.src,
        alt = props.alt,
        width = props.width,
        height = props.height;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    }

    return h('img', (0,_vue__WEBPACK_IMPORTED_MODULE_6__.mergeData)(data, {
      class: baseClass,
      attrs: {
        src: src,
        alt: alt,
        width: width,
        height: height
      }
    }));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardSubTitle": () => (/* binding */ BCardSubTitle),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  subTitle: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  subTitleTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'h6'),
  subTitleTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'muted')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_SUB_TITLE); // --- Main component ---
// @vue/component

var BCardSubTitle = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_SUB_TITLE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.subTitleTag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'card-subtitle',
      class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
    }), children || (0,_utils_string__WEBPACK_IMPORTED_MODULE_5__.toString)(props.subTitle));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-text.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-text.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardText": () => (/* binding */ BCardText),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  textTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'p')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TEXT); // --- Main component ---
// @vue/component

var BCardText = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TEXT,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.textTag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'card-text'
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-title.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-title.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardTitle": () => (/* binding */ BCardTitle),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  title: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  titleTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'h4')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TITLE); // --- Main component ---
// @vue/component

var BCardTitle = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TITLE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'card-title'
    }), children || (0,_utils_string__WEBPACK_IMPORTED_MODULE_5__.toString)(props.title));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCard": () => (/* binding */ BCard),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
/* harmony import */ var _card_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-body */ "./node_modules/bootstrap-vue/esm/components/card/card-body.js");
/* harmony import */ var _card_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-header */ "./node_modules/bootstrap-vue/esm/components/card/card-header.js");
/* harmony import */ var _card_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-footer */ "./node_modules/bootstrap-vue/esm/components/card/card-footer.js");
/* harmony import */ var _card_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-img */ "./node_modules/bootstrap-vue/esm/components/card/card-img.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // --- Props ---

var cardImgProps = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_card_img__WEBPACK_IMPORTED_MODULE_1__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'img'));
cardImgProps.imgSrc.required = false;
var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _card_body__WEBPACK_IMPORTED_MODULE_3__.props), _card_header__WEBPACK_IMPORTED_MODULE_4__.props), _card_footer__WEBPACK_IMPORTED_MODULE_5__.props), cardImgProps), _mixins_card__WEBPACK_IMPORTED_MODULE_6__.props), {}, {
  align: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_STRING),
  noBody: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_CARD); // --- Main component ---
// @vue/component

var BCard = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_9__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_CARD,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var imgSrc = props.imgSrc,
        imgLeft = props.imgLeft,
        imgRight = props.imgRight,
        imgStart = props.imgStart,
        imgEnd = props.imgEnd,
        imgBottom = props.imgBottom,
        header = props.header,
        headerHtml = props.headerHtml,
        footer = props.footer,
        footerHtml = props.footerHtml,
        align = props.align,
        textVariant = props.textVariant,
        bgVariant = props.bgVariant,
        borderVariant = props.borderVariant;
    var $scopedSlots = scopedSlots || {};
    var $slots = slots();
    var slotScope = {};
    var $imgFirst = h();
    var $imgLast = h();

    if (imgSrc) {
      var $img = h(_card_img__WEBPACK_IMPORTED_MODULE_1__.BCardImg, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(cardImgProps, props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.unprefixPropName.bind(null, 'img'))
      });

      if (imgBottom) {
        $imgLast = $img;
      } else {
        $imgFirst = $img;
      }
    }

    var $header = h();
    var hasHeaderSlot = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.hasNormalizedSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_HEADER, $scopedSlots, $slots);

    if (hasHeaderSlot || header || headerHtml) {
      $header = h(_card_header__WEBPACK_IMPORTED_MODULE_4__.BCardHeader, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_header__WEBPACK_IMPORTED_MODULE_4__.props, props),
        domProps: hasHeaderSlot ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_12__.htmlOrText)(headerHtml, header)
      }, (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_HEADER, slotScope, $scopedSlots, $slots));
    }

    var $content = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_DEFAULT, slotScope, $scopedSlots, $slots); // Wrap content in `<card-body>` when `noBody` prop set

    if (!props.noBody) {
      $content = h(_card_body__WEBPACK_IMPORTED_MODULE_3__.BCardBody, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_body__WEBPACK_IMPORTED_MODULE_3__.props, props)
      }, $content); // When the `overlap` prop is set we need to wrap the `<b-card-img>` and `<b-card-body>`
      // into a relative positioned wrapper to don't distract a potential header or footer

      if (props.overlay && imgSrc) {
        $content = h('div', {
          staticClass: 'position-relative'
        }, [$imgFirst, $content, $imgLast]); // Reset image variables since they are already in the wrapper

        $imgFirst = h();
        $imgLast = h();
      }
    }

    var $footer = h();
    var hasFooterSlot = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.hasNormalizedSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_FOOTER, $scopedSlots, $slots);

    if (hasFooterSlot || footer || footerHtml) {
      $footer = h(_card_footer__WEBPACK_IMPORTED_MODULE_5__.BCardFooter, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_footer__WEBPACK_IMPORTED_MODULE_5__.props, props),
        domProps: hasHeaderSlot ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_12__.htmlOrText)(footerHtml, footer)
      }, (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_FOOTER, slotScope, $scopedSlots, $slots));
    }

    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_13__.mergeData)(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': imgLeft || imgStart,
        'flex-row-reverse': (imgRight || imgEnd) && !(imgLeft || imgStart)
      }, _defineProperty(_class, "text-".concat(align), align), _defineProperty(_class, "bg-".concat(bgVariant), bgVariant), _defineProperty(_class, "border-".concat(borderVariant), borderVariant), _defineProperty(_class, "text-".concat(textVariant), textVariant), _class)
    }), [$imgFirst, $header, $content, $footer, $imgLast]);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/image/img.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/image/img.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BImg": () => (/* binding */ BImg),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // --- Constants --
// Blank image with fill template

var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>'; // --- Helper methods ---

var makeBlankImgSrc = function makeBlankImgSrc(width, height, color) {
  var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(width)).replace('%{h}', (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(height)).replace('%{f}', color));
  return "data:image/svg+xml;charset=UTF-8,".concat(src);
}; // --- Props ---


var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makePropsConfigurable)({
  alt: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_STRING),
  blank: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  blankColor: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_STRING, 'transparent'),
  block: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  center: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  fluid: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  // Gives fluid images class `w-100` to make them grow to fit container
  fluidGrow: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  height: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_NUMBER_STRING),
  left: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  right: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  // Possible values:
  //   `false`: no rounding of corners
  //   `true`: slightly rounded corners
  //   'top': top corners rounded
  //   'right': right corners rounded
  //   'bottom': bottom corners rounded
  //   'left': left corners rounded
  //   'circle': circle/oval
  //   '0': force rounding off
  rounded: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN_STRING, false),
  sizes: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_ARRAY_STRING),
  src: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_STRING),
  srcset: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_ARRAY_STRING),
  thumbnail: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  width: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_NUMBER_STRING)
}, _constants_components__WEBPACK_IMPORTED_MODULE_3__.NAME_IMG); // --- Main component ---
// @vue/component

var BImg = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_4__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_3__.NAME_IMG,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data;
    var alt = props.alt,
        src = props.src,
        block = props.block,
        fluidGrow = props.fluidGrow,
        rounded = props.rounded;
    var width = (0,_utils_number__WEBPACK_IMPORTED_MODULE_5__.toInteger)(props.width) || null;
    var height = (0,_utils_number__WEBPACK_IMPORTED_MODULE_5__.toInteger)(props.height) || null;
    var align = null;
    var srcset = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(props.srcset).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity).join(',');
    var sizes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(props.sizes).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity).join(',');

    if (props.blank) {
      if (!height && width) {
        height = width;
      } else if (!width && height) {
        width = height;
      }

      if (!width && !height) {
        width = 1;
        height = 1;
      } // Make a blank SVG image


      src = makeBlankImgSrc(width, height, props.blankColor || 'transparent'); // Disable srcset and sizes

      srcset = null;
      sizes = null;
    }

    if (props.left) {
      align = 'float-left';
    } else if (props.right) {
      align = 'float-right';
    } else if (props.center) {
      align = 'mx-auto';
      block = true;
    }

    return h('img', (0,_vue__WEBPACK_IMPORTED_MODULE_8__.mergeData)(data, {
      attrs: {
        src: src,
        alt: alt,
        width: width ? (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(width) : null,
        height: height ? (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(height) : null,
        srcset: srcset || null,
        sizes: sizes || null
      },
      class: (_class = {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || fluidGrow,
        'w-100': fluidGrow,
        rounded: rounded === '' || rounded === true
      }, _defineProperty(_class, "rounded-".concat(rounded), (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_9__.isString)(rounded) && rounded !== ''), _defineProperty(_class, align, align), _defineProperty(_class, 'd-block', block), _class)
    }));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/card.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/card.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardMixin": () => (/* binding */ cardMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  bgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  borderVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'div'),
  textVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD); // --- Mixin ---
// @vue/component

var cardMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  props: props
});

/***/ }),

/***/ "./resources/js/src/views/SecondPage.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/SecondPage.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecondPage.vue?vue&type=template&id=0f0e7e4d& */ "./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d&");
/* harmony import */ var _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SecondPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondPage.vue?vue&type=script&lang=js& */ "./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SecondPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__.render,
  _SecondPage_vue_vue_type_template_id_0f0e7e4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/SecondPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/SecondPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/card/card.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/card/card-text.js");
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__.BCard,
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__.BCardText,
  },
});


/***/ }),

/***/ "./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/SecondPage.vue?vue&type=template&id=0f0e7e4d& ***!
  \******************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:0)\nFile was processed with these loaders:\n * ./node_modules/vue-loader/lib/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n> <b-card title=\"Create Awesome 🙌\">\n|   <b-card-text>This is your second page.</b-card-text>\n|   <b-card-text>Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.</b-card-text>");

/***/ })

}]);