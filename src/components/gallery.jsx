export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Subjects</h2>
          <p>
            for class 11th and class 12th students
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-6 col-lg-6' mt="5">
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/02-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h2>Accountancy <br/> <br/>By- Mr. Gopesh Panjabi</h2>
                    </div>
                    <img
                      src='img/portfolio/02-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>

            <div className='col-sm-6 col-md-6 col-lg-6'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/01-large.jpg'
                    title='Project Title'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h2>Economics <br/><br/> By- Mr. Abhinav Upadhyay</h2>
                    </div>
                    <img
                      src='img/portfolio/01-small.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                  </a>{' '}
               
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
