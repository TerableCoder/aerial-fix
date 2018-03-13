module.exports = function sign(dispatch) {
	let gameId;
	
	dispatch.hook('S_LOGIN', 9, (event) => {
		gameId = event.gameId;
	});
	
	dispatch.hook('S_AIR_REACTION_END', 1, (event) => {
		if(gameId.toString() == event.gameId.toString()) {
			event.loc.z += 2;
			return true;
		}
	});
}
