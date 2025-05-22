'use client"'

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo"; // Assuming you have this component
import { NavMenu } from "./nav-menu"; // Assuming you have this component

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline" // We'll override some of the 'outline' styles
          size="icon"
          className="
            rounded-full
            bg-slate-700/40      
            border-slate-600       
            text-slate-100         
            backdrop-blur-sm      
            hover:bg-slate-600/60  
            hover:border-slate-500   
            hover:text-slate-50    
            focus-visible:ring-2
            focus-visible:ring-slate-400       
            focus-visible:ring-offset-2
            focus-visible:ring-offset-black  
          "
        >
          <Menu className="h-5 w-5" /> {/* Explicitly sizing the icon is good practice */}
        </Button>
      </SheetTrigger>
      <SheetContent
        className="
          pt-3 px-6
          bg-slate-800/75    // Sheet background: darker slate, more opaque
          backdrop-blur-md     // Sheet backdrop blur: medium
          border-slate-700     // Sheet border color (applies to all sides)
        "
      >
        <SheetTitle></SheetTitle>
        {/* Ensure Logo and NavMenu items have contrasting text color */}
        <Logo />
        <NavMenu orientation="vertical" className="mt-12" />
      </SheetContent>
    </Sheet>
  );
};