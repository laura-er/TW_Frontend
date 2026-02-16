'use client';

import { useState } from 'react';
import BookCard from '@/app/components/shared/book-card';
import { mockBooks } from '@/lib/mockBooksData';

export default function BooksPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [selectedCondition, setSelectedCondition] = useState('All');
    const [availableOnly, setAvailableOnly] = useState(false);

    // Get unique genres from books
    const genres = ['All', ...Array.from(new Set(mockBooks.map(book => book.genre)))];
    const conditions = ['All', 'New', 'Like New', 'Good', 'Fair'];

    // Filter books based on all criteria
    const filteredBooks = mockBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
        const matchesCondition = selectedCondition === 'All' || book.condition === selectedCondition;
        const matchesAvailability = !availableOnly || book.availableForSwap;

        return matchesSearch && matchesGenre && matchesCondition && matchesAvailability;
    });

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedGenre('All');
        setSelectedCondition('All');
        setAvailableOnly(false);
    };

    return (
        <div className="container mx-auto px-6 py-12">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Book Catalog</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                    Browse our collection of {mockBooks.length} available books
                </p>
            </div>

            {/* Search and Filters */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-8">
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            🔍
                        </div>
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Filters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Genre Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            📚 Genre
                        </label>
                        <select
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-black dark:text-white"
                        >
                            {genres.map(genre => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Condition Filter */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            ⭐ Condition
                        </label>
                        <select
                            value={selectedCondition}
                            onChange={(e) => setSelectedCondition(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-gray-700 text-black dark:text-white"
                        >
                            {conditions.map(condition => (
                                <option key={condition} value={condition}>{condition}</option>
                            ))}
                        </select>
                    </div>

                    {/* Available Only Checkbox */}
                    <div className="flex items-end">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={availableOnly}
                                onChange={(e) => setAvailableOnly(e.target.checked)}
                                className="w-5 h-5 rounded"
                            />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                Available for swap only
              </span>
                        </label>
                    </div>

                    {/* Clear Filters Button */}
                    <div className="flex items-end">
                        <button
                            onClick={clearFilters}
                            className="w-full px-6 py-2 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Results Counter */}
            <div className="mb-6 text-gray-600 dark:text-gray-400">
                Showing <span className="font-semibold text-black dark:text-white">{filteredBooks.length}</span> of {mockBooks.length} books
            </div>

            {/* Books Grid */}
            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                        No books found matching your criteria
                    </p>
                    <button
                        onClick={clearFilters}
                        className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>
    );
}