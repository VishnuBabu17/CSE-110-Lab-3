import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themecontext";
import App from "./App"

export function ClickCounter() {
 const [count, setCount] = useState(0);

 const handleClick = () => {
   setCount(count + 1);
 };

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 }, [count]);

 const theme = useContext(ThemeContext);
 return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}
    >
      <p>You clicked {count} times </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ background: theme.foreground, color: theme.background }}
      >
        Click me
      </button>
    </div>
  );
}


// Wrapper component to provide context
export function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };


   
    // useEffect(() => {
    //     document.body.style.backgroundColor = currentTheme.background;
    //     document.body.style.color = currentTheme.foreground;
        
    //   }, [currentTheme]);

      useEffect(() => {
        const notesGrid = document.getElementsByClassName("note-item");
        // if (notesGrid) {
        //   notesGrid.style.backgroundColor = currentTheme.background;
        //   notesGrid.style.color = currentTheme.foreground;
        // }
        Array.from(notesGrid).forEach((note: Element) => {
          (note as HTMLElement).style.backgroundColor = currentTheme.background;
          (note as HTMLElement).style.color = currentTheme.foreground;
        });
        const favList = document.getElementById("favList");
        if (favList) {
            favList.style.backgroundColor = currentTheme.background;
            favList.style.color = currentTheme.foreground;
        }
        document.body.style.backgroundColor = currentTheme.background;
      }, [currentTheme]);

    return (
      <ThemeContext.Provider value={currentTheme}>
        <button onClick={toggleTheme}> Toggle Theme </button>
      </ThemeContext.Provider>
    );
   }


export const useAddFavorite = () => {
    const [favorites, setFavorites] = useState<string[]>([]);
  
    const toggleFavorite = (title: string) => {
      setFavorites(prevFavorites => {
        if (prevFavorites.includes(title)) {
          return prevFavorites.filter(fav => fav !== title);
        } else {
          return [...prevFavorites, title];
        }
      });
    };

    return { favorites, toggleFavorite };
  };