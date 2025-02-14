import { topCountries } from "./constant"
const TopCountries = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-white rounded-md py-10">
        <div
          className="flex flex-col items-center gap-4 py-5 px-7 "
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center ">Top Countries</h1>
          <p className=" text-gray-500 text-center">Study in top countries known for quality medical education and global recognition. </p>
          <div className="flex sm:justify-center gap-7 pt-5 w-full items-center overflow-scroll">
            {topCountries?.map((country) => (
              <div
                className="flex flex-col items-center text-sm flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
                key={country.name}
              >
                <img src={country.img_url} alt="countries" className="w-32 mb-2 rounded-lg" />
                <p >{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TopCountries
