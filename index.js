const axios = require("axios");

startToCheckScam();

function startToCheckScam() {
	checkScam();
}

function checkScam() {
	module.exports = async (content) => {
		try {
			const loadAPI = await axios.get("https://bryendaco.github.io/catchscams.json");
			if (!loadAPI) return startToCheckScam();

			let response;

			for (scams of loadAPI.data.scamlinks) {
				if (!content) response = false;

				if (content === scams || content.includes(scams)) {
					response = true;
					break;
				} else response = false;

			}
			return response;
		} catch (error) {
			startToCheckScam();
		}
	}
}

/*
module.exports = async (content) => {
	const loadAPI = await axios.get("https://bryendaco.github.io/catchscams.json", { timeout: 1000 });
	if (!loadAPI) throw Error("Could not load the API");

	let response;

	for (scams of loadAPI.data.scamlinks) {
		if (!content) response = false;

		if (content === scams || content.includes(scams)) {
			response = true;
			break;
		} else response = false;

	}
	return response;
}
*/