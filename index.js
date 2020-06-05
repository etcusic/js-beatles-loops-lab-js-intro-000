// add solution here
var theBeatlesPlay = function(musicians, instruments){
    var array = []
    for (var i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i])
    }
    return array
}
// var instruments = ["John Lennon plays Guitar",
//        "Paul McCartney plays Bass Guitar",
//        "George Harrison plays Lead Guitar",
//        "Ringo Starr plays Drums"]
// return instruments
