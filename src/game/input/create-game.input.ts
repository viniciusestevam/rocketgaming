import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class CreateGameI {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
