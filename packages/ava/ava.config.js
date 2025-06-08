export default {
  nodeArguments: [
    "--loader=ts-node/esm",
    "--experimental-specifier-resolution=node",
  ],
  typescript: {
    extensions: ["ts"],
    rewritePaths: {
      "src/": "dist/",
    },
    compile: false,
  },
  files: ["src/**/*.ava.ts"],
};
