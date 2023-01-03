import React from 'react'
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
    <div className={classes.logo}>React meetup</div>
<nav>
<ul>
    <li>
        <Link to='/'>All Meetups</Link>
    </li>

    <li>
        <Link to='/new-meetup'>New Meetups</Link>
    </li>

    <li>
        <Link to='/favourites'>Favorites Meetups</Link>
    </li>

    <li>
        <Link to='/contacts'>Contact Meetups</Link>
    </li>
</ul>


</nav>


    </header>
  
)};

export default MainNavigation