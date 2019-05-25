import React from 'react';
import renderer from 'react-test-renderer';

import Card from './card';

it(`Card renders correctly`, () => {
  const rendered = renderer
    .create(<Card
      key={0}
      name='test-name'
      screen_name='test-screen-name'
      url='test-url'
      description='test-description'
      favourites_count='test-favourites-count'
      profile_image_url_https='test-image'
    />).toJSON();
  expect(rendered).toMatchSnapshot();
});
