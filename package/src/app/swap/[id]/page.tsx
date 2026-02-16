'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { mockBooks } from '@/lib/mockBooksData';
import { useState } from 'react';

export default function RequestSwapPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const book = mockBooks.find(b => b.id === parseInt(id));

    // State pentru formularul de swap
    const [formData, setFormData] = useState({
        yourBook: '',
        message: '',
        contactEmail: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Cărțile utilizatorului (în viitor, acestea vor veni de la backend)
    // Pentru moment, folosim cărți mock ca exemplu
    const userBooks = mockBooks.filter(b => b.id !== parseInt(id)).slice(0, 5);

    if (!book) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-navyGray dark:text-white mb-4">Book Not Found</h1>
                <Link href="/" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-none font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    if (!book.availableForSwap) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-navyGray dark:text-white mb-4">Book Not Available for Swap</h1>
                <p className="text-navyGray/70 dark:text-white/70 mb-8">This book is currently not available for swapping.</p>
                <Link href={`/book/${id}`} className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-none font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors">
                    Back to Book Details
                </Link>
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulăm trimiterea request-ului
        // În viitor, aici vei face un API call către backend
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowSuccess(true);

        // După 3 secunde, redirecționăm utilizatorul
        setTimeout(() => {
            router.push('/profile'); // sau unde vrei să-l trimiți
        }, 3000);
    };

    if (showSuccess) {
        return (
            <div className="dark:bg-baseInk min-h-screen pt-28 md:pt-32 flex items-center justify-center">
                <div className="container mx-auto px-6 py-12 text-center">
                    <div className="bg-white dark:bg-white/5 p-12 rounded-none shadow-card max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-green-500 rounded-none flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold text-navyGray dark:text-white mb-4">Swap Request Sent!</h1>
                        <p className="text-navyGray/70 dark:text-white/70 mb-8">
                            Your swap request has been sent to {book.owner_name}. They will be notified and can review your offer.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/profile"
                                className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-none font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
                            >
                                Go to Profile
                            </Link>
                            <Link
                                href="/"
                                className="bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white dark:hover:text-black hover:text-white border-2 border-black dark:border-white px-6 py-3 rounded-none font-medium transition-colors"
                            >
                                Browse More Books
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="dark:bg-baseInk min-h-screen pt-28 md:pt-32">
            <div className="container mx-auto px-6 py-12 pt-32 md:pt-40">
                {/* Back Button */}
                <Link
                    href={`/book/${id}`}
                    className="inline-flex items-center text-navyGray dark:text-white hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Book Details
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Book Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-white/5 rounded-none shadow-card p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-navyGray dark:text-white mb-4">Book You're Requesting</h2>

                            <div className="mb-6">
                                <Image
                                    src={book.cover_image}
                                    alt={book.title}
                                    width={300}
                                    height={450}
                                    className="w-full h-auto object-cover rounded-none"
                                />
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <h3 className="font-bold text-lg text-navyGray dark:text-white">{book.title}</h3>
                                    <p className="text-navyGray/70 dark:text-white/70">{book.author}</p>
                                </div>

                                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-navyGray/70 dark:text-white/70">Condition:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.condition}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-navyGray/70 dark:text-white/70">Genre:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.genre}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-navyGray/70 dark:text-white/70">Published:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.publishYear}</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm font-semibold text-navyGray dark:text-white mb-2">Owner:</p>
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={book.owner_image}
                                            alt={book.owner_name}
                                            width={40}
                                            height={40}
                                            className="rounded-none"
                                        />
                                        <span className="text-navyGray dark:text-white">{book.owner_name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Swap Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-white/5 rounded-none shadow-card p-8">
                            <h1 className="text-3xl font-bold text-navyGray dark:text-white mb-2">Request Book Swap</h1>
                            <p className="text-navyGray/70 dark:text-white/70 mb-8">
                                Fill out the form below to request a swap with {book.owner_name}
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Select Your Book */}
                                <div>
                                    <label htmlFor="yourBook" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
                                        Select a Book to Offer <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="yourBook"
                                            name="yourBook"
                                            value={formData.yourBook}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-none border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-baseInk text-navyGray dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                                            style={{
                                                paddingRight: '3rem'
                                            }}
                                        >
                                            <option value="">Choose a book from your collection...</option>
                                            {userBooks.map(b => (
                                                <option key={b.id} value={b.id}>
                                                    {b.title} by {b.author} ({b.condition})
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navyGray dark:text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-sm text-navyGray/60 dark:text-white/60 mt-2">
                                        Don't see your book? <Link href="/profile" className="text-black dark:text-white font-semibold hover:underline">Add it to your collection</Link>
                                    </p>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
                                        Message to Owner <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        placeholder="Introduce yourself and explain why you'd like to swap..."
                                        className="w-full px-4 py-3 rounded-none border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-baseInk text-navyGray dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                                    />
                                </div>

                                {/* Contact Email */}
                                <div>
                                    <label htmlFor="contactEmail" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
                                        Contact Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="contactEmail"
                                        name="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 rounded-none border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-baseInk text-navyGray dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                                    />
                                </div>

                                {/* Swap Guidelines */}
                                <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-none p-4">
                                    <h3 className="font-bold text-navyGray dark:text-white mb-2 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Swap Guidelines
                                    </h3>
                                    <ul className="text-sm text-navyGray/80 dark:text-white/80 space-y-1 list-disc list-inside">
                                        <li>Be respectful and honest in your communication</li>
                                        <li>Provide accurate descriptions of your book's condition</li>
                                        <li>Respond promptly to messages from other users</li>
                                        <li>Confirm the swap details before proceeding</li>
                                    </ul>
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 py-4 px-6 rounded-none font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending Request...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                </svg>
                                                Send Swap Request
                                            </>
                                        )}
                                    </button>
                                    <Link
                                        href={`/book/${id}`}
                                        className="bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white dark:hover:text-black hover:text-white border-2 border-black dark:border-white py-4 px-6 rounded-none font-semibold text-lg transition-colors flex items-center justify-center"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
