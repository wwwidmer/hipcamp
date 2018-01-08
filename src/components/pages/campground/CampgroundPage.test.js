jest.mock('../../api');

import React from 'react';
import renderer from 'react-test-renderer';

import CampgroundPage from './CampgroundPage';

const MOCK_CASES = 5;

describe('CampgroundPage component tests', () => {

  it('smoke test', () => {
    for (var i = 0; i < MOCK_CASES; i++)
      renderer.create(
          <CampgroundPage id={i} />
      );
  })

});
