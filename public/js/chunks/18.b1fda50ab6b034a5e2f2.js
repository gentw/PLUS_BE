(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _TransactionsListEdit_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransactionsListEdit.vue */ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue");
/* harmony import */ var _useTransactionsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useTransactionsList */ "./resources/js/src/views/transactions/transactions-list/useTransactionsList.js");
/* harmony import */ var _useTransactionsList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_useTransactionsList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _transactionStoreModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transactionStoreModule */ "./resources/js/src/views/transactions/transactionStoreModule.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







// import UsersListFilters from './UsersListFilters.vue'



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // UsersListFilters,
    TransactionsListEdit: _TransactionsListEdit_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  setup: function setup() {
    var TRANSACTION_APP_STORE_MODULE_NAME = 'app-transaction';
    // Register module
    if (!_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(TRANSACTION_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].registerModule(TRANSACTION_APP_STORE_MODULE_NAME, _transactionStoreModule__WEBPACK_IMPORTED_MODULE_8__["default"]);

    // UnRegister on leave
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(TRANSACTION_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].unregisterModule(TRANSACTION_APP_STORE_MODULE_NAME);
    });
    var isTransactionsListEditSidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["ref"])(false);
    var _useTransactionsList = _useTransactionsList__WEBPACK_IMPORTED_MODULE_7___default()(),
      fetchTransactions = _useTransactionsList.fetchTransactions,
      tableColumns = _useTransactionsList.tableColumns,
      perPage = _useTransactionsList.perPage,
      currentPage = _useTransactionsList.currentPage,
      totalTransactions = _useTransactionsList.totalTransactions,
      dataMeta = _useTransactionsList.dataMeta,
      perPageOptions = _useTransactionsList.perPageOptions,
      searchQuery = _useTransactionsList.searchQuery,
      sortBy = _useTransactionsList.sortBy,
      isSortDirDesc = _useTransactionsList.isSortDirDesc,
      refTransactionListTable = _useTransactionsList.refTransactionListTable,
      deleteTransaction = _useTransactionsList.deleteTransaction,
      refetchData = _useTransactionsList.refetchData,
      fetchProduct = _useTransactionsList.fetchProduct,
      stockProduct = _useTransactionsList.stockProduct,
      vleraSum = _useTransactionsList.vleraSum;
    var showEditSidebar = function showEditSidebar(id) {
      console.log(id);
      isTransactionsListEditSidebarActive.value = true;
      fetchProduct(id);
    };
    return {
      // Sidebar
      fetchTransactions: fetchTransactions,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalTransactions: totalTransactions,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refTransactionListTable: refTransactionListTable,
      deleteTransaction: deleteTransaction,
      fetchProduct: fetchProduct,
      refetchData: refetchData,
      showEditSidebar: showEditSidebar,
      isTransactionsListEditSidebarActive: isTransactionsListEditSidebarActive,
      // Filter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_5__["avatarText"],
      stockProduct: stockProduct,
      vleraSum: vleraSum
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./resources/js/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  model: {
    prop: 'isTransactionsListEditSidebarActive',
    event: 'update:is-transactions-list-edit-sidebar-active'
  },
  props: {
    isTransactionsListEditSidebarActive: {
      type: Boolean,
      required: true
    },
    expenseDatas: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      required: _validations__WEBPACK_IMPORTED_MODULE_3__["required"],
      alphaNum: _validations__WEBPACK_IMPORTED_MODULE_3__["alphaNum"],
      email: _validations__WEBPACK_IMPORTED_MODULE_3__["email"]
    };
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var blankExpenseData = {
      barcode: '',
      emri: '',
      njesia: '',
      sasia: '',
      cmimi: ''
    };
    var expenseDatas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(JSON.parse(JSON.stringify(props.expenseDatas)));
    Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])('doublerequired', {
      validate: function validate(value) {
        var regex = /^\d+(\.\d{1,2})?$/;
        return regex.test(value);
      },
      message: 'Cmimi i shkruar nuk lejohet (shembujt e lejuar: 50 ose 50.25)!'
    });
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__["useToast"])();
    var resetExpenseData = function resetExpenseData() {
      props.expenseDatas = JSON.parse(JSON.stringify(blankExpenseData));
    };
    var onSubmit = function onSubmit() {
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch('app-transaction/updateStockProduct', props.expenseDatas).then(function (response) {
        if (response.data == 'success') {
          emit('refetch-data');
          emit('update:is-transactions-list-edit-sidebar-active', false);
        } else {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
            props: {
              title: response.data,
              icon: 'AlertTriangleIcon',
              variant: 'danger'
            }
          });
        }
      });
    };
    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])(resetExpenseData),
      refFormObserver = _formValidation.refFormObserver,
      getValidationState = _formValidation.getValidationState,
      resetForm = _formValidation.resetForm;
    return {
      expenseDatas: expenseDatas,
      onSubmit: onSubmit,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState,
      resetForm: resetForm
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".per-page-selector[data-v-79b7846c] {\n  width: 90px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #0095D9 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(0, 149, 217, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #0095D9;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #0095D9 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #0095D9;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #0095D9 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #0095D9;\n  border-bottom-color: #0095D9;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #0095D9;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(0, 149, 217, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n    Support for SASS is deprecated as of v3.18.\n\n    The files remain here if your build is dependent on them\n    but they will not receive updates in future releases. All\n    SASS variables have been translated into CSS variables, so\n    migration should be quite simple if you'd like to move over.\n\n    In v4, these files will be removed.\n */\n.v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  appearance: none;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: flex;\n  flex-basis: 100%;\n  flex-grow: 1;\n  flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: flex;\n  align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n  transform: scale(1);\n  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #0095D9 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(0, 149, 217, 0.12);\n}\n.vs__dropdown-option--deselect {\n  color: #fff;\n}\n[dir] .vs__dropdown-option--deselect {\n  background: #fb5858;\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: flex;\n  align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #0095D9;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: inline-flex;\n  appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  width: 0;\n  max-width: 100%;\n  flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n  transform: translateZ(0);\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #0095D9 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #0095D9;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #0095D9 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #0095D9;\n  border-bottom-color: #0095D9;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #0095D9;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(0, 149, 217, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n#add-new-expense-sidebar .vs__dropdown-menu {\n  max-height: 200px !important;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
      _c("transactions-list-edit", {
        attrs: {
          "is-transactions-list-edit-sidebar-active":
            _vm.isTransactionsListEditSidebarActive,
          "expense-datas": _vm.stockProduct,
        },
        on: {
          "update:isTransactionsListEditSidebarActive": function ($event) {
            _vm.isTransactionsListEditSidebarActive = $event
          },
          "update:is-transactions-list-edit-sidebar-active": function ($event) {
            _vm.isTransactionsListEditSidebarActive = $event
          },
          "refetch-data": _vm.refetchData,
        },
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            background: "red",
            "font-weight": "bold",
            "font-size": "20px",
            padding: "10px",
            "margin-bottom": "20px",
            color: "#fff",
          },
        },
        [_vm._v("Totali: " + _vm._s(_vm.vleraSum) + " Euro")]
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "mb-0", attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-start mb-1 mb-md-0",
                      attrs: { cols: "12", md: "6" },
                    },
                    [
                      _c("label", [_vm._v("Show")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "per-page-selector d-inline-block mx-50",
                        attrs: {
                          dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                          options: _vm.perPageOptions,
                          clearable: false,
                        },
                        model: {
                          value: _vm.perPage,
                          callback: function ($$v) {
                            _vm.perPage = $$v
                          },
                          expression: "perPage",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v("entries")]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12", md: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex align-items-center justify-content-end",
                      },
                      [
                        _c("b-form-input", {
                          staticClass: "d-inline-block mr-1",
                          attrs: { placeholder: "Search..." },
                          model: {
                            value: _vm.searchQuery,
                            callback: function ($$v) {
                              _vm.searchQuery = $$v
                            },
                            expression: "searchQuery",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            ref: "refTransactionListTable",
            staticClass: "position-relative",
            attrs: {
              items: _vm.fetchTransactions,
              responsive: "",
              fields: _vm.tableColumns,
              "primary-key": "id",
              "sort-by": _vm.sortBy,
              "show-empty": "",
              "empty-text": "No matching records found",
              "sort-desc": _vm.isSortDirDesc,
            },
            on: {
              "update:sortBy": function ($event) {
                _vm.sortBy = $event
              },
              "update:sort-by": function ($event) {
                _vm.sortBy = $event
              },
              "update:sortDesc": function ($event) {
                _vm.isSortDirDesc = $event
              },
              "update:sort-desc": function ($event) {
                _vm.isSortDirDesc = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "cell(transaction)",
                fn: function (data) {
                  return [
                    _c(
                      "b-media",
                      {
                        attrs: { "vertical-align": "center" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "aside",
                              fn: function () {
                                return [
                                  _c("b-avatar", {
                                    attrs: {
                                      size: "32",
                                      src: "default",
                                      text: _vm.avatarText(data.item.name),
                                      variant: "light-primary",
                                      to: {
                                        name: "apps-transactions-view",
                                        params: { id: data.item.id },
                                      },
                                    },
                                  }),
                                ]
                              },
                              proxy: true,
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "b-link",
                          {
                            staticClass: "font-weight-bold d-block text-nowrap",
                            attrs: {
                              to: {
                                name: "apps-transactions-view",
                                params: { id: data.item.id },
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(data.item.name) +
                                "\n          "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("@" + _vm._s(data.item.name)),
                        ]),
                      ],
                      1
                    ),
                  ]
                },
              },
              {
                key: "cell(type)",
                fn: function (data) {
                  return [
                    _c("b-media", { attrs: { "vertical-align": "center" } }, [
                      data.item.type == "terheqje"
                        ? _c("span", [
                            _c("span", { staticStyle: { color: "red" } }, [
                              _vm._v("\n             Terheqje\n              "),
                            ]),
                          ])
                        : _c("span", [
                            _vm._v("\n            Depozit\n            "),
                          ]),
                    ]),
                  ]
                },
              },
              {
                key: "cell(amount)",
                fn: function (data) {
                  return [
                    _c("b-media", { attrs: { "vertical-align": "center" } }, [
                      data.item.type == "terheqje"
                        ? _c("span", [
                            _c("span", [
                              _vm._v(
                                "\n             -" +
                                  _vm._s(data.item.amount) +
                                  " Euro\n              "
                              ),
                            ]),
                          ])
                        : _c("span", [
                            _vm._v(
                              "\n              +" +
                                _vm._s(data.item.amount) +
                                " Euro\n            "
                            ),
                          ]),
                    ]),
                  ]
                },
              },
              {
                key: "cell(cmimi)",
                fn: function (data) {
                  return [
                    _c("b-media", { attrs: { "vertical-align": "center" } }, [
                      data.item.cmimi
                        ? _c("span", [
                            _c("span", [
                              _vm._v(
                                "\n             " +
                                  _vm._s(data.item.cmimi) +
                                  " Euro\n              "
                              ),
                            ]),
                          ])
                        : _vm._e(),
                    ]),
                  ]
                },
              },
              {
                key: "cell(actions)",
                fn: function (data) {
                  return [
                    _c(
                      "b-dropdown",
                      {
                        attrs: {
                          variant: "link",
                          "no-caret": "",
                          right: _vm.$store.state.appConfig.isRTL,
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "button-content",
                              fn: function () {
                                return [
                                  _c("feather-icon", {
                                    staticClass: "align-middle text-body",
                                    attrs: {
                                      icon: "MoreVerticalIcon",
                                      size: "16",
                                    },
                                  }),
                                ]
                              },
                              proxy: true,
                            },
                          ],
                          null,
                          true
                        ),
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.showEditSidebar(data.item.id)
                              },
                            },
                          },
                          [
                            _c("feather-icon", { attrs: { icon: "EditIcon" } }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Ndrysho"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.deleteTransaction(data.item.id)
                              },
                            },
                          },
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TrashIcon" },
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Fshije"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mx-2 mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center justify-content-sm-start",
                      attrs: { cols: "12", sm: "6" },
                    },
                    [
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(
                          "Showing " +
                            _vm._s(_vm.dataMeta.from) +
                            " to " +
                            _vm._s(_vm.dataMeta.to) +
                            " of " +
                            _vm._s(_vm.dataMeta.of) +
                            " entries"
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center justify-content-sm-end",
                      attrs: { cols: "12", sm: "6" },
                    },
                    [
                      _c("b-pagination", {
                        staticClass: "mb-0 mt-1 mt-sm-0",
                        attrs: {
                          "total-rows": _vm.totalTransactions,
                          "per-page": _vm.perPage,
                          "first-number": "",
                          "last-number": "",
                          "prev-class": "prev-item",
                          "next-class": "next-item",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prev-text",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronLeftIcon",
                                    size: "18",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                          {
                            key: "next-text",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronRightIcon",
                                    size: "18",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.currentPage,
                          callback: function ($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage",
                        },
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=template&id=cc7b90d4&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=template&id=cc7b90d4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("b-sidebar", {
    attrs: {
      id: "add-new-expense-sidebar",
      visible: _vm.isTransactionsListEditSidebarActive,
      "bg-variant": "white",
      "sidebar-class": "sidebar-lg",
      shadow: "",
      backdrop: "",
      "no-header": "",
      right: "",
    },
    on: {
      hidden: _vm.resetForm,
      change: function (val) {
        return _vm.$emit("update:is-transactions-list-edit-sidebar-active", val)
      },
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function (ref) {
          var hide = ref.hide
          return [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1",
              },
              [
                _c("h5", { staticClass: "mb-0" }, [
                  _vm._v("\n       Ndrysho\n      "),
                ]),
                _vm._v(" "),
                _c("feather-icon", {
                  staticClass: "ml-1 cursor-pointer",
                  attrs: { icon: "XIcon", size: "16" },
                  on: { click: hide },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("validation-observer", {
              ref: "refFormObserver",
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function (ref) {
                      var handleSubmit = ref.handleSubmit
                      return [
                        _c(
                          "b-form",
                          {
                            staticClass: "p-2",
                            on: {
                              submit: function ($event) {
                                $event.preventDefault()
                                return handleSubmit(_vm.onSubmit)
                              },
                              reset: function ($event) {
                                $event.preventDefault()
                                return _vm.resetForm($event)
                              },
                            },
                          },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Barcode", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function (validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Barkodi",
                                              "label-for": "name",
                                            },
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "name",
                                                autofocus: "",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                trim: "",
                                                placeholder: "Barkodi",
                                              },
                                              model: {
                                                value: _vm.expenseDatas.barcode,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.expenseDatas,
                                                    "barcode",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "expenseDatas.barcode",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: { name: "Emri", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function (validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Emri",
                                              "label-for": "name",
                                            },
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "name",
                                                autofocus: "",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                trim: "",
                                                placeholder: "Emri",
                                              },
                                              model: {
                                                value: _vm.expenseDatas.emri,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.expenseDatas,
                                                    "emri",
                                                    $$v
                                                  )
                                                },
                                                expression: "expenseDatas.emri",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: { name: "Njesia", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function (validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Njesia",
                                              "label-for": "name",
                                            },
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "name",
                                                autofocus: "",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                trim: "",
                                                placeholder: "Njesia",
                                              },
                                              model: {
                                                value: _vm.expenseDatas.njesia,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.expenseDatas,
                                                    "njesia",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "expenseDatas.njesia",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: { name: "Sasia", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function (validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Sasia",
                                              "label-for": "name",
                                            },
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "name",
                                                autofocus: "",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                trim: "",
                                                placeholder: "Sasia",
                                              },
                                              model: {
                                                value: _vm.expenseDatas.sasia,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.expenseDatas,
                                                    "sasia",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "expenseDatas.sasia",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: { name: "Cmimi", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function (validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Cmimi",
                                              "label-for": "name",
                                            },
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "name",
                                                autofocus: "",
                                                state:
                                                  _vm.getValidationState(
                                                    validationContext
                                                  ),
                                                trim: "",
                                                placeholder: "Cmimi",
                                              },
                                              model: {
                                                value: _vm.expenseDatas.cmimi,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.expenseDatas,
                                                    "cmimi",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "expenseDatas.cmimi",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n              " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ]
                                    },
                                  },
                                ],
                                null,
                                true
                              ),
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex mt-2" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "ripple",
                                        rawName: "v-ripple.400",
                                        value: "rgba(255, 255, 255, 0.15)",
                                        expression:
                                          "'rgba(255, 255, 255, 0.15)'",
                                        modifiers: { 400: true },
                                      },
                                    ],
                                    staticClass: "mr-2",
                                    attrs: {
                                      variant: "primary",
                                      type: "submit",
                                    },
                                  },
                                  [_vm._v("\n            Ndrysho\n          ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "ripple",
                                        rawName: "v-ripple.400",
                                        value: "rgba(186, 191, 199, 0.15)",
                                        expression:
                                          "'rgba(186, 191, 199, 0.15)'",
                                        modifiers: { 400: true },
                                      },
                                    ],
                                    attrs: {
                                      type: "button",
                                      variant: "outline-secondary",
                                    },
                                    on: { click: hide },
                                  },
                                  [_vm._v("\n            Hiqe\n          ")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    },
                  },
                ],
                null,
                true
              ),
            }),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/comp-functions/forms/form-validation.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/forms/form-validation.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formValidation; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


// ===========================================================
// ! This is coupled with "veeValidate" plugin
// ===========================================================

function formValidation(resetFormData) {
  var clearFormData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  // ------------------------------------------------
  // refFormObserver
  // ! This is for veeValidate Observer
  // * Used for veeValidate form observer
  // ------------------------------------------------
  var refFormObserver = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

  // ------------------------------------------------
  // resetObserver
  // ! This function is coupled with veeValidate
  // * It resets form observer
  // ------------------------------------------------
  var resetObserver = function resetObserver() {
    refFormObserver.value.reset();
  };

  // ------------------------------------------------
  // getValidationState
  // ! This function is coupled with veeValidate
  // * It returns true/false based on validation
  // ------------------------------------------------
  // eslint-disable-next-line object-curly-newline
  var getValidationState = function getValidationState(_ref) {
    var dirty = _ref.dirty,
      validated = _ref.validated,
      fieldRequired = _ref.required,
      changed = _ref.changed,
      _ref$valid = _ref.valid,
      valid = _ref$valid === void 0 ? null : _ref$valid;
    var result = dirty || validated ? valid : null;
    return !fieldRequired && !changed ? null : result;
  };

  // ------------------------------------------------
  // resetForm
  // ! This function is coupled with veeValidate
  // * This uses resetFormData arg to reset form data
  // ------------------------------------------------
  var resetForm = function resetForm() {
    resetFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  };

  // ------------------------------------------------
  // clearForm
  // ! This function is coupled with veeValidate
  // * This uses clearFormData arg to reset form data
  // ------------------------------------------------
  var clearForm = function clearForm() {
    clearFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  };
  return {
    refFormObserver: refFormObserver,
    resetObserver: resetObserver,
    getValidationState: getValidationState,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");





// eslint-disable-next-line object-curly-newline


// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
});

// Install English and Arabic localizations.
Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
});
// ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////

// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }

// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }

// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }

// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation

//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/

//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }

// export const date = val => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }

// export const max = (val, max) => {

//   // If blank return
//   if (val === undefined || val === null) return true

//   return val.length <= max || `More than ${max} characters are not allowed`
// }

// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }

// export const min = (val, min) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   return val.length >= min || `Minimum ${min} characters are required`
// }

// export const num_range = (val, min, max) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }
  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */
  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */
  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */
  return re.test(val);
};

/***/ }),

/***/ "./resources/js/src/views/transactions/transactionStoreModule.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactionStoreModule.js ***!
  \***********************************************************************/
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
    fetchProduct: function fetchProduct(ctx, id) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchStockProduct/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    updateStockProduct: function updateStockProduct(ctx, stockProduct) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/updateStockProduct', {
          stock: stockProduct
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchTotalOfVleraSum: function fetchTotalOfVleraSum() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/fetchTotalOfVleraSum').then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchTransactions: function fetchTransactions(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/fetchTransactions', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchAllTransactions: function fetchAllTransactions() {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchAllTransactions").then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    deleteTransaction: function deleteTransaction(ctx, id) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/deleteTransaction/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsList.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionsList_vue_vue_type_template_id_79b7846c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true& */ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true&");
/* harmony import */ var _TransactionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TransactionsList_vue_vue_type_style_index_0_id_79b7846c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true& */ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true&");
/* harmony import */ var _TransactionsList_vue_vue_type_style_index_1_id_79b7846c_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss& */ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _TransactionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionsList_vue_vue_type_template_id_79b7846c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionsList_vue_vue_type_template_id_79b7846c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79b7846c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/transactions/transactions-list/TransactionsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_0_id_79b7846c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=0&id=79b7846c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_0_id_79b7846c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_0_id_79b7846c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_0_id_79b7846c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_0_id_79b7846c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_1_id_79b7846c_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=style&index=1&id=79b7846c&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_1_id_79b7846c_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_1_id_79b7846c_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_1_id_79b7846c_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_style_index_1_id_79b7846c_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_template_id_79b7846c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsList.vue?vue&type=template&id=79b7846c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_template_id_79b7846c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsList_vue_vue_type_template_id_79b7846c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TransactionsListEdit_vue_vue_type_template_id_cc7b90d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionsListEdit.vue?vue&type=template&id=cc7b90d4& */ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=template&id=cc7b90d4&");
/* harmony import */ var _TransactionsListEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TransactionsListEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TransactionsListEdit_vue_vue_type_style_index_0_id_cc7b90d4_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss& */ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TransactionsListEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TransactionsListEdit_vue_vue_type_template_id_cc7b90d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TransactionsListEdit_vue_vue_type_template_id_cc7b90d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsListEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_style_index_0_id_cc7b90d4_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=style&index=0&id=cc7b90d4&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_style_index_0_id_cc7b90d4_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_style_index_0_id_cc7b90d4_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_style_index_0_id_cc7b90d4_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_style_index_0_id_cc7b90d4_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=template&id=cc7b90d4&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=template&id=cc7b90d4& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_template_id_cc7b90d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TransactionsListEdit.vue?vue&type=template&id=cc7b90d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transactions/transactions-list/TransactionsListEdit.vue?vue&type=template&id=cc7b90d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_template_id_cc7b90d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TransactionsListEdit_vue_vue_type_template_id_cc7b90d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/transactions/transactions-list/useTransactionsList.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/transactions/transactions-list/useTransactionsList.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/gent/PLUS_BE/resources/js/src/views/transactions/transactions-list/useTransactionsList.js: Missing semicolon. (94:6)\n\n\u001b[0m \u001b[90m 92 |\u001b[39m   }\u001b[0m\n\u001b[0m \u001b[90m 93 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 94 |\u001b[39m   cost fetchTotalOfVleraSum \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 95 |\u001b[39m     store\u001b[33m.\u001b[39mdispatch(\u001b[32m'app-transaction/fetchTotalOfVleraSum'\u001b[39m\u001b[33m,\u001b[39m id)\u001b[33m.\u001b[39mthen((response) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 96 |\u001b[39m       vleraSum\u001b[33m.\u001b[39mvalue \u001b[33m=\u001b[39m response\u001b[33m.\u001b[39mdata\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 97 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:653:32)\n    at constructor (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:947:12)\n    at JSXParserMixin.raise (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:3261:19)\n    at JSXParserMixin.semicolon (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:3628:10)\n    at JSXParserMixin.parseExpressionStatement (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13085:10)\n    at JSXParserMixin.parseStatementContent (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12682:19)\n    at JSXParserMixin.parseStatementLike (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12544:17)\n    at JSXParserMixin.parseStatementListItem (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12524:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13116:61)\n    at JSXParserMixin.parseBlockBody (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13109:10)\n    at JSXParserMixin.parseBlock (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13097:10)\n    at JSXParserMixin.parseFunctionBody (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:11922:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:11908:10)\n    at /home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13252:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12232:14)\n    at JSXParserMixin.parseFunction (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13251:10)\n    at JSXParserMixin.parseExportDefaultExpression (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13736:19)\n    at JSXParserMixin.parseExport (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13663:25)\n    at JSXParserMixin.parseStatementContent (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12656:27)\n    at JSXParserMixin.parseStatementLike (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12544:17)\n    at JSXParserMixin.parseModuleItem (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12521:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13116:36)\n    at JSXParserMixin.parseBlockBody (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:13109:10)\n    at JSXParserMixin.parseProgram (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12435:10)\n    at JSXParserMixin.parseTopLevel (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:12425:25)\n    at JSXParserMixin.parse (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:14245:10)\n    at parse (/home/gent/PLUS_BE/node_modules/@babel/parser/lib/index.js:14265:26)\n    at parser (/home/gent/PLUS_BE/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/gent/PLUS_BE/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/gent/PLUS_BE/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/gent/PLUS_BE/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/gent/PLUS_BE/node_modules/gensync/index.js:261:32)\n    at /home/gent/PLUS_BE/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/gent/PLUS_BE/node_modules/gensync/index.js:223:11)");

/***/ })

}]);