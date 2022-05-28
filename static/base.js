window.addEventListener('load', () => {
  const load = document.querySelector(".preloader")
  setTimeout(() => {
    load.style.display = 'none'
  }, 1000);

  const login = document.querySelector(".login")
  const registerWind = document.querySelector('.register')

  const loginLink = document.querySelector('.login-link')
  const registerlink = document.querySelector('.register-link')

  const block2 = document.querySelector('.block_2')
  const block1 = document.querySelector('.block_1')

  if (login) {
    login.addEventListener("click", openModal)
  }

  function openModal() {
    setTimeout(() => {
      registerWind.classList.remove('register-none')
    }, 1000);

    if (loginLink && registerlink) {
      loginLink.addEventListener("click", openLogin)
      registerlink.addEventListener("click", openRegister)
    }
  }

  function openLogin() {
    block1.classList.add("block_hide")
    block2.classList.remove('block_hide')
  }

  function openRegister() {
    block1.classList.remove("block_hide")
    block2.classList.add('block_hide')
  }


  // singer_info.html // corousel 
  // const wrapper = document.querySelector('.wrapper'),
  //   leftBtn = document.querySelector('.leftBtn'),
  //   rightBtn = document.querySelector('.rightBtn'),
  //   wrapper_album = document.querySelectorAll('.wrapper_hover_box');

  // let index = 0;

  // function changeImage() {
  //   if (index > wrapper_album.length - 2) {
  //     index = 0
  //   } else if (index < 0) {
  //     index = wrapper_album.length - 2;
  //   }

  if (window) {
    window.addEventListener("click", closeMenu)
  }

  function closeMenu(event) {
    if (event.target === registerWind) {
      registerWind.classList.add('register-none')
      registerWind.style.transition = 'easy-in 2.5s'
    }
  }

  if (loginLink && registerlink) {
    loginLink.addEventListener("click", openLogin)
    registerlink.addEventListener("click", openRegister)
  }


  function openLogin() {
    block1.classList.add("block_hide")
    block2.classList.remove('block_hide')
  }

  function openRegister() {
    block1.classList.remove("block_hide")
    block2.classList.add('block_hide')
  }


  // singer_info.html // corousel 
  const wrapper = document.querySelector('.wrapper'),
    leftBtn = document.querySelector('.leftBtn'),
    rightBtn = document.querySelector('.rightBtn'),
    wrapper_album = document.querySelectorAll('.wrapper_img'),
    wrapper_hv = document.querySelectorAll('.wrapper_hv');

  let index = 0;

  function changeImage() {
    if (index > wrapper_album.length - 2) {
      index = 0
    } else if (index < 0) {
      index = wrapper_album.length - 2;
    }
    wrapper_album.forEach(item => {
      item.style.transform = `translateX(${-index * 205}px)`
    });
    wrapper_hv.forEach(hv => {
      hv.style.transform = `translateX(${-index * 205}px)`
    });
  }

  if (rightBtn) {
    rightBtn.addEventListener('click', function change() {
      index++;
      changeImage()
    });
  }

  if (leftBtn) {
    leftBtn.addEventListener('click', function change() {
      index--;
      changeImage()
    });
  }

  const typeMusic = document.querySelectorAll(".song_type h2"),
    activeIcon = document.querySelectorAll('.song_type i'),
    popularMusicList = document.querySelectorAll('.popular_music_list')

  typeMusic.forEach((item, index) => {
    item.addEventListener("click", () => {
      openInfo(index)
    })
  })

  typeMusic.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      activeHeader(index)
    })
  })


  function activeHeader(index) {
    if (popularMusicList[index].style.display !== "none") {
      typeMusic[index].style.cursor = 'pointer'
    }
  }

  activeIcon.forEach((item, index) => {
    item.addEventListener("click", () => {
      closeInfo(index)
    })
  })


  function closeInfo(index) {
    activeIcon[index].classList.remove("fa-angle-down")
    popularMusicList[index].style.display = "none"
  }

  function openInfo(index) {
    activeIcon[index].classList.add("fa-angle-down")
    popularMusicList[index].style.display = "block"
  }

  // MUSIC
  const musics = []

  const playBtn = document.querySelectorAll(".play")
  const audio = document.querySelectorAll(".user_music_box audio")
  const mainMusicBar = document.querySelector('.main-music')
  const musicImg = document.querySelectorAll(".user_music_box img")
  const mp3Name = document.querySelectorAll(".mp3_name p")
  const mp3Owner = document.querySelectorAll(".mp3_name a")
  const mp3Ct = document.querySelector(".mp3_ct img")
  const mp3CtaAbout = document.querySelectorAll('.mp3_ct_about')



  let musicStatus = ""

  audio.forEach(element => {
    musics.push(element.src)
  });
  const pauseMusicbtn = document.querySelector("#pause")


  function playAudio() {
    playBtn.forEach((item, index) => {
      item.addEventListener("click", () => {
        playIcon()
        if (mainMusicBar.src !== musics[index]) {
          musicStatus = musics[index]
          mainMusicBar.src = musicStatus
        } if (mainMusicBar.paused) {
          pauseMusicbtn.classList.remove('fa-circle-play')
          pauseMusicbtn.classList.add('fa-circle-pause')
          item.classList.add("fa-circle-pause")
          item.classList.remove("fa-circle-play")

          setMusicPage(index)
          mainMusicBar.play(musics[index])
        } else {
          pauseMusicbtn.classList.add('fa-circle-play')
          pauseMusicbtn.classList.remove('fa-circle-pause')
          mainMusicBar.pause()
        }
      })
    })
  }

  playAudio()

  function setMusicPage(index) {
    const img = musicImg[index].src
    const owner = mp3Owner[index]
    const name = mp3Name[index]

    mp3Ct.src = img
    mp3CtaAbout[0].innerHTML = owner.textContent
    mp3CtaAbout[1].innerHTML = name.textContent
  }

  function playIcon() {
    playBtn.forEach(item => {
      item.classList.remove('fa-circle-pause')
      item.classList.add('fa-circle-play')
    })
  }

  const progressContainer = document.querySelector(".progress_container"),
    progress = document.querySelector(".progres"),
    prevBtn = document.querySelector("#prev"),
    nextBtn = document.querySelector("#next");

  let status = 0

  pauseMusicbtn.addEventListener("click", () => {
    playIcon()
    if (!status) {
      if (mainMusicBar.paused) {
        mainMusicBar.src = musics[0]
        pauseMusicbtn.classList.remove('fa-circle-play')
        pauseMusicbtn.classList.add('fa-circle-pause')
        playBtn[0].classList.add("fa-circle-pause")
        playBtn[0].classList.remove("fa-circle-play")
        mainMusicBar.play()
      } else {
        pauseMusicbtn.classList.add('fa-circle-play')
        pauseMusicbtn.classList.remove('fa-circle-pause')
        mainMusicBar.pause()
      }
    } else {
      if (mainMusicBar.paused) {
        pauseMusicbtn.classList.remove('fa-circle-play')
        pauseMusicbtn.classList.add('fa-circle-pause')

        pauseIcon()

        playIcon()
        playBtn[status].classList.add("fa-circle-pause")
        playBtn[status].classList.remove("fa-circle-play")
        mainMusicBar.play()
      } else {
        pauseMusicbtn.classList.add('fa-circle-play')
        pauseMusicbtn.classList.remove('fa-circle-pause')
        playBtn[status].classList.remove("fa-circle-pause")
        playBtn[status].classList.add("fa-circle-play")
        mainMusicBar.pause()
      }
    }
  })
  function pauseIcon() {
    playBtn.forEach(item => {
      item.classList.add("fa-circle-pause")
      item.classList.remove("fa-circle-play")
    })
  }
  prevBtn.addEventListener("click", prevBtnClick)
  nextBtn.addEventListener('click', nextBtnClick)

  function nextBtnClick() {
    playIcon()
    status++
    if (status > musics.length - 1) {
      status = 0
    } else if (status < 0) {
      status = musics.length - 1
    }
    pauseMusic()
    setMusicPage(status)
    pauseMusicbtn.classList.remove('fa-circle-play')
    pauseMusicbtn.classList.add('fa-circle-pause')
    playBtn[status].classList.add('fa-circle-pause')
    playBtn[status].classList.remove('fa-circle-play')
    mainMusicBar.src = musics[status]
    mainMusicBar.play()
  }

  function prevBtnClick() {
    playIcon()
    status--
    if (status > musics.length - 1) {
      status = 0
    } else if (status < 0) {
      status = musics.length - 1
    }
    pauseMusic()
    setMusicPage(status)
    pauseMusicbtn.classList.remove('fa-circle-play')
    pauseMusicbtn.classList.add('fa-circle-pause')
    mainMusicBar.src = musics[status]
    playBtn[status].classList.add('fa-circle-pause')
    playBtn[status].classList.remove('fa-circle-play')
    mainMusicBar.play()
  }

  function pauseMusic() {
    mainMusicBar.pause()
  }

  function upDateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const percent = (currentTime / duration) * 100;

    progress.style.width = `${percent}%`;
  }

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = mainMusicBar.duration
    mainMusicBar.currentTime = (clickX / width) * duration
  }

  mainMusicBar.addEventListener('timeupdate', upDateProgress)
  progressContainer.addEventListener("click", setProgress)

})

