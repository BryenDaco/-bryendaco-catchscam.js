const axios = require("axios");

module.exports = async (content) => {
	const loadAPI = await axios.get("https://bryendaco.github.io/catchscams.json", {timeout: 1000});
	if (!loadAPI) throw Error ("Could not load the API");
	
	let response;

	for (scams of loadAPI.data.scamlinks) {
		if (!content) response = false;

		if (content.includes(scams)) {
			response = true;
			break;
		} else response = false;

	}
	return response;
}
