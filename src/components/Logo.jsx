export default function Logo() {
  return (
    <div className=" container py-8 text-white">
      <div className=" flex items-center gap-4 w-full">
        {/* text */}
        <div className="">
          <h1 data-aos="fade-right" data-aos-duration="100" className="text-l text-center">Trusted by The Worlds Leading Brand</h1> 
        </div>
        <div className="flex space-x-4">
          {/* img */}
          <img data-aos="fade-left" data-aos-duration="200" src="/logoipsum-1.svg" alt="" className="h-10" />
          <img data-aos="fade-left" data-aos-duration="300" src="/logoipsum-2.svg" alt="" className="h-10" />
          <img data-aos="fade-left" data-aos-duration="400" src="/logoipsum-3.svg" alt="" className="h-10" />
          <img data-aos="fade-left" data-aos-duration="500" src="/logoipsum-4.svg" alt="" className="h-10" />
          <img data-aos="fade-left" data-aos-duration="600" src="/logoipsum-5.svg" alt="" className="h-10" />
        </div>
        {/* repeat logo infinte
        <img src="/logoipsum-1.svg" alt="" className="h-12" />
        <img src="/logoipsum-2.svg" alt="" className="h-12" />
        <img src="/logoipsum-3.svg" alt="" className="h-12" />
        <img src="/logoipsum-4.svg" alt="" className="h-12" />
        <img src="/logoipsum-5.svg" alt="" className="h-12" /> */}
      </div>
    </div>
  );
}
