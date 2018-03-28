const fs = require('fs');
const Midi = require('jsmidgen');
const { execSync } = require('child_process');
const { font, targets } = require('../config'); 

process.stdout.write('Generating WAV files...\n');

targets.forEach(({ instrument, note, length }) => {
  const file = new Midi.File();
  const track = new Midi.Track();

  file.addTrack(track);

  // Set instrument to strings:
  track.setInstrument(0, instrument);

  // Add note to the track:
  track.addNote(0, note, length);

  // Create the MIDI file:
  fs.writeFileSync(`out/${instrument}_${note}.mid`, file.toBytes(), 'binary');

  // Use fluidsynth and general user font to synthesize WAV file:
  execSync(`fluidsynth -F out/${instrument}_${note}.wav ${font} out/${instrument}_${note}.mid`);

  // Remove the MIDI file:
  execSync(`rm out/${instrument}_${note}.mid`);
});

process.stdout.write('Done! Check the "out" directory.\n');
