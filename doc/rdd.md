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

There will be two sub-object types to keep track of in the progress list:

* Deck progress
* Card progress

The deck progress type will need to keep track of a list of completed cards from that deck. Other than that, both types share the same properties:

* isStarted: boolean
* isCompleted: boolean
* title: string

Storing the names in the object will make it easy to render out the user's progress without needing to query the cards or decks by ID.

```js
{
  "id": "ciu8s7nq30001jdrm5rz3oylu",
  "name": "Darth Vader",
  "progress": {
    "deck-id-ciu8t6q200002jdrmyi3tpq67": {
      "isStarted": true,
      "isCompleted": false,
      "title": "TIE Fighter API",
      "cards": {
        "card-id-ciu8t7kve0003jdrmimy49c25": {
          "title": "Starting the TIE Fighter",
          "isStarted": true,
          "isCompleted": false
        }
      }
    }
  }
}
```
