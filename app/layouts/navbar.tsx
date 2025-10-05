import Link from "next/link";
import { menuItems } from "@/lib/utils/navbarMenu";

export default function Navbar() {
    const menus = menuItems;
    console.log(menus);
    return (
        <div className="sticky top-0 py-5 flex justify-center">
            <div className="font-zalando bg-primary text-textprimary px-7 py-5 rounded-3xl shadow-xl flex justify-between items-center gap-20 ring-2 ring-primary/90">
                <div className="text-2xl font-semibold">Harsologs®</div>
                <ul className="flex gap-5 uppercase text-sm">
                    {menus.map((item) => <li className="hover:text-gray-400 transition-colors duration-150"><Link href={item.link} >{item.label}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}