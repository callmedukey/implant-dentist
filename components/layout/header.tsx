"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logoImage from "@/public/images/logo.svg";

import MobileMenu from "./mobile-menu";

const dropdownItems: Record<string, Array<{ text: string; href: string }>> = {
  조은이플란트치과: [
    { text: "치과 소개", href: "/about#about" },
    { text: "주치의 소개", href: "/about#doctors" },
    { text: "의료진 소개", href: "/about#staff" },
    { text: "치과 둘러보기", href: "/about#clinic-tour" },
    { text: "진료 및 예약 안내", href: "/about#reservation" },
    { text: "오시는 길", href: "/about#location" },
  ],
  "스페셜 시스템": [
    { text: "만성질환 특화진료", href: "/special-system#chronic-disease" },
    { text: "디지털시스템", href: "/special-system#digital" },
    { text: "통증완화시스템", href: "/special-system#pain-relief" },
    { text: "멸균시스템", href: "/special-system#sterilization" },
    { text: "보증 시스템", href: "/special-system#warranty" },
  ],
  "특별한 임플란트": [
    { text: "특별한 임플란트", href: "/special-implant#special-implant" },
    { text: "명품 뼈이식", href: "/special-implant#bone-graft" },
    { text: "디지털 임플란트", href: "/special-implant#digital" },
    { text: "보험 임플란트", href: "/special-implant#insurance" },
  ],
  "사랑니 발치": [
    { text: "전문의 직접 발치", href: "/wisdom-tooth#specialist" },
    { text: "당일 사랑니 발치", href: "/wisdom-tooth#same-day" },
  ],
  "턱관절 치료": [
    { text: "턱관절 질환", href: "/jaw-treatment#disease" },
    { text: "턱관절 치료 전문장비", href: "/jaw-treatment#equipment" },
    { text: "스플린트 치료", href: "/jaw-treatment#splint" },
  ],
  "자연치아 살리기": [
    { text: "치근단절제술", href: "/natural-tooth#apicectomy" },
    { text: "MTA 신경치료", href: "/natural-tooth#mta" },
    { text: "잇몸치료", href: "/natural-tooth#gum-treatment" },
  ],
  통합진료: [
    { text: "치아미백", href: "/integrated-care#whitening" },
    { text: "충치치료", href: "/integrated-care#cavity" },
    { text: "구강연조직질환", href: "/integrated-care#soft-tissue" },
  ],
};

const navItems = [
  { text: "조은이플란트치과", href: "/", hasDropdown: true },
  { text: "스페셜 시스템", href: "/special-system", hasDropdown: true },
  { text: "특별한 임플란트", href: "/special-implant", hasDropdown: true },
  { text: "사랑니 발치", href: "/wisdom-tooth", hasDropdown: true },
  { text: "턱관절 치료", href: "/jaw-treatment", hasDropdown: true },
  { text: "자연치아 살리기", href: "/natural-tooth", hasDropdown: true },
  { text: "통합진료", href: "/integrated-care", hasDropdown: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex h-[4rem] sm:h-[6.25rem] items-center justify-between bg-dark-secondary px-4 max:justify-center max:px-[4.375rem] shadow-[0_0.25rem_0.5rem_0_rgba(0,0,0,0.05),0_0.5rem_1rem_0_rgba(0,0,0,0.05)] isolate"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center gap-2 max:gap-20">
        <div className="flex items-center gap-2">
          <Link href="/" className="block transition-transform hover:scale-105">
            <Image
              src={logoImage}
              alt="조은이플란트치과"
              className="h-[2rem] w-[10rem] max:h-[2.6875rem] max:w-[14.75rem]"
              priority
              unoptimized
            />
          </Link>
          <motion.div
            className="relative flex items-center justify-center rounded-[31.25rem] bg-teal-secondary px-3 py-0 md:px-4 transition-transform hover:scale-105 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.7) 50%, transparent 60%)",
                willChange: "transform, opacity",
              }}
              animate={{
                x: ["-100%", "200%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
            <span className="relative z-10 text-center text-sm md:text-base font-normal leading-[1.6] text-dark-secondary">
              양주점
            </span>
          </motion.div>
        </div>
        <nav className="hidden max:block">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                style={{ willChange: "transform, opacity" }}
              >
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "flex items-center justify-center gap-1 px-6 py-2",
                          "text-base font-normal leading-[1.6] text-teal-secondary",
                          "transition-all hover:text-teal-primary duration-300",
                          "focus:outline-none focus-visible:outline-none"
                        )}
                      >
                        {item.text}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={5}
                      className="bg-dark-secondary border-none rounded-b-lg p-4 min-w-[12.1875rem] z-50"
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      {dropdownItems[item.text]?.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.href} asChild>
                          <Link
                            href={dropdownItem.href}
                            className={cn(
                              "flex items-center justify-center px-6 py-2 rounded-md",
                              "text-base font-normal leading-[1.6] text-teal-secondary",
                              "transition-all hover:text-teal-primary hover:bg-dark-secondary/50",
                              "cursor-pointer"
                            )}
                          >
                            {dropdownItem.text}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center gap-2 px-6 py-2",
                      "text-base font-normal leading-[1.6] text-teal-secondary",
                      "transition-all hover:text-teal-primary duration-300"
                    )}
                  >
                    {item.text}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.button
            className="flex items-center justify-center w-10 h-10 max:hidden text-teal-secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] bg-dark-secondary border-none"
        >
          <VisuallyHidden>
            <SheetTitle>메뉴</SheetTitle>
          </VisuallyHidden>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-8 mt-12"
          >
            <MobileMenu
              navItems={navItems}
              dropdownItems={dropdownItems}
              onClose={() => setIsOpen(false)}
            />
          </motion.div>
        </SheetContent>
      </Sheet>
    </motion.header>
  );
}
