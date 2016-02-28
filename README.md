# react-webpack-config

Boilerplate configuration for react + webpack.

![](https://raw.githubusercontent.com/arthurflachs/react-webpack-config/master/assets/Application.png)

## NPM Scripts
The following npm scripts are available :
```
npm start: run webpack dev server on port 3000
npm run lint: run linting tools (check JS and CSS style)
```

## Webpack configuration
Packages installed
* Webpack
* css-loader: with css modules configuration

## Linting tools

### ESLint
Mostly recommended configuration (*eslint:recommended*).
Custom rules include :
* **no-semicolon**: More readable, in my opinion
* **no-unexpected-multiline**: Checks line breaks don't end expressions, to avoid weird behaviors. Especially helpful with the no-semicolon line. *read: [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline).

Installation with Babel support and React plugin

### Stylelint
Mostly, recommended rules.
To be improved...

## Project architecture
Divided between smart (containers) and dumb components.

Each component has its own folder, containing its definition (index.js), its styles, and optional assets (images, fonts...).

```
| > Components/
   |
   | > ComponentName/
      | > index.js
      | > styles.css
      | > Background.jpg
```

---
*Thanks to [Abricotine](https://github.com/brrd/Abricotine) for fun Markdown editing