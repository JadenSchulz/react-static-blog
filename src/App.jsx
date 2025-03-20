import './App.css'
import {useState, useEffect} from "react"
import ReactMarkdown from 'react-markdown'
function App() {

  const [latestPost, setLatestPost] = useState("")
  const [postId, setPostId] = useState(1);

  useEffect(() => {
    async function getPost() {
      const file = await fetch(`/public/post-${postId}.md`);
      const markdown = await file.text();

      setLatestPost(markdown);
    }

    getPost()
    
    // tell react to re-run getPost() if the post Id changes
  }, [postId])

  return (
    <div>
      
      <ReactMarkdown children={latestPost} /> 

      <button onClick={() => {
        setPostId(p => p + 1);
      }}>next post</button>

    </div>
  )
}

export default App
