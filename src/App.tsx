import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { GlobalStyle } from './styles/global'

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(true);

  function handleOpenProfileModal() {
      setIsProfileModalOpen(true);
  }

  function handleCloseProfileModal() {
      setIsProfileModalOpen(false);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home/all" />} />
          <Route path='/home/:mode' element={<Home onOpenProfileModal={handleOpenProfileModal}/>} />
          <Route path="/profile" element={
            <>
              <Home onOpenProfileModal={handleOpenProfileModal}/>
              
              <Profile 
                isOpen={isProfileModalOpen}
                onRequestClose={handleCloseProfileModal}
              />
            </>
          } 
          />
        </Routes>
    </BrowserRouter>
    <GlobalStyle />
    </>
  );
}