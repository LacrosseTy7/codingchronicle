function updateVideos() {
    let videoHTML = ''
    videos.forEach((video) => {
        videoHTML += `
            <div class="video-box">
                <div class="video-title">${video.name}</div>
                <div class="video-bottom-row">
                    <button class="watch-button" onclick="location.href='videos/${video.camelCase}.html'">Watch</button>
                    <span class="video-duration">${video.duration}</span>
                </div>
            </div>
        `
    })
    document.querySelector('.video-container').innerHTML = videoHTML
}

updateVideos()