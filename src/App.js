import {useState} from "react";
import './App.css';
import AddNewWorkout from "./components/AddNewWorkout/AddNewWorkout";
import WorkoutList from "./components/WorkoutList/WorkoutList";


const DUMMY_DATA = [
  {id: 'w1', date: 1614538800000, distance: 5.7},
  {id: 'w2', date: 1618426800000, distance: 10.2},
  {id: 'w3', date: 1624906800000, distance: 15.7},
]

function App() {
  const [workouts, setWorkout] = useState(DUMMY_DATA);
  const [editData, setEditData] = useState({date: '', distance: ''});

  const addNewWorkoutHandler = (newWorkout) => {

    const candidate = workouts.find(workout => workout.id === newWorkout.id);
    if (candidate) {
      const newObj = {
        ...candidate,
        distance: +candidate.distance + +newWorkout.distance
      }
      setWorkout(prevState => {
        const filteredWorkouts = prevState.filter(workout => workout.date !== candidate.date);
        return [...filteredWorkouts, newObj]
      });
    } else {
      setWorkout(prevState => [...prevState, newWorkout]);
    }
  }

  const deleteWorkoutHandler = (id) => {
    if (id) {
      setWorkout(prevState => {
        const filteredWorkouts = prevState.filter(workout => workout.id !== id)
        return [...filteredWorkouts];
      })
    }
  }

  const editWorkoutHandler = (id) => {
    const findWorkout = workouts.find(workout => workout.id === id);
    setEditData({
      id: findWorkout.id,
      date: new Date(findWorkout.date).toISOString().slice(0,10).split('-').reverse().join('.'),
      distance: findWorkout.distance
    })
  }


  return (
    <div className="container pt-5">
      <AddNewWorkout
        addNewWorkout={addNewWorkoutHandler}
        data={editData}
      />
      <WorkoutList
        workouts={workouts}
        deleteWorkout={deleteWorkoutHandler}
        editWorkout={editWorkoutHandler}
      />
    </div>
  );
}

export default App;
