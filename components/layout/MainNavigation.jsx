import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { SITE_NAME } from '../../utils/config';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>{SITE_NAME}</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
