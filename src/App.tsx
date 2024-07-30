import { useEffect, useRef } from "react";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./reset.css";
import "./style.css";
import { Typography } from "@mui/material";

function App() {
  const scrollRef = useRef<Lenis>();

  useEffect(() => {
    scrollRef.current = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    scrollRef.current.on("scroll", ScrollTrigger.update);

    const updateFunc: gsap.TickerCallback = (time: number) =>
      scrollRef.current?.raf(time * 1000);

    gsap.ticker.add(updateFunc, false, true);

    return () => {
      gsap.ticker.remove(updateFunc);
      scrollRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <Scrollytelling.Root>
          <Scrollytelling.Pin
            childHeight={500}
            pinSpacerHeight={"100vh"}
            top={0}
          >
            <section className="section">
              <div className="wrapper">
                <Typography color="neutral" variant="h1">
                  Layered pinning 1
                </Typography>
              </div>
            </section>
          </Scrollytelling.Pin>
        </Scrollytelling.Root>

        <Scrollytelling.Root>
          <Scrollytelling.Pin
            childHeight={400}
            pinSpacerHeight={"100vh"}
            top={0}
          >
            <section className="section orange">
              <div className="wrapper">
                <Typography color="neutral" variant="h1">
                  Layered pinning 2
                </Typography>
              </div>
            </section>
          </Scrollytelling.Pin>
        </Scrollytelling.Root>

        <Scrollytelling.Root>
          <Scrollytelling.Pin
            childHeight={500}
            pinSpacerHeight={"100vh"}
            top={0}
          >
            <section className="section">
              <div className="wrapper">
                <Typography color="neutral" variant="h1">
                  Layered pinning 3
                </Typography>
              </div>
            </section>
          </Scrollytelling.Pin>
        </Scrollytelling.Root>
      </main>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="aa ci dp ed pf th vm bfj"
        style={{
          filter: "blur(150px)",
          position: "fixed",
          display: "flex",
          bottom: "40rem",
        }}
      >
        <circle
          r="1512"
          cx="1512"
          cy="512"
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.3"
        ></circle>
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6"></stop>
            <stop offset="1" stopColor="#E935C1"></stop>
          </radialGradient>
        </defs>
      </svg>
    </>
  );
}

export default App;
