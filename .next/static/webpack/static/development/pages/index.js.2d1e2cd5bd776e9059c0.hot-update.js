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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keys */ "./keys.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./constants.js");














var Blog =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Blog, _React$Component);

  function Blog(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Blog);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Blog).call(this, props));
    _this.state = {
      triedToLogIn: false,
      accessToken: null,
      error: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Blog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_12__["ACCESS_TOKEN"])); // if (sessionStorage.getItem(ACCESS_TOKEN) !== null && sessionStorage.getItem(ACCESS_TOKEN) !== undefined ) {
      //      window.location = '/playlists';
      // };
    }
  }, {
    key: "handleLogin",
    value: function handleLogin() {
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
      console.log(params);
      var access_token = params.access_token,
          state = params.state,
          storedState = sessionStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_12__["STATE_KEY"]);
      console.log(access_token);

      if (access_token && (state == null || state !== storedState)) {
        alert('There was an error during the authentication');
      } else {
        sessionStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_12__["STATE_KEY"]);

        if (access_token) {
          console.log('hiiii');
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

      var client_id = _keys__WEBPACK_IMPORTED_MODULE_11__["CLIENT_ID"]; // Your client id

      var redirect_uri = _keys__WEBPACK_IMPORTED_MODULE_11__["REDIRECT_URI"]; // Your redirect uri

      state = generateRandomString(16);
      sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_12__["STATE_KEY"], state);
      console.log(access_token);
      sessionStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_12__["ACCESS_TOKEN"], access_token);
      var scope = 'user-read-private playlist-read-private user-read-email';
      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(client_id);
      url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
      url += '&state=' + encodeURIComponent(state); // window.location = '/playlists';
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "login",
        className: "jsx-1326224582"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.handleLogin,
        className: "jsx-1326224582" + " " + "btn btn-primary"
      }, "Log in with Spotify")), this.state.error !== null && this.state.triedToLogIn === true && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1326224582"
      }, "Login was not successful, please try again or come back later"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1326224582"
      }, "h1.jsx-1326224582,a.jsx-1326224582{font-family:'Arial';}a.jsx-1326224582{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1326224582:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdvQixBQUlpQyxBQUlDLEFBS1QsWUFDZCxRQVRBLDhCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2NhdHlhbmlzaC9wcm9qZWN0cy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENMSUVOVF9JRCwgUkVESVJFQ1RfVVJJIH0gZnJvbSAnLi4va2V5cyc7XG5pbXBvcnQgeyBTVEFURV9LRVksIEFDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cblxuY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0cmllZFRvTG9nSW46IGZhbHNlLFxuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU4pKTtcbiAgICAgIC8vIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKEFDQ0VTU19UT0tFTikgIT09IG51bGwgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU4pICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAvLyAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvcGxheWxpc3RzJztcbiAgICAgIC8vIH07XG4gICAgfVxuXG4gICBoYW5kbGVMb2dpbiAoKSB7XG4gICAgICAgICBmdW5jdGlvbiBnZXRIYXNoUGFyYW1zKCkge1xuICAgICAgICAgICB2YXIgaGFzaFBhcmFtcyA9IHt9O1xuICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgIHZhciBlLCByID0gLyhbXiY7PV0rKT0/KFteJjtdKikvZyxcbiAgICAgICAgICAgICAgICAgcSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICB3aGlsZSAoIGUgPSByLmV4ZWMocSkpIHtcbiAgICAgICAgICAgICAgICBoYXNoUGFyYW1zW2VbMV1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGVbMl0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gaGFzaFBhcmFtcztcbiAgICAgICAgIH1cblxuICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgICAgIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgfTtcblxuXG4gICAgICAgICBsZXQgcGFyYW1zID0gZ2V0SGFzaFBhcmFtcygpO1xuICAgICAgICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBwYXJhbXMuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgIHN0YXRlID0gcGFyYW1zLnN0YXRlLFxuICAgICAgICAgICAgIHN0b3JlZFN0YXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTVEFURV9LRVkpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pO1xuXG4gICAgICAgICBpZiAoYWNjZXNzX3Rva2VuICYmIChzdGF0ZSA9PSBudWxsIHx8IHN0YXRlICE9PSBzdG9yZWRTdGF0ZSkpIHtcbiAgICAgICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBkdXJpbmcgdGhlIGF1dGhlbnRpY2F0aW9uJyk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNUQVRFX0tFWSk7XG4gICAgICAgICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGlpaWknKTtcbiAgICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUnLCB7XG4gICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlblxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXG4gICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpKTs7XG4gICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICBjb25zdCBjbGllbnRfaWQgPSBDTElFTlRfSUQ7IC8vIFlvdXIgY2xpZW50IGlkXG4gICAgIGNvbnN0IHJlZGlyZWN0X3VyaSA9IFJFRElSRUNUX1VSSTsgLy8gWW91ciByZWRpcmVjdCB1cmlcblxuICAgICBzdGF0ZSA9IGdlbmVyYXRlUmFuZG9tU3RyaW5nKDE2KTtcblxuICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUQVRFX0tFWSwgc3RhdGUpO1xuICAgICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pO1xuICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKEFDQ0VTU19UT0tFTiwgYWNjZXNzX3Rva2VuKTtcbiAgICAgY29uc3Qgc2NvcGUgPSAndXNlci1yZWFkLXByaXZhdGUgcGxheWxpc3QtcmVhZC1wcml2YXRlIHVzZXItcmVhZC1lbWFpbCc7XG5cbiAgICAgbGV0IHVybCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZSc7XG4gICAgIHVybCArPSAnP3Jlc3BvbnNlX3R5cGU9dG9rZW4nO1xuICAgICB1cmwgKz0gJyZjbGllbnRfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChjbGllbnRfaWQpO1xuICAgICB1cmwgKz0gJyZzY29wZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNjb3BlKTtcbiAgICAgdXJsICs9ICcmcmVkaXJlY3RfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RfdXJpKTtcbiAgICAgdXJsICs9ICcmc3RhdGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzdGF0ZSk7XG5cbiAgICAgLy8gd2luZG93LmxvY2F0aW9uID0gJy9wbGF5bGlzdHMnO1xuICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBpZD1cImxvZ2luXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2lufSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2cgaW4gd2l0aCBTcG90aWZ5PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUuZXJyb3IgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS50cmllZFRvTG9nSW4gPT09IHRydWUgJiZcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgTG9naW4gd2FzIG5vdCBzdWNjZXNzZnVsLCBwbGVhc2UgdHJ5IGFnYWluIG9yIGNvbWUgYmFjayBsYXRlclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSxcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2cpO1xuIl19 */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/index.js */"));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=index.js.2d1e2cd5bd776e9059c0.hot-update.js.map