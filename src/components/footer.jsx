import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="blue" href="https://codebugged.com/">
        Codebugged
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
