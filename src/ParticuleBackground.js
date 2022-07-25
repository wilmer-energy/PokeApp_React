import React from "react";
import Particles from "react-tsparticles";
import dd from "./config/particle-config.js"

const ParticuleBackground = () => {
    return (
        <div>
            <Particles params={dd}></Particles>
        </div>
    );
};

export default ParticuleBackground;