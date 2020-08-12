# pushover.js

[![npm](https://img.shields.io/npm/v/pushover.js)](https://npmjs.com/package/pushover.js) [![GitHub](https://img.shields.io/github/license/stingalleman/pushover.js)](LICENSE.md) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9D298ENTTLRBJ&source=url)

> node.js API wrapper for Pushover with Typescript support

## Installation

```bash
yarn add pushover.js # or npm install pushover.js
```

## Example

```js
const { Pushover } = require("../dist/index");

const pushover = new Pushover("APPLICATION-TOKEN");

async function init() {
  await pushover.message.send({
    title: "Hi there!",
    message: "Sick notification",
    user: "USER-TOKEN"
  });
}

init();
```

Documentation is located [here](https://stingalleman.github.io/pushover.js/)
