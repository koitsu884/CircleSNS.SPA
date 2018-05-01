export interface BusinessUser {
    id: number;
    username: string;
    displayName: string;
    establishedDate?: Date;
    city?: string;
    photoUrl: string;
    introduction: string;
    lastActive: Date;
    created: Date;
}
