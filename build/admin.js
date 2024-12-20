/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin.scss":
/*!************************!*\
  !*** ./src/admin.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.scss */ "./src/admin.scss");









// This component displays the snackbar notices on the page
const Notices = () => {
  // `useSelect` is a hook provided by the `@wordpress/data` library for subscribing to data changes.
  // Here, it gets the notices from the notices store and filters out the ones that aren't of type 'snackbar'
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).getNotices().filter(notice => notice.type === "snackbar"), []);

  // `useDispatch` is another hook from `@wordpress/data` that returns an object with functions to dispatch actions to the store.
  // Here, it gets the `removeNotice` function from the notices store.
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);

  // Renders a `SnackbarList` component from `@wordpress/components` with the filtered notices and the `removeNotice` function.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SnackbarList, {
    className: "edit-site-notices",
    notices: notices,
    onRemove: removeNotice
  });
};
class App extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  // Set initial state
  constructor() {
    super(...arguments);
    this.state = {
      partnerToken: "",
      isAPILoaded: false
    };
  }

  // After the component mounts, fetch settings and update state
  componentDidMount() {
    _wordpress_api__WEBPACK_IMPORTED_MODULE_1___default().loadPromise.then(() => {
      // Initialize settings model
      this.settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_1___default().models).Settings();

      // Get isAPILoaded from state
      const {
        isAPILoaded
      } = this.state;

      // If API is not yet loaded, fetch settings and update state
      if (isAPILoaded === false) {
        this.settings.fetch().then(response => {
          this.setState({
            partnerToken: response["werstreamtes_widget_partner_token"],
            isAPILoaded: true
          });
        });
      }
    });
  }

  // Render component
  render() {
    // Destructure state variables
    const {
      partnerToken,
      isAPILoaded
    } = this.state;

    // If API is not yet loaded, display a placeholder with a spinner
    if (!isAPILoaded) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
    }

    // Otherwise, display the settings form
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wse-plugin__header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wse-plugin__container"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wse-plugin__title"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.werstreamt.es",
      title: "WerStreamt.es",
      target: "_blank"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      alt: "WerStreamt.es?",
      src: "/wp-content/plugins/werstreamtes/assets/WerStreamtEs.svg"
    }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wse-plugin__main"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Partner Token",
      onChange: partnerToken => this.setState({
        partnerToken
      }),
      help: "Wenn dir von WerStreamt.es ein Partner Token zugewiesen wurde, kannst du ihn hier eintragen. Sonst lass das Feld bitte leer.",
      value: partnerToken
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "button-primary",
      onClick: () => {
        // Get partnerToken from state
        const {
          partnerToken
        } = this.state;

        // Initialize settings model with new partnerToken and save
        const settings = new (_wordpress_api__WEBPACK_IMPORTED_MODULE_1___default().models).Settings({
          ["werstreamtes_widget_partner_token"]: partnerToken
        });
        settings.save();

        // Show success notice
        (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)("core/notices").createNotice("success", "Einstellungen erfolgreich gespeichert", {
          type: "snackbar"
        });
      }
    }, "Speichern")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "Indem du das Widget in deine Webseite einf\xFCgst, akzeptierst du automatisch die damit verbundenen ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.werstreamt.es/developers/widget/terms/",
      target: "_blank"
    }, "Nutzungsbedingungen"), "."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wse-plugin__notices"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Notices, null)));
  }
}

/**
 * This code adds an event listener that executes a callback function when the DOM is loaded.
 * The function checks for an element with ID "widget-werstreamtes-settings".
 * If such an element exists, it renders a React component called "App" into the element using the "render" function.
 */
document.addEventListener("DOMContentLoaded", () => {
  const htmlOutput = document.getElementById("widget-werstreamtes-settings");
  if (htmlOutput) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, null), htmlOutput);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map