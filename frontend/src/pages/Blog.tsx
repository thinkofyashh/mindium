import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";


export const Blog = () => {
    


    const {id} = useParams();
    const {loading,blogs}=useBlog({id:id || ""});
    
    if(loading || !blogs){
        return <div>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
        </div>
    }
    return <div>

<FullBlog blog={blogs}></FullBlog>
        
    </div>
}