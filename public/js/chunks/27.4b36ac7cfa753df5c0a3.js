(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./resources/js/src/views/sales/saleStoreModule.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/sales/saleStoreModule.js ***!
  \*********************************************************/
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
    fetchSales: function fetchSales(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/fetchSales', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchSalesReport: function fetchSalesReport(ctx, saleData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/fetchSalesReport', {
          sale: saleData
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
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchSale/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    searchUserByName: function searchUserByName(ctx, name) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/findUserByName', {
          user: name
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addSale: function addSale(ctx, saleData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/addSale', {
          sale: saleData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    payDebt: function payDebt(ctx, saleData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/payDebt', {
          sale: saleData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    cancelSale: function cancelSale(ctx, saleData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/cancelSale', {
          sale: saleData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchDebtSale: function fetchDebtSale(ctx, saleData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/fetchDebtSale', {
          saleData: saleData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    deleteSale: function deleteSale(ctx, id) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/deleteSale/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchCurrentMonthSalesReport: function fetchCurrentMonthSalesReport(ctx) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/fetchCurrentMonthSalesReport").then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    //home Reports
    fetchReportsByYearAndMonth: function fetchReportsByYearAndMonth(ctx, reportData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/fetchReportsByYearAndMonth", {
          reportData: reportData
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
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/api/fetchSalesByUser/".concat(queryParams.user_id), queryParams).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    deleteUser: function deleteUser(ctx, id) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/deleteUser/".concat(id)).then(function (response) {
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
  var deleteUser = function deleteUser(id) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-user/deleteUser', id).then(function () {
      refetchData();
    }).then(function (response) {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        props: {
          title: 'Perdoruesi u fshi me sukses!',
          icon: 'AlertTriangleIcon',
          variant: 'success'
        }
      });
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        props: {
          title: 'Fshirja deshtoi!! Se pari duhet te fshihen shitjet e ketij perdoruesi ne sistem.',
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
    statusFilter: statusFilter,
    deleteUser: deleteUser
  };
}

/***/ })

}]);