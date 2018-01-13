export class User {
    details: UserDetails;
    media: UserMediaItem[];
    metrics: UserMetricsData;
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

export class UserMetricsData extends APIMessage {
    raw: RawMetrics;
    compiled: CompiledMetrics;
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

class RawMetrics {
    media: number;
    followedBy: number;
    following: number;
}

class CompiledMetrics {
    usersAll: number;
    usersLower: number;
    activity: number;
    fame: number;
    postFrequency: number;
    score: number;
}



