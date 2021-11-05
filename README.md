# @bryendaco/catchscam.js
Catches scam and phishing links in Discord.<br>
If you want to submit a new scam or phishing link, [click here](https://forms.gle/XLbkTduC2i414g3B7)

## Usage
- **Example #1 (Common Use)**

```js
const catchscamjs = require("@bryendaco/catchscam.js"); // Load Package

let content = `:warning: Hi i claim this nitro for free 3 months lol! try it too. https://dliscord.com/x4Cs7cDt2sdFOf12`

catchscamjs(content).then(console.log);
// See if there is a Scam or Phishing link in 'content'

//if it is a scam returns 'true' - (boolean)
// if it is not a scam returns 'false' - (boolean)
```

- **Example #2 (Discord.js Use)**
```js
const catchscams = require("@bryendaco/catchscam.js");
const discord = require('discord.js'); // Version: 13 (discord.js v13)

const client = new discord.Client({intents: [discord.Intents.FLAGS.DIRECT_MESSAGES, discord.Intents.FLAGS.GUILD_MESSAGES]});

client.on('messageCreate', async message => {
	catchscams(message.content).then(x => {
		if (x == true) return message.delete();
	});
});

client.login("Your-Bot-Token")
```