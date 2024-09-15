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