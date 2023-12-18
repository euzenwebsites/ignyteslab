"use client"
import "../../globals.css"
import React from "react";
import { motion } from "framer-motion";


const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};

const Marquee = (props) => {
  return (
    <div>
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track "
          variants={marqueeVariants}
          animate="animate">
          <h1>
            {props.title}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;