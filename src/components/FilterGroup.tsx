import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import Dropdown from './dropdown/Dropdown';
import { StyleSheet, View } from 'react-native';
import AppInput from './cores/AppInput';
import { setCategory, setSortMovieBy } from 'redux/slices/settings';
import AppButton from './cores/AppButton';
import Theme from 'theme';

interface FilterGroupProps { }

const categoryOptions = [
  { label: 'now_playing', value: 'now_playing' },
  { label: 'upcoming', value: 'upcoming' },
  { label: 'popular', value: 'popular' },
];

const sortOptions = [
  { label: 'by_alp_odr', value: 'by_alp_odr' },
  { label: 'by_rating', value: 'by_rating' },
  { label: 'by_release_date', value: 'by_release_date' },
];

const FilterGroup: FC<FilterGroupProps> = ({ }) => {
  const sortedBy = useAppSelector(state => state.settings.sortedBy);
  const category = useAppSelector(state => state.settings.category);
  const dispach = useAppDispatch();

  return (
    <View>
      <Dropdown
        defautOpen
        currentValue={category}
        options={categoryOptions}
        onSelect={(value) => dispach(setCategory(value))}
        triggerName={'now_playing'}
      />
      <Dropdown
        currentValue={sortedBy}
        options={sortOptions}
        onSelect={(value) => dispach(setSortMovieBy(value))}
        triggerName={'sort_by'}
      />
      <AppInput placeholder="Search ..." />
      <AppButton i18nKey='search' variant='secondary' style={styles.btnSearch} textStyle={styles.textSearch} />
    </View>
  );
};


export const styles = StyleSheet.create({
  btnSearch: {
    padding: Theme.spacing.space_4,
    margin: Theme.spacing.space_1,
    borderRadius: Theme.rounds.xLarge,
  },
  textSearch: {
    fontSize: Theme.fontSizes.medium,
    fontWeight: Theme.fontWeights.semiBold,
    color: 'gray',
    textAlign: 'center'
  },
});
export default FilterGroup;
