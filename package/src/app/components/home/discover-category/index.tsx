import { getAllBlogs } from "@/lib/blogmarkdown";
import CategoryComp from "./CategoryComp";

const DiscoverCategory = () => {
  const blogs = getAllBlogs([
    "title",
    "slug",
    "cover_image",
    "date",
    "tag",
    "description",
    "author_image",
    "author_name",
    "bedge",
    "views",
    "comment"
  ]);

  return <CategoryComp blogs={blogs} />;
};

export default DiscoverCategory;
