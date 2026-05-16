export default {
  nodeArguments: ['--loader=ts-node/esm'],
  typescript: {
    extensions: ['ts'],
    rewritePaths: {
      'src/': 'dist/'
    },
    compile: false
  },
  files: ['**/*.test.ts']
}
