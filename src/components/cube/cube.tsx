'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import styles from './cube.module.css'

export const Cube = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const animationRef = useRef<GSAPAnimation | null>(null)

	useGSAP(() => {
		if (containerRef.current) {
			gsap.set(containerRef.current, {
				transform: 'translate3d(0, 0, -400px)',
				transformStyle: 'preserve-3d',
			})

			animationRef.current = gsap.to(containerRef.current, {
				rotationX: 360,
				rotationY: 360,
				duration: 10,
				ease: 'linear',
				repeat: -1,
			})

			containerRef.current.addEventListener('mouseenter', () => {
				animationRef.current?.pause()
			})

			containerRef.current.addEventListener('mouseleave', () => {
				animationRef.current?.play()
			})
		}

		return () => {
			if (containerRef.current) {
				containerRef.current.removeEventListener('mouseenter', () => { })
				containerRef.current.removeEventListener('mouseleave', () => { })
			}
			animationRef.current?.kill()
		}
	}, [])

	return (
		<div className={styles.cubeContainer}>
			<div className={styles.cube} ref={containerRef}>
				<div className={styles.side} data-side='1'></div>
				<div className={styles.side} data-side='2'></div>
				<div className={styles.side} data-side='3'></div>
				<div className={styles.side} data-side='4'></div>
				<div className={styles.side} data-side='5'></div>
				<div className={styles.side} data-side='6'></div>
			</div>
		</div>
	)
}
