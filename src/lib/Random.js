const greetings = [ 'Hellow', 'Hi', 'Nice day!' ];

/**
 * Random class
 */
class Random {
	/**
	 * Returns random greeting
	 *
	 * @returns {string}
	 */
	static GetRandomGreeting() {
		const greetingIndex = Random.GetRandomInt(0, greetings.length);

		return greetings[greetingIndex];
	}

	/**
	 * Returns random number
	 *
	 * @param {number} from Minimum value
	 * @param {number} to Maximum value
	 * @returns {number} random integer
	 */
	static GetRandomInt(from, to) {
		return Math.floor(Math.random() * (to + 1 - from)) + from;
	}
}

module.exports = Random;
