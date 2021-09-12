import React, {FC} from 'react';
import {Text, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {scaleHeight, scaleSizeBorder, scaleWidth} from '../../../styles/Mixins';
import {
  WHITE_FFF,
  PURPLE_BE5,
  PURPLE_BFF,
  GRAY_6D6,
  GRAY_E92,
  GRAY_756,
  Blue_F9FB,
} from '../../../styles/Colors';
import {NameValuePairType} from '../models/App';
import {BORDER_RADIUS_5, FONT_TITLE} from '../../../styles/Spacing';

interface TopSectionProps {
  title: string;
  onChangeSection: (id: string) => void; // section-id
  selectedSectionId: string | null;
  sectionList: Array<NameValuePairType<string>>;
}

interface ItemProps {
  item: NameValuePairType<string>;
  onPress: (id: string) => void; // section-id
  isSelected: boolean;
}

const Item: FC<ItemProps> = ({item, onPress, isSelected}: ItemProps) => {
  const customStyle = isSelected ? styles.selectedItem : styles.item;
  const customLabelStyle = isSelected
    ? styles.selectedItemLabel
    : styles.itemLabel;
  return (
    <TouchableOpacity
      key={item.value}
      onPress={() => onPress(item.value)}
      style={customStyle}>
      <Text style={customLabelStyle}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const TopSection: FC<TopSectionProps> = ({
  title,
  onChangeSection,
  selectedSectionId,
  sectionList,
}: TopSectionProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.scrollContainer} horizontal={true}>
        <View style={styles.itemsContainer}>
          {sectionList.map(ele => (
            <Item
              item={ele}
              onPress={onChangeSection}
              isSelected={selectedSectionId === ele.value}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TopSection;

const baseItemStyle: TextStyle | ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: GRAY_6D6,
  width: scaleWidth(105),
  height: scaleHeight(40),
  marginTop: scaleHeight(14),
  backgroundColor: WHITE_FFF,
  borderRadius: BORDER_RADIUS_5,
  borderWidth: scaleSizeBorder(1, 1),
};

const itemLabelStyle: TextStyle = {
  color: GRAY_E92,
  ...FONT_TITLE,
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: scaleHeight(16),
    paddingLeft: scaleWidth(12),
    backgroundColor: Blue_F9FB,
    paddingBottom: scaleHeight(22),
  },
  scrollContainer: {
    paddingBottom: scaleHeight(10),
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scaleWidth(1450),
    paddingRight: scaleWidth(12),
  },
  title: {
    color: GRAY_756,
    textAlignVertical: 'center',
    ...FONT_TITLE,
  },
  item: {...baseItemStyle},
  selectedItem: {
    ...baseItemStyle,
    borderColor: PURPLE_BE5,
  },
  itemLabel: {
    ...itemLabelStyle,
  },
  selectedItemLabel: {
    ...itemLabelStyle,
    color: PURPLE_BFF,
  },
});
