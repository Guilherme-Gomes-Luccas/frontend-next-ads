import Logo from "./logo";
import NavBar from "./NavBar";

export default function Header({isLogged, user}){
    return (
        <div className="flex justify-between bg-black h-14 dark:bg-neutral-900 items-center p-1">
            <Logo />
            <NavBar />
        </div>
    )
}