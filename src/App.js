import logo from './logo.svg';
import './App.css';
import Students from './components/Students';

function App() {
  return (
    <div className="App">
       <Students name= 'Seth' fullName='Seth okeyo' CoursePersued='Machine learning' age='34'/>
      <Students name= 'silva'  fullName='thiago silva' CoursePersued='data science' age='32' />
      <Students name= 'Allison'  fullName='Allison Becker' CoursePersued='full stack development' age=' 26'/>
      <Students name = 'Naymar' fullName='Naymar Junior' CoursePersued='django python' age="30"/> 
    <Students name='Travis' fullName='Travis Scotts' CoursePersued='Laravel' age='28'/>
    <Students name='Alex' fullName='Alexander Brooks' CoursePersued='Ethical Hacking' age='30'/>
    <Students name='James' fullName='Reece James' CoursePersued='react Native' age='25'/>
    <Students name='Thomas' fullName='Thomas Tuchel' CoursePersued='Spring Java' age='40'/>
    <Students name='Zlatan' fullName='Zlatan Ibrahimovich' CoursePersued='Electronics' age='34'/>
    <Students name='Diogo' fullName='diogo Costa' CoursePersued='Robotics' age='45'/>
    
    




     
    </div>
  );
}

export default App;
