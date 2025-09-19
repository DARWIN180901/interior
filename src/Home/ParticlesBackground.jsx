import { useEffect, useRef } from "react";

export default function ParticlesBackground({ children }) {
  const particlesRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    let isInitialized = false;

    // Function to initialize particles
    const initializeParticles = () => {
      if (window.particlesJS && particlesRef.current && !isInitialized) {
        isInitialized = true;
        console.log('Initializing particles...');
        
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#ffffff'
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: 0.6,
              random: false
            },
            size: {
              value: 3,
              random: true
            },
           links: {       
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
  detect_on: 'canvas',
  events: {
    onhover: {
      enable: true,
      mode: 'repulse'
    },
    onclick: {
      enable: true,
      mode: 'push'
    },
    resize: true
  },
  modes: {
    grab: {
      distance: 200,
      line_linked: {
        opacity: 1
      }
    },
    repulse: {
      distance: 200,
      duration: 0.4
    },
    push: {
      particles_nb: 4
    }
  }
},

          retina_detect: true
        });

        // Verify initialization
        setTimeout(() => {
          if (window.pJSDom && window.pJSDom[0]) {
            console.log('✅ Particles initialized successfully');
            const canvas = window.pJSDom[0].pJS.canvas.el;
            console.log('Canvas element:', canvas);
            console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
          } else {
            console.error('❌ Particles failed to initialize');
          }
        }, 1000);
      }
    };

    // Check if particles.js is already loaded
    if (window.particlesJS) {
      initializeParticles();
    } else {
      // Load particles.js from CDN
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        console.log('Particles.js loaded from CDN');
        setTimeout(initializeParticles, 200);
      };
      script.onerror = () => {
        console.error('Failed to load particles.js from CDN');
      };
      
      document.head.appendChild(script);
      scriptRef.current = script;
    }

    // Simple resize handler - just let particles.js handle it internally
    const handleResize = () => {
      // Most particles.js versions handle resize automatically
      // If not, we'll just reinitialize
      if (window.pJSDom && window.pJSDom[0]) {
        console.log('Window resized - particles should auto-adjust');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Clean up particles
      if (window.pJSDom && window.pJSDom[0]) {
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
          canvas.remove();
        }
        window.pJSDom = [];
      }
      
      // Remove script
      if (scriptRef.current && scriptRef.current.parentNode) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, []);

  return (

<div
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'transparent',
    zIndex: 0
  }}
>


<div 
  id="particles-js" 
  ref={particlesRef}
  style={{
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 100
  }}
/>

      

      <div style={{ 
        position: 'relative', 
        zIndex: 10,
        width: '100%',
        height: '100%'
      }}>
        {children}
      </div>
    </div>
  );
}