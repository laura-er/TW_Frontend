'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mockBooks } from "@/lib/mockBooksData";
import BookCard from "@/app/components/shared/book-card";

// Icon components
const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 12s4.5 5.747 10 5.747m0-13c5.5 0 10 4.745 10 5.747s-4.5 5.747-10 5.747m0-13v13m0-13C6.5 6.253 2 10.998 2 12s4.5 5.747 10 5.747m0 0c5.5 0 10-4.745 10-5.747s-4.5-5.747-10-5.747" />
  </svg>
);

const ArrowLeftRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Pencil = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const Share2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.589 12.938 10 12.016 10 11c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2c.217 0 .424-.044.614-.123l5.265 3.151c.347.529.554 1.157.554 1.823 0 1.105-.895 2-2 2s-2-.895-2-2c0-.668.207-1.295.554-1.823l-5.265-3.151z" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.172 5.172a4 4 0 015.656 0L12 6.343l3.172-3.171a4 4 0 115.656 5.656L12 17.657l-8.828-8.829a4 4 0 010-5.656z" />
  </svg>
);

const currentUser = {
    id: 1,
    name: "Maria Popescu",
    email: "maria.popescu@email.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    location: "București, România",
    bio: "Passionate reader and book collector. Love classic literature and fantasy novels.",
    joinedDate: "2023",
    booksOwned: 15,
    booksSwapped: 8,
    rating: 4.8,
};

const stats = [
    { label: "Books Owned", value: currentUser.booksOwned, icon: BookOpen, color: "blue" },
    { label: "Books Swapped", value: currentUser.booksSwapped, icon: ArrowLeftRight, color: "purple" },
    { label: "Rating", value: currentUser.rating, icon: Star, color: "amber" },
    { label: "Member Since", value: currentUser.joinedDate, icon: Calendar, color: "green" },
];

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<"myBooks" | "favorites">("myBooks");

    const userBooks = mockBooks.filter((book) => book.owner_name === currentUser.name);
    const favoriteBooks = mockBooks.filter((book) => [1, 3, 6, 9].includes(book.id));
    const displayBooks = activeTab === "myBooks" ? userBooks : favoriteBooks;

    return (
        <div className="min-h-screen bg-cream dark:bg-baseInk">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 dark:from-primary-800 dark:via-primary-700 dark:to-primary-900">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="relative mx-auto max-w-6xl px-6 pb-32 pt-32 md:pt-40">
                    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-end">
                        {/* Avatar */}
                        <div className="relative animate-fadeIn">
                            <div className="h-32 w-32 rounded-full border-4 border-white/30 p-1 shadow-2xl">
                                <Image
                                    src={currentUser.avatar}
                                    alt={currentUser.name}
                                    width={128}
                                    height={128}
                                    className="h-full w-full rounded-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-white bg-green-500 shadow-lg" />
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center sm:text-left animate-fadeIn">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                {currentUser.name}
                            </h1>

                            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/80 sm:justify-start mb-4">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                    {currentUser.email}
                </span>
                                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                                    {currentUser.location}
                </span>
                            </div>

                            <p className="max-w-2xl text-base text-white/70 mb-6">
                                {currentUser.bio}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                                <button className="inline-flex items-center gap-2 rounded-xl bg-white text-primary-600 px-6 py-3 text-sm font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                                    <Pencil className="h-4 w-4" />
                                    Edit Profile
                                </button>
                                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20">
                                    <Share2 className="h-4 w-4" />
                                    Share Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats - overlapping hero */}
            <div className="relative z-10 mx-auto -mt-20 max-w-6xl px-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {stats.map(({ label, value, icon: Icon, color }) => {
                        const colorClasses = {
                            blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700/30 bg-blue-500",
                            purple: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700/30 bg-purple-500",
                            amber: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-700/30 bg-amber-500",
                            green: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700/30 bg-green-500",
                        };
                        const bgClass = colorClasses[color as keyof typeof colorClasses];
                        const [gradientFrom, gradientTo, borderColor, iconBg] = bgClass.split(' ');

                        return (
                            <div
                                key={label}
                                className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl border ${borderColor} p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                            >
                                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} shadow-lg`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                                <p className="text-3xl font-bold text-navyGray dark:text-white mb-1">{value}</p>
                                <p className="text-xs font-semibold text-navyGray/70 dark:text-white/70 uppercase tracking-wide">{label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-6xl px-6 py-12">
                {/* Tabs */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="inline-flex gap-2 rounded-2xl bg-white dark:bg-white/5 p-1.5 shadow-lg border border-gray-200 dark:border-white/10">
                        {(["myBooks", "favorites"] as const).map((tab) => {
                            const label =
                                tab === "myBooks"
                                    ? `My Books (${userBooks.length})`
                                    : `Favorites (${favoriteBooks.length})`;
                            const Icon = tab === "myBooks" ? BookOpen : Heart;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 ${
                                        activeTab === tab
                                            ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                                            : "text-navyGray/60 dark:text-white/60 hover:text-navyGray dark:hover:text-white"
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    <button className="inline-flex items-center gap-2 rounded-xl bg-primary-600 hover:bg-primary-700 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105">
                        <BookOpen className="h-4 w-4" />
                        Add New Book
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" key={activeTab}>
                    {/* Add Book Card - only in My Books tab */}
                    {activeTab === "myBooks" && (
                        <button className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 p-8 text-center transition-all duration-300 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 transition-all group-hover:scale-110">
                                    <BookOpen className="h-8 w-8" />
                                </div>
                                <div>
                                    <p className="font-bold text-navyGray dark:text-white">Add New Book</p>
                                    <p className="text-sm text-navyGray/60 dark:text-white/60">Expand your library</p>
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
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10">
                            {activeTab === "myBooks" ? (
                                <BookOpen className="h-12 w-12 text-gray-400 dark:text-white/40" />
                            ) : (
                                <Heart className="h-12 w-12 text-gray-400 dark:text-white/40" />
                            )}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-navyGray dark:text-white mb-2">
                                {activeTab === "myBooks" ? "No books yet" : "No favorites yet"}
                            </h3>
                            <p className="text-navyGray/70 dark:text-white/70 mb-6">
                                {activeTab === "myBooks"
                                    ? "Start building your personal library today"
                                    : "Mark books as favorites to see them here"}
                            </p>
                            {activeTab === "myBooks" ? (
                                <button className="inline-flex items-center gap-2 rounded-xl bg-primary-600 hover:bg-primary-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105">
                                    <BookOpen className="h-5 w-5" />
                                    Add Your First Book
                                </button>
                            ) : (
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary-600 hover:bg-primary-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105"
                                >
                                    Browse Books
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
        </div>
    );
}
