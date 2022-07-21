import React from 'react';
import "./master.css";
import "./tab-in.css"

function Goal({setNotes, setWrite, setGoal}) {
    return (
        <>
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


                <div className="goal-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h1 className="goal-title">Goal:</h1>
                            </div>
                            <div className="col">
                                <h1 className="goal-title">1/3</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="goal-table">
                                    <tr>
                                        <td>Current Streak</td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Total words written</td>
                                        <td>56004</td>
                                    </tr>
                                    <tr>
                                        <td>Total pages written</td>
                                        <td>129</td>
                                    </tr>
                                    <tr>
                                        <td>Average words per page</td>
                                        <td>500</td>
                                    </tr>
                                    <tr>
                                        <td>Average pages per book</td>
                                        <td>15</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="col">
                                <img className="img-fluid goal-graph" src="img/graph.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

// ========================================

export default Goal;
