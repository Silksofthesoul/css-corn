# css-corn

[git][git] \|
[github][github] \|
[issues][issues] \|
[download][download] \|
[demo][demo] \|
[npm][npm]

[![NPM version](https://img.shields.io/npm/v/@silksofthesoul/css-corn.svg?style=flat)](https://www.npmjs.com/package/@silksofthesoul/css-corn) [![NPM monthly downloads](https://img.shields.io/npm/dm/@silksofthesoul/css-corn.svg?style=flat)](https://npmjs.org/package/@silksofthesoul/css-corn) [![NPM total downloads](https://img.shields.io/npm/dt/@silksofthesoul/css-corn.svg?style=flat)](https://npmjs.org/package/@silksofthesoul/css-corn)
* * *

-   [Ru](#ru)
    -   [Установка](#установка)
      -   [Подключение через тег script](#подключение-через-тег-script)
      -   [Подключение через тег import-require](#подключение-через-тег-import-require)
    -   [Как использовать](#как-использовать)
-   [En](#en)
    -   [Install](#install)
      -   [script](#script)
      -   [import-require](#import-require)
    -   [How to use](#How-to-use)

### Ru

Css-corn — Утилита для быстрой вставки css стилей непосредственно в документ через тег `<style>`

#### Установка:

npm:

```bash
  npm i -s @silksofthesoul/css-corn
```

git:

```bash
  git clone https://github.com/Silksofthesoul/css-corn.git
  cd css-corn
  npm install && npm run build:js
```

##### Подключение через тег script:

Вы можете подключить библиотеку [скачав][download] скрипт самостоятельно, и подключив его к проекту с помощью тега `<script>`

```html
  <script type="text/javascript" src="/css-corn/index.js"></script>
```
...и использовать так:
```js
  let cssCorn = new $CssCorn();
```

##### Подключение через тег import-require:

Вы можете подключить библиотеку установив пакет через npm и использовать конструкцию import/require
```js
  import CssCorn from '@silksofthesoul/css-corn';
```
или:
```js
  const CssCorn = require('@silksofthesoul/css-corn');
```
...и использовать так:
```js
  let cssCorn = new CssCorn();
```
#### Как использовать:

Подключите библиотеку. Например в теге 😃 `<head>` 😉

```html
  ...
      <script type="text/javascript" src="path/to/css-corn/index.js"></script>
    </head>
  <body>
  ...
```

Создайте объект используя шаблон класса 🦄 CssCorn 🌽

```html
<script>
  // Создайте объект
  const css = new $CssCorn({// или new CssCorn -- если вы импортируете модуль
    id: 'my-id', // id тега <style> | Необязательный параметр
    willRender: true // Параметр отвечает, за перманентный рендер вносимых стилей | Не обязательный параметр, по умолчанию – false
  });
</script>
```

Теперь вы можете ➕ добавлять, ➖ удалять и 📝переименовывать стили

```html
<script>
  import {CssCorn as MyAwesomeCssUnicorn} from '@silksofthesoul/css-corn';
  const css1 = new MyAwesomeCssUnicorn();

  // По шагу на строку
  css1.add('body','opacity: 0; font-family: Arial, sans-serif;');
  css1.add('body h2','font-size: 2em').add('body h1', 'color: red;');
  css1.render();

  // chaining style
  css1
    .del('body','opacity') // удалить свойство opacity из body
    .del('body h1') // удалить правило body h1
    .render()
    .add('.magic', 'border: 2px solid red;')
    .rename('.magic', '.magic * p .magic > .magic + p .magic')
    .render();


  // вариант использования. Но возможно -- не лучшая практика
  new CssCorn({id:'Test'}).add('.test', 'color: green').render();

  // Еще один пример, когда описанные стили, будут сразу же применятся
  let css2 = new CssCorn({id:'wow', willRender})
    css2
      .add('.msg': 'color: red')
      .add('.msg': 'font-weight: bold')
      .add('.msg span': 'background: blue; font-weight: bold')
      .del('body');
</script>
```

### En

Css-corn - A utility for quickly inserting css styles directly into the document via the `<style>` tag

#### Install:

npm:

```bash
  npm i @silksofthesoul/css-corn
```

git:

```bash
  git clone https://github.com/Silksofthesoul/css-corn.git
  cd css-corn
  npm install && npm run build:js
```

##### script:

You can connect the library by [downloading][download] the script yourself, and connecting it to the project using the `<script>` tag

```html
  <script type="text/javascript" src="/css-corn/index.js"></script>
```
...and use it:
```js
  let cssCorn = new $CssCorn();
```

##### import-require:

You can connect the library by installing the package via npm and use the import / require construct
```js
  import CssCorn from '@silksofthesoul/css-corn';
```
or:
```js
  const CssCorn = require('@silksofthesoul/css-corn');
```
...and use it:
```js
  let cssCorn = new $CssCorn();
```

#### How to use:

Connect the library. For example, in the tag 😃 `<head>` 😉

```html
  ...
      <script type="text/javascript" src="path/to/css-corn/index.js"></script>
    </head>
  <body>
  ...
```

Create an object using the class template 🦄 CssCorn 🌽

```html
<script>
  // Create an object
  const css = new CssCorn({ // or 'new CssCorn' if you import/require a module
    id: 'my-id', // id of <style> tag | Optional parameter
    willRender: true // The parameter is responsible for the permanent rendering of insertion styles | Optional parameter, false by default
  });
</script>
```

Now you can ➕ add, ➖ delete and 📝 rename styles

```html
<script>
  import {CssCorn as MyAwesomeCssUnicorn} from '@silksofthesoul/css-corn';
  const css1 = new MyAwesomeCssUnicorn();

  // Step By Line
  css1.add('body','opacity: 0; font-family: Arial, sans-serif;');
  css1.add('body h2','font-size: 2em').add('body h1', 'color: red;');
  css1.render();

  // chaining style
  css1
    .del('body','opacity') // remove the opacity property from body
    .del('body h1') // remove the rule body h1
    .render()
    .add('.magic', 'border: 2px solid red;')
    .rename('.magic', '.magic * p .magic > .magic + p .magic')
    .render();


  // use case. But maybe not the best practice
  new CssCorn({id:'Test'}).add('.test', 'color: green').render();

  // Another example where the described styles will be applied immediately
  let css2 = new CssCorn({id:'wow', willRender})
    css2
      .add('.msg': 'color: red')
      .add('.msg': 'font-weight: bold')
      .add('.msg span': 'background: blue; font-weight: bold')
      .del('body');

</script>
```

[git]: https://github.com/Silksofthesoul/css-corn.git

[github]: https://github.com/Silksofthesoul/css-corn

[issues]: https://github.com/Silksofthesoul/css-corn/issues

[download]: https://github.com/Silksofthesoul/css-corn/blob/master/dist/index.js

[npm]: https://www.npmjs.com/package/@silksofthesoul/css-corn

[demo]: https://github.com/Silksofthesoul/css-corn/blob/master/demo.html
