import {useEffect, useState} from "react";
import axios from "axios";
import noteService from './service/note'
import note from "./service/note";
import Notification from "./Notification";

const Note = () => {
    const notes = [
        {
            id: 1,
            content: 'HTML is easy',
            date: '2019-05-30T17:30:31.098Z',
            important: true
        },
        {
            id: 2,
            content: 'Browser can execute only JavaScript',
            date: '2019-05-30T18:39:34.091Z',
            important: false
        },
        {
            id: 3,
            content: 'GET and POST are the most important methods of HTTP protocol',
            date: '2019-05-30T19:20:14.298Z',
            important: true
        }
    ]
    // 用户所有笔记
    const [userNotes, setUserNotes] = useState([]);
    // 用于保存新笔记
    const [newNote, setNewNote] = useState('a new Note');
    // 是否展示全部笔记
    const [showAll, setShowAll] = useState(true);
    // 刷新 flag
    const [refresh, setRefesh] = useState(true);
    // 提示
    const [noticeMsg, setNoticeMsg] = useState({msg:"", succ:true});

    const hook = () => {
        console.log("effect");
        noteService
            .getAll()
            .then(data => {
                console.log("promise fulfilled")
                setUserNotes(data);
            })
    }

    useEffect(hook, [refresh]);
    console.log('render', userNotes.length, 'userNotes')

    const showNotes = showAll ?
        userNotes :
        userNotes.filter(note => note.important === true)

    const addNote = (event) => {
        event.preventDefault();
        console.log('button clicked', event.target)
        let noteOb = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id : userNotes.length + 1
        };

        setUserNotes(userNotes.concat(noteOb));
        setNewNote('');

        noteService
            .create(noteOb)
            .then(res => {
                console.log(res)
                setNoticeMsg(
                    {
                        msg: `the note '${newNote}' was add to server successfully`,
                        succ: true
                    }
                );
                setTimeout(() => {
                    setNoticeMsg({msg: null, succ: true})
                }, 5000)
            })
            .catch(err => {

            })
        setRefesh(!refresh);
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

    const importantChange = (id) => {
        let note = userNotes.find(note => note.id === id);
        let changeNote = {...note, important: !note.important}
        noteService
            .update(id, changeNote)
            .then((res) => {
                console.log(`change success ${res}`)
            })
            .catch(err => {
                console.log(`update error, err:${err}`);
                setNoticeMsg(
                    {
                        msg: `the note '${note.content}' was already deleted from server`,
                        succ: false
                    }
                );
                setTimeout(() => {
                    setNoticeMsg({msg: null,succ: true})
                }, 5000)
            })
        setRefesh(!refresh)
    }

    return (
        <div>
            <h1>notes</h1>
            {noticeMsg && <Notification className="notification" message={noticeMsg.msg} success={noticeMsg.succ}/>}
            <br/>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul className='note-list'>
                {showNotes.map(note => {
                 return (
                     <>
                         <li key={note.id} className={`note ${note.important ? 'note-important' : ''}`}>
                             <span className='note-content'>{note.content}</span>
                             <button onClick={() => importantChange(note.id)}>{note.important ? "make not important" : "make important"}</button>
                         </li>

                     </>
                 )
                })}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )

}

export default Note;
