
import BlogCard from "@/app/components/shared/blog-card";
import { getAllBlogs } from "@/lib/blogmarkdown";
import Image from "next/image";
import Link from "next/link";

export default function AuthorPage({ params }:any) {
    const allBlogs = getAllBlogs([
        "author_name",
        "author_slug",
        "author_detail",
        "author_position",
        "author_image",
        "title",
        "slug",
        "tag",
        "bedge",
        "date",
        "cover_image",
        "views",
        "comment"
    ]);

    const authorBlogs = allBlogs.filter(
        (blog) => blog.author_slug === params.slug
    );

    if (authorBlogs.length === 0) {
        return <div className="p-10">No blogs found for this author.</div>;
    }

    const {
        author_name,
        author_detail,
        author_image,
        author_position,
    } = authorBlogs[0];

    return (
        <section>
            <div className="pb-14 md:pb-20 pt-28 md:pt-40 dark:bg-baseInk">
                <div className="container">
                    <div className="flex flex-col gap-7 md:gap-16">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7">
                            {author_image && (
                                <Image
                                    src={author_image as string}
                                    alt={author_name as string}
                                    width={200}
                                    height={200}
                                    className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 object-cover"
                                />
                            )}
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <h1 className="font-semibold dark:text-white">{author_name}</h1>
                                    <p className="text-sm text-navyGray dark:text-white/80">{author_position}</p>
                                </div>
                                <p className="font-medium text-navyGray max-w-lg dark:text-white/80">{author_detail}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {authorBlogs.map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
