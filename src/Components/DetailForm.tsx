import { useState } from "react"
import { topCountries } from "./constant"
const DetailForm = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [description, setDescription] = useState("")


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const student: any = { firstname: firstname, lastname: lastname, email: email, phone: phone, country: country, description: description }
      await localStorage.setItem('student', JSON.stringify(student))
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900 rounded-2xl my-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-white pt-8 ">Contact Us</h1>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="w-full">
                <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
              </div>
              <div className="w-full">
                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Eamil</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="w-full">
                <label htmlFor="phoneno" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
                <input type="number" name="phoneno" id="phoneno" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <select id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={country} onChange={(e) => setCountry(e.target.value)}>
                  {topCountries.map((country) => (<>
                    <option key={country.name} value={country.name} >{country.name}</option></>))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
            </div>
            <button type="button" className=" mt-4 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}


export default DetailForm
