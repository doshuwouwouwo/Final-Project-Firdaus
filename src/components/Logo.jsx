export default function Logo() {
  return (
    <div className="container overflow-hidden py-4 text-white">
      <div className="flex items-center space-x-8">
        <img src="/logoipsum-1.png" alt="" className="h-12" />
        <img src="/logoipsum-2.svg" alt="" className="h-12" />
        <img src="/logoipsum-3.svg" alt="" className="h-12" />
        <img src="/logoipsum-4.svg" alt="" className="h-12" />
        <img src="/logoipsum-5.svg" alt="" className="h-12" />
        {/* repeat logo infinte */}
        <img src="/logoipsum-1.svg" alt="" className="h-12" />
        <img src="/logoipsum-2.svg" alt="" className="h-12" />
        <img src="/logoipsum-3.svg" alt="" className="h-12" />
        <img src="/logoipsum-4.svg" alt="" className="h-12" />
        <img src="/logoipsum-5.svg" alt="" className="h-12" />
      </div>
    </div>
  );
}
