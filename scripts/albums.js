import { initAudioPlayer } from './audio-player.js';

const albums = [
  {
    id: 'lodiloop',
    title: 'Lofi Loop',
    artist: 'Leinad Odreiuqzi',
    year: '2025',
    image: 'assets/cavendish.png',
    audio: 'assets/Lofiloop.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'jogo',
    title: 'Jogo',
    artist: 'Leinad Odreiuqzi',
    year: '2025',
    image: 'assets/cavendish.png',
    audio: 'assets/Jogo-No-terminado.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'ending',
    title: 'Ending',
    artist: 'Leinad Odreiuqzi',
    year: '2025',
    image: 'assets/cavendish.png',
    audio: 'assets/ending.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'mainhouse',
    title: 'Mainhouse',
    artist: 'Leinad Odreiuqzi',
    year: '2025',
    image: 'assets/cavendish.png',
    audio: 'assets/MainHouse.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'cumbion-no-terminado',
    title: 'Cumbion No Terminado',
    artist: 'Leinad Odreiuqzi',
    year: '2025',
    image: 'assets/cavendish.png',
    audio: 'assets/Cumbion-No-terminado.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'drophouse',
    title: 'Drophouse',
    artist: 'Leinad Odreiuqzi',
    year: '2024',
    image: 'assets/drophouse.png',
    audio: 'assets/DropHouse.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'finalwave',
    title: 'Final wave',
    artist: 'Leinad Odreiuqzi',
    year: '2024',
    image: 'assets/drophouse.png',
    audio: 'assets/FinalWave.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'hopconhip',
    title: 'Hop con Hip',
    artist: 'Leinad Odreiuqzi',
    year: '2024',
    image: 'assets/drophouse.png',
    audio: 'assets/HopConHip.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'me_tal',
    title: 'ME__TAL__',
    artist: 'Leinad Odreiuqzi',
    year: '2024',
    image: 'assets/drophouse.png',
    audio: 'assets/ME__TAL__.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'coordenadabeatloop',
    title: 'Coordenada beat loop',
    artist: 'Leinad Odreiuqzi',
    year: '2024',
    image: 'assets/drophouse.png',
    audio: 'assets/CoordenadaBeatLoop.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'sintitulo',
    title: 'Sin titulo',
    artist: 'Leinad Odreiuqzi',
    year: '2024',
    image: 'assets/drophouse.png',
    audio: 'assets/Sintitulo.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: '50',
    title: '50',
    artist: 'Leinad Odreiuqzi',
    year: '2023',
    image: 'assets/drophouse.png',
    audio: 'assets/50.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'laniakea',
    title: 'Laniakea',
    artist: 'Leinad Odreiuqzi',
    year: '2021',
    image: 'assets/LaniakeaPortada.png',
    audio: 'assets/laniakea.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'intro',
    title: 'Intro',
    artist: 'Leinad Odreiuqzi',
    year: '2020',
    image: 'assets/LaniakeaPortada.png',
    audio: 'assets/Intro.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'outro',
    title: 'Outro',
    artist: 'Leinad Odreiuqzi',
    year: '2020',
    image: 'assets/LaniakeaPortada.png',
    audio: 'assets/Outro.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'hiphopeast',
    title: 'Hip Hop east',
    artist: 'Leinad Odreiuqzi',
    year: '2020',
    image: 'assets/LaniakeaPortada.png',
    audio: 'assets/HipHopEAst.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
  {
    id: 'hiphopbasic',
    title: 'Hip Hop Basic',
    artist: 'Leinad Odreiuqzi',
    year: '2020',
    image: 'assets/LaniakeaPortada.png',
    audio: 'assets/BeatBasic.mp3',
    description: 'Este beat fue creado con inspiración lo-fi, tiene 82 BPM y un bajo profundo.'
  },
];

// Función para crear el HTML de un álbum
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
    `;
}

// Función para inicializar los reproductores de audio
function initAudioPlayers() {
  document.querySelectorAll('.custom-audio-player').forEach(player => {
    initAudioPlayer(player);
  });
}

// Función para renderizar los álbumes
function renderAlbums() {
  const albumList = document.querySelector('.album-list');
  if (!albumList) return;

  // Limpiar el contenedor
  albumList.innerHTML = '';

  // Agregar cada álbum al contenedor
  albums.forEach(album => {
    albumList.insertAdjacentHTML('beforeend', createAlbumHTML(album));
  });

  // Inicializar los reproductores de audio
  initAudioPlayers();

  // Agregar event listeners a los botones de toggle
  setupToggleButtons();
}

// Función para configurar los botones de toggle
function setupToggleButtons() {
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardContent = button.closest('.album').querySelector('.card-content');
      const isExpanding = !cardContent.classList.contains('expanded');

      // Cerrar todos los demás álbumes expandidos
      if (isExpanding) {
        document.querySelectorAll('.card-content.expanded').forEach(expandedContent => {
          if (expandedContent !== cardContent) {
            expandedContent.classList.remove('expanded');
            const btn = expandedContent.closest('.album').querySelector('.toggle-btn');
            if (btn) btn.textContent = 'Ver más';
          }
        });
      }

      // Alternar la clase expanded
      cardContent.classList.toggle('expanded');
      button.textContent = cardContent.classList.contains('expanded') ? 'Ver menos' : 'Ver más';
    });
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.album')) {
      document.querySelectorAll('.card-content.expanded').forEach(content => {
        content.classList.remove('expanded');
        const btn = content.closest('.album').querySelector('.toggle-btn');
        if (btn) btn.textContent = 'Ver más';
      });
    }
  });
}

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el reproductor del mejor beat
  const bestBeatPlayer = document.querySelector('.best-beat-container .custom-audio-player');
  if (bestBeatPlayer) {
    initAudioPlayer(bestBeatPlayer);
  }
  
  // Renderizar e inicializar los álbumes
  renderAlbums();
});
