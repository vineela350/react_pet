// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageList from './components/ImageList';
import AboutPage from './components/AboutPage';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext'; // Adjust the import path as needed


const MainContent = styled.main`
  padding: 20px;
`;

const App = () => {
  return (
    <>
    <ThemeProvider>
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<ImageList />} />
          <Route path="/about" element={<AboutPage />} />
          {/* You can add more routes here if you have more pages */}
        </Routes>
      </MainContent>
      </ThemeProvider>
    </>
  );
};

export default App;
