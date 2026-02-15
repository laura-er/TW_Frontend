"use client";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Footer = () => {
    const [menuData, setMenuData] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/layout-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setMenuData(data?.footerData)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <footer>
            <div className="dark:bg-surfaceDark ">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-3 items-center text-center justify-between py-8 border-b border-gray">
                        <p className="text-navyGray dark:text-white/80">© Read & Swap - All Rights Reserved
                        </p>
                    </div>
                    <div className="py-6 ">
                        <ul className="flex flex-wrap items-center justify-center gap-1">
                            {menuData?.privacyLink?.map((item: any, index: any) => {
                                const isLast = index === menuData.privacyLink.length - 1;
                                return (
                                    <div key={index} className="flex items-center">
                                        <Link href={item?.href}>
                                            <li className="text-sm text-navyGray dark:text-white/80 font-medium hover:text-primary dark:hover:text-primary">{item?.name}</li>
                                        </Link>
                                        {!isLast && (
                                            <div className="w-1.5 h-1.5 bg-black/30 dark:bg-white/30 rounded-full mx-3" />
                                        )}
                                    </div>
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer