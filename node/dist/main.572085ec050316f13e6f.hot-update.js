"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/*index.ts*/\n/**\n * Required External Modules\n */\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nconst not_found_middleware_1 = __webpack_require__(/*! ./middleware/not-found.middleware */ \"./src/middleware/not-found.middleware.ts\");\nconst connection_1 = __importDefault(__webpack_require__(/*! ./init/connection */ \"./src/init/connection.ts\"));\nconst Router_1 = __importDefault(__webpack_require__(/*! ./init/Router */ \"./src/init/Router.ts\"));\ndotenv.config();\n/**\n * App Variables\n */\nif (!process.env.PORT) {\n    process.exit(1);\n}\nconst PORT = parseInt(process.env.PORT, 10);\nconst app = (0, express_1.default)();\n/**\n *  App Configuration\n */\napp.use(not_found_middleware_1.notFoundHandler);\napp.use(error_middleware_1.errorHandler);\napp.use((0, helmet_1.default)());\napp.use((0, cors_1.default)());\napp.use(body_parser_1.default.json({ limit: \"50mb\" }));\napp.use(body_parser_1.default.urlencoded({\n    limit: \"50mb\",\n    extended: true\n}));\n//app.use(express.static(process.cwd() + \"/public\"));\n/////////e: string.....note that///////////\nconnection_1.default.catch((err) => {\n    console.log(\"Database connection error\" + err);\n});\napp.use(\"/\", Router_1.default);\n//////////////////////////////////////////\n// app.use(express.json({ limit: \"50mb\" }));\n// app.use(express.urlencoded({ limit: \"50mb\", extended: true }));\n/**\n * Server Activation\n */\nconst server = app.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack://employee-details/./src/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("089c1adb5b30f02e776f")
/******/ })();
/******/ 
/******/ }
;