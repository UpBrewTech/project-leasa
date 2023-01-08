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
};
