import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
    </Routes>
   </BrowserRouter> 
  )
}