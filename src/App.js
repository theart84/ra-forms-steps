import {useState} from "react";
import './App.css';
import AddNewWorkout from "./components/AddNewWorkout/AddNewWorkout";
import WorkoutList from "./components/WorkoutList/WorkoutList";


const DUMMY_DATA = [
  {id: 'w1', date: 1614538800000, range: 5.7},
  {id: 'w2', date: 1618426800000, range: 10.2},
  {id: 'w3', date: 1624906800000, range: 15.7},
]

function App() {
  const [workouts, setWorkout] = useState(DUMMY_DATA);

  const addNewWorkoutHandler = (newWorkout) => {
    const candidate = workouts.find(workout => workout.date === newWorkout.date);
    if (candidate) {
      const newObj = {
        ...candidate,
        range: +candidate.range + +newWorkout.range
      }
      setWorkout(prevState => {
        const filteredWorkouts = prevState.filter(workout => workout.date !== candidate.date);
        return [...filteredWorkouts, newObj]
      });
    } else {
      setWorkout(prevState => [...prevState, newWorkout]);
    }
  }

  const deleteWorkout = (id) => {
    if (id) {
      setWorkout(prevState => {
        const filteredWorkouts = prevState.filter(workout => workout.id !== id)
        return [...filteredWorkouts];
      })
    }
  }


  return (
    <div className="container pt-5">
      <AddNewWorkout addNewWorkout={addNewWorkoutHandler}/>
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
