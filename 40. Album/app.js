function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "First Album"));
console.log(make_album("Artist Two", "Second Album"));
console.log(make_album("Artist Three", "Third Album", 16));
