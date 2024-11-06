import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, useDisclosure } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import locationAPI from "../api/locationAPI.js";
import { useNavigate } from "react-router-dom";
import LocationForm from "../components/LocationForm";

export default function Location() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenEdit, onOpenEdit, onCloseEdit } = useDisclosure();
  const navigate = useNavigate();
  const [locationSearch, setLocationSearch] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const renderLocationData = async () => {
      const locations = await locationAPI.getAllLocations();
      setLocations(locations);
      setLocationSearch(locations);
    };
    renderLocationData();
  }, []);

  const handleLocationSearch = (searchQuery) => {
    const locationSearch = locations;
    const filteredLocations = locationSearch.filter((location) =>
      location.name.includes(searchQuery)
    );
    setLocationSearch(filteredLocations);
  };

  const handleCreateOpen = () => {
    onOpen();
  };

  return (
    <div className="h-full px-10 bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="py-8">
        <h1
          className="text-8xl text-white font-thin underline italic"
          style={{ textShadow: "1px 5px 5px black" }}
        >
          Location Finder
        </h1>
      </div>
      <div className="w-full py-4 flex">
        <Input
          type="search"
          size={"lg"}
          onChange={(event) => handleLocationSearch(event.target.value)}
          startContent={<CiSearch size={32} />}
        />
        <div className="px-2">
          <Button
            size="lg"
            className="bg-gradient-to-tr from-orange-200/50 to-blue-950/10 border-2 border-white text-white shadow-lg font-normal"
            onPress={() => handleCreateOpen()}
          >
            Add Location
          </Button>
        </div>
      </div>
      <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {locationSearch.map((location) => (
          <>
            <Card className="col-span-12 sm:col-span-4 h-[600px] shadow-lg shadow-black border-2 border-white/5">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-2xl text-white/80 uppercase font-thin">
                  {location.street_name}, {location.city}, {location.country}{" "}
                  {location.postal_code}
                </p>
                <h4
                  className="text-white font-normal text-7xl w-1/2"
                  style={{ textShadow: "1px 5px 5px black" }}
                >
                  {location.name}
                </h4>
              </CardHeader>

              <div className="absolute z-10 bottom-1 right-1 flex-col !items-start">
                <Button
                  variant="ghost"
                  className="bg-gradient-to-tr from-pink-500/90 to-yellow-500/90 border-2 border-white text-white shadow-lg font-normal my-4"
                >
                  Edit Location
                </Button>
                <Button
                  className="mx-2 bg-gradient-to-tr from-orange-200/100 to-blue-950/5 border-2 border-white text-white shadow-lg font-normal my-4"
                  onClick={() => navigate(`/location/${location.id}`)}
                >
                  View Location
                </Button>
              </div>
              <img
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={location.images}
              />
            </Card>{" "}
          </>
        ))}
      </div>

      <LocationForm isOpen={isOpen} onClose={onClose} />
    </div>
  );
}
