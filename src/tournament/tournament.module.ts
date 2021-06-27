import { Module } from '@nestjs/common';
import { TournamentResolver } from './tournament.resolver';

@Module({
  providers: [TournamentResolver],
})
export class TournamentModule {}
