import { GoGraph as GraphIcon } from "react-icons/go";

export default function Header(){
    return (
        <>
            <div className="Flex bg-black h-14 dark:bg-neutral-900 items-center p-1">
                <GraphIcon className="text-orange-700 text-5xl"/>
            </div>
        </>
    )
}