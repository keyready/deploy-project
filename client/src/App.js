import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { CreatePostPage } from './pages/CreatePostPage/CreatePostPage';

export function App() {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/create" element={<CreatePostPage />} />
            </Routes>
        </div>
    );
}
