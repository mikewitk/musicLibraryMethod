var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
  },
  printTracks: function() {
    var tracks2 = this.tracks;

    for(var y in tracks2){

      var tPrint = tracks2[y];
      console.log(tPrint.id + ": " + tPrint.name + "by " + tPrint.artist + " (" + tPrint.album + ")");
    }
  },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }


  },
  printPlaylists: function() {
  //console.log(this)
  var playlists2 = this.playlists;

for(var x in playlists2){

    var pPrint = playlists2[x];
    var trackLength = Object.keys(pPrint.tracks).length;
    console.log(pPrint.id + ": " + pPrint.name + " - " + trackLength + " tracks");
}
},
  printPlaylist: function(playlistId){
// this code prints the first playlist
   var playlists2 = this.playlists;

    var pPrint = playlists2[playlistId];
    var trackLength = Object.keys(pPrint.tracks).length;
    console.log(pPrint.id + ": " + pPrint.name + " - " + trackLength + " tracks");

// this code prints the tracks
  var tracks2 = this.tracks;
  var playlistPs = this.playlists;
  var pp = playlistPs.p01;
  var pTracks = pp.tracks;

for(var i = 0; i < pTracks.length; i++){
if (pTracks[i] in tracks2) {
  // console.log(pTracks[i]);
  // console.log(tracks2[pTracks[i]]);
  var newPtrack = tracks2[pTracks[i]];
    console.log(newPtrack.id + ": " + newPtrack.name + "by " + newPtrack.artist + " (" + newPtrack.album + ")");
  }
  }


},
addTrackToPlaylist: function(trackId, playlistId){
   var listOfPlaylist = this.playlists;
   var idOfPlaylist = listOfPlaylist[playlistId];
  idOfPlaylist.tracks.push(trackId);
  console.log(idOfPlaylist);


},
addTrack: function(name, artist, album){
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var newId = uid();
this["tracks"][newId] = {};
var partialLibrary = {};
partialLibrary.id = newId;
partialLibrary.name = name;
partialLibrary.artist = artist;
partialLibrary.album = album;
var correctPlace =this["tracks"][newId];
Object.assign(correctPlace,partialLibrary);
},
addPlaylist: function(name){
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var newId = uid();
this["playlists"][newId] = {};
var partialLibrary = {};
partialLibrary.id = newId;
partialLibrary.name = name;
partialLibrary.tracks = [];
var correctPlace =this["playlists"][newId];
Object.assign(correctPlace,partialLibrary);
}
 }


library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t04","p02");
library.addTrack("bla","bla","bla");
library.addPlaylist("bla");