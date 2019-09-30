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
        className: "jsx-3475853960"
      }, "Playlists"), playlists && playlists.map(function (playlist, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-3475853960" + " " + "playlistContainer"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this3.getTrackInfo(playlist.tracks.href);
          },
          className: "jsx-3475853960" + " " + "playlist"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: playlist.images[0].url,
          className: "jsx-3475853960"
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3475853960"
        }, playlist.name)));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3475853960"
      }, "p.jsx-3475853960{font-family:'Arial';font-weight:bold;}.playlistContainer.jsx-3475853960{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}img.jsx-3475853960{height:300px;width:300px;}img.jsx-3475853960:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXR5YW5pc2gvcHJvamVjdHMvc3BvdGlmeS1tb29kLWlmLWkvcGFnZXMvcGxheWxpc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGeUIsQUFHc0MsQUFJUCxBQUlDLEFBS0MsYUFKRixFQUtmLEtBYm1CLEtBU25CLFlBUkEscUNBR3FCLHFFQUNyQiIsImZpbGUiOiIvVXNlcnMvY2F0eWFuaXNoL3Byb2plY3RzL3Nwb3RpZnktbW9vZC1pZi1pL3BhZ2VzL3BsYXlsaXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEFDQ0VTU19UT0tFTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlsaXN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGF5bGlzdHM6IG51bGwsXG4gICAgfVxuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCAocHJvcHMpIHtcbiAgICBmdW5jdGlvbiBnZXRIYXNoUGFyYW1zKCkge1xuICAgICAgdmFyIGhhc2hQYXJhbXMgPSB7fTtcblxuICAgICAgICB2YXIgZSwgciA9IC8oW14mOz1dKyk9PyhbXiY7XSopL2csXG4gICAgICAgICAgICBxID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICAgICAgICB3aGlsZSAoIGUgPSByLmV4ZWMocSkpIHtcbiAgICAgICAgICAgaGFzaFBhcmFtc1tlWzFdXSA9IGRlY29kZVVSSUNvbXBvbmVudChlWzJdKTtcbiAgICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFzaFBhcmFtcztcbiAgICB9XG5cblxuICAgIGxldCBwYXJhbXMgPSBnZXRIYXNoUGFyYW1zKCk7XG4gICAgY29uc29sZS5sb2coe3BhcmFtc30pO1xuICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBwYXJhbXMuYWNjZXNzX3Rva2VuXG4gICAgICAgIC8vIHN0YXRlID0gcGFyYW1zLnN0YXRlLFxuICAgICAgICAvLyBzdG9yZWRTdGF0ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RBVEVfS0VZKTtcbiAgIGNvbnNvbGUubG9nKGFjY2Vzc190b2tlbik7XG5cbiAgICBpZiAoIWFjY2Vzc190b2tlbikge1xuICAgICAgYWxlcnQoJ1RoZXJlIHdhcyBhbiBlcnJvciBkdXJpbmcgdGhlIGF1dGhlbnRpY2F0aW9uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oU1RBVEVfS0VZKTtcbiAgICAgIGlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzOicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSkpXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIExMTyA6IHRocm93IGFjY2VzcyB0b2tlbiBpbiBzdG9yYWdlLCBtYWtlIHNvbWUgQVBJIHJlcXVlc3RzIGFuZCBnaWRkeSBvbiB1cFxuXG4gICAgaWYgKGFjY2Vzc190b2tlbiAhPT0gbnVsbCkge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3BsYXlsaXN0cycsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIGFjY2Vzc190b2tlblxuICAgICAgICAgIH1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHRoaXMuc2V0U3RhdGUoe3BsYXlsaXN0czogcmVzcG9uc2UuaXRlbXN9KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwieW91IGFyZSBub3QgbG9nZ2VkIGluXCIpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRyYWNrSW5mbyAocXVlcnlQYXJhbSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIGdldCB0cmFjayBpbmZvIHF1ZXJ5IHBhcmFtXCIsIHF1ZXJ5UGFyYW0pO1xufTtcblxuICByZW5kZXIgKCkge1xuICAgIGxldCBwbGF5bGlzdHMgPSB0aGlzLnN0YXRlLnBsYXlsaXN0cztcbiAgICBjb25zb2xlLmxvZyhwbGF5bGlzdHMpO1xuICAgIHJldHVybiAgKFxuICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgPHA+UGxheWxpc3RzPC9wPlxuICAgICAgICAgICAgIHsgcGxheWxpc3RzICYmXG4gICAgICAgICAgICAgICBwbGF5bGlzdHMubWFwKChwbGF5bGlzdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0XCIga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gdGhpcy5nZXRUcmFja0luZm8ocGxheWxpc3QudHJhY2tzLmhyZWYpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxheWxpc3QuaW1hZ2VzWzBdLnVybH0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPntwbGF5bGlzdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAucGxheWxpc3RDb250YWluZXIge1xuICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGltZzpob3ZlciB7XG4gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/catyanish/projects/spotify-mood-if-i/pages/playlists.js */"));
    }
  }]);

  return Playlists;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=playlists.js.40081741553a3248284b.hot-update.js.map