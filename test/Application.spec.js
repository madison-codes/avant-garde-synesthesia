import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';


describe('Application', () => {
  context('Application', () => {
    it('should render within a <section>', () => {
      const wrapper = shallow(<Application />);
      assert.equal(wrapper.type(), 'section');
    });
  });
});
