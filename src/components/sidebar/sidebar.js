import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaUser, FaPhone, FaPlusCircle, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/logo1.jpg";
import "./sidebar.css";

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export default function SidebarAdm() {
  return (
    <div className="sidebar-wrapper2">
      <Sidebar className="sidebar-content2">
        {/* Logo */}
        <div className="sidebar-header2">
          <Link to="/">
            <img src={logo} alt="Logo" className="sidebar-logo2" />
          </Link>
        </div>

        {/* Liste des donneurs */}
        <Menu>
          <MenuItem icon={<FaUser />} className="menu-item2">
            <Link to="/Admin" className="menu-link2">Liste des Donneurs</Link>
          </MenuItem>

          {/* Créer un appel */}
          <MenuItem icon={<FaPlusCircle />} className="menu-item2">
            <Link to="/publier" className="menu-link2">Créer un Appel</Link>
          </MenuItem>

          {/* Liste des contacts */}
          <MenuItem icon={<FaPhone />} className="menu-item2">
            <Link to="/Contact" className="menu-link2">Liste des Contacts</Link>
          </MenuItem>

          {/* Bouton de déconnexion */}
          <MenuItem icon={<FaSignOutAlt />} className="menu-item2">
            <button className="logout-button2" onClick={logout}>Se Déconnecter</button>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
