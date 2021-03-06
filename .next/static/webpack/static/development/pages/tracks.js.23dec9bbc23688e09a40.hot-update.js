webpackHotUpdate("static/development/pages/tracks.js",{

/***/ "./pages/tracks.js":
/*!*************************!*\
  !*** ./pages/tracks.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tracks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_11__);













var Tracks =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Tracks, _React$Component);

  function Tracks(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tracks);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tracks).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleTrackListResponse", function (tracklist) {
      _this.setState({
        tracks: tracklist
      });

      var idList = '';

      for (var index = 0; index < tracklist.length; index++) {
        idList += tracklist[index].track.id + ',';
      }

      _this.getTrackAudioFeatures(idList);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getTrackAudioFeatures", function (idBlob) {
      fetch("https://api.spotify.com/v1/audio-features/?ids=".concat(idBlob), {
        headers: {
          'Authorization': 'Bearer ' + _this.state.access_token
        }
      }).then(function (res) {
        return res.json();
      }).then(function (response) {
        return _this.createTrackInfoObject(response.audio_features);
      }).catch(function (error) {
        return console.error('Error:', error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "trackObjects", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createTrackInfoObject", function (audioFeatures) {
      var tracklist = _this.state.tracks;
      console.log(tracklist);

      for (var i = 0; i < audioFeatures.length; i++) {
        for (var j = 0; j < _this.state.tracks.length; j++) {
          if (tracklist[j].track.id === audioFeatures[i].id) {
            var obj = {};
            obj = audioFeatures[i];
            obj["name"] = tracklist[i].track.name;
            obj["artist"] = tracklist[i].track.artists[0].name;

            _this.trackObjects.push(obj);

            obj = {};
          }
        }
      }

      console.log(_this.trackObjects);
    });

    _this.state = {
      tracks: null,
      access_token: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tracks, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      var _this2 = this;

      var access_token = next_router__WEBPACK_IMPORTED_MODULE_10___default.a.router.query.access_token;
      this.setState({
        access_token: access_token
      });
      var playlist_id = next_router__WEBPACK_IMPORTED_MODULE_10___default.a.router.query.playlist_id;
      var tracks = null;

      if (access_token !== null) {
        fetch("https://api.spotify.com/v1/playlists/".concat(playlist_id, "/tracks"), {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        }).then(function (res) {
          return res.json();
        }).then(function (response) {
          return _this2.handleTrackListResponse(response.items);
        }).catch(function (error) {
          return console.error('Error:', error);
        });
      } else {
        alert("you are not logged in");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ctx = typeof window !== 'undefined' && document.getElementById('myChart').getContext("2d");
      var scatterChart = typeof window !== 'undefined' && new chart_js__WEBPACK_IMPORTED_MODULE_11___default.a(ctx, {
        type: 'scatter',
        data: {
          datasets: this.trackObjects.map(function (track, index) {
            return {
              "label": [track.name, track.artist],
              "data": [{
                "x": track.valence,
                "y": track.danceability
              }]
            };
          }) // datasets: [
          //   {
          //     label: ["China"],
          //     backgroundColor: "rgba(255,221,50,0.2)",
          //     borderColor: "rgba(255,221,50,1)",
          //     data: [{
          //       x: -21269017,
          //       y: 5.245,
          //       r: 15
          //     }]
          //   }, {
          //     label: ["Denmark"],
          //     backgroundColor: "rgba(60,186,159,0.2)",
          //     borderColor: "rgba(60,186,159,1)",
          //     data: [{
          //       x: 258702,
          //       y: -7.526,
          //       r: 10
          //     }]
          //   }, {
          //     label: ["Germany"],
          //     backgroundColor: "rgba(0,0,0,0.2)",
          //     borderColor: "#000",
          //     data: [{
          //       x: 3979083,
          //       y: 6.994,
          //       r: 15
          //     }]
          //   }, {
          //     label: ["Japan"],
          //     backgroundColor: "rgba(193,46,12,0.2)",
          //     borderColor: "rgba(193,46,12,1)",
          //     data: [{
          //       x: 4931877,
          //       y: 5.921,
          //       r: 15
          //     }]
          //   }
          // ]

        },
        options: {
          // scales: {
          //     xAxes: [{
          //         type: 'linear',
          //         position: 'center'
          //     }]
          // }
          title: {
            display: true,
            text: 'Songs By Happiness and Danceability'
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Happiness"
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Danceability"
              }
            }]
          }
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Tracks"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("canvas", {
        id: "myChart",
        width: "400",
        height: "400"
      }));
    }
  }]);

  return Tracks;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=tracks.js.23dec9bbc23688e09a40.hot-update.js.map