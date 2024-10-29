module.exports = {
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix --resolve-plugins-relative-to ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
