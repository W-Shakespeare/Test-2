import { useEffect, useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { MobileMenu } from "./components/MobileMenu/MobileMenu";
import { useIsMobile } from "./hooks/useIsMobile";
import { Routes } from "./routes";

const App = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      {isMobile ? <MobileMenu /> : <Menu />}
      <Routes />
    </>
  );
};

export default App;
