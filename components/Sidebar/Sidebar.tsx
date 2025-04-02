import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { FiUser } from "react-icons/fi";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar fixed top-0 left-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-auto border-r border-gray-200 bg-white px-5 transition-all duration-300 lg:static lg:translate-x-0 dark:border-gray-800 dark:bg-black -translate-x-full">
        <div className="flex items-center ">
          <Link href="/">
            <Image src={logo} width="150" height="32" alt="logo" />
          </Link>
        </div>

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav>
            <div>
              <h3 className="mb-4 text-sm leading-[20px] text-gray-400 uppercase">
                MENU
              </h3>

              <ul className="mb-6 flex flex-col gap-4">
                <li>
                  <a href="#" className="menu-item group menu-item-active">
                    <span className="menu-item-text">Dashboard</span>
                  </a>
                </li>
                <li className="flex items-center p-2 mb-2 text-[#1E1E1E] hover:text-white hover:bg-gray-800 rounded">
                  <FiUser size={24} className="mr-2" />
                  <Link href="/profile">User Profile</Link>
                </li>
                <li>
                  <Accordion>
                    <AccordionItem
                      key="1"
                      aria-label="Accordion 1"
                      title="Accordion 1"
                      className=" text-start"
                    >
                      hello world
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
