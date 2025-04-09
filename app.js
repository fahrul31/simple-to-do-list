/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/repositories/todoList.js":
/*!**************************************!*\
  !*** ./src/repositories/todoList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _services_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/task.js */ \"./src/services/task.js\");\n\r\n\r\n// TodoList class\r\nclass TodoList {\r\n    // Task collection\r\n    tasks = [];\r\n    constructor() {\r\n        // DOM elements\r\n        this.taskInput = document.getElementById('taskInput');\r\n        this.addButton = document.getElementById('addButton');\r\n        this.taskGrid = document.getElementById('taskGrid');\r\n        this.emptyMessage = document.getElementById('emptyMessage');\r\n\r\n        // Initialize\r\n        this.loadTasks();\r\n        this.setupEventListeners();\r\n    }\r\n\r\n    // Load tasks from localStorage\r\n    loadTasks() {\r\n        const savedTasks = localStorage.getItem('tasks');\r\n        if (savedTasks) {\r\n            const taskData = JSON.parse(savedTasks);\r\n            this.tasks = taskData.map(data => new _services_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data.id, data.text, data.completed));\r\n            this.renderTasks();\r\n        }\r\n    }\r\n\r\n    // Save tasks to localStorage\r\n    saveTasks() {\r\n        localStorage.setItem('tasks', JSON.stringify(this.tasks));\r\n    }\r\n\r\n    // Set up event listeners\r\n    setupEventListeners() {\r\n        this.addButton.addEventListener('click', () => this.addTask());\r\n\r\n        this.taskInput.addEventListener('keypress', (e) => {\r\n            if (e.key === 'Enter') {\r\n                this.addTask();\r\n            }\r\n        });\r\n\r\n        this.taskGrid.addEventListener('click', (e) => {\r\n            const button = e.target.closest('button');\r\n            if (!button) return;\r\n\r\n            const id = button.getAttribute('data-id');\r\n\r\n            if (button.classList.contains('toggle-button')) {\r\n                this.toggleTask(id);\r\n            } else if (button.classList.contains('delete-button')) {\r\n                this.deleteTask(id);\r\n            }\r\n        });\r\n    }\r\n\r\n    // Render all tasks\r\n    renderTasks() {\r\n        this.taskGrid.innerHTML = '';\r\n\r\n        if (this.tasks.length === 0) {\r\n            this.emptyMessage.style.display = 'block';\r\n        } else {\r\n            this.emptyMessage.style.display = 'none';\r\n\r\n            this.tasks.forEach(task => {\r\n                const taskElement = task.createElement();\r\n                this.taskGrid.appendChild(taskElement);\r\n            });\r\n        }\r\n    }\r\n\r\n    // Add a new task\r\n    addTask() {\r\n        const text = this.taskInput.value.trim();\r\n        if (text !== '') {\r\n            const newTask = new _services_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Date.now().toString(), text);\r\n            this.tasks.push(newTask);\r\n            this.saveTasks();\r\n            this.renderTasks();\r\n\r\n            this.taskInput.value = '';\r\n        }\r\n    }\r\n\r\n    // Toggle task completion status\r\n    toggleTask(id) {\r\n        const task = this.tasks.find(task => task.id === id);\r\n        if (task) {\r\n            task.toggle();\r\n            this.saveTasks();\r\n            this.renderTasks();\r\n        }\r\n    }\r\n\r\n    // Delete a task\r\n    deleteTask(id) {\r\n        this.tasks = this.tasks.filter(task => task.id !== id);\r\n        this.saveTasks();\r\n        this.renderTasks();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/repositories/todoList.js?");

/***/ }),

/***/ "./src/services/task.js":
/*!******************************!*\
  !*** ./src/services/task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n// Task class\r\nclass Task {\r\n    id;\r\n    text;\r\n    completed;\r\n    constructor(id, text, completed = false) {\r\n        this.id = id;\r\n        this.text = text;\r\n        this.completed = completed;\r\n    }\r\n\r\n    toggle() {\r\n        this.completed = !this.completed;\r\n    }\r\n\r\n    createElement() {\r\n        const taskElement = document.createElement('div');\r\n        taskElement.className = 'bg-white border rounded-lg shadow-sm p-4 flex flex-col';\r\n\r\n        const completedClass = this.completed ? 'line-through text-gray-400' : 'text-gray-700';\r\n\r\n        taskElement.innerHTML = `\r\n                    <div class=\"flex-1 mb-3\">\r\n                        <p class=\"${completedClass} text-lg break-words\">${this.text}</p>\r\n                    </div>\r\n                    <div class=\"flex justify-between mt-auto\">\r\n                        <button class=\"toggle-button ${this.completed ? 'bg-green-500' : 'bg-gray-400'} text-white px-3 py-1 rounded-lg text-sm\" data-id=\"${this.id}\">\r\n                            ${this.completed ? 'Tugas Selesai' : 'Tandai Sebagai Selesai'}\r\n                        </button>\r\n                        <button class=\"delete-button bg-red-100 text-red-500 hover:bg-red-200 px-3 py-1 rounded-lg text-sm\" data-id=\"${this.id}\">\r\n                            Delete\r\n                        </button>\r\n                    </div>\r\n                `;\r\n\r\n        return taskElement;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/services/task.js?");

/***/ }),

/***/ "./src/utils/app.js":
/*!**************************!*\
  !*** ./src/utils/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/utils/style.css\");\n/* harmony import */ var _repositories_todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/todoList.js */ \"./src/repositories/todoList.js\");\n\r\n\r\n(() => {\r\n    const todoList = new _repositories_todoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n})();\n\n//# sourceURL=webpack:///./src/utils/app.js?");

/***/ }),

/***/ "./src/utils/style.css":
/*!*****************************!*\
  !*** ./src/utils/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/utils/style.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/utils/app.js");
/******/ 	
/******/ })()
;