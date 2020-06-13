import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';

describe('PaymentsController', () => {
  let paymentsController: PaymentsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [],
    }).compile();

    paymentsController = app.get<PaymentsController>(PaymentsController);
  });

  describe('root', () => {
    it('should return a status of declined or approved', () => {
      const verified = paymentsController.verify()
      expect(verified).toHaveProperty('status')
      expect(['declined', 'approved']).toContain(verified.status)
    });
  });
});
