"use client"

import { Button, Input, Navbar, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LogoRyM from "@/public/LogoRickyMorty.webp";
import Image from "next/image";
import DimensionInf from "./DimensionInf";
import CardInf from "./CardInf";

const NavbarSearch = () => {
  const [location, setlocation] = useState({});

  const [searchId, setSearchId] = useState("");

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const idRandom = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${idRandom}`)
      .then((res) => {
        setlocation(res.data);

        // setTimeout(() => setloading(false), 2000)
        setloading(false);
      });
  }, []);



  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchId}`)

      .then((res) => setlocation(res.data));
  };

  return (
    <div className="scrollbar-none">

      <div className="video-container ">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="/fondo1.mp4" type="video/mp4" />
          {/* Agrega más <source> según los formatos de video compatibles */}
          Tu navegador no admite el elemento de video.
        </video>
      </div>

      <Navbar
        placeholder={""}
        className="mx-auto max-w-none bg-[#030014]  px-4 py-3 rounded-none border-none relative z-20"
      >
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 text-white">
          <Image src={LogoRyM} width={270} alt="" className="w-52" />

          <div className="relative flex w-full gap-2 md:w-max items-end">
            <Input
              crossOrigin={""}
              type="search"
              value={searchId}
              onChange={e => setSearchId(e.target.value)}
              color="white"
              label="search dimension "
              className="pr-20"
              containerProps={{
                className: "min-w-[320px]",
              }}
            />
            <Button
              placeholder={""}
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
              onClick={searchType}
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
      <div className="relative z-20">
        <DimensionInf locationInf={location} />
     
      </div>
    <div className="flex justify-center items-center content-center flex-wrap gap-8 py-8">
    {
      location.residents?.map(locations => (
      <CardInf
        url={locations}   
        key={locations}
            />

      ))
      

    }
    </div>

    </div>
  );
};

export default NavbarSearch;
