import { coreAgency } from "./instances";

export type FetchArtistsRequestDto = {
  skip: number;
  limit: number
}

export type FetchArtistsResponseDto = {
  items: Artist[],
  total: number;
  totalPages: number;
}

export type Artist = {
  uuid: string;
  type: string;
  popularity: string;
  name: string;
  description: string;
  followers: string;
  genres: string[];
  images: string[];
}

export const fetchArtists = async (params: FetchArtistsRequestDto): Promise<FetchArtistsResponseDto> => {
  return (await coreAgency.get('/artists', { params })).data
}