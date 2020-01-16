# css-corn
[git][git] |
[github][github] |
[issues][issues] |
[npm][npm]

- [Ru](#ru)
  - [Как использовать](#Как использовать)
- [En](#en)

### Ru
Css-corn — Утилита для быстрой вставки css стилей непосредственно в документ через тег \<style\>

##### Как использовать:
Подключите библиотеку. Например в теге 😃 \<head\> 😉
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
  const css = new CssCorn({
    id: 'my-id', // id тега \<style\> | Необязательный параметр
    willRender: true // Параметр отвечает, за перманентный рендер вносимых стилей | Не обязательный параметр, по умолчанию – false
  });
</script>
```
Теперь вы можете ➕ добавлять, ➖ удалять и 📝переименовывать стили

```html
<script>
  const css1 = new CssCorn();

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
Css-corn - A utility for quickly inserting css styles directly into the document via the \<style\> tag

**How to use:**

Connect the library. For example, in the tag 😃 \<head\> 😉

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
  const css = new CssCorn({
    id: 'my-id', // id of <style> tag | Optional parameter
    willRender: true // The parameter is responsible for the permanent rendering of insertion styles | Optional parameter, false by default
  });
</script>   
```
Now you can ➕ add, ➖ delete and 📝 rename styles
```html
<script>
  const css1 = new CssCorn();

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
[git]:https://github.com/Silksofthesoul/css-corn.git
[github]:https://github.com/Silksofthesoul/css-corn
[issues]:https://github.com/Silksofthesoul/css-corn/issues
[npm]:https://kkkkkkk
