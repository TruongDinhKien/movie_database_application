import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/store';
import Dropdown from './dropdown/Dropdown';
import { View } from 'react-native';
import AppInput from './cores/AppInput';
import { setCategory, setSearch, setSortMovieBy } from 'redux/slices/settings';
import Search from './Search';

interface FilterGroupProps { }

const categoryOptions = [
  { label: 'now_playing', value: 'now_playing' },
  { label: 'upcoming', value: 'upcoming' },
  { label: 'popular', value: 'popular' },
];

const sortOptions = [
  { label: 'by_alp_odr', value: 'title.desc' },
  { label: 'by_rating', value: 'vote_average.desc' },
  { label: 'by_release_date', value: 'release_date.desc' },
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
      <AppInput placeholder="Search ..." onChangeText={(text)=> dispach(setSearch(text))} />
      <Search />
    </View>
  );
};



export default FilterGroup;
