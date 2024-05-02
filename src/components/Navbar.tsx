"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
 
 

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-2 ml-5 max-w-2 z-50", className)}> 
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={""}>
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/home">Home</HoveredLink>
            <HoveredLink href="/login">Erp</HoveredLink>
            <HoveredLink href="/Contect">Context</HoveredLink>
            <HoveredLink href="/login">Pay fee</HoveredLink>
          </div>
        </MenuItem>
        </Menu>
        </div>
  );
}
