import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {Blue_D0E3_5, Blue_D0E3_3, WHITE_FFF} from '../../../styles/Colors';
import {scaleWidth, scaleFontWithLineHeight} from '../../../styles/Mixins';

interface CircleButtonProps {
  title: string;
  onPress: () => void;
  disabled: boolean;
  customStyle: {};
  customTextStyle: any;
}

const CircleButton: FC<CircleButtonProps> = ({
  title,
  disabled,
  customStyle,
  onPress,
  customTextStyle,
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[disabled ? styles.btnDisabled : styles.btnActive, customStyle]}>
      <Text style={[styles.lbl, customTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;

const width = scaleWidth(50);
const btnActive: ViewStyle | TextStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  width: width,
  height: width,
  borderRadius: 35,
  padding: 0,
  backgroundColor: Blue_D0E3_5,
};
const styles = StyleSheet.create({
  btnActive,
  btnDisabled: {
    ...btnActive,
    backgroundColor: Blue_D0E3_3,
  },
  lbl: {
    ...scaleFontWithLineHeight(18),
    color: WHITE_FFF,
  },
});
