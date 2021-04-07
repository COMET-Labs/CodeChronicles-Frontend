import  styles from './navbar.module.scss'
import  {Navbar,Nav} from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" >
      <span className="{styles.festname}">CodeGala</span>
            <div className={`row order-lg-last order-sm-first ${styles.profile}`}>
              <div className={`col ${styles.first}`}>
                <div className={`row ${styles.name}`}>
                  <span className={styles.fname}>Organise Codefest</span>
                  <span className={styles.lname}>Sign In</span>
                </div>
                </div>
                </div>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-center" style={{flex:1}}>
              <div className="row">
               <Nav.Link href="#" className={styles.links}>Codefests</Nav.Link>
               <Nav.Link href="#" className={styles.links}>About</Nav.Link>
               <Nav.Link href="#" className={styles.links}>Lorem</Nav.Link>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
  );
}

export default NavBar;
