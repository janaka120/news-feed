import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import React, {FC, useRef, useState} from 'react';

import {scaleHeight, scaleWidth} from '../../../styles/Mixins';
import {CarouselItem} from '../models/App';
import CarouselItemComponent from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import CircleButton from './CircleButton';

interface CarouselProps {
  list: Array<CarouselItem>;
}
const CAROUSAL_ITEM_WIDTH = Dimensions.get('screen').width;

const Carousel: FC<CarouselProps> = ({list}: CarouselProps) => {
  const renderItem = (item: CarouselItem): JSX.Element => (
    <CarouselItemComponent
      key={item.id}
      title={item.title}
      images={item.images}
      description={item.description}
    />
  );

  const animationRef = useRef(new Animated.Value(0));
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const onNextHandleAnimate = () => {
    let newSelectedImgIndex = selectedImgIndex + 1;
    Animated.spring(animationRef.current, {
      toValue: -(CAROUSAL_ITEM_WIDTH * newSelectedImgIndex),
      useNativeDriver: true,
    }).start();

    setSelectedImgIndex(newSelectedImgIndex);
  };

  const onPreviousHandleAnimate = () => {
    let newSelectedImgIndex = selectedImgIndex - 1;
    Animated.spring(animationRef.current, {
      toValue: -(CAROUSAL_ITEM_WIDTH * newSelectedImgIndex),
      useNativeDriver: true,
    }).start();

    setSelectedImgIndex(newSelectedImgIndex);
  };
  return (
    <>
      <Animated.View
        style={[
          styles.animatedContainer,
          {transform: [{translateX: animationRef.current}]},
        ]}>
        {list.map(item => renderItem(item))}
      </Animated.View>
      <View style={styles.carouselIndicatorCon}>
        <CarouselIndicator
          length={list.length}
          selectedIndex={selectedImgIndex}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <CircleButton
          title="<"
          onPress={onPreviousHandleAnimate}
          disabled={selectedImgIndex === 0}
        />
        <CircleButton
          title=">"
          onPress={onNextHandleAnimate}
          disabled={selectedImgIndex === list.length - 1}
        />
      </View>
    </>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingVertical: scaleHeight(14),
  },
  animatedContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: Dimensions.get('screen').height / 3,
    paddingHorizontal: scaleWidth(20),
  },
  carouselIndicatorCon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
