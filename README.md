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

<div style="text-align: center">
  <div style="padding: 12px; width: 200px; background: #0A3410; color: white">SAP_GREEN</div>
  <div style="padding: 12px; width: 200px; background: #4E1500; color: white">ALIZARIN_CRIMSON</div>
  <div style="padding: 12px; width: 200px; background: #221B15; color: white">VAN_DYKE_BROWN</div>
  <div style="padding: 12px; width: 200px; background: #5F2E1F; color: white">DARK_SIENNA</div>
  <div style="padding: 12px; width: 200px; background: #000000; color: white">MIDNIGHT_BLACK</div>
  <div style="padding: 12px; width: 200px; background: #021E44; color: white">PRUSSIAN_BLUE</div>
  <div style="padding: 12px; width: 200px; background: #0C0040; color: white">PHTHALO_BLUE</div>
  <div style="padding: 12px; width: 200px; background: #102E3C; color: white">PHTHALO_GREEN</div>
  <div style="padding: 12px; width: 200px; background: #FFEC00; color: black">CADMIUM_YELLOW</div>
  <div style="padding: 12px; width: 200px; background: #C79B00; color: black">YELLOW_OCHRE</div>
  <div style="padding: 12px; width: 200px; background: #FFB800; color: black">INDIAN_YELLOW</div>
  <div style="padding: 12px; width: 200px; background: #DB0000; color: white">BRIGHT_RED</div>
  <div style="padding: 12px; width: 200px; background: #FFFFFF; color: black">TITANIUM_WHITE</div>
</div>

[npm-package]: https://www.npmjs.com/package/bob-ross
[ci-server]: https://travis-ci.org/DerFlatulator/bob-ross
