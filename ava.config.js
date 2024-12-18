export default {
  nodeArguments: [
    "--loader=ts-node/esm",
    "--experimental-specifier-resolution=node",
  ],
  typescript: {
    extensions: ["ts"],
    rewritePaths: {
      "test/": "dist/test/",
    },
    compile: false,
  },
  files: ["test/**/*.ava.ts"],
};
