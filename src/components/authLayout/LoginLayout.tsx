import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import kakaoLoginImage from '../../assets/kakao_login.png';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/dahhongdu/who-am-i">
        WhoAmI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const KakaoButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 12px;
  padding: 0;
  min-width: 200px;
  height: 50px;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.05); 
    background: transparent;
  }

  img {
    width: 100%; 
    height: 100%; 
    object-fit: fill;
    transition: transform 0.3s ease; 
  }
`;

// TODO defaultTheme 정리하고 초기화 하는 코드 없애기 
const defaultTheme = createTheme();

export default function LoginLayout({ handleLoginBtn }: LoginLayoutType) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', overflow: 'hidden' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("/static/images/templates/templates-images/sign-in-side-bg.png")',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            height: '100vh',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography component="h1" variant="h5">
              환영합니다!
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{
                mt: 3,
                mb: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <KakaoButton
                type="submit"
                variant="contained"
                onClick={handleLoginBtn}
              >
                <img src={kakaoLoginImage} alt="Kakao Login" />
              </KakaoButton>
              <Copyright sx={{ mt: 3 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
