import { initAudioPlayer } from "./audio-player.js"

const albums = [
  {
    id: "lodiloop",
    title: "Lofi Loop",
    artist: "Leinad Odreiuqzi",
    year: "2025",
    image: "assets/cavendish.png",
    audio: "assets/Lofiloop.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "jogo",
    title: "Jogo",
    artist: "Leinad Odreiuqzi",
    year: "2025",
    image: "assets/cavendish.png",
    audio: "assets/Jogo-No-terminado.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "ending",
    title: "Ending",
    artist: "Leinad Odreiuqzi",
    year: "2025",
    image: "assets/cavendish.png",
    audio: "assets/ending.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "mainhouse",
    title: "Mainhouse",
    artist: "Leinad Odreiuqzi",
    year: "2025",
    image: "assets/cavendish.png",
    audio: "assets/MainHouse.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "cumbion-no-terminado",
    title: "Cumbion No Terminado",
    artist: "Leinad Odreiuqzi",
    year: "2025",
    image: "assets/cavendish.png",
    audio: "assets/cumbion-No-terminado.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "drophouse",
    title: "Drophouse",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/DropHouse.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "finalwave",
    title: "Final wave",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/FinalWave.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "hopconhip",
    title: "Hop con Hip",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/HopConHip.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "me_tal",
    title: "ME__TAL__",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/ME__TAL__.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "coordenadabeatloop",
    title: "Coordenada beat loop",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/CoordenadaBeatLoop.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "sintitulo",
    title: "Sin titulo",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/Sintitulo.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "50",
    title: "50",
    artist: "Leinad Odreiuqzi",
    year: "2023",
    image: "assets/drophouse.png",
    audio: "assets/50.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "laniakea",
    title: "Laniakea",
    artist: "Leinad Odreiuqzi",
    year: "2021",
    image: "assets/LaniakeaPortada.png",
    audio: "assets/laniakea.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "intro",
    title: "Intro",
    artist: "Leinad Odreiuqzi",
    year: "2020",
    image: "assets/LaniakeaPortada.png",
    audio: "assets/Intro.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "outro",
    title: "Outro",
    artist: "Leinad Odreiuqzi",
    year: "2020",
    image: "assets/LaniakeaPortada.png",
    audio: "assets/Outro.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "hiphopeast",
    title: "Hip Hop east",
    artist: "Leinad Odreiuqzi",
    year: "2020",
    image: "assets/LaniakeaPortada.png",
    audio: "assets/HipHopEAst.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
  {
    id: "hiphopbasic",
    title: "Hip Hop Basic",
    artist: "Leinad Odreiuqzi",
    year: "2020",
    image: "assets/LaniakeaPortada.png",
    audio: "assets/BeatBasic.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
]

const bestBeats = [
  {
    id: "laniakea",
    title: "Laniakea",
    artist: "Leinad Odreiuqzi",
    year: "2021",
    image: "assets/LaniakeaPortada.png",
    audio: "assets/laniakea.mp3",
    description:
      "Un viaje sonoro épico que combina elementos atmosféricos con ritmos profundos, inspirado en el supercúmulo galáctico.",
  },
  {
    id: "drophouse",
    title: "Drophouse",
    artist: "Leinad Odreiuqzi",
    year: "2024",
    image: "assets/drophouse.png",
    audio: "assets/DropHouse.mp3",
    description: "Un beat energético con influencias house y elementos de drop que te harán mover el cuerpo sin parar.",
  },
  {
    id: "ending",
    title: "Ending",
    artist: "Leinad Odreiuqzi",
    year: "2025",
    image: "assets/cavendish.png",
    audio: "assets/ending.mp3",
    description: "Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.",
  },
]

function createBestBeat(bestbeat) {
  return `
  <div class="best-beat-container">
    <div class="beat-image">
      <img src="${bestbeat.image}" alt="${bestbeat.title} - Portada del álbum">
    </div>
    <div class="beat-info">
      <h3 class="beat-name">${bestbeat.title}</h3>
      <p class="beat-description">${bestbeat.description}</p>
      <div class="custom-audio-player">
        <audio preload="metadata">
          <source src="${bestbeat.audio}" type="audio/mp3">
          Tu navegador no soporta audio.
        </audio>
        <div class="player-controls">
          <button class="play-btn" aria-label="Reproducir/Pausar">
            <span class="play-icon">▶</span>
            <span class="pause-icon">❚❚</span>
          </button>
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
            <div class="time-display">
              <span class="current-time">0:00</span> / <span class="duration">0:00</span>
            </div>
          </div>
          <button class="mute-btn" aria-label="Silenciar/Activar sonido">
            <span class="volume-icon">🔊</span>
            <span class="mute-icon">🔇</span>
          </button>
          <input type="range" class="volume-slider" min="0" max="1" step="0.01" value="1">
        </div>
      </div>
    </div>
  </div>`
}

function createAlbumHTML(album) {
  return `
    <article class="album" id="${album.id}">
      <img src="${album.image}" alt="${album.title} - ${album.artist}">
      <div class="card-header">
        <h3>${album.title}</h3>
        <p>${album.artist}</p>
        <p>${album.year}</p>
        <button class="toggle-btn">Ver más</button>
      </div>
      <div class="card-content">
        <div class="card-content-inner">
          <p>${album.description}</p>
          <div class="custom-audio-player">
            <audio preload="metadata">
              <source src="${album.audio}" type="audio/mp3">
              Tu navegador no soporta audio.
            </audio>
            <div class="player-controls">
              <button class="play-btn" aria-label="Reproducir/Pausar">
                <span class="play-icon">▶</span>
                <span class="pause-icon">❚❚</span>
              </button>
              <div class="progress-container">
                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
                <div class="time-display">
                  <span class="current-time">0:00</span> / <span class="duration">0:00</span>
                </div>
              </div>
              <button class="mute-btn" aria-label="Silenciar/Activar sonido">
                <span class="volume-icon">🔊</span>
                <span class="mute-icon">🔇</span>
              </button>
              <input type="range" class="volume-slider" min="0" max="1" step="0.01" value="1">
            </div>
          </div>
        </div>
      </div>
    </article>
    `
}

function initAudioPlayers() {
  document.querySelectorAll(".custom-audio-player").forEach((player) => {
    initAudioPlayer(player)
  })
}

function renderAlbums() {
  const albumList = document.querySelector(".album-list")
  if (!albumList) return

  albumList.innerHTML = ""
  albums.forEach((album) => {
    albumList.insertAdjacentHTML("beforeend", createAlbumHTML(album))
  })

  initAudioPlayers()
  setupToggleButtons()
}

function setupToggleButtons() {
  document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation()
      const cardContent = button.closest(".album").querySelector(".card-content")
      const isExpanding = !cardContent.classList.contains("expanded")

      if (isExpanding) {
        document.querySelectorAll(".card-content.expanded").forEach((expandedContent) => {
          if (expandedContent !== cardContent) {
            expandedContent.classList.remove("expanded")
            const btn = expandedContent.closest(".album").querySelector(".toggle-btn")
            if (btn) btn.textContent = "Ver más"
          }
        })
      }

      cardContent.classList.toggle("expanded")
      button.textContent = cardContent.classList.contains("expanded") ? "Ver menos" : "Ver más"
    })
  })

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".album")) {
      document.querySelectorAll(".card-content.expanded").forEach((content) => {
        content.classList.remove("expanded")
        const btn = content.closest(".album").querySelector(".toggle-btn")
        if (btn) btn.textContent = "Ver más"
      })
    }
  })
}

// SLIDER NAVEGACIÓN CÍCLICA SUAVE
function initBestBeatsSlider() {
  const track = document.querySelector(".slider-track")
  const dotsContainer = document.querySelector(".slider-dots")
  const prevBtn = document.querySelector(".slider-arrow.prev")
  const nextBtn = document.querySelector(".slider-arrow.next")

  if (!track || !dotsContainer || !prevBtn || !nextBtn) return

  let currentIndex = 0
  let isTransitioning = false

  // Crear slides dinámicamente
  function createSlides() {
    track.innerHTML = ""
    dotsContainer.innerHTML = ""

    bestBeats.forEach((beat, index) => {
      // Crear slide
      const slide = document.createElement("div")
      slide.className = "best-beat-slide"
      slide.innerHTML = createBestBeat(beat)
      track.appendChild(slide)

      // Crear dot
      const dot = document.createElement("button")
      dot.className = "slider-dot"
      dot.setAttribute("aria-label", `Ir al beat ${index + 1}`)
      dot.addEventListener("click", () => goToSlide(index))
      dotsContainer.appendChild(dot)
    })

    initAudioPlayers()
    updateSlider()
  }

  // Actualizar slider con animación suave
  function updateSlider() {
    if (isTransitioning) return

    isTransitioning = true

    // Mover el track - cada slide es 33.333% del ancho total
    track.style.transform = `translateX(-${currentIndex * 33.333}%)`

    // Actualizar dots
    document.querySelectorAll(".slider-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex)
    })

    // Inicializar los reproductores de audio para los slides visibles
    const visibleSlides = track.querySelectorAll(".best-beat-slide");
    visibleSlides.forEach(slide => {
      const audioPlayer = slide.querySelector(".custom-audio-player");
      if (audioPlayer && !audioPlayer.dataset.initialized) {
        initAudioPlayer(audioPlayer);
        audioPlayer.dataset.initialized = "true";
      }
    });

    // Resetear flag después de la transición
    setTimeout(() => {
      isTransitioning = false
    }, 600) // Duración de la transición CSS
  }

  // Navegación cíclica mejorada
  function goToSlide(index) {
    if (isTransitioning) return

    // Navegación cíclica
    if (index < 0) {
      currentIndex = bestBeats.length - 1
    } else if (index >= bestBeats.length) {
      currentIndex = 0
    } else {
      currentIndex = index
    }

    updateSlider()
  }

  // Event listeners para las flechas
  prevBtn.addEventListener("click", () => {
    goToSlide(currentIndex - 1)
  })

  nextBtn.addEventListener("click", () => {
    goToSlide(currentIndex + 1)
  })

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goToSlide(currentIndex - 1)
    } else if (e.key === "ArrowRight") {
      goToSlide(currentIndex + 1)
    }
  })

  // Auto-play
  /*
  let autoPlayInterval = setInterval(() => {
    goToSlide(currentIndex + 1)
  }, 5000)

  // Pausar auto-play al interactuar
  [prevBtn, nextBtn, ...document.querySelectorAll('.slider-dot')].forEach(element => {
    element.addEventListener('click', () => {
      clearInterval(autoPlayInterval)
      autoPlayInterval = setInterval(() => {
        goToSlide(currentIndex + 1)
      }, 5000)
    })
  })
  */

  // Soporte para gestos táctiles (swipe)
  let startX = 0
  let endX = 0

  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX
  })

  track.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    const diff = startX - endX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        goToSlide(currentIndex + 1)
      } else {
        // Swipe right - previous slide
        goToSlide(currentIndex - 1)
      }
    }
  }

  // Inicializar
  createSlides()
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  initBestBeatsSlider()
  renderAlbums()
})
