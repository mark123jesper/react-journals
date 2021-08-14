import React, {useState , useEffect} from 'react';
import MainCardContents from './MainCardContents';
import MainCardTextArea from './MainCardTextArea';

// Bugged Setting this const to useState and reloading the page without empty array will result to map function error;
const retrieveData = localStorage.getItem('Thoughts') ? JSON.parse(localStorage.getItem('Thoughts')) : [];

const MainCardThoughts = () => {

    const [thoughtDate, setthoughtDate] = useState('');
    const [thoughtContent, setthoughtContent] = useState('');
    const [thoughtKey, setthoughtKey] = useState(0);
    const [thoughtAll, setthoughtAll] = useState(retrieveData);

    const thoughtDateHandler = (event) => {
        setthoughtDate(event.target.value);
        setthoughtKey(Date.now());
    }

    const thoughtContentHandler = (event) => {
        setthoughtContent(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (thoughtDate !== '' && thoughtContent !== '') {

            const thought = { thoughtKey, thoughtDate, thoughtContent };
            setthoughtAll([...thoughtAll, thought]);
            setthoughtDate('');
            setthoughtContent('');
            setthoughtKey(0);

        } else {

            alert('Invalid Input. Please Try Again.');

        }
    }

    const deleteItem = (e) => {
        const newThoughts = thoughtAll.filter((item) => item.thoughtKey !== e);
 
        if (window.confirm('Are you sure you want to delete this entry?')) {
            setthoughtAll(newThoughts);
        } else {
            return false;
        }
    }
    
    const deleteHandler = () => {
        if (window.confirm('Are you sure you want to delete all of your entries?')) {
            setthoughtAll([]);
        } else {
            return false;
        };
    }

    useEffect(() => {
        
        localStorage.setItem('Thoughts', JSON.stringify(thoughtAll));
    
    }, [thoughtAll])

    return (
        <div>
            <MainCardTextArea
                thoughtDate={thoughtDate}
                thoughtContent={thoughtContent}
                thoughtDateHandler={thoughtDateHandler}
                thoughtContentHandler={thoughtContentHandler}
                submitHandler={submitHandler}
            />

            <MainCardContents
                thoughtAll={thoughtAll}
                deleteHandler={deleteHandler}
                deleteItem={deleteItem}
            />
        </div>
    )
};

export default MainCardThoughts
