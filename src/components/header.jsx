import Button from '@material-ui/core/Button';
import './header.css'

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2 className="H2">
                <u><b>{props.data ? props.data.title : 'Loading'}</b></u>
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <Button
                  size="large" variant="contained" color="primary"
                >
                  <b>Sign Up</b>
                </Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
