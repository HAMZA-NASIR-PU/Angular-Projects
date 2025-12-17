import { ApprovalStatus } from '../enums/approval-status.enum';

export const ApprovalStatusLabels: Record<ApprovalStatus, string> = {
  [ApprovalStatus.WAITING_FOR_APPROVAL]: 'Waiting for approval',
  [ApprovalStatus.APPROVED_BY_ADMIN]: 'Approved by Admin',
  [ApprovalStatus.REJECTED_BY_ADMIN]: 'Rejected by Admin',
};
