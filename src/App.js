import "./App.css";
import Students from "./components/Students";

function App() {
  let details = [
    {
      name: "Seth",
      fullName: "Seth Okey",
      CoursePersued: "Machine learning",
      age: "24",
    },
    {
      name: "silva",
      fullName: "thiago silva",
      CoursePersued: "data science",
      age: "32",
    },
    {
      name: "Allison",
      fullName: "Allison Becker",
      CoursePersued: "full stack development",
      age: "26",
    },
    {
      name: "Naymar",
      fullName: "Naymar Junior",
      CoursePersued: "django python",
      age: "30",
    },
    {
      name: "Travis",
      fullName: "Travis Scotts",
      CoursePersued: "Laravel",
      age: "28",
    },
    {
      name: "Alex",
      fullName: "Alexander Brooks",
      CoursePersued: "Ethical Hacking",
      age: "30",
    },
  ];
  return (
    <div className="App">
      {details.map((data) => {
        return (
          <Students
            name={data.name}
            fullName={data.fullName}
            CoursePersued={data.CoursePersued}
            age={data.age}
          />
        );
      })}
    </div>
  );
}

export default App;
