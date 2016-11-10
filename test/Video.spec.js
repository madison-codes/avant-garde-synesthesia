import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Video from '../lib/components/Video';

describe('Video', () => {
  const wrapper = shallow(<Video />);
  context('render', () => {

    it('should render a video element', () => {
      assert.equal(wrapper.type(), 'video');
    });

    it('should an element with id video', () => {
      expect(wrapper.find('#video')).to.have.length(1);
    });
  });
});
