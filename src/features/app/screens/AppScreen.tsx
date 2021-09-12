import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import NewFeed from '../components/NewFeed';
import TopSection from '../components/TopSection';
import {
  HomeLabels,
  SampleNewsList,
  SectionList,
  InitNewsFeedFilter,
  LocationList,
  KeywordList,
} from '../constants/AppConstant';
import {NewFeedFilterType} from '../models/Home';
import NewsFeedFilter from '../components/NewsFeedFilter';

const AppScreen = () => {
  const [filters, setFilters] = useState<NewFeedFilterType>(InitNewsFeedFilter);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <TopSection
          title={HomeLabels.SECTION_TITLE}
          onChangeSection={id => console.log('section id >>>>>>>>>>', id)}
          selectedSectionId={'world'}
          sectionList={SectionList}
        />
        <NewsFeedFilter
          locationList={LocationList}
          keywordList={KeywordList}
          onChangeFilter={(id: string, value: NewFeedFilterType) =>
            console.log('selected Filter -->', id, '--', value)
          }
          selectedFilters={filters}
        />
        <View style={styles.mainFeedContainer}>
          <NewFeed selectedFilters={filters} newsList={SampleNewsList} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainContainer: {
    flex: 1,
  },
  mainFeedContainer: {
    flex: 1,
  },
});

export default AppScreen;
