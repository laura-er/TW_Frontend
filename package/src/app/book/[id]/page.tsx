'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { mockBooks } from '@/lib/mockBooksData';
import { useState } from 'react';

export default function BookDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const book = mockBooks.find(b => b.id === parseInt(id));
    const [isFavorite, setIsFavorite] = useState(false);

    if (!book) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-navyGray dark:text-white mb-4">Book Not Found</h1>
                <Link href="/" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-md font-medium hover:bg-black/80 dark:hover:bg-white/80 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    const similarBooks = book.similarBooks
        ? mockBooks.filter(b => book.similarBooks?.includes(b.id))
        : [];

    return (
        <div className="dark:bg-baseInk min-h-screen pt-28 md:pt-32">
            <div className="container mx-auto px-6 py-12 pt-32 md:pt-40">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-navyGray dark:text-white hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Books
                </Link>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                    {/* Book Cover - Left */}
                    <div className="lg:col-span-1">
                        <div className="shadow-card rounded-xl overflow-hidden sticky top-24">
                            <div className="relative">
                                <Image
                                    src={book.cover_image}
                                    alt={book.title}
                                    width={400}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                {book.availableForSwap && (
                                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                        Available for Swap
                                    </div>
                                )}
                                {book.featured && (
                                    <div className="absolute top-4 right-4 bg-shineYellow text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                                        <Image src={"/images/icon/diamond-icon.svg"} alt="featured" width={16} height={16} />
                                        FEATURED
                                    </div>
                                )}
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Action Buttons */}
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="w-full bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white dark:hover:text-black hover:text-white border-2 border-black dark:border-white py-3 px-6 rounded-md font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg
                                        className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`}
                                        fill={isFavorite ? "currentColor" : "none"}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                                </button>

                                {book.availableForSwap && (
                                    <Link
                                        href={`/swap/${book.id}`}
                                        className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 py-3 px-6 rounded-md font-medium text-center transition-colors duration-300 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        Request Swap
                                    </Link>
                                )}

                                {/* Book Stats */}
                                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-navyGray/70 dark:text-white/70">Condition:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.condition}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-navyGray/70 dark:text-white/70">Pages:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.pages || 'N/A'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-navyGray/70 dark:text-white/70">Language:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.language || 'English'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-navyGray/70 dark:text-white/70">Publisher:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.publisher || 'N/A'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-navyGray/70 dark:text-white/70">ISBN:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.isbn || 'N/A'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Book Info - Right */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Title and Author */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-navyGray dark:text-white mb-4">{book.title}</h1>
                            <p className="text-2xl text-primary-600 dark:text-primary-400 font-medium mb-4">by {book.author}</p>

                            <div className="flex items-center gap-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <span className="text-lg font-semibold text-navyGray dark:text-white">{book.rating}/5</span>
                                    <span className="text-navyGray/70 dark:text-white/70">({book.reviews?.length || 0} reviews)</span>
                                </div>

                                <span className="bg-gray dark:bg-white/20 text-navyGray dark:text-white px-4 py-2 rounded-md font-medium capitalize">
                  {book.genre}
                </span>

                                <span className="text-navyGray/70 dark:text-white/70">
                  Published: {book.publishYear}
                </span>
                            </div>
                        </div>

                        {/* Short Description */}
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-card">
                            <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4">About This Book</h2>
                            <p className="text-navyGray dark:text-white/80 leading-relaxed">{book.description}</p>
                        </div>

                        {/* Long Description */}
                        {book.longDescription && (
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-card">
                                <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4">Detailed Description</h2>
                                <p className="text-navyGray dark:text-white/80 leading-relaxed whitespace-pre-line">{book.longDescription}</p>
                            </div>
                        )}

                        {/* Owner Info */}
                        <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-card">
                            <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4">Book Owner</h2>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={book.owner_image}
                                    alt={book.owner_name}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="font-bold text-lg text-navyGray dark:text-white">{book.owner_name}</p>
                                    <p className="text-navyGray/70 dark:text-white/70">Book Owner</p>
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        {book.reviews && book.reviews.length > 0 && (
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-card">
                                <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-6">Reviews ({book.reviews.length})</h2>
                                <div className="space-y-6">
                                    {book.reviews.map(review => (
                                        <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                                            <div className="flex items-start gap-4">
                                                <Image
                                                    src={review.userImage}
                                                    alt={review.userName}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div>
                                                            <p className="font-bold text-navyGray dark:text-white">{review.userName}</p>
                                                            <p className="text-sm text-navyGray/70 dark:text-white/70">{review.date}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-navyGray dark:text-white/80">{review.comment}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Swap History */}
                        {book.swapHistory && book.swapHistory.length > 0 && (
                            <div className="bg-white dark:bg-white/5 p-6 rounded-xl shadow-card">
                                <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4">Swap History</h2>
                                <div className="space-y-3">
                                    {book.swapHistory.map((swap, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-gray/50 dark:bg-white/5 rounded-lg">
                                            <div>
                                                <p className="text-navyGray dark:text-white font-medium">Swapped with {swap.swappedWith}</p>
                                                <p className="text-sm text-navyGray/70 dark:text-white/70">Received: {swap.bookReceived}</p>
                                            </div>
                                            <p className="text-sm text-navyGray/70 dark:text-white/70">{swap.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Similar Books */}
                {similarBooks.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-navyGray dark:text-white mb-8">Similar Books You Might Like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {similarBooks.map(similarBook => (
                                <Link
                                    key={similarBook.id}
                                    href={`/book/${similarBook.id}`}
                                    className="shadow-card rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                                >
                                    <Image
                                        src={similarBook.cover_image}
                                        alt={similarBook.title}
                                        width={365}
                                        height={240}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-navyGray dark:text-white line-clamp-1">{similarBook.title}</h3>
                                        <p className="text-sm text-navyGray/70 dark:text-white/70">{similarBook.author}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

