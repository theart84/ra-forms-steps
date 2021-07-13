import React from 'react';
import WorkoutItem from "./WorkoutItem/WorkoutItem";

const WorkoutList = (props) => {
  const sortWorkouts = props.workouts.sort((prev, next) => (prev.date < next.date ? -1 : 1));
  const workoutItems = sortWorkouts.map(workout => (
    <WorkoutItem
    key={workout.id}
    id={workout.id}
    date={workout.date}
    range={workout.range}
    deleteWorkout={props.deleteWorkout}
    />
  ))
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Мои тренировки</h5>
      </div>
      <div className="container">
        <div className="row justify-content-between font-weight-bold">
          <div className="col-4 text-center">Дата(ДД.ММ.ГГ)</div>
          <div className="col-4 text-center">Пройдено, км</div>
          <div className="col-4 text-center">Действия</div>
        </div>
      </div>
      <div className="card-body">
        <div className="container">
          {workoutItems}
        </div>
      </div>
    </div>
  );
};

export default WorkoutList;
