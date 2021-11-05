import React, {FC} from 'react';
import {
  Text,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  Image,
  Dimensions,
} from 'react-native';

import {scaleHeight, scaleSizeBorder, scaleWidth} from '../../../styles/Mixins';
import {GRAY_070, GRAY_756, GRAY_E9E, GRAY_9D9} from '../../../styles/Colors';
import {
  BORDER_RADIUS_8,
  FONT_TITLE,
  FONT_SUBTITLE,
  FONT_INFO,
} from '../../../styles/Spacing';
import {generateNumberInBetween} from '../../../utils/Helper';

interface CarouselItemProps {
  title: string;
  images: Array<string>;
  description: string;
}

const CarouselItemComponent: FC<CarouselItemProps> = ({
  title,
  images,
  description,
}: CarouselItemProps) => {
  const imageUrl = images[generateNumberInBetween(0, 3)];
  return (
    <View style={styles.item}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{'Sample subtitle'}</Text>
        <Image style={styles.cardImage} source={{uri: imageUrl}} />
        <Text style={styles.info}>{description}</Text>
      </View>
    </View>
  );
};

export default CarouselItemComponent;

const cardWidth = Dimensions.get('screen').width;
const cardHeight = (Dimensions.get('screen').height * 2) / 3;
const imageWidth = scaleWidth(300);
const imageHeight = scaleHeight(250);
const baseItemStyle: TextStyle | ViewStyle = {
  width: cardWidth,
  height: cardHeight,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: scaleWidth(20),
  paddingBottom: scaleWidth(10),
  paddingHorizontal: scaleHeight(20),
};

const styles = StyleSheet.create({
  cardImage: {
    width: imageWidth,
    resizeMode: 'cover',
    height: imageHeight,
    marginVertical: scaleHeight(25),
    backgroundColor: GRAY_070,
  },
  title: {
    ...FONT_TITLE,
    color: GRAY_756,
    textAlignVertical: 'center',
    marginVertical: scaleHeight(5),
  },
  item: {...baseItemStyle},
  subTitle: {
    color: GRAY_070,
    ...FONT_SUBTITLE,
    textAlignVertical: 'center',
    marginVertical: scaleHeight(5),
  },
  info: {
    ...FONT_INFO,
    color: GRAY_E9E,
    textAlignVertical: 'center',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderColor: GRAY_9D9,
    borderRadius: BORDER_RADIUS_8,
    paddingVertical: scaleHeight(20),
    paddingHorizontal: scaleWidth(10),
    borderWidth: scaleSizeBorder(1, 1),
  },
});
