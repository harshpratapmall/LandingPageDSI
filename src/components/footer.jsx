import Typography from '@material-ui/core/Typography';
import './style.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <div className="col-xs-12 col-md-4"><img src='img/DSI.png' className='logo_DSI' alt='' /><br/>
      PT Dwidasa Samsara Indonesia<br/>
      Ruko Jalur Sutera 29A No 5 Alam <br/>
      Sutera Serpong, Tangerang 15323</div>
      <div className="col-xs-12 col-md-4"><b>Contact</b> <br/><br/><br/>
      Phone Number-0000000<br/>
      EMail- abcd@gmail.com <br/>
      Fax- 3839503</div>
      <div className="col-xs-12 col-md-4"><img src='img/a.png' className='image' alt='' /> <img src='img/b.png' className='image' alt='' />
      <img src='img/c.png' className='image' alt='' /> <img src='img/d.png' className='image' alt='' /> <img src='img/e.png' className='image' alt='' /> </div>
    </Typography>
  );
}


export const Contact = (props) => {
  return (
      <div id='footer'>
        <div className='container text-center'>
          <p>
            <Copyright></Copyright>
          </p>
        </div>
      </div>
    )
}
