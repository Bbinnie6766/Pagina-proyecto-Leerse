import React from 'react'

export const VideManuela = () => {
  return (
    <>
    <h1>Video Manuela</h1>
    <video ref={VideoRef} width={320} height="240" src="">

        <source src='https://www.w3schools.com/Html/mov_bbb.mp4' type='video/mp4'/>
     

    </video>

    <div>
        <button onClick={handlePlay}>Play</button>
        <button>Pause</button>
    </div>
    </>
  )
}
