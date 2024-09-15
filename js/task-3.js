'use strict'

function getElementWidth(content, padding, border) {
    function convertPxToNumber(pxString) {
        return parseFloat(pxString.replace('px', ''));
    }

    const contentWidth = convertPxToNumber(content);
    const paddingWidth = convertPxToNumber(padding);
    const borderWidth = convertPxToNumber(border);

    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
