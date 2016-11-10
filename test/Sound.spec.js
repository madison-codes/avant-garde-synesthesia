import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Sound from '../lib/components/Sound';
import SoundControls from '../lib/components/SoundControls';


describe('Sound', () => {
  const wrapper = shallow(<Sound />);
  context('Sound set up', () => {

    it.skip('should render within a <section>', () => {
      expect(wrapper.contains(<SoundControl />)).to.equal(true);
    });
  });
});
