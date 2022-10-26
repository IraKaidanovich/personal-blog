var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');
var playpause = document.getElementById('playpause');
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');

video.controls = false;

videoControls.setAttribute('data-state', 'visible');

// Check the volume
var checkVolume = function(dir) {
  if (dir) {
    var currentVolume = Math.floor(video.volume * 10) / 10;
    if (dir === '+') {
      if (currentVolume < 1) video.volume += 0.1;
    }
    else if (dir === '-') {
      if (currentVolume > 0) video.volume -= 0.1;
    }
    // If the volume has been turned off, also set it as muted
    // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
    if (currentVolume <= 0) video.muted = true;
    else video.muted = false;
  }
  changeButtonState('mute');
}

var changeButtonState = function(type) {
  // Play/Pause button
  if (type == 'playpause') {
    if (video.paused || video.ended) {
      playpause.setAttribute('data-state', 'play');
    }
    else {
      playpause.setAttribute('data-state', 'pause');
    }
  }
}

// Add events for all buttons			
playpause.addEventListener('click', function(e) {
  if (video.paused || video.ended) video.play();
  else video.pause();
});			

// The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
stop.addEventListener('click', function(e) {
  video.pause();
  video.currentTime = 0;
  progress.value = 0;
  // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
  changeButtonState('playpause');
});


// As the video is playing, update the progress bar
video.addEventListener('timeupdate', function() {
  // For mobile browsers, ensure that the progress element's max attribute is set
  if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
  progress.value = video.currentTime;
  progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
});

// React to the user clicking within the progress bar
progress.addEventListener('click', function(e) {
  //var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth; // Also need to take the parent into account here as .controls now has position:relative
  var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
  video.currentTime = pos * video.duration;
});

