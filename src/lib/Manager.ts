export class Manager {

	applicationToken: string;
	defaultUserToken: string;

	constructor(applicationToken: string, defaultUserToken?: string) {
		this.applicationToken = applicationToken;
		this.defaultUserToken = defaultUserToken;
	}
}