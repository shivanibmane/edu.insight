import bg_image from "../assets/bg_img.jpg"
import banner from "../assets/banner.png"

const Hero = () => {
  return (
    <>
      <div className="flex items-center min-h-[500px]   bg-transparent md:bg-cover bg-opacity-50 rounded-md sm:mx-4" style={{ backgroundImage: `url(${bg_image})` }}>
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto  w-full max-w-2xl py-10">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
                A World of Medicine Awaits – Step Beyond Limits & Start Your Future Today
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
                Unlock global opportunities with world-class MBBS education abroad. Gain top-quality medical training, hands-on experience, and a globally recognized degree. Start your journey today! 🩺✨
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href=""
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={banner} alt="Banner-Img" className="hidden sm:max-w-[300px]  md:max-w-[500px] md:block" />
        </div>
      </div>

    </>
  )
}

export default Hero
