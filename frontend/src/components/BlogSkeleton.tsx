export const BlogSkeleton=()=>{
    return (
        <>
        <div>
            <BlogCardSkeleton></BlogCardSkeleton>
        </div>
        </>
    )
}

export const BlogCardSkeleton = () => {
    return (
      <div className="border rounded-lg shadow-sm p-6 max-w-2xl w-full mx-auto animate-pulse bg-white mb-4">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-300" />
          <div className="ml-4 flex-1">
            <div className="h-4 w-24 bg-gray-300 rounded mb-2" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-4" />
        <div className="h-4 w-full bg-gray-200 rounded mb-2" />
        <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
        <div className="h-3 w-24 bg-gray-200 rounded mt-4" />
      </div>
    );
  };
  