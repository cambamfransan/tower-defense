const input = require('../../framework/input');
const { upgradeTower, sellTower, startLevel, quitGame, addTower } = require('./utils');

var myMouse = input.Mouse();
var myKeyboard = input.Keyboard();

function initInputs() {
    // Create the keyboard input handler and register the keyboard commands
    myMouse.init();
    myKeyboard.init();
    //myKeyboard = input.Keyboard();
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_ESCAPE, quitGame, true);
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_U, upgradeTower, true);
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_S, sellTower, true);
    myKeyboard.registerCommand(input.KeyEvent.DOM_VK_G, startLevel, true);
    
    //myMouse = input.Mouse();
    myMouse.registerCommand('mousedown', addTower);
        // mouseCapture = true;
        // myTexture.moveTo({x: e.clientX, y: e.clientY});
//    });
    
    myMouse.registerCommand('mouseup', function () {
        // mouseCapture = false;
    });
    
    myMouse.registerCommand('mousemove', function (e) {
        // if (mouseCapture) {
            // myTexture.moveTo({x: e.clientX, y: e.clientY});
        // }
    });
}

module.exports = {
    myMouse,
    myKeyboard,
    initInputs
}