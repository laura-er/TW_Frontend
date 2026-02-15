"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
      <div className="shadow-card rounded-md hover:scale-[1.01] transition-transform duration-300 overflow-hidden flex flex-col h-full">
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
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <svg
                className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                fill={isFavorite ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Available Badge */}
          {book?.availableForSwap && (
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Available
              </div>
          )}

          {/* Featured Badge */}
          {book?.featured && (
              <div className="absolute bottom-4 left-4 bg-shineYellow text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Image src={"/images/icon/diamond-icon.svg"} alt="featured" width={16} height={16} />
                <span>FEATURED</span>
              </div>
          )}
        </div>

        <div className="p-6 flex flex-col gap-4 flex-1">
          {/* Title and Author */}
          <div>
            <h3 className="text-xl font-bold text-navyGray dark:text-white mb-2 line-clamp-1">
              {book.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium">{book.author}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm text-navyGray dark:text-white/80">
            {book.rating}/5
          </span>
          </div>

          {/* Condition and Genre */}
          <div className="flex items-center justify-between">
          <span className="text-sm text-navyGray dark:text-white/80">
            <span className="font-semibold">Condition:</span> {book.condition}
          </span>
            <span className="text-sm text-navyGray dark:text-white bg-gray dark:bg-white/20 px-2 py-1 rounded capitalize">
            {book.genre}
          </span>
          </div>

          {/* Year */}
          <div className="text-sm text-navyGray dark:text-white/80">
            <span className="font-semibold">Published:</span> {book.publishYear}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-auto">
            <Link
                href={`/book/${book?.id}`}
                className="flex-1 bg-transparent hover:bg-black dark:hover:bg-white text-black dark:text-white dark:hover:text-black hover:text-white border border-black dark:border-white py-2 px-4 rounded-md font-medium text-center transition-colors duration-300"
            >
              View Details
            </Link>
            {book?.availableForSwap && (
                <Link
                    href={`/swap/${book?.id}`}
                    className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 py-2 px-4 rounded-md font-medium text-center transition-colors duration-300"
                >
                  Request Swap
                </Link>
            )}
          </div>

          {/* Owner */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link
                href={`/user/${book?.id}`}
                className="flex items-center gap-2 text-sm text-navyGray dark:text-white/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <span className="text-primary-700 dark:text-primary-300 font-semibold">
                {book.owner_name.charAt(0)}
              </span>
              </div>
              <span>Owned by {book.owner_name}</span>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default BookCard;

