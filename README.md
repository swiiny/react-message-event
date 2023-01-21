# react-message-event

`react-message-event` is a React hook that allows communication between components using the native `message` event listener. This hook can be used to send and receive messages with specific keys and payloads. This library uses the `postMessage` function to communicate between components, which is only possible between components that are in the same window or iframe. With this library, you can easily send messages between sibling and parent-child components, without the need to pass props down through multiple levels of components.

## Installation

`npm i react-message-event`

## Usage

`useMessage<T = any, P = any>(keys: string[], callback: (message: Message<T, P>) => void): void`
The `useMessage` hook listens for messages with the specified keys and calls the provided callback with the received message. The message is of the `Message<T, P>` type, where `T` is the type of the key and `P` is the type of the payload.

`sendMessage<T = any, P = any>(message: Message<T, P>): void`
The `sendMessage` function sends a message to any component that is listening for messages with the same key as the sent message. The message is of the `Message<T, P>` type, where `T` is the type of the key and `P` is the type of the payload.

## Example

In this example, when the button in `ComponentB` is clicked, it sends a message with the key `set-id` and a payload of 1. `ComponentA` is listening for messages with the key `set-id` and will receive the message and call the provided callback with the received message.

`./ComponentA.ts`

```tsx
import React from 'react';
import { useMessage } from 'react-message-event';

const ComponentA: FC = () => {
	// will receive only message with key set-id
	useMessage<string, number>(['set-id'], (message) => {
		const { key, payload } = message;

		// do something with the message
	});

	return <div />;
};
```

`./ComponentB.ts`

```tsx
import React from 'react';
import { sendMessage } from 'react-message-event';

const ComponentB: FC = () => {
	const handleClick = () => sendMessage({ key: 'set-id', payload: 1 });

	return (
		<div>
			<button onClick={handleClick}>Send Message</button>
		</div>
	);
};
```

## Note

This library uses the native message event listener and the postMessage function to communicate between components. This communication is only possible between components that are in the same window or iframe.
