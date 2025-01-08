# template-vite-react

A sane, opinionated template for esm react projects written in typescript and built with vite.

Uses biome, vite, vitest, husky.

## running

### `yarn dev`

This will run the project in watch mode, and will automatically restart on changes.

### `yarn build`

This will build the project to `./build`.

### `yarn start`

This will run the project in production mode using vite's preview server.

### `yarn test`

This will run vitest tests once. Use `--watch` to run in watch mode, and `--coverage` to generate coverage reports.

### `yarn tidy`

This will run biome in fix mode (only safe fixes) to lint and format the project. Directories `./src` and `./test`, along with all "loose" compatible files in the root of the project (js, ts, json, jsonc) will be processed.

### `yarn typecheck`

This will run the typescript compiler to check for type errors. Does not transpile any files, only checks the type errors.

## vscode

You might want to install the recommended extensions in vscode (workspace recommended):

- [biomejs.biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
- [EditorConfig.EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ms-vscode.test-adapter-converter](https://marketplace.visualstudio.com/items?itemName=ms-vscode.test-adapter-converter)
- [vitest.explorer](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

I suggest using this configuration (YMMV):

```json
{
  "[css][jsonc][json][javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[markdown][html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "biome.enabled": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.fixAll": "never",
    "source.fixAll.sortJSON": "never",
    "source.organizeImports": "never",
    "source.organizeImports.biome": "explicit",
    "source.sortImports": "never"
  },
  "eslint.enable": false
}
```

These settings are in `.vscode/settings-example.json` and you should paste into your own `.vscode/settings.json`, or create a new one. I'm not commiting the `.vscode/settings.json` proper because it shouldn't be in VCS as it contains your personal settings.
