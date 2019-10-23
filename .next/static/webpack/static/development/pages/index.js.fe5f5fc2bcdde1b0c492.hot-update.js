webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AnimationPanel.jsx":
/*!***************************************!*\
  !*** ./components/AnimationPanel.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_AnimationPanel_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/AnimationPanel.scss */ "./styles/AnimationPanel.scss");
/* harmony import */ var _styles_AnimationPanel_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AnimationPanel_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\elvin\\Development\\spotify-visual-creator\\components\\AnimationPanel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var AnimationPanel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AnimationPanel, _React$Component);

  function AnimationPanel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnimationPanel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AnimationPanel).call(this, props));
    _this.scene = new three__WEBPACK_IMPORTED_MODULE_5__["Scene"]();
    _this.camera = new three__WEBPACK_IMPORTED_MODULE_5__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
    _this.renderer = new three__WEBPACK_IMPORTED_MODULE_5__["WebGLRenderer"]();

    _this.renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimationPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mount.appendChild(this.renderer.domElement);
      var material = new three__WEBPACK_IMPORTED_MODULE_5__["LineBasicMaterial"]({
        color: 0xfd44f5
      });
      var geometry = new three__WEBPACK_IMPORTED_MODULE_5__["Geometry"]();
      geometry.vertices.push(new three__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0.5, 10), new three__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0));
      var angleDeltas = [];
      var lines = [];

      for (var i = 0; i < 40; i++) {
        var line = new three__WEBPACK_IMPORTED_MODULE_5__["Line"](geometry, material);

        if (i < 20) {
          line.rotateX(0.07 * i);
        } else {
          line.rotateX(-0.07 * (i - 20));
        }

        lines.push(line);
        angleDeltas.push(0.02);
        this.scene.add(line);
      }

      this.camera.position.z = 10;

      this.animate = function () {
        requestAnimationFrame(_this2.animate);
        lines.forEach(function (line, index) {
          if (line.rotation.y > 1.6) {
            angleDeltas[index] = -angleDeltas[index];
          }

          if (line.rotation.y < -1.6) {
            angleDeltas[index] = -angleDeltas[index];
          }

          line.rotation.y += angleDeltas[index];
        });

        _this2.renderer.render(_this2.scene, _this2.camera);
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "AnimationPanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("div", {
        ref: function ref(_ref) {
          return _this3.mount = _ref;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("button", {
        onClick: this.animate,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "play"));
    }
  }]);

  return AnimationPanel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimationPanel);

/***/ })

})
//# sourceMappingURL=index.js.fe5f5fc2bcdde1b0c492.hot-update.js.map