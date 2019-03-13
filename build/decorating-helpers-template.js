"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decoratingHelpersTemplate = void 0;
const decoratingHelpersTemplate = `
var decorate = function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var metadata = function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var param = function (paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
};
`;
exports.decoratingHelpersTemplate = decoratingHelpersTemplate;