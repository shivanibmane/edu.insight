import bg_image from "../assets/bg_img.jpg"
import banner from "../assets/banner.png"
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <>
      <div id="herosection" className="flex items-center min-h-[500px] md:bg-cover rounded-md sm:mx-4 mt-28" style={{ backgroundImage: `url(${bg_image})` }}>
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
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="contact"
                  className="rounded-md bg-white dark:bg-gray-900 hover:bg-gray-800 duration-75 delay-75 ease-in-out scroll-smooth text-white px-3.5 py-2.5 text-sm font-semibold shadow-xs ">
                  Get started
                </Link>
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
