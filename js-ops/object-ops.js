function ObjectFreeze(){
    // without use strict freeze doesn't work
    "use strict";
    const MATH_CONST = {
        PI:3.14
    };
    Object.freeze(MATH_CONST);

    try {
        MATH_CONST.PI = 2;
    } catch (error) {
        console.log(error);
    }

    return MATH_CONST.PI;
}

const PI = ObjectFreeze();

console.log(PI);