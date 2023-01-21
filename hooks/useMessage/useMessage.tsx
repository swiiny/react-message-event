import { useCallback, useEffect } from 'react';
import { INewMessage, IUseMessage } from './useMessage.type';

/**
 * This hook adds a message listener to the window object.  It accepts an array of keys of messages to listen for and a callback function to handle the message.  When the message event is fired, the hook checks the type of the message to see if it is in the array of types to listen for.  If it is, the callback function is called.  The hook returns an empty object.
 * @param keys: IUseMessage['keys'] - an array of keys of messages to listen for
 * @param callback: (message: INewMessage) => void - a callback function to handle the message
 */
function useMessage<TMessageKey, TMessagePayload>(
	types: IUseMessage<TMessageKey, TMessagePayload>['keys'],
	callback: IUseMessage<TMessageKey, TMessagePayload>['callback']
) {
	const onMessage = useCallback(
		(event: MessageEvent<INewMessage<TMessageKey, TMessagePayload>>) => {
			if (types.includes(event.data.key)) {
				callback(event.data);
			}
		},
		[types, callback]
	);

	useEffect(() => {
		// add event listener
		window.addEventListener('message', onMessage);

		// remove event listener
		return () => {
			window.removeEventListener('message', onMessage);
		};
	}, [onMessage]);
}

export { useMessage };
