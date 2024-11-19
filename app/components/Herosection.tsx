import Image from "next/image"
export default function Herosection(){
    return(
        <div className="flex md:flex-row flex-col h-5/6">
            <div className="md:w-4/5 w-full mb-20">
            <div className="font-bold text-2xl md:text-3xl text-blue-800 p-6">
            Governer Sindh
            
            <div className="text-2xl md:text-3xl text-blue-800">Kamran Khan Tessori</div>
             
            <div className=" text-blue-400 text-2xl font-bold md:text-3xl">Certified Cloud</div>
            <div className=" text-blue-400 text-2xl font-bold md:text-3xl">Applied Generative AI</div>
            <div className=" text-blue-400 text-2xl font-bold md:text-3xl">Engineer (GenEng)</div>
            <div className="text-blue-800 font-bold py-6">Earn up to $5,000/month</div>
            <div className="text-blue-800 font-bold">Now Admission are open in</div>
            <div className="text-blue-800 font-bold">Hyderabad</div>
            <div className="py-10 pr-7">
                <button className="bg-blue-600 text-white  hover:text-blue-800 py-4 px-6 rounded-md">Apply Now</button>
            </div>
            </div>
            </div>
            <div className="md:w-4/5 w-full mb-20">
            <Image src ="/governer.png" alt ="governer pic" height={900} width={700}/>
            </div>
            </div>
            
        
    )
}