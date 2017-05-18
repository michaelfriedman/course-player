import React from 'react';
import test from 'tape';
import dom from 'cheerio';
import reactDom from 'react-dom/server';

const render = reactDom.renderToStaticMarkup;

import cardPlayer from 'components/card-player';

test('CardPlayer', nest => {
  nest.test('...nav-bar', assert => {
    const msg = 'CarPlayer should render the nav-bar.';

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
    const msg = 'CarPlayer should render the course title.';

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
});
