import React from 'react'
import {
  View,
  StyleSheet,
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
import AnimatedProgressWheel from 'react-native-progress-wheel';
import _, { get } from 'lodash';
import AppButton from 'components/cores/AppButton';
import { useQuery } from '@tanstack/react-query';

const CardMovieDetail: React.FC<{ movieId: number }> = ({ movieId }) => {
  const dispatch = useAppDispatch()

  const { data: movieData } = useQuery<Movie>({
    queryKey: ['movie-detail', movieId],
    queryFn: () => getMovieDetail(movieId)
  })

  const hours = movieData?.runtime ? Math.floor(movieData.runtime / 60) : 0
  const mins = movieData?.runtime ? movieData.runtime % 60 : 0
  const releaseDate = movieData?.release_date ? movieData.release_date.split('-')[0] : ''
  const percentage = _.round((movieData?.vote_average || 0) * 10)

  return (
    <View
      style={styles.movie_section}
    >
      <View style={styles.movie_header}>
        <TouchableOpacity style={styles.backButton} onPress={() => dispatch(setCurrentMovieId(null))} >
          <FontAwesomeIcon icon={faChevronLeft} color="white" size={20} />
        </TouchableOpacity>
        <AppText style={styles.movieTitle}>{get(movieData, 'title') ?? ""} ({releaseDate})</AppText>
      </View>
      <View style={styles.movie_info}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movieData?.poster_path}` }}
          style={styles.poster}
        />
        <View style={styles.details}>
          <AppButton i18nKey='PG13' variant="primary" style={styles.btn} />
          <AppText variant="white">{get(movieData, 'release_date')} • {hours}h {mins}m</AppText>
          <AppText variant="white">{movieData?.genres.map((item: any) => item.name).join(", ")}</AppText>
          <AppText variant="white">Status: {movieData?.status}</AppText>
          <AppText variant="white">Original Language: {movieData?.production_countries[0]?.name}</AppText>
        </View>
      </View>

      <View style={styles.score_section}>
        <View style={styles.score}>
          <View style={styles.progres_wheel}>
            <AnimatedProgressWheel
              size={50}
              width={5}
              color={Theme.colors.green}
              progress={percentage}
              showProgressLabel
              showPercentageSymbol
              labelStyle={styles.labelStyle}
              backgroundColor={Theme.colors.secondary}
            />
          </View>
          <AppText style={styles.label} i18nKey='user_score' />
        </View>
      </View>
      <AppText style={styles.tagline}>{movieData?.tagline}</AppText>
      <View style={styles.overview}>
        <AppText style={styles.overview_title} i18nKey='overview' />
        <AppText style={styles.overview_text}>
          {movieData?.overview}
        </AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: { borderWidth: 1, borderColor: Theme.colors.white, width: 50, alignItems: 'center', borderRadius: Theme.rounds.xSmall },
  labelStyle: { color: "white", fontSize: Theme.fontSizes.medium, fontWeight: '800' },
  movie_section: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: Theme.colors.primary,
  },
  movie_info: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  poster: {
    width: 80,
    height: 110,
    borderRadius: 8,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
  },
  score_section: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  progres_wheel: {
    backgroundColor: Theme.colors.tertiary,
    padding: Theme.spacing.space_1,
    borderRadius: 100
  },
  score: {
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
    margin: Theme.spacing.space_0_5
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
  overview_title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  overview_text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 20,
    opacity: 0.9,
    fontWeight: '400'
  },
  movie_header: {
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

export default CardMovieDetail