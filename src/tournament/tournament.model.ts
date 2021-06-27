import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Game } from 'src/game/game.model';

@ObjectType()
export class Tournament {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Game)
  game: Game;

  // @Field(type => [Participant])
  // participants: [Participant];

  @Field(() => Int)
  maxParticipants: number;
}
