import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }


    return (
        <div>
            <Header
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Meme
                darkMode={darkMode}
            />
        </div>
    )
}
