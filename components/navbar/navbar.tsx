import {Button} from "@/components/ui/button";
import {GithubLogo, XLogo} from "../icons";
import {Logo} from "./logo";
import {NavMenu} from "./nav-menu";
import {NavigationSheet} from "./navigation-sheet";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav
            className="
                fixed z-50 top-4 sm:top-6 inset-x-4 h-12
                max-w-screen-md mx-auto rounded-full
                overflow-hidden 
                border border-slate-700/80
                backdrop-blur-md bg-slate-900/70
                shadow-lg shadow-black/20
            "
        >
            <div className="h-full flex items-center justify-between mx-auto px-3 sm:px-4">
                <Logo className="h-6 sm:h-7 text-white"/>
                <NavMenu className="hidden md:block"/>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        className="
                            hidden sm:inline-flex rounded-full
                            text-neutral-300 hover:text-purple-400 hover:bg-purple-500/10
                            focus-visible:ring-purple-500
                        "
                        size="icon"
                        asChild
                    >
                        <Link href="#" aria-label="X (Twitter) Profile">
                            <XLogo className="h-5 w-5"/>
                        </Link>
                    </Button>
                    <Button
                        variant="ghost"
                        className="
                            rounded-full
                            text-neutral-300 hover:text-purple-400 hover:bg-purple-500/10
                            focus-visible:ring-purple-500
                        "
                        size="icon"
                        asChild
                    >
                        <Link href={"https://github.com/ovoc01"} target={"_blank"} aria-label="GitHub Profile">
                            <GithubLogo className="h-5 w-5"/>
                        </Link>
                    </Button>
                    <div className="md:hidden">
                        <NavigationSheet/>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;