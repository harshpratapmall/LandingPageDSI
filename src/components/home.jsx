import Button from '@material-ui/core/Button';

export const Home = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/1.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h1>Making the most of the ever- growing <br/>INFORMATION TECHNOLOGY</h1>
              <p><b>Managed by a team of professional experts with extensive experience and impressive track records</b></p>
              <Button variant="contained" color="secondary" size="large"> READ MORE</Button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}