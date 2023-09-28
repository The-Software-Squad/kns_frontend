export default function Categories({ categories }) {
  return (
    <div className="bg-gray-100">
      <h1 className="text-center text-2xl py-10 text-orange-900 font-bold">
        Categories
      </h1>
      <div className="flex items-center justify-center gap-9">
        {categories?.length > 0 &&
          categories.map((category) => (
            <a href={`/category/${category._id}`} key={category._id}>  
              <div
                key={category._id}
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] rounded-full object-cover"
                />
                <p className="text-gray-600 py-3">{category.name}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
