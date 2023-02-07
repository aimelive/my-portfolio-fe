import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from "../../utils/variants";

const ScreenComponent = (props: {
  name: string;
  component: () => JSX.Element;
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      id={`SCREEN_${props.name}`}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <props.component />
    </motion.div>
  );
};

export default ScreenComponent;
