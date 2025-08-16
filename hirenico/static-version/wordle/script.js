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
let mobileInput = null;

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

// Allowed words (valid guesses)
const fallbackAllowedWords = [
    "ABLED", "ABODE", "ABORT", "ACRES", "ACTED", "ADDED", "ADMIN", "AIMED", "AIRED", "ASKED",
    "ATLAS", "AUDIO", "AUDIT", "BADGE", "BALLS", "BANDS", "BANKS", "BASED", "BASIN", "BATCH",
    "BEADS", "BEANS", "BEARD", "BEARS", "BEAST", "BEATS", "BELLY", "BIKES", "BILLS", "BIRDS",
    "BLADE", "BLAST", "BLOWN", "BLUES", "BOATS", "BOBBY", "BONDS", "BONES", "BOOKS", "BOOTS",
    "BOUND", "BOXES", "BRAKE", "BRASS", "BRICK", "BRIDE", "BRUSH", "BUNCH", "BUYER", "CABLE",
    "CACHE", "CALLS", "CAMPS", "CANAL", "CANDY", "CARDS", "CARRY", "CASES", "CATCH", "CAVES",
    "CHAOS", "CHART", "CHIPS", "CLOTH", "CLUBS", "CODES", "COINS", "COLOR", "COMES", "CORAL",
    "CORPS", "COSTS", "COUNT", "CRACK", "CROPS", "CROWD", "DAILY", "DANCE", "DATED", "DEALS",
    "DEALT", "DEBUT", "DEPTH", "DIRTY", "DISCO", "DOING", "DOORS", "DOZEN", "DRANK", "DRESS",
    "DRILL", "DROVE", "DRUMS", "EDGES", "ELDER", "ELITE", "ENDED", "ENJOY", "ENTRY", "EVENT",
    "EXACT", "EXIST", "EXTRA", "FACED", "FACTS", "FAILS", "FAIRY", "FANCY", "FARMS", "FATAL",
    "FENCE", "FIBER", "FILED", "FILMS", "FINDS", "FIXED", "FLAGS", "FLAME", "FLASH", "FLEET",
    "FLESH", "FLOWS", "FLUID", "FOLKS", "FORMS", "FORTY", "FORUM", "FRAME", "FRANK", "FRESH",
    "FRONT", "FULLY", "FUNDS", "FUNNY", "GAMES", "GATES", "GIANT", "GIFTS", "GIRLS", "GIVEN",
    "GLOBE", "GLORY", "GOALS", "GOING", "GOODS", "GRACE", "GRADE", "GRAIN", "GRAND", "GRANT",
    "GRASS", "GRAVE", "GREAT", "GREEN", "GROSS", "GROUP", "GROWN", "GUARD", "GUESS", "GUEST",
    "GUIDE", "HANDS", "HAPPY", "HARSH", "HEART", "HEAVY", "HELLO", "HERBS", "HILLS", "HIRED",
    "HORSE", "HOTEL", "HOURS", "HOUSE", "HUMAN", "IDEAL", "IDEAS", "IMAGE", "INDEX", "INNER",
    "INPUT", "ISSUE", "ITEMS", "JAPAN", "JOKES", "JOINT", "JUDGE", "KEEPS", "KINDS", "KNIFE",
    "KNOWN", "LABEL", "LABOR", "LACKS", "LANDS", "LARGE", "LASER", "LATER", "LAUGH", "LAYER",
    "LEADS", "LEARN", "LEASE", "LEAST", "LEAVE", "LEGAL", "LEVEL", "LIGHT", "LIKED", "LIKES",
    "LIMIT", "LINED", "LINES", "LINKS", "LISTS", "LIVED", "LIVER", "LIVES", "LOANS", "LOCAL",
    "LOOKS", "LOOSE", "LOVED", "LOVER", "LOVES", "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC",
    "MAJOR", "MAKER", "MAKES", "MARCH", "MARIA", "MARKS", "MATCH", "MAYBE", "MAYOR", "MEALS",
    "MEANS", "MEANT", "MEDIA", "MEETS", "METAL", "METER", "MIGHT", "MILES", "MINDS", "MINOR",
    "MINUS", "MIXED", "MODEL", "MODES", "MONEY", "MONTH", "MORAL", "MOTOR", "MOUNT", "MOUSE",
    "MOUTH", "MOVED", "MOVES", "MOVIE", "MUSIC", "NAMED", "NAMES", "NEEDS", "NEVER", "NEWLY",
    "NIGHT", "NODES", "NOISE", "NORTH", "NOTED", "NOTES", "NOVEL", "NURSE", "OCCUR", "OCEAN",
    "OFFER", "OFTEN", "OLDER", "OPENS", "ORDER", "OTHER", "OUGHT", "OWNED", "OWNER", "PAGES",
    "PAINT", "PAIRS", "PANEL", "PAPER", "PARKS", "PARTS", "PARTY", "PATHS", "PEACE", "PETER",
    "PHASE", "PHONE", "PHOTO", "PIANO", "PICKS", "PIECE", "PILOT", "PIPES", "PITCH", "PLACE",
    "PLAIN", "PLANE", "PLANS", "PLANT", "PLATE", "PLAYS", "PLAZA", "PLOTS", "POEMS", "POINT",
    "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIOR", "PRIZE", "PROOF",
    "PROUD", "PROVE", "PULLS", "QUEEN", "QUICK", "QUIET", "QUITE", "RADIO", "RAISE", "RANGE",
    "RAPID", "RATES", "RATIO", "REACH", "READS", "READY", "REALM", "REBEL", "REFER", "RELAX",
    "REPLY", "RIDES", "RIGHT", "RIGID", "RINGS", "RISES", "RISKS", "RIVER", "ROADS", "ROBOT",
    "ROCKS", "ROLES", "ROMAN", "ROOMS", "ROOTS", "ROUGH", "ROUND", "ROUTE", "ROYAL", "RULES",
    "RURAL", "SAFER", "SALES", "SCALE", "SCENE", "SCOPE", "SCORE", "SEATS", "SEEKS", "SEEMS",
    "SELLS", "SENSE", "SERVE", "SETUP", "SEVEN", "SHALL", "SHAPE", "SHARE", "SHARP", "SHEET",
    "SHELF", "SHELL", "SHIFT", "SHINE", "SHIPS", "SHIRT", "SHOCK", "SHOES", "SHOOT", "SHOPS",
    "SHORT", "SHOWN", "SHOWS", "SIDES", "SIGHT", "SIGNS", "SILLY", "SINCE", "SITES", "SIXTH",
    "SIXTY", "SIZED", "SIZES", "SKILL", "SLEEP", "SLIDE", "SMALL", "SMART", "SMILE", "SMOKE",
    "SNAKE", "SOLID", "SOLVE", "SONGS", "SORRY", "SORTS", "SOUND", "SOUTH", "SPACE", "SPARE",
    "SPEAK", "SPEED", "SPEND", "SPENT", "SPLIT", "SPOKE", "SPORT", "SPOTS", "STAFF", "STAGE",
    "STAKE", "STAND", "STARS", "START", "STATE", "STAYS", "STEAM", "STEEL", "STEPS", "STICK",
    "STILL", "STOCK", "STONE", "STOOD", "STOPS", "STORE", "STORM", "STORY", "STRIP", "STUCK",
    "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", "SUPER", "SWEET", "SWING", "TABLE", "TAKES",
    "TAKEN", "TALKS", "TANKS", "TASTE", "TAXES", "TEACH", "TEAMS", "TEARS", "TEETH", "TELLS",
    "TERMS", "TERRY", "TESTS", "TEXAS", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE",
    "THICK", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", "THUMB", "TIGER",
    "TIGHT", "TILES", "TIMER", "TIMES", "TIRED", "TITLE", "TODAY", "TOKEN", "TOPIC", "TOTAL",
    "TOUCH", "TOUGH", "TOWER", "TOWNS", "TRACK", "TRADE", "TRAIN", "TREAT", "TREES", "TREND",
    "TRIAL", "TRIBE", "TRICK", "TRIED", "TRIES", "TRIPS", "TRUCK", "TRULY", "TRUNK", "TRUST",
    "TRUTH", "TUBES", "TWICE", "TYPES", "UNCLE", "UNDER", "UNDUE", "UNION", "UNITY", "UNTIL",
    "UPPER", "UPSET", "URBAN", "URGED", "USAGE", "USERS", "USUAL", "VALID", "VALUE", "VIDEO",
    "VIEWS", "VIRUS", "VISIT", "VITAL", "VOCAL", "VOICE", "VOTES", "WAGES", "WALKS", "WALLS",
    "WANTS", "WASTE", "WATCH", "WATER", "WAVES", "WEEKS", "WHEEL", "WHERE", "WHICH", "WHILE",
    "WHITE", "WHOLE", "WHOSE", "WINDS", "WINES", "WINGS", "WIRES", "WOMAN", "WOMEN", "WOODS",
    "WORDS", "WORKS", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WRITE", "WRONG",
    "WROTE", "YARDS", "YEARS", "YIELD", "YOUNG", "YOUTH", "ZONES"
];

// Function to update the active tile indicator
function updateActiveTileIndicator() {
    // Remove active class from all tiles
    document.querySelectorAll('.active-tile').forEach(tile => {
        tile.classList.remove('active-tile');
    });
    
    // Add active class to current tile if game is still active
    if (currentRow <= 6 && currentTileIndex < 5) {
        let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
        if (currentTile) {
            currentTile.classList.add('active-tile');
        }
    }
}

// Initialize word lists
function initializeWordLists() {
    allowedWords = fallbackAllowedWords;
    answerWords = fallbackAnswerWords;
    realWords = [...fallbackAllowedWords, ...fallbackAnswerWords];
    
    // Remove duplicates
    realWords = [...new Set(realWords)];
    answerWords = [...new Set(answerWords)];
    allowedWords = [...new Set(allowedWords)];
    
    secretWord = answerWords[Math.floor(Math.random() * answerWords.length)];
    console.log("Secret word:", secretWord);
}

// Initialize immediately
initializeWordLists();

function rowOne(){ //creates row 1
    let row1 = document.createElement("div");
    gameGrid.appendChild(row1);
    row1.className = "rows";
    row1.id = "row1";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "ten";
        newBox.id = `1${i}`;
        newBox.textContent = ""
        row1.appendChild(newBox);
    }
}

function rowTwo(){ //creates row 2
    let row2 = document.createElement("div");
    gameGrid.appendChild(row2);
    row2.className = "rows";
    row2.id = "row2";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "twenty";
        newBox.id = `2${i}`;
        newBox.textContent = ""
        row2.appendChild(newBox);
    }
}

function rowThree(){ //creates row 3
    let row3 = document.createElement("div");
    gameGrid.appendChild(row3);
    row3.className = "rows";
    row3.id = "row3";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "thirty";
        newBox.id = `3${i}`;
        newBox.textContent = ""
        row3.appendChild(newBox);
    }
}

function rowFour(){ //creates row 4
    let row4 = document.createElement("div");
    gameGrid.appendChild(row4);
    row4.className = "rows";
    row4.id = "row4";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "fourty";
        newBox.id = `4${i}`;
        newBox.textContent = ""
        row4.appendChild(newBox);
    }
}

function rowFive(){ //creates row 5
    let row5 = document.createElement("div");
    gameGrid.appendChild(row5);
    row5.className = "rows";
    row5.id = "row5";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "fitty";
        newBox.id = `5${i}`;
        newBox.textContent = ""
        row5.appendChild(newBox);
    }
}

function rowSix(){ //creates row 6
    let row6 = document.createElement("div");
    gameGrid.appendChild(row6);
    row6.className = "rows";
    row6.id = "row6";
    for (let i = 0; i < 5; i++){
        let newBox = document.createElement("div");
        newBox.className = "sixty";
        newBox.id = `6${i}`;
        newBox.textContent = ""
        row6.appendChild(newBox);
    }
}

function createBoard(){
    rowOne()
    rowTwo()
    rowThree()
    rowFour()
    rowFive()
    rowSix()
}

// Detect mobile devices
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform));
}

// Create persistent mobile input for reliable keyboard access
function createMobileInput() {
    if (mobileInput) return; // Already exists
    
    mobileInput = document.createElement('input');
    mobileInput.type = 'text';
    mobileInput.id = 'mobile-input';
    mobileInput.style.position = 'absolute';
    mobileInput.style.top = '-9999px';
    mobileInput.style.left = '-9999px';
    mobileInput.style.opacity = '0';
    mobileInput.style.pointerEvents = 'none';
    mobileInput.style.width = '1px';
    mobileInput.style.height = '1px';
    mobileInput.setAttribute('autocomplete', 'off');
    mobileInput.setAttribute('autocorrect', 'off');
    mobileInput.setAttribute('autocapitalize', 'characters');
    mobileInput.setAttribute('spellcheck', 'false');
    mobileInput.setAttribute('maxlength', '1');
    
    document.body.appendChild(mobileInput);
    
    // Handle input events
    mobileInput.addEventListener('input', function(e) {
        const letter = e.target.value.toUpperCase();
        if (letter && /[A-Z]/.test(letter)) {
            handleLetterInput(letter);
        }
        // Clear the input for next character
        setTimeout(() => {
            if (mobileInput) mobileInput.value = '';
        }, 10);
    });
    
    // Handle backspace and enter through keydown on mobile input
    mobileInput.addEventListener('keydown', function(e) {
        e.stopPropagation(); // Prevent duplicate handling
        
        if (e.key === 'Backspace') {
            handleBackspace();
        } else if (e.key === 'Enter') {
            handleEnter();
        }
    });
    
    // Keep focus on mobile input
    mobileInput.addEventListener('blur', function() {
        setTimeout(() => {
            if (mobileInput && currentRow <= 6) {
                mobileInput.focus();
            }
        }, 100);
    });
}

// Focus mobile input
function focusMobileInput() {
    if (mobileInput && isMobileDevice()) {
        setTimeout(() => {
            mobileInput.focus();
        }, 100);
    }
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

// Updates DOM and game array after every keyboard input
function updateActiveTile(letter) {
    let currentTile = document.getElementById(`${currentRow}${currentTileIndex}`);
    if (currentTileIndex < 5) {
        currentTile.textContent = letter;
        currentTileIndex++;
        board[currentRow - 1][currentTileIndex - 1] = letter;
        updateActiveTileIndicator();
    }
}

// Game logic
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
        if (result[i] === "green") {
            currentTile.style.backgroundColor = "green";
            currentTile.style.color = "white";
        } else if (result[i] === "yellow") {
            currentTile.style.backgroundColor = "yellow";
            currentTile.style.color = "black";
        } else {
            currentTile.style.backgroundColor = "gray";
            currentTile.style.color = "white";
        }
    }

    // Check for win condition
    let guessWord = board[currentRow - 2].join("");
    if (guessWord === secretWord) {
        messageTag.textContent = "You guessed the correct word!";
        currentRow = currentRow + 10;
        updateActiveTileIndicator();
        if (mobileInput) mobileInput.blur(); // Remove focus when game ends
    } else if (currentRow > 6) {
        messageTag.textContent = `Game over! The word was ${secretWord}`;
        updateActiveTileIndicator();
        if (mobileInput) mobileInput.blur(); // Remove focus when game ends
    }

    return result;
}

// Desktop keyboard inputs
document.addEventListener("keydown", function (event) {
    // Skip if the event came from mobile input to prevent duplicates
    if (event.target === mobileInput) return;
    
    if (event.keyCode == 8) {
        // backspace
        handleBackspace();
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        // letters (A-Z)
        let letter = event.key.toUpperCase();
        handleLetterInput(letter);
    } else if (event.keyCode == 13) {
        // Enter key
        handleEnter();
    }
});

// Initialize the game
createBoard();
updateActiveTileIndicator();

// Setup mobile support
if (isMobileDevice()) {
    createMobileInput();
    
    // Focus on mobile input when page loads
    document.addEventListener('DOMContentLoaded', function() {
        focusMobileInput();
    });
    
    // Focus on mobile input when user interacts with game
    document.addEventListener('click', function(event) {
        const gameGrid = document.getElementById('gameGrid');
        if (gameGrid && (gameGrid.contains(event.target) || event.target === gameGrid)) {
            focusMobileInput();
        }
    });
    
    document.addEventListener('touchstart', function(event) {
        const gameGrid = document.getElementById('gameGrid');
        if (gameGrid && (gameGrid.contains(event.target) || event.target === gameGrid)) {
            focusMobileInput();
        }
    });
    
    // Auto-focus after a short delay
    setTimeout(focusMobileInput, 500);
}

// Add visual feedback for mobile users
if (isMobileDevice()) {
    // Update the initial message to be more mobile-friendly
    setTimeout(() => {
        if (messageTag.textContent === "Type a 5 letter word and press enter to play") {
            messageTag.textContent = "Tap to start typing - Enter a 5 letter word";
        }
    }, 1000);
}

// Rules toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const rulesToggle = document.getElementById('rulesToggle');
    const rulesContent = document.getElementById('rulesContent');
    
    if (rulesToggle && rulesContent) {
        rulesToggle.addEventListener('click', function() {
            const isHidden = rulesContent.classList.contains('hidden');
            
            if (isHidden) {
                rulesContent.classList.remove('hidden');
                rulesToggle.textContent = 'Hide Rules';
            } else {
                rulesContent.classList.add('hidden');
                rulesToggle.textContent = 'Show Rules';
            }
        });
    }
});




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