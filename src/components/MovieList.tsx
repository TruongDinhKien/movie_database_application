import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { getMovies, setCurrentMovieId } from 'redux/slices/app';
import AppButton from './cores/AppButton';
import { Loading } from './Loading';
import { AppText } from './cores';
import React, { FC } from 'react'
import _ from 'lodash'
import Theme from 'theme';

interface MovieListProps { }

const MovieList: FC<MovieListProps> = ({ }) => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.app.loading)
  const sortedBy = useAppSelector(state => state.settings.sortedBy)
  const movies = useAppSelector(state => state.app.movies)
  const sortedMovie = _.sortBy(movies, sortedBy.split('.')[0])
  const onPress = (item: Movie) => {
    dispatch(setCurrentMovieId(item.id))
  }

  const renderItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.img}
      />
      <View style={styles.card_description}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.date}>{item.release_date}</AppText>
        <AppText numberOfLines={2} style= {styles.description}>
          {item.overview}
        </AppText>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={sortedMovie}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      ListFooterComponent={
        loading ? (
          <Loading />
        ) : (
          <AppButton i18nKey='load_more' onPress={() => dispatch(getMovies({}))} style={styles.loadMore} variant="primary" />
        )

      }
    />
  )
}


const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: Theme.spacing.space_2,
    margin: Theme.spacing.space_2,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  card_description: {
    flex: 1,
    padding: Theme.spacing.space_0_5,
  },
  img: {
    width: 80,
    height: 100,
    borderTopLeftRadius: Theme.spacing.space_2,
    borderBottomLeftRadius: Theme.spacing.space_2,
    marginRight: Theme.spacing.space_2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: Theme.spacing.space_1
  },
  date: {
    color: "gray",
    marginVertical: Theme.spacing.space_1,
    marginBottom: Theme.spacing.space_1
  },
  description: {
    color: "#333",
  },
  loadMore: {
    padding: 14,
    borderRadius: Theme.spacing.space_2,
    alignItems: "center",
    margin: Theme.spacing.space_2,
    marginBottom: 150
  },
})


export default MovieList;