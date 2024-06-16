import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  background_image_additional: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
