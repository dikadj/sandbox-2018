function ordinalize(num) {
	const nums = num.toString().split("")
	const numStr = nums[nums.length - 1]
	const numsStr = nums.join("")
	const suffix = {
		1: "st",
		2: "nd",
		3: "rd",
		other: "th",
	}
	if (parseInt(numStr) === 1) {
		return numsStr + suffix[1]
	}
	if (parseInt(numStr) === 2) {
		return numsStr + suffix[2]
	}
	if (parseInt(numStr) === 3) {
		return numsStr + suffix[3]
	}
	return numsStr + suffix.other
}

console.log(ordinalize(61))
console.log(ordinalize(5642))
console.log(ordinalize(293))
console.log(ordinalize(14999))
