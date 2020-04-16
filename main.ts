namespace SpriteKind {
    export const car = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    game.over(true)
})
let car = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 . . 
. . . . . 7 7 7 7 7 7 7 7 9 6 . 
. . . . 7 7 7 7 7 7 7 7 7 9 c 6 
. . d 7 7 7 7 7 9 9 9 9 9 9 c c 
. d 7 9 9 9 7 8 8 8 8 8 8 8 6 c 
. 7 9 9 9 9 8 8 9 9 9 8 9 9 8 6 
. 7 9 9 9 9 8 9 9 9 9 8 9 9 9 8 
. 4 4 4 4 9 6 6 6 6 6 8 6 6 6 8 
. 4 5 5 4 8 8 f f f f f 8 8 8 8 
. 5 5 4 8 8 8 8 8 f 8 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f 8 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
car.setPosition(25, 86)
controller.moveSprite(car)
scene.cameraFollowSprite(car)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000181814050303030306000000000000001818140113131313010000000000000018181501130a0c13010000000000000017161601130d0f13010000000000000017050304130d0f13010000000000000017011113130d0f130100000000000000001911090a08080c0100000000000000000111090d08080f0100000000000000000111090e121210010000000000000000011111111111110100000000000000000203030303030304000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . 2 . . . . . . 2 . . . . . . 
. . 2 . 2 2 2 2 . 2 . . . . . . 
. . 2 . 2 . . 2 . 2 . . . . . . 
2 2 2 . 2 . . 2 . 2 . . . . . . 
2 . . . 2 . . 2 . 2 . . . . . . 
2 . 2 2 2 . . 2 . 2 . . . . . . 
2 . 2 . . . . 2 . 2 . . . . . . 
2 . 2 . . . . 2 . 2 . . . . . . 
2 . 2 . . . . 2 . 2 . . . . . . 
2 . 2 2 2 2 2 2 . 2 . . . . . . 
2 . . . . . . . . 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.builtin.brick,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tilePath8,sprites.builtin.forestTiles0,sprites.builtin.crowd2,sprites.builtin.crowd8,sprites.builtin.crowd7,sprites.builtin.crowd6,sprites.castle.saplingOak,sprites.dungeon.hazardSpike],
            TileScale.Sixteen
        ))
info.startCountdown(10)
