webpackHotUpdate("static/development/pages/playlists.js",{

/***/ "./pages/playlists.js":
/*!****************************!*\
  !*** ./pages/playlists.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Playlists; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./constants.js");















var Playlists =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Playlists, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Playlists, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
        var query;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                return _context.abrupt("return", {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Playlists(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Playlists);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Playlists).call(this, props));
    _this.state = {
      playlists: null,
      access_token: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Playlists, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      var _this2 = this;

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

      var params = getHashParams();
      console.log({
        params: params
      });
      var access_token = params.access_token; // state = params.state,
      // storedState = sessionStorage.getItem(STATE_KEY);

      this.setState({
        access_token: access_token
      });

      if (!access_token) {
        alert('There was an error during the authentication');
      } else {
        // sessionStorage.removeItem(STATE_KEY);
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

      if (access_token !== null) {
        fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        }).then(function (res) {
          return res.json();
        }).then(function (response) {
          return _this2.setState({
            playlists: response.items
          });
        }).catch(function (error) {
          return console.error('Error:', error);
        });
      } else {
        alert("you are not logged in");
      }
    } //   getTrackInfo (queryParam) {
    //     console.log("called get track info query param", queryParam);
    //     // llo: throw access token and query param in url, redirec to tracks, make API call
    //     let path = '/tracks';
    //     // url += '?response_type=token';
    //     path += '?access_token=' + encodeURIComponent(this.state.access_token);
    //     // url += '&scope=' + encodeURIComponent(scope);
    //     // url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    //     // url += '&state=' + encodeURIComponent(state);
    //     Router.pushRoute(path)
    // };

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var playlists = this.state.playlists;
      console.log(playlists);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2040622383"
      }, "Playlists"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2040622383" + " " + "playlistContainer"
      }, playlists && playlists.map(function (playlist, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          className: "playlist",
          key: index,
          href: '/tracks' + '?access_token=' + encodeURIComponent(_this3.state.access_token)
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-2040622383"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: playlist.images[0].url,
          className: "jsx-2040622383"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2040622383"
        }, playlist.name)));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2040622383"
      }, "p.jsx-2040622383{font-family:'Arial';font-weight:bold;}.playlistContainer.jsx-2040622383{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;}.playlist.jsx-2040622383{-webkit-flex:1;-ms-flex:1;flex:1;}img.jsx-2040622383{height:300px;width:300px;cursor:pointer;}img.jsx-2040622383:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXRoZXJpbmV5YW5pc2gvcHJvamVjdGl0YXMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvcGxheWxpc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHeUIsQUFHc0MsQUFJUCxBQUtOLEFBR08sQUFNQyxhQUxGLEVBTWYsS0FsQm1CLEtBYUQsUUFKbEIsSUFSQSxHQWFBLGtDQVZxQixxRUFDSix5REFDakIiLCJmaWxlIjoiL1VzZXJzL2NhdGhlcmluZXlhbmlzaC9wcm9qZWN0aXRhcy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9wbGF5bGlzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBBQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5bGlzdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWxpc3RzOiBudWxsLFxuICAgICAgYWNjZXNzX3Rva2VuOiBudWxsLFxuICAgIH1cbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKHByb3BzKSB7XG4gICAgZnVuY3Rpb24gZ2V0SGFzaFBhcmFtcygpIHtcbiAgICAgIHZhciBoYXNoUGFyYW1zID0ge307XG5cbiAgICAgICAgdmFyIGUsIHIgPSAvKFteJjs9XSspPT8oW14mO10qKS9nLFxuICAgICAgICAgICAgcSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgd2hpbGUgKCBlID0gci5leGVjKHEpKSB7XG4gICAgICAgICAgIGhhc2hQYXJhbXNbZVsxXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGhhc2hQYXJhbXM7XG4gICAgfVxuXG5cbiAgICBsZXQgcGFyYW1zID0gZ2V0SGFzaFBhcmFtcygpO1xuICAgIGNvbnNvbGUubG9nKHtwYXJhbXN9KTtcbiAgICBsZXQgYWNjZXNzX3Rva2VuID0gcGFyYW1zLmFjY2Vzc190b2tlblxuICAgICAgICAvLyBzdGF0ZSA9IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgLy8gc3RvcmVkU3RhdGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUQVRFX0tFWSk7XG4gICB0aGlzLnNldFN0YXRlKHthY2Nlc3NfdG9rZW46IGFjY2Vzc190b2tlbn0pO1xuXG4gICAgaWYgKCFhY2Nlc3NfdG9rZW4pIHtcbiAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIHRoZSBhdXRoZW50aWNhdGlvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNUQVRFX0tFWSk7XG4gICAgICBpZiAoYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIGZldGNoKCdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZScsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpOztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWNjZXNzX3Rva2VuICE9PSBudWxsKSB7XG4gICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWxpc3RzP2xpbWl0PTUwJywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuXG4gICAgICAgICAgfVxuICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5zZXRTdGF0ZSh7cGxheWxpc3RzOiByZXNwb25zZS5pdGVtc30pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJ5b3UgYXJlIG5vdCBsb2dnZWQgaW5cIik7XG4gICAgfVxuICB9XG5cbi8vICAgZ2V0VHJhY2tJbmZvIChxdWVyeVBhcmFtKSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJjYWxsZWQgZ2V0IHRyYWNrIGluZm8gcXVlcnkgcGFyYW1cIiwgcXVlcnlQYXJhbSk7XG4vLyAgICAgLy8gbGxvOiB0aHJvdyBhY2Nlc3MgdG9rZW4gYW5kIHF1ZXJ5IHBhcmFtIGluIHVybCwgcmVkaXJlYyB0byB0cmFja3MsIG1ha2UgQVBJIGNhbGxcblxuLy8gICAgIGxldCBwYXRoID0gJy90cmFja3MnO1xuLy8gICAgIC8vIHVybCArPSAnP3Jlc3BvbnNlX3R5cGU9dG9rZW4nO1xuLy8gICAgIHBhdGggKz0gJz9hY2Nlc3NfdG9rZW49JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlLmFjY2Vzc190b2tlbik7XG4vLyAgICAgLy8gdXJsICs9ICcmc2NvcGU9JyArIGVuY29kZVVSSUNvbXBvbmVudChzY29wZSk7XG4vLyAgICAgLy8gdXJsICs9ICcmcmVkaXJlY3RfdXJpPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RfdXJpKTtcbi8vICAgICAvLyB1cmwgKz0gJyZzdGF0ZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0YXRlKTtcbi8vICAgICBSb3V0ZXIucHVzaFJvdXRlKHBhdGgpXG4vLyB9O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHBsYXlsaXN0cyA9IHRoaXMuc3RhdGUucGxheWxpc3RzO1xuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0cyk7XG4gICAgcmV0dXJuICAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICA8cD5QbGF5bGlzdHM8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgIHsgcGxheWxpc3RzICYmXG4gICAgICAgICAgICAgICAgIHBsYXlsaXN0cy5tYXAoKHBsYXlsaXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJwbGF5bGlzdFwiIGtleT17aW5kZXh9IGhyZWY9eycvdHJhY2tzJyArICc/YWNjZXNzX3Rva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZS5hY2Nlc3NfdG9rZW4pfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYXlsaXN0LmltYWdlc1swXS51cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwbGF5bGlzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAucGxheWxpc3RDb250YWluZXIge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAucGxheWxpc3Qge1xuICAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGltZzpob3ZlciB7XG4gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/catherineyanish/projectitas/spotify-mood-if-i/pages/playlists.js */"));
    }
  }]);

  return Playlists;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=playlists.js.57a2a43a6f32481f2516.hot-update.js.map