import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Logo from '../lib/components/Logo';


describe('Logo', () => {
  const wrapper = shallow(<Logo />);
  context('Logo set up', () => {

    it('should render within a <section>', () => {
      assert.equal(wrapper.type(), 'div');
    });

    it('contain a single containing element', () => {
      expect(wrapper.find('.logo')).to.have.length(1);
    });

    it('contain four <span> elements', () => {
      expect(wrapper.find('.s-logo')).to.have.length(4);
    });

  });
});
