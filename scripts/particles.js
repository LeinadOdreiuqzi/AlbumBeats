document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("particle-canvas")
  const ctx = canvas.getContext("2d")

  // Configuración del canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener("resize", resizeCanvas)
  resizeCanvas()

  // Configuración de partículas con lógica de embudo/vórtice expandido
  const particles = []
  const particleCount = 400 // Aumentado para cubrir más área
  const centerX = () => canvas.width / 2
  const centerY = () => canvas.height / 2

  // Crear partículas con distribución uniforme desde el centro hacia afuera
  for (let i = 0; i < particleCount; i++) {
    // Distancia desde el centro - EXPANDIDA para mayor cobertura
    const distanceRandom = Math.random()
    const maxDistance = Math.min(canvas.width, canvas.height) * 0.9 // Aumentado de 0.7 a 0.9
    const minDistance = 20 // Distancia mínima del centro
    const distance = minDistance + Math.pow(distanceRandom, 0.7) * maxDistance // Distribución más uniforme

    // Ángulo inicial aleatorio
    const angle = Math.random() * Math.PI * 2

    // Calcular ratio de distancia normalizado (0 = centro, 1 = borde)
    const distanceRatio = (distance - minDistance) / maxDistance

    // LÓGICA DE TAMAÑO INVERTIDA:
    // Centro = partículas PEQUEÑAS (como si estuvieran cayendo en un embudo)
    // Exterior = partículas GRANDES (como si flotaran en la superficie)
    const minSize = 0.5 // Tamaño mínimo en el centro
    const maxSize = 4.5 // Tamaño máximo en el exterior (aumentado ligeramente)
    const size = minSize + distanceRatio * (maxSize - minSize)

    // VELOCIDAD ANGULAR: Más cerca del centro = MÁS LENTA
    // Esto simula que las partículas se ralentizan al caer en el embudo
    const minSpeed = 0.0002 // Velocidad mínima en el centro
    const maxSpeed = 0.0035 // Velocidad máxima en el exterior (aumentada ligeramente)
    const angularSpeed = minSpeed + distanceRatio * (maxSpeed - minSpeed)

    // Color basado en la profundidad - más oscuro en el centro
    const hue = 210 + distanceRatio * 40 // De azul oscuro a azul-púrpura
    const saturation = 70 + distanceRatio * 30 // Más saturado en el exterior
    const lightness = 30 + distanceRatio * 40 // Más oscuro en el centro, más brillante en el exterior

    // Opacidad basada en la profundidad - más transparente en el centro
    const opacity = 0.3 + distanceRatio * 0.7

    particles.push({
      x: 0,
      y: 0,
      size: size,
      angle: angle,
      angularSpeed: angularSpeed,
      distance: distance,
      distanceRatio: distanceRatio,
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      opacity: opacity,
      pulsePhase: Math.random() * Math.PI * 2,
      baseDistance: distance,
      // Añadir estela para partículas exteriores
      trailLength: Math.floor(distanceRatio * 6) + 1, // Estelas ligeramente más largas
    })
  }

  // Array para almacenar posiciones anteriores para crear estelas
  const particleTrails = particles.map(() => [])

  let time = 0

  // Función de animación con rotación coherente
  function animate() {
    time += 0.016

    // Fondo con desvanecimiento para crear estelas naturales
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Ordenar partículas por tamaño (las más pequeñas primero)
    particles.sort((a, b) => a.size - b.size)

    // Actualizar y dibujar partículas
    particles.forEach((particle, index) => {
      // TODAS las partículas giran, pero a diferentes velocidades según su distancia
      particle.angle += particle.angularSpeed

      // Efecto de respiración basado en la distancia - más pronunciado en el exterior
      const breatheIntensity = 2 + particle.distanceRatio * 15
      const breathe = Math.sin(time * 0.3 + particle.pulsePhase) * breatheIntensity
      const currentDistance = particle.baseDistance + breathe

      // Calcular posición orbital
      particle.x = centerX() + Math.cos(particle.angle) * currentDistance
      particle.y = centerY() + Math.sin(particle.angle) * currentDistance

      // Actualizar estela para partículas exteriores
      if (particle.distanceRatio > 0.4) {
        const trail = particleTrails[index]
        trail.unshift({ x: particle.x, y: particle.y })
        if (trail.length > particle.trailLength) {
          trail.pop()
        }

        // Dibujar estela con desvanecimiento
        if (trail.length > 1) {
          for (let i = 1; i < trail.length; i++) {
            const trailOpacity = particle.opacity * (1 - i / trail.length) * 0.3
            const trailSize = particle.size * (1 - (i / trail.length) * 0.5)

            ctx.beginPath()
            ctx.arc(trail[i].x, trail[i].y, trailSize * 0.5, 0, Math.PI * 2)
            ctx.fillStyle = `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${trailOpacity})`
            ctx.fill()
          }
        }
      }

      // Efecto de pulsación sutil - más pronunciado en el exterior
      const pulseIntensity = 0.05 + particle.distanceRatio * 0.15
      const pulse = 1 + Math.sin(time * 1.8 + particle.pulsePhase) * pulseIntensity
      const currentSize = particle.size * pulse

      // Intensidad del glow basada en el tamaño - más intenso en el exterior
      const glowSize = currentSize * (1 + particle.distanceRatio * 0.5)

      // Dibujar glow exterior
      const glowGradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, glowSize)
      glowGradient.addColorStop(
        0,
        `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity * 0.9})`,
      )
      glowGradient.addColorStop(
        0.4,
        `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, ${particle.opacity * 0.4})`,
      )
      glowGradient.addColorStop(1, `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness}%, 0)`)

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      // Núcleo principal de la partícula
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${particle.hue}, ${particle.saturation}%, ${particle.lightness + 15}%, ${particle.opacity})`
      ctx.fill()

      // Punto central brillante para partículas grandes (del exterior)
      if (particle.distanceRatio > 0.7) {
        const coreSize = currentSize * 0.35
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, coreSize, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, ${particle.saturation}%, 85%, ${particle.opacity * 0.8})`
        ctx.fill()

        // Punto ultra-brillante para las partículas más grandes del exterior
        if (particle.distanceRatio > 0.9) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, coreSize * 0.4, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${particle.hue}, 40%, 95%, ${particle.opacity * 0.6})`
          ctx.fill()
        }
      }
    })

    // Dibujar un gradiente radial en el centro para simular profundidad
    const centerGradient = ctx.createRadialGradient(centerX(), centerY(), 0, centerX(), centerY(), 100)
    centerGradient.addColorStop(0, "rgba(0, 0, 10, 0.7)")
    centerGradient.addColorStop(0.5, "rgba(0, 0, 10, 0.3)")
    centerGradient.addColorStop(1, "rgba(0, 0, 10, 0)")

    ctx.beginPath()
    ctx.arc(centerX(), centerY(), 100, 0, Math.PI * 2)
    ctx.fillStyle = centerGradient
    ctx.fill()

    requestAnimationFrame(animate)
  }

  // Iniciar animación
  animate()

  // Interacción con mouse que respeta la lógica de profundidad
  canvas.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    particles.forEach((particle) => {
      const dx = mouseX - particle.x
      const dy = mouseY - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        const force = (150 - distance) / 150
        // Las partículas del exterior (más grandes) son más afectadas por el mouse
        const mouseEffect = 0.2 + particle.distanceRatio * 0.8
        particle.angle += force * 0.01 * mouseEffect
      }
    })
  })
})