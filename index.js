const axios = require("axios");

module.exports = async (messageContent) => {
	const catcscans = await axios.get("https://bryendaco.github.io/catchscams.json");
	let response;

	for (scamdomains of catcscans.data.scamlinks) {
		if (!messageContent) response = false;

		if (messageContent.includes(scamdomains)) {
			response = true;
			break;
		} else response = false;

	}
	return response;
}
