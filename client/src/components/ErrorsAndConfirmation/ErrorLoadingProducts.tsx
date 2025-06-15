import ErrorIcon from "@mui/icons-material/Error";

interface ErrorLoadingProductsProps {
  error: string;
}

export default function ErrorLoadingProducts({
  error,
}: ErrorLoadingProductsProps) {
  return (
    <div className="flex-grow">
      <div className="flex justify-center items-center py-6">
        <div className="bg-red-50 mx-auto p-6 border border-red-200 rounded-lg max-w-md text-center">
          <div className="flex justify-center items-center bg-red-100 mx-auto mb-4 rounded-full w-20 h-20">
            <ErrorIcon style={{ color: "red", width: 50, height: 50 }} />
          </div>
          <h3 className="mb-2 font-medium text-red-800 text-lg">
            Unable to load menu
          </h3>
          <p className="text-red-600 text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 mt-4 px-4 py-2 rounded-md text-white transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
