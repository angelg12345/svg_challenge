const Triangle = require('../lib/Triangle');

test('renders a triangle', () => {
  const triangle = new Triangle('blue', 'srt', 'white');
  expect(triangle.render()).toMatchSnapshot();
});
