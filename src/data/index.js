// utils.js
const FeatureCollection = {};

const importJSON = async (filename) => {
    const { default: data } = await import(`./${filename}.json`);
    return data;
};

const featureMapping = {
    _nul: 'abw', afg: 'afg', ago: 'ago', aia: 'aia', alb: 'alb', ald: 'ald', and: 'and', are: 'are', arg: 'arg', 
    world: 'world'
};

Object.entries(featureMapping).forEach(async ([key, value]) => {
    FeatureCollection[key] = await importJSON(value);
});

export const { _nul, abw, afg, ago, aia, alb, ald, and, are, arg, /* 나머지 국가 코드 */world } = FeatureCollection;
export default FeatureCollection;
