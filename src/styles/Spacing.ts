import {TextStyle} from 'react-native';
import {scaleSize, scaleFontWithLineHeight} from './Mixins';

export const BORDER_RADIUS_5: number = scaleSize(5);
export const BORDER_RADIUS_8: number = scaleSize(8);

export const FONT_TITLE: TextStyle = scaleFontWithLineHeight(24);
export const FONT_SUBTITLE: TextStyle = scaleFontWithLineHeight(12);
export const FONT_INFO: TextStyle = scaleFontWithLineHeight(10);
