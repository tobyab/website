import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function Transition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const fadedOut = { opacity: 0 };
  const fadeIn = { opacity: 1 };

  const transition = { duration: 0.8, ease: "easeInOut" };

  return (
    <motion.div
      ref={ref}
      initial={fadedOut}
      animate={fadeIn}
      exit={fadedOut}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(Transition);
