import { MessageManager } from "./Message";

export class Pushover {
	message: MessageManager;

	constructor(applicationToken: string, defaultUserToken?: string) {
		this.message = new MessageManager(applicationToken, defaultUserToken);
	}

	// public static init(snipeURL: string, accessToken: string) {
	// 	return new Snipe(accessToken);
	// }
}