
import Content1 from "../components/content1";
import Content2 from "../components/content2";
import Content3 from "../components/content3/content3";
import Content4 from "../components/content4/content4";
import Content5 from "../components/content5";
import Content6 from "../components/content6";
import Content7 from "../components/content7/content7";
import Content8 from "../components/content8/content8";
import Content9 from "../components/content9";
import MainNavigation from "../components/Navigation";
  
function HomePage(){
    return (
    <div>
      <MainNavigation />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
    </div>
  );
}

export default HomePage;