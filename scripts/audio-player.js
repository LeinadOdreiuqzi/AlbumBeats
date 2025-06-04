// Función para formatear el tiempo en formato MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`
  }
  
  export function initAudioPlayer(player) {
    const audio = player.querySelector("audio")
    const playBtn = player.querySelector(".play-btn")
    const progressBar = player.querySelector(".progress")
    const progressContainer = player.querySelector(".progress-bar")
    const currentTimeEl = player.querySelector(".current-time")
    const durationEl = player.querySelector(".duration")
    const muteBtn = player.querySelector(".mute-btn")
    const volumeSlider = player.querySelector(".volume-slider")
    const playIcon = player.querySelector(".play-icon")
    const pauseIcon = player.querySelector(".pause-icon")
    const volumeIcon = player.querySelector(".volume-icon")
    const muteIcon = player.querySelector(".mute-icon")
  
    // Verificar que todos los elementos existen antes de continuar
    if (
      !audio ||
      !playBtn ||
      !progressBar ||
      !progressContainer ||
      !currentTimeEl ||
      !durationEl ||
      !muteBtn ||
      !volumeSlider ||
      !playIcon ||
      !pauseIcon ||
      !volumeIcon ||
      !muteIcon
    ) {
      console.warn("Algunos elementos del reproductor de audio no se encontraron")
      return
    }
  
    // Inicializar controles
    function initControls() {
      // Actualizar iconos iniciales
      updatePlayPauseIcon()
      updateVolumeIcon()
  
      // Establecer volumen inicial
      audio.volume = volumeSlider.value
    }
  
    // Actualizar iconos de play/pausa
    function updatePlayPauseIcon() {
      if (audio.paused) {
        playIcon.style.display = "inline"
        pauseIcon.style.display = "none"
      } else {
        playIcon.style.display = "none"
        pauseIcon.style.display = "inline"
      }
    }
  
    // Actualizar icono de volumen
    function updateVolumeIcon() {
      if (audio.muted || audio.volume === 0) {
        volumeIcon.style.display = "none"
        muteIcon.style.display = "inline"
      } else {
        volumeIcon.style.display = "inline"
        muteIcon.style.display = "none"
      }
    }
  
    // Reproducir/Pausar
    function togglePlay() {
      if (audio.paused) {
        audio.play()
      } else {
        audio.pause()
      }
      updatePlayPauseIcon()
    }
  
    // Actualizar barra de progreso
    function updateProgress() {
      const { currentTime, duration } = audio
      if (duration && !isNaN(duration)) {
        const progressPercent = (currentTime / duration) * 100
        progressBar.style.width = `${progressPercent}%`
  
        // Actualizar tiempo actual
        currentTimeEl.textContent = formatTime(currentTime)
      }
    }
  
    // Establecer progreso al hacer clic en la barra
    function setProgress(e) {
      const width = this.clientWidth
      const clickX = e.offsetX
      const duration = audio.duration
      if (duration && !isNaN(duration)) {
        audio.currentTime = (clickX / width) * duration
      }
    }
  
    // Actualizar duración
    function updateDuration() {
      if (audio.duration && !isNaN(audio.duration)) {
        durationEl.textContent = formatTime(audio.duration)
      }
    }
  
    // Alternar silencio
    function toggleMute() {
      audio.muted = !audio.muted
      updateVolumeIcon()
  
      // Actualizar slider de volumen
      if (audio.muted) {
        volumeSlider.value = 0
      } else {
        volumeSlider.value = audio.volume
      }
    }
  
    // Establecer volumen
    function setVolume() {
      const volume = Number.parseFloat(this.value)
      audio.volume = volume
      audio.muted = volume === 0
      updateVolumeIcon()
    }
  
    // Inicializar eventos
    function initEventListeners() {
      // Reproducir/Pausar
      playBtn.addEventListener("click", togglePlay)
  
      // Barra de progreso
      audio.addEventListener("timeupdate", updateProgress)
      progressContainer.addEventListener("click", setProgress)
  
      // Volumen
      muteBtn.addEventListener("click", toggleMute)
      volumeSlider.addEventListener("input", setVolume)
  
      // Actualizaciones de metadatos
      audio.addEventListener("loadedmetadata", updateDuration)
      audio.addEventListener("durationchange", updateDuration)
  
      // Al terminar la reproducción
      audio.addEventListener("ended", () => {
        updatePlayPauseIcon()
        progressBar.style.width = "0%"
        currentTimeEl.textContent = "0:00"
        audio.currentTime = 0
      })
    }
  
    // Inicializar
    initControls()
    initEventListeners()
  
    // Devolver métodos públicos si es necesario
    return {
      play: () => {
        audio.play()
        updatePlayPauseIcon()
      },
      pause: () => {
        audio.pause()
        updatePlayPauseIcon()
      },
      setVolume: (volume) => {
        audio.volume = volume
        volumeSlider.value = volume
        updateVolumeIcon()
      },
    }
  }
  