import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Styling from '../lib/components/Styling';

describe('Styling', () => {
  const wrapper = shallow(<Styling />);

  context('Styling set up', () => {
    it('should render within an <div>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('contain a single containing element', () => {
      expect(wrapper.find('.trebble')).to.have.length(1);
    });

    it('contain a single containing element', () => {
      expect(wrapper.find('.line')).to.have.length(5);
    });
  });
});
