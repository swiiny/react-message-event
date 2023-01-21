import { INewMessage } from './useMessage.type';

/**
 * send a message to the parent window
 * @param message the message to send
 * @param key the key of the message
 */
function sendMessage<TMessageKey, TMessagePayload>(message: INewMessage<TMessageKey, TMessagePayload>) {
	try {
		if (typeof window !== 'undefined') {
			window.postMessage(message, '*');
		}
	} catch (err) {
		console.error(err);
	}
}

export { sendMessage };
