export interface Member {
    id: number;
    username: string;
    displayName: string;
    dateOfBirth?: Date;
    gender: string;
    city?: string;
    homeTown?: string;
    photoUrl: string;
    introduction: string;
    interests: string;
    lastActive: Date;
    created: Date;
}
