import React, { FC, useEffect, useState } from 'react'
import AppButton from './cores/AppButton';
import { StyleSheet } from 'react-native';
import Theme from 'theme';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { getMovies, resetPage, setPage } from 'redux/slices/app';

interface SearchProps {

}

const Search: FC<SearchProps> = ({ }) => {
  const [searchable, setSearchable] = useState(false)
  const category = useAppSelector(state => state.settings.category)
  const search = useAppSelector(state => state.settings.search)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    setSearchable(true)
  }, [category, search])

  useEffect(() => {
    setSearchable(false)
  }, [])
  return (
    <AppButton onPress={() => {
      if (!searchable) return
      setSearchable(false)
      dispatch(resetPage())
      dispatch(getMovies({}))
    }} i18nKey='search' variant={searchable ? 'primary' : 'secondary'} style={styles.btnSearch} textStyle={styles.textSearch} />
  )
}

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
export default Search;