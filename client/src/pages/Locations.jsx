import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import locationAPI from "../api/locationAPI";

export default function Location() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [locations, setLocations] = useState([]);

  const [locationName, setLocationName] = useState();
  const [locationDescription, setLocationDescription] = useState();
  const [locationStreetName, setLocationStreetName] = useState();
  const [locationCity, setLocationCity] = useState();
  const [locationPostalCode, setLocationPostalCode] = useState();
  const [locationCountry, setLocationCountry] = useState();
  const [locationLongitude, setLocationLongitude] = useState();
  const [locationLatitude, setLocationLatitude] = useState();
  const exampleLocationData = {
    name: "First Avenue",
    description:
      "Housed in an old depot, this rock venue & tiny side bar have hosted & launched many acts since 1970.",
    street_name: "701 First Avenue North",
    city: "	Minneapolis",
    postal_code: "55403",
    country: "United States",
    longitude: 44.978,
    latitude: -93.27594,
  };

  useEffect(() => {
    const renderLocationData = async () => {
      const locations = await locationAPI.getAllLocations();
      setLocations(locations);
      console.log(locations);
    };
    renderLocationData();
  }, []);

  const handleLocationCreation = async () => {
    try {
      const locationData = {
        user_id: 1,
        name: locationName,
        description: locationDescription,
        street_name: locationStreetName,
        city: locationCity,
        postal_code: locationPostalCode,
        country: locationCountry,
        longitude: locationLongitude,
        latitude: locationLatitude,
      };
      console.log(locationData);
      const result = await locationAPI.createLocation(locationData);
      console.log("Location Creation Accomplished");
    } catch (error) {
      console.log("Location Creation Failed: ", error);
    }
  };

  const handleOpen = () => {
    onOpen();
  };

  return (
    <div className="h-screen px-10 bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div>
        <h1
          className="text-8xl text-white font-thin"
          style={{ textShadow: "1px 5px 5px black" }}
        >
          Location Finder
        </h1>
      </div>
      <div className="w-full py-4 flex">
        <Input
          type="search"
          size={"lg"}
          startContent={<CiSearch size={32} />}
        />
        <div className="px-2">
          <Button
            size="lg"
            className="bg-gradient-to-tr from-orange-200/50 to-blue-950/10 border-2 border-white text-white shadow-lg font-normal"
            onPress={() => handleOpen()}
          >
            Add Location
          </Button>
        </div>
      </div>
      <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {locations.map((location) => (
          <>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
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
                <Button className="bg-gradient-to-tr from-orange-200/100 to-blue-950/5 border-2 border-white text-white shadow-lg font-normal my-4">
                  View Location Details
                </Button>
              </div>
              <img
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1618946478890-a70e1faa63df?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Card>{" "}
          </>
        ))}
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-2xl text-white/80 uppercase font-thin">
              Suite 244 96908 Macejkovic Expressway, Evieton, WY 28488-8750
            </p>
            <h4
              className="text-white font-normal text-7xl w-1/2"
              style={{ textShadow: "1px 5px 5px black" }}
            >
              Miami X Fly Bar
            </h4>
          </CardHeader>
          <div className="absolute z-10 bottom-1 right-1 flex-col !items-start">
            <Button className="bg-gradient-to-tr from-orange-200/100 to-blue-950/5 border-2 border-white text-white shadow-lg font-normal my-4">
              View Location Details
            </Button>
          </div>
          <img
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1618946478890-a70e1faa63df?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Card>{" "}
      </div>

      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-stone-950"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white text-4xl font-thin">
                <h1>Upload Location</h1>
                <hr style={{ color: "gray" }} className="w-36 p-2"></hr>
                <p className="text-lg text-slate-100">
                  Fill in all the available information you have about your
                  location and we will add it so users can blog about it and
                  provide messaging about it
                </p>
              </ModalHeader>
              {
                // name, description, street_name, city, postal_code, country, longitude, latitude
              }{" "}
              <ModalBody>
                <div>
                  <Input
                    className="text-white bg-black"
                    size={"lg"}
                    label="Location Name"
                    variant="bordered"
                    onChange={(event) => setLocationName(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white bg-black"
                    size={"lg"}
                    label="Street Name"
                    variant="bordered"
                    onChange={(event) =>
                      setLocationStreetName(event.target.value)
                    }
                  />
                </div>
                <div>
                  <Input
                    className="text-white bg-black"
                    size={"lg"}
                    label="City"
                    variant="bordered"
                    onChange={(event) => setLocationCity(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white bg-black"
                    size={"lg"}
                    label="Postal Code"
                    variant="bordered"
                    onChange={(event) =>
                      setLocationPostalCode(parseInt(event.target.value))
                    }
                  />
                </div>
                <div>
                  <Input
                    className="text-white bg-black"
                    size={"lg"}
                    label="Country"
                    variant="bordered"
                    onChange={(event) => setLocationCountry(event.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    size={"lg"}
                    variant="bordered"
                    className="text-white bg-black"
                    onChange={(event) =>
                      setLocationDescription(event.target.value)
                    }
                  />
                </div>
                <div className="flex">
                  <Input
                    type="number"
                    className="text-white bg-black"
                    size={"lg"}
                    label="Latitude"
                    min={"-2000000"}
                    variant="bordered"
                    onChange={(event) =>
                      setLocationLatitude(parseFloat(event.target.value))
                    }
                  />
                  <Input
                    type="number"
                    className="text-white bg-black"
                    size={"lg"}
                    label="Longitude"
                    variant="bordered"
                    min={"-2000000"}
                    onChange={(event) =>
                      setLocationLongitude(parseFloat(event.target.value))
                    }
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-tr from-orange-200/50 to-blue-950 border-2 border-white text-white shadow-lg font-thin"
                  onPress={handleLocationCreation}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
