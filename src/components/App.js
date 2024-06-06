import { FaAirbnb } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
const App = () => {

  return (
    <div className="h-screen  flex flex-col relative overflow-hidden">

       <nav className="bg-white shadow-xl pl-5 h-24 flex items-center text-red-600 font-semibold text-lg">
         <FaAirbnb size={30} color="red" />
         <h1>airbnb</h1>
       </nav>
      
       <div className="flex items-stretch justify-center gap-x-3 mt-5 xl:h-[1150px] lg:h-[950px] md:h-[870px] sm:h-[700px] h-[350px]">
          <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[180px] md:w-[140px] sm:h-[170px] sm:w-[120px] w-[90px] h-[140px] flex self-center " src={"image 28.png"} alt="" />
          <div className="flex flex-col gap-y-2 self-start">
            <img className="xl:w-40 xl:h-40 lg:w-36 lg:h-36 md:w-32 md:h-32 sm:w-28 sm:h-28 w-24 h-28 " src={"image 30.png"} alt="" />
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 26.png"} alt="" />
          </div>
          <div className="flex flex-col self-end gap-y-2">
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 27.png"} alt="" />
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 29.png"} alt="" />
          </div>
          <div className="flex flex-col gap-y-2">
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 22.png"} alt="" />
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 23.png"} alt="" />
          </div>
          <div className="flex flex-col self-center gap-y-2">
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 24.png"} alt="" />
            <img className="xl:w-[170px] xl:h-[225px] lg:h-[200px] lg:w-[160px] md:h-[190px] md:w-[130px] sm:h-[170px] sm:w-[120px] w-[100px] h-[140px]" src={"image 25.png"} alt="" />
          </div>
       </div>

       
       <div className="flex flex-col xl:pl-[300px] xl:pt-0 lg:pl-[150px] lg:pt-14 md:pl-[80px] md:pt-10 sm:pl-[50px] sm:pt-16 pt-28 pl-[20px]">
          <h2 className="text-4xl font-bold">Online Experiences</h2>
          <p>join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
       </div>

       <div className="flex items-end justify-evenly xl:h-[800px] lg:h-[750px] md:h-[650px] sm:h-[600px] h-[280px]">

      <div className="flex flex-col relative ml-7">
         <img className="xl:w-60 xl:h-64 lg:w-52 lg:h-56 md:w-48 md:h-52 sm:w-40 sm:h-44 w-32 h-36 rounded-xl " src={"image 12.png"} alt="" /> 
        <button className="bg-white xl:w-[90px] lg:w-[85px] md:w-[85px] sm:w-[85px] w-[85px] absolute left-2 top-2">SOLD OUT</button>
      <div className="flex flex-col">
      <div className="flex">
         <IoStarSharp className="mt-1 mr-1" size={15} color="red" />
         <p>5.0 <span className="opacity-50">(6) USA</span></p>
       </div>
         <p>Life lessons with Katie Zaferes</p>
         <div className="flex">
          <><span className=" font-bold">From</span><BsCurrencyDollar size={17} className="mt-1" /><span className="pr-1 font-bold">136</span>/ person</>
         </div>
       </div>
       </div>

       <div className="flex flex-col relative mr-3">
       <img className="xl:w-60 xl:h-64 lg:w-52 lg:h-56 md:w-48 md:h-52 sm:w-40 sm:h-44 w-32 h-36 rounded-xl " src={"wedding-photography 1.png"} alt="" />
       <button className="bg-white xl:w-[90px] lg:w-[85px] md:w-[80px] sm:w-[80px] w-[70px] absolute left-2 top-2">ONLINE</button>
       <div className="flex flex-col">
        <div className="flex">
         <IoStarSharp className="mt-1 mr-1" size={15} color="red" />
         <p>5.0 <span className="opacity-50">(30) USA</span></p>
        </div>
        
         <p>Learn wedding photography</p>
         <div className="flex">
          <><span className=" font-bold">From</span><BsCurrencyDollar size={17} className="mt-1" /><span className="pr-1 font-bold">125</span>/ person</>
         </div>

       </div>
       </div>

       <div className="flex flex-col relative mr-10">
         <img className="xl:w-60 xl:h-64 lg:w-52 lg:h-56 md:w-48 md:h-52 sm:w-40 sm:h-44 w-32 h-36 rounded-xl " src={"mountain-bike 1.png"} alt="" /> 
        <div className="flex flex-col">
        <div className="flex">
         <IoStarSharp className="mt-1 mr-1" size={15} color="red" />
         <p >4.8 <span className="opacity-50">(2) USA</span></p>
        </div>
         <p>Group Mountain Biking</p>
         <div className="flex">
          <span className=" font-bold">From</span><BsCurrencyDollar size={17} className="mt-1" /> <span className="pr-1 font-bold">50</span><>/ person</>
         </div>
       </div>

       </div>
         
       </div>
      


    </div>
  )
}
export default App