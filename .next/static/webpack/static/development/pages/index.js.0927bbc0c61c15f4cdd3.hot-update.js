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
      console.log({
        params: params
      });
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
      }, "h1.jsx-1326224582,a.jsx-1326224582{font-family:'Arial';}a.jsx-1326224582{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1326224582:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdvQixBQUlpQyxBQUlDLEFBS1QsWUFDZCxRQVRBLDhCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2NhdHlhbmlzaC9wcm9qZWN0cy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENMSUVOVF9JRCwgUkVESVJFQ1RfVVJJIH0gZnJvbSAnLi4va2V5cyc7XG5pbXBvcnQgeyBTVEFURV9LRVksIEFDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cblxuY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0cmllZFRvTG9nSW46IGZhbHNlLFxuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU4pKTtcbiAgICAgIC8vIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKEFDQ0VTU19UT0tFTikgIT09IG51bGwgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU4pICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAvLyAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvcGxheWxpc3RzJztcbiAgICAgIC8vIH07XG4gICAgfVxuXG4gICBoYW5kbGVMb2dpbiAoKSB7XG4gICAgICAgICBmdW5jdGlvbiBnZXRIYXNoUGFyYW1zKCkge1xuICAgICAgICAgICB2YXIgaGFzaFBhcmFtcyA9IHt9O1xuICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgIHZhciBlLCByID0gLyhbXiY7PV0rKT0/KFteJjtdKikvZyxcbiAgICAgICAgICAgICAgICAgcSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgICB3aGlsZSAoIGUgPSByLmV4ZWMocSkpIHtcbiAgICAgICAgICAgICAgICBoYXNoUGFyYW1zW2VbMV1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGVbMl0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gaGFzaFBhcmFtcztcbiAgICAgICAgIH1cblxuICAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgICAgICAgIHZhciB0ZXh0ID0gJyc7XG4gICAgICAgICAgIHZhciBwb3NzaWJsZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG5cbiAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgfTtcblxuXG4gICAgICAgICBsZXQgcGFyYW1zID0gZ2V0SGFzaFBhcmFtcygpO1xuICAgICAgICAgY29uc29sZS5sb2coe3BhcmFtc30pO1xuICAgICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IHBhcmFtcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgc3RhdGUgPSBwYXJhbXMuc3RhdGUsXG4gICAgICAgICAgICAgc3RvcmVkU3RhdGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUQVRFX0tFWSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc190b2tlbik7XG5cbiAgICAgICAgIGlmIChhY2Nlc3NfdG9rZW4gJiYgKHN0YXRlID09IG51bGwgfHwgc3RhdGUgIT09IHN0b3JlZFN0YXRlKSkge1xuICAgICAgICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIGR1cmluZyB0aGUgYXV0aGVudGljYXRpb24nKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU1RBVEVfS0VZKTtcbiAgICAgICAgICAgaWYgKGFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaWlpaScpO1xuICAgICAgICAgICAgIGZldGNoKCdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZScsIHtcbiAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKSlcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpOztcbiAgICAgICAgICAgfVxuICAgICAgICAgfVxuXG4gICAgIGNvbnN0IGNsaWVudF9pZCA9IENMSUVOVF9JRDsgLy8gWW91ciBjbGllbnQgaWRcbiAgICAgY29uc3QgcmVkaXJlY3RfdXJpID0gUkVESVJFQ1RfVVJJOyAvLyBZb3VyIHJlZGlyZWN0IHVyaVxuXG4gICAgIHN0YXRlID0gZ2VuZXJhdGVSYW5kb21TdHJpbmcoMTYpO1xuXG4gICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU1RBVEVfS0VZLCBzdGF0ZSk7XG4gICAgIGNvbnNvbGUubG9nKGFjY2Vzc190b2tlbik7XG4gICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQUNDRVNTX1RPS0VOLCBhY2Nlc3NfdG9rZW4pO1xuICAgICBjb25zdCBzY29wZSA9ICd1c2VyLXJlYWQtcHJpdmF0ZSBwbGF5bGlzdC1yZWFkLXByaXZhdGUgdXNlci1yZWFkLWVtYWlsJztcblxuICAgICBsZXQgdXJsID0gJ2h0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplJztcbiAgICAgdXJsICs9ICc/cmVzcG9uc2VfdHlwZT10b2tlbic7XG4gICAgIHVybCArPSAnJmNsaWVudF9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudF9pZCk7XG4gICAgIHVybCArPSAnJnNjb3BlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc2NvcGUpO1xuICAgICB1cmwgKz0gJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdF91cmkpO1xuICAgICB1cmwgKz0gJyZzdGF0ZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlKTtcblxuICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSAnL3BsYXlsaXN0cyc7XG4gICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGlkPVwibG9naW5cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW59IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxvZyBpbiB3aXRoIFNwb3RpZnk8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvciAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLnRyaWVkVG9Mb2dJbiA9PT0gdHJ1ZSAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBMb2dpbiB3YXMgbm90IHN1Y2Nlc3NmdWwsIHBsZWFzZSB0cnkgYWdhaW4gb3IgY29tZSBiYWNrIGxhdGVyXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZyk7XG4iXX0= */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/index.js */"));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=index.js.0927bbc0c61c15f4cdd3.hot-update.js.map