"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function testable(target) {
    target.isTestable = true;
}

var MyTestableClass = testable(_class = function MyTestableClass() {
    (0, _classCallCheck3.default)(this, MyTestableClass);
}) || _class;

console.log(MyTestableClass.isTestable);
