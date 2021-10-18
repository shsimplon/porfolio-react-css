/* eslint-disable no-undef */
import React from 'react';
import Particles from 'react-particles-js';

const Particle = () => {
    return (
        <div>
              <Particles
            params={{
             particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 1000,
            }
        
          },
         

          
          shape:{
              type:"circle",
              stroke:{
                  width:5,
                  color:'#F9D5A7'
              }

          }
        },
      }}
     
          />
        </div>
    );
};

export default Particle;