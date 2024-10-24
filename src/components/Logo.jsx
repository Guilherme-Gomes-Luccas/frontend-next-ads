import { GoGraph as LogoIcon } from "react-icons/go";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-3 text-2xl">
        <LogoIcon className="text-orange-700 text-5xl"/>
        <h1 className="text-orange-700"><span className="text-gray-500">IF</span>Finance</h1>
    </div>
  )
}
