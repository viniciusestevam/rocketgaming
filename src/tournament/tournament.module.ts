import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { TournamentResolver } from './tournament.resolver';

@Module({
  providers: [TournamentResolver],
  imports: [SharedModule],
})
export class TournamentModule {}
