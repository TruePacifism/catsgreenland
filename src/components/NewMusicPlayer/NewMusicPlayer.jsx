import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';

function NewMusicPlayer({ audioInstance }) {
  return (
    <>
      <ReactJkMusicPlayer
        getAudioInstance={instance => {
          audioInstance = instance;
        }}
      />
      <button onClick={() => audioInstance.play()}>play</button>
      <button onClick={() => audioInstance.pause()}>pause</button>
      <button onClick={() => audioInstance.load()}>reload</button>
      <button onClick={() => (audioInstance.currentTime = 40)}>
        change current play time
      </button>
      <button onClick={() => (audioInstance.playbackRate = 2)}>
        change play back rate
      </button>
      <button onClick={() => (audioInstance.volume = 0.2)}>
        change volume
      </button>
      {/* <button onClick={() => audioInstance.destroy()}>destroy player</button>
      <button onClick={audioInstanceaudio.togglePlay}>toggle play</button>
      <button onClick={audioInstanceaudio.clear}>clear audio lists</button>
      <button onClick={audioInstanceaudio.playNext}>play next</button>
      <button onClick={audioInstanceaudio.playPrev}>play prev</button>
      <button onClick={() => audioInstanceaudio.playByIndex(1)}>
        play by index
      </button>
      <button onClick={() => audioInstanceaudio.updatePlayIndex(1)}>
        update play index
      </button> */}
    </>
  );
}

export default NewMusicPlayer;
