import React, {FC, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {scaleHeight, scaleSizeBorder, scaleWidth} from '../../../styles/Mixins';
import {WHITE_FFF, GRAY_9D9} from '../../../styles/Colors';
import {BORDER_RADIUS_5} from '../../../styles/Spacing';

interface CarouselIndicatorProps {
  length: number;
  selectedIndex: number;
}

const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  length,
  selectedIndex,
}: CarouselIndicatorProps) => {
  const indicatorCom = useMemo(() => {
    const indicators = [];
    let i = 0;
    for (i; i < length; i++) {
      indicators.push(
        <View
          key={i}
          style={selectedIndex === i ? styles.activeCircle : styles.circle}
        />,
      );
    }
    return indicators;
  }, [length, selectedIndex]);

  return <View style={styles.mainContainer}>{indicatorCom}</View>;
};

export default CarouselIndicator;

const circleHeight = scaleHeight(12);
const circleWidth = circleHeight;
const activeCircleHeight = circleHeight;
const activeCircleWidth = circleHeight;

const circleMain = {
  width: circleWidth,
  height: circleHeight,
  borderRadius: circleHeight / 2,
  backgroundColor: GRAY_9D9,
  marginHorizontal: scaleWidth(2),
  borderColor: GRAY_9D9,
  borderWidth: scaleSizeBorder(1),
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal: scaleWidth(5),
    paddingVertical: scaleHeight(6),
  },
  circle: circleMain,
  activeCircle: {
    ...circleMain,
    backgroundColor: WHITE_FFF,
    width: activeCircleWidth,
    height: activeCircleHeight,
    borderRadius: BORDER_RADIUS_5,
  },
});
