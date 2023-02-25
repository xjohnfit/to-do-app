import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import { useEffect, useState } from 'react';

const App = () => {
  const userEmail = 'xjohnfit@gmail.com';

  const [ tasks, setTasks ] = useState(null)

  const getData = async () => {
    try {
      const response =  await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => getData, []);

  console.log(tasks);

  //sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="app">
      <ListHeader listName={'To Do List'} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  );
}

export default App;