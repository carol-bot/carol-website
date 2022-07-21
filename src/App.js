import React from 'react';
import BookBar from "./innerJS/BookBar";
import PageList from "./innerJS/PageList";
import Centre from "./innerJS/Centre";
import Write from "./innerJS/Write";
import Notes from "./innerJS/Notes";
import Goal from "./innerJS/Goal";

class App extends React.Component {
    render() {
        return (
            <div className={'container-fluid'} style={{height: window.innerHeight}}>
                <div className={"row h-100"}>
                    <BookBar/>
                    <PageList/>
                    <Centre/>
                </div>
            </div>
        );
    }
}

// ========================================

export default App;
