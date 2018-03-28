SongBird requires Node.JS version 9.9.0 or higher.

SongBird requires jsmidgen to produce MIDI files. Run "npm install" to
download the dependency automatically.

SongBird requires fluidsynth to be installed. On MacOS, this can be done
using the command "brew install fluid-synth --with-libsndfile". For other
systems, please consult the documentation at:

http://www.fluidsynth.org

SongBird requires a SF2 SoundFont to be installed. I have not included one
within this repository to avoid licensing confusion. I recommend using the
GeneralUser GS SoundFont which can be downloaded at:

http://www.schristiancollins.com/generaluser.php

Place the SF2 file in the fonts directory (or elsewhere), and specify the
path in the config.js file.

Run "npm start" in the root directory to produce an example WAV file. By
default, files are saved to the "out" directory.
