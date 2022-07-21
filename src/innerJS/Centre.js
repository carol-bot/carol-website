import TinyEditor from "./TinyEditor";
import Goal from "./Goal";
import Notes from "./Notes";
import Write from "./Write";
import React, {useState} from "react";

function Centre() {
    const [state, setState] = useState('write')

    const setWrite = () => {
        setState("write");
        console.log('write');

    }

    const setGoal = () => {
        setState("goal");
        console.log('goal');

    }

    const setNotes = () => {
        setState("notes");
        console.log('notes');

    }

    return (

        <div className='col'>
            <div className='row h-100'>
                {state === 'notes' && (<Notes setNotes={setNotes} setGoal={setGoal} setWrite={setWrite} />)}

                {state === 'write' && (<Write setNotes={setNotes} setGoal={setGoal} setWrite={setWrite} />)}

                {state === 'goal' && (<Goal setNotes={setNotes} setGoal={setGoal} setWrite={setWrite} />)}

            </div>

        </div>
    );
}


export default Centre;