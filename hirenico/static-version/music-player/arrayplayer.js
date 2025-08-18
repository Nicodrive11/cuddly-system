let audioElement = document.querySelector("#audioPlayer");
let time = document.querySelector("#time");
let songCollection = document.querySelector("#song-collection");


const songList = [{
    "song": "Song: ALC",
    "artist": "Artist: Of Space and Time",
    "album": "Album: Wish I was here",
    "length": "1:36",
    "file": "ALC.m4a"
}, {
    "song": "Song: Seinfeld",
    "artist": "Artist: Of Space and Time",
    "album": "Album: Wish I was here",
    "length": "2:22",
    "file": "Seinfeld slow.m4a"
}, {
    "song": "Song: Space Age",
    "artist": "Artist: Of Space and Time",
    "album": "Album: Wish I was here",
    "length": "3:13",
    "file": "space age full.m4a"
}, {
    "song": "Song: Livingroom Sample",
    "artist": "Artist: Of Space and Time",
    "album": "Album: Wish I was here",
    "length": "0:18",
    "file": "livingroom Sample.m4a"
}, {
    "song": "Song: Sample 2",
    "artist": "Artist: Of Space and Time",
    "album": "Album: Wish I was here",
    "length": "0:28",
    "file": "Sample 2.m4a"
}];

for (let i = 0; i < songList.length; i++){
    let listItem = document.createElement("button");
    // listItem.textContent = "Song: " + songList[i].song + " Artist: " + songList[i].artist + " Album: " + songList[i].album + " (" + songList[i].length + ")";
    // listItem.textContent = "Song: " + songList[i].song + " . " + songList[i].artist + " . " + songList[i].album + " (" + songList[i].length + ")";
    listItem.textContent = songList[i].song + " " + songList[i].artist + " " + songList[i].album + " (" + songList[i].length + ")";
    listItem.classList.add("song");
    listItem.setAttribute("data-index", i);
    songCollection.appendChild(listItem);
}

loadSong(0)

function loadSong(index){
    let selectedSong = songList [index];
    audioElement.src = selectedSong.file
    songInfo.textContent = selectedSong.song
    artistInfo.textContent = selectedSong.artist
    albumInfo.textContent = selectedSong.album
    endTime.textContent = selectedSong.length
    // audioElement.play();
}



songCollection.addEventListener("click", function(event){
    if (event.target && event.target.matches("button.song")){
        let index = event.target.getAttribute("data-index")
        loadSong(index)
        audioElement.play();
        play.textContent = "\u{23F8}"
        document.getElementById("play").value = 1;
    };
});


let play = document.querySelector("#play");
let backButton = document.querySelector("#back");
let playButton = document.querySelector("#play");
let forwardButton = document.querySelector("#forward");
let volumeUp = document.querySelector("#volume_up");
let volumeDown = document.querySelector("#vDown");

playButton.addEventListener("click", function () {
    // if (trackNumber != 0){
        if (document.getElementById("play").value == 0){
            play.textContent = "\u{23F8}"
            document.getElementById("play").value = 1;
            console.log("play clicked")
            // if (trackNumber == 1){
                audioElement.play();
            // }
            // else if (trackNumber == 2){
            //     audioElement2.play();
            // }
            // else if (trackNumber == 3){
            //     audioElement3.play();
            // }
            // else if (trackNumber == 4){
            //     audioElement4.play();
            // }
            // else if (trackNumber == 5){
            //     audioElement5.play();
            // }

        }
        else if (document.getElementById("play").value == 1){
            play.textContent = "\u{25B6}"
            document.getElementById("play").value = 0;
            console.log("pause clicked")
            // if (trackNumber == 1){
                audioElement.pause();
            // }
            // else if (trackNumber == 2){
            //     audioElement2.pause();
            // }
            // else if (trackNumber == 3){
            //     audioElement3.pause();
            // }
            // else if (trackNumber == 4){
            //     audioElement4.pause();
            // }
            // else if (trackNumber == 5){
            //     audioElement5.pause();
            // }
        }
    // }
// U+23F8 \u{23F8}	pause symbol
// U+25B6 \u{25B6}	play symbol
});

setInterval(function () {
    let timer = audioElement.currentTime;
    let min = Math.floor(timer / 60);
    let sec = timer % 60;
    time.textContent  =  Math.floor(min) + ":" + Math.floor(sec)
    // endTime.textContent  = (1 - Math.floor(min))+ ":" + (36 - Math.floor(sec))
    document.getElementById("song_time").value = (Math.floor(sec) + (Math.floor(min) * 60)) / audioElement.duration;
}, 100 );

audioElement.muted = false; // Unmute
audioElement.volume = 0.5;

//volume down logic
volumeDown.addEventListener("click", function () {
    if (document.getElementById("volume").value >= 2){
        console.log("volume down clicked")
        document.getElementById("volume").value -= 1;
        volumeStatus.textContent = ""
        volume_up.textContent = "\u{1F50A}"
        audioElement.volume -= 0.1;
        console.log(audioElement.volume)
    }
    else if (document.getElementById("volume").value == 1) {
        document.getElementById("volume").value -= 1;
        console.log("min")
        vDown.textContent = "\u{1f507}"
        audioElement.volume -= 0.1;
        volumeStatus.textContent = "Mute"
        audioElement.muted = true; // Mute
    }
    //U+1F507 mute symbol	
});

// volume up logic
volumeUp.addEventListener("click", function () {
    if (document.getElementById("volume").value <= 8){
        document.getElementById("volume").value += 1;
        console.log("volume up clicked")
        volumeStatus.textContent = ""
        vDown.textContent = "\u{1F509}"
        audioElement.muted = false;
        audioElement.volume += 0.1;

        console.log(audioElement.volume)
    }
    else if (document.getElementById("volume").value == 9) {
        document.getElementById("volume").value += 1;
        console.log("max")
        audioElement.volume += 0.1;
        volumeStatus.textContent = "Max Volume"
        volume_up.textContent = "\u{1F4E2}"
    }
});

let currentIndex = 0;

// back logic
backButton.addEventListener("click", function (event) {
    currentIndex = (currentIndex - 1 + songList.length) % songList.length
    loadSong(currentIndex)
    audioElement.play()
    play.textContent = "\u{23F8}"
    document.getElementById("play").value = 1;
});

// forward logic
forwardButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1 + songList.length) % songList.length
    loadSong(currentIndex)
    audioElement.play()
    play.textContent = "\u{23F8}"
    document.getElementById("play").value = 1;
});

//Auto Next Track
audioElement.addEventListener("ended", function (){
    currentIndex = (currentIndex + 1 + songList.length) % songList.length
    loadSong(currentIndex)
    audioElement.play()
    play.textContent = "\u{23F8}"
    document.getElementById("play").value = 1;
});