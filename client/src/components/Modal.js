import { useState } from 'react';


const Modal = ({ mode, setShowModal}) => {

    const editMode = mode === 'edit' ? true : false;

    const [data, setData] = useState({
      user_email: "",
      title: "",
      progress: "",
      date: editMode ? "" : new Date()
    });

    const handleChange = (e) => {
      const { name, value } = e.target;

      setData(data => ({
        ...data,
        [name] : value
      }));

      console.log(data);
    }

    return (
      <div className="overlay">
        <div className="modal">
          <div className="form-title-container">
            <h3>Lets {mode} your task</h3>
            <button onClick={() => setShowModal(false)}>X</button>
          </div>

          <form action="">
            <input 
              required
              maxLength={30}
              placeholder="Your task"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="range">Drag to select your progress</label>
            <input 
              required
              type="range" 
              id="range"
              min="0" 
              max="100" 
              name="progress" 
              value={data.progress}
              onChange={handleChange}
            />
            <input className={mode} type="submit" />
          </form>
        </div>
      </div>
    );
  }
  
  export default Modal;