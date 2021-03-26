import './style.css'

export const About = (props) => {
  return (
    <div id='about' className='About'>
      <div className='container' >
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/2.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h1> Welcome to<b> Dwidasa Samsara Indonasia (DSI)</b></h1>
              
                <div className='col-lg-9 col-sm-6 col-xs-12'>
                Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders,
                who each of them has a common end objective to innovate new creations by making 
                the most of the ever-growing information technology through DSI's distinct front-end
                based application concept. <br/><br/>
                Managed by a team of professional experts with extensive experience and impressive track records, 
                DSI believes that continuous improvements and innovations assure your business to run effectively and efficiently. 
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}