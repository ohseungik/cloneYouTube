import { useEffect, useState } from "react";
import ServiceHandler from "./service/Handler";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Header from "./components/header/Header.tsx";
import Search from "./pages/Search.tsx";
import Watch from "./pages/Watch.tsx";

const htmlTitle: any = document.querySelector("title");
htmlTitle.textContent = sessionStorage.getItem('htmlTitle') || 'Youtube';
const defaultVideos: any = sessionStorage.getItem('defaultVideos') || null;

function App( { youtube } : any) {
  const [handler, setHandler] = useState<any>();
  const [videos, setVideos] = useState(() => {
    return JSON.parse(sessionStorage.getItem('videos') || '[]');  
  });
  const [selectedVideo, setSelectedVideo] = useState(JSON.parse(sessionStorage.getItem('selectedVideo') || ''));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const service = new ServiceHandler(youtube, htmlTitle, defaultVideos, setVideos, setSelectedVideo, navigate, setLoading);
    setHandler(service);
  }, []);

  useEffect(() => {
    const title = htmlTitle?.textContent || "";
    sessionStorage.setItem('htmlTitle', title);
    sessionStorage.setItem('videos', JSON.stringify(videos));
    sessionStorage.setItem('selectedVideo', JSON.stringify(selectedVideo));
  }, [videos, selectedVideo])

  useEffect(() => {
    if (handler) {
      handler.mostPopular();
    } else {
      setLoading(false);
    }
  }, [handler]);

  return (
    <div className="app">
      {handler ? (
        <>
          <Header
            onSearch={handler.handleSearch}
            onLogoClick={handler.clickLogo}
          />
          <Routes>
            <>
              <Route
                path="/"
                element={
                  <Home 
                    onLogoClick={handler.clickLogo} 
                    youtube={youtube}
                    videos={videos}
                    selectVideo={handler.selectVideo}
                    loading={loading}
                  />
                }
              >
              </Route>
              <Route
                path="/results"
                element={
                  <Search
                    clickLogo={handler.clickLogo}
                    youtube={youtube}
                    videos={videos}
                    selectVideo={handler.selectVideo}
                    loading={loading}
                  />
                }
              >
              </Route>
              <Route 
                path="/watch"
                element={
                  <Watch
                  youtube={youtube}
                  videos={videos}
                  selectVideo={handler.selectVideo}
                  selectedVideo={selectedVideo}
                  loading={loading}
                />
                }>
              </Route>
            </>
          </Routes>
        </>
      ) : null}
    </div>
  );
}

export default App
