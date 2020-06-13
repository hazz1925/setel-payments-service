import { Controller, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  @Post('verify')
  verify(): object {
    const random = Math.round(Math.random())
    let res

    switch (random) {
      case 0:
        res = { status: 'declined' }
        break
      case 1:
        res = { status: 'approved' }
        break
    }

    return res
  }
}
