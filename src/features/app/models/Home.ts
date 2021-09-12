export interface NewFeedType {
  section: string;
  title: string;
  byline: string;
  published_date: string; // '2021-09-10T05:00:46-04:00',
  des_facet: string;
  geo_facet: string;
  url: string;
  id: string;
}

export interface NewFeedFilterType {
  location: string;
  keyword: string;
}
