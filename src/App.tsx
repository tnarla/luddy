import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    function startAnim() {
      setStart(true);
    }

    window.addEventListener("click", startAnim);

    return () => {
      window.removeEventListener("click", startAnim);
    };
  },[]);

  return (
    <div className="man">
      <div className="head"></div>
      <div className="body"></div>
      <motion.div
        animate={start ? { scaleX: [1, -1, 1] }: {}}
        transition={{ duration: 0.79, repeat: Infinity }}
        className="legs"
      >
        <div className="leg left">
          <div className="thigh">
            <div className="calf">
              <div className="foot"></div>
            </div>
          </div>
        </div>
        <div className="leg right">
          <div className="thigh right">
            <div className="calf right">
              <div className="foot right"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={start ? { rotate: [330, 30, 330] }: {}}
        transition={{ duration: 0.79, repeat: Infinity }}
        className="arm left"
      ></motion.div>
      <div className="arm right">
        <div className="shoulder">
          <div className="forearm"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
