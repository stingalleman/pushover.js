import { MessageManager } from "./Message";

export class Pushover {
	message: MessageManager;

	constructor(applicationToken: string) {
		this.message = new MessageManager(applicationToken);
	}

	// public static init(snipeURL: string, accessToken: string) {
	// 	return new Snipe(accessToken);
	// }
}