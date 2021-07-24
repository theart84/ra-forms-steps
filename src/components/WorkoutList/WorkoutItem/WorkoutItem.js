import React, { useRef } from "react";
import PropTypes from "prop-types";

const WorkoutItem = ({ date, deleteWorkout, distance, editWorkout, id }) => {
  const ref = useRef();
  const convertDate = new Date(date).toISOString().slice(0,10).split('-').reverse().join('.');

  const onClickHandler = (event) => {
    const { name } = event.target;
    const { id } = ref.current.dataset;
    name === "edit" ? editWorkout(id) : deleteWorkout(id);
  };

  return (
    <div
      ref={ref}
      className="row justify-content-between align-items-center pb-2 mb-2"
      style={{ borderBottom: "1px solid #dee2e6" }}
      data-id={id}
    >
      <div className="col text-center">{convertDate}</div>
      <div className="col text-center">{distance}</div>
      <div className="col text-center">
        <div className="row">
          <div className="col">
            <button
              name="edit"
              className="btn btn-primary"
              onClick={onClickHandler}
            >
              Редактировать
            </button>
          </div>
          <div className="col">
            <button
              name="delete"
              className="btn btn-primary"
              onClick={onClickHandler}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkoutItem.propTypes = {
  date: PropTypes.number.isRequired,
  deleteWorkout: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
  editWorkout: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default WorkoutItem;
