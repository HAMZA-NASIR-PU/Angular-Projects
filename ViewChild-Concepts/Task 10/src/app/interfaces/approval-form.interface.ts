import { ApprovalStatus } from '../enums/approval-status.enum';

export interface ApprovalFormInterface {
  status: ApprovalStatus | null;
  comments: string;
  selectedDate: string;
}
