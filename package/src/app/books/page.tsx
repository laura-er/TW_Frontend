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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-baseInk">
            <div className="container mx-auto px-6 py-12">
                {/* Header Section - Improved */}
                <div className="mb-12 text-center">
                    <div className="inline-block mb-4">
                        <div className="text-5xl mb-3">📚</div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 mb-4">
                        Book Catalog
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover your next great read from our collection of <span className="font-bold text-black dark:text-white">{mockBooks.length}</span> amazing books
                    </p>
                </div>

                {/* Search and Filters - Enhanced Design */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mb-10 backdrop-blur-sm">
                    {/* Search Bar - Improved */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            🔍 Search Books
                        </label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search by title or author..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white bg-gray-50 dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 text-lg"
                            />
                        </div>
                    </div>

                    {/* Filters Grid - Enhanced */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Genre Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                📖 Genre
                            </label>
                            <select
                                value={selectedGenre}
                                onChange={(e) => setSelectedGenre(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white bg-gray-50 dark:bg-gray-700 text-black dark:text-white transition-all duration-300 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500"
                            >
                                {genres.map(genre => (
                                    <option key={genre} value={genre}>{genre}</option>
                                ))}
                            </select>
                        </div>

                        {/* Condition Filter */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                ⭐ Condition
                            </label>
                            <select
                                value={selectedCondition}
                                onChange={(e) => setSelectedCondition(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 focus:border-black dark:focus:border-white bg-gray-50 dark:bg-gray-700 text-black dark:text-white transition-all duration-300 cursor-pointer hover:border-gray-400 dark:hover:border-gray-500"
                            >
                                {conditions.map(condition => (
                                    <option key={condition} value={condition}>{condition}</option>
                                ))}
                            </select>
                        </div>

                        {/* Available Only Checkbox */}
                        <div className="flex items-end">
                            <label className="flex items-center space-x-3 cursor-pointer group">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={availableOnly}
                                        onChange={(e) => setAvailableOnly(e.target.checked)}
                                        className="w-6 h-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 checked:bg-green-500 checked:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all cursor-pointer"
                                    />
                                    {availableOnly && (
                                        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                  Available for swap only
                </span>
                            </label>
                        </div>

                        {/* Clear Filters Button */}
                        <div className="flex items-end">
                            <button
                                onClick={clearFilters}
                                className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 font-semibold"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Counter - Styled */}
                <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                    <div className="text-lg text-gray-600 dark:text-gray-400">
                        Showing <span className="font-bold text-2xl text-black dark:text-white mx-1">{filteredBooks.length}</span>
                        of <span className="font-semibold text-black dark:text-white">{mockBooks.length}</span> books
                    </div>

                    {/* Stats Pills */}
                    <div className="flex gap-3 flex-wrap">
                        <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">
                            ✓ {mockBooks.filter(b => b.availableForSwap).length} Available
                        </div>
                        <div className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold">
                            🔒 {mockBooks.filter(b => !b.availableForSwap).length} Not Available
                        </div>
                    </div>
                </div>

                {/* Books Grid */}
                {filteredBooks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-8xl mb-6 animate-bounce">📚</div>
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                            No Books Found
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                            We couldn't find any books matching your search criteria. Try adjusting your filters!
                        </p>
                        <button
                            onClick={clearFilters}
                            className="px-8 py-4 bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
