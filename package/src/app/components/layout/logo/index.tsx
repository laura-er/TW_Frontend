import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/" className="text-2xl font-bold inline-flex items-center">
            <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1.5">READ</span>
            <span className="text-black dark:text-white ml-1">& SWAP</span>
        </Link>
    )
}

export default Logo