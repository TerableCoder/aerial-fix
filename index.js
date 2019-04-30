module.exports = function sign(dispatch) {
	mod.game.initialize(["me"]);
	dispatch.hook('S_AIR_REACTION_END', 1, (event) => {
		if(mod.game.me.is(event.gameId)) {
			event.loc.z += 4;
			return true;
		}
	});
}
