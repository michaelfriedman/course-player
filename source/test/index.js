import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import cardPlayer from 'components/card-player';

const makeProps = (settings) => Object.assign({}, {
  courseTitle: 'My Course',
  cardContent: 'Contents...',
  isCompleted: false,
  cardList: [
    {
      id: '1',
      name: 'Card 1'
    },
    {
      id: '2',
      name: 'Card 2'
    },
    {
      id: '3',
      name: 'Card 3'
    }
  ],
  currentCardId: '1'
}, settings);

test('CardPlayer', nest => {
  nest.test('...card-player', assert => {
    const msg = 'CardPlayer should render the card-player div.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.card-player').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...nav-bar', assert => {
    const msg = 'CardPlayer should render the nav-bar.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.nav-bar').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...course title', assert => {
    const msg = 'CardPlayer should render the course title.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Amazing Course';
    const props = makeProps({ courseTitle });

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.course-title').html();

    const actual = output;
    const expected = courseTitle;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...card-content', assert => {
    const msg = 'CardPlayer should render the card-content.';

    const CardPlayer = cardPlayer(React);

    const cardContent = 'My content';
    const props = makeProps({
      cardContent
    });

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.card-content').html();

    const actual = output;
    const expected = cardContent;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...next-card', assert => {
    const msg = 'CardPlayer should render the next-card button.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.next-card').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...next-card', assert => {
    const msg = 'next-card should render a disabled button by default.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps({ isCompleted: false });

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.next-card .button').attr('disabled');

    const actual = output;
    const expected = 'disabled';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...next-card with card completed', assert => {
    const msg = 'next-card should render a working continue button.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps({ isCompleted: true });

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.next-card .button').attr('disabled');

    const actual = output;
    const expected = undefined;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...card-container', assert => {
    const msg = 'CardPlayer should render the card-container.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.card-container').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...card-list', assert => {
    const msg = 'CardPlayer should render the card-list.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.card-list').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...card-list contents', assert => {
    const msg = 'CardPlayer should render the correct card-list.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps({
      cardList: [
        {
          id: '1',
          name: 'Card #1'
        },
        {
          id: '2',
          name: 'Card #2'
        },
        {
          id: '3',
          name: 'Card #3'
        }
      ]
    });

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.card-list').html();

    const actual = output;
    const expected = '<li class="card-list-item current-card">Card #1</li><li class="card-list-item">Card #2</li><li class="card-list-item">Card #3</li>';

    assert.equal(actual, expected, msg);
    assert.end();
  });


  nest.test('...card-list current card', assert => {
    const msg = 'CardPlayer should render the current card.';

    const CardPlayer = cardPlayer(React);

    const props = makeProps({
      currentCardId: '3'
    });

    const $ = dom.load(render(<CardPlayer { ...props } />));
    const output = $('.card-list').children().last().attr('class');

    const actual = (/current-card/).test(output);
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

});
