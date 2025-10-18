import FilterGroup from 'components/FilterGroup';
import MovieList from 'components/MovieList';
import { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { getMovies } from 'redux/slices/app';
import { useAppDispatch, useAppSelector } from 'redux/store';
import Theme from 'theme';
import MovieDetail from './MovieDetail';

interface HomeProps { }
const Home: FC<HomeProps> = ({ }) => {
  const dispatch = useAppDispatch()
  const currentMovieId = useAppSelector(state=> state.app.currentMovieId)

  useEffect(() => {
    dispatch(getMovies({ page: 1}))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(currentMovieId) 
    return <MovieDetail movieId={currentMovieId}/>

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
