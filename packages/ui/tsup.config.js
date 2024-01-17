export default {
  entryPoints: ['src/index.tsx'],
  dts: true,
  clean: true,
  format: ['cjs', 'esm'],
  external: ['react'],
  splitting: true,
}
