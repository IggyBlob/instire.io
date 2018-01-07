export class User {
    details: UserDetails;
    media: UserMediaItem[];
    score: number;
}

class APIMessage {
    status: boolean;
    message: string;
}

export class UserData extends APIMessage {
    user: UserDetails;
}

export class UserMediaData extends APIMessage {
   media: UserMediaItem[];
}

export class UserScoreData extends APIMessage {
    score: number;
}

export class AverageData extends APIMessage {
    average: number;
    count: number;
}

class UserDetails {
    username: string;
    full_name: string;
    profile_picture: string;
}

class UserMediaItem {
    type: string;
    src: string;
    likes: number;
    comments: number;
    cteatedAt: number;
}



