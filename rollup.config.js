import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const rollupConfig = {
    input: 'src/modcal.js',
    output: {
        file: 'dist/modcal.js',
        format: 'umd',
        name: 'modcal',
        sourcemap: true
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
    ]
};

const prodConfig = { ...rollupConfig };
prodConfig.output = {
    ...prodConfig.output,
    file: 'dist/modcal.min.js',
    sourcemap: false
}
prodConfig.plugins = [
    ...prodConfig.plugins,
    uglify()
];

export default [
    rollupConfig,
    prodConfig
];