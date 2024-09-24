
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import List from './Pages/List';
import Main from './Pages/Main';
import Skill from './Pages/Skill';


function App() {

  let skills = [
    {
      name : "React",
      image : "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png"
      
    },
    {
      name : "Tailwind",
      image : "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
    },
    {
      name : "Bootstrap",
      image : "https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png"
    }
  ];

  let cards = [
    {
      title : 'Front-End Development',
      description : 'As a dedicated web developer with a strong foundation in both frontend and backend development, I specialize in creating responsive, user-friendly websites and web applications. I have hands-on experience with technologies like HTML5, CSS3, JavaScript, and modern frameworks such as React and Angular for front-end development. On the back end, I am proficient in server-side technologies such as Node.js, PHP, and databases like MySQL and MongoDB.',
      image : 'https://nasa-develop.github.io/SET/_images/develop_logo.png'
    },
    
    {
      title : 'Web Designer',
      description : 'As a dedicated web developer with a strong foundation in both frontend and backend development, I specialize in creating responsive, user-friendly websites and web applications. I have hands-on experience with technologies like HTML5, CSS3, JavaScript, and modern frameworks such as React and Angular for front-end development. On the back end, I am proficient in server-side technologies such as Node.js, PHP, and databases like MySQL and MongoDB.',
      image : 'https://www.pngmart.com/files/Android-App-Development-PNG-HD-Isolated.png'
    },

    {
      title : 'UI/UX Designer',
      description : 'his is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image : 'https://asamblo.com/img/verticals/ux-ui-bg.png'
    }
  ]



  return (
   <>
   <div className=" bg-slate-900 ">
     <Navbar/>
     <div className="container mx-auto px-12 md:px-12 lg:px-12">
        <Home />
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <Main/>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <List cardData = {cards} />
        
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <Skill skillData = {skills}/>
        <Footer/>
     </div>
     
   </div>
   </>
  );
}

export default App;
