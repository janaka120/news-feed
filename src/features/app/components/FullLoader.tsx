import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

import {GRAY_756} from '../../../styles/Colors';
import {scaleHeight, scaleFontWithLineHeight} from '../../../styles/Mixins';

interface FullLoaderProps {}

const FullLoader: FC<FullLoaderProps> = ({}: FullLoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={GRAY_756} />
      <Text style={styles.text}>{'Loading...'}</Text>
    </View>
  );
};

export default FullLoader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: scaleHeight(20),
    ...scaleFontWithLineHeight(16),
    color: GRAY_756,
  },
});
