import { URLSearchParams } from "url";

export const getApiURL = (applicationToken: string, options?: any) => {
	return `https://api.pushover.net/1/messages.json?token=${applicationToken}&${new URLSearchParams(options).toString()}`;
};