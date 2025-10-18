import FilterGroup from 'components/FilterGroup';
import MovieList from 'components/MovieList';
import { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { getMovies } from 'redux/slices/app';
import { useAppDispatch } from 'redux/store';
import Theme from 'theme';

interface HomeProps { }
const Home: FC<HomeProps> = ({ }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies({}))
  }, [])

  return (
    <View style={styles.container}>
      <FilterGroup />
      <MovieList/>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: Theme.spacing.space_3,
    paddingBottom: 200
  },
});
export default Home;
