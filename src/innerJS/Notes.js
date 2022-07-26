import "./master.css";
import "./tab-in.css"

function Notes({setWrite, setGoal, setNotes}) {

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

            <div className="notes-page">
                <h1 className="goal-title">Coming soon</h1>
            </div>
        </div>

    );
}

// ========================================

export default Notes;
