const quote = document.getElementById("quote")
const author = document.getElementById("author")
async function get_quote() {

    const respones = await fetch("https://api.quotable.io/random")
    const data = await respones.json()
    console.log(data);
    // console.log(data.author);
    // console.log(data.content);
    quote.innerText = `"${data.content}"`
    author.innerText = `~ ${data.author}`
}