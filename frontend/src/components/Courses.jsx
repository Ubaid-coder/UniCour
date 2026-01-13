import course1 from '../assets/ai.jpg'
import course2 from '../assets/cyber.jpg'
import course3 from '../assets/web.jpg'
import { FaClock } from "react-icons/fa6";

export const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Web Development",
            img: course1, price: 4000,
            duration: 20,
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, repudiandae.'
        },
        {
            id: 2,
            title: "Cyber Security",
            img: course2,
            price: 5500,
            duration: 40,
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, repudiandae.'
        },
        {
            id: 3,
            title: "Data Science",
            img: course3,
            price: 6000,
            duration: 70,
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, repudiandae.'
        },
    ]
    return (
        <section id="courses" className='min-h-[80vh] md:min-h-[90vh] bg-slate-300 pb-20'>

            <div className='flex justify-center pb-5'>
                <h2 className='text-3xl underline text-blue-400 cursor-pointer font-bold'>
                    Available Courses
                </h2>
            </div>
            <div className='flex flex-col md:flex-row md:justify-center md:flex-wrap items-center gap-5'>
                {courses.map(course => (
                    <div
                        key={course.id}
                        className=' border-white  px-2 w-[90vw] md:w-[40vw] border-2 rounded-2xl  bg-gray-950 flex flex-col gap-5 pb-5'
                    >
                        <img
                            src={course.img}
                            className='mb-10 border border-b-white'
                            alt=""
                        />

                        <h1 className=' text-2xl  text-white'>
                            <strong className='text-gray-500'>Title:</strong> {course.title}:
                        </h1>

                        <p className=' text-white'><strong className='text-gray-500'>Description: </strong>{course.desc}</p>

                        <span className=' block text-gray-500 font-bold'>Duration: <strong className='text-yellow-400'>{course.duration}</strong>HRS<FaClock className='inline' /></span>
                        <span className=' block text-gray-500 font-bold'>Price: <strong className='text-green-400'>{course.price}</strong>RS</span>
                        <a href="#register">
                            <button className='border border-orange-400 cursor-pointer bg-orange-200 px-7 md:px-15 rounded-full py-2 md:py-3'>Enroll</button>
                        </a>

                    </div>
                ))}
            </div>
        </section>
    )
}
