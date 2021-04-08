var CapitalizeLeter = function(string){
    // string to array and split & trim 
    var strings = string.trim().split(' ');
    // filter item = ""
        stringsArray = strings.filter(function(item){
            return item !== ""})
    // catch first litter
    stringsArrayCapitalizeLeter = stringsArray.map( item => {
    return theWord =   item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); 
    
    })  
    return stringsArrayCapitalizeLeter.join(' ')
}

var text = 'Lorem              ipsum                dolor sit amet consectetur           adipisicing elit.               Possimus                 ad veritatis             voluptates             perferendis              minus atque         repellendus                  eius ex            officia optio          omnis nam qui                  error amet ab sit,               aspernatur deserunt?            Aliquam!'

console.log(CapitalizeLeter(text)) // = > Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Possimus Ad Veritatis Voluptates Perferendis Minus Atque Repellendus Eius Ex Officia Optio Omnis Nam Qui Error Amet Ab Sit, Aspernatur Deserunt? Aliquam!