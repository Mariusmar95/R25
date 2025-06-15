export default function LoadingProducts() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-center items-center bg-gray-100 h-48">
        <div className="border-b-2 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
      </div>
      <div className="space-y-3 p-4">
        <div className="bg-gray-200 rounded w-3/4 h-4 animate-pulse"></div>
        <div className="space-y-2">
          <div className="bg-gray-100 rounded h-3 animate-pulse"></div>
          <div className="bg-gray-100 rounded w-5/6 h-3 animate-pulse"></div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="bg-gray-200 rounded w-20 h-6 animate-pulse"></div>
          <div className="bg-gray-100 rounded w-16 h-8 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
