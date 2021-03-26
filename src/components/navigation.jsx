import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          <img src='img/DSI.png' className='img-responsive' alt='' />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href='#Services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#Products' className='page-scroll'>
                Product
              </a>
            </li>

            <li>
              <a href='#Technology' className='page-scroll'>
                Technology
              </a>
            </li>

            <li>
              <a href='#About' className='page-scroll'>
                About
              </a>
            </li>

            <li>
              <a href='#Partner' className='page-scroll'>
                Partner
              </a>
            </li>

            <li>
              <a href='#Home' className='page-scroll'>
                <HomeOutlinedIcon fontSize="large"/>
              </a>
            </li>

            <li>
              <a href='#Mail' className='page-scroll'>
                <MailOutlineIcon fontSize="large"/>
              </a>
            </li>

            <li>
              <a href='#Shuffle' className='page-scroll'>
                <ShuffleIcon fontSize="large"/>
              </a>
            </li>
            <li >
                
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
