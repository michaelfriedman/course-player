import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import cardPlayer from 'components/card-player';

test('CardPlayer', nest => {
  nest.test('...card-player', assert => {
    const msg = 'CardPlayer should render the card-player div.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.card-player').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...nav-bar', assert => {
    const msg = 'CardPlayer should render the nav-bar div.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.nav-bar').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...course title', assert => {
    const msg = 'CardPlayer should render the course title.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.course-title').html();

    const actual = output;
    const expected = courseTitle;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...nav', assert => {
    const msg = 'CardPlayer should render the nav.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.nav').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...card-content', assert => {
    const msg = 'CardPlayer should render the card-content.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const cardContent = 'My content';
    const props = {
      courseTitle,
      cardContent
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.card-content').html();

    const actual = output;
    const expected = cardContent;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...next-card', assert => {
    const msg = 'CardPlayer should render the next-card button.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.next-card').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...next-card', assert => {
    const msg = 'next-card should render a disabled button by default.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle,
      isCompleted: false
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.next-card .button').attr('disabled');

    const actual = output;
    const expected = 'disabled';

    assert.equal(actual, expected, msg);
    assert.end();
  });

  nest.test('...next-card with card completed', assert => {
    const msg = 'next-card should render a working continue button.';

    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle,
      isCompleted: true
    };

    const $ = dom.load(render(<CardPlayer {...props} />));
    const output = $('.next-card .button').attr('disabled');

    const actual = output;
    const expected = undefined;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
