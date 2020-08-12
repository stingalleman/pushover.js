import fetch from "node-fetch";
import { Manager } from "../Manager";
import { MessagePostOptions } from "./Message";
import { getApiURL } from "../Util";

export class MessageManager extends Manager {

	/**
 	* Send a message
  * @param options options - Options to pass to the API
 */
	async send(options: MessagePostOptions) {
		const res = await fetch(getApiURL(this.applicationToken, options), {
			method: "POST"
		});
		return await res.json();
	}

}