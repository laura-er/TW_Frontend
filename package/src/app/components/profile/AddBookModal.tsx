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
  isbn: string;
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
    isbn: '',
    condition: 'Good',
    genre: '',
    publishedYear: '',
    description: '',
    coverImage: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      author: '',
      isbn: '',
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title className="text-2xl font-bold text-navyGray dark:text-white">
                    Add New Book
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <svg className="w-6 h-6 text-navyGray dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
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

                  <div>
                    <label htmlFor="author" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="isbn" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
                        ISBN
                      </label>
                      <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white"
                        placeholder="978-3-16-148410-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="publishedYear" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="condition" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
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
                      <label htmlFor="genre" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
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

                  <div>
                    <label htmlFor="coverImage" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
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

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-navyGray dark:text-white mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className="input-class bg-white dark:bg-slate-700 text-navyGray dark:text-white resize-none"
                      placeholder="Brief description of the book..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 rounded-lg border-2 border-gray-300 dark:border-slate-600 px-6 py-3 font-semibold text-navyGray dark:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-lg bg-primary hover:bg-primary/90 px-6 py-3 font-semibold text-white shadow-lg transition-colors"
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
