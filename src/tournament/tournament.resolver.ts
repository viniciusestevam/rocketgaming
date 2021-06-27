import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TournamentResolver {
  @Query(() => Boolean)
  ok() {
    return true;
  }
}
