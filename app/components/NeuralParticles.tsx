"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function NeuralParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        color: { value: "#64FFDA" },
        links: {
          color: "#64FFDA",
          distance: 140,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: 0.8,
        },
        number: { value: 70 },
        opacity: { value: 0.25 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: { grab: { distance: 180, links: { opacity: 0.35 } } },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!ready) {
    return null;
  }

  return (
    <Particles
      id="neural-particles"
      className="pointer-events-none absolute inset-0 -z-10"
      options={options}
    />
  );
}
