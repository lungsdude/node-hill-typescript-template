// You have to use this weird empty import to make it work
import {} from "node-hill-types"

// Importing interface from other file
import { MyPlayer } from "./MyPlayer"

Game.on(GameEvents.InitialSpawn, (player: MyPlayer) => {
    console.log(`Value IsTypeScriptAwesome, by default, is undefined:\n${player.IsTypeScriptAwesome}`)
    player.IsTypeScriptAwesome = true
    console.log(`But now it is the way it should be:\n${player.IsTypeScriptAwesome}`)
})

