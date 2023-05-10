import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import { Header } from './Header';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BreakfastDiningOutlinedIcon from '@mui/icons-material/BreakfastDiningOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export function Menu({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  const contentClass = isMenuOpen ? 'content menu-open' : 'content';

  return (
    <>
      <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
        <Header />
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {isMenuOpen && (
          <nav className="menu-items">
            <ul>
              <li>
                <Link to="/home" style={{ display: 'flex', alignItems: 'center' }}> <HomeIcon color="action" /> Início</Link>
              </li>
              <li>
                <a href="#" style={{ display: 'flex', alignItems: 'center' }}><LocalMallOutlinedIcon color="action" />Estoque</a>
                <ul>
                  <li>
                    <Link to="/alimentos" style={{ display: 'flex', alignItems: 'center' }}><BreakfastDiningOutlinedIcon color="action" fontSize='small' /> Alimentos</Link>
                  </li>
                  <li>
                    <Link to="/cestas" style={{ display: 'flex', alignItems: 'center' }}><ShoppingBasketOutlinedIcon color="action" fontSize='small' />Cestas</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/configuracoes" style={{ display: 'flex', alignItems: 'center' }}><SettingsOutlinedIcon color="action" />Configurações</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className={contentClass}>
          {children}
      </div>
    </>
  );
}

