import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ComplaintInterface {
  id?: string;
  description: string;
  status: string;
  customer_id?: string;
  assigned_to?: string;
  created_at?: any;
  updated_at?: any;

  user_complaint_customer_idTouser?: UserInterface;
  user_complaint_assigned_toTouser?: UserInterface;
  _count?: {};
}

export interface ComplaintGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  customer_id?: string;
  assigned_to?: string;
}
