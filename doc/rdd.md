# Course Cards

A course consists of a series of screens, called cards. A card may contain video, Markdown text, or an interactive JavaScript lesson. Cards are loaded as metadata from a static asset server, and stuffed into objects that look roughly like this:

```js
  {
    "title": "Modifying Objects With Pure Functions",
    "type": "javascript-exercise",
    "content": "Write a pure function called `setPrice()` that takes an item object and a price and returns a new item object with the price property set, and all other properties unchanged. Signature: `setPrice(item: Object, price: Number) => item: Object`",
    "test": "() => test('setPrice()',function(e){var t='setPrice() should not change the original item.',i={name:'test',price:30},s=Object.assign({},i);setPrice(i,50);var a=i;e.deepEqual(a,s,t)});"
  },
```
