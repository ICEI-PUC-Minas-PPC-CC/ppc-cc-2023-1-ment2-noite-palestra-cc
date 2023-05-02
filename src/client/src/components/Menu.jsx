import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Menu.css';
import { Header } from './Header';
import { MdHome } from 'react-icons/md';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
                <Link to="/">
                    {/*<MdHome className="menu-icon" />*/}
                    Início
                    </Link>
            </li>
            <li>
                <a href="#">Estoque</a>
                <ul>
                <li>
                    <Link to="/alimentos">Alimentos</Link>
                </li>
                <li>
                    <Link to="/cestas">Cestas</Link>
                </li>
                </ul>
            </li>
            <li>
                <Link to="/configuracoes">Configurações</Link>
            </li>
            </ul>
        </nav>
      )}
    </div>
  );
}

