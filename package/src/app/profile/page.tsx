'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mockBooks } from "@/lib/mockBooksData";
import BookCard from "@/app/components/shared/book-card";
import { CURRENT_USER } from "@/lib/usersConfig"; // ← IMPORT NOU

// Extinde currentUser cu date suplimentare pentru profile
const currentUser = {
    ...CURRENT_USER,
    joinedDate: "2023",
    booksOwned: 15,
    booksSwapped: 8,
    rating: 4.8,
};

const stats = [
    {
        label: "Books Owned",
        value: currentUser.booksOwned,
        icon: (
            <svg className="h-6 w-6 text-warmOrange dark:text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        label: "Books Swapped",
        value: currentUser.booksSwapped,
        icon: (
            <svg className="h-6 w-6 text-warmOrange dark:text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        )
    },
    {
        label: "Rating",
        value: currentUser.rating,
        icon: (
            <svg className="h-6 w-6 text-warmOrange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        )
    },
    {
        label: "Member Since",
        value: currentUser.joinedDate,
        icon: (
            <svg className="h-6 w-6 text-warmOrange dark:text-warmOrange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<"myBooks" | "favorites">("myBooks");

    const userBooks = mockBooks.filter((book) => book.owner_name === currentUser.name);
    const favoriteBooks = mockBooks.filter((book) => [1, 3, 6, 9].includes(book.id));
    const displayBooks = activeTab === "myBooks" ? userBooks : favoriteBooks;

    return (
        <div className="min-h-screen bg-warmCream dark:bg-slate-900">
            {/* Hero Section with Book Background */}
            <div className="relative overflow-hidden" style={{ minHeight: '450px' }}>
                {/* Background Image with Blur */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200')",
                            filter: 'blur(3px)',
                            transform: 'scale(1.1)',
                        }}
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 dark:from-black/70 dark:via-black/60 dark:to-black/70" />
                </div>

                {/* Content */}
                <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-32 md:pt-40">
                    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="h-32 w-32 rounded-full border-4 border-white/40 shadow-2xl overflow-hidden">
                                <Image
                                    src={currentUser.avatar}
                                    alt={currentUser.name}
                                    width={128}
                                    height={128}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            {/* Online indicator */}
                            <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-white bg-green-500" />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                {currentUser.name}
                            </h1>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/90 mb-4">
                <span className="inline-flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                    {currentUser.email}
                </span>
                                <span className="inline-flex items-center gap-2 text-sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                                    {currentUser.location}
                </span>
                            </div>

                            <p className="max-w-2xl text-base text-white/80 mb-6">
                                {currentUser.bio}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3">
                                <button className="inline-flex items-center gap-2 rounded-xl bg-warmOrange hover:bg-warmOrange/90 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-warmOrange/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-warmOrange/40 border-2 border-warmOrange">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Profile
                                </button>
                                <button className="inline-flex items-center gap-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 border-2 border-white/40 hover:border-white/60 shadow-xl">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                    Share Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards - Overlapping Hero */}
            <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {stats.map(({ label, value, icon }) => (
                        <div
                            key={label}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
                        >
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-warmOrange/10 dark:bg-warmOrange/20">
                                {icon}
                            </div>
                            <p className="text-3xl font-bold text-navyGray dark:text-white mb-1">{value}</p>
                            <p className="text-xs font-medium text-warmBrown/70 dark:text-slate-400">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-6xl px-6 py-12">
                {/* Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="inline-flex gap-2 bg-slate-800/50 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-700 dark:border-slate-600">
                        <button
                            onClick={() => setActiveTab("myBooks")}
                            className={`inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold transition-all duration-300 ${
                                activeTab === "myBooks"
                                    ? "bg-warmOrange text-white shadow-xl shadow-warmOrange/40 scale-105"
                                    : "text-slate-300 dark:text-slate-400 hover:text-white hover:bg-slate-700/50"
                            }`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            My Books ({userBooks.length})
                        </button>

                        <button
                            onClick={() => setActiveTab("favorites")}
                            className={`inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold transition-all duration-300 ${
                                activeTab === "favorites"
                                    ? "bg-warmOrange text-white shadow-xl shadow-warmOrange/40 scale-105"
                                    : "text-slate-300 dark:text-slate-400 hover:text-white hover:bg-slate-700/50"
                            }`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Favorites ({favoriteBooks.length})
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" key={activeTab}>
                    {/* Add Book Card - only in My Books tab */}
                    {activeTab === "myBooks" && (
                        <button className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-warmBrown/30 dark:border-slate-600 bg-white dark:bg-slate-800 p-8 text-center transition-all duration-300 hover:border-warmOrange hover:bg-warmOrange/5 dark:hover:bg-warmOrange/10 min-h-[300px] flex items-center justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-warmOrange/10 dark:bg-warmOrange/20 text-warmOrange transition-all group-hover:scale-110">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-warmBrown dark:text-white">Add New Book</p>
                                    <p className="text-sm text-warmBrown/60 dark:text-slate-400">Expand your library</p>
                                </div>
                            </div>
                        </button>
                    )}

                    {displayBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                {/* Empty States */}
                {displayBooks.length === 0 && (
                    <div className="mt-16 flex flex-col items-center gap-6 text-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-warmBeige dark:bg-slate-800">
                            {activeTab === "myBooks" ? (
                                <svg className="h-12 w-12 text-warmBrown/60 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            ) : (
                                <svg className="h-12 w-12 text-warmBrown/60 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            )}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-warmBrown dark:text-white mb-2">
                                {activeTab === "myBooks" ? "No books yet" : "No favorites yet"}
                            </h3>
                            <p className="text-warmBrown/70 dark:text-slate-400 mb-6">
                                {activeTab === "myBooks"
                                    ? "Start building your personal library today"
                                    : "Mark books as favorites to see them here"}
                            </p>
                            {activeTab === "myBooks" ? (
                                <button className="inline-flex items-center gap-2 rounded-lg bg-warmOrange hover:bg-warmOrange/90 px-6 py-3 font-semibold text-white shadow-lg transition-all">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Add Your First Book
                                </button>
                            ) : (
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-lg bg-warmOrange hover:bg-warmOrange/90 px-6 py-3 font-semibold text-white shadow-lg transition-all"
                                >
                                    Browse Books
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

