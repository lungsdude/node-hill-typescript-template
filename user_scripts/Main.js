"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Game.on(GameEvents.InitialSpawn, (player) => {
    console.log(`Value IsTypeScriptAwesome, by default, is undefined:\n${player.IsTypeScriptAwesome}`);
    player.IsTypeScriptAwesome = true;
    console.log(`But now it is the way it should be:\n${player.IsTypeScriptAwesome}`);
});
