import React, { useEffect, useState } from 'react';
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const JournalLayout = ({ children }) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del efecto al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Dependencia vacía para que solo se ejecute al montar y desmontar

  return (
    <div className="flex flex-row animate__animated animate__fadeIn animate__faster h-screen">

      {/* NavBar */}
      <NavBar />

      {/* SideBar */}
      {
        windowWidth > 768 && <SideBar />
      }

      <main className="mt-16 p-3 grow">
        {/* Toolbar */}

        {children}
      </main>

    </div>
  );
};
