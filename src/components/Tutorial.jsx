import React from 'react'
import "../stylesheets/Tutorial.css"

export const Tutorial = () => {
    return (
        <>
            <div className="tutorial-container d-flex justify-content-center align-items-center">

                <div className="card" role="alert" aria-live="assertive" aria-atomic="true" 
                style={{ width: '100%', maxWidth: '420px', border: '24px solid #e0d0ec', borderRadius: '14px' }}>

                    <div className="card-body p-4">

                        <h5 className="card-title text-center fw-bold mb-3" style={{ color: '#000000', fontSize: '1.05rem' }}>  Bienvenido al interior<br />de Leersé </h5>

                        <p style={{ fontSize: '0.88rem', color: '#000000', lineHeight: '1.75' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn px-5 py-2" style={{ backgroundColor: '#8c030e', color: '#e0d0ec', border: 'none', borderRadius: '6px' }}> comenzar </button>
                        </div>

                    </div>

                </div>

            </div>

            <div className='tutorial-container d-flex justify-content-center align-items-center'>

                <div class="card" role="alert" aria-live="assertive" aria-atomic="true" style={{ width: '100%', maxWidth: '420px', border: '24px solid #e0d0ec', borderRadius: '14px' }}>

                    <div class="card-body p-4">
                        Hello, world! This is a toast message.

                        <div class="mt-2 pt-2 border-top ">
                            <button type="button" class="btn btn-primary btn-sm">Take action</button>
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
                        </div>

                    </div>

                </div>
            </div>

        </ >
    )
}