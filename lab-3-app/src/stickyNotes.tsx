import { Label } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constant"; // Import the dummyNotesList from the appropriate module
import { ToggleTheme } from "./hookexercise"
import React, {useState} from "react"
import { useAddFavorite } from "./hookexercise";


export const StickyNotes = () => {
    // your code from App.tsx
    const { favorites, toggleFavorite } = useAddFavorite();

 const [notes, setNotes] = useState(dummyNotesList);

 function deleteNote (id: number) {
   setNotes(notes.filter(note => note.id !== id));
 };

 const initialNote = {
    id: -1,
    title: "",
    content: "",
    label: Label.other,
  };
 const [createNote, setCreateNote] = useState(initialNote);
 
 const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    createNote.id = notes.length + 1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };

 return (
    <div className='app-container'>
      <form className="note-form" onSubmit={createNoteHandler}>
        <div>
          <input
            placeholder="Note Title"
            onChange={(event) =>
              setCreateNote({ ...createNote, title: event.target.value })}
            required>
          </input>
        </div>
  
        <div>
          <textarea
            placeholder="Note Content"
            onChange={(event) =>
              setCreateNote({ ...createNote, content: event.target.value })}
            required>
          </textarea>
        </div>
  
    <div>
         <select
           onChange={(event) =>
             setCreateNote({ ...createNote, label: event.target.value as Label})}
             data-testid="label"
           required>
           <option value={Label.personal}>Personal</option>
           <option value={Label.study}>Study</option>
           <option value={Label.work}>Work</option>
           <option value={Label.other}>Other</option>
         </select>
       </div>
  
        <div><button type="submit">Create Note</button></div>
      </form>
  
    <div className="notes-grid">
       {notes.map((note) => (
         <div
           key={note.id}
           className="note-item">
           <div className="notes-header">
             <button id="favoritesButton" onClick={() => toggleFavorite(note.title)}>
              {favorites.includes(note.title) ? 'Dislike' : 'Like'}
             </button>
             <button id="deleteNote" onClick={() => {deleteNote(note.id)}}>x</button>
           </div>
           <h2 contentEditable="true"> {note.title} </h2>
           <p contentEditable="true"> {note.content} </p>
           <p contentEditable="true"> {note.label} </p>
         </div>
       ))}
     </div>
     <div id="favList">
      <h3>List of favorites</h3>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite}</li>
        ))}
      </ul>
     </div>
     <div id="toggleTheme"><ToggleTheme /></div>
   </div>

 );
}