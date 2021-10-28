# @bryendaco/catchscamjs
Catches scam and phishing links in Discord.

## Usage
**Example**

```js
const catchscamjs = require("@bryendaco/catchscamjs"); // Load Package

let content = `:warning: Hi i claim this nitro for free 3 months lol! try it too. https://dliscord.com/x4Cs7cDt2sdFOf12`

catchscamjs(content).then(console.log);
// See if there is a Scam or Phishing link in 'content'

//if it is a scam returns 'true' - (boolean)
// if it is not a scam returns 'false' - (boolean)
```
