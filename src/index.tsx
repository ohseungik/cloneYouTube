import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/common.scss';
import App from './App.tsx';
import axios from 'axios';
import Youtube from './service/Youtube.tsx';
import { BrowserRouter } from 'react-router-dom';

const httpClient: any = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App youtube={youtube}/>
    </BrowserRouter>
  </React.StrictMode>,
)
