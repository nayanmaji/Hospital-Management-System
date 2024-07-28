"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(" ");

  const handleTabClick = (path) => {
    setSelectedTab(path);
    setOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 py-6 space-y-6">
              <a
                href="/"
                className="block text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => handleTabClick("/")}
              >
                Home
              </a>
              <a
                href="/bookapt"
                className="block text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => handleTabClick("/bookapt")}
              >
                Book an Appointment
              </a>
              <a
                href="/alldoctors"
                className="block text-base font-medium text-gray-900 hover:text-gray-700"
                onClick={() => handleTabClick("/alldoctors")}
              >
                Doctors Available
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          24/7 Emergency: 8170 055 555
        </p>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">My HealthCare</span>
                  <img
                    alt=""
                    src="src/assets/My HEALTHCARE.png"
                    className="h-10 w-auto"
                  />
                </a>
              </div>

              {/* Tabs */}
              <div className="hidden lg:flex">
                <div className="flex space-x-8 px-4">
                  <a
                    href="/"
                    className={classNames(
                      "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
                      selectedTab === "/"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-900"
                    )}
                    onClick={() => handleTabClick("/")}
                  >
                    Home
                  </a>
                  <a
                    href="/bookapt"
                    className={classNames(
                      "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
                      selectedTab === "/bookapt"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-900"
                    )}
                    onClick={() => handleTabClick("/bookapt")}
                  >
                    Book an Appointment
                  </a>
                  <a
                    href="/alldoctors"
                    className={classNames(
                      "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
                      selectedTab === "/alldoctors"
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-900"
                    )}
                    onClick={() => handleTabClick("/alldoctors")}
                  >
                    Doctors Available
                  </a>
                </div>
              </div>

              <div className="ml-auto flex items-center space-x-8">
                <a
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
