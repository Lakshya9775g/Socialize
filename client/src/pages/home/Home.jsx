<<<<<<< HEAD
import Posts from '../../components/posts/Posts';
import { Stories } from '../../components/stories/Stories';
import './home.scss';

const Home = ()=>{
    return (
        <div className="home">
            <Stories/>
            <Posts/>
        </div>
    );
};

export default Home;
=======
import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home
>>>>>>> ef40cc4537ab40fa5ed62a2216fb3f2c2746ebfb
