import { mockBooks } from "@/lib/mockBooksData";
import GenreComp from "./GenreComp";

const DiscoverGenres = () => {
  return <GenreComp books={mockBooks} />;
};

export default DiscoverGenres;