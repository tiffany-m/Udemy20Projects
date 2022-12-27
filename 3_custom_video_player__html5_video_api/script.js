const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// Play & Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update Play/Pause Icon
function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update Progress & Timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100

  // Get Minuets
  let mins = Math.floor(video.currentTime / 60)
  if(mins < 10) {
    mins = '0' + String(mins)
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// Set Video Time to Progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100 // + sign makes it a number
}

// Stop Video
function stopVideo() {
  video.currentTime = 0 // starts video back to the beginning
  video.pause()
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)
