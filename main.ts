namespace SpriteKind {
    export const Gas = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    BULLETS = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    projectile2 = sprites.createProjectileFromSprite(BULLETS._pickRandom(), mySprite2, 0, -150)
    myEnemy.destroy(effects.spray, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Darts = [assets.image`Dart1`, assets.image`Dart2`, assets.image`Dart1`]
    projectile = sprites.createProjectileFromSprite(Darts._pickRandom(), mySprite, 0, -150)
    projectile.startEffect(effects.ashes, 500)
})
info.onCountdownEnd(function () {
    mySprite2.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    BULLETS = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
    projectile2 = sprites.createProjectileFromSprite(BULLETS._pickRandom(), mySprite2, 50, -150)
    mySprite2.startEffect(effects.spray)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbar.value = 100
})
info.onScore(20, function () {
    if (true) {
        mySprite2 = sprites.create(assets.image`Stealth`, SpriteKind.Player)
        mySprite2.follow(mySprite)
        mySprite2.sayText("Need Help!", 2000, false)
        info.changeScoreBy(5)
        info.startCountdown(20)
    }
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 200)
    scene.cameraShake(4, 500)
})
let myFuel: Sprite = null
let projectile: Sprite = null
let Darts: Image[] = []
let myEnemy: Sprite = null
let mySprite2: Sprite = null
let projectile2: Sprite = null
let BULLETS: Image[] = []
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
mySprite = sprites.create(assets.image`Rocket`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
assets.animation`Flying Rocket`,
100,
true
)
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, -25, 0)
let enemySpeed = 40
game.onUpdateInterval(5000, function () {
    myFuel = sprites.createProjectileFromSide(assets.image`Fuel`, 0, 80)
    myFuel.x = randint(5, 155)
    myFuel.setKind(SpriteKind.Gas)
})
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.createProjectileFromSide(assets.image`Blue Rocket`, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`Flying Spider`,
    100,
    true
    )
})
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSide(assets.image`Blue Rocket`, 0, 50)
    myEnemy.x = randint(5, 155)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`Flying Spider`,
    100,
    true
    )
})
forever(function () {
    if (info.score() == 10) {
        mySprite.sayText("+5 Level-Up Bonus", 2000, false)
        info.changeScoreBy(5)
        enemySpeed = 70
    }
})
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})
