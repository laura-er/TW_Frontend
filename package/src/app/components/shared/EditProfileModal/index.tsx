'use client';

import { useState } from 'react';
import Image from 'next/image';

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentUser: {
        name: string;
        email: string;
        location: string;
        bio: string;
        avatar: string;
    };
    onSave: (updatedUser: {
        name: string;
        email: string;
        location: string;
        bio: string;
        avatar: string;
    }) => void;
}

export default function EditProfileModal({ isOpen, onClose, currentUser, onSave }: EditProfileModalProps) {
    const [formData, setFormData] = useState({
        name: currentUser.name,
        email: currentUser.email,
        location: currentUser.location,
        bio: currentUser.bio,
        avatar: currentUser.avatar,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-warmOrange text-white p-6 rounded-t-2xl flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Edit Profile</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Avatar Preview */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative h-32 w-32 rounded-full border-4 border-warmOrange shadow-xl overflow-hidden">
                            <Image
                                src={formData.avatar}
                                alt="Avatar preview"
                                width={128}
                                height={128}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <label className="block text-sm font-semibold text-warmBrown dark:text-white">
                            Avatar URL
                        </label>
                        <input
                            type="url"
                            value={formData.avatar}
                            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg focus:border-warmOrange focus:outline-none dark:bg-slate-700 dark:text-white"
                            placeholder="https://example.com/avatar.jpg"
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold text-warmBrown dark:text-white mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg focus:border-warmOrange focus:outline-none dark:bg-slate-700 dark:text-white"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-warmBrown dark:text-white mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg focus:border-warmOrange focus:outline-none dark:bg-slate-700 dark:text-white"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-semibold text-warmBrown dark:text-white mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg focus:border-warmOrange focus:outline-none dark:bg-slate-700 dark:text-white"
                            placeholder="City, Country"
                        />
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block text-sm font-semibold text-warmBrown dark:text-white mb-2">
                            Bio
                        </label>
                        <textarea
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            rows={3}
                            maxLength={200}
                            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-slate-600 rounded-lg focus:border-warmOrange focus:outline-none dark:bg-slate-700 dark:text-white resize-none"
                            placeholder="Tell us about yourself..."
                        />
                        <div className="text-right text-sm text-gray-500 dark:text-slate-400 mt-1">
                            {formData.bio.length}/200
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-warmBrown dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-warmBrown dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
