import { LoginForm } from "@/components/login-form";
import Image from 'next/image';
import { inherits } from "node:util";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div
        className="
          flex flex-col gap-4 p-6 md:p-10 
          order-2 lg:order-1 
          shadow-[inset_0_5px_20px_-10px_rgba(0,0,0,0.8)]
          relative z-10 lg:z-auto bg-white dark:bg-black
        ">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      {/*
        SCREEN (PHONE) COLUMN
      */}
      <div className="
          bg-muted relative p-4 
          flex items-center justify-center overflow-hidden
          order-1 lg:order-2
          z-0 -mb-40 lg:mb-0
        ">
        <div
          className="relative flex justify-center h-[520px] w-[700px] border border-4 border-black rounded-2xl dark:border-gray-300">
          <span className="border border-black bg-black w-3 h-3 mt-2 rounded-full dark:border-gray-300 dark:bg-gray-300"></span>
        </div>
      </div>
    </div>
  );
}
