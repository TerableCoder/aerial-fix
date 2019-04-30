module.exports = function sign(dispatch) {
	dispatch.game.initialize(["me"]);
	dispatch.hook('S_AIR_REACTION_END', 1, (event) => {
		if(dispatch.game.me.is(event.gameId)) {
			event.loc.z += 4;
			return true;
		}
	});
}
