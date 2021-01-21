import { Test, TestingModule } from '@nestjs/testing';
import { MensajeControllerController } from './mensaje-controller.controller';

describe('MensajeControllerController', () => {
  let controller: MensajeControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensajeControllerController],
    }).compile();

    controller = module.get<MensajeControllerController>(MensajeControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
