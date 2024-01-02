(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": 'primary'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaBody"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMediaAside"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(props) {
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onMounted"])(function () {});
    return {};
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.card-transaction .transaction-item[data-v-737b0cda] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n}\n[dir=ltr] .card-transaction .transaction-item[data-v-737b0cda] {\n    margin-right: 45px;\n}\n[dir=rtl] .card-transaction .transaction-item[data-v-737b0cda] {\n    margin-left: 45px;\n}\n[dir] .card-transaction[data-v-737b0cda] {\n    margin-bottom:0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.card-transaction .transaction-item[data-v-0efb8055] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n}\n[dir=ltr] .card-transaction .transaction-item[data-v-0efb8055] {\n    margin-right: 45px;\n}\n[dir=rtl] .card-transaction .transaction-item[data-v-0efb8055] {\n    margin-left: 45px;\n}\n[dir] .card-transaction[data-v-0efb8055] {\n    margin-bottom:0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "text-center" },
    [
      _c(
        "b-avatar",
        {
          staticClass: "mb-1",
          attrs: { variant: "light-" + _vm.color, size: "45" },
        },
        [_c("feather-icon", { attrs: { size: "21", icon: _vm.icon } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "truncate" }, [
        _c("h2", { staticClass: "mb-25 font-weight-bolder" }, [
          _vm._v("\n      " + _vm._s(_vm.statistic) + "\n    "),
        ]),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.statisticTitle))]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=template&id=737b0cda&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=template&id=737b0cda&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "card-transaction", attrs: { "no-body": "" } },
    [
      _c("b-card-body", { staticClass: "d-flex" }, [
        _c(
          "div",
          { staticClass: "transaction-item" },
          [
            _c(
              "b-media",
              { attrs: { "no-body": "" } },
              [
                _c(
                  "b-media-aside",
                  { staticClass: "align-self-center" },
                  [
                    _c("feather-icon", {
                      attrs: { size: "18", icon: "BarChart2Icon" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-media-body", [
                  _c("h6", { staticClass: "transaction-title" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.data.debt_count) +
                        "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("small", [_vm._v("Numri borxheve")]),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column transaction-item" }, [
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Borxh (Euro): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.debt_unpaid_eur.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Borxh (CHF): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.debt_unpaid_chf.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Borxh (USD): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.debt_unpaid_usd.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=template&id=0efb8055&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=template&id=0efb8055&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "card-transaction", attrs: { "no-body": "" } },
    [
      _c("b-card-body", { staticClass: "d-flex" }, [
        _c(
          "div",
          { staticClass: "transaction-item" },
          [
            _c(
              "b-media",
              { attrs: { "no-body": "" } },
              [
                _c(
                  "b-media-aside",
                  { staticClass: "align-self-center" },
                  [
                    _c("feather-icon", {
                      attrs: { size: "18", icon: "BarChart2Icon" },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-media-body", [
                  _c("h6", { staticClass: "transaction-title" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.data.sales_count) +
                        "\n          "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("small", [_vm._v("Numri shitjeve")]),
                ]),
              ],
              1
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column transaction-item" }, [
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Fitimi (EURO): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.profit_euro.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Fitimi (USD): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.profit_usd.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Fitimi (CHF): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.profit_chf.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column transaction-item" }, [
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Shitjet (EURO): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.total_sales_euro.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Shitjet (USD): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.total_sales_usd.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "transaction-item" },
            [
              _c(
                "b-media",
                { attrs: { "no-body": "" } },
                [
                  _c("b-media-body", [
                    _c("h6", { staticClass: "transaction-title" }, [
                      _vm._v("\n                Shitjet (CHF): "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.data.total_sales_chf.toFixed(2))),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticCardVertical.vue?vue&type=template&id=5a7aca50& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&");
/* harmony import */ var _StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticCardVertical.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardVertical.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticCardVertical.vue?vue&type=template&id=5a7aca50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/statistics-cards/StatisticCardVertical.vue?vue&type=template&id=5a7aca50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticCardVertical_vue_vue_type_template_id_5a7aca50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/DebtReports.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/DebtReports.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DebtReports_vue_vue_type_template_id_737b0cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DebtReports.vue?vue&type=template&id=737b0cda&scoped=true& */ "./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=template&id=737b0cda&scoped=true&");
/* harmony import */ var _DebtReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DebtReports.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DebtReports_vue_vue_type_style_index_0_id_737b0cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css& */ "./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DebtReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DebtReports_vue_vue_type_template_id_737b0cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DebtReports_vue_vue_type_template_id_737b0cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "737b0cda",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper_components/reports/DebtReports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DebtReports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_style_index_0_id_737b0cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=style&index=0&id=737b0cda&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_style_index_0_id_737b0cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_style_index_0_id_737b0cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_style_index_0_id_737b0cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_style_index_0_id_737b0cda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=template&id=737b0cda&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=template&id=737b0cda&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_template_id_737b0cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DebtReports.vue?vue&type=template&id=737b0cda&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/DebtReports.vue?vue&type=template&id=737b0cda&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_template_id_737b0cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DebtReports_vue_vue_type_template_id_737b0cda_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/SalesReports.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/SalesReports.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesReports_vue_vue_type_template_id_0efb8055_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesReports.vue?vue&type=template&id=0efb8055&scoped=true& */ "./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=template&id=0efb8055&scoped=true&");
/* harmony import */ var _SalesReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesReports.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SalesReports_vue_vue_type_style_index_0_id_0efb8055_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css& */ "./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SalesReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesReports_vue_vue_type_template_id_0efb8055_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesReports_vue_vue_type_template_id_0efb8055_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0efb8055",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper_components/reports/SalesReports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesReports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_style_index_0_id_0efb8055_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=style&index=0&id=0efb8055&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_style_index_0_id_0efb8055_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_style_index_0_id_0efb8055_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_style_index_0_id_0efb8055_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_style_index_0_id_0efb8055_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=template&id=0efb8055&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=template&id=0efb8055&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_template_id_0efb8055_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesReports.vue?vue&type=template&id=0efb8055&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/reports/SalesReports.vue?vue&type=template&id=0efb8055&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_template_id_0efb8055_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesReports_vue_vue_type_template_id_0efb8055_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/services/serviceStoreModule.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/services/serviceStoreModule.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchServices: function fetchServices(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/fetchServices', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchService: function fetchService(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchService/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchAllServices: function fetchAllServices() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchAllServices").then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addService: function addService(ctx, serviceData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/addService', {
          service: serviceData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/user/userStoreModule.js":
/*!********************************************************!*\
  !*** ./resources/js/src/views/user/userStoreModule.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers: function fetchUsers(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/fetchUsers', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchUser: function fetchUser(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchUser/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addUser: function addUser(ctx, userData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/addUser', {
          user: userData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    userIsAdmin: function userIsAdmin(ctx) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/userIsAdmin').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchUserSales: function fetchUserSales(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/fetchSalesByUser/".concat(queryParams.user_id), {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/user/users-list/useUsersList.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/user/users-list/useUsersList.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUsersList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");




// Notification


function useUsersList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
  var refUserListTable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

  // Table Handlers
  var tableColumns = [{
    key: 'name',
    sortable: true
  }, {
    key: 'email',
    sortable: true
  }, {
    key: 'role',
    sortable: true
  }, {
    key: 'actions'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalUsers = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var roleFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var planFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var statusFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var isAdmin = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value
    };
  });
  var refetchData = function refetchData() {
    refUserListTable.value.refresh();
  };
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], function () {
    refetchData();
  });
  var fetchUsers = function fetchUsers(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-user/fetchUsers', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      role: roleFilter.value,
      plan: planFilter.value,
      status: statusFilter.value
    }).then(function (response) {
      var _response$data = response.data,
        users = _response$data.users,
        total = _response$data.total;
      callback(users);
      totalUsers.value = total;
      console.log(total);
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        props: {
          title: 'Error fetching users list',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  };
  var userIsAdmin = function userIsAdmin(ctx) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-user/userIsAdmin').then(function (response) {
      isAdmin.value = response.data;
    })["catch"](function () {
      console.log("error");
    });
  };

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  var resolveUserRoleVariant = function resolveUserRoleVariant(role) {
    if (role === 1) return 'primary';
    if (role === 2) return 'warning';
    return 'primary';
  };
  var resolveUserRoleIcon = function resolveUserRoleIcon(role) {
    if (role === 1) return 'UserIcon';
    if (role === 2) return 'Edit2Icon';
    return 'UserIcon';
  };
  var resolveUserStatusVariant = function resolveUserStatusVariant(status) {
    if (status === 'pending') return 'warning';
    if (status === 'active') return 'success';
    if (status === 'inactive') return 'secondary';
    return 'primary';
  };
  return {
    fetchUsers: fetchUsers,
    userIsAdmin: userIsAdmin,
    isAdmin: isAdmin,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalUsers: totalUsers,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refUserListTable: refUserListTable,
    resolveUserRoleVariant: resolveUserRoleVariant,
    resolveUserRoleIcon: resolveUserRoleIcon,
    resolveUserStatusVariant: resolveUserStatusVariant,
    refetchData: refetchData,
    // Extra Filters
    roleFilter: roleFilter,
    planFilter: planFilter,
    statusFilter: statusFilter
  };
}

/***/ })

}]);