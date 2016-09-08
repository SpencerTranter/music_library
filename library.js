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
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists:  function () {
    const playlists = this.playlists;
    for (var list in playlists) {
      var currentList = playlists[list];
      console.log(`${currentList.id}: ${currentList.name} - ${currentList.tracks.length} tracks`);
    }
  },

  printTracks: function () {
    const tracks = this.tracks;
    for (var track in tracks) {
      var currentTrack = tracks[track];
      console.log(`${currentTrack.id}: ${currentTrack.name} by ${currentTrack.artist} (${currentTrack.album})`);
    }
  },

  printPlaylist: function (playlistId) {
    const playlist = this.playlists[playlistId];
    const trackIds = playlist.tracks;
    console.log( `${playlist.id}: ${playlist.name} - ${trackIds.length} tracks`);

    //loop through tracks of the playlist

    //or map the tracks of the playlist, and lookup the track and return the track object

    var objArray = trackIds.map(function(trackId) {
      return this.tracks[trackId];
    }.bind(this))

    objArray.forEach(function(track){
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    })
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    const track = this.tracks[trackId];
    const playlist = this.playlists[playlistId];

    playlist.tracks.push(track.id);
    console.log(playlist);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    const tracks = this.tracks;
    var identity = this.uid();
    tracks[identity]= {id: identity, name: name, artist: artist, album: album};
  },

  addPlaylist: function (name) {
    const playlists = this.playlists
    var identity = this.uid();
    playlists[identity] = {id: identity, name: name};
  },

}

//TESTS
// library.printPlaylists();
//library.printTracks();
//library.printPlaylist("p01");
//library.addTrackToPlaylist("t01", "p02");
// library.addTrack("songggg", "artistttt", "albumnnn");
// library.addPlaylist("myPlaylist");
// console.log(library.tracks);
// console.log(library.playlists)

//const playlistPrint = library.playlists[list].id + ': ' + library.playlists[list].name + ' - ' +
//    library.playlists[list].tracks.length + ' tracks'

//const trackPrint = library.tracks[track].id + ': ' + library.tracks[track].name + ' by ' + library.tracks[track].artist + ' (' +
//    library.tracks[track].album + ')'

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
//   for (var list in library.playlists) {
//     console.log(playlistPrint = library.playlists[list].id + ': ' + library.playlists[list].name + ' - ' +
//     library.playlists[list].tracks.length + ' tracks');
//   }
// }

//library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//   for (var track in library.tracks) {
//     console.log(trackPrint = library.tracks[track].id + ': ' + library.tracks[track].name + ' by ' + library.tracks[track].artist
//     + ' (' + library.tracks[track].album + ')');
//   }
// }

//library.printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {
//   for (var list in this.playlists) {

//     if (library.playlists[list].id === playlistId)  {
//        console.log(playlistPrint = library.playlists[list].id + ': ' + library.playlists[list].name + ' - ' +
//         library.playlists[list].tracks.length + ' tracks');

//       for (var i = 0; i < library.playlists[list].tracks.length; i++) {

//         for (var track in library.tracks) {

//           if (library.playlists[list].tracks[i] === library.tracks[track].id)  {
//             console.log(trackPrint = library.tracks[track].id + ': ' + library.tracks[track].name + ' by ' + library.tracks[track].artist
//             + ' (' + library.tracks[track].album + ')');
//           }
//         }
//       }
//     }
//   }
// }

//library.printPlaylist("p01");

// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//   for (var track in library.tracks) {
//     if(trackId === library.tracks[track].id){
//       for (var list in library.playlists) {
//         if(playlistId === library.playlists[list].id){
//           library.playlists[list].tracks.push(library.tracks[track].id);
//         }
//         console.log(library.playlists[list].tracks);
//       }
//     }
//   }
// }

//library.addTrackToPlaylist("t01", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library

// var addTrack = function (name, artist, album) {
//   var identity = uid();
//   library.tracks[identity] = {};
//   library.tracks[identity].id = identity;
//   library.tracks[identity].name = name;
//   library.tracks[identity].artist = artist;
//   library.tracks[identity].album = album;
//   //console.log(library.tracks[identity]);
// }

//library.addTrack("songggg", "artistttt", "albumnnn");


// adds a playlist to the library

// var addPlaylist = function (name) {
//   var identity = uid();
//   library.playlists[identity] = {};
//   library.playlists[identity].id = identity;
//   library.playlists[identity].name = name;
//   //console.log(library.playlists);
// }

//library.addPlaylist("myPlaylist");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var caseQuery = query.toLowerCase();


}

var name = 'bob'
somestring = `
 there was a cat and he was called ${name}
`

