import { GoGraph as GraphIcon } from "react-icons/go";
import { FaRegUserCircle as IconUser } from "react-icons/fa"

export default function Header({isLogged, user}){
    return (
        <div className="flex justify-between bg-black h-14 dark:bg-neutral-900 items-center p-1">
            <GraphIcon className="text-orange-700 text-5xl"/>
            {isLogged && <p className="text-white">{user?.nome} tem a idade de {user?.idade}</p>}
            {isLogged && <IconUser className="text-white text-3xl"/>}
        </div>
    )
}