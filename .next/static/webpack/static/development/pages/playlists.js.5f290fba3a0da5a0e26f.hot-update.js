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
      playlists: null
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

      console.log(access_token);

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
      } // LLO : throw access token in storage, make some API requests and giddy on up


      if (access_token !== null) {
        fetch('https://api.spotify.com/v1/me/playlists', {
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
    }
  }, {
    key: "getTrackInfo",
    value: function getTrackInfo(queryParam) {
      console.log("called get track info query param", queryParam);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var playlists = this.state.playlists;
      console.log(playlists);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-1979081537"
      }, "Playlists"), playlists && playlists.map(function (playlist, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-1979081537" + " " + "playlistContainer"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this3.getTrackInfo(playlist.tracks.href);
          },
          className: "jsx-1979081537"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: playlist.images[0].url,
          className: "jsx-1979081537"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1979081537"
        }, playlist.name)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1979081537"
      }, "p.jsx-1979081537{font-family:'Arial';font-weight:bold;}.playlistContainer.jsx-1979081537{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-1979081537{height:300px;width:300px;}img.jsx-1979081537:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvcGxheWxpc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGeUIsQUFHc0MsQUFJUCxBQUdDLEFBS0MsYUFKRixFQUtmLEtBWm1CLEtBUW5CLFlBUEEscUNBR0EiLCJmaWxlIjoiL1VzZXJzL2NhdHlhbmlzaC9wcm9qZWN0cy9zcG90aWZ5LW1vb2QtaWYtaS9wYWdlcy9wbGF5bGlzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBBQ0NFU1NfVE9LRU4gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5bGlzdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWxpc3RzOiBudWxsLFxuICAgIH1cbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQgKHByb3BzKSB7XG4gICAgZnVuY3Rpb24gZ2V0SGFzaFBhcmFtcygpIHtcbiAgICAgIHZhciBoYXNoUGFyYW1zID0ge307XG5cbiAgICAgICAgdmFyIGUsIHIgPSAvKFteJjs9XSspPT8oW14mO10qKS9nLFxuICAgICAgICAgICAgcSA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgICAgd2hpbGUgKCBlID0gci5leGVjKHEpKSB7XG4gICAgICAgICAgIGhhc2hQYXJhbXNbZVsxXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGhhc2hQYXJhbXM7XG4gICAgfVxuXG5cbiAgICBsZXQgcGFyYW1zID0gZ2V0SGFzaFBhcmFtcygpO1xuICAgIGNvbnNvbGUubG9nKHtwYXJhbXN9KTtcbiAgICBsZXQgYWNjZXNzX3Rva2VuID0gcGFyYW1zLmFjY2Vzc190b2tlblxuICAgICAgICAvLyBzdGF0ZSA9IHBhcmFtcy5zdGF0ZSxcbiAgICAgICAgLy8gc3RvcmVkU3RhdGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUQVRFX0tFWSk7XG4gICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4pO1xuXG4gICAgaWYgKCFhY2Nlc3NfdG9rZW4pIHtcbiAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3IgZHVyaW5nIHRoZSBhdXRoZW50aWNhdGlvbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNUQVRFX0tFWSk7XG4gICAgICBpZiAoYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgIGZldGNoKCdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZScsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZygnU3VjY2VzczonLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpOztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMTE8gOiB0aHJvdyBhY2Nlc3MgdG9rZW4gaW4gc3RvcmFnZSwgbWFrZSBzb21lIEFQSSByZXF1ZXN0cyBhbmQgZ2lkZHkgb24gdXBcblxuICAgIGlmIChhY2Nlc3NfdG9rZW4gIT09IG51bGwpIHtcbiAgICAgIGZldGNoKCdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHMnLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhY2Nlc3NfdG9rZW5cbiAgICAgICAgICB9XG4gICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLnNldFN0YXRlKHtwbGF5bGlzdHM6IHJlc3BvbnNlLml0ZW1zfSkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcInlvdSBhcmUgbm90IGxvZ2dlZCBpblwiKTtcbiAgICB9XG4gIH1cblxuICBnZXRUcmFja0luZm8gKHF1ZXJ5UGFyYW0pIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBnZXQgdHJhY2sgaW5mbyBxdWVyeSBwYXJhbVwiLCBxdWVyeVBhcmFtKTtcbn07XG5cbiAgcmVuZGVyICgpIHtcbiAgICBsZXQgcGxheWxpc3RzID0gdGhpcy5zdGF0ZS5wbGF5bGlzdHM7XG4gICAgY29uc29sZS5sb2cocGxheWxpc3RzKTtcbiAgICByZXR1cm4gIChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgIDxwPlBsYXlsaXN0czwvcD5cbiAgICAgICAgICAgICB7IHBsYXlsaXN0cyAmJlxuICAgICAgICAgICAgICAgcGxheWxpc3RzLm1hcCgocGxheWxpc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiB0aGlzLmdldFRyYWNrSW5mbyhwbGF5bGlzdC50cmFja3MuaHJlZil9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGF5bGlzdC5pbWFnZXNbMF0udXJsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3BsYXlsaXN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5wbGF5bGlzdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaW1nOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/playlists.js */"));
    }
  }]);

  return Playlists;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=playlists.js.5f290fba3a0da5a0e26f.hot-update.js.map