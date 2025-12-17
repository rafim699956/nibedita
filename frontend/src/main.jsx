import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import About from "./pages/About.jsx";
import Career from "./pages/Career.jsx";
import  PageNotFound from "./pages/pageNotFound.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/career" element={<Career />} />
          <Route path="/*" element={<PageNotFound />} />
          {/* <Route path="/news&events" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
