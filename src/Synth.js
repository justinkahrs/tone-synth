import Tone from 'tone'
import midiToFreq from './utils/midiToFreq'

const Synth = ({
  synth = new Tone.Synth({
    oscillator: {
      type: 'square',
    },
  }),
  filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 300,
    rolloff: -12,
    Q: 0.5,
    gain: 0.5,
  }),
  gain = new Tone.Gain({
    gain: 0.8,
    convert: true,
  }),
}) => ({
  synth,
  filter,
  gain,
  play: note =>
    synth
      .connect(filter.connect(gain.toMaster()))
      .triggerAttack(midiToFreq(note)),
  stop: () => synth.triggerRelease(),
})

export default Synth
