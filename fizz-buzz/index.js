function fizzBuzz(count) {
	var container = []
	for (var i = 1; i <= count; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			container.push("FizzBuzz")
		} else if (i % 3 === 0) {
			container.push("Fizz")
		} else if (i % 5 === 0) {
			container.push("Buzz")
		} else {
			container.push(i)
		}
	}
	return container
}

for (var i = 0; i < fizzBuzz(100).length; i++) {
	console.log(fizzBuzz(100)[i])
}
