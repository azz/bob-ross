[![Build Status](https://travis-ci.org/DerFlatulator/bob-ross.svg)][ci-server]
[![npm version](https://badge.fury.io/js/bob-ross.svg)][npm-package]

# bob-ross
Bob Ross Color Palette

Inspired by [this blog](http://thomaspark.co/2015/11/bob-ross-color-palette-in-css/).

## Install

```bash
npm install --save bob-ross
```

## Usage

```js
const BobRoss = require('bob-ross');

// Single color by name:
BobRoss.colors.YELLOW_OCHRE; // ==> '#C79B00'

// Array of all colors in palette:
BobRoss.palette;
```

## Available Colors

* ![#SAP_GREEN](https://placehold.it/15/0A3410/000000?text=+) `SAP_GREEN`
* ![#ALIZARIN_CRIMSON](https://placehold.it/15/4E1500/000000?text=+) `ALIZARIN_CRIMSON`
* ![#VAN_DYKE_BROWN](https://placehold.it/15/221B15/000000?text=+) `VAN_DYKE_BROWN`
* ![#DARK_SIENNA](https://placehold.it/15/5F2E1F/000000?text=+) `DARK_SIENNA`
* ![#MIDNIGHT_BLACK](https://placehold.it/15/000000/000000?text=+) `MIDNIGHT_BLACK`
* ![#PRUSSIAN_BLUE](https://placehold.it/15/021E44/000000?text=+) `PRUSSIAN_BLUE`
* ![#PHTHALO_BLUE](https://placehold.it/15/0C0040/000000?text=+) `PHTHALO_BLUE`
* ![#PHTHALO_GREEN](https://placehold.it/15/102E3C/000000?text=+) `PHTHALO_GREEN`
* ![#CADMIUM_YELLOW](https://placehold.it/15/FFEC00/000000?text=+) `CADMIUM_YELLOW`
* ![#YELLOW_OCHRE](https://placehold.it/15/C79B00/000000?text=+) `YELLOW_OCHRE`
* ![#INDIAN_YELLOW](https://placehold.it/15/FFB800/000000?text=+) `INDIAN_YELLOW`
* ![#BRIGHT_RED](https://placehold.it/15/DB0000/000000?text=+) `BRIGHT_RED`
* ![#TITANIUM_WHITE](https://placehold.it/15/FFFFFF/000000?text=+) `TITANIUM_WHITE`

[npm-package]: https://www.npmjs.com/package/bob-ross
[ci-server]: https://travis-ci.org/DerFlatulator/bob-ross
