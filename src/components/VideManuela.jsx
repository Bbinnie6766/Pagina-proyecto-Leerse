import React, { useRef, useState } from 'react'

export const VideManuela = () => {

    const [first, setfirst] = useState(false)
    const [detener, setdetener] = useState(false)

    const videoRef = useRef(null)

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    const handleAvanzar = () => {
        videoRef.current.currentTime += 6
    }

    const handleUptade = () => {
        if (
            videoRef.current.currentTime >= 5 && !detener
        ) {
            videoRef.current.pause()
        }
    }

    return (
        <>
            <h1>Video Manuela</h1>

            <video
                ref={videoRef}
                width={320}
                height="240"
                onTimeUpdate={handleUptade}
                controls
            >
                <source
                    src='https://www.w3schools.com/html/mov_bbb.mp4'
                    type='video/mp4'
                />
            </video>

            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleAvanzar}>Avanzar 6s</button>
                <button onClick={handleContinuar}></button>
            </div>
        </>
    )
}