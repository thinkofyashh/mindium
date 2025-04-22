
interface BlogCardInputs{
    authorName :string;
    title:string;
    content:string;
    publishedDate:string
}

interface AvatarProps {
    authorName: string;
  }


export const BlogCard=({authorName,title,content,publishedDate}:BlogCardInputs)=>{
    return (
        <>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border-2 border-gray-300 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
  <div className="flex items-center gap-x-4 mb-4">
    <Avatar authorName={authorName} />
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-gray-800">{authorName}</span>
      <span className="text-xs text-gray-500">{publishedDate}</span>
    </div>
  </div>
  
  <div className="mb-4">
    <h6 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2">
      {title}
    </h6>
    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
      {content.length > 100 ? content.slice(0, 100) + '...' : content}
    </p>
  </div>
  
  <div className="text-sm text-gray-400 font-medium">
    {`${Math.ceil(content.length / 100)} minutes read`}
  </div>
</div>

        </>
    )
}

export const Avatar = ({ authorName }: AvatarProps) => {
    const firstLetter = authorName.charAt(0).toUpperCase();
  
    return (
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xl">
        {firstLetter}
      </div>
    );
  };

  