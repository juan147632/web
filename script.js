function playYouTube(videoId) {
    const player = document.getElementById('youtube-player');
    player.innerHTML = `
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
}
