import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [AppService],
})
export class AppModule {}
