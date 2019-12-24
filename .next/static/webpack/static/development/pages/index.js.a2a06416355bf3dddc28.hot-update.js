webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../keys */ "./keys.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./constants.js");













var Login =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _React$Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Login).call(this, props));
    _this.state = {
      triedToLogIn: false,
      accessToken: null,
      error: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Login, [{
    key: "login",
    value: function login() {
      var client_id = _keys__WEBPACK_IMPORTED_MODULE_10__["CLIENT_ID"]; // Your client id

      var redirect_uri = _keys__WEBPACK_IMPORTED_MODULE_10__["REDIRECT_URI"]; // Your redirect uri

      console.log(client_id);
      console.log(redirect_uri);

      function generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
      }

      ;
      var state = generateRandomString(16);
      var scope = 'user-read-private playlist-read-private user-read-email';
      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state);
      window.location = url;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "login",
        className: "jsx-1326224582"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.login,
        className: "jsx-1326224582" + " " + "btn btn-primary"
      }, "Log in with Spotify")), this.state.error !== null && this.state.triedToLogIn === true && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-1326224582"
      }, "Login was not successful, please try again or come back later"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1326224582"
      }, "h1.jsx-1326224582,a.jsx-1326224582{font-family:'Arial';}a.jsx-1326224582{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1326224582:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXRoZXJpbmV5YW5pc2gvcHJvamVjdGl0YXMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUlpQyxBQUlDLEFBS1QsWUFDZCxRQVRBLDhCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2NhdGhlcmluZXlhbmlzaC9wcm9qZWN0aXRhcy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENMSUVOVF9JRCwgUkVESVJFQ1RfVVJJIH0gZnJvbSAnLi4va2V5cyc7XG5pbXBvcnQgeyBTVEFURV9LRVksIEFDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdHJpZWRUb0xvZ0luOiBmYWxzZSxcbiAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfVxuICAgIH1cblxuXG4gIGxvZ2luICgpIHtcbiAgICBjb25zdCBjbGllbnRfaWQgPSBDTElFTlRfSUQ7IC8vIFlvdXIgY2xpZW50IGlkXG4gICAgY29uc3QgcmVkaXJlY3RfdXJpID0gUkVESVJFQ1RfVVJJOyAvLyBZb3VyIHJlZGlyZWN0IHVyaVxuXG4gICAgY29uc29sZS5sb2coY2xpZW50X2lkKTtcbiAgICBjb25zb2xlLmxvZyhyZWRpcmVjdF91cmkpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgICAgdmFyIHRleHQgPSAnJztcbiAgICAgIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGUgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZygxNik7XG4gICAgY29uc3Qgc2NvcGUgPSAndXNlci1yZWFkLXByaXZhdGUgcGxheWxpc3QtcmVhZC1wcml2YXRlIHVzZXItcmVhZC1lbWFpbCc7XG5cbiAgICBsZXQgdXJsID0gJ2h0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplJztcbiAgICB1cmwgKz0gJz9yZXNwb25zZV90eXBlPXRva2VuJztcbiAgICB1cmwgKz0gJyZjbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfaWQpO1xuICAgIHVybCArPSAnJnNjb3BlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc2NvcGUpO1xuICAgIHVybCArPSAnJnJlZGlyZWN0X3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0X3VyaSk7XG4gICAgdXJsICs9ICcmc3RhdGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZSk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmxvZ2lufSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2cgaW4gd2l0aCBTcG90aWZ5PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS50cmllZFRvTG9nSW4gPT09IHRydWUgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgTG9naW4gd2FzIG5vdCBzdWNjZXNzZnVsLCBwbGVhc2UgdHJ5IGFnYWluIG9yIGNvbWUgYmFjayBsYXRlclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKExvZ2luKTtcbiJdfQ== */\n/*@ sourceURL=/Users/catherineyanish/projectitas/spotify-mood-if-i/pages/index.js */"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Login));

/***/ })

})
//# sourceMappingURL=index.js.a2a06416355bf3dddc28.hot-update.js.map