import React from "react";
import Particles from "../../Reactbits/Particles/Particles";


const background = () => {
  return (
   <>
     <div style={{ width: '100%', height: '100vh', position: 'fixed' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
   </>
  );
};

export default background;
