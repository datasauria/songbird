const fs = require('fs');
const Midi = require('jsmidgen');

const file = new Midi.File();
const track = new Midi.Track();
file.addTrack(track);
track.addNote(0, 'c4', 64);
track.addNote(0, 'd4', 64);
track.addNote(0, 'e4', 64);
track.addNote(0, 'f4', 64);
track.addNote(0, 'g4', 64);
track.addNote(0, 'a4', 64);
track.addNote(0, 'b4', 64);
track.addNote(0, 'c5', 64);

fs.writeFileSync('out/test.mid', file.toBytes(), 'binary');

const synth = require('synth-js');
const midiBuffer = fs.readFileSync('out/test.mid');
const waveBuffer = synth.midiToWav(midiBuffer).toBuffer();

fs.writeFileSync('out/test.wav', waveBuffer, 'binary');
