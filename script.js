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
}

function consoleClear() {
    console.clear();
}

function consoleDir() {
    console.dir(button);
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
    function deepest() {
        function deeper() {
            function deep() {
                console.trace();
            }
            deep();
        }
        deeper();
    }
    deepest();
}

function triggerGlobalError() {

}