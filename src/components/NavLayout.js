import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { withAuth0 } from "@auth0/auth0-react";


class NavLayout extends React.Component {

  render(){
    return(
      <section className='root-layout'>
        <header>
          <nav>
            <h1>tekDash</h1>
            {this.props.auth0.isAuthenticated ? (
                <>
                <NavLink to="logout">Logout</NavLink>
                <NavLink to="dashboard">Dash Board</NavLink>
                <NavLink to="profile">Profile</NavLink>
                </>
              ) : (
                <NavLink to="login">Login</NavLink>
              )}
              <NavLink to="/">Home</NavLink>
              {/* 
              <NavLink to="about">About Us</NavLink> */}
            
          </nav>
        </header>



        <main>
          <Outlet />
        </main>
      </section>
    );
  }
}

export default withAuth0(NavLayout);