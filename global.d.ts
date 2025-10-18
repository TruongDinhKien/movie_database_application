
type TVariant = "primary" | "secondary" | "tertiary" | "white";


interface Movie {
  id: number
  imdb_id: string
  adult: boolean
  backdrop_path: string
  budget: number
  homepage: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  vote_count: number
  vote_average: number
  belongs_to_collection: BelongsToCollection
  genres: Genre[]
  origin_country: string[]
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
}

interface DropdownOption {
  label: string;
  value: string;
}

interface Credit {
  id: number
  cast: Cast[]
  crew: Crew[]
}

interface Cast {
  id: number
  credit_id: string
  adult: boolean
  gender: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  order: number
}

interface Crew {
  id: number
  credit_id: string
  adult: boolean
  gender: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  department: string
  job: string
}

declare module '@env' {
  export const API_URL: string;
  export const ACCESS_TOKEN: string;
}