/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Events = (function () {
  const events = {}

  function on(eventName, fn) {
    events[eventName] = events[eventName] || []
    events[eventName].push(fn)
  }

  function off(eventName, fn) {
    if (events[eventName]) {
      for (let i = 0; i < events[eventName].length; i++) {
        if (events[eventName][i] === fn) {
          events[eventName].splice(i, 1)
          break
        }
      }
    }
  }

  function emit(eventName, data) {
    if (events[eventName]) {
      events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }

  return {
    on,
    off,
    emit,
    get list() {
      return events
    },
  }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);

/* People.js

import Events from './events.js';

const People = (function() {
  let people = [];

  function addPeople(array) {
    array.forEach(person => people.push(person));
    Events.emit('peopleChanged', people);
  }

  return {addPeople};
})();

export default People;
*/

/* Stats.js
import Events from './events.js';

const Stats = (function() {
  let stats = {};

  Events.on('peopleChanged', setPeople);

  function setPeople(people) {
    stats.people = people.length;
    console.log(stats);
    console.log(stats.people);
  }
})();

export default Stats;
*/

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELGlFQUFlLE1BQU07O0FBRXJCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZXZlbnRzID0ge31cblxuICBmdW5jdGlvbiBvbihldmVudE5hbWUsIGZuKSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXVxuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pXG4gIH1cblxuICBmdW5jdGlvbiBvZmYoZXZlbnROYW1lLCBmbikge1xuICAgIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0gPT09IGZuKSB7XG4gICAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICBldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICBmbihkYXRhKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uLFxuICAgIG9mZixcbiAgICBlbWl0LFxuICAgIGdldCBsaXN0KCkge1xuICAgICAgcmV0dXJuIGV2ZW50c1xuICAgIH0sXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzXG5cbi8qIFBlb3BsZS5qc1xuXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuY29uc3QgUGVvcGxlID0gKGZ1bmN0aW9uKCkge1xuICBsZXQgcGVvcGxlID0gW107XG5cbiAgZnVuY3Rpb24gYWRkUGVvcGxlKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChwZXJzb24gPT4gcGVvcGxlLnB1c2gocGVyc29uKSk7XG4gICAgRXZlbnRzLmVtaXQoJ3Blb3BsZUNoYW5nZWQnLCBwZW9wbGUpO1xuICB9XG5cbiAgcmV0dXJuIHthZGRQZW9wbGV9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGVvcGxlO1xuKi9cblxuLyogU3RhdHMuanNcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuXG5jb25zdCBTdGF0cyA9IChmdW5jdGlvbigpIHtcbiAgbGV0IHN0YXRzID0ge307XG5cbiAgRXZlbnRzLm9uKCdwZW9wbGVDaGFuZ2VkJywgc2V0UGVvcGxlKTtcblxuICBmdW5jdGlvbiBzZXRQZW9wbGUocGVvcGxlKSB7XG4gICAgc3RhdHMucGVvcGxlID0gcGVvcGxlLmxlbmd0aDtcbiAgICBjb25zb2xlLmxvZyhzdGF0cyk7XG4gICAgY29uc29sZS5sb2coc3RhdHMucGVvcGxlKTtcbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9