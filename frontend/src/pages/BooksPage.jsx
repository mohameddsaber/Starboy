import Book from "../components/Book";
import books from "../data/books";

function BooksPage() {
  return (
    <div className="flex flex-col justify-center gap-8 p-1 mt-5">
      {Object.entries(books).map(([title, bookData]) => (
        <Book
          key={title}
          coverImage={bookData.coverImage}
          title={title}
          author={bookData.author}
          date={bookData.date}
          description={bookData.description}
        />
      ))}
    </div>
  );
}

export default BooksPage;
