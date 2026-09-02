interface CoreRequestContext {
    userClient?: string;
    terminal?: string;
    sessionId?: string;
    channel?: string;
    origin?: string;
    channelTime?: string;
    ip?: string;
    platform?: string;
    deviceId?: string;
    token?: string;
    userId?: string;
}

export type { CoreRequestContext as C };
