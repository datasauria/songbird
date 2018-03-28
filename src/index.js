const fs = require('fs');
const Midi = require('jsmidgen');
const file = new Midi.File();
const track = new Midi.Track();
file.addTrack(track);
track.setInstrument(0, 42);
track.addNote(0, 'c4', 256);

fs.writeFileSync('out/test.mid', file.toBytes(), 'binary');

const synth = require('synth-js');
const midiBuffer = fs.readFileSync('out/test.mid');
const waveBuffer = synth.midiToWav(midiBuffer).toBuffer();

fs.writeFileSync('out/test.wav', waveBuffer, 'binary');
