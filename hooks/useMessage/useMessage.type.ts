interface INewMessage<TMessageKey, TMessagePayload> {
	key: TMessageKey;
	payload: TMessagePayload | undefined;
}

interface IUseMessage<TMessageKey, TMessagePayload> {
	keys: TMessageKey[];
	callback: (message: INewMessage<TMessageKey, TMessagePayload>) => void;
}

export type { IUseMessage, INewMessage };
