function playSong(songPath) {
    const audioPlayer = document.getElementById('audio-player');
    const sourceMp3 = document.getElementById('source-mp3');
    sourceMp3.src = songPath;
    audioPlayer.load();
    audioPlayer.play();
}