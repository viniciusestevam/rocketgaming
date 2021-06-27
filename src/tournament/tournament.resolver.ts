import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import CreateTournamentInput from './input/create-tournament.input';
import { Tournament } from './tournament.model';

@Resolver()
export class TournamentResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Boolean)
  async createTournament(@Args('data') data: CreateTournamentInput) {
    await this.prisma.tournament.create({ data });
    return true;
  }

  @Query(() => [Tournament])
  async tournaments() {
    return this.prisma.tournament.findMany({ include: { game: true } });
  }

  @Query(() => Tournament)
  async tournament(@Args('id') id: string) {
    return this.prisma.tournament.findFirst({ where: { id } });
  }
}
