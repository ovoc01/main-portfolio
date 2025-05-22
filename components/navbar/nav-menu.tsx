import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

// Define your navigation items array for easier management
const navItems = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  // Add more items here if needed
];

export const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
    <NavigationMenu
        className={cn("data-[orientation=vertical]:items-start", className)}
        {...props}
    >
      <NavigationMenuList className="gap-0.5 sm:gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              {/*
            We apply custom styles to the Link component.
            ShadCN's NavigationMenuLink will act as a styled container.
            If navigationMenuTriggerStyle() is too aggressive, we can avoid it.
          */}
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                    className={cn(
                        // navigationMenuTriggerStyle(), // You can include this if you want some base styling, or omit it for full control
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        "bg-transparent", // Ensure transparent background by default
                        "text-neutral-300", // Default text color: light gray
                        "hover:bg-purple-500/15", // Hover background: very subtle semi-transparent purple
                        "hover:text-purple-200",  // Hover text color: light purple
                        "focus:bg-purple-500/20", // Focus background
                        "focus:text-purple-100",  // Focus text color
                        "focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        "data-[active]:bg-purple-600/20 data-[active]:text-purple-100" // Active link styling (if supported/needed)
                    )}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
);