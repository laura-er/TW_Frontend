'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (bookData: BookFormData) => void;
}

export interface BookFormData {
  title: string;
  author: string;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  genre: string;
  publishedYear: string;
  description: string;
  coverImage?: string;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    condition: 'Good',
    genre: '',
    publishedYear: '',
    description: '',
    coverImage: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      title: '',
      author: '',
      condition: 'Good',
      genre: '',
      publishedYear: '',
      description: '',
      coverImage: '',
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <Dialog.Title className="text-xl font-bold text-navyGray dark:text-white">
                    Add New Book
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <svg className="w-5 h-5 text-navyGray dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                      Book Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                      placeholder="Enter book title"
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <label htmlFor="author" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                      Author *
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      required
                      value={formData.author}
                      onChange={handleChange}
                      className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                      placeholder="Enter author name"
                    />
                  </div>

                  {/* Published Year */}
                  <div>
                    <label htmlFor="publishedYear" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                      Published Year
                    </label>
                    <input
                      type="text"
                      id="publishedYear"
                      name="publishedYear"
                      value={formData.publishedYear}
                      onChange={handleChange}
                      className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                      placeholder="2024"
                    />
                  </div>

                  {/* Condition & Genre */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="condition" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                        Condition *
                      </label>
                      <select
                        id="condition"
                        name="condition"
                        required
                        value={formData.condition}
                        onChange={handleChange}
                        className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                      >
                        <option value="New">New</option>
                        <option value="Like New">Like New</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                        <option value="Poor">Poor</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="genre" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                        Genre *
                      </label>
                      <input
                        type="text"
                        id="genre"
                        name="genre"
                        required
                        value={formData.genre}
                        onChange={handleChange}
                        className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                        placeholder="Fiction, Romance, etc."
                      />
                    </div>
                  </div>

                  {/* Cover Image URL */}
                  <div>
                    <label htmlFor="coverImage" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                      Cover Image URL
                    </label>
                    <input
                      type="url"
                      id="coverImage"
                      name="coverImage"
                      value={formData.coverImage}
                      onChange={handleChange}
                      className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                      placeholder="https://example.com/book-cover.jpg"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-navyGray dark:text-white mb-1.5">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={2}
                      value={formData.description}
                      onChange={handleChange}
                      className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white resize-none"
                      placeholder="Brief description..."
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 rounded-lg border-2 border-gray-300 dark:border-slate-600 px-5 py-2.5 font-semibold text-navyGray dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-lg bg-primary hover:bg-primary/90 px-5 py-2.5 font-semibold text-white shadow-lg transition-colors"
                    >
                      Add Book
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddBookModal;