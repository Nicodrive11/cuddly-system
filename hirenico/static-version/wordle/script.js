let messageTag = document.querySelector("#message");
        let currentRow = 1;
        let currentTileIndex = 0;
        let board = [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]]
        let allowedWords = [];
        let answerWords = [];
        let realWords = [];
        let secretWord = "";
        let maxAttempts = 6;
        let attempts = 0;

        // Answer words (potential secret words)
        const fallbackAnswerWords = [
            "ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN",
            "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM", "ALERT", "ALIEN", "ALIGN", "ALIKE", "ALIVE",
            "ALLOW", "ALONE", "ALONG", "ALTER", "AMONG", "ANGER", "ANGLE", "ANGRY", "APART", "APPLE",
            "APPLY", "ARENA", "ARGUE", "ARISE", "ARRAY", "ASIDE", "ASSET", "AVOID", "AWAKE", "AWARD",
            "AWARE", "BADLY", "BAKER", "BASES", "BASIC", "BEACH", "BEGAN", "BEGIN", "BEING", "BELOW",
            "BENCH", "BILLY", "BIRTH", "BLACK", "BLAME", "BLANK", "BLIND", "BLOCK", "BLOOD", "BOARD",
            "BOOST", "BOOTH", "BOUND", "BRAIN", "BRAND", "BRASS", "BRAVE", "BREAD", "BREAK", "BREED",
            "BRIEF", "BRING", "BROAD", "BROKE", "BROWN", "BUILD", "BUILT", "BUYER", "CABLE", "CALIF",
            "CARRY", "CATCH", "CAUSE", "CHAIN", "CHAIR", "CHAOS", "CHARM", "CHART", "CHASE", "CHEAP",
            "CHECK", "CHEST", "CHIEF", "CHILD", "CHINA", "CHOSE", "CIVIL", "CLAIM", "CLASS", "CLEAN",
            "CLEAR", "CLICK", "CLIMB", "CLOCK", "CLOSE", "CLOUD", "COACH", "COAST", "COULD", "COUNT",
            "COURT", "COVER", "CRAFT", "CRASH", "CRAZY", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN",
            "CRUDE", "CURVE", "CYCLE", "DAILY", "DANCE", "DATED", "DEALT", "DEATH", "DEBUT", "DELAY",
            "DEPTH", "DOING", "DOUBT", "DOZEN", "DRAFT", "DRAMA", "DRANK", "DREAM", "DRESS", "DRILL",
            "DRINK", "DRIVE", "DROVE", "DYING", "EAGER", "EARLY", "EARTH", "EIGHT", "ELITE", "EMPTY",
            "ENEMY", "ENJOY", "ENTER", "ENTRY", "EQUAL", "ERROR", "EVENT", "EVERY", "EXACT", "EXIST",
            "EXTRA", "FAITH", "FALSE", "FAULT", "FIBER", "FIELD", "FIFTH", "FIFTY", "FIGHT", "FINAL",
            "FIRST", "FIXED", "FLASH", "FLEET", "FLOOR", "FLUID", "FOCUS", "FORCE", "FORTH", "FORTY",
            "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH", "FRONT", "FRUIT", "FULLY", "FUNNY",
            "GIANT", "GIVEN", "GLASS", "GLOBE", "GOING", "GRACE", "GRADE", "GRAND", "GRANT", "GRASS",
            "GRAVE", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN", "GUARD", "GUESS", "GUEST", "GUIDE",
            "HAPPY", "HARRY", "HEART", "HEAVY", "HELLO", "HENCE", "HENRY", "HORSE", "HOTEL", "HOUSE",
            "HUMAN", "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "ISSUE", "JAPAN", "JIMMY", "JOINT",
            "JONES", "JUDGE", "KNOWN", "LABEL", "LARGE", "LASER", "LATER", "LAUGH", "LAYER", "LEARN",
            "LEASE", "LEAST", "LEAVE", "LEGAL", "LEVEL", "LEWIS", "LIGHT", "LIMIT", "LINKS", "LIVES",
            "LOCAL", "LOOSE", "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC", "MAJOR", "MAKER", "MARCH",
            "MARIA", "MATCH", "MAYBE", "MAYOR", "MEANT", "MEDIA", "METAL", "MIGHT", "MINOR", "MINUS",
            "MIXED", "MODEL", "MONEY", "MONTH", "MORAL", "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVED",
            "MOVIE", "MUSIC", "NEEDS", "NEVER", "NEWLY", "NIGHT", "NOISE", "NORTH", "NOTED", "NOVEL",
            "NURSE", "OCCUR", "OCEAN", "OFFER", "OFTEN", "ORDER", "OTHER", "OUGHT", "PAINT", "PANEL",
            "PAPER", "PARTY", "PEACE", "PETER", "PHASE", "PHONE", "PHOTO", "PIANO", "PIECE", "PILOT",
            "PITCH", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", "POINT", "POUND", "POWER", "PRESS",
            "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF", "PROUD", "PROVE", "QUEEN",
            "QUICK", "QUIET", "QUITE", "RADIO", "RAISE", "RANGE", "RAPID", "RATIO", "REACH", "READY",
            "REALM", "REBEL", "REFER", "RELAX", "REPLY", "RIGHT", "RIGID", "RIVER", "ROBOT", "ROGER",
            "ROMAN", "ROUGH", "ROUND", "ROUTE", "ROYAL", "RURAL", "SCALE", "SCENE", "SCOPE", "SCORE",
            "SENSE", "SERVE", "SETUP", "SEVEN", "SHALL", "SHAPE", "SHARE", "SHARP", "SHEET", "SHELF",
            "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHOOT", "SHORT", "SHOWN", "SIGHT", "SINCE",
            "SIXTH", "SIXTY", "SIZED", "SKILL", "SLEEP", "SLIDE", "SMALL", "SMART", "SMILE", "SMITH",
            "SMOKE", "SOLID", "SOLVE", "SORRY", "SOUND", "SOUTH", "SPACE", "SPARE", "SPEAK", "SPEED",
            "SPEND", "SPENT", "SPLIT", "SPOKE", "SPORT", "STAFF", "STAGE", "STAKE", "STAND", "START",
            "STATE", "STEAM", "STEEL", "STICK", "STILL", "STOCK", "STONE", "STOOD", "STORE", "STORM",
            "STORY", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWEET",
            "TABLE", "TAKEN", "TASTE", "TAXES", "TEACH", "TEAMS", "TEETH", "TERRY", "TEXAS", "THANK",
            "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK", "THING", "THINK", "THIRD", "THOSE",
            "THREE", "THREW", "THROW", "THUMB", "TIGER", "TIGHT", "TIMER", "TIRED", "TITLE", "TODAY",
            "TOPIC", "TOTAL", "TOUCH", "TOUGH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT", "TREND",
            "TRIAL", "TRIBE", "TRICK", "TRIED", "TRIES", "TRUCK", "TRULY", "TRUNK", "TRUST", "TRUTH",
            "TWICE", "UNCLE", "UNDER", "UNDUE", "UNION", "UNITY", "UNTIL", "UPPER", "UPSET", "URBAN",
            "USAGE", "USUAL", "VALID", "VALUE", "VIDEO", "VIRUS", "VISIT", "VITAL", "VOCAL", "VOICE",
            "WASTE", "WATCH", "WATER", "WAVES", "WHEEL", "WHERE", "WHICH", "WHILE", "WHITE", "WHOLE",
            "WHOSE", "WOMAN", "WOMEN", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WRITE",
            "WRONG", "WROTE", "YIELD", "YOUNG", "YOUTH"
        ];

        // Allowed words (valid guesses) - truncated for space, include your full list
        const fallbackAllowedWords = [
            "ABLED", "ABODE", "ABORT", "ACRES", "ACTED", "ADDED", "ADMIN", "AIMED", "AIRED", "ASKED",
            "ATLAS", "AUDIO", "AUDIT", "BADGE", "BALLS", "BANDS", "BANKS", "BASED", "BASIN", "BATCH"
            // ... include your full allowed words list here
        ];

        // Hidden input for mobile keyboard access
        let hiddenInput;

        // DOM ready check
        function initializeGame() {
            // Rules toggle functionality
            const toggleBtn = document.getElementById('toggleBtn');
            const rulesContent = document.getElementById('rulesContent');

            if (toggleBtn && rulesContent) {
                toggleBtn.addEventListener('click', function() {
                    if (rulesContent.classList.contains('hidden')) {
                        rulesContent.classList.remove('hidden');
                        toggleBtn.textContent = 'Hide Rules';
                    } else {
                        rulesContent.classList.add('hidden');
                        toggleBtn.textContent = 'Show Rules';
                    }
                });
            }

            // Initialize word lists
            allowedWords = [...fallbackAllowedWords, ...fallbackAnswerWords];
            answerWords = fallbackAnswerWords;
            realWords = [...fallbackAllowedWords, ...fallbackAnswerWords];
            
            // Remove duplicates
            realWords = [...new Set(realWords)];
            answerWords = [...new Set(answerWords)];
            allowedWords = [...new Set(allowedWords)];
            
            secretWord = answerWords[Math.floor(Math.random() * answerWords.length)];
            console.log("Secret word:", secretWord);

            // Create game board
            createBoard();
            updateActiveTileIndicator();
            
            // Create hidden input for mobile
            createHiddenInput();
        }

        // Function to update the active tile indicator
        function updateActiveTileIndicator() {
            document.querySelectorAll('.active-tile').forEach(tile => {
                tile.classList.remove('active-tile');
            });
            
            if (currentRow <= 6 && currentTileIndex < 5) {
                let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
                if (currentTile) {
                    currentTile.classList.add('active-tile');
                }
            }
        }

        function createBoard(){
            const gameGrid = document.getElementById('gameGrid');
            
            for (let row = 1; row <= 6; row++) {
                let rowDiv = document.createElement("div");
                rowDiv.className = "rows";
                rowDiv.id = `row${row}`;
                gameGrid.appendChild(rowDiv);
                
                for (let i = 0; i < 5; i++){
                    let newBox = document.createElement("div");
                    newBox.className = getRowClass(row);
                    newBox.id = `${row}${i}`;
                    newBox.textContent = "";
                    rowDiv.appendChild(newBox);
                }
            }
        }

        function getRowClass(row) {
            const classes = ['ten', 'twenty', 'thirty', 'fourty', 'fitty', 'sixty'];
            return classes[row - 1] || 'ten';
        }

        // Create simple hidden input for mobile keyboard
        function createHiddenInput() {
            hiddenInput = document.createElement('input');
            hiddenInput.type = 'text';
            hiddenInput.style.position = 'absolute';
            hiddenInput.style.left = '-9999px';
            hiddenInput.style.opacity = '0';
            hiddenInput.setAttribute('autocomplete', 'off');
            hiddenInput.setAttribute('autocorrect', 'off');
            hiddenInput.setAttribute('autocapitalize', 'characters');
            hiddenInput.setAttribute('spellcheck', 'false');
            
            document.body.appendChild(hiddenInput);
            
            hiddenInput.addEventListener('input', function(e) {
                const letter = e.target.value.slice(-1).toUpperCase();
                if (letter && /[A-Z]/.test(letter)) {
                    handleLetterInput(letter);
                }
                // Clear the input to allow continuous typing
                setTimeout(() => hiddenInput.value = '', 10);
            });
            
            hiddenInput.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace') {
                    handleBackspace();
                } else if (e.key === 'Enter') {
                    handleEnter();
                }
            });
        }

        // Game input handlers
        function handleLetterInput(letter) {
            if (currentTileIndex < 5 && currentRow <= 6) {
                updateActiveTile(letter);
                messageTag.textContent = "";
                if (currentTileIndex == 5 && currentRow <= 6) {
                    messageTag.textContent = "Enter Key to submit attempt";
                }
            }
        }

        function handleBackspace() {
            if (currentTileIndex > 0) {
                currentTileIndex--;
                let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
                currentTile.textContent = "";
                board[currentRow - 1][currentTileIndex] = "";
                messageTag.textContent = "";
                updateActiveTileIndicator();
            }
        }

        function handleEnter() {
            if (currentTileIndex == 5 && currentRow <= 6) {
                let lineInput = (board[currentRow - 1].join("")).toLowerCase();
                
                if (realWords.includes(lineInput.toUpperCase()) == true) {
                    currentRow++;
                    currentTileIndex = 0;
                    messageTag.textContent = "";
                    attempts++;
                    gameLogic();
                    updateActiveTileIndicator();
                } else {
                    messageTag.textContent = "Please enter a real word";
                }
            }
        }

        function updateActiveTile(letter) {
            let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
            if (currentTileIndex < 5) {
                currentTile.textContent = letter;
                currentTileIndex++;
                board[currentRow - 1][currentTileIndex - 1] = letter;
                updateActiveTileIndicator();
            }
        }

        function gameLogic(){
            let result = [];
            let secretArr = secretWord.split("");
            let guessArr = board[currentRow - 2].slice();
            let secretCopy = secretWord.split("");
            
            // First pass: Mark exact matches (green)
            for(let i = 0; i < 5; i++) {
                if (guessArr[i] === secretArr[i]) {
                    result[i] = "green";
                    secretCopy[i] = null;
                } else {
                    result[i] = null;
                }
            }
            
            // Second pass: Mark letters in wrong position (yellow) and not in word (gray)
            for(let i = 0; i < 5; i++) {
                if (result[i] === null) {
                    let letterIndex = secretCopy.indexOf(guessArr[i]);
                    if (letterIndex !== -1) {
                        result[i] = "yellow";
                        secretCopy[letterIndex] = null;
                    } else {
                        result[i] = "gray";
                    }
                }
            }

            // Apply colors to the tiles
            for (let i = 0; i < 5; i++) {
                let currentTile = document.getElementById(`${currentRow - 1}${i}`);
                currentTile.classList.add(result[i]);
            }

            // Check for win condition
            let guessWord = board[currentRow - 2].join("");
            if (guessWord === secretWord) {
                messageTag.textContent = "You guessed the correct word!";
                currentRow = currentRow + 10;
                updateActiveTileIndicator();
            } else if (currentRow > 6) {
                messageTag.textContent = `Game over! The word was ${secretWord}`;
                updateActiveTileIndicator();
            }

            return result;
        }

        // Desktop keyboard inputs
        document.addEventListener("keydown", function (event) {
            // Don't interfere if typing in the hidden input
            if (event.target === hiddenInput) return;
            
            if (event.keyCode == 8) {
                handleBackspace();
            } else if (event.keyCode >= 65 && event.keyCode <= 90) {
                let letter = event.key.toUpperCase();
                handleLetterInput(letter);
            } else if (event.keyCode == 13) {
                handleEnter();
            }
        });

        // Simple touch/click handler to focus hidden input (opens keyboard on mobile)
        document.addEventListener('touchstart', function() {
            if (hiddenInput && currentRow <= 6) {
                hiddenInput.focus();
            }
        });

        document.addEventListener('click', function() {
            if (hiddenInput && currentRow <= 6) {
                hiddenInput.focus();
            }
        });

        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeGame);
        } else {
            initializeGame();
        }






//q = 81
//w = 87
//e = 69
//r = 82
//t = 84
//y = 89
//u = 85
//i = 73
//o = 79
//p = 80
//a = 65
//s = 83
//d = 68
//f = 70
//g = 71
//h = 72
//j = 74
//k = 75
//l = 76
//z = 90
//x = 88
//c = 67
//v = 86
//b = 66
//n = 78
//m = 77