import { RouterProvider } from "react-router-dom"
import { router } from "./route/router"
import FloatingChatbot from "./pages/floatingchatbot"

const App = () => {
  return (
    <><RouterProvider router={router} />
    <FloatingChatbot /></>
  )
}

export default App