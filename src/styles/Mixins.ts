import {Record} from './../features/app/models/App';
import {Dimensions, Platform, NativeModules} from 'react-native';

const {width, height} = Dimensions.get('window');
export const [WINDOW_WIDTH, WINDOW_HEIGHT] =
  width < height ? [width, height] : [height, width];

// default scaling guidance according to iPhone X
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

//UX, minimum guideline for thumb
const minimumClickableSize = 40;

// we can calculate this once if our app is only support portrait mode
const curDeviceWidthRatio: number = WINDOW_WIDTH / guidelineBaseWidth;
const curDeviceHeightRatio: number = WINDOW_HEIGHT / guidelineBaseHeight;
const curDeviceRatio: number = (curDeviceWidthRatio + curDeviceHeightRatio) / 2;

export const scaleSize = (size: number) => curDeviceRatio * size;
export const scaleWidth = (size: number) => curDeviceWidthRatio * size;
export const scaleHeight = (size: number) => curDeviceHeightRatio * size;
export const scaleFont = (size: number) => Math.round(size * curDeviceRatio);
export const scaleFontByHeight = (size: number) =>
  Math.round(size * curDeviceHeightRatio);
export const scaleSizeBorder = (size: number, minVal?: number) =>
  Math.max(scaleSize(size), minVal ? minVal : 1);
export const scaleHeightBorder = (size: number, minVal?: number) =>
  Math.max(scaleHeight(size), minVal ? minVal : 1);
export const scaleWidthBorder = (size: number, minVal?: number) =>
  Math.max(scaleWidth(size), minVal ? minVal : 1);

// sets a minimum value
export const scaleUxSize = (size: number) =>
  Math.max(scaleSize(size), minimumClickableSize);
export const scaleUxHeight = (size: number) =>
  Math.max(scaleHeight(size), minimumClickableSize);
export const scaleUxWidth = (size: number) =>
  Math.max(scaleWidth(size), minimumClickableSize);

export const scaleFontWithLineHeight = (size: number) => {
  const fontSize = scaleFont(size);
  return {
    fontSize,
    lineHeight: fontSize * SIZER.center,
  };
};

interface Sizer extends Record {
  down: number;
  center: number;
}

const SIZER: Sizer = {
  down: 1.5, //ion, matCommunity
  center: 1.375, //material, fontAwesome
}; //increase will go down

export const scaleIconFontSize = (size: number, go: string = 'center') => {
  const fontSize = scaleFont(size);
  return {
    size: fontSize,
    style: {
      lineHeight: fontSize * SIZER[go],
    },
  };
};

function dimensions(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right,
  property: string,
) {
  const styles = {
    [`${property}Top`]: top,
    [`${property}Right`]: right,
    [`${property}Bottom`]: bottom,
    [`${property}Left`]: left,
  };
  return styles;
}
export function margin(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top: number,
  right: number,
  bottom: number,
  left: number,
) {
  return dimensions(top, right, bottom, left, 'padding');
}

type Offset = {
  height: number;
  width: number;
};
export function boxShadow(
  color: string,
  offset: Offset = {height: 2, width: 2},
  radius: number = 8,
  opacity: number = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}

const deviceLocale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export default deviceLocale;
