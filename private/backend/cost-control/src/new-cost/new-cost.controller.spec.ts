import { Test, TestingModule } from '@nestjs/testing';
import { NewCostController } from './new-cost.controller';

describe('NewCostController', () => {
  let controller: NewCostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewCostController],
    }).compile();

    controller = module.get<NewCostController>(NewCostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
