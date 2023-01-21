interface INewMessage<TMessageKey, TMessagePayload> {
	type: TMessageKey;
	payload: TMessagePayload;
}

interface IUseMessage<TMessageKey, TMessagePayload> {
	types: TMessageKey[];
	callback: (message: INewMessage<TMessageKey, TMessagePayload>) => void;
}

export type { IUseMessage, INewMessage };
