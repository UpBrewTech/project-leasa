module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "@next/next/no-img-element": "off",
    "jsx-a11y/alt-text": [0],
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": [0],
    "@typescript-eslint/no-non-null-assertion": [0],
    "@typescript-eslint/ban-types": [0],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: "^_",
      },
    ],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
}

// fix for "Parsing error: Cannot find module 'next/babel'" issue
// source: https://github.com/vercel/next.js/issues/40687#issuecomment-1264177674
