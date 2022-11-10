import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./pages/Main";
import AppContext from "./context/Appcontext";
import { DarkTheme, lightTheme } from "./style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/GlobalStyle";
import axios from "axios";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  const [selectedPost, setSelectedPost] = useState("");
  const [postData, setPostData] = useState([]);
  const [openPost, setOpenPost] = useState([]);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    async function fetch() {
      const { data: responesPostData } = await axios.get(
        "http://localhost:4001/post/all"
      );
      setPostData(responesPostData);
      console.log(responesPostData);
    }
    fetch();
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedPost,
        setSelectedPost,

        postData,
        setOpenPost,

        openPost,

        theme,
        setTheme,
      }}
    >
      <ThemeProvider theme={theme === "dark" ? DarkTheme : lightTheme}>
        <GlobalStyle /> <RouterProvider router={router} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
