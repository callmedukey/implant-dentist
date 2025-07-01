"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface MobileMenuProps {
  navItems: Array<{
    text: string;
    href: string;
    hasDropdown?: boolean;
  }>;
  dropdownItems: Record<string, Array<{ text: string; href: string }>>;
  onClose: () => void;
}

export default function MobileMenu({
  navItems,
  dropdownItems,
  onClose,
}: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpanded = (itemText: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {item.hasDropdown ? (
              <div className="flex flex-col">
                <button
                  onClick={() => toggleExpanded(item.text)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg w-full text-left",
                    "text-lg font-normal text-teal-secondary",
                    "transition-all hover:bg-dark-secondary/50 hover:text-teal-primary"
                  )}
                >
                  {item.text}
                  <motion.div
                    animate={{ rotate: expandedItems[item.text] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedItems[item.text] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2">
                        {dropdownItems[item.text]?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            onClick={onClose}
                            className={cn(
                              "flex items-center px-4 py-2 rounded-lg",
                              "text-base font-normal text-teal-secondary/80",
                              "transition-all hover:bg-dark-secondary/50 hover:text-teal-primary",
                              "active:scale-95"
                            )}
                          >
                            {dropdownItem.text}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg",
                  "text-lg font-normal text-teal-secondary",
                  "transition-all hover:bg-dark-secondary/50 hover:text-teal-primary",
                  "active:scale-95"
                )}
              >
                {item.text}
              </Link>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
