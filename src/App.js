import React, { Component } from 'react'
import Tone from 'tone'

import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'

import Synth from './Synth'

import './App.css'
import 'react-piano/build/styles.css'
import Rotary from './common/Rotary'

const firstNote = MidiNumbers.fromNote('c4')
const lastNote = MidiNumbers.fromNote('c6')
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: firstNote,
  lastNote: lastNote,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
})

class App extends Component {
  state = {
    volume: 0.5,
    cutoff: 300,
    resonance: 1,
  }

  handleChange = (state, val) => this.setState({ [state]: val })

  render() {
    const synth = Synth({
      filter: new Tone.Filter({
        frequency: this.state.cutoff,
        Q: this.state.resonance,
      }),
      gain: new Tone.Gain({ gain: this.state.volume, convert: true }),
    })
    return (
      <div className="App">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '33%',
          }}
        >
          <Rotary
            label="volume"
            onChange={this.handleChange}
            value={this.state.volume}
          />
          <Rotary
            label="cutoff"
            onChange={this.handleChange}
            range={{ min: 0, max: 5000 }}
            value={this.state.cutoff}
          />
          <Rotary
            label="resonance"
            onChange={this.handleChange}
            value={this.state.resonance}
          />
        </div>
        <div style={{ height: 'calc(100vh - 150px)', width: '100%' }}>
          <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            onPlayNote={midiNumber => {
              synth.play(midiNumber)
            }}
            onStopNote={midiNumber => {
              synth.stop()
            }}
            keyboardShortcuts={keyboardShortcuts}
          />
        </div>
      </div>
    )
  }
}

export default App
