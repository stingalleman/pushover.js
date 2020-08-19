# pushover.js

[![npm](https://img.shields.io/npm/v/@stingalleman/pushover.js)](https://npmjs.com/package/@stingalleman/pushover.js) [![GitHub](https://img.shields.io/github/license/stingalleman/pushover.js)](LICENSE.md) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9D298ENTTLRBJ&source=url)

> node.js API wrapper for Pushover with Typescript support

## Installation

```bash
yarn add @stingalleman/pushover.js # or npm install @stingalleman/pushover.js
```

## Example

```js
const { Pushover } = require("../dist/index");

const pushover = new Pushover("APPLICATION-TOKEN");

async function init() {
  await pushover.message.send("This is a notification title!", {
    message: "Sick notification",
    user: "USER-TOKEN"
  });
}

init();
```

You're also able to set a default user token:

```js
const { Pushover } = require("../dist/index");

const pushover = new Pushover("APPLICATION-TOKEN", "USER-TOKEN");

async function init() {
  await pushover.message.send("This is a notification title!");
}

init();
```

Documentation is located [here](https://stingalleman.github.io/pushover.js/)

## Why that stupid name?

Because NPM threw this error at me:

```bash
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/pushover.js - Package name too similar to existing packages; try renaming your package to '@stingalleman/pushover.js' and publishing with 'npm publish --access=public' instead
```
