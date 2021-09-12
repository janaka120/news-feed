import React, {FC} from 'react';
import {Image, StyleSheet, View, FlatList, Text} from 'react-native';
import moment from 'moment';

import {scaleHeight, scaleWidth} from '../../../styles/Mixins';
import {
  WHITE_FFF,
  GRAY_276,
  GRAY_6D6,
  GRAY_E92,
  Blue_D0E3,
} from '../../../styles/Colors';
import {NewFeedFilterType, NewFeedType} from '../models/Home';
import {
  BORDER_RADIUS_5,
  FONT_SUBTITLE,
  FONT_TITLE,
} from '../../../styles/Spacing';

interface NewFeedProps {
  selectedFilters: NewFeedFilterType;
  newsList: Array<NewFeedType>;
}

interface NewsItemProps {
  item: NewFeedType;
}

const NewsItem: FC<NewsItemProps> = ({item}: NewsItemProps) => {
  const {title, id, url, byline, published_date} = item;
  const imgSource =
    url.length > 0
      ? {
          uri: url,
        }
      : require('../../../assets/images/sample_news_bg.jpg');

  return (
    <View key={Number(id)} style={styles.newsItem}>
      <View style={styles.leftCon}>
        <Image style={styles.thumbnailImage} source={imgSource} />
      </View>
      <View style={styles.txtCon}>
        <Text style={styles.title} numberOfLines={3}>
          {title}
        </Text>
        <View style={styles.subTxtCon}>
          <Text style={styles.subText}>{`By: ${byline}`}</Text>
          <Text style={styles.subText}>{`Published: ${moment(
            published_date,
          ).fromNow()}`}</Text>
        </View>
      </View>
    </View>
  );
};

const NewFeed: FC<NewFeedProps> = ({
  selectedFilters,
  newsList,
}: NewFeedProps) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={newsList}
        renderItem={NewsItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NewFeed;

const imageHeight = scaleWidth(114);

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: scaleHeight(12),
    paddingHorizontal: scaleWidth(12),
    backgroundColor: Blue_D0E3,
  },
  newsItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: scaleHeight(12),
    borderRadius: BORDER_RADIUS_5,
    backgroundColor: WHITE_FFF,
    paddingHorizontal: scaleWidth(12),
    paddingVertical: scaleHeight(12),
  },
  btnConEnable: {},
  btnConDisabled: {},
  leftCon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageHeight,
    height: imageHeight,
    marginRight: scaleWidth(14),
  },
  txtCon: {
    flex: 1,
    justifyContent: 'space-between',
    height: imageHeight,
    paddingVertical: scaleHeight(5),
  },
  subTxtCon: {
    justifyContent: 'space-around',
    height: scaleHeight(50),
  },
  title: {
    ...FONT_TITLE,
    color: GRAY_276,
  },
  thumbnailImage: {
    width: imageHeight,
    height: imageHeight,
    resizeMode: 'cover',
    backgroundColor: GRAY_6D6,
  },
  subText: {
    ...FONT_SUBTITLE,
    color: GRAY_E92,
  },
});
