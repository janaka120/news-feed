import {NewFeedType, NewFeedFilterType} from './../models/Home';
import {NameValuePairType} from './../models/App';

export const HomeLabels = {
  HEADER_NAV_TITLE: 'NYT News Feed',
  HEADER_NAV_NAME: 'Home',
  SECTION_TITLE: 'Section',
};

const LOCATION: unique symbol = Symbol();
const KEYWORD: unique symbol = Symbol();

export const FILTER_KEY = {
  [LOCATION]: 'location',
  [KEYWORD]: 'keyword',
};

export const InitNewsFeedFilter: NewFeedFilterType = {
  location: '',
  keyword: '',
};

export const SectionList: Array<NameValuePairType<string>> = [
  {label: 'Arts', value: 'arts'},
  {label: 'Automobiles', value: 'automobiles'},
  {label: 'Books', value: 'books'},
  {label: 'Business', value: 'business'},
  {label: 'Fashion', value: 'fashion'},
  {label: 'Food', value: 'food'},
  {label: 'Health', value: 'health'},
  {label: 'Home', value: 'home'},
  {label: 'Insider', value: 'insider'},
  {label: 'Magazine', value: 'magazine'},
  {label: 'Movies', value: 'movies'},
  {label: 'Nyregion', value: 'nyregion'},
  {label: 'Obituaries', value: 'obituaries'},
  {label: 'Opinion', value: 'opinion'},
  {label: 'Politics', value: 'politics'},
  {label: 'Realestate', value: 'realestate'},
  {label: 'Science', value: 'science'},
  {label: 'Sports', value: 'sports'},
  {label: 'Sunday Review', value: 'sundayreview'},
  {label: 'Technology', value: 'technology'},
  {label: 'Theater', value: 'theater'},
  {label: 'T-magazine', value: 't-magazine'},
  {label: 'Travel', value: 'travel'},
  {label: 'Upshot', value: 'upshot'},
  {label: 'Us', value: 'us'},
  {label: 'World', value: 'world'},
];

export const LocationList: Array<NameValuePairType<string>> = [
  {
    label: 'LOCATION',
    value: '',
  },
  {
    label: 'New York City',
    value: 'New York City',
  },
];
export const KeywordList: Array<NameValuePairType<string>> = [
  {
    label: 'KEYWORDS',
    value: '',
  },
  {
    label: 'Opera',
    value: 'Opera',
  },
];

export const SampleNewsList: Array<NewFeedType> = [
  {
    id: '0',
    section: 'arts',
    title: 'The Met Opera Races to Reopen After Months of Pandemic Silence',
    byline: 'By Julia Jacobs',
    published_date: '2021-09-10T05:00:46-04:00',
    des_facet: 'Opera',
    geo_facet: 'New York City',
    url: 'https://static01.nyt.com/images/2021/09/03/arts/00met-opera-16/00met-opera-16-thumbLarge.jpg',
  },
  {
    id: '1',
    section: 'arts',
    title: 'Adam Pendleton Is Rethinking the Museum',
    byline: 'By Siddhartha Mitter',
    published_date: '2021-09-10T05:00:42-04:00',
    des_facet: 'Art',
    geo_facet: 'Richmond (Va)',
    url: 'https://static01.nyt.com/images/2021/09/12/arts/12pendleton-2/12pendleton-2-thumbLarge.jpg',
  },
  {
    id: '2',
    section: 'arts',
    title: 'Can TV Get Big Again?',
    byline: 'By James Poniewozik',
    published_date: '2021-09-10T05:00:41-04:00',
    des_facet: 'Television',
    geo_facet: '',
    url: 'https://static01.nyt.com/images/2021/09/19/arts/19new-season-critic-illo-SUB/19new-season-critic-illo-SUB-thumbLarge.jpg',
  },
  {
    id: '3',
    section: 'arts',
    title: 'Not Just Going Through the Motions',
    byline: 'By Gia Kourlas',
    published_date: '2021-09-10T05:02:40-04:00',
    des_facet: 'Dancing',
    geo_facet: 'New York City',
    url: 'https://static01.nyt.com/images/2021/09/19/arts/19new-kourlas1/merlin_193823088_3bb2ea4c-4944-40c7-b5f6-2f11bde6faae-thumbLarge.jpg',
  },
  {
    id: '4',
    section: 'arts',
    title: 'Why Art Struggled to Address the Horrors of 9/11',
    byline: 'By Jason Farago',
    published_date: '2021-09-09T05:00:19-04:00',
    des_facet: 'September 11 (2001)',
    geo_facet: 'United States',
    url: 'https://static01.nyt.com/images/2021/08/27/arts/00911culture-1/00911culture-1-thumbLarge.jpg',
  },
  {
    id: '5',
    section: 'arts',
    title: 'Art Fairs Come Blazing Back, Precarious but Defiant',
    byline: 'By Will Heinrich',
    published_date: '2021-09-09T13:09:39-04:00',
    des_facet: 'Art',
    geo_facet: 'Manhattan (NYC)',
    url: 'https://static01.nyt.com/images/2021/09/10/arts/09armory-review3/merlin_194417796_b04c6f3d-59d1-49e5-b341-08f3dc0e47f8-thumbLarge.jpg',
  },
  {
    id: '6',
    section: 'arts',
    title: 'As a Daytime Host, Kelly Clarkson Has No Fear of Being Vocal',
    byline: 'By Dave Itzkoff',
    published_date: '2021-09-09T05:00:16-04:00',
    des_facet: 'Television',
    geo_facet: '',
    url: 'https://static01.nyt.com/images/2021/09/12/arts/12Clarkson-a/12Clarkson-a-thumbLarge.jpg',
  },
  {
    id: '7',
    section: 'arts',
    title: 'A Vermeer Restoration Reveals a God of Desire',
    byline: 'By Catherine Hickley',
    published_date: '2021-09-09T08:34:39-04:00',
    des_facet: 'Art',
    geo_facet: '',
    url: 'https://static01.nyt.com/images/2021/09/09/arts/09vermeer3/09vermeer3-thumbLarge.jpg',
  },
];
