import { Member } from "./Member";

export interface AuthUser {
    tokenString: string;
    displayName: string;
    userType: string;
    relatedUserClassId: number;
}
