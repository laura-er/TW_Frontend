import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
      <div className="shadow-card rounded-md hover:scale-[1.01] transition-transform duration-300">
        <div className="relative w-full h-[320px] overflow-hidden rounded-t-md">
          <Link href={`/book/${book?.id}`}>
            {book?.cover_image &&
                <Image
                    src={book?.cover_image}
                    alt={book?.title}
                    width={365}
                    height={320}
                    className="w-full h-full object-cover rounded-t-md"
                />
            }
          </Link>
          {book?.featured &&
              <div className="absolute top-6 right-6 w-fit flex items-center gap-1.5 px-2 py-1 mb-3 bg-shineYellow rounded-md">
                <Image src={"/images/icon/diamond-icon.svg"} alt="featured" width={20} height={20} />
                <span className="uppercase font-semibold text-white">Featured</span>
              </div>
          }
          {book?.availableForSwap && (
              <span className="absolute bottom-6 right-6 text-xs font-semibold w-fit p-1 px-2.5 text-white bg-green-500 rounded-md">
            Available for Swap
          </span>
          )}
          {!book?.availableForSwap && (
              <span className="absolute bottom-6 right-6 text-xs font-semibold w-fit p-1 px-2.5 text-white bg-gray-500 rounded-md">
            Not Available
          </span>
          )}
        </div>
        <div className="relative p-6 pt-8 flex flex-col gap-5">
          {/* Owner Avatar */}
          <div className="group absolute -top-6 left-7 z-20">
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
              {book?.owner_name}
            </div>
            <Image
                src={book.owner_image}
                alt={book.owner_name}
                width={40}
                height={40}
                className="rounded-full"
            />
          </div>

          {/* Genre Badge */}
          <span className="text-xs font-semibold w-fit p-1 px-2.5 text-navyGray dark:text-white bg-gray dark:bg-white/20 rounded-md capitalize">
          {book.genre}
        </span>

          {/* Book Title and Author */}
          <Link href={`/book/${book?.id}`}>
            <h6 className="text-navyGray dark:text-white font-semibold line-clamp-2">{book.title}</h6>
            <p className="text-sm text-navyGray/70 dark:text-white/70 mt-1">by {book.author}</p>
          </Link>

          {/* Book Details */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-6">
                {/* Condition */}
                <div className="flex items-center gap-2">
                  <svg className="w-[18px] h-[18px] text-navyGray dark:text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-navyGray dark:text-white/80">{book.condition}</p>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <svg className="w-[18px] h-[18px] text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <p className="text-sm text-navyGray dark:text-white/80">{book.rating}/5</p>
                </div>
              </div>
            </div>
            {/* Year */}
            <div className="flex items-center gap-0.5">
              <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"></path>
              </svg>
              <p className="text-xs text-navyGray dark:text-white/80 font-medium">
                {book.publishYear}
              </p>
            </div>
          </div>

          {/* Swap Button */}
          {book?.availableForSwap ? (
              <Link
                  href={`/swap/${book?.id}`}
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 py-2.5 px-4 rounded-md font-medium text-center transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Request Swap
              </Link>
          ) : (
              <button
                  disabled
                  className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-2.5 px-4 rounded-md font-medium text-center cursor-not-allowed"
              >
                Not Available
              </button>
          )}
        </div>
      </div>
  );
};

export default BookCard;


