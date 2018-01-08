import React from 'react';
import renderer from 'react-test-renderer';

import FeatureList, { Feature } from './Feature';

describe('Feature component tests', () => {

  it('smoke test', () => {
    const feature = {
        title: 'Test feature',
        presence: true,
        subfeatures: []
    };
    const component = renderer.create(
        <Feature {...feature} />
    );
  })

})
