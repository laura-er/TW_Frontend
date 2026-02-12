import { NextResponse } from "next/server";

const menuData = [
    { label: 'Home', href: '/' },
    {
        label: 'Pages', href: '#',
        submenu: [
            { label: "Error page", href: "/not-found" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },

        ],
    },
    { label: 'Blogs', href: '/blog' },
    { label: 'Docs', href: '/documentation' },
    { label: 'Contact', href: '/contact-us' },
];

const footerData = {
    socialLinks: [
        { link: "https://www.facebook.com/", icon: "/images/icon/facebook-icon.svg",dark_icon: "/images/icon/facebook-white-icon.svg" },
        { link: "https://www.linkedin.com/", icon: "/images/icon/linkedin-icon.svg",dark_icon: "/images/icon/linkedin-white-icon.svg" },
        { link: "https://x.com/", icon: "/images/icon/twitter-icon.svg",dark_icon: "/images/icon/twitter-white-icon.svg" },
    ],
    privacyLink: [
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Contact", href: "/contact-us" },
        { name: "404 page", href: "/not-found" }
    ],
};

export const GET = async () => {
    return NextResponse.json({
        menuData,
        footerData
    });
};