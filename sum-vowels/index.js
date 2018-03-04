function sumVowels(phrase) {
	vows = ["a", "i", "u", "e", "o"]
	vowsIn = []
	for (var i = 0; i < phrase.length; i++) {
		if (vows.includes(phrase[i])) {
			vowsIn.push(phrase[i])
		}
	}
	return vowsIn.length
}

console.log(sumVowels("qwertyasdfaiou"))
