import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import TrackColor from '../lib/components/TrackColor';

describe('TrackColor', () => {
  const wrapper = shallow(<TrackColor />);
  context('render', () => {
    it('should render within a section', () => {
      assert.equal(wrapper.type(), 'section');
    });

    it('contain a single canvas element', () => {
      expect(wrapper.find('canvas')).to.have.length(1);
    });

    it('contain a single canvas element', () => {
      expect(wrapper.find('#container')).to.have.length(1);
    });
  });
});
