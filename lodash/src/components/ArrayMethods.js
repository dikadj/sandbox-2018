import React from "react"
import _ from "lodash"

console.log(
	"chunk",
	_.chunk(
		[1, 2, 3, 4, 5], // source array
		2, // [size]
	),
)
// [[1, 2], [3, 4], [5]]

console.log(
	"compact",

	// `removing` these kind of types
	// =================================
	_.compact([false, null, 0, "", undefined, NaN]),

	// `pass` through these kind of types
	// =================================
	// _.compact([true, {}, [], "0", "my str"]),
)
// []

console.log(
	"concat",
	_.concat(
		// source array
		// =============
		1,
		// [1], // same thing

		// [concat value(s)]
		// ================
		[2], [[3]], [[[4]]],
		// [2, [[3]], [[[4]]]], // same thing
	),
)
// [1, 2, [3], [[4]]] // only 1 level deep

console.log(
	"difference", // difference(−) of value(s)
	_.difference(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
	),
)
// [56, 78]

console.log(
	"differenceBy", // difference(−) of value(s)
	_.differenceBy(
		[1.2, 3.4, 5.6, 7.8],
		[3.4, 1.2, 9.10],
		[3.4, 1.0, 3.4], // [source array(s)]
		Math.floor, // [iteratee]
	),
)
// [5.6, 7.8]

console.log(
	"differenceWith", // difference(−) of value(s)
	_.differenceWith(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
		_.isEqual, // [comparator]
	),
)
// [56, 78]

console.log(
	"intersection", // intersection(∩) of value(s)
	_.intersection(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
	),
)
// [34]

console.log(
	"intersectionBy", // intersection(∩) of value(s)
	_.intersectionBy(
		[1.2, 3.4, 5.6, 7.8],
		[3.4, 1.2, 9.10],
		[3.4, 1.0, 3.4], // [source array(s)]
		Math.floor, // [iteratee]
	),
)
// [1.2, 3.4]

console.log(
	"intersectionWith", // intersection(∩) of value(s)
	_.intersectionWith(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
		_.isEqual, // [comparator]
	),
)
// [56, 78]

console.log(
	"union", // union(∪) of value(s)
	_.union(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
	),
)
// [12, 34, 56, 78, 910, 10]

console.log(
	"unionBy", // union(∪) of value(s)
	_.unionBy(
		[1.2, 3.4, 5.6, 7.8],
		[3.4, 1.2, 9.10],
		[3.4, 1.0, 3.4], // [source array(s)]
		Math.floor, // [iteratee]
	),
)
// [1.2, 3.4, 5.6, 7.8, 9.1]

console.log(
	"unionWith", // union(∪) of value(s)
	_.unionWith(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
		_.isEqual, // [comparator]
	),
)
// [12, 34, 56, 78, 910, 10]

console.log(
	"xor", // symetric difference(△) of value(s)
	_.xor(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
	),
)
// [56, 78, 910, 10]

console.log(
	"xorBy", // xor(△) of value(s)
	_.xorBy(
		[1.2, 3.4, 5.6, 7.8],
		[3.4, 1.2, 9.10],
		[3.4, 1.0, 3.4], // [source array(s)]
		Math.floor, // [iteratee]
	),
)
// [5.6, 7.8, 9.1]

console.log(
	"xorWith", // xor(△) of value(s)
	_.xorWith(
		[12, 34, 56, 78],
		[34, 12, 910],
		[34, 10, 34], // [source array(s)]
		_.isEqual, // [comparator]
	),
)
// [56, 78, 910, 10]

console.log(
	"pull",
	_.pull(
		[12, 34, 56, 78], // source array
		34, 12, 910, // VALUE(S) to remove
	),
)
// [56, 78]

console.log(
	"pullAt",
	_.pullAt(
		[12, 34, 56, 78], // source array
		[1, 2], // ARRAY of index(es) to remove
	),
)
// [34, 56]

console.log(
	"pullAll",
	_.pullAll(
		[12, 34, 56, 78], // source array
		[34, 12, 910], // ARRAY of value(s) to remove
	),
)
// [56, 78]

console.log(
	"pullAllBy",
	_.pullAllBy(
		[1.2, 3.4, 5.6, 7.8], // source array
		[3.4, 1.2, 9.10], // ARRAY of value(s) to remove
		Math.floor, // iteratee
	),
)
// [5.6, 7.8]

console.log(
	"pullAllWith",
	_.pullAllWith(
		[1, 3, 5, 7], // source array
		[3, 1, 7], // ARRAY of value(s) to remove
		_.isEqual, // comparator
	),
)
// [5]

console.log(
	"take", // take FIRST value(s)
	_.take(
		[{ a: 1 }, 2, 3], // source array
		2, // how many? (default 1); if > arr.length = arr.length
	),
)
// [{ a: 1 }, 2]

console.log(
	"drop", // drop FIRST value(s)
	_.drop(
		[{ a: 1 }, 2, 3], // source array
		2, // how many? (default 1); if > arr.length = arr.length
	),
)
// [3]

console.log(
	"takeRight", // take LAST value(s)
	_.takeRight(
		[{ a: 1 }, 2, 3], // source array
		2, // how many? (default 1); if > arr.length = arr.length
	),
)
// [2, 3]

console.log(
	"dropRight", // drop LAST value(s)
	_.dropRight(
		[{ a: 1 }, 2, 3], // source array
		2, // how many? (default 1); if > arr.length = arr.length
	),
)
// [{ a: 1 }]

console.log(
	"takeWhile", // take FIRST value(s)
	_.takeWhile(
		[
			{ text: "hey", completed: false },
			{ text: "ho", completed: false },
			{ text: "let's go", completed: true },
			{ text: "let's go", completed: false },
		], // source array
		t => !t.completed,
		// ["completed", false], // same thing
		// { completed: false }, // same thing
	),
)
// object for ["hey", "ho"]

console.log(
	"dropWhile", // drop FIRST value(s)
	_.dropWhile(
		[
			{ text: "hey", completed: false },
			{ text: "ho", completed: false },
			{ text: "let's go", completed: true },
			{ text: "let's go", completed: false },
		], // source array
		t => !t.completed,
		// ["completed", false], // same thing
		// { completed: false }, // same thing
	),
)
// object for ["let's go", "let's go"]

console.log(
	"takeRightWhile", // drop FIRST value(s)
	_.takeRightWhile(
		[
			{ text: "hey", completed: false },
			{ text: "ho", completed: false },
			{ text: "let's go", completed: true },
			{ text: "let's go", completed: false },
		], // source array
		t => !t.completed,
		// ["completed", false], // same thing
		// { completed: false }, // same thing
	),
)
// object for ["let's go"]

console.log(
	"dropRightWhile", // drop LAST value(s)
	_.dropRightWhile(
		[
			{ text: "hey", completed: false },
			{ text: "ho", completed: false },
			{ text: "let's go", completed: true },
			{ text: "let's go", completed: false },
		], // source array
		t => !t.completed,
		// ["completed", false], // same thing
		// { completed: false }, // same thing
	),
)
// object for ["hey", "ho", "let's go"]

console.log(
	"fill",
	_.fill(
		["a", "b", "c", "d", "e", "f"], // source array (length used)
		"#", // filled value
		1, // [START index]
		4, // [end index CAP]
	),
)
// ["a", "#", "#", "#", "e", "f"]

console.log(
	"findIndex",
	_.findIndex(
		[
			{ text: "hey", completed: true },
			{ text: "ho", completed: true },
			{ text: "let's go", completed: false },
			{ text: "let's go", completed: false },
		], // source array
		t => !t.completed, // find from FIRST !completed index
		// ["completed", false], // find from FIRST !completed index
		// { text: "let's go" }, // find from FIRST "let's go"
	),
)
// 2

console.log(
	"findLastIndex",
	_.findLastIndex(
		[
			{ text: "hey", completed: true },
			{ text: "ho", completed: true },
			{ text: "let's go", completed: false },
			{ text: "let's go", completed: false },
		], // source array
		t => !t.completed, // find from LAST !completed index
		// ["completed", false], // find from LAST !completed index
		// { text: "let's go" }, // find from LAST "let's go"
	),
)
// 3

console.log(
	"flatten",
	_.flatten(["a", [2, 3, ["d"]], "e", [[6]], 7]),
)
// ["a", 2, 3, ["d"], "e", [6], 7] // only 'A LEVEL' deep

console.log(
	"flattenDeep",
	_.flattenDeep(["a", [2, 3, ["d", [[["e"]]]]], [[[6], 7]]]),
)
// ["a", 2, 3, "d", "e", 6, 7] // flatten all

console.log(
	"flattenDepth",
	_.flattenDepth(
		["a", [2, 3, ["d", [[["e"]]]]], [[[6], 7]]], // src arr
		2, // level depth
	),
)
// ["a", 2, 3, "d", [[["e"]]], [6], 7] // 2 LEVEL deep

console.log(
	"fromPairs", // to object
	_.fromPairs([["a", 1], ["b", 2], ["c", 3]]),
)
// { a: 1, b: 2, c: 3 }

console.log(
	"toPairs", // from object
	_.toPairs({ a: 1, b: 2, c: 3 }),
)
// [["a", 1], ["b", 2], ["c", 3]]

console.log(
	"first / head",
	_.first([{ a: 1 }, 2, 3]),
	// _.head([{ a: 1 }, 2, 3]), // same thing
)
// { a: 1 }

console.log(
	"last",
	_.last([{ a: 1 }, 2, 3]),
)
// 3

console.log(
	"initial",
	_.initial([{ a: 1 }, 2, 3]), // gets all array EXCEPT LAST
)
// [{ a: 1}, 2, 3]

console.log(
	"tail",
	_.tail([{ a: 1 }, 2, 3]), // gets all array EXCEPT FIRST
)
// [2, 3]

console.log(
	"indexOf",
	_.indexOf(
		["a", 2, 3, 2, 3, 2, 1], // source array
		2, // search value
		2, // start Index (index -> LAST)
	),
	// ["a", 2, 3, 2, 3, 2, 1].indexOf(2, 2), // same thing
)
// 3

console.log(
	"lastIndexOf",
	_.lastIndexOf(
		["a", 2, 3, 2, 3, 2, 1], // source array
		2, // search value
		6, // start Index (index -> FIRST)
	),
	// ["a", 2, 3, 2, 3, 2, 1].lastIndexOf(2, 2), // same thing
)
// 5

console.log(
	"sortedIndexOf", // similar to indexOf except it performed BINARY search on SORTED array
	_.sortedIndexOf( // return FIRST found value
		[10, 40, 20, 50, 50, 50], // source array
		// 40, // return -1 because it's 'out of order'
		50, // return 3 because it's 'in order'
	),
)
// 2

console.log(
	"sortedLastIndexOf", // similar to indexOf except it performed BINARY search on SORTED array
	_.sortedLastIndexOf( // return LAST found value
		[10, 40, 20, 50, 50, 50], // source array
		// 40, // return -1 because it's 'out of order'
		50, // return 5 because it's 'in order'
	),
)
// 2

console.log(
	"join",
	_.join(
		["a", 2, 3, 2],
		"*",
	),
	// ["a", 2, 3, 2].join("*"), // same thing
)
// "a*2*3*2"

console.log(
	"nth",
	_.nth(
		["a", 2, 3, "d", "x"], // source array
		2, // index from FIRST ==> return 3
		// -2, // index from LAST ==> return "d"
	),
)
// 3

console.log(
	"remove", // similar to filter except it's MUTATING array
	_.remove(
		[1, 2, 3, 4, 5],
		arr => arr % 2 !== 0, // remove even value
	),
)

console.log(
	"reverse", // similar to arr.reverse() except it's MUTATING array
	_.reverse([1, 2, 3, 4, 5]),
)
// [5, 4, 3, 2, 1]

console.log(
	"slice", // used instead of arr.slice() to ensure DENSE ARRAY are returned
	_.slice(
		[1, 2, 3, 4, 5], // source array
		2, // [start] (default 0)
		4, // [end cap] (default arr.length)
	),
)
// [3, 4]

console.log(
	"sortedIndex", // return index of value to be inserted as 'FIRST index of found value(s)'
	_.sortedIndex(
		[10, 15, 15, 15, 20, 40], // source array
		// 30, // return 5
		15, // return 1
	),
)
// 2

console.log(
	"sortedLastIndex", // return index of value to be inserted as 'LAST index of found value(s)'
	_.sortedLastIndex(
		[10, 15, 15, 15, 20, 40], // source array
		// 30, // return 5
		15, // return 4
	),
)
// 2

console.log(
	"sortedIndexBy", // return index of value to be inserted
	_.sortedIndexBy(
		[{ x: 1 }, { x: 2 }, { x: 2 }, { x: 4 }], // source array
		{ x: 2 }, // return 1
		obj => obj.x, // iteratee
	),
)
// 2

console.log(
	"sortedLastIndexBy", // return index of value to be inserted
	_.sortedLastIndexBy(
		[{ x: 1 }, { x: 2 }, { x: 2 }, { x: 4 }], // source array
		{ x: 2 }, // return 3
		obj => obj.x, // iteratee
	),
)
// 2

console.log(
	"uniq", // return duplicate-free array
	_.uniq([1, 0, 2, 7, 7, 4]),
)
// [1, 0, 2, 7, 4]

console.log(
	"sortedUniq", // return duplicate-free array
	_.sortedUniq([0, 1, 2, 4, 7, 7]), // sorted array
)
// [0, 1, 2, 4, 7]

console.log(
	"uniqBy", // return duplicate-free array
	_.uniqBy(
		[
			{ x: 1 },
			{ x: 0 },
			{ x: 2 },
			{ x: 7 },
			{ x: 7 },
			{ x: 4 },
		],
		obj => obj.x, // [iteratee]
	),
)
// object of [1, 0, 2, 7, 4]

console.log(
	"sortedUniqBy", // return duplicate-free array
	_.sortedUniqBy(
		[
			{ x: 0 },
			{ x: 1 },
			{ x: 2 },
			{ x: 4 },
			{ x: 7 },
			{ x: 7 },
		], // sorted array
		obj => obj.x, // [iteratee]
	),
)
// object of [0, 1, 2, 4, 7]

console.log(
	"uniqWith", // return duplicate-free array
	_.uniqWith(
		[
			{ x: 1 },
			{ x: 0 },
			{ x: 2 },
			{ x: 7 },
			{ x: 7 },
			{ x: 4 },
		],
		_.isEqual, // [comparator]
	),
)
// object of [1, 0, 2, 7, 4]

console.log(
	"zip", // as array
	_.zip(
		["a", "b", "c"],
		[1, 2, 3],
		// ...
	),
)
// [["a", 1], ["b", 2], ["c", 3]]

console.log(
	"zipObject", // as object
	_.zipObject(
		["a", "b", "c"],
		[1, 2, 3],
		// ...ignored
	),
)
// { a: 1, b: 2, c: 3 }

console.log(
	"zipObjectDeep", // as object
	_.zipObjectDeep(
		["a", "b[b1]", "c"],
		[1, 2, 3],
		// ...ignored
	),
)
// { a: 1, b: { b1: 2 }, c: 3 }

const ArrayMethods = () => <div />
export default ArrayMethods
