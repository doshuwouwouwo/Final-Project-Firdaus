export default function Logo() {
  return (
    <div className="container py-8 text-white">
      <div className=" flex items-center gap-4">
        {/* text */}
        <div className="">
          <h1 className="text-l pr-12">Trusted by The Worlds Leading Brand</h1> 
        </div>
        <div className="flex space-x-4">
          {/* img */}
          <img src="/logoipsum-1.svg" alt="" className="h-12" />
          <img src="/logoipsum-2.svg" alt="" className="h-12" />
          <img src="/logoipsum-3.svg" alt="" className="h-12" />
          <img src="/logoipsum-4.svg" alt="" className="h-12" />
          <img src="/logoipsum-5.svg" alt="" className="h-12" />
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
