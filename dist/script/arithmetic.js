(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arithmetic"] = factory();
	else
		root["arithmetic"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/arithmetic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/arithmetic.js":
/*!**********************************!*\
  !*** ./src/script/arithmetic.js ***!
  \**********************************/
/*! exports provided: Math */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Math", function() { return Math; });
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack */ "./src/script/stack.js");


class Math {
    constructor() {
        this.operand = new _stack__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.operator = new _stack__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.tempNum = '';
        this.tempSym = '';
    }
    /**
     * @description 递归表达式，优先计算括号中的内容并进行替换
     * @param {String}
     */
    matchInBrackets(expression) {
        const regInBrackets = /\([\+|\-|\*|\/|\.|\d]+?\)/g;
        let expInBrackets = expression.match(regInBrackets);
        if (expInBrackets) {
            expInBrackets.forEach(element => {
                const tempResualt = this.calculate(element.replace(/[\(|\)]/g, ''));
                expression = expression.replace(element, tempResualt);
            });
        }
        expInBrackets = expression.match(regInBrackets);
        return expInBrackets ? this.matchInBrackets(expression) : expression;
    }
    /**
     * @description 初步处理计算表达式，将优先级高的乘除运算和括号内的运算先计算出结果
     * @param {String}
     */
    calculate(expression) {
        // 先判断表达式中是否存在括号运算，如果有则递归计算出其中的值并替换表达式中的括号
        expression = this.matchInBrackets(expression);
        for (let i = expression.length - 1; 0 <= i; i--) {
            const numReg = /[\d|\.]/;
            let char = expression[i];
            if (numReg.test(char)) {
                this.tempNum = char + this.tempNum;
                if (0 == i) {
                    if (this.tempSym) {
                        this.calculateMultiOrDivis(this.tempSym);
                        this.tempSym = '';
                    }
                    if (this.tempNum) this.operand.push(this.tempNum);
                    break;
                }
            } else {
                if (0 == i) {
                    if (this.tempSym) {
                        this.calculateMultiOrDivis(this.tempSym);
                        this.tempSym = '';
                    }
                    if (this.tempNum) this.operand.push(this.tempNum);
                    this.operator.push(char);
                    break;
                }
                if (this.tempSym) {
                    this.calculateMultiOrDivis(this.tempSym);
                    this.tempSym = '';
                }
                let peekSym = this.operator.peek();
                const nextChar = expression[i - 1];
                const isSymbol = /[\+|\-|\*|\/]/;
                if (peekSym) {
                    if (this.tempNum) {
                        if (isSymbol.test(nextChar) && '-' == char) {
                            this.operand.push(char + this.tempNum);
                            char = '';
                        } else {
                            this.operand.push(this.tempNum);
                        }
                        this.tempNum = '';
                    }
                    switch (Math.priorityCompare(peekSym, char)) {
                        case 2:
                            this.tempSym = this.operator.pop();
                            break;
                        case 1:
                            this.calculateMultiOrDivis(this.operator.pop());
                            break;
                        default:
                            break;
                    }
                } else if (!peekSym && this.tempNum) {
                    if (isSymbol.test(nextChar) && '-' == char) {
                        this.operand.push(char + this.tempNum);
                        char = '';
                    } else {
                        this.operand.push(this.tempNum);
                    }
                    this.tempNum = '';
                }
                if (char) this.operator.push(char);
            }
        }
        return this.calculateReversePoland();
    }
    /**
     * @description 计算最终的逆波兰表达式
     */
    calculateReversePoland() {
        let resualt = 0;
        while (0 < this.operand.getLength()) {
            if (this.operator.getLength() == this.operand.getLength()) {
                const symL = resualt;
                const symR = this.operand.pop();
                const cacheSym = this.operator.pop();
                resualt = '+' == cacheSym ? Math.addition(symL, symR) : Math.subtraction(symL, symR);
            } else {
                if (1 == this.operand.getLength()) {
                    resualt = parseFloat(this.operand.pop());
                    break;
                }
                const symL = this.operand.pop();
                const symR = this.operand.pop();
                const cacheSym = this.operator.pop();
                resualt = Math.selectCalculationRule(symL, symR, cacheSym);
            }
            this.operand.push(resualt);
        }
        this.operand.reset();
        this.operator.reset();
        this.tempNum = '';
        this.tempSym = '';
        return resualt;
    }
    /**
     * @description 只计算乘法或者除法
     * @param {String} sym
     */
    calculateMultiOrDivis(sym) {
        const symL = this.operand.pop();
        const symR = this.operand.pop();
        this.operand.push(Math.selectCalculationRule(symL, symR, sym));
        return undefined;
    }
    /**
     * @description 判断两个数字间的运算法则
     * @param {String || Number} symL
     * @param {String || Number} symR
     * @param {String} sym
     */
    static selectCalculationRule(symL, symR, sym) {
        switch (sym) {
            case '*':
                return Math.multiplication(symL, symR);
            case '/':
                return Math.division(symL, symR);
            case '+':
                return Math.addition(symL, symR);
            default:
                return Math.subtraction(symL, symR);
        }
    }
    /**
     * @description 加法
     * @param {String || Number}
     */
    static addition(...num) {
        const symL = parseFloat(num[0]);
        const symR = parseFloat(num[1]);
        return symL + symR;
    }
    /**
     * @description 除法
     * @param {String || Number}
     */
    static division(...num) {
        const symL = parseFloat(num[0]);
        const symR = parseFloat(num[1]);
        return symL / symR;
    }
    /**
     * @description 乘法
     * @param {String || Number}
     */
    static multiplication(...num) {
        const symL = parseFloat(num[0]);
        const symR = parseFloat(num[1]);
        return symL * symR;
    }
    /**
     * @description 减法
     * @param {String || Number}
     */
    static subtraction(...num) {
        const symL = parseFloat(num[0]);
        const symR = parseFloat(num[1]);
        return symL - symR;
    }
    /**
     * @description 判断两个运算符的优先级
     * @param {String}
     */
    static priorityCompare(symA, symB) {
        const high = /[\*\/]/;
        if (high.test(symA) && !high.test(symB)) {
            return 2;
        } else if (high.test(symA) && high.test(symB)) {
            return 1;
        } else {
            return 0;
        }
    }
};


/***/ }),

/***/ "./src/script/stack.js":
/*!*****************************!*\
  !*** ./src/script/stack.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (class {
    constructor() {
        this.stack = [];
    }

    getLength() {
        return this.stack.length;
    }

    peek() {
        const len = this.getLength();
        return len ? this.stack[len - 1] : undefined;
    }

    pop() {
        return this.stack.pop();
    }

    push(num) {
        this.stack.push(num);
        return undefined;
    }

    reset() {
        this.stack = [];
        return undefined;
    }
});;


/***/ })

/******/ });
});
//# sourceMappingURL=arithmetic.js.map