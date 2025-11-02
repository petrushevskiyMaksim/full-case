import { User } from '@/entities/User';

export interface Commentary {
    id: string;
    user: User;
    text: string;
}
