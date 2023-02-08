// File which contains MyPlayer interface, which is extended version of Player class

// AFAIK using "class" instead of "interface" is impossible since Player class just doesn't exist during runtime, due to node-hill vm shit
// Due to this being interface, all custom data is defaulted to undefined and this default cannot be changed
export interface MyPlayer extends Player
{
    IsTypeScriptAwesome: boolean
}