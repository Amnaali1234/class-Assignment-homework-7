export const metadata = {
  title: "Books List",
  description:
    "A list of books fetched from the API using server-side rendering.",
};

async function fetchBooks() {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  return response.json();
}

export default async function BooksPage() {
  try {
    const books = await fetchBooks();

    return (
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-8">
          SERVER-SIDE DATA FETCHING
        </h1>
        <div className="max-w-5xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book: any) => (
              <li
                key={book.id}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform hover:scale-105 hover:shadow-xl"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                  {book.name}
                </h2>
                <p className="text-gray-700 text-sm sm:text-base mb-2">
                  <span className="font-medium">Type:</span> {book.type}
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  <span className="font-medium">Available:</span>{" "}
                  {book.available ? (
                    <span className="text-green-600 font-semibold">Yes</span>
                  ) : (
                    <span className="text-red-600 font-semibold">No</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 font-bold">Error fetching books.</p>
      </div>
    );
  }
}
