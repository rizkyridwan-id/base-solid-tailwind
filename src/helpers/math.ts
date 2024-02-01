export class MathHelper {
	// note: inclusive max value
	static randBetween(min: number, max: number) {
		const delta = max - min
		const random = Math.floor(Math.random() * delta)
		return random + min
	}
}
