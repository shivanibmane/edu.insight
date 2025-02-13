
const Benefits = () => {

  const benefits = [{ title: "Affordable Tuition Fees", desc: "Get a quality medical education at a lower cost compared to private universities in India." },
  { title: " Globally Recognized Degrees ", desc: " MBBS degrees from top universities abroad are recognized by WHO, NMC (MCI), and other global medical bodies." },
  { title: "No Entrance Exam Required", desc: "Most universities don’t require NEET for admission, except for eligibility to practice in India." },
  { title: "World-Class Infrastructure", desc: "Study in modern medical universities equipped with advanced labs and facilities." },
  { title: "English-Medium Curriculum ", desc: "No language barrier, as most universities offer MBBS courses in English." },
  { title: "International Exposure", desc: "Gain global medical experience by interacting with students from different countries." },
  { title: "Better Career Opportunities ", desc: "High chances of securing jobs or post-graduate medical courses in countries like the Russia, Uzbekistan etc." }, {
    title: "Scholarship Opportunities",
    desc: "Financial support for deserving and meritorious students."
  }]




  return (

    <div className="bg-white my-10 ">
      <div className="px-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mt-20">Key Benefits</h2>
        <p className="hidden mt-6 px-10 text-gray-500 text-center md:block">
          Pursuing MBBS abroad opens doors to quality education, global exposure, and a successful medical career. From affordable tuition to world-class infrastructure, discover the top reasons why thousands of students choose to study medicine overseas.
        </p>
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 sm:gap-y-7 lg:gap-x-8 ">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border border-gray-200 p-7 rounded-lg shadow-lg hover:scale-105 transition duration-700 ease-in-out ">
              <dt className="font-medium text-gray-900">{benefit.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">{benefit.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Benefits
