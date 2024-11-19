var qoute = [
    {
        qoute: "Be yourself; everyone else is already taken.",
        author: "--Oscar Wilde"
    },

    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "--Albert Einstein"
    },
    {
        qoute: "A room without books is like a body without a soul.",
        author: "--Marcus Tullius Cicero"
    },
    {
        qoute: "Be the change that you wish to see in the world.",
        author: "--Mahatma Gandhi"
    }, {
        qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams",
        author: "--Dr. Seuss"
    },{
        qoute: "A friend is someone who knows all about you and still loves you.",
        author: "--Elbert Hubbard"
    }


]




function showQoutes() {

    var article = Math.floor(Math.random() * qoute.length)



    document.getElementById("quotes").innerHTML = qoute[article].qoute;
    document.getElementById("author").innerHTML = qoute[article].author;

}