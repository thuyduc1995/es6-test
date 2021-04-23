// const removeDuplicatedChars = (string) => {
//   const hash = {}
//   let result = ''
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i]
//     if (!hash[char]) {
//       hash[char] = 1
//     } else {
//       hash[char] = ++hash[char]
//     }
//   }
//
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i]
//     if (hash[char] === 1) {
//       result += char
//     }
//   }
//   return result
// }
//
//
// // const duc = removeDuplicatedChars('aaabcdb')
//
//
// function duc() {
//   console.log('arguments', arguments.length)
// }
//
//
// function compose(...args) {
//   const funcs = Array.prototype.slice.apply(arguments, [0]).reverse()
//   const [first, ...restFuncs] = funcs
//   return (params) => restFuncs.reduce((value, f) => f(value), first(params))
// }
//
// const add5 = (num) => num + 5
//
// const mul3 = num => num * 3
//
// const sub10 = num => num - 10
//
// // const result = compose(add5, sub10, mul3)(0)
//
// // console.log('result', result)
//
// const debounce = (func, wait) => {
//   let timeout
//   return function() {
//     const context = this
//     const args = arguments
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.call(context, ...arguments), wait)
//   }
// }
//
// function funcD(ohoho) {
//   console.log('hehehehe', this)
// }
//
//
// function throttle (callback, limit) {
//   var waiting = false;
//   return function () {
//     if (!waiting) {
//       callback.apply(this, arguments);
//       waiting = true;
//       setTimeout(function () {
//         waiting = false;
//       }, limit);
//     }
//   }
// }
//
//
// const debounceDuc = debounce(funcD, 1000)
//
// const a = {
//   de: debounceDuc,
//   a: 1
// }
// // a.de(1222)
//
// const flatten = (params) => {
//   if (!Array.isArray(params)) return params
//   return params.reduce((acc, element) => {
//     return acc.concat(flatten(element))
//   }, [])
// }
//
//
// // console.log('a', flatten([1, 2, [3, 4, [5]], [6], [[[7]]], 8]))
//
//
// function xflatten (limit) {
//   const context = this
//   return limit ? context.reduce(function(acc, element) {
//     return acc.concat(Array.isArray(element) ? xflatten.call(element, limit - 1) : element)
//   }, []) : Array.prototype.slice.call(this);
// }
//
// function flatDuc() {
//   var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
//
//   return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
//     if (Array.isArray(cur)) {
//       acc.push.apply(acc, flatDuc.call(cur, depth - 1));
//     } else {
//       acc.push(cur);
//     }
//
//     return acc;
//   }, []) : Array.prototype.slice.call(this);
// }
//
// Array.prototype.flatDuc = flatDuc
//
// console.log('a', [1, 2, [3, 4, [5]], [6], [[[7]]], 8].flatDuc(2))

export const a = { duc: 1 }