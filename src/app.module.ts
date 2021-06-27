import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TournamentModule } from './tournament/tournament.module';
import { GameModule } from './game/game.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TournamentModule,
    GameModule,
    SharedModule,
  ],
})
export class AppModule {}
