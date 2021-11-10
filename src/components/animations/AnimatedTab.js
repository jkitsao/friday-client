import React from "react";
import { motion } from "framer-motion";
function AnimatedTab({ Component }) {
  return (
    <motion.div initial={{ x: -100 }} animate={{ x: 0 }}>
      <Component />
    </motion.div>
  );
}

export default AnimatedTab;
