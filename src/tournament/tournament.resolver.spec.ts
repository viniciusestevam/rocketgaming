import { Test, TestingModule } from '@nestjs/testing';
import { TournamentResolver } from './tournament.resolver';

describe('TournamentResolver', () => {
  let resolver: TournamentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TournamentResolver],
    }).compile();

    resolver = module.get<TournamentResolver>(TournamentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
