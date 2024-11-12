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
import { UseUserContext } from "../context/userContext";

export default function LocationForm({
  isOpen,
  onClose,
  location_id,
  name,
  description,
  street_name,
  city,
  postal_code,
  country,
  longitude,
  latitude,
  images,
}) {
  const { currentUser, userDetails, userLoggedIn, loading } = UseUserContext();
  const [locationName, setLocationName] = useState(name || "");
  const [locationDescription, setLocationDescription] = useState(
    description || ""
  );
  const [locationStreetName, setLocationStreetName] = useState(
    street_name || ""
  );
  const [locationCity, setLocationCity] = useState(city || "");
  const [locationPostalCode, setLocationPostalCode] = useState(
    postal_code || ""
  );
  const [locationCountry, setLocationCountry] = useState(country || "");
  const [locationLongitude, setLocationLongitude] = useState(longitude || 0);
  const [locationLatitude, setLocationLatitude] = useState(latitude || 0);
  const [locationImage, setLocationImage] = useState(images || "");

  const handleLocationCreation = async () => {
    try {
      const locationData = {
        user_id: userDetails.id,
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

  const handleLocationUpdate = async () => {
    try {
      const locationData = {
        location_id: location_id,
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
      const result = await locationAPI.updateLocation(locationData);
      console.log("Location Update Accomplished");
      onClose;
    } catch {
      console.log("Location Update Failed: ", error);
    }
  };

  const handleLocationDeletion = async () => {
    try {
      const locationData = {
        location_id: location_id,
      };
      console.log(locationData);
      const result = await locationAPI.deleteLocation(locationData);
      console.log("Location Update Accomplished");
    } catch {
      console.log("Location Update Failed: ", error);
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
              <ModalBody>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Location Name"
                    variant="bordered"
                    value={locationName}
                    onChange={(event) => setLocationName(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Location Image URL"
                    variant="bordered"
                    value={locationImage}
                    onChange={(event) => setLocationImage(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Street Name"
                    variant="bordered"
                    value={locationStreetName}
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
                    value={locationCity}
                    onChange={(event) => setLocationCity(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white "
                    size={"lg"}
                    label="Postal Code"
                    variant="bordered"
                    value={locationPostalCode}
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
                    value={locationCountry}
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
                    value={locationDescription}
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
                    value={locationLatitude}
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
                    value={locationLongitude}
                    onChange={(event) =>
                      setLocationLongitude(parseFloat(event.target.value))
                    }
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                {location_id && (
                  <Button
                    color="danger"
                    variant="bordered"
                    onPress={handleLocationDeletion}
                  >
                    Delete Location
                  </Button>
                )}
                {location_id ? (
                  <Button
                    className=" border-white text-white shadow-lg "
                    variant="bordered"
                    onPress={handleLocationUpdate}
                  >
                    Edit Location
                  </Button>
                ) : (
                  <Button
                    className="  border-white text-white shadow-lg font-thin"
                    variant="bordered"
                    onPress={handleLocationCreation}
                  >
                    Create Location
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
