export interface MessagePostOptions {
	user?: string,
	attachment?: any,
	device?: any,
	title?: string,
	url?: string,
	url_title?: string,
	priority?: -2 | -1 | 1 | 2,
	sound?: "pushover" | "bike" | "bugle" | "cashregister" | "classical" | "cosmic" | "falling" | "gamelan" | "incoming" | "intermission" | "magic" | "mechanical" | "pianobar" | "siren" | "spacealarm" | "tugboat" | "alien" | "climb" | "persistent" | "echo" | "updown" | "vibrate" | "none",
	timestamp?: number,
	expire?: number,
	retry?: number,
	callback?: string
}
