
const Admission = () => {
  return (
    <div className="p-3 sm:p-20" id="admission">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center my-10 " >Addmission Process and Eligibility</h1>
      <div className="flex flex-col lg:flex-row">
        <div>
          <h3 className="text-lg font-semibold py-4">Process</h3>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Choose the Right University</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Research and select a university based on budget, country, and ranking.</p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">Check if the university is recognized by WHO & NMC (MCI).</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Check Eligibility Criteria</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Ensure you meet the academic requirements (mentioned below).
              </p>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Verify the university's age and NEET score criteria.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> Submit Your Application</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Fill out the online application form.
              </p>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Attach required documents (Passport, 10th & 12th marksheets, NEET scorecard, passport-size photos).
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full  -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Receive Admission Letter</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Once your application is reviewed, the university will send you an admission confirmation letter.</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Apply for a Student Visar</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Submit required documents and get a visa appointment.</p>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Receive your visa after approval.</p>
            </li>
            <li className="mb-10 ms-4 last:border-s-0">
              <div className="absolute  w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fly to Your Dream Destination!</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Book flight tickets & arrange accommodation.
                .</p>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Attend orientation and begin your MBBS journey abroad!</p>
            </li>
          </ol></div>
        <div>
          <h3 className="text-lg font-semibold py-4">Eligibility</h3>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"> Academic Qualification: </h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">50% marks in PCB (Physics, Chemistry, Biology) in 12th grade (40% for reserved categories).</p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">NEET Qualification:</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Mandatory for Indian students planning to practice in India after MBBS.
              </p>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Age Limit:</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400">Minimum 17 years old by December 31st of the admission year.
              </p>
            </li>
            <li className="mb-10 ms-4 last:border-s-0">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:bg-gray-700"></div>
              <h2 className="mb-3 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Valid Passport:</h2>
              <p className=" text-base font-normal text-gray-500 dark:text-gray-400"> A valid passport with at least 6 months validity from the date of travel.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
export default Admission