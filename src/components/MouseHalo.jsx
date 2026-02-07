import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function MouseHalo() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const activeMeshRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })
  const [printedHalos, setPrintedHalos] = useState([])
  // Taille initiale aléatoire pour le halo actif
  const [activeHaloSize, setActiveHaloSize] = useState(() => 0.4 + Math.random() * 1.1)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Halo actif qui suit la souris
    const activeGeometry = new THREE.CircleGeometry(activeHaloSize, 64)
    const activeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: false,
      opacity: 1
    })
    const activeMesh = new THREE.Mesh(activeGeometry, activeMaterial)
    scene.add(activeMesh)

    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer
    activeMeshRef.current = activeMesh

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    const handleClick = (e) => {
      // Vérifier si on clique sur un élément cliquable
      const target = e.target
      const isClickable = target.tagName === 'A' ||
                         target.tagName === 'BUTTON' ||
                         target.closest('a') ||
                         target.closest('button')

      if (!isClickable) {
        // Capturer la taille ACTUELLE du halo via la ref
        const currentSize = activeMeshRef.current?.geometry?.parameters?.radius || 0.7

        // 1. Imprimer le halo à la position actuelle avec la MÊME taille que le halo actif
        setPrintedHalos(prev => [...prev, {
          x: mousePosition.current.x,
          y: mousePosition.current.y,
          size: currentSize, // Utiliser la taille RÉELLE du mesh actif
          id: Date.now()
        }])

        // 2. Générer une NOUVELLE taille complètement aléatoire pour le halo de la souris
        const newSize = 0.4 + Math.random() * 1.1 // Taille aléatoire entre 0.4 et 1.5
        setActiveHaloSize(newSize)
      }
    }

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    const animate = () => {
      requestAnimationFrame(animate)

      if (activeMeshRef.current && cameraRef.current) {
        const aspect = window.innerWidth / window.innerHeight
        const vFov = cameraRef.current.fov * Math.PI / 180
        const height = 2 * Math.tan(vFov / 2) * cameraRef.current.position.z
        const width = height * aspect

        const x = (mousePosition.current.x / window.innerWidth) * width - width / 2
        const y = -(mousePosition.current.y / window.innerHeight) * height + height / 2

        targetPosition.current = { x, y }

        activeMeshRef.current.position.x += (targetPosition.current.x - activeMeshRef.current.position.x) * 0.1
        activeMeshRef.current.position.y += (targetPosition.current.y - activeMeshRef.current.position.y) * 0.1
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      if (activeGeometry) activeGeometry.dispose()
      if (activeMaterial) activeMaterial.dispose()
    }
  }, [])

  // Mettre à jour la taille du halo actif quand elle change
  useEffect(() => {
    if (!activeMeshRef.current) return

    // Remplacer la géométrie du halo actif
    const oldGeometry = activeMeshRef.current.geometry
    activeMeshRef.current.geometry = new THREE.CircleGeometry(activeHaloSize, 64)
    oldGeometry.dispose()
  }, [activeHaloSize])

  // Ajouter les halos imprimés à la scène
  useEffect(() => {
    if (!sceneRef.current || !cameraRef.current) return

    // Nettoyer les anciens halos imprimés de la scène
    const meshesToRemove = sceneRef.current.children.filter(
      child => child.userData.isPrinted
    )
    meshesToRemove.forEach(mesh => {
      sceneRef.current.remove(mesh)
      mesh.geometry.dispose()
      mesh.material.dispose()
    })

    // Ajouter les nouveaux halos imprimés
    printedHalos.forEach(halo => {
      const aspect = window.innerWidth / window.innerHeight
      const vFov = cameraRef.current.fov * Math.PI / 180
      const height = 2 * Math.tan(vFov / 2) * cameraRef.current.position.z
      const width = height * aspect

      const x = (halo.x / window.innerWidth) * width - width / 2
      const y = -(halo.y / window.innerHeight) * height + height / 2

      const geometry = new THREE.CircleGeometry(halo.size, 64) // Utilise la taille stockée
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: false,
        opacity: 1
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(x, y, 0) // MÊME profondeur que le halo actif pour avoir la MÊME taille visuelle
      mesh.userData.isPrinted = true
      sceneRef.current.add(mesh)
    })
  }, [printedHalos])

  return <div ref={containerRef} className="mouse-halo-container" />
}

export default MouseHalo
