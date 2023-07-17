var quotes = [{ quote: `"Be yourself; everyone else is already taken."`, author: "--Oscar Wilde" },
{ quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`, author: "--Albert Einstein" },
{ quote: `"A room without books is like a body without a soul."`, author: "--Marcus Tullius Cicero" },
    { quote: `"So many books, so little time."`, author: "--Frank Zappa" }];
    var last;
function printQuote() {   
    var x = Math.floor(Math.random() * quotes.length);
    if (last != x)
    {
        document.getElementById("quote").innerHTML = quotes[x].quote;
        document.getElementById("author").innerHTML = quotes[x].author;
        last = x;
        
    }
    else
    {
        if (x >= quotes.length)
        {
            last = (x - 1);
            document.getElementById("quote").innerHTML = quotes[last].quote;
            document.getElementById("author").innerHTML = quotes[last].author;
        }
        else {
            last = (x + 1);
            document.getElementById("quote").innerHTML = quotes[last].quote;
            document.getElementById("author").innerHTML = quotes[last].author;
        }
        }
}