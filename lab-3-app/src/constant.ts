import { Label, Note } from "./types"; // Import the Label type from the appropriate module

export const dummyNotesList = [
    {
        id: 1,
        title: "Arkham Knight",
        content: "Arkham Knight is one of the most loved batman villains. He is revealed to be Jason Todd who was once a robin.",
        label: Label.work,
    },
    {
        id: 2,
        title: "Arthur Morgan",
        content: "Arthur Morgan is the protagonist of the game Red Dead Redemption 2. He is one of the most liked character because his character arc is grey.",
        label: Label.work,
    },
    {
        id: 3,
        title: "Devara Mungita Nuvventha",
        content: "These are the most listened to lyrics from the Fear Song from the movie Devara.",
        label: Label.personal,
    },
    {
        id: 4,
        title: "Ayudha Pooja",
        content: "Ayudha Pooja has been my favorite song from 2 weeks and still is.",
        label: Label.personal,
    },
    {
        id: 5,
        title: "Saripodha Sanivaram",
        content: "This is a movie with clever screenplay and the best music I've heard in sometime.",
        label: Label.study,
    },
    {
        id: 6,
        title: "Revenger",
        content: "Random thought.",
        label: Label.other,
    },
 ]

 export const dummyGroceryList = [
    { name: "Apples", isPurchased: false },
    { name: "Bananas", isPurchased: false },
 ]