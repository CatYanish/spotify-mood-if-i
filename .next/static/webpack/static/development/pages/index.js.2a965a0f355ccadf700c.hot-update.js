webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../keys */ "./keys.js");














var Blog =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Blog, _React$Component);

  function Blog(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Blog);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Blog).call(this, props));
    _this.state = {
      triedToLogIn: false,
      accessToken: null,
      error: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Blog, [{
    key: "handleLogin",
    value: function handleLogin() {
      var stateKey = 'spotify_auth_state';

      function getHashParams() {
        var hashParams = {};

        if (typeof window !== "undefined") {
          var e,
              r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);

          while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
          }
        }

        return hashParams;
      }

      function generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
      }

      ;
      var params = getHashParams();
      var access_token = params.access_token,
          state = params.state,
          storedState = localStorage.getItem(stateKey);

      if (access_token && (state == null || state !== storedState)) {
        alert('There was an error during the authentication');
      } else {
        localStorage.removeItem(stateKey);

        if (access_token) {
          fetch('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': 'Bearer ' + access_token
            }
          }).then(function (res) {
            return res.json();
          }).then(function (response) {
            return console.log('Success:', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response));
          }).catch(function (error) {
            return console.error('Error:', error);
          });
          ;
        }
      }

      var client_id = _keys__WEBPACK_IMPORTED_MODULE_12__["CLIENT_ID"]; // Your client id

      var redirect_uri = _keys__WEBPACK_IMPORTED_MODULE_12__["REDIRECT_URI"]; // Your redirect uri

      state = generateRandomString(16);
      localStorage.setItem(stateKey, state);
      var scope = 'user-read-private user-read-email';
      var url = 'https://accounts.spotify.com/authorize';
      url += (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("url"), '?response_type=token');
      url += (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("url"), '&client_id=' + encodeURIComponent(client_id));
      url += (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("url"), '&scope=' + encodeURIComponent(scope));
      url += (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("url"), '&redirect_uri=' + encodeURIComponent(redirect_uri));
      url += (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("url"), '&state=' + encodeURIComponent(state));
      window.location = url;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "login",
        className: "jsx-463824322"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleLogin,
        className: "jsx-463824322" + " " + "btn btn-primary"
      }, "Log in with Spotify")), this.state.error !== null && this.state.triedToLogIn === true && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-463824322"
      }, "Login was not successful, please try again or come back later"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "463824322"
      }, "h1.jsx-463824322,a.jsx-463824322{font-family:'Arial';}a.jsx-463824322{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-463824322:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUd3QixBQUlxQyxBQUlDLEFBS1QsWUFDZCxRQVRBLDhCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2NhdHlhbmlzaC9wcm9qZWN0cy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENMSUVOVF9JRCwgUkVESVJFQ1RfVVJJIH0gZnJvbSAnLi4va2V5cydcblxuXG5jbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0cmllZFRvTG9nSW46IGZhbHNlLFxuICAgICAgYWNjZXNzVG9rZW46IG51bGwsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICB9XG4gIH1cblxuXG5cbiBoYW5kbGVMb2dpbiAoKSB7XG5cbiAgICAgICBsZXQgc3RhdGVLZXkgPSAnc3BvdGlmeV9hdXRoX3N0YXRlJztcblxuICAgICAgIGZ1bmN0aW9uIGdldEhhc2hQYXJhbXMoKSB7XG4gICAgICAgICB2YXIgaGFzaFBhcmFtcyA9IHt9O1xuICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgdmFyIGUsIHIgPSAvKFteJjs9XSspPT8oW14mO10qKS9nLFxuICAgICAgICAgICAgICAgcSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgd2hpbGUgKCBlID0gci5leGVjKHEpKSB7XG4gICAgICAgICAgICAgIGhhc2hQYXJhbXNbZVsxXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZVsyXSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBoYXNoUGFyYW1zO1xuICAgICAgIH1cblxuICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgICAgICAgdmFyIHRleHQgPSAnJztcbiAgICAgICAgIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICB9O1xuXG5cbiAgICAgICBsZXQgcGFyYW1zID0gZ2V0SGFzaFBhcmFtcygpO1xuXG4gICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IHBhcmFtcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgIHN0YXRlID0gcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICBzdG9yZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YXRlS2V5KTtcblxuICAgICAgIGlmIChhY2Nlc3NfdG9rZW4gJiYgKHN0YXRlID09IG51bGwgfHwgc3RhdGUgIT09IHN0b3JlZFN0YXRlKSkge1xuICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBkdXJpbmcgdGhlIGF1dGhlbnRpY2F0aW9uJyk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0YXRlS2V5KTtcbiAgICAgICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lJywge1xuICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlblxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7O1xuICAgICAgICAgfVxuICAgICAgIH1cblxuXG5cbiAgIGNvbnN0IGNsaWVudF9pZCA9IENMSUVOVF9JRDsgLy8gWW91ciBjbGllbnQgaWRcbiAgIGNvbnN0IHJlZGlyZWN0X3VyaSA9IFJFRElSRUNUX1VSSTsgLy8gWW91ciByZWRpcmVjdCB1cmlcblxuICAgc3RhdGUgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZygxNik7XG5cbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YXRlS2V5LCBzdGF0ZSk7XG4gICBjb25zdCBzY29wZSA9ICd1c2VyLXJlYWQtcHJpdmF0ZSB1c2VyLXJlYWQtZW1haWwnO1xuXG4gICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemUnO1xuICAgdXJsICs9ICc/cmVzcG9uc2VfdHlwZT10b2tlbic7XG4gICB1cmwgKz0gJyZjbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfaWQpO1xuICAgdXJsICs9ICcmc2NvcGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzY29wZSk7XG4gICB1cmwgKz0gJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdF91cmkpO1xuICAgdXJsICs9ICcmc3RhdGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZSk7XG5cbiAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcblxufVxuXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TG9nIGluIHdpdGggU3BvdGlmeTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS50cmllZFRvTG9nSW4gPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb2dpbiB3YXMgbm90IHN1Y2Nlc3NmdWwsIHBsZWFzZSB0cnkgYWdhaW4gb3IgY29tZSBiYWNrIGxhdGVyXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBoMSxcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L0xheW91dD5cbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nKTtcbiJdfQ== */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/index.js */"));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=index.js.2a965a0f355ccadf700c.hot-update.js.map