interface Colorful {
    color: string;
}

interface Cube {
    side: number;
}

interface ColorfulCube extends Colorful, Cube {

}

const cc1: ColorfulCube = {
    color: "blau",
    side: 5,
};

type ColorfulCubeType = Colorful & Cube;
const cc2: ColorfulCubeType = {
    color: "rot",
    side: 6,
};

const cc3: Colorful & Cube = {
    color: "weiß",
    side: 1,
};

function workWithColorfulCube(cc: Colorful & Cube) {
    console.log(`Working with ColorfulCube with color ${cc.color} and side ${cc.side}`)
}

type ColorfulOrCube = Colorful | Cube;