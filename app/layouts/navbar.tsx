import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex w-full bg-indigo-600 py-5 justify-between px-10">
            <div>Hapid</div>
            <ul className="flex gap-5">
                <li><Link href={'/'} >Home</Link></li>
                <li><Link href={'/about'} >About</Link></li>
                <li><Link href={'/portfolio'} >Portfolio</Link></li>
                <li><Link href={'/contact'} >Contact</Link></li>
            </ul>
        </div>
    )
}