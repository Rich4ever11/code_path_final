import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import locationAPI from "../api/locationAPI.js";

export default function LocationForm({ isOpen, onClose }) {
  const [locationName, setLocationName] = useState();
  const [locationDescription, setLocationDescription] = useState();
  const [locationStreetName, setLocationStreetName] = useState();
  const [locationCity, setLocationCity] = useState();
  const [locationPostalCode, setLocationPostalCode] = useState();
  const [locationCountry, setLocationCountry] = useState();
  const [locationLongitude, setLocationLongitude] = useState();
  const [locationLatitude, setLocationLatitude] = useState();
  const [locationImage, setLocationImage] = useState();

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
        image: locationImage,
      };
      console.log(locationData);
      const result = await locationAPI.createLocation(locationData);
      console.log("Location Creation Accomplished");
      onClose();
    } catch (error) {
      console.log("Location Creation Failed: ", error);
    }
  };

  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-stone-950/85"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white text-4xl font-thin">
                <h1>Upload Location</h1>
                <hr style={{ color: "gray" }} className="w-2/3 p-2"></hr>
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
                    className="text-white"
                    size={"lg"}
                    label="Location Name"
                    variant="bordered"
                    onChange={(event) => setLocationName(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Location Image URL"
                    variant="bordered"
                    onChange={(event) => setLocationImage(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
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
                    className="text-white "
                    size={"lg"}
                    label="City"
                    variant="bordered"
                    onChange={(event) => setLocationCity(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white "
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
                    className="text-white "
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
                    className="text-white "
                    onChange={(event) =>
                      setLocationDescription(event.target.value)
                    }
                  />
                </div>
                <div className="flex">
                  <Input
                    type="number"
                    className="text-white "
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
                    className="text-white "
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
    </>
  );
}
