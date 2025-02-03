import { Test, TestingModule } from '@nestjs/testing';
import { NewCostService } from './new-cost.service';

describe('NewCostService', () => {
  let service: NewCostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewCostService],
    }).compile();

    service = module.get<NewCostService>(NewCostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
