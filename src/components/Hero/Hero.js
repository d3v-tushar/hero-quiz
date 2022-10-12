import React from 'react';
import Modal from '../Modal/Modal';

const Hero = () => {
    return (
        <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Take A QUIZ <br /> & <br /> BE A HERO</h1>
            <label htmlFor="my-modal-6" className="btn modal-button">Take A Quiz</label>
            <Modal></Modal>
            </div>
        </div>
        </div>
    );
};

export default Hero;