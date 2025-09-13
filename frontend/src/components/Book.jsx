function Book({ title, author, description, coverImage, date }) {
    return (
<div className="flex items-center justify-center flex-col">

  <div className="bg-white shadow-md p-6 w-150 flex justify-center items-center flex-col py-9">
    <p className="mb-2 tracking-[2px] font-[Karla] text-xl font-light">
      {title}: <span>{author}</span>
    </p>
    <p className="mb-2 tracking-[2px] font-[Karla] text-sm font-light">{date}</p>
  </div>
    <img
    src={`/book-covers/${coverImage}`}
    alt="book cover"
    className="w-150"
  />
  <div >
    <p className="w-150 font-sans tracking-[1px] font-light leading-loose text-gray-700 text-[12px] bg-white shadow-md p-6">
        {description}
  </p>
    </div>
</div>
    );
}
export default Book;

