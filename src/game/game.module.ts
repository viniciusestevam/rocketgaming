import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { GameResolver } from './game.resolver';

@Module({
  providers: [GameResolver],
  imports: [SharedModule],
})
export class GameModule {}
