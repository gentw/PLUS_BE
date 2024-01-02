(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_error_Error404_vue"],{

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

/***/ "./resources/js/src/assets/images/pages/error-dark.svg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/error-dark.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/error-dark.svg?66475d0024838ce2598bc76b6f2f1cd8");

/***/ }),

/***/ "./resources/js/src/assets/images/pages/error.svg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/error.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/error.svg?62c8b8105cc9cc623f709972e19d39fb");

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=46f77075& */ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony import */ var _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__.render,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/Logo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:0)\nFile was processed with these loaders:\n * ./node_modules/vue-loader/lib/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n> <svg\n|   viewBox=\"0 0 139 95\"\n|   version=\"1.1\"");

/***/ }),

/***/ "./resources/js/src/views/error/Error404.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/error/Error404.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Error404_vue_vue_type_template_id_691df481___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error404.vue?vue&type=template&id=691df481& */ "./resources/js/src/views/error/Error404.vue?vue&type=template&id=691df481&");
/* harmony import */ var _Error404_vue_vue_type_template_id_691df481___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Error404_vue_vue_type_template_id_691df481___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error404.vue?vue&type=script&lang=js& */ "./resources/js/src/views/error/Error404.vue?vue&type=script&lang=js&");
/* harmony import */ var _Error404_vue_vue_type_style_index_0_id_691df481_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error404.vue?vue&type=style&index=0&id=691df481&lang=scss& */ "./resources/js/src/views/error/Error404.vue?vue&type=style&index=0&id=691df481&lang=scss&");
/* harmony import */ var _Error404_vue_vue_type_style_index_0_id_691df481_lang_scss___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Error404_vue_vue_type_style_index_0_id_691df481_lang_scss___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Error404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Error404_vue_vue_type_template_id_691df481___WEBPACK_IMPORTED_MODULE_0__.render,
  _Error404_vue_vue_type_template_id_691df481___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/error/Error404.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/error/Error404.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/error/Error404.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/button/button.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/image/img.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable global-require */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VuexyLogo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__.BLink,
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__.BButton,
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__.BImg,
  },
  data() {
    return {
      downImg: __webpack_require__(/*! @/assets/images/pages/error.svg */ "./resources/js/src/assets/images/pages/error.svg"),
    }
  },
  computed: {
    imgUrl() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = __webpack_require__(/*! @/assets/images/pages/error-dark.svg */ "./resources/js/src/assets/images/pages/error-dark.svg")
        return this.downImg
      }
      return this.downImg
    },
  },
});


/***/ }),

/***/ "./resources/js/src/views/error/Error404.vue?vue&type=style&index=0&id=691df481&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/error/Error404.vue?vue&type=style&index=0&id=691df481&lang=scss& ***!
  \*************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected character '@' (72:0)\nFile was processed with these loaders:\n * ./node_modules/vue-loader/lib/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n| \n> @import '@resources/scss/vue/pages/page-misc.scss';\n| ");

/***/ }),

/***/ "./resources/js/src/views/error/Error404.vue?vue&type=template&id=691df481&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/error/Error404.vue?vue&type=template&id=691df481& ***!
  \**********************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:2)\nFile was processed with these loaders:\n * ./node_modules/vue-loader/lib/index.js\nYou may need an additional loader to handle the result of these loaders.\n| \n>   <!-- Error page-->\n|   <div class=\"misc-wrapper\">\n|     <b-link class=\"brand-logo\">");

/***/ })

}]);