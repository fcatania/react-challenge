import { User } from './User';

export type Project = {
  id: number;
  name: string;
  description: string;
  user: User;
}