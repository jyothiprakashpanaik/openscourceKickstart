import './App.css';
import { Container, Grid} from '@mui/material';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts } from './data/data';
import PostCard from './components/PostCard';
import ActionGrid from './components/ActionGrid';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header></Header>
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {
            featuredPosts.map((post) => {
              return (<PostCard post={post} key={post.title}></PostCard>)
            })
          }
        </Grid>
        <br />
        
        <ActionGrid/>

      </Container>
    </ThemeProvider>
  );
}

export default App;
