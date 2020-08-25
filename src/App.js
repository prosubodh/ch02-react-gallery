import React from 'react';
import './App.css';
import Gallery from './components/Gallery'
import ImagePopup from './components/ImagePopup'
import { ImageProvider } from './contexts/ImageContext';

function App() {
    return (
        <ImageProvider>
            <div className="App">
                <Gallery />
                <ImagePopup />
            </div>
        </ImageProvider>
    );
}

export default App;
