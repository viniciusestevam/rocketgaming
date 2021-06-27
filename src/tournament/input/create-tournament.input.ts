import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class CreateTournamentInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  maxParticipants: number;

  @Field()
  gameId: string;
}
