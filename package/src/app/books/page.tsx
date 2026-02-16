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
        <div className="min-h-screen bg-white dark:bg-baseInk pt-32 md:pt-40">
            <div className="container mx-auto px-6 py-12">
                {/* Header Section - Redesigned for Better Contrast */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                        Book Catalog
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover your next great read from our collection of <span className="font-bold text-black dark:text-white">{mockBooks.length}</span> amazing books
                    </p>
                </div>

                {/* Search and Filters - Modern Redesign */}
                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700/50 mb-10">
                    {/* Search Bar - Modern Style */}
                    <div className="mb-6">
                        <div className="relative">
                            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search by title or author..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300 text-base font-medium"
                            />
                        </div>
                    </div>

                    {/* Filters Grid - Modern Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Genre Filter */}
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                                Genre
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                                    className="w-full appearance-none px-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary text-black dark:text-white transition-all duration-300 cursor-pointer font-semibold text-[15px] hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800/50"
                                >
                                    {genres.map(genre => (
                                        <option key={genre} value={genre} className="py-3 font-medium">{genre}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Condition Filter */}
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                                Condition
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedCondition}
                                    onChange={(e) => setSelectedCondition(e.target.value)}
                                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                                    className="w-full appearance-none px-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 focus:border-primary dark:focus:border-primary text-black dark:text-white transition-all duration-300 cursor-pointer font-semibold text-[15px] hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800/50"
                                >
                                    {conditions.map(condition => (
                                        <option key={condition} value={condition} className="py-3 font-medium">{condition}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Available Only Toggle */}
                        <div className="flex items-end">
                            <button
                                onClick={() => setAvailableOnly(!availableOnly)}
                                className={`w-full px-4 py-3.5 rounded-xl font-bold text-[15px] transition-all duration-300 ${
                                    availableOnly
                                        ? 'bg-primary dark:bg-primary text-white shadow-lg shadow-primary/30'
                                        : 'bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-white dark:hover:bg-gray-800/50'
                                }`}
                            >
                                {availableOnly ? '✓ Available Only' : 'Show All'}
                            </button>
                        </div>

                        {/* Clear Filters Button */}
                        <div className="flex items-end">
                            <button
                                onClick={clearFilters}
                                className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-white dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 font-bold text-[15px]"
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Counter - Modern Style */}
                <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                    <div className="text-base font-medium text-gray-600 dark:text-gray-400">
                        Showing <span className="font-bold text-xl text-black dark:text-white mx-1">{filteredBooks.length}</span>
                        of <span className="font-semibold text-black dark:text-white">{mockBooks.length}</span> books
                    </div>

                    {/* Stats Pills - Modern Design */}
                    <div className="flex gap-2 flex-wrap">
                        <div className="px-3 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary border border-primary/30 dark:border-primary/40 rounded-lg text-xs font-bold uppercase tracking-wide">
                            {mockBooks.filter(b => b.availableForSwap).length} Available
                        </div>
                        <div className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-bold uppercase tracking-wide border border-gray-200 dark:border-gray-700">
                            {mockBooks.filter(b => !b.availableForSwap).length} Not Available
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
