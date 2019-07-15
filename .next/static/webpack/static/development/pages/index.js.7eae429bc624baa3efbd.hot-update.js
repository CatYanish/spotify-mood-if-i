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
        var e,
            r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);

        while (e = r.exec(q)) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
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
      url += '&state=' + encodeURIComponent(state); // LLO : all of the setting the url needs to happen BEFORE getting URL hash hashParams
      /// TODO: move all hash param and sessionStorage stuff into helper, which is called after setting url
      // window.location = '/playlists';
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
      }, "h1.jsx-1326224582,a.jsx-1326224582{font-family:'Arial';}a.jsx-1326224582{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1326224582:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dvQixBQUlpQyxBQUlDLEFBS1QsWUFDZCxRQVRBLDhCQUlhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2NhdHlhbmlzaC9wcm9qZWN0cy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IENMSUVOVF9JRCwgUkVESVJFQ1RfVVJJIH0gZnJvbSAnLi4va2V5cyc7XG5pbXBvcnQgeyBTVEFURV9LRVksIEFDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cblxuY2xhc3MgQmxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB0cmllZFRvTG9nSW46IGZhbHNlLFxuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU4pKTtcbiAgICAgIC8vIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKEFDQ0VTU19UT0tFTikgIT09IG51bGwgJiYgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU4pICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAvLyAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvcGxheWxpc3RzJztcbiAgICAgIC8vIH07XG4gICAgfVxuXG4gICBoYW5kbGVMb2dpbiAoKSB7XG4gICAgICAgICBmdW5jdGlvbiBnZXRIYXNoUGFyYW1zKCkge1xuICAgICAgICAgICB2YXIgaGFzaFBhcmFtcyA9IHt9O1xuXG4gICAgICAgICAgICAgdmFyIGUsIHIgPSAvKFteJjs9XSspPT8oW14mO10qKS9nLFxuICAgICAgICAgICAgICAgICBxID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgIHdoaWxlICggZSA9IHIuZXhlYyhxKSkge1xuICAgICAgICAgICAgICAgIGhhc2hQYXJhbXNbZVsxXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZVsyXSk7XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIHJldHVybiBoYXNoUGFyYW1zO1xuICAgICAgICAgfVxuXG4gICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVN0cmluZyhsZW5ndGgpIHtcbiAgICAgICAgICAgdmFyIHRleHQgPSAnJztcbiAgICAgICAgICAgdmFyIHBvc3NpYmxlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcblxuICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICB9O1xuXG5cbiAgICAgICAgIGxldCBwYXJhbXMgPSBnZXRIYXNoUGFyYW1zKCk7XG4gICAgICAgICBjb25zb2xlLmxvZyh7cGFyYW1zfSk7XG4gICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gcGFyYW1zLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICBzdGF0ZSA9IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgICAgICBzdG9yZWRTdGF0ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RBVEVfS0VZKTtcbiAgICAgICAgY29uc29sZS5sb2coYWNjZXNzX3Rva2VuKTtcblxuICAgICAgICAgaWYgKGFjY2Vzc190b2tlbiAmJiAoc3RhdGUgPT0gbnVsbCB8fCBzdGF0ZSAhPT0gc3RvcmVkU3RhdGUpKSB7XG4gICAgICAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIHRoZSBhdXRoZW50aWNhdGlvbicpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTVEFURV9LRVkpO1xuICAgICAgICAgICBpZiAoYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpaWlpJyk7XG4gICAgICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lJywge1xuICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpKVxuICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7O1xuICAgICAgICAgICB9XG4gICAgICAgICB9XG5cbiAgICAgY29uc3QgY2xpZW50X2lkID0gQ0xJRU5UX0lEOyAvLyBZb3VyIGNsaWVudCBpZFxuICAgICBjb25zdCByZWRpcmVjdF91cmkgPSBSRURJUkVDVF9VUkk7IC8vIFlvdXIgcmVkaXJlY3QgdXJpXG5cbiAgICAgc3RhdGUgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZygxNik7XG5cbiAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTVEFURV9LRVksIHN0YXRlKTtcbiAgICAgY29uc29sZS5sb2coYWNjZXNzX3Rva2VuKTtcbiAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShBQ0NFU1NfVE9LRU4sIGFjY2Vzc190b2tlbik7XG4gICAgIGNvbnN0IHNjb3BlID0gJ3VzZXItcmVhZC1wcml2YXRlIHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSB1c2VyLXJlYWQtZW1haWwnO1xuXG4gICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemUnO1xuICAgICB1cmwgKz0gJz9yZXNwb25zZV90eXBlPXRva2VuJztcbiAgICAgdXJsICs9ICcmY2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcbiAgICAgdXJsICs9ICcmc2NvcGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzY29wZSk7XG4gICAgIHVybCArPSAnJnJlZGlyZWN0X3VyaT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0X3VyaSk7XG4gICAgIHVybCArPSAnJnN0YXRlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpO1xuICAgICAvLyBMTE8gOiBhbGwgb2YgdGhlIHNldHRpbmcgdGhlIHVybCBuZWVkcyB0byBoYXBwZW4gQkVGT1JFIGdldHRpbmcgVVJMIGhhc2ggaGFzaFBhcmFtc1xuICAgICAvLy8gVE9ETzogbW92ZSBhbGwgaGFzaCBwYXJhbSBhbmQgc2Vzc2lvblN0b3JhZ2Ugc3R1ZmYgaW50byBoZWxwZXIsIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBzZXR0aW5nIHVybFxuICAgICAvLyB3aW5kb3cubG9jYXRpb24gPSAnL3BsYXlsaXN0cyc7XG4gICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGlkPVwibG9naW5cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW59IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxvZyBpbiB3aXRoIFNwb3RpZnk8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvciAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLnRyaWVkVG9Mb2dJbiA9PT0gdHJ1ZSAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBMb2dpbiB3YXMgbm90IHN1Y2Nlc3NmdWwsIHBsZWFzZSB0cnkgYWdhaW4gb3IgY29tZSBiYWNrIGxhdGVyXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxLFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZyk7XG4iXX0= */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/index.js */"));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=index.js.7eae429bc624baa3efbd.hot-update.js.map