import React, {useRef} from 'react';

const WorkoutItem = (props) => {
  const ref = useRef();
  const convertDate = new Date(props.date).toLocaleString().slice(0, 10);

  const onClickHandler = () => {
    props.deleteWorkout(ref.current.dataset.id)
  }

  return (
    <div
      ref={ref}
      className="row justify-content-between align-items-center pb-2 mb-2"
      style={{borderBottom: "1px solid #dee2e6"}}
      data-id={props.id}
    >
      <div className="col text-center">{convertDate}</div>
      <div className="col text-center">{props.range}</div>
      <div className="col text-center">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary">Редактировать</button>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={onClickHandler}>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WorkoutItem;
