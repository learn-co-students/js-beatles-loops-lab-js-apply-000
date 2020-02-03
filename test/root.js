global.expect = require('expect');

const babel = require('babel-core');
const jsdom = require('mocha-jsdom');
const path = require('path');

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

jsdom({
  src: babelResult.code
});
