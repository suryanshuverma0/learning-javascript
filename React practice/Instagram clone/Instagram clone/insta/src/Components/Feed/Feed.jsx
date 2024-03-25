import Story from "./Story"
import Post from "./Post"
function Feed() {
  return (
    <div className="flex flex-col gap-12">
      <div>
         <Story/>
      </div>
      <div>
         <Post/>
      </div>
    </div>
  )
}

export default Feed
