import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import userAPI from "../api/user";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../util/firebaseConfig";

export default function LoginForm({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const handleUserLogin = async () => {
    const userCredentials = {
      username,
      password,
    };
    // const users = await userAPI.authenticateUser(userCredentials);
    // const user = users[0];
    const userCredential = await signInWithEmailAndPassword(
      auth,
      username,
      password
    );
    console.log(userCredential);
    // onClose();
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
                <h1 className="py-2 text-5xl underline">Login</h1>
                <p className="text-lg text-slate-100">
                  Login to view users locations, blogs and make friends
                </p>
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    className="text-white"
                    size={"lg"}
                    label="Email"
                    variant="bordered"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
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
                  onPress={handleUserLogin}
                >
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
