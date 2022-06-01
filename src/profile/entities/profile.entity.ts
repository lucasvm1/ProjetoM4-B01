import { Game } from "src/game/entities/game.entity";
import { User } from "src/user/entities/user.entity";

export class Profile {
  id?: string;
  name?: string;
  image?: string;
  user?: User;
  game?: Game[];
  createdAt?: Date;
  updatedAt?: Date;
}
