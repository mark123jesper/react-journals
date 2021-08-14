import React, {useState , useEffect} from 'react';
import MainCardTaskContents from './MainCardTaskContents';
import MainCardTaskArea from './MainCardTaskArea';

// Bugged Setting this const to useState and reloading the page without empty array will result to map function error;
const retrieveData = localStorage.getItem('Tasks') ? JSON.parse(localStorage.getItem('Tasks')) : [];

const MainCardTask = () => {

    const [taskDate, settaskDate] = useState('');
    const [taskContent, settaskContent] = useState('');
    const [taskKey, settaskKey] = useState(0);
    const [taskAll, settaskAll] = useState(retrieveData);

    const taskDateHandler = (event) => {
        settaskDate(event.target.value);
        settaskKey(Date.now())
    }

    const taskContentHandler = (event) => {
        settaskContent(event.target.value);
    }

    const submitTaskHandler = (event) => {
        event.preventDefault();
        if (taskDate !== '' && taskContent !== '') {

            const task = { taskKey, taskDate, taskContent };
            settaskAll([...taskAll, task]);
            settaskDate('');
            settaskContent('');
            settaskKey(0);

        } else {

            alert('Invalid Input. Please Try Again.');

        }

    }

    const deleteItem = (e) => {
        const newTasks = taskAll.filter((item) => item.taskKey !== e);
 
        if (window.confirm('Are you sure you want to delete this entry?')) {
            settaskAll(newTasks);
        } else {
            return false;
        }
    }
    
    const deleteHandler = () => {
        if (window.confirm('Are you sure you want to delete all of your entries?')) {
            settaskAll([]);
        } else {
            return false;
        };
    }

    useEffect(() => {
        
        localStorage.setItem('Tasks', JSON.stringify(taskAll));
    
    }, [taskAll])

    return (
        <div>
            <MainCardTaskArea
                taskDate={taskDate}
                taskContent={taskContent}
                taskKey={taskKey}
                taskDateHandler={taskDateHandler}
                taskContentHandler={taskContentHandler}
                submitTaskHandler={submitTaskHandler}
            />

            <MainCardTaskContents
                taskAll={taskAll}
                deleteHandler={deleteHandler}
                deleteItem={deleteItem}
            />
        </div>
    )
};

export default MainCardTask
