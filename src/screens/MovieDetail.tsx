import React, { useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import { AppText } from 'components/cores'
import { getMovieDetail } from 'api'
import Theme from 'theme';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useAppDispatch } from 'redux/store';
import { setCurrentMovieId } from 'redux/slices/app';

const MovieDetail: React.FC<{ movieId: number }> = ({ movieId }) => {
  const [movieData, setMovieData] = useState<any>(null)
  const dispatch = useAppDispatch()
  useEffect(() => {
    getMovieDetail(movieId).then(data => setMovieData(data))
  }, [movieId])

  const hours = movieData?.runtime ? Math.floor(movieData.runtime / 60) : 0
  const mins = movieData?.runtime ? movieData.runtime % 60 : 0
  const releaseDate = movieData?.release_date ? movieData.release_date.split('-')[0] : ''

  if (!movieData) return
  return (
    <ScrollView
      style={styles.movieSection}
    >
      <View style={styles.movieHeader}>
        <TouchableOpacity style={styles.backButton} onPress={()=> dispatch(setCurrentMovieId(null))} >
          <FontAwesomeIcon icon={faChevronLeft} color="white" />
        </TouchableOpacity>
        <AppText style={styles.movieTitle}>{movieData?.title ?? ""} ({releaseDate})</AppText>
      </View>
      <View style={styles.movieInfo}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movieData?.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.details}>
          <AppText style={styles.releaseInfo}>{movieData?.release_date} • {hours}h {mins}m</AppText>
          <AppText style={styles.genres}>{movieData?.genres.map((item: any) => item.name).join(", ")}</AppText>
          <AppText style={styles.status} i18nKey='status' />
          <AppText style={styles.language}>Original Language: {movieData?.production_countries[0]?.name}</AppText>
        </View>
      </View>

      <View style={styles.scoreSection}>
        <View style={styles.score}>
          <AppText style={styles.label} i18nKey='user_score' />
        </View>
      </View>
      <AppText style={styles.tagline}>{movieData?.tagline}</AppText>
      <View style={styles.overview}>
        <AppText style={styles.overviewTitle} i18nKey='overview' />
        <AppText style={styles.overviewText}>
          {movieData?.overview}
        </AppText>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  movieSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: Theme.colors.primary,
  },
  movieInfo: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ratingBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  ratingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  releaseInfo: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  genres: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  status: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  language: {
    color: 'white',
    fontSize: 14,
    opacity: 0.9,
  },
  scoreSection: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  score: {
    alignItems: 'center',
    marginRight: 32,
  },
  label: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  tagline: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 24,
    fontWeight: '400'
  },
  overview: {
    marginBottom: 24,
  },
  overviewTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  overviewText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 20,
    opacity: 0.9,
    fontWeight: '400'
  },
  movieHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  backButton: {
    marginRight: 16,
  },
  movieTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1
  },
})

export default MovieDetail