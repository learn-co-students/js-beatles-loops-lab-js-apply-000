function theBeatlesPlay(musicians, instruments) {
	var facts = []
	for (var i = 0; i < musicians.length; i++) {
		facts.push(`${musicians[i]} plays ${instruments[i]}`)
	}
	return facts
}

function johnLennonFacts(factsin) {
	var facts = []
	while (factsin.length > 0) {
		facts.unshift(`${factsin.pop()}!!!`)
	}

  return facts
}

function iLoveTheBeatles(n) {
	var love = []
	var lovestring = "I love the Beatles!"
	do {
		love.push(lovestring)
		n += 1
	}	while (n < 15)
	return love
}