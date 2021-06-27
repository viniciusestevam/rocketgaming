import { Test, TestingModule } from '@nestjs/testing';
import { GameResolver } from './game.resolver';

describe('GameResolver', () => {
  let resolver: GameResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameResolver],
    }).compile();

    resolver = module.get<GameResolver>(GameResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
