(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _views_helper_components_charts_SalesChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/helper_components/charts/SalesChart.vue */ "./resources/js/src/views/helper_components/charts/SalesChart.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    SalesChart: _views_helper_components_charts_SalesChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"]
  },
  setup: function setup() {
    var months = [{
      value: '1',
      text: 'Janar '
    }, {
      value: '2',
      text: 'Shkurt'
    }, {
      value: '3',
      text: 'Mars'
    }, {
      value: '4',
      text: 'Prill'
    }, {
      value: '5',
      text: 'Maj'
    }, {
      value: '6',
      text: 'Qershor'
    }, {
      value: '7',
      text: 'Korrik '
    }, {
      value: '8',
      text: 'Gusht'
    }, {
      value: '9',
      text: 'Shtator '
    }, {
      value: '10',
      text: 'Tetor'
    }, {
      value: '11',
      text: 'Nentor'
    }, {
      value: '12',
      text: 'Dhjetor'
    }];
    var years = [];
    var currentYear = new Date().getFullYear();
    var olderYears = 20; // change this number to set how many future years to add

    for (var i = 0; i < olderYears; i++) {
      var year = currentYear - i;
      years.push({
        value: year.toString(),
        text: year.toString()
      });
    }
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onMounted"])(function () {});
    return {
      years: years,
      months: months
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apexChartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apexChartData */ "./resources/js/src/views/helper_components/charts/apexChartData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"]
  },
  data: function data() {
    return {
      apexChatData: _apexChartData__WEBPACK_IMPORTED_MODULE_3__["default"],
      rangePicker: ['2023-03-30', '2023-03-29']
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #0095D9;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #0095D9;\n  border-color: #0095D9;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #73d3ff;\n  border-color: #73d3ff;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #73d3ff, 5px 0 0 #73d3ff;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #73d3ff, -5px 0 0 #73d3ff;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #0095D9;\n  border-color: #0095D9;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #0095D9;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #0095D9;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #0095D9;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "b-card",
        [
          _c("b-card-text", [
            _c("span", [_vm._v("Shfaq raportet sipas dates")]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "6", md: "3" } },
                    [
                      _vm._v("\n        Zgjedhe muajin\n        "),
                      _c(
                        "b-form-select",
                        { staticClass: "mt-1", attrs: { options: _vm.months } },
                        [
                          _c("option", { attrs: { value: "", hidden: "" } }, [
                            _vm._v("Muaji"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "6", md: "3" } },
                    [
                      _vm._v("\n        Zgjedhe vitin\n        "),
                      _c("b-form-select", {
                        staticClass: "mt-1",
                        attrs: { options: _vm.years },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { class: "d-none", attrs: { title: "Raportet e shitjeve:" } },
        [_c("sales-chart")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=template&id=4cf8f52c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=template&id=4cf8f52c& ***!
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", [
        _c(
          "div",
          [
            _c("b-card-sub-title", { staticClass: "mb-25" }, [
              _vm._v("\n        Balance\n      "),
            ]),
            _vm._v(" "),
            _c("b-card-title", { staticClass: "font-weight-bolder" }, [
              _vm._v("\n        $74,382.72\n      "),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c("feather-icon", { attrs: { icon: "CalendarIcon", size: "16" } }),
            _vm._v(" "),
            _c("flat-pickr", {
              staticClass:
                "form-control flat-picker bg-transparent border-0 shadow-none",
              attrs: { config: { mode: "range" }, placeholder: "YYYY-MM-DD" },
              model: {
                value: _vm.rangePicker,
                callback: function ($$v) {
                  _vm.rangePicker = $$v
                },
                expression: "rangePicker",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c("vue-apex-charts", {
            attrs: {
              type: "bar",
              height: "350",
              options: _vm.apexChatData.barChart.chartOptions,
              series: _vm.apexChatData.barChart.series,
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper_components/charts/SalesChart.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/charts/SalesChart.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesChart_vue_vue_type_template_id_4cf8f52c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesChart.vue?vue&type=template&id=4cf8f52c& */ "./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=template&id=4cf8f52c&");
/* harmony import */ var _SalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SalesChart_vue_vue_type_style_index_0_id_4cf8f52c_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss& */ "./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesChart_vue_vue_type_template_id_4cf8f52c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesChart_vue_vue_type_template_id_4cf8f52c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper_components/charts/SalesChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_style_index_0_id_4cf8f52c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=style&index=0&id=4cf8f52c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_style_index_0_id_4cf8f52c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_style_index_0_id_4cf8f52c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_style_index_0_id_4cf8f52c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_style_index_0_id_4cf8f52c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=template&id=4cf8f52c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=template&id=4cf8f52c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_template_id_4cf8f52c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesChart.vue?vue&type=template&id=4cf8f52c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper_components/charts/SalesChart.vue?vue&type=template&id=4cf8f52c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_template_id_4cf8f52c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesChart_vue_vue_type_template_id_4cf8f52c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper_components/charts/apexChartData.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/helper_components/charts/apexChartData.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");



// heat chart data generator
function generateDataHeatMap(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w".concat((i + 1).toString());
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    // eslint-disable-next-line no-plusplus
    i++;
  }
  return series;
}

// colors
var chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff'
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f'
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  lineChartSimple: {
    series: [{
      data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [_themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light],
        colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].warning]
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        custom: function custom(data) {
          return '<div class="px-1 py-50"><span>'.concat(data.series[data.seriesIndex][data.dataPointIndex], "%</span></div>");
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12']
      },
      yaxis: {
        // opposite: isRtl,
      }
    }
  },
  lineAreaChartSpline: {
    series: [{
      name: 'Visits',
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
    }, {
      name: 'Clicks',
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
    }, {
      name: 'Sales',
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        curve: 'straight'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Montserrat'
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12']
      },
      yaxis: {
        // opposite: isRtl
      },
      fill: {
        opacity: 1,
        type: 'solid'
      },
      tooltip: {
        shared: false
      },
      colors: [chartColors.area.series3, chartColors.area.series2, chartColors.area.series1]
    }
  },
  columnChart: {
    series: [{
      name: 'Apple',
      data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
    }, {
      name: 'Samsung',
      data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
    }],
    chartOptions: {
      chart: {
        stacked: true,
        toolbar: {
          show: false
        }
      },
      colors: [chartColors.column.series1, chartColors.column.series2],
      plotOptions: {
        bar: {
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [chartColors.column.bg, chartColors.column.bg, chartColors.column.bg, chartColors.column.bg, chartColors.column.bg],
            backgroundBarRadius: 10
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '14px',
        fontFamily: 'Montserrat',
        horizontalAlign: 'left'
      },
      stroke: {
        show: true,
        colors: ['transparent']
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12']
      },
      yaxis: {
        // opposite: isRtl,
      },
      fill: {
        opacity: 1
      }
    }
  },
  barChart: {
    series: [{
      data: [700, 350, 480, 600, 210, 550, 150]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      colors: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].info,
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          endingShape: 'rounded'
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23']
      },
      yaxis: {
        // opposite: isRtl,
      }
    }
  },
  candlestickChart: {
    series: [{
      data: [{
        x: new Date(1538778600000),
        y: [150, 170, 50, 100]
      }, {
        x: new Date(1538780400000),
        y: [200, 400, 170, 330]
      }, {
        x: new Date(1538782200000),
        y: [330, 340, 250, 280]
      }, {
        x: new Date(1538784000000),
        y: [300, 330, 200, 320]
      }, {
        x: new Date(1538785800000),
        y: [320, 450, 280, 350]
      }, {
        x: new Date(1538787600000),
        y: [300, 350, 80, 250]
      }, {
        x: new Date(1538789400000),
        y: [200, 330, 170, 300]
      }, {
        x: new Date(1538791200000),
        y: [200, 220, 70, 130]
      }, {
        x: new Date(1538793000000),
        y: [220, 270, 180, 250]
      }, {
        x: new Date(1538794800000),
        y: [200, 250, 80, 100]
      }, {
        x: new Date(1538796600000),
        y: [150, 170, 50, 120]
      }, {
        x: new Date(1538798400000),
        y: [110, 450, 10, 420]
      }, {
        x: new Date(1538800200000),
        y: [400, 480, 300, 320]
      }, {
        x: new Date(1538802000000),
        y: [380, 480, 350, 450]
      }]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
        // opposite: isRtl,
      },

      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: false
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].success,
            downward: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].danger
          }
        },
        bar: {
          columnWidth: '40%'
        }
      }
    }
  },
  scatterChart: {
    series: [{
      name: 'Angular',
      data: [[5.4, 170], [5.4, 100], [6.3, 170], [5.7, 140], [5.9, 130], [7.0, 150], [8.0, 120], [9.0, 170], [10.0, 190], [11.0, 220], [12.0, 170], [13.0, 230]]
    }, {
      name: 'Vue',
      data: [[14.0, 220], [15.0, 280], [16.0, 230], [18.0, 320], [17.5, 280], [19.0, 250], [20.0, 350], [20.5, 320], [20.0, 320], [19.0, 280], [17.0, 280], [22.0, 300], [18.0, 120]]
    }, {
      name: 'React',
      data: [[14.0, 290], [13.0, 190], [20.0, 220], [21.0, 350], [21.5, 290], [22.0, 220], [23.0, 140], [19.0, 400], [20.0, 200], [22.0, 90], [20.0, 120]]
    }],
    chartOptions: {
      chart: {
        zoom: {
          enabled: true,
          type: 'xy'
        },
        toolbar: {
          show: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      colors: [_themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].warning, _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].primary, _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].success],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function formatter(val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {
        // opposite: isRtl,
      }
    }
  },
  heatMapChart: {
    series: [{
      name: 'SUN',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'MON',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'TUE',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'WED',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'THU',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'FRI',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }, {
      name: 'SAT',
      data: generateDataHeatMap(24, {
        min: 0,
        max: 60
      })
    }],
    chartOptions: {
      dataLabels: {
        enabled: false
      },
      legend: {
        show: true,
        position: 'bottom'
      },
      colors: ['#7367F0'],
      plotOptions: {
        heatmap: {
          enableShades: false,
          colorScale: {
            ranges: [{
              from: 0,
              to: 10,
              name: '0-10',
              color: '#b9b3f8'
            }, {
              from: 11,
              to: 20,
              name: '10-20',
              color: '#aba4f6'
            }, {
              from: 21,
              to: 30,
              name: '20-30',
              color: '#9d95f5'
            }, {
              from: 31,
              to: 40,
              name: '30-40',
              color: '#8f85f3'
            }, {
              from: 41,
              to: 50,
              name: '40-50',
              color: '#8176f2'
            }, {
              from: 51,
              to: 60,
              name: '50-60',
              color: '#7367f0'
            }]
          }
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false
        }
      }
    }
  },
  donutChart: {
    series: [85, 16, 50, 50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Montserrat'
      },
      colors: [chartColors.donut.series1, chartColors.donut.series5, chartColors.donut.series3, chartColors.donut.series2],
      dataLabels: {
        enabled: true,
        formatter: function formatter(val) {
          // eslint-disable-next-line radix
          return "".concat(parseInt(val), "%");
        }
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat'
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter: function formatter(val) {
                  // eslint-disable-next-line radix
                  return "".concat(parseInt(val), "%");
                }
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter: function formatter() {
                  return '31%';
                }
              }
            }
          }
        }
      },
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      responsive: [{
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      }, {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
          },
          legend: {
            show: true
          }
        }
      }]
    }
  },
  radialBarChart: {
    series: [80, 50, 35],
    chartOptions: {
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series4],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '25%'
          },
          track: {
            margin: 15
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat'
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Comments',
              formatter: function formatter() {
                return '80%';
              }
            }
          }
        }
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center'
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Comments', 'Replies', 'Shares']
    }
  },
  radarChart: {
    series: [{
      name: 'iPhone 11',
      data: [41, 64, 81, 60, 42, 42, 33, 23]
    }, {
      name: 'Samsung s20',
      data: [65, 46, 42, 25, 58, 63, 76, 43]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        }
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: 'Montserrat'
      },
      yaxis: {
        show: false
      },
      colors: [chartColors.donut.series1, chartColors.donut.series3],
      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price']
      },
      fill: {
        opacity: [1, 0.8]
      },
      stroke: {
        show: false,
        width: 0
      },
      markers: {
        size: 0
      },
      grid: {
        show: false
      }
    }
  }
});

/***/ })

}]);