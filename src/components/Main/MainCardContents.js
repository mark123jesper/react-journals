import React from 'react'

const MainCardContents = ({ thoughtAll, deleteHandler, deleteItem }) => {

    return (
        <div>            
            {thoughtAll.map((item) => (
                <div key={item.thoughtKey}>
                    <div className='row'>
                        <div className='col-12 d-flex justify-content-between'>
                            <div className='col-6'>{item.thoughtDate}</div>
                            <i onClick={() => deleteItem(item.thoughtKey)} className="fas fa-trash"></i>
                        </div>

                        <div className='col-12'>
                            <pre className='cardContents'>{item.thoughtContent}</pre>
                        </div>
                    </div>
                </div>
            ))}
            <button className='m-1 btn btn-sm btn-secondary' onClick={deleteHandler}><i className="fas fa-trash"></i> Delete All</button>
        </div> 
    )
}

export default MainCardContents;
