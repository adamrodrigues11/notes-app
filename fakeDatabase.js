const notes = [];

export function getNotes() {
    return notes;
}

export function addNote(title, content) {
    const note = {
        id: notes.length,
        title: title,
        content: content
    }
    notes.push(note);
}

export function deleteNote(id) {
    notes.splice(id, 1);
    console.log("deleted note with id: " + id);    
}