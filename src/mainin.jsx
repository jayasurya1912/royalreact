import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from "./App"
import Apple from "./about"
function mainin(){

    return(
        <>
        <BrowserRouter basename="/royalreact">
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/apple" element={<Apple />} />
  </Routes>
</BrowserRouter>

        </>
    )
}
export default mainin;