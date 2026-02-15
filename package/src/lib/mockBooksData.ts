export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    condition: string;
    cover_image: string;
    owner_name: string;
    owner_image: string;
    availableForSwap: boolean;
    featured: boolean;
    rating: number;
    publishYear: number;
    description: string;
    longDescription?: string;
    reviews?: Array<{
        id: number;
        userName: string;
        userImage: string;
        rating: number;
        comment: string;
        date: string;
    }>;
    swapHistory?: Array<{
        swappedWith: string;
        date: string;
        bookReceived: string;
    }>;
    similarBooks?: number[];
    additionalImages?: string[];
    isbn?: string;
    pages?: number;
    language?: string;
    publisher?: string;
}

export const mockBooks: Book[] = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Fiction",
        condition: "Good",
        cover_image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        owner_name: "Maria Popescu",
        owner_image: "https://i.pravatar.cc/150?img=1",
        availableForSwap: true,
        featured: false,
        rating: 4.5,
        publishYear: 1925,
        description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby.",
        longDescription: "The Great Gatsby is a tragic love story on the surface, but it's most commonly understood as a pessimistic critique of the American Dream. In the novel, Jay Gatsby overcomes his poor past to gain an incredible amount of money and a limited amount of social cache in 1920s NYC, only to be rejected by the 'old money' crowd. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession for the beautiful former debutante Daisy Buchanan.",
        reviews: [
            {
                id: 1,
                userName: "Ion Ionescu",
                userImage: "https://i.pravatar.cc/150?img=2",
                rating: 5,
                comment: "An absolute masterpiece! Fitzgerald's prose is beautiful and the story is captivating.",
                date: "2024-01-15"
            },
            {
                id: 2,
                userName: "Ana Georgescu",
                userImage: "https://i.pravatar.cc/150?img=3",
                rating: 4,
                comment: "Great book with complex characters and themes.",
                date: "2024-01-20"
            }
        ],
        swapHistory: [
            {
                swappedWith: "Elena Vasilescu",
                date: "2023-12-10",
                bookReceived: "To Kill a Mockingbird"
            }
        ],
        similarBooks: [2, 4, 11],
        isbn: "9780743273565",
        pages: 180,
        language: "English",
        publisher: "Scribner"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic Fiction",
        condition: "Like New",
        cover_image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        owner_name: "Ion Ionescu",
        owner_image: "https://i.pravatar.cc/150?img=2",
        availableForSwap: true,
        featured: true,
        rating: 4.8,
        publishYear: 1960,
        description: "A gripping tale of racial injustice and childhood innocence in the American South during the 1930s.",
        longDescription: "To Kill a Mockingbird is a novel by Harper Lee published in 1960. The plot and characters are loosely based on Lee's observations of her family and neighbors. The story takes place during three years of the Great Depression in the fictional town of Maycomb, Alabama. It focuses on six-year-old Jean Louise Finch, who lives with her older brother, Jem, and their widowed father, Atticus, a middle-aged lawyer. The novel is renowned for its warmth and humor, despite dealing with serious issues of rape and racial inequality.",
        reviews: [
            {
                id: 1,
                userName: "Maria Popescu",
                userImage: "https://i.pravatar.cc/150?img=1",
                rating: 5,
                comment: "One of the best books I've ever read. A powerful story about justice and morality.",
                date: "2024-02-01"
            }
        ],
        similarBooks: [1, 3],
        isbn: "9780061120084",
        pages: 324,
        language: "English",
        publisher: "J. B. Lippincott & Co."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        condition: "Good",
        cover_image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        owner_name: "Ana Georgescu",
        owner_image: "https://i.pravatar.cc/150?img=3",
        availableForSwap: true,
        featured: false,
        rating: 4.7,
        publishYear: 1949,
        description: "A dystopian social science fiction novel exploring surveillance, truth, and totalitarianism in a frightening future society.",
        longDescription: "1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation. The superstate is under the control of the privileged elite of the Inner Party, a party and government that persecutes individualism and independent thinking as 'thoughtcrime.' The tyranny is ostensibly overseen by Big Brother, the Party leader who enjoys an intense cult of personality.",
        reviews: [
            {
                id: 1,
                userName: "Mihai Dumitrescu",
                userImage: "https://i.pravatar.cc/150?img=4",
                rating: 5,
                comment: "Chilling and prophetic. More relevant today than ever.",
                date: "2024-01-25"
            }
        ],
        similarBooks: [8, 2],
        isbn: "9780451524935",
        pages: 328,
        language: "English",
        publisher: "Secker & Warburg"
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        condition: "New",
        cover_image: "https://covers.openlibrary.org/b/id/8235657-L.jpg",
        owner_name: "Maria Popescu",
        owner_image: "https://i.pravatar.cc/150?img=1",
        availableForSwap: true,
        featured: false,
        rating: 4.6,
        publishYear: 1813,
        description: "A romantic novel exploring issues of morality, education, and marriage in British Regency society.",
        longDescription: "Pride and Prejudice is a romantic novel by Jane Austen, first published in 1813. The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency. Elizabeth is the second of five daughters of a country gentleman living near the fictional town of Meryton. The novel is highly regarded for its wit, social commentary, and memorable characters.",
        reviews: [
            {
                id: 1,
                userName: "Elena Vasilescu",
                userImage: "https://i.pravatar.cc/150?img=5",
                rating: 5,
                comment: "A timeless classic. Austen's wit and social commentary are brilliant.",
                date: "2024-02-05"
            }
        ],
        similarBooks: [1],
        isbn: "9780141439518",
        pages: 432,
        language: "English",
        publisher: "T. Egerton"
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        condition: "Like New",
        cover_image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        owner_name: "Ion Ionescu",
        owner_image: "https://i.pravatar.cc/150?img=2",
        availableForSwap: true,
        featured: true,
        rating: 4.9,
        publishYear: 1937,
        description: "A fantasy adventure following Bilbo Baggins as he encounters dragons, dwarves, and magic on an epic journey.",
        longDescription: "The Hobbit is a children's fantasy novel by English author J. R. R. Tolkien. The story follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from his peaceful Shire to treacherous lands where he gains both maturity and confidence. The novel introduces important characters and locations from Middle-earth that would later feature prominently in The Lord of the Rings.",
        reviews: [
            {
                id: 1,
                userName: "Ana Georgescu",
                userImage: "https://i.pravatar.cc/150?img=3",
                rating: 5,
                comment: "A wonderful adventure story! Perfect for all ages.",
                date: "2024-01-30"
            }
        ],
        similarBooks: [12, 6],
        isbn: "9780547928227",
        pages: 310,
        language: "English",
        publisher: "George Allen & Unwin"
    },
    {
        id: 6,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        condition: "New",
        cover_image: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
        owner_name: "Maria Popescu",
        owner_image: "https://i.pravatar.cc/150?img=1",
        availableForSwap: true,
        featured: false,
        rating: 4.8,
        publishYear: 1997,
        description: "The first novel in the Harry Potter series, introducing the magical world of Hogwarts and the boy who lived.",
        longDescription: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday. Harry learns that his parents, who he thought died in a car crash, were actually murdered by the dark wizard Lord Voldemort. The book introduces readers to the wizarding world, including Hogwarts School of Witchcraft and Wizardry.",
        reviews: [
            {
                id: 1,
                userName: "Ion Ionescu",
                userImage: "https://i.pravatar.cc/150?img=2",
                rating: 5,
                comment: "Magical! Started my love for the entire series.",
                date: "2024-02-10"
            }
        ],
        similarBooks: [5, 12],
        isbn: "9780439708180",
        pages: 223,
        language: "English",
        publisher: "Bloomsbury"
    },
    {
        id: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming of Age",
        condition: "Good",
        cover_image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        owner_name: "Mihai Dumitrescu",
        owner_image: "https://i.pravatar.cc/150?img=4",
        availableForSwap: true,
        featured: false,
        rating: 4.3,
        publishYear: 1951,
        description: "A controversial novel detailing the experiences of a troubled teenager in New York City.",
        longDescription: "The Catcher in the Rye is a novel by J. D. Salinger. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the phoniness of the adult world. The novel has been translated into almost all of the world's major languages and has become one of the most controversial books in modern American literature.",
        reviews: [
            {
                id: 1,
                userName: "Maria Popescu",
                userImage: "https://i.pravatar.cc/150?img=1",
                rating: 4,
                comment: "Captures teenage angst perfectly. Holden is unforgettable.",
                date: "2024-01-18"
            }
        ],
        similarBooks: [2],
        isbn: "9780316769174",
        pages: 277,
        language: "English",
        publisher: "Little, Brown and Company"
    },
    {
        id: 8,
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        condition: "Good",
        cover_image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        owner_name: "Elena Vasilescu",
        owner_image: "https://i.pravatar.cc/150?img=5",
        availableForSwap: true,
        featured: false,
        rating: 4.4,
        publishYear: 1932,
        description: "A dystopian novel that anticipates developments in reproductive technology and psychological manipulation.",
        longDescription: "Brave New World is a dystopian novel written in 1931 by English author Aldous Huxley. Set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation, and classical conditioning that are combined to make a dystopian society. The novel examines themes of individuality, happiness, and freedom in a technologically advanced society.",
        reviews: [
            {
                id: 1,
                userName: "Ana Georgescu",
                userImage: "https://i.pravatar.cc/150?img=3",
                rating: 4,
                comment: "Thought-provoking and eerily prescient about our future.",
                date: "2024-02-03"
            }
        ],
        similarBooks: [3],
        isbn: "9780060850524",
        pages: 288,
        language: "English",
        publisher: "Chatto & Windus"
    },
    {
        id: 9,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Philosophical",
        condition: "Like New",
        cover_image: "https://covers.openlibrary.org/b/id/8235657-L.jpg",
        owner_name: "Mihai Dumitrescu",
        owner_image: "https://i.pravatar.cc/150?img=4",
        availableForSwap: true,
        featured: false,
        rating: 4.5,
        publishYear: 1988,
        description: "A philosophical novel about a young shepherd's journey to fulfill his personal legend and find treasure.",
        longDescription: "The Alchemist is a novel by Brazilian author Paulo Coelho. Originally written in Portuguese, it became an international bestseller translated into some 70 languages. The story follows Santiago, an Andalusian shepherd boy who dreams of discovering a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. The book is an inspiring tale about finding one's destiny and following one's dreams.",
        reviews: [
            {
                id: 1,
                userName: "Elena Vasilescu",
                userImage: "https://i.pravatar.cc/150?img=5",
                rating: 5,
                comment: "Inspiring and beautifully written. Changed my perspective on life.",
                date: "2024-01-22"
            }
        ],
        similarBooks: [10],
        isbn: "9780062315007",
        pages: 197,
        language: "English",
        publisher: "HarperCollins"
    },
    {
        id: 10,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Psychological",
        condition: "Good",
        cover_image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        owner_name: "Elena Vasilescu",
        owner_image: "https://i.pravatar.cc/150?img=5",
        availableForSwap: true,
        featured: false,
        rating: 4.7,
        publishYear: 1866,
        description: "A psychological thriller exploring morality, poverty, and redemption in 19th century Russia.",
        longDescription: "Crime and Punishment is a novel by Russian author Fyodor Dostoevsky. It focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates a plan to kill an unscrupulous pawnbroker for her money. The novel is one of the most influential works of literature, dealing with themes of redemption, mental illness, morality, and the psychology of crime and punishment.",
        reviews: [
            {
                id: 1,
                userName: "Ion Ionescu",
                userImage: "https://i.pravatar.cc/150?img=2",
                rating: 5,
                comment: "A masterpiece of psychological fiction. Intense and profound.",
                date: "2024-01-28"
            }
        ],
        similarBooks: [3, 9],
        isbn: "9780143058144",
        pages: 671,
        language: "English",
        publisher: "The Russian Messenger"
    },
    {
        id: 11,
        title: "The Book Thief",
        author: "Markus Zusak",
        genre: "Historical",
        condition: "Like New",
        cover_image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        owner_name: "Ion Ionescu",
        owner_image: "https://i.pravatar.cc/150?img=2",
        availableForSwap: true,
        featured: false,
        rating: 4.6,
        publishYear: 2005,
        description: "A moving story about a young girl living in Nazi Germany who steals books and shares them with others.",
        longDescription: "The Book Thief is a historical novel by Australian author Markus Zusak. Set in Nazi Germany during World War II, it tells the story of Liesel Meminger, a foster girl living outside of Munich. The book's narrator is Death, who tells the story of Liesel's experiences. During her time with her foster family, she learns to read and shares her stolen books with her neighbors during bombing raids and with the Jewish man hidden in her basement.",
        reviews: [
            {
                id: 1,
                userName: "Maria Popescu",
                userImage: "https://i.pravatar.cc/150?img=1",
                rating: 5,
                comment: "Beautifully written and deeply moving. A unique perspective on WWII.",
                date: "2024-02-08"
            }
        ],
        similarBooks: [2, 1],
        isbn: "9780375842207",
        pages: 552,
        language: "English",
        publisher: "Picador"
    },
    {
        id: 12,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        condition: "Fair",
        cover_image: "https://covers.openlibrary.org/b/id/9255566-L.jpg",
        owner_name: "Ana Georgescu",
        owner_image: "https://i.pravatar.cc/150?img=3",
        availableForSwap: false,
        featured: true,
        rating: 4.9,
        publishYear: 1954,
        description: "An epic high-fantasy trilogy chronicling the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
        longDescription: "The Lord of the Rings is an epic high-fantasy novel by English author J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. The story concerns peoples such as Hobbits, Elves, Men, Dwarves, Wizards, and Orcs, and centers on the Ring of Power made by the Dark Lord Sauron. The trilogy is considered one of the greatest works of fantasy literature ever written.",
        reviews: [
            {
                id: 1,
                userName: "Mihai Dumitrescu",
                userImage: "https://i.pravatar.cc/150?img=4",
                rating: 5,
                comment: "The greatest fantasy epic ever written. A masterwork of world-building.",
                date: "2024-01-12"
            }
        ],
        swapHistory: [
            {
                swappedWith: "Maria Popescu",
                date: "2023-11-15",
                bookReceived: "The Hobbit"
            }
        ],
        similarBooks: [5, 6],
        isbn: "9780544003415",
        pages: 1178,
        language: "English",
        publisher: "Allen & Unwin"
    },
];


