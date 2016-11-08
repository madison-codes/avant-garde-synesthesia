import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import AudioContext from 'web-audio-test-api';

describe('Application', () => {
    var context = { new AudioContext();
  },
  context('Application', () => {
    it('should render within a <section>', () => {
      const wrapper = shallow(<Application />);
      assert.equal(wrapper.type(), 'section');
    });
  });
});
