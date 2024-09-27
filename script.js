window.onload = function () {
    checkSolved()
}

const cubo = [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5]]
const solvedFaces = new Array()
const moves = [r, r1, l, l1, u, u1, d, d1, f, f1, b, b1]

function checkSolved() {
    for (let index = 0; index < cubo.length; index++) {
        const color = cubo[index][0];
        solvedFaces[index] = cubo[index].every(el => el === color)
    }
    if (solvedFaces.every(el => el === true)) {
        document.getElementById('solved').innerHTML = true
        return true
    }
    else {
        document.getElementById('solved').innerHTML = false
        return false
    }
}

function setColor(id, color) {
    document.getElementById(id).attributes.color.value = color
}

function getColor(id) {
    return document.getElementById(id).attributes.color.value
}

function r() {
    let tempColor = getColor('03')
    setColor('03', getColor('43'))
    setColor('43', getColor('53'))
    setColor('53', getColor('23'))
    setColor('23', tempColor)
    let temp03 = cubo[0][3]
    cubo[0][3] = cubo[4][3]
    cubo[4][3] = cubo[5][3]
    cubo[5][3] = cubo[2][3]
    cubo[2][3] = temp03

    tempColor = getColor('01')
    setColor('01', getColor('41'))
    setColor('41', getColor('51'))
    setColor('51', getColor('21'))
    setColor('21', tempColor)
    let temp01 = cubo[0][1]
    cubo[0][1] = cubo[4][1]
    cubo[4][1] = cubo[5][1]
    cubo[5][1] = cubo[2][1]
    cubo[2][1] = temp01

    tempColor = getColor('10')
    setColor('10', getColor('12'))
    setColor('12', getColor('13'))
    setColor('13', getColor('11'))
    setColor('11', tempColor)
    let temp10 = cubo[1][0]
    cubo[1][0] = cubo[1][2]
    cubo[1][2] = cubo[1][3]
    cubo[1][3] = cubo[1][1]
    cubo[1][1] = temp10

    checkSolved()
}

function r1() {
    let tempColor = getColor('03')
    setColor('03', getColor('23'))
    setColor('23', getColor('53'))
    setColor('53', getColor('43'))
    setColor('43', tempColor)
    let temp03 = cubo[0][3]
    cubo[0][3] = cubo[2][3]
    cubo[2][3] = cubo[5][3]
    cubo[5][3] = cubo[4][3]
    cubo[4][3] = temp03

    tempColor = getColor('01')
    setColor('01', getColor('21'))
    setColor('21', getColor('51'))
    setColor('51', getColor('41'))
    setColor('41', tempColor)
    let temp01 = cubo[0][1]
    cubo[0][1] = cubo[2][1]
    cubo[2][1] = cubo[5][1]
    cubo[5][1] = cubo[4][1]
    cubo[4][1] = temp01

    tempColor = getColor('10')
    setColor('10', getColor('11'))
    setColor('11', getColor('13'))
    setColor('13', getColor('12'))
    setColor('12', tempColor)
    let temp10 = cubo[1][0]
    cubo[1][0] = cubo[1][1]
    cubo[1][1] = cubo[1][3]
    cubo[1][3] = cubo[1][2]
    cubo[1][2] = temp10

    checkSolved()
}

function l() {
    let tempColor = getColor('02')
    setColor('02', getColor('42'))
    setColor('42', getColor('52'))
    setColor('52', getColor('22'))
    setColor('22', tempColor)
    let temp02 = cubo[0][2]
    cubo[0][2] = cubo[4][2]
    cubo[4][2] = cubo[5][2]
    cubo[5][2] = cubo[2][2]
    cubo[2][2] = temp02

    tempColor = getColor('00')
    setColor('00', getColor('40'))
    setColor('40', getColor('50'))
    setColor('50', getColor('20'))
    setColor('20', tempColor)
    let temp00 = cubo[0][0]
    cubo[0][0] = cubo[4][0]
    cubo[4][0] = cubo[5][0]
    cubo[5][0] = cubo[2][0]
    cubo[2][0] = temp00

    tempColor = getColor('30')
    setColor('30', getColor('31'))
    setColor('31', getColor('33'))
    setColor('33', getColor('32'))
    setColor('32', tempColor)
    let temp30 = cubo[3][0]
    cubo[3][0] = cubo[3][1]
    cubo[3][1] = cubo[3][3]
    cubo[3][3] = cubo[3][2]
    cubo[3][2] = temp30

    checkSolved()
}

function l1() {
    let tempColor = getColor('02')
    setColor('02', getColor('22'))
    setColor('22', getColor('52'))
    setColor('52', getColor('42'))
    setColor('42', tempColor)
    let temp02 = cubo[0][2]
    cubo[0][2] = cubo[2][2]
    cubo[2][2] = cubo[5][2]
    cubo[5][2] = cubo[4][2]
    cubo[4][2] = temp02

    tempColor = getColor('00')
    setColor('00', getColor('20'))
    setColor('20', getColor('50'))
    setColor('50', getColor('40'))
    setColor('40', tempColor)
    let temp00 = cubo[0][0]
    cubo[0][0] = cubo[2][0]
    cubo[2][0] = cubo[5][0]
    cubo[5][0] = cubo[4][0]
    cubo[4][0] = temp00

    tempColor = getColor('30')
    setColor('30', getColor('32'))
    setColor('32', getColor('33'))
    setColor('33', getColor('31'))
    setColor('31', tempColor)
    let temp30 = cubo[3][0]
    cubo[3][0] = cubo[3][2]
    cubo[3][2] = cubo[3][3]
    cubo[3][3] = cubo[3][1]
    cubo[3][1] = temp30

    checkSolved()
}

/*** 1D END */

function u() {
    let tempColor = getColor('01')
    setColor('01', getColor('11'))
    setColor('11', getColor('52'))
    setColor('52', getColor('31'))
    setColor('31', tempColor)
    let temp01 = cubo[0][1]
    cubo[0][1] = cubo[1][1]
    cubo[1][1] = cubo[5][2]
    cubo[5][2] = cubo[3][1]
    cubo[3][1] = temp01

    tempColor = getColor('00')
    setColor('00', getColor('10'))
    setColor('10', getColor('53'))
    setColor('53', getColor('30'))
    setColor('30', tempColor)
    let temp00 = cubo[0][0]
    cubo[0][0] = cubo[1][0]
    cubo[1][0] = cubo[5][3]
    cubo[5][3] = cubo[3][0]
    cubo[3][0] = temp00

    tempColor = getColor('20')
    setColor('20', getColor('22'))
    setColor('22', getColor('23'))
    setColor('23', getColor('21'))
    setColor('21', tempColor)
    let temp20 = cubo[2][0]
    cubo[2][0] = cubo[2][2]
    cubo[2][2] = cubo[2][3]
    cubo[2][3] = cubo[2][1]
    cubo[2][1] = temp20

    checkSolved()
}

function u1() {
    let tempColor = getColor('01')
    setColor('01', getColor('31'))
    setColor('31', getColor('52'))
    setColor('52', getColor('11'))
    setColor('11', tempColor)
    let temp01 = cubo[0][1]
    cubo[0][1] = cubo[3][1]
    cubo[3][1] = cubo[5][2]
    cubo[5][2] = cubo[1][1]
    cubo[1][1] = temp01

    tempColor = getColor('00')
    setColor('00', getColor('30'))
    setColor('30', getColor('53'))
    setColor('53', getColor('10'))
    setColor('10', tempColor)
    let temp00 = cubo[0][0]
    cubo[0][0] = cubo[3][0]
    cubo[3][0] = cubo[5][3]
    cubo[5][3] = cubo[1][0]
    cubo[1][0] = temp00

    tempColor = getColor('20')
    setColor('20', getColor('21'))
    setColor('21', getColor('23'))
    setColor('23', getColor('22'))
    setColor('22', tempColor)
    let temp20 = cubo[2][0]
    cubo[2][0] = cubo[2][1]
    cubo[2][1] = cubo[2][3]
    cubo[2][3] = cubo[2][2]
    cubo[2][2] = temp20

    checkSolved()
}

function d() {
    let tempColor = getColor('03')
    setColor('03', getColor('13'))
    setColor('13', getColor('50'))
    setColor('50', getColor('33'))
    setColor('33', tempColor)
    let temp03 = cubo[0][3]
    cubo[0][3] = cubo[1][3]
    cubo[1][3] = cubo[5][0]
    cubo[5][0] = cubo[3][3]
    cubo[3][3] = temp03

    tempColor = getColor('02')
    setColor('02', getColor('12'))
    setColor('12', getColor('51'))
    setColor('51', getColor('32'))
    setColor('32', tempColor)
    let temp02 = cubo[0][2]
    cubo[0][2] = cubo[1][2]
    cubo[1][2] = cubo[5][1]
    cubo[5][1] = cubo[3][2]
    cubo[3][2] = temp02

    tempColor = getColor('40')
    setColor('40', getColor('41'))
    setColor('41', getColor('43'))
    setColor('43', getColor('42'))
    setColor('42', tempColor)
    let temp40 = cubo[4][0]
    cubo[4][0] = cubo[4][1]
    cubo[4][1] = cubo[4][3]
    cubo[4][3] = cubo[4][2]
    cubo[4][2] = temp40

    checkSolved()
}

function d1() {
    let tempColor = getColor('03')
    setColor('03', getColor('33'))
    setColor('33', getColor('50'))
    setColor('50', getColor('13'))
    setColor('13', tempColor)
    let temp03 = cubo[0][3]
    cubo[0][3] = cubo[3][3]
    cubo[3][3] = cubo[5][0]
    cubo[5][0] = cubo[1][3]
    cubo[1][3] = temp03

    tempColor = getColor('02')
    setColor('02', getColor('32'))
    setColor('32', getColor('51'))
    setColor('51', getColor('12'))
    setColor('12', tempColor)
    let temp02 = cubo[0][2]
    cubo[0][2] = cubo[3][2]
    cubo[3][2] = cubo[5][1]
    cubo[5][1] = cubo[1][2]
    cubo[1][2] = temp02

    tempColor = getColor('40')
    setColor('40', getColor('42'))
    setColor('42', getColor('43'))
    setColor('43', getColor('41'))
    setColor('41', tempColor)
    let temp40 = cubo[4][0]
    cubo[4][0] = cubo[4][2]
    cubo[4][2] = cubo[4][3]
    cubo[4][3] = cubo[4][1]
    cubo[4][1] = temp40

    checkSolved()
}

/*** 2D END */

function f() {
    let tempColor = getColor('23')
    setColor('23', getColor('31'))
    setColor('31', getColor('40'))
    setColor('40', getColor('12'))
    setColor('12', tempColor)
    let temp23 = cubo[2][3]
    cubo[2][3] = cubo[3][1]
    cubo[3][1] = cubo[4][0]
    cubo[4][0] = cubo[1][2]
    cubo[1][2] = temp23

    tempColor = getColor('22')
    setColor('22', getColor('33'))
    setColor('33', getColor('41'))
    setColor('41', getColor('10'))
    setColor('10', tempColor)
    let temp22 = cubo[2][2]
    cubo[2][2] = cubo[3][3]
    cubo[3][3] = cubo[4][1]
    cubo[4][1] = cubo[1][0]
    cubo[1][0] = temp22

    tempColor = getColor('00')
    setColor('00', getColor('02'))
    setColor('02', getColor('03'))
    setColor('03', getColor('01'))
    setColor('01', tempColor)
    let temp00 = cubo[0][0]
    cubo[0][0] = cubo[0][2]
    cubo[0][2] = cubo[0][3]
    cubo[0][3] = cubo[0][1]
    cubo[0][1] = temp00

    checkSolved()
}

function f1() {
    let tempColor = getColor('23')
    setColor('23', getColor('12'))
    setColor('12', getColor('40'))
    setColor('40', getColor('31'))
    setColor('31', tempColor)
    let temp23 = cubo[2][3]
    cubo[2][3] = cubo[1][2]
    cubo[1][2] = cubo[4][0]
    cubo[4][0] = cubo[3][1]
    cubo[3][1] = temp23

    tempColor = getColor('22')
    setColor('22', getColor('10'))
    setColor('10', getColor('41'))
    setColor('41', getColor('33'))
    setColor('33', tempColor)
    let temp22 = cubo[2][2]
    cubo[2][2] = cubo[1][0]
    cubo[1][0] = cubo[4][1]
    cubo[4][1] = cubo[3][3]
    cubo[3][3] = temp22

    tempColor = getColor('00')
    setColor('00', getColor('01'))
    setColor('01', getColor('03'))
    setColor('03', getColor('02'))
    setColor('02', tempColor)
    let temp00 = cubo[0][0]
    cubo[0][0] = cubo[0][1]
    cubo[0][1] = cubo[0][3]
    cubo[0][3] = cubo[0][2]
    cubo[0][2] = temp00

    checkSolved()
}

function b() {
    let tempColor = getColor('21')
    setColor('21', getColor('30'))
    setColor('30', getColor('42'))
    setColor('42', getColor('13'))
    setColor('13', tempColor)
    let temp21 = cubo[2][1]
    cubo[2][1] = cubo[3][0]
    cubo[3][0] = cubo[4][2]
    cubo[4][2] = cubo[1][3]
    cubo[1][3] = temp21

    tempColor = getColor('20')
    setColor('20', getColor('32'))
    setColor('32', getColor('43'))
    setColor('43', getColor('11'))
    setColor('11', tempColor)
    let temp20 = cubo[2][0]
    cubo[2][0] = cubo[3][2]
    cubo[3][2] = cubo[4][3]
    cubo[4][3] = cubo[1][1]
    cubo[1][1] = temp20

    tempColor = getColor('50')
    setColor('50', getColor('51'))
    setColor('51', getColor('53'))
    setColor('53', getColor('52'))
    setColor('52', tempColor)
    let temp50 = cubo[5][0]
    cubo[5][0] = cubo[5][1]
    cubo[5][1] = cubo[5][3]
    cubo[5][3] = cubo[5][2]
    cubo[5][2] = temp50

    checkSolved()
}

function b1() {
    let tempColor = getColor('21')
    setColor('21', getColor('13'))
    setColor('13', getColor('42'))
    setColor('42', getColor('30'))
    setColor('30', tempColor)
    let temp21 = cubo[2][1]
    cubo[2][1] = cubo[1][3]
    cubo[1][3] = cubo[4][2]
    cubo[4][2] = cubo[3][0]
    cubo[3][0] = temp21

    tempColor = getColor('20')
    setColor('20', getColor('11'))
    setColor('11', getColor('43'))
    setColor('43', getColor('32'))
    setColor('32', tempColor)
    let temp20 = cubo[2][0]
    cubo[2][0] = cubo[1][1]
    cubo[1][1] = cubo[4][3]
    cubo[4][3] = cubo[3][2]
    cubo[3][2] = temp20

    tempColor = getColor('50')
    setColor('50', getColor('52'))
    setColor('52', getColor('53'))
    setColor('53', getColor('51'))
    setColor('51', tempColor)
    let temp50 = cubo[5][0]
    cubo[5][0] = cubo[5][2]
    cubo[5][2] = cubo[5][3]
    cubo[5][3] = cubo[5][1]
    cubo[5][1] = temp50

    checkSolved()
}
/** 3D ALL DONE */

function shuffle() {
    const movesNumber = Math.floor(Math.random() * 10) + 20
    let lastMoves = undefined;

    for (let n = 0; n < movesNumber; n++) {
        const allowedMoves = moves.filter(el => el !== getInverse(lastMoves))
        const executeMoveNumber = Math.floor(Math.random() * (lastMoves !== undefined ? 11 : 12))
        allowedMoves[executeMoveNumber]()
        lastMoves = allowedMoves[executeMoveNumber]
    }
}

function getInverse(move) {
    switch (move) {
        case r: return r1
        case r1: return r
        case l: return l1
        case l1: return l
        case u: return u1
        case u1: return u
        case d: return d1
        case d1: return d
        case f1: return f
        case b: return b1
        case b1: return b
    }

}

function solve() {
    let lastMoves = undefined;
    while (!checkSolved()) {
        const allowedMoves = moves.filter(el => el !== getInverse(lastMoves))
        const executeMoveNumber = Math.floor(Math.random() * (lastMoves !== undefined ? 11 : 12))
        allowedMoves[executeMoveNumber]()
        lastMoves = allowedMoves[executeMoveNumber]
    }
}