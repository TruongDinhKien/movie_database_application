import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import _ from "lodash";
import { getMovieCredits } from "api";
import CardInfo from "./CardInfo";
import { Section } from "./Section";


type TopBilledCastProps = {
  movieId: number
}

export const TopBilledCast: FC<TopBilledCastProps> = ({ movieId }) => {
  const { data: movieCredits } = useQuery<Credit>({
    queryKey: ['movie-credits', movieId],
    queryFn: () => getMovieCredits(movieId)
  })

  const sortTopBilledCasts = _.sortBy(movieCredits?.cast, 'popularity').reverse()

  return (
    <Section title="top_billed_cast" >
      {sortTopBilledCasts.map((person, index) => (
        <CardInfo border key={index} uri={`https://image.tmdb.org/t/p/w500${person?.profile_path}`} title={person?.name} description={person?.character} />
      ))}
    </Section>
  )
}
