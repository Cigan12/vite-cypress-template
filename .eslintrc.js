module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
    rules: {
        indent: 'off',
        'no-use-before-define': 'off',
        'import/extensions': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/prefer-default-export': 'off',
        'comma-dangle': 'off',
        'no-undef': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
