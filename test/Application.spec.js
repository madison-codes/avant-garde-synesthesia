import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import Logo from '../lib/components/Logo';
import Video from '../lib/components/Video';
import TrackColor from '../lib/components/TrackColor';
import Sound from '../lib/components/Sound';
import Song from '../lib/components/Song';

describe('Application', () => {

  const wrapper = shallow(<Application />);

  context('render', () => {
    it('should render within a <section>', () => {
      assert.equal(wrapper.type(), 'section');
    });

    it('should cointain Logo element', () => {
      expect(wrapper.contains(<Logo />)).to.equal(true);
    });

    it('should cointain Video element', () => {
      expect(wrapper.contains(<Video />)).to.equal(true);
    });

    it.skip('should cointain a TrackColor element', () => {
      wrapper.state.note = 'A#3'
      expect(wrapper.contains(<TrackColor onNoteChange={note => this.sampleFunction()} />)).to.equal(true);
    });

    it('should cointain a Sound element', () => {
      expect(wrapper.contains(<Sound note={null} />)).to.equal(true);
    });

    it('should cointain a Song element', () => {
      expect(wrapper.contains(<Song note={null} song={[]}/>)).to.equal(true);
    });
  });

  context('setup', () => {
    // const wrapper = mount(<Application />);
  //
  //   const navigator = {
  //     mediaDevices: {
  //       getUserMedia: sinon.spy()
  //     }
  //   };
  //
    it.skip('should render within a <section>', () => {
      wrapper.state().song = ['A#3'];
      expect(wrapper.state().note.length).to.equal(1);
    });

  });
});
