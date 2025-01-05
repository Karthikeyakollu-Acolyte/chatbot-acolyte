"use client";
import { Smile, Paperclip, Send, MenuIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Sidebar } from './sidebar';
import Image from 'next/image';
import emojis from '../../public/emojis.svg'
import paperclip from '../../public/paperclip.svg'
import send from '../../public/send.svg'

export function ChatInterface() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const suggestions = [
    "What is the goal of the authors?",
    "What is the main issue discussed in the text?",
    'He "old implicit compact" mentioned in the text?',
    "Who are the authors of the text?"
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-1 flex-col items-center w-full h-[991px] bg-[#F9FAFB] relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-10 h-9 w-9 rounded-lg hover:bg-gray-200"
        onClick={toggleSidebar}
      >
        <MenuIcon className="icon" />
      </Button>

      <div
        className={`flex flex-1 flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-[420px]" : "ml-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-[2.5rem] font-rubik font-medium leading-tight mb-4 text-transparent bg-gradient-to-r from-[#8468D0] to-[#000000] bg-clip-text">
            Hello, to be Doctor.
          </h2>
          <p className="text-[1.75rem] font-rubik font-medium mb-8 text-transparent bg-gradient-to-r from-[#010101] to-[#38A169] bg-clip-text">
            How can I be your companion
          </p>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 mb-16">
            {suggestions.map((suggestion, i) => (
              <button
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
              >
                <p className="text-base">{suggestion}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="h-[76px] w-[1393px] px-3.5 py-[13px] mb-11 bg-white rounded-[15px] shadow-[0px_0.19090910255908966px_0.5727272629737854px_0px_rgba(0,0,0,0.11)] border-2 border-[#a69ac7] justify-between items-center inline-flex">
          <div className="p-2.5 justify-start items-center gap-2.5 flex">
            <div className="text-black text-2xl font-normal font-['Rubik'] leading-relaxed">Type a new message here</div>
          </div>
          <div className="justify-end items-center gap-5 flex">
            <Image src={emojis}/>
            <Image src={paperclip}/>
            <Image src={send}/>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 h-full transition-all duration-300 ease-in-out ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <Sidebar />
      </div>
    </div>
  );
}
