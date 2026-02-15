"use client";

import { useState } from "react";
import BookCard from "@/app/components/shared/book-card";
import Link from "next/link";

const GenreComp = ({ books }: { books: any[] }) => {
    const [selectedGenre, setSelectedGenre] = useState("All");

    const genresWithCount = books.reduce((acc, book) => {
        const genre = book.genre || "Uncategorized";
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const genreButtons = [
        { genre: "All", count: books.length },
        ...Object.entries(genresWithCount).map(([genre, count]) => ({
            genre,
            count,
        })),
    ];

    const filteredBooks =
        selectedGenre === "All"
            ? books
            : books.filter((book) => book.genre === selectedGenre);

    const capitalizeWords = (str: string) =>
        str.replace(/\b\w/g, (char) => char.toUpperCase());

    return (
        <section>
            <div className="dark:bg-baseInk">
                <div className="container">
                    <div className="flex flex-col items-center gap-9 md:gap-14 py-14 md:py-20">
                        <div className="flex flex-col items-center text-center gap-3.5">
                            <h1 className="font-semibold">Explore Book Genres</h1>
                            <p className="font-medium text-navyGray dark:text-white/80">
                                Choose a genre to explore related books -- Find your next great read
                            </p>
                        </div>

                        {/* Genre Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {genreButtons.map(({ genre, count }: any) => (
                                <button
                                    key={genre}
                                    onClick={() => setSelectedGenre(genre)}
                                    className={`px-4 py-2 rounded-md text-base font-medium border transition-all cursor-pointer hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white duration-500 ${selectedGenre === genre
                                        ? "bg-black dark:bg-white text-white dark:text-black dark:border-white/20"
                                        : "bg-transparent text-black dark:text-white border-black/20 dark:border-white/20"
                                    }`}
                                >
                                    {capitalizeWords(genre)} ({count.toString().padStart(2, "0")})
                                </button>
                            ))}
                        </div>

                        {/* Book Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.slice(0, 6).map((book, index) => (
                                <BookCard key={index} book={book} />
                            ))}
                        </div>

                        <Link
                            href="/books"
                            className="bg-transparent hover:bg-black dark:hover:bg-white px-6 py-3 border border-black dark:border-white font-medium text-black dark:text-white dark:hover:text-black hover:text-white rounded-md transition-colors duration-500 ease-in-out"
                        >
                            <span>View All Books</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenreComp;

