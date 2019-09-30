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
      }

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
      console.log("called get track info query param", queryParam); // llo: throw access token and query param in url, redirec to tracks, make API call
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var playlists = this.state.playlists;
      console.log(playlists);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-959293798"
      }, "Playlists"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-959293798" + " " + "playlistContainer"
      }, playlists && playlists.map(function (playlist, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this3.getTrackInfo(playlist.tracks.href);
          },
          className: "jsx-959293798" + " " + "playlist"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: playlist.images[0].url,
          className: "jsx-959293798"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-959293798"
        }, playlist.name));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "959293798"
      }, "p.jsx-959293798{font-family:'Arial';font-weight:bold;}.playlistContainer.jsx-959293798{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-flow:wrap;-ms-flex-flow:wrap;flex-flow:wrap;}.playlist.jsx-959293798{-webkit-flex:1;-ms-flex:1;flex:1;}img.jsx-959293798{height:300px;width:300px;}img.jsx-959293798:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvcGxheWxpc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGeUIsQUFHc0MsQUFJUCxBQUtOLEFBR08sQUFLQyxhQUpGLEVBS2YsS0FqQm1CLEtBYW5CLFFBSkEsSUFSQSxxQ0FHcUIscUVBQ0oseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvcGxheWxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQUNDRVNTX1RPS0VOIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWxpc3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXlsaXN0czogbnVsbCxcbiAgICB9XG4gIH1cblxuXG4gIGNvbXBvbmVudERpZE1vdW50IChwcm9wcykge1xuICAgIGZ1bmN0aW9uIGdldEhhc2hQYXJhbXMoKSB7XG4gICAgICB2YXIgaGFzaFBhcmFtcyA9IHt9O1xuXG4gICAgICAgIHZhciBlLCByID0gLyhbXiY7PV0rKT0/KFteJjtdKikvZyxcbiAgICAgICAgICAgIHEgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHdoaWxlICggZSA9IHIuZXhlYyhxKSkge1xuICAgICAgICAgICBoYXNoUGFyYW1zW2VbMV1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGVbMl0pO1xuICAgICAgICB9XG5cbiAgICAgIHJldHVybiBoYXNoUGFyYW1zO1xuICAgIH1cblxuXG4gICAgbGV0IHBhcmFtcyA9IGdldEhhc2hQYXJhbXMoKTtcbiAgICBjb25zb2xlLmxvZyh7cGFyYW1zfSk7XG4gICAgbGV0IGFjY2Vzc190b2tlbiA9IHBhcmFtcy5hY2Nlc3NfdG9rZW5cbiAgICAgICAgLy8gc3RhdGUgPSBwYXJhbXMuc3RhdGUsXG4gICAgICAgIC8vIHN0b3JlZFN0YXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTVEFURV9LRVkpO1xuICAgY29uc29sZS5sb2coYWNjZXNzX3Rva2VuKTtcblxuICAgIGlmICghYWNjZXNzX3Rva2VuKSB7XG4gICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIGR1cmluZyB0aGUgYXV0aGVudGljYXRpb24nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShTVEFURV9LRVkpO1xuICAgICAgaWYgKGFjY2Vzc190b2tlbikge1xuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgYWNjZXNzX3Rva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpKTs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjY2Vzc190b2tlbiAhPT0gbnVsbCkge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXlsaXN0cycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlblxuICAgICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMuc2V0U3RhdGUoe3BsYXlsaXN0czogcmVzcG9uc2UuaXRlbXN9KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwieW91IGFyZSBub3QgbG9nZ2VkIGluXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRyYWNrSW5mbyAocXVlcnlQYXJhbSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIGdldCB0cmFjayBpbmZvIHF1ZXJ5IHBhcmFtXCIsIHF1ZXJ5UGFyYW0pO1xuICAgIC8vIGxsbzogdGhyb3cgYWNjZXNzIHRva2VuIGFuZCBxdWVyeSBwYXJhbSBpbiB1cmwsIHJlZGlyZWMgdG8gdHJhY2tzLCBtYWtlIEFQSSBjYWxsXG59O1xuXG4gIHJlbmRlciAoKSB7XG4gICAgbGV0IHBsYXlsaXN0cyA9IHRoaXMuc3RhdGUucGxheWxpc3RzO1xuICAgIGNvbnNvbGUubG9nKHBsYXlsaXN0cyk7XG4gICAgcmV0dXJuICAoXG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICA8cD5QbGF5bGlzdHM8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3RDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgIHsgcGxheWxpc3RzICYmXG4gICAgICAgICAgICAgICAgIHBsYXlsaXN0cy5tYXAoKHBsYXlsaXN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0XCIga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gdGhpcy5nZXRUcmFja0luZm8ocGxheWxpc3QudHJhY2tzLmhyZWYpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxheWxpc3QuaW1hZ2VzWzBdLnVybH0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwbGF5bGlzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5wbGF5bGlzdENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5wbGF5bGlzdCB7XG4gICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgaW1nOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/playlists.js */"));
    }
  }]);

  return Playlists;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=playlists.js.2599eddd3fd39128a3a0.hot-update.js.map