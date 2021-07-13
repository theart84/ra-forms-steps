import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

import shortid from 'shortid';
import {convertDate} from "../../utils/convertDate";


const AddNewWorkout = (props) => {
  const [inputDate, setInputDate] = useState('');
  const [inputDistance, setInputDistance] = useState('');

  useEffect(() => {
      setInputDate(props.data.date);
      setInputDistance(props.data.distance);
  }, [props.data.date, props.data.distance]);


  const onSubmitHandler = (event) => {
    event.preventDefault();
    const normalizeDate = convertDate(inputDate);
    const payload = {
      id: shortid.generate(),
      date: normalizeDate,
      distance: inputDistance
    }
    props.addNewWorkout(payload);
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    name === 'date' ? setInputDate(value) : setInputDistance(value);
  }

  return (
    <form className="mb-5" onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="col">Дата(ДД.ММ.ГГ)
          <input
            type="text"
            className="form-control"
            placeholder="Введите дату..."
            name="date"
            value={inputDate}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col">Пройдено, км
          <input
            type="text"
            className="form-control"
            placeholder="Введите пройденное расстояние..."
            name="range"
            value={inputDistance}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col align-self-end">
          <button className="btn btn-primary">Добавить</button>
        </div>
      </div>
    </form>
  )
}

AddNewWorkout.propTypes = {
  addNewWorkout: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
}

export default AddNewWorkout;
