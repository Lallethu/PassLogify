const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const TURQUOISE = '#1abc9c';
const PETER_RIVER = '#3498db';
const BRAND = '#2339c2';
const PUMPKIN = '#d35400';
const WET_ASPHALT = '#34495e';
const GREEN_SEA = '#16a085';
const BELIZE_HOLE = '#2980b9';
const CARROT = '#e67e22';
const SMOOTH_GRAY = '#f2f2f2';

const common = {
	PRIMARY: SUN_FLOWER,
  SECONDARY: BRAND,
	SUCCESS: EMERALD,
	DANGER: ALIZARIN,
};

const light = {
	...common,
	BACKGROUND: CLOUDS,
	TEXT: MIDNIGHT_BLUE,
	TEXT_SECONDARY: ASBESTOS,
  BORDER: ASBESTOS,
  BACKGROUND_TINT: PETER_RIVER,
};

const dark = {
	...common,
	BACKGROUND: MIDNIGHT_BLUE,
	TEXT: CLOUDS,
	TEXT_SECONDARY: SILVER,
  BORDER: SILVER,
  BACKGROUND_TINT: WET_ASPHALT,
  SECONDARY: SMOOTH_GRAY,
};

export const colors = { light, dark };
