import React from 'react'

const MainCardTaskArea = ({ taskDateHandler, taskDate, taskContentHandler,  taskContent, submitTaskHandler}) => {

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? `0${today.getMonth()+1}` : today
    .getMonth() + 1) + '-' + (today.getDate() < 10 ? `0${today.getDate()}` : today.getDate());



    return (
        <form>
            <div className="row d-flex justify-content-between cardHeader p-1">
                <div className="col-md-8 row m-auto">
                    List of Tasks
                </div>

                <div className="col-md-4 row m-auto">
                    <input className="form-control" onChange={taskDateHandler} type="date" min={date} max={date} value={taskDate} />
                </div>
            </div>


            <div className="p-1 mainCardTextArea">
                <div className="w-100">
                    <textarea className="w-100 form-control" rows="5" onChange={taskContentHandler} value={taskContent} required></textarea>

                    <div className="d-flex justify-content-center">
                        <button className='mt-3 contentBtn d-flex align-items-center justify-content-center' type="submit" onClick={submitTaskHandler}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default MainCardTaskArea