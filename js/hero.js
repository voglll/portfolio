document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("particles-js", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 8,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        image: {
          src: "images/cloud.svg",
          width: 100,
          height: 70,
        },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 30, max: 60 },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    // --- THIS IS THE CRUCIAL FIX ---
    // We enable click detection but do NOT specify any default modes.
    // This allows our custom listener below to be the ONLY thing that runs on click.
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "attract", // Using a non-visual mode to ensure clicks are captured
        },
      },
      modes: {
          attract: { // This mode has no visual effect but keeps the click listener active
              distance: 1,
              duration: 1,
              speed: 0
          }
      }
    },
    detectRetina: true,

  }).then(container => {
    // This listener will now work correctly because clicks are enabled above.
    container.addParticleClickListener((event, particle) => {
      
      if (!particle) {
        return;
      }

      // 1. Define the "burst" emitter
      const emitterOptions = {
        life: {
          duration: 0.1,
          count: 1,
        },
        position: particle.getPosition(),
        particles: {
          color: {
            value: "#0c081e",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            speed: { min: 5, max: 10 },
            direction: "outside",
            decay: 0.1,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 5,
              destroy: "min",
            },
          },
        },
      };

      // 2. Add the emitter to create the burst
      container.addEmitter(emitterOptions);

      // 3. Destroy the original cloud
      particle.destroy();
    });
  });
});
