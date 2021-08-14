import React from 'react'

const MainCardTextArea = ({ thoughtDateHandler, thoughtDate, thoughtContentHandler,  thoughtContent, submitHandler}) => {

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? `0${today.getMonth()+1}` : today
    .getMonth() + 1) + '-' + (today.getDate() < 10 ? `0${today.getDate()}` : today.getDate());


    return (
        <form>
            <div className="row d-flex justify-content-between cardHeader p-1">
                <div className="col-md-8 row m-auto">
                    Thoughts for the Day
                </div>

                <div className="col-md-4 row m-auto">
                <input type="date"
                    className="form-control" onChange={thoughtDateHandler} min={date} max={date} value={thoughtDate} />
                </div>
            </div>

            <div className="p-1 mainCardTextArea">
                <div className="w-100">
                    <textarea className="w-100 form-control textArea" rows="10" onChange={thoughtContentHandler} value={thoughtContent} required></textarea>

                    <div className="mt-3 d-flex justify-content-center">
                        <button className='contentBtn d-flex align-items-center justify-content-center' type="submit" onClick={submitHandler}>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default MainCardTextArea
