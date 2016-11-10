import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import AllNotes from '../lib/components/AllNotes';


describe('AllNotes', () => {
  const wrapper = shallow(<AllNotes />);
  context('AllNotes set up', () => {

    it('should render within a <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });
  });
});
