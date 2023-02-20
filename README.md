# node-hill TypeScript Template
## What is this?
This is a template you can use to setup your node-hill project with TypeScript
Follow the Setup guide right below

## Casual Setup
  1. Download Node.js 8 or above at https://nodejs.org/en/download/
  2. Download THIS template by pressing green `Code` button and downloading ZIP file.
  3. Open the extracted folder in the file explorer, and in the top bar type "cmd" and press enter.
  4. Download TypeScript at https://www.typescriptlang.org/download
  5. Run npm i node-hill@latest, as this will install the needed dependencies for node-hill to function.
  6. Run npm i node-hill-types@latest, as this will install the node-hill type definitions for TypeScript to function.
  7. Edit the start.js file to fill in your appropriate server information.
     You will need to add your host key for the set you want to host. This can be found under the set's settings page.
  8. Edit your game code in `./user_scripts.ts/` folder.
  9. Launch `typescript_compiler.bat`, this will open up a terminal. Everytime you save any file inside `./user_scripts.ts/` it will recompile the JavaScript
     The code will get compiled ONLY WHEN THAT TERMINAL IS OPENED, CLOSING THE TERMINAL WILL STOP COMPILING THE TYPESCRIPT CODE
     If after launching the `typescript_compiler.bat` terminal will immediately close, then make sure you correctly downloaded the TypeScript
  10. The project is all yours now! You can now launch the server and client and test out the TypeScript!

## Additional Info
### Importnant
  1. Edit game code ONLY in `./user_scripts.ts/`, the `./user_scripts/` will be automatically compiled (as long as `typescript_compiler.bat` is running)
  2. Always have `typescript_compiler.bat` opened for code compilation, also remember that code is being compiled only when the file with code is saved
  3. If you run into a problem when code that would compile in JavaScript, but for some reason doesn't, you can use `//@ts-expect-error` above the error.
     Not the best solution, but a quick fix.
  4. You can use Enums! `GameEvents.InitialSpawn` as an example.
  5. If you find an issue with the npm module, message me on discord.
### Visual Stuido Code Setup
I really recommend to use [Visual Studio Code](https://code.visualstudio.com/), since it has a built it IntelliSense for TypeScript.
So continuing from where we left of:
  1. Download VSCode at https://code.visualstudio.com/
  2. Right click on the template folder and select `Open with Code`
  3. In VSCode do the `Ctrl + \`` key combo to open up the terminal
  4. In the terminal paste `./typescript_compiler.bat`, which will just run the bat file inside VSCode, which allow you to see the errors in your TypeScript code, without a need to switch between VSCode and the terminal in separate window.
  5. And that's it! AFAIK, VSCode is already configured for using TypeScript, so enjoy!
