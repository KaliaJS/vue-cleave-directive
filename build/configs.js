const path = require('path')
const buble = require('rollup-plugin-buble')
const flow = require('rollup-plugin-flow-no-whitespace')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')
const package = require('../package.json')
const version = process.env.VERSION || package.version
const author = process.env.AUTHOR || package.author
const banner =
`/*!
  * vue-cleave-directive v${version}
  * (c) ${new Date().getFullYear()} ${author}
  * @license ISC
  */`

const resolve = _path => path.resolve(__dirname, '../', _path)

module.exports = [
  // browser dev
  {
    file: resolve('dist/vue-cleave-directive.js'),
    format: 'umd',
    env: 'development'
  },
  {
    file: resolve('dist/vue-cleave-directive.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    file: resolve('dist/vue-cleave-directive.common.js'),
    format: 'cjs'
  },
  {
    file: resolve('dist/vue-cleave-directive.esm.js'),
    format: 'es'
  },
  {
    file: resolve('dist/vue-cleave-directive.esm.browser.js'),
    format: 'es',
    env: 'development',
    transpile: false
  },
  {
    file: resolve('dist/vue-cleave-directive.esm.browser.min.js'),
    format: 'es',
    env: 'production',
    transpile: false
  }
].map(genConfig)

function genConfig (opts) {
  const config = {
    input: {
      input: resolve('src/index.js'),
      plugins: [
        flow(),
        node(),
        cjs(),
        replace({
          __VERSION__: version
        })
      ]
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: 'VueRouter'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  if (opts.transpile !== false) {
    config.input.plugins.push(buble())
  }

  return config
}