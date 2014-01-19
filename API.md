The UI will call a number of methods that the container application should react to. The native program should use CEF to define a global object within the UI's context called `game`.

The global `game` object should contain the following methods.

 * `game.play()` - starts the game, called when clicking "play" on the main menu.
 * `game.quit()` - closes the application, can be called from the main menu and potentially the pause screen.

*(under development)*