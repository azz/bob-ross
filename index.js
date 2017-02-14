// @see: http://thomaspark.co/2015/11/bob-ross-color-palette-in-css/

var colors = {
  SAP_GREEN: '#0A3410',
  ALIZARIN_CRIMSON: '#4E1500',
  VAN_DYKE_BROWN: '#221B15',
  DARK_SIENNA: '#5F2E1F',
  MIDNIGHT_BLACK: '#000000',
  PRUSSIAN_BLUE: '#021E44',
  PHTHALO_BLUE: '#0C0040',
  PHTHALO_GREEN: '#102E3C',
  CADMIUM_YELLOW: '#FFEC00',
  YELLOW_OCHRE: '#C79B00',
  INDIAN_YELLOW: '#FFB800',
  BRIGHT_RED: '#DB0000',
  TITANIUM_WHITE: '#FFFFFF',
};

module.exports.colors = colors;
module.exports.palette = [];

for (var color in colors) {
  if (colors.hasOwnProperty(color)) {
    module.exports.palette.push(colors[color]);
  }
}
