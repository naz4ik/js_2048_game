!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}var e=new(function(){var e;function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.board=e,this.currentBoard=function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this.initialScore=o,this.currentScore=o,this.status="idle",this.hasWon=!1}return e=[{key:"addRandomTile",value:function(){for(var t=[],e=0;e<this.board.length;e++)for(var r=0;r<this.board[e].length;r++)0===this.board[e][r]&&t.push({row:e,col:r});if(t.length>0){var o=t[Math.floor(Math.random()*t.length)];this.board[o.row][o.col]=.9>Math.random()?2:4}}},{key:"slideTiles",value:function(t){for(var e=0;e<4;e++){var r=t[e];r=this.combineTiles(r);for(var o=0;o<4;o++)this.board[o][e]=r[o]}}},{key:"combineTiles",value:function(t){for(var e=t.filter(function(t){return 0!==t}),r=0,o=0;o<e.length-1;o++)e[o]===e[o+1]&&(e[o]*=2,e[o+1]=0,r+=e[o]);var i=e.filter(function(t){return 0!==t}).concat([0,0,0,0]).slice(0,4);return this.currentScore+=r,i}},{key:"cellsGroupedByColumn",value:function(){for(var t=[[],[],[],[]],e=0;e<4;e++)for(var r=0;r<4;r++)t[e].push(this.board[r][e]);return t}},{key:"cellsGroupedByRow",value:function(){for(var t=[[],[],[],[]],e=0;e<4;e++)for(var r=0;r<4;r++)t[e].push(this.board[e][r]);return t}},{key:"moveLeft",value:function(){for(var t=JSON.stringify(this.board),e=this.cellsGroupedByRow(),r=0;r<4;r++){var o=e[r];o=this.combineTiles(o),this.board[r]=o}JSON.stringify(this.board)!==t&&this.addRandomTile()}},{key:"moveRight",value:function(){for(var t=JSON.stringify(this.board),e=this.cellsGroupedByRow(),r=0;r<4;r++){var o=e[r].reverse();(o=this.combineTiles(o)).reverse(),this.board[r]=o}JSON.stringify(this.board)!==t&&this.addRandomTile()}},{key:"moveUp",value:function(){for(var t=JSON.stringify(this.board),e=this.cellsGroupedByColumn(),r=0;r<4;r++){var o=e[r];o=this.combineTiles(o);for(var i=0;i<4;i++)this.board[i][r]=o[i]}JSON.stringify(this.board)!==t&&this.addRandomTile()}},{key:"moveDown",value:function(){for(var t=JSON.stringify(this.board),e=this.cellsGroupedByColumn(),r=0;r<4;r++){var o=e[r].reverse();(o=this.combineTiles(o)).reverse();for(var i=0;i<4;i++)this.board[i][r]=o[i]}JSON.stringify(this.board)!==t&&this.addRandomTile()}},{key:"win",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(2048===this.board[t][e])return this.hasWon=!0,!0;return!1}},{key:"canMove",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.board[t][e]||t<3&&this.board[t][e]===this.board[t+1][e]||e<3&&this.board[t][e]===this.board[t][e+1])return!0;return!1}},{key:"getScore",value:function(){return this.currentScore}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.currentBoard=JSON.parse(JSON.stringify(this.board)),this.currentScore=this.initialScore,this.addRandomTile(),this.addRandomTile(),this.status="playing"}},{key:"restart",value:function(){this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.currentBoard=JSON.parse(JSON.stringify(this.board)),this.currentScore=this.initialScore,this.status="idle",this.hasWon=!1}}],function(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(r.prototype,e),r}()),r=document.querySelector(".start"),o=document.querySelector(".game-field"),i=document.querySelector(".message-start"),n=document.querySelector(".message-lose"),a=document.querySelector(".message-win");function s(){var t=o.querySelectorAll(".field-row"),r=e.getScore();document.querySelector(".game-score").textContent=r,e.getState().forEach(function(e,r){var o=t[r].querySelectorAll(".field-cell");e.forEach(function(t,e){var r=o[e];r.textContent="",r.className="field-cell",0!==t&&(r.textContent=t,r.classList.add("field-cell--".concat(t)))})})}r.addEventListener("click",function(){"idle"===e.getStatus()?(e.start(),s(e),r.textContent="Restart",r.classList.add("restart"),i.classList.add("hidden")):"playing"===e.getStatus()&&(e.restart(),s(e),r.textContent="Start",r.classList.remove("restart"),a.classList.add("hidden"),n.classList.add("hidden"),i.classList.remove("hidden"))}),document.addEventListener("keydown",function(t){if("playing"===e.getStatus()){switch(t.key){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;default:return}e.win()&&e.hasWon&&a.classList.remove("hidden"),e.canMove()||n.classList.remove("hidden"),s()}})}();
//# sourceMappingURL=index.ae5af2de.js.map
