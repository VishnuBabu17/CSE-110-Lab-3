import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";
import { Label } from "./types";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });

 test("read and update", () => {
  render(<StickyNotes/>);

  // Creating a new sticky note
  const createNoteTitle = screen.getByPlaceholderText("Note Title");
  const createNoteContent = screen.getByPlaceholderText("Note Content");
  const createLabel = screen.getByTestId('label');
  const createNoteButton = screen.getByText(/Create Note/i);

  // Using fireEvent to update the sticky note
  fireEvent.change(createNoteTitle, {target: {value: 'Internships'}});
  fireEvent.change(createNoteContent, {target: {value: 'Apply for internships for summer 2025'}});
  fireEvent.change(createLabel, {target: {value: Label.work}});
  fireEvent.click(createNoteButton);

  // Reading the sticky note
  const newNoteTitle = screen.getByText(/Internships/);
  const newNoteContext = screen.getByText(/Apply for internships for summer 2025/);

  expect(newNoteTitle).toBeInTheDocument();
  expect(newNoteContext).toBeInTheDocument();
})

 test("delete note", () => {
  render(<StickyNotes/>);
  expect(screen.getByText('Arkham Knight')).toBeInTheDocument();
  // Deleting the sticky note
  const deleteButtons = screen.getAllByText('x');
  fireEvent.click(deleteButtons[0]);
  expect(screen.queryByText('Arkham Knight')).not.toBeInTheDocument();
 })
});