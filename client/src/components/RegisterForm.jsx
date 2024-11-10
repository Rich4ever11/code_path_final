import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Avatar,
} from "@nextui-org/react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import userAPI from "../api/userAPI";
import { app } from "../util/firebaseConfig";

export default function RegisterForm({ isOpen, onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleUserRegistration = () => {
    console.log({
      firstName,
      lastName,
      profileImage,
      email,
      username,
      password,
      passwordCheck,
    });
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
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Password Check"
                    variant="bordered"
                    type="password"
                    value={passwordCheck}
                    onChange={(event) => setPasswordCheck(event.target.value)}
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
