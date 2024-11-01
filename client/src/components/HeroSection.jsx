import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function HeroSection() {
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
              This location will take you to a place that connects you with like
              minded travels and engage with amazing other bloggers 🥂
            </p>

            <div className="flex justify-center">
              <Button
                variant="bordered"
                size="lg"
                className="bg-gradient-to-tr from-orange-200/50 to-blue-950/10 border-2 border-white text-white shadow-lg text-4xl p-8 font-thin"
              >
                Login
              </Button>
              <div className="p-4"></div>
              <Button
                color="primary"
                variant="bordered"
                className="bg-gradient-to-tr from-orange-200/50 to-blue-950/10 border-2 border-white text-white shadow-lg text-4xl p-8 font-thin"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black/50 h-screen w-full absolute"></div>
      <img
        className="object-cover bg-gradient-to-r from-indigo-50 h-screen w-full"
        src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
}
