import { Genre } from "src/genre/entities/genre.entity";

export class Game {
  id?: string;
  name?: string;
  image?: string;
  year?: number;
  description?: string;
  imdbScore?: number;
  youtubeUrl?: string;
  gameplayUrl?: string;
  genre?: Genre[];
}
