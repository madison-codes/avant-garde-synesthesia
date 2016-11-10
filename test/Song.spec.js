import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Song from '../lib/components/Song';
import Styling from '../lib/components/Styling';
import AllNotes from '../lib/components/AllNotes';


describe('Song', () => {
  const wrapper = shallow(<Song />);
  context('Song set up', () => {
    it('should render within an <article>', () => {
      assert.equal(wrapper.type(), 'article');
    });

    it('should render <Styling> withing element', () => {
      expect(wrapper.contains(<Styling />)).to.equal(true);
    });

    it.skip('should render <AllNotes> withing element', () => {
      expect(wrapper.contains(<AllNotes />)).to.equal(true);
    });
  });
});
