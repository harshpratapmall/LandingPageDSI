export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h1>About Us</h1>
              <p><b>{props.data ? props.data.paragraph : 'loading...'}</b></p>
              <h2>Who could Join:</h2>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul><b>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}</b>
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}