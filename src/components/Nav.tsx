"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { SpotlightPreview } from "./ErpLogin";
 
 


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
         
      <Menu setActive={setActive}>
      <MenuItem  setActive={setActive} active={active} item="Home">
      
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Erp Login">
        
      </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Visit the Chris & Kate Store"
              href="https://www.amazon.in/s?k=school+bags+for+boys&crid=30I3ARPC62354&sprefix=schoo%2Caps%2C312&ref=nb_sb_ss_ts-doa-p_1_5"
              src="/images/bags.jpeg"
              description="Chris & Kate Multi Print Boys and Girls School-Casual-college-Everyday Bag with free stationery Pouch and Rain/Dust Cover Backpack"
            />
            <ProductItem
              title="Classmate Long Notebook "
              href="https://www.amazon.in/s?k=school+stationery&crid=2HF808HLCKDUA&sprefix=school+st%2Caps%2C331&ref=nb_sb_ss_ts-doa-p_2_9"
              src="/images/books.jpg"
              description="Classmate Long Notebook - 140 Pages, Single Line, 297Mm X 210Mm (Pack Of 12)"
            />
            <ProductItem
              title="MILTON Kool"
              href="https://www.amazon.in/s?k=school+stationery&crid=2HF808HLCKDUA&sprefix=school+st%2Caps%2C331&ref=nb_sb_ss_ts-doa-p_2_9"
              src="/images/kids-water-bottle.jpeg"
              description="MILTON Kool Stunner 400 Insulated Inner Steel Water Bottle for Kids, 400 ml, Sea Green"
            />
            <ProductItem
              title=" Premium Plastic ID"
              href="https://www.amazon.in/s?k=school+stationery&crid=2HF808HLCKDUA&sprefix=school+st%2Caps%2C331&ref=nb_sb_ss_ts-doa-p_2_9"
              src="/images/uniformimg.jpg"
              description="ELEGANTE Premium Plastic ID Card Holder for Office/School (White, Pack of 15pcs)"
            />
            <ProductItem
              title="Cricket Kit With Complete Personal Set"
              href="https://www.amazon.in/s?k=school+stationery&crid=2HF808HLCKDUA&sprefix=school+st%2Caps%2C331&ref=nb_sb_ss_ts-doa-p_2_9"
              src="/images/crecket.jpg"
              description="Klapp Plastic Cricket Kit With Complete Personal Set, Cricket Kit,Premium Cricket Kit (Size-5(Boys)), Multi-coloured"
            />
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pay Fee">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
