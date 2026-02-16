'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { mockBooks } from '@/lib/mockBooksData';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function BookDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const book = mockBooks.find(b => b.id === parseInt(id));
    const [isFavorite, setIsFavorite] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({
        rating: 5,
        comment: '',
        userName: 'Tu',
        userImage: 'https://ui-avatars.com/api/?name=Tu&background=5D87FF&color=fff&size=128'
    });

    if (!book) {
        return (
            <div className="container mx-auto px-6 py-20 text-center bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/50 min-h-screen">
                <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-3xl p-12 shadow-2xl border border-white/50 dark:border-slate-700/50 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-navyGray dark:text-white mb-8">
                        Cartea nu a fost găsită
                    </h1>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-[#5D87FF] hover:bg-[#4a6fdb] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Înapoi la Cărți
                    </Link>
                </div>
            </div>
        );
    }

    const similarBooks = book.similarBooks
        ? mockBooks.filter(b => book.similarBooks?.includes(b.id))
        : [];

    const handleAddReview = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newReview.comment.trim()) {
            const updatedReviews = [
                ...(book.reviews || []),
                {
                    ...newReview,
                    id: Date.now(),
                    date: new Date().toLocaleDateString('ro-RO'),
                    userImage: newReview.userImage
                }
            ];

            const bookIndex = mockBooks.findIndex(b => b.id === book.id);
            if (bookIndex !== -1) {
                mockBooks[bookIndex].reviews = updatedReviews;
            }

            setNewReview({ rating: 5, comment: '', userName: 'Tu', userImage: 'https://ui-avatars.com/api/?name=Tu&background=5D87FF&color=fff&size=128' });
            setShowReviewForm(false);
        }
    };

    const averageRating = book.reviews && book.reviews.length > 0
        ? (book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length).toFixed(1)
        : 'N/A';

    return (
        <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 py-8 pt-24 md:pt-32">

                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-navyGray dark:text-white hover:text-primary-600 dark:hover:text-primary-400 mb-8 px-4 py-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl border border-white/50 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="font-semibold">Înapoi la Cărți</span>
                </Link>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

                    {/* Left Column - Book Cover */}
                    <div className="lg:col-span-1">
                        <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 rounded-2xl overflow-hidden shadow-xl border border-white/50 dark:border-slate-700/50 sticky top-24 transition-all duration-300 hover:shadow-2xl">

                            {/* Cover Image */}
                            <div className="relative group">
                                <Image
                                    src={book.cover_image}
                                    alt={book.title}
                                    width={400}
                                    height={600}
                                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />

                                {/* Badges */}
                                {book.availableForSwap && (
                                    <div className="absolute top-4 left-4 bg-[#5D87FF] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                                        🔄 Disponibilă pentru Swap
                                    </div>
                                )}
                                {book.featured && (
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                                        <Image src={"/images/icon/diamond-icon.svg"} alt="featured" width={14} height={14} />
                                        <span>FEATURED</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6 space-y-3">
                                <button
                                    onClick={() => setIsFavorite(!isFavorite)}
                                    className="w-full bg-white/60 dark:bg-slate-700/60 hover:bg-white/90 dark:hover:bg-slate-700/90 backdrop-blur-xl text-navyGray dark:text-white border border-gray-200/50 dark:border-slate-600/50 py-3 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <svg
                                        className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'fill-none'} group-hover:scale-110 transition-transform`}
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                    {isFavorite ? 'Elimină din Favorite' : 'Adaugă în Favorite'}
                                </button>

                                {book.availableForSwap && (
                                    <Link
                                        href={`/swap/${book.id}`}
                                        className="w-full bg-[#5D87FF] hover:bg-[#4a6fdb] text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                                    >
                                        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        Solicită Swap
                                    </Link>
                                )}

                                {/* Book Stats */}
                                <div className="pt-4 border-t border-gray-200/50 dark:border-slate-700/50 space-y-2 text-sm">
                                    <div className="flex justify-between items-center p-2.5 bg-white/40 dark:bg-slate-700/40 rounded-lg">
                                        <span className="text-navyGray/70 dark:text-slate-300">📖 Stare:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.condition}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2.5 bg-white/30 dark:bg-slate-700/30 rounded-lg">
                                        <span className="text-navyGray/70 dark:text-slate-300">📄 Pagini:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.pages || 'N/A'}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2.5 bg-white/40 dark:bg-slate-700/40 rounded-lg">
                                        <span className="text-navyGray/70 dark:text-slate-300">🌐 Limbă:</span>
                                        <span className="font-semibold text-navyGray dark:text-white">{book.language || 'Română'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Book Info */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Title and Author */}
                        <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 rounded-2xl p-6 shadow-xl border border-white/50 dark:border-slate-700/50">
                            <h1 className="text-3xl md:text-4xl font-bold text-navyGray dark:text-white mb-3 leading-tight">
                                {book.title}
                            </h1>
                            <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
                                de {book.author}
                            </p>

                            {/* Rating and Genre */}
                            <div className="flex items-center gap-4 flex-wrap bg-white/50 dark:bg-slate-700/50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 px-3 py-2 bg-yellow-400/20 dark:bg-yellow-500/20 rounded-lg border border-yellow-200/50 dark:border-yellow-600/30">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-yellow-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg font-bold text-navyGray dark:text-white">{averageRating}</span>
                                        <span className="text-sm text-navyGray/70 dark:text-slate-300">({book.reviews?.length || 0})</span>
                                    </div>
                                </div>

                                <span className="bg-[#5D87FF]/20 text-[#5D87FF] dark:text-[#7ea0ff] px-4 py-2 rounded-lg font-semibold border border-[#5D87FF]/30 text-sm">
                                    {book.genre}
                                </span>

                                <span className="text-sm text-navyGray/70 dark:text-slate-300 font-medium">
                                    Publicat: {book.publishYear}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50">
                            <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4 flex items-center gap-2">
                                📖 Despre Carte
                            </h2>
                            <p className="text-base text-navyGray/90 dark:text-slate-200 leading-relaxed text-justify">
                                {book.description}
                            </p>
                        </div>

                        {/* Long Description */}
                        {book.longDescription && (
                            <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 p-6 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50">
                                <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4 flex items-center gap-2">
                                    📚 Descriere Detaliată
                                </h2>
                                <p className="text-base text-navyGray/85 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                    {book.longDescription}
                                </p>
                            </div>
                        )}

                        {/* Owner Info */}
                        <div className="backdrop-blur-xl bg-[#5D87FF]/10 dark:bg-[#5D87FF]/20 p-6 rounded-2xl shadow-xl border border-[#5D87FF]/30">
                            <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-4 flex items-center gap-2">
                                👤 Proprietar
                            </h2>
                            <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl shadow-lg">
                                <Image
                                    src={book.owner_image}
                                    alt={book.owner_name}
                                    width={60}
                                    height={60}
                                    className="rounded-xl shadow-lg ring-2 ring-white/50 dark:ring-slate-700/50"
                                />
                                <div>
                                    <p className="text-xl font-bold text-navyGray dark:text-white">{book.owner_name}</p>
                                </div>
                            </div>
                        </div>

                        {/* Add Review Button */}
                        <div className="backdrop-blur-xl bg-[#5D87FF]/10 dark:bg-[#5D87FF]/20 p-6 rounded-2xl shadow-xl border border-[#5D87FF]/30">
                            <button
                                onClick={() => setShowReviewForm(!showReviewForm)}
                                className="w-full bg-[#5D87FF] hover:bg-[#4a6fdb] text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 justify-center group"
                            >
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                {showReviewForm ? 'Anulează' : 'Adaugă Recenzie'}
                            </button>
                        </div>

                        {/* Review Form */}
                        {showReviewForm && (
                            <div className="backdrop-blur-2xl bg-white/90 dark:bg-slate-800/90 p-8 rounded-2xl shadow-2xl border border-white/60 dark:border-slate-700/50 animate-in slide-in-from-bottom-4 duration-500">
                                <form onSubmit={handleAddReview} className="space-y-6">
                                    <h3 className="text-2xl font-bold text-center mb-6 text-[#5D87FF]">
                                        Scrie-ți Recenzia
                                    </h3>

                                    {/* Star Rating */}
                                    <div className="flex items-center justify-center mb-6">
                                        <div className="flex gap-2">
                                            {[1,2,3,4,5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setNewReview({...newReview, rating: star})}
                                                    className={`w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center ${
                                                        star <= newReview.rating
                                                            ? 'bg-amber-400 text-white shadow-lg hover:scale-110'
                                                            : 'bg-gray-200 dark:bg-slate-700 text-gray-400 dark:text-slate-500 hover:bg-gray-300 dark:hover:bg-slate-600 hover:scale-110'
                                                    }`}
                                                >
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <textarea
                                        value={newReview.comment}
                                        onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                                        placeholder="Spune-ne ce părere ai despre această carte... ✨"
                                        className="w-full p-4 text-base bg-white/70 dark:bg-slate-900/50 border-2 border-gray-200/50 dark:border-slate-700/50 text-navyGray dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 rounded-xl focus:border-purple-400 dark:focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100/50 dark:focus:ring-purple-900/30 resize-vertical shadow-lg transition-all duration-300"
                                        rows={4}
                                    />

                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="submit"
                                            disabled={!newReview.comment.trim()}
                                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center gap-2 justify-center"
                                        >
                                            <span>✅</span>
                                            Publică Recenzia
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowReviewForm(false);
                                                setNewReview({ rating: 5, comment: '', userName: 'Tu', userImage: 'https://ui-avatars.com/api/?name=Tu&background=5D87FF&color=fff&size=128' });
                                            }}
                                            className="px-6 py-3 bg-gray-400 dark:bg-slate-700 hover:bg-gray-500 dark:hover:bg-slate-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 justify-center"
                                        >
                                            <span>❌</span>
                                            Anulează
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Reviews Section */}
                        {book.reviews && book.reviews.length > 0 && (
                            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 p-6 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50">
                                <h2 className="text-2xl font-bold text-navyGray dark:text-white mb-6 flex items-center gap-2">
                                    💬 Recenzii ({book.reviews.length})
                                </h2>
                                <div className="space-y-4">
                                    {book.reviews.map(review => (
                                        <div key={review.id} className="backdrop-blur-xl bg-white/60 dark:bg-slate-700/60 p-5 rounded-xl border border-white/50 dark:border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                            <div className="flex items-start gap-4">
                                                <Image
                                                    src={review.userImage}
                                                    alt={review.userName}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-xl shadow-lg ring-2 ring-white/50 dark:ring-slate-600/50 flex-shrink-0"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-2 gap-4">
                                                        <div>
                                                            <p className="text-lg font-bold text-navyGray dark:text-white">{review.userName}</p>
                                                            <p className="text-sm text-navyGray/70 dark:text-slate-400">{review.date}</p>
                                                        </div>
                                                        <div className="flex items-center gap-0.5 flex-shrink-0">
                                                            {[...Array(5)].map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 dark:fill-slate-600'}`}
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="text-base text-navyGray/90 dark:text-slate-200 leading-relaxed">
                                                        {review.comment}
                                                    </p>
                                                </div>
                                            </div>
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
                        <h2 className="text-3xl font-bold text-navyGray dark:text-white mb-8 text-center">
                            📚 Cărți Similare
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {similarBooks.map(similarBook => (
                                <Link
                                    key={similarBook.id}
                                    href={`/book/${similarBook.id}`}
                                    className="group backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 dark:border-slate-700/50"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={similarBook.cover_image}
                                            alt={similarBook.title}
                                            width={400}
                                            height={600}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-navyGray dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 mb-2">
                                            {similarBook.title}
                                        </h3>
                                        <p className="text-base text-navyGray/80 dark:text-slate-300 font-medium">
                                            {similarBook.author}
                                        </p>
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

