import Tone from 'tone'
import midiToFreq from './utils/midiToFreq'
class Synth {
  synth = new Tone.Synth({
    oscillator: {
      type: 'amtriangle',
      harmonicity: 0.5,
      modulationType: 'sine',
    },
    envelope: {
      attackCurve: 'exponential',
      attack: 0.05,
      decay: 0.2,
      sustain: 0.2,
      release: 1.5,
    },
    portamento: 0.05,
  }).toMaster()

  play = note => {
    this.synth.triggerAttack(midiToFreq(note))
  }

  stop = () => {
    this.synth.triggerRelease()
  }
}
export default Synth
