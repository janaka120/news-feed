import {TextStyle} from 'react-native';
import {scaleSize, scaleFontWithLineHeight} from './Mixins';

export const BORDER_RADIUS_5: number = scaleSize(5);

export const FONT_TITLE: TextStyle = scaleFontWithLineHeight(16);
export const FONT_SUBTITLE: TextStyle = scaleFontWithLineHeight(12);
