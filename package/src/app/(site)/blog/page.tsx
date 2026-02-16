import BlogCard from "@/app/components/shared/book-card";
import { getAllBlogs } from "@/lib/blogmarkdown";
import { Metadata } from "next";
import { Book } from "@/lib/mockBooksData";

type BlogData = {
    tag: string;
    title: string;
    slug: string;
    date: string;
    cover_image: string;
    description: string;
    author_image: string;
    author_name: string;
    bedge: string;
    views: string;
    comment: string;
};

export const metadata: Metadata = {
    title: "Blog | BlogForge",
};

export default function Page() {
    const blogsData: BlogData[] = getAllBlogs(["title", "slug", "cover_image", "date", "tag", "description", "author_image", "author_name", "bedge", "views", "comment"]);
    
    // Map blog data to Book type for compatibility with BookCard component
    const blogs: Book[] = blogsData.map((blog, index) => ({
        id: index + 1,
        title: blog.title,
        author: blog.author_name,
        genre: blog.tag,
        condition: "Good",
        cover_image: blog.cover_image,
        owner_name: blog.author_name,
        owner_image: blog.author_image,
        availableForSwap: true,
        featured: false,
        rating: 5,
        publishYear: new Date(blog.date).getFullYear(),
        description: blog.description,
    }));

    return (
        <section>
            <div className="pb-14 md:pb-20 pt-28 md:pt-40 dark:bg-baseInk">
                <div className="container">
                    <div className="flex flex-col gap-8 md:gap-14">
                        <div className="flex flex-col items-center text-center gap-3.5">
                            <h1 className="font-semibold">Read, Learn & Grow</h1>
                            <p className="font-medium text-navyGray dark:text-white/80 max-w-lg">From expert advice to behind-the-scenes stories — explore content designed for curious minds.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogs.map((book) => (
                                <BlogCard key={book.id} book={book} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
