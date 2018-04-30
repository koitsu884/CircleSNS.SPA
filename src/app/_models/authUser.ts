import { Member } from "./Member";

export interface AuthUser {
    tokenString: string;
    userName: string;
    member: Member;
}
