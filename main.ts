function checkAnswer (text: string) {
    for (let value of arrayString) {
        if (text == value) {
            info.changeScoreBy(1)
            Correct = true
        }
    }
}
let Correct = false
let foodGuess = ""
let arrayString: string[] = []
info.setScore(0)
scene.setBackgroundImage(img`
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    2221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    1112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112221112
    `)
let picnic_food = sprites.create(img`
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
    `, SpriteKind.Player)
picnic_food.setImage(img`
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
    `)
let arrayImages = [
img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `,
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `,
img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `,
img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `,
img`
    ..........bbbbbb................
    .......bbb444444bb..............
    .....2244444ddd444b.............
    ....244444444dddd44e............
    ...244444444444ddd4be...........
    ..244444444444444d44be..........
    .2b444444444444444d4be..........
    .2b44444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bbb4444444444444444bbe.........
    2bb4b4444444444444444bbe........
    2bb4444444444444444444be........
    2bb44444444444444444444e........
    2bbb444bbb4444444444444e........
    22bbb444bb4bb444444444be........
    .2bbbbb44bbbb44444444bbe........
    .22bbbbbbbb44bbb444444bbe.......
    ..eeebbbbbbb44bbb444444be.......
    ...eeeeebbbbbbbb44b4444be.......
    .....eeeeee222bb44bbb4bbe.......
    .......eeeee222bb44bbbbee.......
    ............e222bbbbbbbec.......
    ..............ee2bbbbeebdb......
    .................eeeeecdddb.....
    .......................cd11bbbb.
    ........................cd111dbb
    .........................b11111c
    .........................c11dd1c
    .........................cd1dbc.
    .........................cb11c..
    ..........................ccc...
    ................................
    `
]
arrayString = [
"ham",
"apple",
"cake",
"strawberry",
"turkey"
]
while (0 <= info.score() && info.score() <= 15) {
    for (let value of arrayImages) {
        picnic_food.setImage(value)
        pause(500)
        picnic_food.setImage(img`
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
            `)
    }
    pause(200)
    foodGuess = game.askForString("what was one of the foods on the picnic blanket")
    checkAnswer(foodGuess)
}
if (info.score() >= 15) {
    game.over(true)
} else {
    game.over(false)
}
