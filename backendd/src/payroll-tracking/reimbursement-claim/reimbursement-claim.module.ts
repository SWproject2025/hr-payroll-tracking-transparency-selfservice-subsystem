import { Module } from '@nestjs/common';
import { ReimbursementClaimService } from './reimbursement-claim.service';
import { ReimbursementClaimController } from './reimbursement-claim.controller';

@Module({
  controllers: [ReimbursementClaimController],
  providers: [ReimbursementClaimService],
})
export class ReimbursementClaimModule {}
