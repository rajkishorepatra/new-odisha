import React from 'react'
import logo from '../assets/logoSvg.svg'
import main from '../assets/main.jpeg'
import ConfettiExplosion from 'react-confetti-explosion';
import Typewriter from 'typewriter-effect';


function Home() {
    return (
        <>

            <div className="home">
                <ConfettiExplosion particleCount={500} duration={3000} force={0.6} width={10000} height='100vh' />
                <img src={logo} alt="logo" width={70} className='ml-5 mt-3' />
                <img src={main} alt='main' className='px-3 pb-3 pt-1 mb-2' />
                <div className="text-center fw-bold fs-3 p-2 pb-4" style={{ color: "red" }}>
                    <Typewriter
                        options={{
                            strings: ['We welcome all the Talented Creators of Odisha to this MEGA SUMMIT 💖', 'Join us on July 16, 10 AM at Bhubaneswar.'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2000,
                            deleteSpeed: 5,
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Home