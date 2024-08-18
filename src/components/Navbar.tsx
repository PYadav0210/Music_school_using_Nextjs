'use client'; 
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
 
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div>
       <h2    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <HoveredLink  href="#">
              <MenuItem setActive={setActive} active={active}
              item="Home">
              </MenuItem>
            </HoveredLink>
            <MenuItem setActive={setActive} active={active}
              item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/Our Courses">All courses</HoveredLink>
                            <HoveredLink href="/Our Courses">Baic Music Theory</HoveredLink>
                            <HoveredLink href="/Our Courses">Advanced Composition</HoveredLink>
                            <HoveredLink href="/Our Courses">Songwriting</HoveredLink>
                            <HoveredLink href="/Our Courses">Music Production</HoveredLink>
                </div>
                </MenuItem>

                
              <HoveredLink href="/contact">
              <MenuItem setActive={setActive} active={active}
              item="Contact Us">
                </MenuItem>
                </HoveredLink>
              
        </Menu>
       </h2>
    </div>
  )
}

export default Navbar
