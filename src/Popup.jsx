import React from 'react';
import "./Modal.css";


function Popup({closeModal}) {
    return (
        // line 8 goes below the beginning of the function
        // const [openModal, setOpenModal] = useState(false)

        // Syntax below goes inside of the return area
        // <h1>CLick here</h1>
        // <button className='openModalBtn' onClick={() => {setOpenModal(true)}}>open</button>
        // {openModal && <Popup closeModal={setOpenModal}/>}


            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>x</button>
                    </div>
                    <div className="title">
                        <h1>Are you sure you want to go forward?</h1>
                    <div className="body">
                        <p>You'll see, if you dare to continue...</p>
                    </div>
                    </div>
                    <div className="fotter">
                        <button onClick={() => closeModal(false)}>cancel</button>
                        <button>continue</button>
                    </div>
                </div>
            </div>
    );
}

export default Popup;