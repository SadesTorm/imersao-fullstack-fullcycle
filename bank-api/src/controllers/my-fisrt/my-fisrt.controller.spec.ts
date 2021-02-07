import { Test, TestingModule } from '@nestjs/testing';
import { MyFisrtController } from './my-fisrt.controller';

describe('MyFisrtController', () => {
  let controller: MyFisrtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyFisrtController],
    }).compile();

    controller = module.get<MyFisrtController>(MyFisrtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
