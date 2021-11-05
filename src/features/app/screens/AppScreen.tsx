import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../../reducers/RootReducer';
import {fetchCarouselList} from '../actions/AppActions';

import {WHITE_FFF} from '../../../styles/Colors';
import Carousel from '../components/Carousel';
import FullLoader from '../components/FullLoader';
import {PAGE_COUNT, PAGE_SIZE} from '../constants/AppConstant';

const AppScreen = () => {
  const {carouselList, isInProgress} = useSelector((state: RootState) => {
    return {
      carouselList: state.app.carouselList,
      isInProgress: state.app.isInProgress,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    const param = {
      pageCount: PAGE_COUNT,
      perPageSize: PAGE_SIZE,
    };
    dispatch(fetchCarouselList(param));
  }, []);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <Carousel list={carouselList} />
        {isInProgress && <FullLoader />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: WHITE_FFF,
  },
  mainContainer: {
    flex: 1,
  },
  mainFeedContainer: {},
});

export default AppScreen;
