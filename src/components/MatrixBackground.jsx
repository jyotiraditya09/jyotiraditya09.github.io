import { useEffect, useRef } from 'react'

const CHARS = '01アイウエオカキクケコ∫∑∏∂∇λμσπβαγδ{}[]<>=+-*/|'

export default function MatrixBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const fontSize = 13
    let drops = []
    let animFrame

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const cols = Math.floor(canvas.width / fontSize)
      drops = Array.from({ length: cols }, () => Math.floor(Math.random() * -80))
    }

    init()

    let lastRender = 0
    const draw = (timestamp) => {
      if (timestamp - lastRender < 70) {
        animFrame = requestAnimationFrame(draw)
        return
      }
      lastRender = timestamp

      ctx.fillStyle = 'rgba(3, 3, 9, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const brightness = Math.random() > 0.95 ? 0.9 : 0.18

        ctx.fillStyle = `rgba(0, 255, 136, ${brightness})`
        ctx.font = `${fontSize}px "Fira Code", monospace`
        ctx.fillText(char, i * fontSize, y * fontSize)

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })

      animFrame = requestAnimationFrame(draw)
    }

    animFrame = requestAnimationFrame(draw)

    const onResize = () => {
      cancelAnimationFrame(animFrame)
      init()
      animFrame = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.13 }}
    />
  )
}
