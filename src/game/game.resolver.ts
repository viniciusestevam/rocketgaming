import { Mutation, Query, Args, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { Game } from './game.model';
import CreateGameInput from './input/create-game.input';

@Resolver()
export class GameResolver {
  constructor(private prisma: PrismaService) {}
  @Query(() => [Game])
  games() {
    return this.prisma.game.findMany({});
  }

  @Query(() => Game)
  game(@Args('id') id: string) {
    return this.prisma.game.findFirst({ where: { id } });
  }

  @Mutation(() => Boolean)
  async createGame(@Args('data') data: CreateGameInput) {
    await this.prisma.game.create({ data });
    return true;
  }
}
