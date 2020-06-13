import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments.controller';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [],
})
export class AppModule {}
