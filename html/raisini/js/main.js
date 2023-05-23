// mobile menu

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile__menu');
const burgerClose = document.querySelector('.burger-close');

burger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

burgerClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// header

const prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.header').classList.remove('hidden');
  } else {
    document.querySelector('.header').classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
});


// player

window.addEventListener('DOMContentLoaded', function () {
  let playButtons = document.querySelectorAll('.play');
  let player = document.querySelector('.player');
  let pauseButton = player.querySelector('.player-pause');
  let closeButton = player.querySelector('.close');
  let audioPlayer = null;
  let trackName = player.querySelector('.trackName');
  let trackArtists = player.querySelector('.trackArtists');
  let playerImage = player.querySelector('.image img');
  let currentTrack = null;

  let savedTrack = localStorage.getItem('currentTrack');
  if (savedTrack) {
    currentTrack = JSON.parse(savedTrack);
    loadTrack(currentTrack.track, currentTrack.title, currentTrack.artist, currentTrack.image);
  }

  if (playButtons.length > 0) {
    playButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        let track = button.value;
        let musicListItem = button.closest('.music__list-item');
        let info = musicListItem.querySelector('.info');
        let trackTitle = info.querySelector('h4').innerText;
        let trackArtist = info.querySelector('.artists').innerText;
        let trackImage = musicListItem.querySelector('.image img').src;

        loadTrack(track, trackTitle, trackArtist, trackImage);

        currentTrack = {
          track: track,
          title: trackTitle,
          artist: trackArtist,
          image: trackImage
        };
        localStorage.setItem('currentTrack', JSON.stringify(currentTrack));
      });
    });
  }

  pauseButton.addEventListener('click', function () {
    if (audioPlayer && !audioPlayer.paused) {
      audioPlayer.pause();
      pauseButton.classList.remove('active');
    } else if (audioPlayer && audioPlayer.paused) {
      audioPlayer.play();
      pauseButton.classList.add('active');
    }
  });

  closeButton.addEventListener('click', function () {
    if (audioPlayer && !audioPlayer.paused) {
      audioPlayer.pause();
    }
    player.classList.remove('active');
    localStorage.removeItem('currentTrack');
    localStorage.removeItem('currentTrackTime');
  });

  function loadTrack(track, title, artist, image) {
    player.classList.add('active');
    playerImage.src = image;
    trackName.innerText = title;
    trackArtists.innerText = artist;

    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer = null;
    }

    audioPlayer = new Audio(track);
    audioPlayer.addEventListener('loadedmetadata', function () {
      let savedTrackTime = localStorage.getItem('currentTrackTime');
      if (savedTrackTime) {
        audioPlayer.currentTime = parseFloat(savedTrackTime);
        localStorage.removeItem('currentTrackTime');
      }
      audioPlayer.play();
      pauseButton.classList.add('active');
    });
  }
});

window.addEventListener('unload', function (event) {
  if (audioPlayer && !audioPlayer.paused) {
    localStorage.setItem('currentTrackTime', audioPlayer.currentTime);
  }
});


// filter btns

document.addEventListener('DOMContentLoaded', function () {
  const filterButton = document.querySelector('.filter');
  const filterList = document.querySelector('.filter-list');
  const sortButton = document.querySelector('.sort');
  const sortList = document.querySelector('.sort-list');

  if (filterButton) {
    filterButton.addEventListener('click', function () {
      filterList.classList.toggle('active');
      sortList.classList.remove('active');
    });

    sortButton.addEventListener('click', function () {
      sortList.classList.toggle('active');
      filterList.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
      const target = event.target;
      if (
        target !== filterButton &&
        target !== sortButton &&
        target !== filterList &&
        target !== sortList &&
        !filterList.contains(target) &&
        !sortList.contains(target)
      ) {
        filterList.classList.remove('active');
        sortList.classList.remove('active');
      }
    });
  }
});


