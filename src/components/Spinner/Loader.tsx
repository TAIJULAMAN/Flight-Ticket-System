export default function Loader() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
