import React from 'react';

const MainCardTaskContents = ({ taskAll, deleteItem, deleteHandler }) => {

    return (
        <div>
            {taskAll.map((item) => (
                <div key={item.taskKey}>
                    <div className='p-1 row'>
                        <div className='col-12 d-flex justify-content-between'>
                            {item.taskDate}
                            <div className='d-flex justify-content-between'>
                                <input type='checkbox' />
                                <i onClick={() => deleteItem(item.taskKey)} className="fas fa-trash ms-2"></i>
                            </div>
                        </div>

                        <div className='col-12'>
                            <pre className='cardContents'>{item.taskContent}</pre>
                        </div>
                    </div>

                </div>
            ))}
            <button className='m-1 btn btn-sm btn-secondary' onClick={deleteHandler}><i className="fas fa-trash"></i> Delete All</button>
        </div>
    )
}

export default MainCardTaskContents;