import "./master.css";
import TinyEditor from "./TinyEditor";

function Write({setNotes, setWrite, setGoal}) {

    return (
        <div className="col position-relative">
            <div className="login-button">
                <i className="bi bi-person"></i> Login
            </div>
            <div className="write-button" onClick={setWrite}>
                <i className="bi bi-pencil-square"></i> write
            </div>
            <div className="goal-button" onClick={setGoal}>
                <i className="bi bi-star"></i> goal
            </div>
            <div className="notes-button" onClick={setNotes}>
                <i className="bi bi-sticky"></i> notes
            </div>

            <div class="write-page">
                <TinyEditor/>
            </div>
        </div>

    );

}

// ========================================

export default Write;
