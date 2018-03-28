const fs = require('fs');
const Midi = require('jsmidgen');
const { exec } = require('child_process');
const { soundfont } = require('../config'); 

const file = new Midi.File();
const track = new Midi.Track();

file.addTrack(track);

// Set instrument to strings:
track.setInstrument(0, 42);

// Add notes to the track:
track.addNote(0, 'c4', 64);
track.addNote(0, 'd4', 64);
track.addNote(0, 'e4', 64);
track.addNote(0, 'f4', 64);
track.addNote(0, 'g4', 64);
track.addNote(0, 'a4', 64);
track.addNote(0, 'b4', 64);
track.addNote(0, 'c5', 64);

// Create the MIDI file:
fs.writeFileSync('out/test.mid', file.toBytes(), 'binary');

// Use fluidsynth and general user font to synthesize WAV file:
exec(`fluidsynth -F out/test.wav ${soundfont} out/test.mid`);
