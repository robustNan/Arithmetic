!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.arithmetic=e():t.arithmetic=e()}(window,function(){return function(t){var e={};function r(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class s{constructor(){this.stack=[]}getLength(){return this.stack.length}peek(){const t=this.getLength();return t?this.stack[t-1]:void 0}pop(){return this.stack.pop()}push(t){this.stack.push(t)}reset(){this.stack=[]}}r.d(e,"default",function(){return i});class i{constructor(){this.operand=new s,this.operator=new s,this.tempNum="",this.tempSym=""}matchInBrackets(t){const e=/\([\+|\-|\*|\/|\.|\d]+?\)/g;let r=t.match(e);return r&&r.forEach(e=>{const r=this.calculate(e.replace(/[\(|\)]/g,""));t=t.replace(e,r)}),(r=t.match(e))?this.matchInBrackets(t):t}calculate(t){for(let e=(t=this.matchInBrackets(t)).length-1;0<=e;e--){const r=/[\d|\.]/;let s=t[e];if(r.test(s)){if(this.tempNum=s+this.tempNum,0==e){this.tempSym&&(this.calculateMultiOrDivis(this.tempSym),this.tempSym=""),this.tempNum&&this.operand.push(this.tempNum);break}}else{if(0==e){this.tempSym&&(this.calculateMultiOrDivis(this.tempSym),this.tempSym=""),this.tempNum&&this.operand.push(this.tempNum),this.operator.push(s);break}this.tempSym&&(this.calculateMultiOrDivis(this.tempSym),this.tempSym="");let r=this.operator.peek();const o=t[e-1],a=/[\+|\-|\*|\/]/;if(r)switch(this.tempNum&&(a.test(o)&&"-"==s?(this.operand.push(s+this.tempNum),s=""):this.operand.push(this.tempNum),this.tempNum=""),i.priorityCompare(r,s)){case 2:this.tempSym=this.operator.pop();break;case 1:this.calculateMultiOrDivis(this.operator.pop())}else!r&&this.tempNum&&(a.test(o)&&"-"==s?(this.operand.push(s+this.tempNum),s=""):this.operand.push(this.tempNum),this.tempNum="");s&&this.operator.push(s)}}return this.calculateReversePoland()}calculateReversePoland(){let t=0;for(;0<this.operand.getLength();){if(this.operator.getLength()==this.operand.getLength()){const e=t,r=this.operand.pop();t="+"==this.operator.pop()?i.addition(e,r):i.subtraction(e,r)}else{if(1==this.operand.getLength()){t=parseFloat(this.operand.pop());break}const e=this.operand.pop(),r=this.operand.pop(),s=this.operator.pop();t=i.selectCalculationRule(e,r,s)}this.operand.push(t)}return this.operand.reset(),this.operator.reset(),this.tempNum="",this.tempSym="",t}calculateMultiOrDivis(t){const e=this.operand.pop(),r=this.operand.pop();this.operand.push(i.selectCalculationRule(e,r,t))}static selectCalculationRule(t,e,r){switch(r){case"*":return i.multiplication(t,e);case"/":return i.division(t,e);case"+":return i.addition(t,e);default:return i.subtraction(t,e)}}static addition(...t){return parseFloat(t[0])+parseFloat(t[1])}static division(...t){return parseFloat(t[0])/parseFloat(t[1])}static multiplication(...t){return parseFloat(t[0])*parseFloat(t[1])}static subtraction(...t){return parseFloat(t[0])-parseFloat(t[1])}static priorityCompare(t,e){const r=/[\*\/]/;return r.test(t)&&!r.test(e)?2:r.test(t)&&r.test(e)?1:0}}}])});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcml0aG1ldGljL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9hcml0aG1ldGljL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyaXRobWV0aWMvLi9zcmMvc2NyaXB0L3N0YWNrLmpzIiwid2VicGFjazovL2FyaXRobWV0aWMvLi9zcmMvc2NyaXB0L2FyaXRobWV0aWMuanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwid2luZG93IiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlN0YWNrIiwiW29iamVjdCBPYmplY3RdIiwidGhpcyIsInN0YWNrIiwibGVuZ3RoIiwibGVuIiwiZ2V0TGVuZ3RoIiwidW5kZWZpbmVkIiwicG9wIiwibnVtIiwicHVzaCIsIl9fd2VicGFja19leHBvcnRzX18iLCJhcml0aG1ldGljX0FyaXRobWV0aWMiLCJvcGVyYW5kIiwib3BlcmF0b3IiLCJ0ZW1wTnVtIiwidGVtcFN5bSIsImV4cHJlc3Npb24iLCJyZWdJbkJyYWNrZXRzIiwiZXhwSW5CcmFja2V0cyIsIm1hdGNoIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0ZW1wUmVzdWFsdCIsImNhbGN1bGF0ZSIsInJlcGxhY2UiLCJtYXRjaEluQnJhY2tldHMiLCJudW1SZWciLCJjaGFyIiwidGVzdCIsImNhbGN1bGF0ZU11bHRpT3JEaXZpcyIsInBlZWtTeW0iLCJwZWVrIiwibmV4dENoYXIiLCJpc1N5bWJvbCIsInByaW9yaXR5Q29tcGFyZSIsImNhbGN1bGF0ZVJldmVyc2VQb2xhbmQiLCJyZXN1YWx0Iiwic3ltTCIsInN5bVIiLCJhZGRpdGlvbiIsInN1YnRyYWN0aW9uIiwicGFyc2VGbG9hdCIsImNhY2hlU3ltIiwic2VsZWN0Q2FsY3VsYXRpb25SdWxlIiwicmVzZXQiLCJzeW0iLCJtdWx0aXBsaWNhdGlvbiIsImRpdmlzaW9uIiwic3ltQSIsInN5bUIiLCJoaWdoIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxHQUNBLGlCQUFBQyxTQUFBLGlCQUFBQyxPQUNBQSxPQUFBRCxRQUFBRCxJQUNBLG1CQUFBRyxlQUFBQyxJQUNBRCxPQUFBLEdBQUFILEdBQ0EsaUJBQUFDLFFBQ0FBLFFBQUEsV0FBQUQsSUFFQUQsRUFBQSxXQUFBQyxJQVJBLENBU0NLLE9BQUEsV0FDRCxtQkNUQSxJQUFBQyxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFQLFFBR0EsSUFBQUMsRUFBQUksRUFBQUUsR0FBQSxDQUNBQyxFQUFBRCxFQUNBRSxHQUFBLEVBQ0FULFFBQUEsSUFVQSxPQU5BVSxFQUFBSCxHQUFBSSxLQUFBVixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBTSxHQUdBTCxFQUFBUSxHQUFBLEVBR0FSLEVBQUFELFFBMERBLE9BckRBTSxFQUFBTSxFQUFBRixFQUdBSixFQUFBTyxFQUFBUixFQUdBQyxFQUFBUSxFQUFBLFNBQUFkLEVBQUFlLEVBQUFDLEdBQ0FWLEVBQUFXLEVBQUFqQixFQUFBZSxJQUNBRyxPQUFBQyxlQUFBbkIsRUFBQWUsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1YsRUFBQWdCLEVBQUEsU0FBQXRCLEdBQ0Esb0JBQUF1QixlQUFBQyxhQUNBTixPQUFBQyxlQUFBbkIsRUFBQXVCLE9BQUFDLFlBQUEsQ0FBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFuQixFQUFBLGNBQWlEeUIsT0FBQSxLQVFqRG5CLEVBQUFvQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBbkIsRUFBQW1CLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQXhCLEVBQUFnQixFQUFBTyxHQUNBWCxPQUFBQyxlQUFBVSxFQUFBLFdBQXlDVCxZQUFBLEVBQUFLLFVBQ3pDLEVBQUFFLEdBQUEsaUJBQUFGLEVBQUEsUUFBQU0sS0FBQU4sRUFBQW5CLEVBQUFRLEVBQUFlLEVBQUFFLEVBQUEsU0FBQUEsR0FBZ0gsT0FBQU4sRUFBQU0sSUFBcUJDLEtBQUEsS0FBQUQsSUFDckksT0FBQUYsR0FJQXZCLEVBQUEyQixFQUFBLFNBQUFoQyxHQUNBLElBQUFlLEVBQUFmLEtBQUEyQixXQUNBLFdBQTJCLE9BQUEzQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFLLEVBQUFRLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVYsRUFBQVcsRUFBQSxTQUFBaUIsRUFBQUMsR0FBc0QsT0FBQWpCLE9BQUFrQixVQUFBQyxlQUFBMUIsS0FBQXVCLEVBQUFDLElBR3REN0IsRUFBQWdDLEVBQUEsR0FJQWhDLElBQUFpQyxFQUFBLHlDQ2xGZSxNQUFBQyxFQUNmQyxjQUNBQyxLQUFBQyxNQUFBLEdBR0FGLFlBQ0EsT0FBQUMsS0FBQUMsTUFBQUMsT0FHQUgsT0FDQSxNQUFBSSxFQUFBSCxLQUFBSSxZQUNBLE9BQUFELEVBQUFILEtBQUFDLE1BQUFFLEVBQUEsUUFBQUUsRUFHQU4sTUFDQSxPQUFBQyxLQUFBQyxNQUFBSyxNQUdBUCxLQUFBUSxHQUNBUCxLQUFBQyxNQUFBTyxLQUFBRCxHQUlBUixRQUNBQyxLQUFBQyxNQUFBLElDeEJBckMsRUFBQVEsRUFBQXFDLEVBQUEsNEJBQUFDLElBRWUsTUFBTUEsRUFDckJYLGNBQ0FDLEtBQUFXLFFBQUEsSUFBMkJiLEVBQzNCRSxLQUFBWSxTQUFBLElBQTRCZCxFQUM1QkUsS0FBQWEsUUFBQSxHQUNBYixLQUFBYyxRQUFBLEdBTUFmLGdCQUFBZ0IsR0FDQSxNQUFBQyxFQUFBLDZCQUNBLElBQUFDLEVBQUFGLEVBQUFHLE1BQUFGLEdBUUEsT0FQQUMsR0FDQUEsRUFBQUUsUUFBQUMsSUFDQSxNQUFBQyxFQUFBckIsS0FBQXNCLFVBQUFGLEVBQUFHLFFBQUEsZ0JBQ0FSLElBQUFRLFFBQUFILEVBQUFDLE1BR0FKLEVBQUFGLEVBQUFHLE1BQUFGLElBQ0FoQixLQUFBd0IsZ0JBQUFULEtBTUFoQixVQUFBZ0IsR0FHQSxRQUFBakQsR0FEQWlELEVBQUFmLEtBQUF3QixnQkFBQVQsSUFDQWIsT0FBQSxFQUEyQyxHQUFBcEMsRUFBUUEsSUFBQSxDQUNuRCxNQUFBMkQsRUFBQSxVQUNBLElBQUFDLEVBQUFYLEVBQUFqRCxHQUNBLEdBQUEyRCxFQUFBRSxLQUFBRCxJQUVBLEdBREExQixLQUFBYSxRQUFBYSxFQUFBMUIsS0FBQWEsUUFDQSxHQUFBL0MsRUFBQSxDQUNBa0MsS0FBQWMsVUFDQWQsS0FBQTRCLHNCQUFBNUIsS0FBQWMsU0FDQWQsS0FBQWMsUUFBQSxJQUVBZCxLQUFBYSxTQUFBYixLQUFBVyxRQUFBSCxLQUFBUixLQUFBYSxTQUNBLFdBRWEsQ0FDYixNQUFBL0MsRUFBQSxDQUNBa0MsS0FBQWMsVUFDQWQsS0FBQTRCLHNCQUFBNUIsS0FBQWMsU0FDQWQsS0FBQWMsUUFBQSxJQUVBZCxLQUFBYSxTQUFBYixLQUFBVyxRQUFBSCxLQUFBUixLQUFBYSxTQUNBYixLQUFBWSxTQUFBSixLQUFBa0IsR0FDQSxNQUVBMUIsS0FBQWMsVUFDQWQsS0FBQTRCLHNCQUFBNUIsS0FBQWMsU0FDQWQsS0FBQWMsUUFBQSxJQUVBLElBQUFlLEVBQUE3QixLQUFBWSxTQUFBa0IsT0FDQSxNQUFBQyxFQUFBaEIsRUFBQWpELEVBQUEsR0FDQWtFLEVBQUEsZ0JBQ0EsR0FBQUgsRUFVQSxPQVRBN0IsS0FBQWEsVUFDQW1CLEVBQUFMLEtBQUFJLElBQUEsS0FBQUwsR0FDQTFCLEtBQUFXLFFBQUFILEtBQUFrQixFQUFBMUIsS0FBQWEsU0FDQWEsRUFBQSxJQUVBMUIsS0FBQVcsUUFBQUgsS0FBQVIsS0FBQWEsU0FFQWIsS0FBQWEsUUFBQSxJQUU0QkgsRUFBVXVCLGdCQUFBSixFQUFBSCxJQUN0QyxPQUNBMUIsS0FBQWMsUUFBQWQsS0FBQVksU0FBQU4sTUFDQSxNQUNBLE9BQ0FOLEtBQUE0QixzQkFBQTVCLEtBQUFZLFNBQUFOLFlBS2lCdUIsR0FBQTdCLEtBQUFhLFVBQ2pCbUIsRUFBQUwsS0FBQUksSUFBQSxLQUFBTCxHQUNBMUIsS0FBQVcsUUFBQUgsS0FBQWtCLEVBQUExQixLQUFBYSxTQUNBYSxFQUFBLElBRUExQixLQUFBVyxRQUFBSCxLQUFBUixLQUFBYSxTQUVBYixLQUFBYSxRQUFBLElBRUFhLEdBQUExQixLQUFBWSxTQUFBSixLQUFBa0IsSUFHQSxPQUFBMUIsS0FBQWtDLHlCQUtBbkMseUJBQ0EsSUFBQW9DLEVBQUEsRUFDQSxPQUFBbkMsS0FBQVcsUUFBQVAsYUFBQSxDQUNBLEdBQUFKLEtBQUFZLFNBQUFSLGFBQUFKLEtBQUFXLFFBQUFQLFlBQUEsQ0FDQSxNQUFBZ0MsRUFBQUQsRUFDQUUsRUFBQXJDLEtBQUFXLFFBQUFMLE1BRUE2QixFQUFBLEtBREFuQyxLQUFBWSxTQUFBTixNQUM0Q0ksRUFBVTRCLFNBQUFGLEVBQUFDLEdBQXdCM0IsRUFBVTZCLFlBQUFILEVBQ3hGQyxPQUNhLENBQ2IsTUFBQXJDLEtBQUFXLFFBQUFQLFlBQUEsQ0FDQStCLEVBQUFLLFdBQUF4QyxLQUFBVyxRQUFBTCxPQUNBLE1BRUEsTUFBQThCLEVBQUFwQyxLQUFBVyxRQUFBTCxNQUNBK0IsRUFBQXJDLEtBQUFXLFFBQUFMLE1BQ0FtQyxFQUFBekMsS0FBQVksU0FBQU4sTUFDQTZCLEVBQTBCekIsRUFBVWdDLHNCQUFBTixFQUFBQyxFQUFBSSxHQUVwQ3pDLEtBQUFXLFFBQUFILEtBQUEyQixHQU1BLE9BSkFuQyxLQUFBVyxRQUFBZ0MsUUFDQTNDLEtBQUFZLFNBQUErQixRQUNBM0MsS0FBQWEsUUFBQSxHQUNBYixLQUFBYyxRQUFBLEdBQ0FxQixFQU1BcEMsc0JBQUE2QyxHQUNBLE1BQUFSLEVBQUFwQyxLQUFBVyxRQUFBTCxNQUNBK0IsRUFBQXJDLEtBQUFXLFFBQUFMLE1BQ0FOLEtBQUFXLFFBQUFILEtBQTBCRSxFQUFVZ0Msc0JBQUFOLEVBQUFDLEVBQUFPLElBU3BDN0MsNkJBQUFxQyxFQUFBQyxFQUFBTyxHQUNBLE9BQUFBLEdBQ0EsUUFDQSxPQUF1QmxDLEVBQVVtQyxlQUFBVCxFQUFBQyxHQUNqQyxRQUNBLE9BQXVCM0IsRUFBVW9DLFNBQUFWLEVBQUFDLEdBQ2pDLFFBQ0EsT0FBdUIzQixFQUFVNEIsU0FBQUYsRUFBQUMsR0FDakMsUUFDQSxPQUF1QjNCLEVBQVU2QixZQUFBSCxFQUFBQyxJQU9qQ3RDLG1CQUFBUSxHQUdBLE9BRkFpQyxXQUFBakMsRUFBQSxJQUNBaUMsV0FBQWpDLEVBQUEsSUFPQVIsbUJBQUFRLEdBR0EsT0FGQWlDLFdBQUFqQyxFQUFBLElBQ0FpQyxXQUFBakMsRUFBQSxJQU9BUix5QkFBQVEsR0FHQSxPQUZBaUMsV0FBQWpDLEVBQUEsSUFDQWlDLFdBQUFqQyxFQUFBLElBT0FSLHNCQUFBUSxHQUdBLE9BRkFpQyxXQUFBakMsRUFBQSxJQUNBaUMsV0FBQWpDLEVBQUEsSUFPQVIsdUJBQUFnRCxFQUFBQyxHQUNBLE1BQUFDLEVBQUEsU0FDQSxPQUFBQSxFQUFBdEIsS0FBQW9CLEtBQUFFLEVBQUF0QixLQUFBcUIsR0FDQSxFQUNTQyxFQUFBdEIsS0FBQW9CLElBQUFFLEVBQUF0QixLQUFBcUIsR0FDVCxFQUVBIiwiZmlsZSI6Ii4vc2NyaXB0L2FyaXRobWV0aWMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXJpdGhtZXRpY1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcml0aG1ldGljXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFjayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YWNrID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrKCkge1xyXG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgcmV0dXJuIGxlbiA/IHRoaXMuc3RhY2tbbGVuIC0gMV0gOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2gobnVtKSB7XHJcbiAgICAgICAgdGhpcy5zdGFjay5wdXNoKG51bSk7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLnN0YWNrID0gW107XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9zdGFjayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcml0aG1ldGljIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub3BlcmFuZCA9IG5ldyBTdGFjaygpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBuZXcgU3RhY2soKTtcclxuICAgICAgICB0aGlzLnRlbXBOdW0gPSAnJztcclxuICAgICAgICB0aGlzLnRlbXBTeW0gPSAnJztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOmAkuW9kuihqOi+vuW8j++8jOS8mOWFiOiuoeeul+aLrOWPt+S4reeahOWGheWuueW5tui/m+ihjOabv+aNolxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIG1hdGNoSW5CcmFja2V0cyhleHByZXNzaW9uKSB7XHJcbiAgICAgICAgY29uc3QgcmVnSW5CcmFja2V0cyA9IC9cXChbXFwrfFxcLXxcXCp8XFwvfFxcLnxcXGRdKz9cXCkvZztcclxuICAgICAgICBsZXQgZXhwSW5CcmFja2V0cyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnSW5CcmFja2V0cyk7XHJcbiAgICAgICAgaWYgKGV4cEluQnJhY2tldHMpIHtcclxuICAgICAgICAgICAgZXhwSW5CcmFja2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFJlc3VhbHQgPSB0aGlzLmNhbGN1bGF0ZShlbGVtZW50LnJlcGxhY2UoL1tcXCh8XFwpXS9nLCAnJykpO1xyXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZShlbGVtZW50LCB0ZW1wUmVzdWFsdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBJbkJyYWNrZXRzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdJbkJyYWNrZXRzKTtcclxuICAgICAgICByZXR1cm4gZXhwSW5CcmFja2V0cyA/IHRoaXMubWF0Y2hJbkJyYWNrZXRzKGV4cHJlc3Npb24pIDogZXhwcmVzc2lvbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWIneatpeWkhOeQhuiuoeeul+ihqOi+vuW8j++8jOWwhuS8mOWFiOe6p+mrmOeahOS5mOmZpOi/kOeul+WSjOaLrOWPt+WGheeahOi/kOeul+WFiOiuoeeul+WHuue7k+aenFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGNhbGN1bGF0ZShleHByZXNzaW9uKSB7XHJcbiAgICAgICAgLy8g5YWI5Yik5pat6KGo6L6+5byP5Lit5piv5ZCm5a2Y5Zyo5ous5Y+36L+Q566X77yM5aaC5p6c5pyJ5YiZ6YCS5b2S6K6h566X5Ye65YW25Lit55qE5YC85bm25pu/5o2i6KGo6L6+5byP5Lit55qE5ous5Y+3XHJcbiAgICAgICAgZXhwcmVzc2lvbiA9IHRoaXMubWF0Y2hJbkJyYWNrZXRzKGV4cHJlc3Npb24pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBleHByZXNzaW9uLmxlbmd0aCAtIDE7IDAgPD0gaTsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bVJlZyA9IC9bXFxkfFxcLl0vO1xyXG4gICAgICAgICAgICBsZXQgY2hhciA9IGV4cHJlc3Npb25baV07XHJcbiAgICAgICAgICAgIGlmIChudW1SZWcudGVzdChjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wTnVtID0gY2hhciArIHRoaXMudGVtcE51bTtcclxuICAgICAgICAgICAgICAgIGlmICgwID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZW1wU3ltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTXVsdGlPckRpdmlzKHRoaXMudGVtcFN5bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcFN5bSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZW1wTnVtKSB0aGlzLm9wZXJhbmQucHVzaCh0aGlzLnRlbXBOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBTeW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVNdWx0aU9yRGl2aXModGhpcy50ZW1wU3ltKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wU3ltID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBOdW0pIHRoaXMub3BlcmFuZC5wdXNoKHRoaXMudGVtcE51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRvci5wdXNoKGNoYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGVtcFN5bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTXVsdGlPckRpdmlzKHRoaXMudGVtcFN5bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wU3ltID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcGVla1N5bSA9IHRoaXMub3BlcmF0b3IucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dENoYXIgPSBleHByZXNzaW9uW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU3ltYm9sID0gL1tcXCt8XFwtfFxcKnxcXC9dLztcclxuICAgICAgICAgICAgICAgIGlmIChwZWVrU3ltKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGVtcE51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTeW1ib2wudGVzdChuZXh0Q2hhcikgJiYgJy0nID09IGNoYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlcmFuZC5wdXNoKGNoYXIgKyB0aGlzLnRlbXBOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVyYW5kLnB1c2godGhpcy50ZW1wTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBOdW0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChBcml0aG1ldGljLnByaW9yaXR5Q29tcGFyZShwZWVrU3ltLCBjaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBTeW0gPSB0aGlzLm9wZXJhdG9yLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTXVsdGlPckRpdmlzKHRoaXMub3BlcmF0b3IucG9wKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFwZWVrU3ltICYmIHRoaXMudGVtcE51bSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N5bWJvbC50ZXN0KG5leHRDaGFyKSAmJiAnLScgPT0gY2hhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZXJhbmQucHVzaChjaGFyICsgdGhpcy50ZW1wTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlcmFuZC5wdXNoKHRoaXMudGVtcE51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcE51bSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYXIpIHRoaXMub3BlcmF0b3IucHVzaChjaGFyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVSZXZlcnNlUG9sYW5kKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDorqHnrpfmnIDnu4jnmoTpgIbms6LlhbDooajovr7lvI9cclxuICAgICAqL1xyXG4gICAgY2FsY3VsYXRlUmV2ZXJzZVBvbGFuZCgpIHtcclxuICAgICAgICBsZXQgcmVzdWFsdCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKDAgPCB0aGlzLm9wZXJhbmQuZ2V0TGVuZ3RoKCkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3BlcmF0b3IuZ2V0TGVuZ3RoKCkgPT0gdGhpcy5vcGVyYW5kLmdldExlbmd0aCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1MID0gcmVzdWFsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN5bVIgPSB0aGlzLm9wZXJhbmQucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZVN5bSA9IHRoaXMub3BlcmF0b3IucG9wKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1YWx0ID0gJysnID09IGNhY2hlU3ltID8gQXJpdGhtZXRpYy5hZGRpdGlvbihzeW1MLCBzeW1SKSA6IEFyaXRobWV0aWMuc3VidHJhY3Rpb24oc3ltTCxcclxuICAgICAgICAgICAgICAgICAgICBzeW1SKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgxID09IHRoaXMub3BlcmFuZC5nZXRMZW5ndGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VhbHQgPSBwYXJzZUZsb2F0KHRoaXMub3BlcmFuZC5wb3AoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzeW1MID0gdGhpcy5vcGVyYW5kLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltUiA9IHRoaXMub3BlcmFuZC5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlU3ltID0gdGhpcy5vcGVyYXRvci5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VhbHQgPSBBcml0aG1ldGljLnNlbGVjdENhbGN1bGF0aW9uUnVsZShzeW1MLCBzeW1SLCBjYWNoZVN5bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vcGVyYW5kLnB1c2gocmVzdWFsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3BlcmFuZC5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnRlbXBOdW0gPSAnJztcclxuICAgICAgICB0aGlzLnRlbXBTeW0gPSAnJztcclxuICAgICAgICByZXR1cm4gcmVzdWFsdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWPquiuoeeul+S5mOazleaIluiAhemZpOazlVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN5bVxyXG4gICAgICovXHJcbiAgICBjYWxjdWxhdGVNdWx0aU9yRGl2aXMoc3ltKSB7XHJcbiAgICAgICAgY29uc3Qgc3ltTCA9IHRoaXMub3BlcmFuZC5wb3AoKTtcclxuICAgICAgICBjb25zdCBzeW1SID0gdGhpcy5vcGVyYW5kLnBvcCgpO1xyXG4gICAgICAgIHRoaXMub3BlcmFuZC5wdXNoKEFyaXRobWV0aWMuc2VsZWN0Q2FsY3VsYXRpb25SdWxlKHN5bUwsIHN5bVIsIHN5bSkpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiDliKTmlq3kuKTkuKrmlbDlrZfpl7TnmoTov5Dnrpfms5XliJlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nIHx8IE51bWJlcn0gc3ltTFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmcgfHwgTnVtYmVyfSBzeW1SXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3ltXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZWxlY3RDYWxjdWxhdGlvblJ1bGUoc3ltTCwgc3ltUiwgc3ltKSB7XHJcbiAgICAgICAgc3dpdGNoIChzeW0pIHtcclxuICAgICAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJpdGhtZXRpYy5tdWx0aXBsaWNhdGlvbihzeW1MLCBzeW1SKTtcclxuICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJpdGhtZXRpYy5kaXZpc2lvbihzeW1MLCBzeW1SKTtcclxuICAgICAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJpdGhtZXRpYy5hZGRpdGlvbihzeW1MLCBzeW1SKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBBcml0aG1ldGljLnN1YnRyYWN0aW9uKHN5bUwsIHN5bVIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWKoOazlVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmcgfHwgTnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkaXRpb24oLi4ubnVtKSB7XHJcbiAgICAgICAgY29uc3Qgc3ltTCA9IHBhcnNlRmxvYXQobnVtWzBdKTtcclxuICAgICAgICBjb25zdCBzeW1SID0gcGFyc2VGbG9hdChudW1bMV0pO1xyXG4gICAgICAgIHJldHVybiBzeW1MICsgc3ltUjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOmZpOazlVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmcgfHwgTnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGl2aXNpb24oLi4ubnVtKSB7XHJcbiAgICAgICAgY29uc3Qgc3ltTCA9IHBhcnNlRmxvYXQobnVtWzBdKTtcclxuICAgICAgICBjb25zdCBzeW1SID0gcGFyc2VGbG9hdChudW1bMV0pO1xyXG4gICAgICAgIHJldHVybiBzeW1MIC8gc3ltUjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOS5mOazlVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmcgfHwgTnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbXVsdGlwbGljYXRpb24oLi4ubnVtKSB7XHJcbiAgICAgICAgY29uc3Qgc3ltTCA9IHBhcnNlRmxvYXQobnVtWzBdKTtcclxuICAgICAgICBjb25zdCBzeW1SID0gcGFyc2VGbG9hdChudW1bMV0pO1xyXG4gICAgICAgIHJldHVybiBzeW1MICogc3ltUjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWHj+azlVxyXG4gICAgICogQHBhcmFtIHtTdHJpbmcgfHwgTnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3VidHJhY3Rpb24oLi4ubnVtKSB7XHJcbiAgICAgICAgY29uc3Qgc3ltTCA9IHBhcnNlRmxvYXQobnVtWzBdKTtcclxuICAgICAgICBjb25zdCBzeW1SID0gcGFyc2VGbG9hdChudW1bMV0pO1xyXG4gICAgICAgIHJldHVybiBzeW1MIC0gc3ltUjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIOWIpOaWreS4pOS4qui/kOeul+espueahOS8mOWFiOe6p1xyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwcmlvcml0eUNvbXBhcmUoc3ltQSwgc3ltQikge1xyXG4gICAgICAgIGNvbnN0IGhpZ2ggPSAvW1xcKlxcL10vO1xyXG4gICAgICAgIGlmIChoaWdoLnRlc3Qoc3ltQSkgJiYgIWhpZ2gudGVzdChzeW1CKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9IGVsc2UgaWYgKGhpZ2gudGVzdChzeW1BKSAmJiBoaWdoLnRlc3Qoc3ltQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=