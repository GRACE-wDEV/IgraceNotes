const notesContainer = document.querySelector(".notes-container");
const addButton = document.querySelector(".btn");

function createNote(title="", content="")
{
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  const noteTitle = document.createElement("input");
  noteTitle.type="text";
  noteTitle.classList.add("note-title");
  noteTitle.placeholder="Note Title";
  noteTitle.value=title;

  const noteTextArea = document.createElement("textarea");
  noteTextArea.classList.add("note-content");
  noteTextArea.placeholder="Type note content here...";
  noteTextArea.value=content;

  const copy = document.createElement("span");
  copy.innerHTML="Copy";
  copy.classList.add("copy");

  const copyIcon = document.createElement("img");
  copyIcon.src = "public/copy.svg";
  copy.insertBefore(copyIcon,copy.firstChild);

  const image = document.createElement("img");
  image.src = "public/delete.svg";

  noteDiv.append(noteTitle, noteTextArea, copy, image);
  notesContainer.insertBefore(noteDiv, notesContainer.firstChild);

  // Attaching Event Listennnneerrss for each new NOTE
  noteTitle.addEventListener("keyup", (e)=>{
    if(e.key=="Enter")
    {
      noteTextArea.focus();
    }
    updateStorage();
  })

  noteTextArea.addEventListener("keyup", ()=>{updateStorage()});

  image.addEventListener("click", ()=>{
    noteDiv.remove();
    updateStorage();
  })

  copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(
      `${noteTitle.value}
  ${noteTextArea.value}`
    );
    copy.innerHTML="Copied!";
    copyIcon.src = "public/copied.svg";
    copy.insertBefore(copyIcon,copy.firstChild);
    setTimeout(()=>{
      copy.innerHTML="Copy";
      copyIcon.src = "public/copy.svg";
      copy.insertBefore(copyIcon,copy.firstChild);
    },1000)
  })
  noteTitle.focus();
}

// Save notes to LOCAlSTORAGE

function updateStorage()
{
  const notes = [];
  const titles = document.querySelectorAll(".note-title");
  const contents = document.querySelectorAll(".note-content")

  titles.forEach((title, i)=>{
    notes.push({
      title: title.value,
      content: contents[i].value,
    });
  });
  notes.reverse();
  localStorage.setItem("notes", JSON.stringify(notes));
}



// Show all notes that's stored in LS

function showNotes()
{
  const stored = localStorage.getItem("notes");
  if(stored)
  {
    const notes = JSON.parse(stored);
    notes.forEach((note)=>{
      createNote(note.title, note.content);
    })
  }
}


// Add a new empty note
addButton.addEventListener("click", ()=>{
  createNote();
  updateStorage();
})




showNotes();