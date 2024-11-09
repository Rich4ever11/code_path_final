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

export default function RegisterForm({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleUserRegistration = () => {};

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
                <h1 className="py-2 text-4xl underline">Login</h1>
                <p className="text-lg text-slate-100">
                  Register to customize your account and create it for specific
                  users
                </p>
              </ModalHeader>
              <ModalBody>
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
                    label="Password"
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
