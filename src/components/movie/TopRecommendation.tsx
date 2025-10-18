import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import _ from "lodash";
import { getRecommendations } from "api";
import CardInfo from "./CardInfo";
import { Section } from "./Section";


type TopRecommendationProps = {
  movieId: number
}

export const TopRecommendation: FC<TopRecommendationProps> = ({ movieId }) => {
  const { data } = useQuery({
    queryKey: ['movie-recommendation', movieId],
    queryFn: () => getRecommendations(movieId),
    select: (data)=> data.results as Movie[]
  })

  const recommendations = _.sortBy(data, 'vote_average')
  console.log(recommendations,'recommendations');

  return (
    <Section title="top_rcm" >
      {recommendations.map((movie, index) => (
        <CardInfo variant="landscape" key={index} uri={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} title={movie?.title} description={`${_.round(movie.vote_average * 10)} %`} />
      ))}
    </Section>
  )
}
