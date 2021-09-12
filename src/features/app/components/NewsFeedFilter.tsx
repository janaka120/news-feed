import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Picker} from '@react-native-picker/picker';

import {scaleHeight, scaleWidth} from '../../../styles/Mixins';
import {WHITE_FFF, Blue_C0E3, GRAY_1A6} from '../../../styles/Colors';
import {NewFeedFilterType} from '../models/Home';
import {BORDER_RADIUS_5, FONT_TITLE} from '../../../styles/Spacing';
import {NameValuePairType} from '../models/App';

interface NewsFeedFilterProps {
  locationList: Array<NameValuePairType<string>>;
  keywordList: Array<NameValuePairType<string>>;
  onChangeFilter: (id: string, value: NewFeedFilterType) => void;
  selectedFilters: NewFeedFilterType;
}

interface CustomPickerProps {
  items: Array<NameValuePairType<string>>;
  onChangeFilter: (id: string, value: NewFeedFilterType) => void;
  selectedValue: string;
}

const CustomPicker: FC<CustomPickerProps> = ({
  items,
  selectedValue,
  onChangeFilter,
}: CustomPickerProps) => {
  return (
    <View style={styles.pickerCom}>
      <Picker
        dropdownIconColor={GRAY_1A6}
        selectedValue={selectedValue}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={itemValue =>
          onChangeFilter('location', itemValue as unknown as NewFeedFilterType)
        }>
        {items.map(item => (
          <Picker.Item
            style={styles.pickerItem}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const NewsFeedFilter: FC<NewsFeedFilterProps> = ({
  locationList,
  keywordList,
  onChangeFilter,
  selectedFilters,
}: NewsFeedFilterProps) => {
  const {location, keyword} = selectedFilters;
  return (
    <View style={styles.mainContainer}>
      <CustomPicker
        items={locationList}
        selectedValue={location}
        onChangeFilter={onChangeFilter}
      />
      <CustomPicker
        items={keywordList}
        selectedValue={keyword}
        onChangeFilter={onChangeFilter}
      />
    </View>
  );
};

export default NewsFeedFilter;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Blue_C0E3,
    justifyContent: 'space-between',
    paddingVertical: scaleHeight(14),
    paddingHorizontal: scaleWidth(12),
  },
  pickerCom: {
    width: scaleWidth(165),
    backgroundColor: WHITE_FFF,
    borderRadius: BORDER_RADIUS_5,
  },
  picker: {
    color: GRAY_1A6,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerItem: {
    ...FONT_TITLE,
  },
});
