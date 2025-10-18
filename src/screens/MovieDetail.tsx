import React from 'react'
import {
  ScrollView,
} from 'react-native'

import CardMovieDetail from 'components/movie/CardMovieDetail';
import { TopBilledCast } from 'components/movie/TopBilledCast';
import { TopRecommendation } from 'components/movie/TopRecommendation';

const MovieDetail: React.FC<{ movieId: number }> = ({ movieId }) => {

  return (
    <ScrollView>
      <CardMovieDetail movieId={movieId} />
      <TopBilledCast movieId={movieId} />
      <TopRecommendation movieId={movieId}/>
    </ScrollView>
  )
}


export default MovieDetail