import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function Transition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const fadeIn = {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  };

  const exitTransition = {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={fadeIn}
      exit={exitTransition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(Transition);
