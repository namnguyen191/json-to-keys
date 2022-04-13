import { set } from 'lodash';

type JsonObject = Record<string, any>;

const keyFromPath = (json: JsonObject, currentPath: string) => {
  const accumulatedKey: string = '';

  while (typeof json[currentPath] !== 'object') {}
};

// Interate through every single root values in the JSON object and execute the callback on each value
const iterateJson = (
  json: JsonObject,
  callback: (pathToRoot: string, rootVal: any) => void,
  accumulatedKey: string = ''
) => {
  for (const [key, val] of Object.entries(json)) {
    if (key === 'default') return;

    if (accumulatedKey === '') {
      accumulatedKey = key;
    } else {
      accumulatedKey += '.' + key;
    }
    if (typeof val !== 'object') {
      callback(accumulatedKey, val);
    } else {
      iterateJson(val, callback, accumulatedKey);
    }

    const segments = accumulatedKey.split('.');
    accumulatedKey = segments.splice(0, segments.length - 1).join('.');
  }
};

export const jsonToKeys = (json: any) => {
  const generatedObject = {};

  const createPathKey = (path: string) => {
    set(generatedObject, path, path);
  };

  iterateJson(json, createPathKey);

  return generatedObject;
};
