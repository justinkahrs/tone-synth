import React, { Component } from 'react'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano'
import logo from './logo.svg'
import Synth from './Synth'
import './App.css'
import 'react-piano/build/styles.css'

const synth = new Synth()

class App extends Component {
  render() {
    const firstNote = MidiNumbers.fromNote('c4')
    const lastNote = MidiNumbers.fromNote('c5')

    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tone.js Demo</h1>
        </header>
        <Piano
          noteRange={{ first: firstNote, last: lastNote }}
          onPlayNote={midiNumber => {
            synth.play(midiNumber)
          }}
          onStopNote={midiNumber => {
            synth.stop()
          }}
          width={1000}
          keyboardShortcuts={keyboardShortcuts}
        />
      </div>
    )
  }
}

export default App
