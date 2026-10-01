import { useEffect, useRef } from "react";
import Typed, { type TypedOptions } from "typed.js";

interface Props {
  options: TypedOptions;
}

const Typewriter: React.FC<Props> = ({ options }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, options);

    return () => typed.destroy();
  }, []);

  return <span ref={el}></span>;
};

export default Typewriter;
