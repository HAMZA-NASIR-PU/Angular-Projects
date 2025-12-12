import { Status } from '../enums/status.enum';

export const StatusLabels: Record<Status, string> = {
  [Status.PENDING_APPROVAL]: 'Pending Approval',
  [Status.APPROVED]: 'Approved',
  [Status.REJECTED_BY_ADMIN]: 'Rejected by Admin',
};
