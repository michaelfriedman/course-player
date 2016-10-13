# Card Player

The card player loads a playlist of cards, which each contain content to present to the user in the form of video, markdown text, or exercises. The player keeps track of which cards have been completed by the user, so it's easy for users to keep track of where they are in the content.

## Course Cards

A course consists of a series of screens, called cards. A card may contain video, Markdown text, or an interactive JavaScript lesson. Cards are loaded as metadata from a static asset server, and stuffed into objects that look roughly like this:

```js
  {
    "id": "ciu8s72ym0000jdrme6gcsgv0"
    "title": "Modifying Objects With Pure Functions",
    "type": "javascript-exercise",
    "content": "Write a pure function called `setPrice()` that takes an item object and a price and returns a new item object with the price property set, and all other properties unchanged. Signature: `setPrice(item: Object, price: Number) => item: Object`",
    "test": "() => test('setPrice()',function(e){var t='setPrice() should not change the original item.',i={name:'test',price:30},s=Object.assign({},i);setPrice(i,50);var a=i;e.deepEqual(a,s,t)});"
  },
```

## User

We'll need to maintain some state to keep track of which card decks and which cards have been started and completed by the user.

```js
{
  "id": "ciu8s7nq30001jdrm5rz3oylu",
  "progress": {
    "ciu8t6q200002jdrmyi3tpq67": {
      "started": true,
      "cards": {
        "ciu8t7kve0003jdrmimy49c25": {
          started: true,
          completed: false
        }
      }
    }
  }
}
```
