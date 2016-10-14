import test from 'tape';
import userReducer from '../user-reducer';

const createState = ({
  id = 'ciu8s7nq30001jdrm5rz3oylu',
  name = 'Anonymous',
  progress = {}
} = {}) => ({
  id,
  name,
  progress
});

test('userReducer', nest => {
  nest.test('default state', assert => {
    const msg = 'should produce valid default state';

    const actual = userReducer();
    const expected = createState({
      id: actual.id
    });

    assert.same(actual, expected, msg);
    assert.end();
  });
});
