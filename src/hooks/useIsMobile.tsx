import { useEffect, useState } from "react";
import { mobileWidth } from "../utils/constants";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(document.body.clientWidth <= mobileWidth);
    const func = () => {
      document.body.clientWidth >= mobileWidth
        ? setIsMobile(false)
        : setIsMobile(true);
    };

    window.addEventListener(`resize`, func, false);

    return () => window.removeEventListener("resize", func);
  }, []);

  return { isMobile };
};
