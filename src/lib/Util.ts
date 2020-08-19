import { URLSearchParams } from "url";

export const getApiURL = (applicationToken: string, options?: any, message?: string) => {
	if (message) return `https://api.pushover.net/1/messages.json?token=${applicationToken}&message=${message}&${new URLSearchParams(options).toString()}`;
	return `https://api.pushover.net/1/messages.json?token=${applicationToken}&${new URLSearchParams(options).toString()}`;
};