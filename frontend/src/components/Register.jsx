import { useState } from "react"


export const Register = () => {
  const [data, setdata] = useState({
    name: '',
    email: '',
    phone: '',
    msg: ''
  })

  const handleChange = (name, value) => {
    setdata(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://uni-cour.vercel.app/getData', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response = await res.json();
    console.log(response)
    if (res.ok) {
      setdata({
        name: '',
        email: '',
        phone: '',
        msg: ''
      })
    }
  }
  return (
    <section id="register" className="min-h-[80vh] md:min-h-[90vh] flex items-center bg-slate-600 pl-5">
      <form onSubmit={handleSubmit} className="bg-[#201a3ccc] py-3 px-5 w-[80vw] justify-center md:w-auto md:px-15 md:py-10 border-2 border-white">
        <h1 className="text-2xl md:text-4xl text-orange-400 font-bold italic ">Fell Free To Contact</h1>
        <label htmlFor="name" className=" md:text-2xl block text-white">Name: </label>
        <input onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="name"
          required
          value={data.name}
          className="bg-gray-200 border-none py-3 rounded-full px-7 md:px-20 "
          type="text"
          placeholder="Enter Your Name" />

        <label htmlFor="email" className="md:text-3xl block text-white">Email: </label>
        <input onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="email"
          required
          value={data.email}
          className="bg-gray-200 border-none py-3 rounded-full px-7 md:px-20 "
          type="text"
          placeholder="Enter Your Email" />

        <label htmlFor="phone" className="md:text-3xl block text-white">Phone: </label>
        <input onChange={(e) => handleChange(e.target.name, e.target.value)}
          name="phone"
          required
          value={data.phone}
          className="bg-gray-200 border-none py-3 rounded-full px-7 md:px-20 "
          type="text"
          placeholder="Enter Your Number" />

        <label htmlFor="message" className="md:text-3xl block text-white">Message: </label>
        <textarea required value={data.msg} name="msg" onChange={(e) => handleChange(e.target.name, e.target.value)} className=" bg-white w-50 md:w-100 h-20 md:h-30 " placeholder="Enter The Message" ></textarea>

        <button className="cursor-pointer my-5 block border border-white rounded-full bg-blue-400 px-7 py-2 md:text-2xl md:px-10">Submit</button>
      </form>
    </section>
  )
}
