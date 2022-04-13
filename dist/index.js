"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToKeys = void 0;
const lodash_1 = require("lodash");
const keyFromPath = (json, currentPath) => {
    const accumulatedKey = '';
    while (typeof json[currentPath] !== 'object') { }
};
// Interate through every single root values in the JSON object and execute the callback on each value
const iterateJson = (json, callback, accumulatedKey = '') => {
    for (const [key, val] of Object.entries(json)) {
        if (key === 'default')
            return;
        if (accumulatedKey === '') {
            accumulatedKey = key;
        }
        else {
            accumulatedKey += '.' + key;
        }
        if (typeof val !== 'object') {
            callback(accumulatedKey, val);
        }
        else {
            iterateJson(val, callback, accumulatedKey);
        }
        const segments = accumulatedKey.split('.');
        accumulatedKey = segments.splice(0, segments.length - 1).join('.');
    }
};
const jsonToKeys = (json) => {
    const generatedObject = {};
    const createPathKey = (path) => {
        (0, lodash_1.set)(generatedObject, path, path);
    };
    iterateJson(json, createPathKey);
    return generatedObject;
};
exports.jsonToKeys = jsonToKeys;
//# sourceMappingURL=index.js.map