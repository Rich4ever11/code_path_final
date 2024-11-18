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
  Avatar,
} from "@nextui-org/react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import userAPI from "../api/user";
import { app } from "../util/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ isOpen, onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const convertStringToArray = (value) => {
    return "{" + value + "}";
  };

  const handleUserRegistration = async () => {
    if (email == "" || password == "") {
      return;
    }
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const requestBody = {
      firebase_id: userCredentials.user.uid,
      firstName: firstName,
      lastName: lastName,
      imgurl: convertStringToArray(profileImage),
      username: username,
      bio: bio,
      role: "user",
    };
    console.log(requestBody);
    const result = await userAPI.createUserAccount(requestBody);
    window.location.reload();
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
                <h1 className="py-2 text-4xl underline">Registration</h1>
                <p className="text-lg text-slate-100">
                  Register to customize your account and create it for specific
                  users
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center">
                  <Avatar src={profileImage} className="w-20 h-20 text-large" />
                </div>
                <div className="flex space-x-2">
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="First Name"
                    variant="bordered"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Last Name"
                    variant="bordered"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Profile Image URL"
                    variant="bordered"
                    value={profileImage}
                    onChange={(event) => setProfileImage(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Username"
                    variant="bordered"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Email"
                    variant="bordered"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    size={"lg"}
                    variant="bordered"
                    className="text-white "
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                  />
                </div>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Password"
                    variant="bordered"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="  border-white text-white shadow-lg font-thin"
                  variant="bordered"
                  onPress={handleUserRegistration}
                >
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
