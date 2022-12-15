class Api {
	constructor(options) {
		this.headers = options.headers
		this.baseUrl = options.baseUrl
	}
	matchHistory = (playerId) => {
		const res = fetch(`${this.baseUrl}/players/${playerId}/history`, {
			method: 'GET',
			headers: this.headers
		});
		const data = res.json();
		if (!data) {
			return {
				notFound: true
			};
		}
		return data;
	}
	gameStats = (playerId, game) => {
		return fetch(`${this.baseUrl}/players/${playerId}/stats/${game}`, {
			method: 'GET',
			headers: this.headers
		})
	}
}

const api = new Api({
	baseUrl: 'https://open.faceit.com/data/v4',
	headers: {
		authorization: `Bearer ${process.env.FI_API_KEY}`,
		'Content-Type': 'application/json'
	}
})

export default api;
