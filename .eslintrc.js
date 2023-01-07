module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/function-component-definition': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/no-array-index-key': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-underscore-dangle': 'off',
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-return-await': 'warn',
        'no-unused-vars': 'off',
    },
    globals: {
        IS_DEV: true,
        __API__: true,
        LOADING_DELAY: null,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
