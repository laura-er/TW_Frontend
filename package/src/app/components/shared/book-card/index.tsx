"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Book } from '@/lib/mockBooksData';

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
      <div className="shadow-card rounded-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col h-full bg-white dark:bg-gray-800 border-2 border-transparent hover:border-black dark:hover:border-white">
        <div className="relative w-full h-[320px]">
          <Link href={`/book/${book?.id}`}>
            {book?.cover_image && (
                <Image
                    src={book?.cover_image}
                    alt={book?.title}
                    width={365}
                    height={320}
                    className="w-full h-full object-cover"
                />
            )}
          </Link>

          {/* Heart/Favorite Button */}
          <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <svg
                className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`}
                fill={isFavorite ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Availability Badge - IMPROVED */}
          {book?.availableForSwap ? (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5 animate-pulse">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Available
              </div>
          ) : (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Not Available
              </div>
          )}

          {/* Featured Badge */}
          {book?.featured && (
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <Image src={"/images/icon/diamond-icon.svg"} alt="featured" width={16} height={16} />
                <span>FEATURED</span>
              </div>
          )}
        </div>

        <div className="p-6 flex flex-col gap-4 flex-1">
          {/* Title and Author */}
          <div>
            <h3 className="text-xl font-bold text-navyGray dark:text-white mb-2 line-clamp-1 hover:text-black dark:hover:text-gray-200 transition-colors">
              {book.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium">{book.author}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 dark:fill-gray-600 text-gray-300 dark:text-gray-600'}`}
                    viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
            <span className="text-sm text-navyGray dark:text-white/80 ml-1 font-semibold">
              {book.rating}/5
            </span>
          </div>

          {/* Condition and Genre */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-sm text-navyGray dark:text-white/80">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">{book.condition}</span>
            </div>
            <span className="text-xs font-semibold text-navyGray dark:text-white bg-gray-200 dark:bg-gray-700 px-3 py-1.5 rounded-full capitalize">
              {book.genre}
            </span>
          </div>

          {/* Year */}
          <div className="text-sm text-navyGray dark:text-white/80 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span><span className="font-semibold">Published:</span> {book.publishYear}</span>
          </div>

          {/* Buttons - IMPROVED */}
          <div className="flex items-center gap-3 mt-auto">
            <Link
                href={`/book/${book?.id}`}
                className="flex-1 bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white dark:hover:text-black hover:text-white border-2 border-black dark:border-white py-2.5 px-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
            >
              View Details
            </Link>

            {/* Swap Button - Shows for both available and unavailable */}
            {book?.availableForSwap ? (
                <Link
                    href={`/swap/${book?.id}`}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 px-4 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Request Swap
                </Link>
            ) : (
                <button
                    disabled
                    className="flex-1 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-400 py-2.5 px-4 rounded-lg font-semibold text-center cursor-not-allowed opacity-60"
                    title="This book is not available for swap"
                >
                  Not Available
                </button>
            )}
          </div>

          {/* Owner */}
          <div className="pt-4 border-t-2 border-gray-200 dark:border-gray-700">
            <Link
                href={`/user/${book?.id}`}
                className="flex items-center gap-2.5 text-sm text-navyGray dark:text-white/80 hover:text-black dark:hover:text-white transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-blue-700 dark:text-blue-300 font-bold text-base">
                  {book.owner_name.charAt(0)}
                </span>
              </div>
              <span className="font-medium">Owned by <span className="font-semibold">{book.owner_name}</span></span>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default BookCard;

