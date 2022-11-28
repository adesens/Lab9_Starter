function consoleLog() {
    console.log('Console Log Demo');
}

function consoleError() {
    console.error('Console Error Demo');
}

function consoleCount() {
    console.count('Console Count Button');
}

function consoleWarn() {
    console.warn('Console Warn Demo');
}

function consoleAssert() {
    console.assert(3 % 2 === 0, '3 is not an even number');
    console.assert(2 % 2 === 0, '2 is an even number');
}

function consoleClear() {
    console.clear();
}

function consoleDir() {

}

function consoleDirxml() {

}

function consoleGroupStart() {
    console.group();
}

function consoleGroupEnd() {
    console.groupEnd();
}



function consoleTable() {
    
    // function Dog(name, breed) {
    //     this.name = name;
    //     this.breed = breed;
    // }

    // const zoey = new Dog('Zoey', 'Goldendoodle');
    // const abba = new Dog('Abba', 'Giant Schnauzer');
    // const coco = new Dog('Coco', 'Shih Tzu');
    // const charlie = new Dog('Charlie', 'French Bulldog');

    const zoey = {name: 'Zoey', breed: 'Goldendoodle'};
    const abba = {name: 'Abba', breed: 'Giant Schnauzer'};
    const coco = {name: 'Coco', breed: 'Shih Tzu'};
    const charlie = {name: 'Charlie', breed: 'French Bulldog'};

    console.table([zoey, abba, coco, charlie]);
}

function startTimer() {
    console.time();
}

function endTimer() {
    console.timeEnd();
}

function consoleTrace() {

}

function triggerGlobalError() {

}