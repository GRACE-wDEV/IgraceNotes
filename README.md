📝 Notes App
A lightweight, local-storage-powered notes app built with vanilla JavaScript. It allows users to create, edit, delete, and copy notes directly in the browser — with automatic saving to localStorage.

🚀 Features
📌 Create Notes with titles and content

💾 Auto-Save notes to localStorage

🗑️ Delete individual notes

📋 Copy note content with one click

🔁 Persistent: notes stay after page reloads


1. Adding a Note
When the "Add Note" button is clicked:

A new .note is created.

It includes:

A title input (.note-title)

A textarea (.note-content)

A "Copy" button with an icon

A delete icon

2. Editing
Both title and content fields are editable.

Every keystroke updates localStorage.

3. Deleting a Note
Clicking the delete icon removes the note from the DOM and updates storage.

4. Copying Note Content
Clicking the "Copy" span:

Copies title + content to the clipboard.

Changes the icon and label temporarily to "Copied!".

5. Persistence
On page load, stored notes are read from localStorage and recreated via the createNote() function.


📦 Technologies Used
Vanilla JavaScript (ES6+)

localStorage API

DOM manipulation

Clipboard API


🛠️ TODO / Ideas
Add search/filter functionality

Dark mode toggle

Markdown support

Drag & drop reordering

Export notes as .txt or .json

🧠 Developer Notes
@apply or Tailwind are not used directly here — styling is assumed to be in external CSS or handled via framework elsewhere.

Icons (copy.svg, copied.svg, delete.svg) must exist in the /public folder and be referenced properly.

📄 License
This is a free and open-source project. Use it, modify it, and build on top of it! 🚀