import React from 'react'
import "../stylesheets/Animation.css"
import { motion } from "motion/react"
import { Notificacion } from '../components/Notificacion'

export const Animation = () => {
    return (
        <>
            <div className="animation-container d-flex align-items-center justify-content-center">
                <div className="animation-content d-flex align-items-center justify-content-center">
                    <div className="banner d-flex flex-column align-items-center justify-content-center rounded-4 gap-3">
                        <div className="logo-container d-flex align-items-center justify-content-center rounded-4">
                            <img className='p-3' src="/Logo.png" style={{ width: '80px' }} />
                        </div>
                        <div className="user-container d-flex align-items-center justify-content-center rounded-4">
                            <img className='p-2' src="/iconos/icono-perfil.png" style={{ width: '80px' }} />
                        </div>
                        <div className="links-container d-flex flex-column align-items-center justify-content-center rounded-4 ">
                            <img className='p-2' src="/iconos/icono-animacion.png" style={{ width: '80px' }} />
                            <img className='p-2' src="/iconos/icono-massobreleerse.png" style={{ width: '80px' }} />
                            <img className='p-2' src="/iconos/icono-info.png" style={{ width: '80px' }} />
                        </div>
                    </div>

                    <div className="content d-flex flex-column align-items-center justify-content-center gap-4">
                        <div className="progress-container d-flex align-items-center justify-content-center position-relative">
                            <div className="progress p-1" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar rounded" style={{ width: '50%' }}></div>
                            </div>
                            <div className="capitulos position-absolute d-flex align-items-center justify-content-between w-100">
                                <div className="containerNum rounded-5 d-flex align-items-center justify-content-center">
                                    <img src="/iconos/icono-num1.png" style={{ width: '30px' }} />
                                </div>
                                <div className="containerNum rounded-5 d-flex align-items-center justify-content-center">
                                    <img src="/iconos/icono-num2.png" style={{ width: '30px' }} />
                                </div>
                                <div className="containerNum rounded-5 d-flex align-items-center justify-content-center">
                                    <img src="/iconos/icono-num3.png" style={{ width: '30px' }} />
                                </div>
                                <div className="containerNum rounded-5 d-flex align-items-center justify-content-center">
                                    <img src="/iconos/icono-num4.png" style={{ width: '30px' }} />
                                </div>
                                <div className="containerNum rounded-5 d-flex align-items-center justify-content-center">
                                    <img src="/iconos/icono-num5.png" style={{ width: '30px' }} />
                                </div>
                                <div className="containerNum rounded-5 d-flex align-items-center justify-content-center">
                                    <img src="/iconos/icono-num6.png" style={{ width: '30px' }} />
                                </div>
                            </div>
                        </div>

                        <div className="reproductor d-flex align-items-center justify-content-center rounded-4 mt-2">
                            <div className="video-container d-flex align-items-center justify-content-center rounded-4 position-relative">
                                <img src="/iconos/icono-play.png" style={{ width: '100px' }} />
                                <Notificacion></Notificacion>
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                className='herramientas position-absolute bottom-0 start-0 d-flex align-items-center justify-content-center rounded-4'>
                                    <img src="/iconos/icono-herramientas.png" style={{ width: '65px' }} />
                                </motion.div>
                                <motion.div 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='diario position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center rounded-4'>
                                    <img src="/iconos/icono-diario.png" style={{ width: '65px' }} />
                                </motion.div>
                            </div>
                        </div>
                        <div className="sinopsis d-flex align-items-center justify-content-center rounded-4">
                            <p>lol lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
