import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Author {
  author_image: string;
  author_slug: string;
  author_name: string;
  author_detail: string;
}

interface AuthorCardProps {
  author: Author;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author }) => {
  // Demo stats - ar trebui înlocuite cu date reale din API/database
  const availableBooks = Math.floor(Math.random() * 20) + 5;
  const swapCount = Math.floor(Math.random() * 50) + 10;

  return (
    <div className="group flex flex-col px-8 py-6 gap-4 items-center text-center shadow-card rounded-md hover:scale-[1.01] transition-all duration-300 bg-white dark:bg-baseInk">
      <Link href={`/author/${author.author_slug}`}>
        <div className="relative">
          <Image 
            src={author.author_image} 
            alt="user-image" 
            width={80} 
            height={80} 
            className="rounded-full ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all" 
          />
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-baseInk" />
        </div>
      </Link>
      
      <div className="flex flex-col gap-3 w-full">
        {/* Name & Username */}
        <div className="flex flex-col items-center gap-1">
          <Link href={`/author/${author.author_slug}`}>
            <h6 className="text-navyGray dark:text-white font-semibold hover:text-primary transition-colors">
              {author.author_name}
            </h6>
          </Link>
          <p className="text-xs text-navyGray/60 dark:text-white/60">
            @{author.author_slug}
          </p>
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-center gap-4 pt-2 border-t border-navyGray/10 dark:border-white/10">
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-primary">{availableBooks}</p>
            <p className="text-xs text-navyGray/60 dark:text-white/60">Books</p>
          </div>
          <div className="w-px h-8 bg-navyGray/10 dark:bg-white/10" />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-green-500">{swapCount}</p>
            <p className="text-xs text-navyGray/60 dark:text-white/60">Swaps</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-navyGray/70 dark:text-white/70 line-clamp-2">
          {author.author_detail}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;