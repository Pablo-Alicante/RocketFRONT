export default function Search ({ params, searchParams }) {
  return (
    <>
      <div class="container flex items-center justify-between">
          <div class="w-full max-w-xl relative flex">
          <span class="absolute left-4 top-3 text-lg text-gray-400">
              <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input type="text" name="search" id="search" class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex" placeholder="Buscar"/>
          <button class="bg-primary border border-primary px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
                  Buscar
          </button>
          </div>
      </div>
    </>
  )
}
