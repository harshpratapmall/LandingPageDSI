import Button from '@material-ui/core/Button';

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
            GENUS
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>

            <li>
              <a href='#subject' className='page-scroll'>
                Subjects
              </a>
            </li>
            <li >
            <a href='#a' className='page-scroll'>
              <Button size="large" variant="contained" color="primary">
                Sign In
                </Button>
            </a>    
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
