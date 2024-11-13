import React, { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { UseUserContext } from "../context/userContext";

export default function HeroSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(true);
  const { currentUser, userDetails, userLoggedIn, loading } = UseUserContext();

  const handleUserLoginForm = () => {
    setModalType(true);
    onOpen();
  };

  const handleUserRegistration = () => {
    setModalType(false);
    onOpen();
  };

  return (
    <div className="h-screen">
      <div className="static z-40">
        <div className="absolute">
          <div className="bg-gray-900/70 h-auto p-12 max-w-4xl m-10 ">
            <h1 className="text-8xl text-white font-thin ">
              Welcome To The Connector
            </h1>

            <div className="divider"></div>

            <p className="text-white py-8 font-thin">
              Where the offline meets realife. Let the location intrigue and
              guide you to a connection that will foster for many days and
              nights. 🥂
            </p>

            {!loading && !userLoggedIn ? (
              <div className="flex justify-center">
                <Button
                  variant="bordered"
                  size="lg"
                  className="bg-gradient-to-tr from-orange-200/50 to-blue-950/10 border-2 border-white text-white shadow-lg text-4xl p-8 font-thin rounded-none"
                  onPress={() => handleUserLoginForm()}
                >
                  Login
                </Button>
                <div className="p-4"></div>
                <Button
                  color="primary"
                  variant="bordered"
                  className="bg-gradient-to-tr from-orange-200/50 to-blue-950/10 border-2 border-white text-white shadow-lg text-4xl p-8 font-thin rounded-none"
                  onPress={() => handleUserRegistration()}
                >
                  Register
                </Button>
              </div>
            ) : (
              <></>
            )}
          </div>
          {modalType ? (
            <LoginForm isOpen={isOpen} onClose={onClose} />
          ) : (
            <RegisterForm isOpen={isOpen} onClose={onClose} />
          )}
        </div>
      </div>
      <div
        className="bg-gradient-to-t from-black/25 h-screen w-full absolute"
        style={{ pointerEvents: "none" }}
      ></div>
      <img
        className="object-cover bg-gradient-to-r from-indigo-50 h-screen w-full"
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
