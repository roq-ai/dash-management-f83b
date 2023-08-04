import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BacklinkInterface {
  id?: string;
  type: string;
  url: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BacklinkGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  url?: string;
  user_id?: string;
}
