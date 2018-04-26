export interface Member {
    id: number;
    username: string;
    displayName: string;
    dateOfBirth?: Date;
    gender: string;
    city: string;
    hometown: string;
    introduction: string;
    interests?: string;
    lastActive: Date;
}
