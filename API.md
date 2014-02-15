The UI will call a number of methods that the container application should react to. The native program should use CEF to define a global object within the UI's context called `game`.

The global `game` object should contain the following methods.

 * `game.play()` - starts the game, called when clicking "play" on the main menu.
 * `game.quit()` - closes the application, can be called from the main menu or the pause menu.
 * `game.resume()` - called from the pause menu, should hide the CEF overlay and carry on with the game.
 * `game.stop()` - called from the pause menu, should stop the game and allow the UI to redirect itself to the main menu. This does not close the application, it resets it to the initial state.

After play is called, the game should begin and the overlay should be hidden. When the game decides it is time to pause (after escape is pressed, for example) it should pause and display the overlay. The UI will then let the game know what should happen next. Be it quit, stop or continue. On continuing the overlay can be hidden again, it's as if nothing happened.