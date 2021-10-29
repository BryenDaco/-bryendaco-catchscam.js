const axios = require("axios");

module.exports = async (messageContent) => {
	const catcscams = await axios.get("https://bryendaco.github.io/catchscams.json", {timeout: 1000});
	if (!catcscams) throw Error ("Could not load API");
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
