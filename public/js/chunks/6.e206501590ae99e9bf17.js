(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _serviceStoreModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../serviceStoreModule */ "./resources/js/src/views/services/serviceStoreModule.js");
/* harmony import */ var _ServiceEditTabInfo_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceEditTabInfo.vue */ "./resources/js/src/views/services/services-edit/ServiceEditTabInfo.vue");
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
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    ServiceEditTabInfo: _ServiceEditTabInfo_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  setup: function setup() {
    var serviceData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var SERVICE_APP_STORE_MODULE_NAME = 'app-service';

    // Register module
    if (!_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(SERVICE_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].registerModule(SERVICE_APP_STORE_MODULE_NAME, _serviceStoreModule__WEBPACK_IMPORTED_MODULE_4__["default"]);

    // UnRegister on leave
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(SERVICE_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].unregisterModule(SERVICE_APP_STORE_MODULE_NAME);
    });
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('app-service/fetchService', {
      id: _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.params.id
    }).then(function (response) {
      serviceData.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        serviceData.value = undefined;
      }
    });
    return {
      serviceData: serviceData
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=template&id=3ca7a795&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=template&id=3ca7a795& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _vm.serviceData === undefined ? "div" : "b-card",
    { tag: "component" },
    [
      _c(
        "b-alert",
        { attrs: { variant: "danger", show: _vm.serviceData === undefined } },
        [
          _c("h4", { staticClass: "alert-heading" }, [
            _vm._v("\n      Error fetching services data\n    "),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "alert-body" },
            [
              _vm._v(
                "\n      No service found with this service id. Check\n      "
              ),
              _c(
                "b-link",
                {
                  staticClass: "alert-link",
                  attrs: { to: { name: "apps-services-list" } },
                },
                [_vm._v("\n        Service List\n      ")]
              ),
              _vm._v("\n      for other services.\n    "),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.serviceData
        ? _c(
            "b-tabs",
            { attrs: { pills: "" } },
            [
              _c(
                "b-tab",
                {
                  attrs: { active: "" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "title",
                        fn: function () {
                          return [
                            _c("feather-icon", {
                              staticClass: "mr-0 mr-sm-50",
                              attrs: { icon: "ListIcon", size: "16" },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "d-none d-sm-inline" }, [
                              _vm._v("Service info"),
                            ]),
                          ]
                        },
                        proxy: true,
                      },
                    ],
                    null,
                    false,
                    1843087589
                  ),
                },
                [
                  _vm._v(" "),
                  _c("service-edit-tab-info", {
                    staticClass: "mt-2 pt-75",
                    attrs: { "service-data": _vm.serviceData },
                  }),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/libs/axios.js":
/*!****************************************!*\
  !*** ./resources/js/src/libs/axios.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


// axios

var axiosIns = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$http = axiosIns;
/* harmony default export */ __webpack_exports__["default"] = (axiosIns);

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

/***/ "./resources/js/src/views/services/services-edit/ServiceEditTabInfo.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/services/services-edit/ServiceEditTabInfo.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/src/views/services/services-edit/ServiceEditTabInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/services/services-edit/ServicesEdit.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/services/services-edit/ServicesEdit.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServicesEdit_vue_vue_type_template_id_3ca7a795___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServicesEdit.vue?vue&type=template&id=3ca7a795& */ "./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=template&id=3ca7a795&");
/* harmony import */ var _ServicesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicesEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServicesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServicesEdit_vue_vue_type_template_id_3ca7a795___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServicesEdit_vue_vue_type_template_id_3ca7a795___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/services/services-edit/ServicesEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServicesEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=template&id=3ca7a795&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=template&id=3ca7a795& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesEdit_vue_vue_type_template_id_3ca7a795___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServicesEdit.vue?vue&type=template&id=3ca7a795& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/services/services-edit/ServicesEdit.vue?vue&type=template&id=3ca7a795&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesEdit_vue_vue_type_template_id_3ca7a795___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicesEdit_vue_vue_type_template_id_3ca7a795___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);