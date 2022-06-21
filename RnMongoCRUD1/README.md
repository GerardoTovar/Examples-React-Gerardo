# HOW TO USE
<blockquote>
👉 keep in mind that you have to change the link to your database, and to do the update you have to change the id inside the code
</blockquote>

## Inside booksback

- inside `booksback/app.js` change the following line for your database 

```sh
mongoose.connect('mongodb+srv://book:book@cluster0.haztqcq.mongodb.net/?retryWrites=true&w=majority',(event)=>{
    console.log("Connected to DB");
}).catch(e => {
    console.log(e);
})
```
- ### how to get the link

you can get from mongodb page

<img src="./img/Screenshot1.png" width="400"/>
<img src="./img/Screenshot2.png" width="800"/>

- ### run the database
in the console and inside `booksback/`  run the following command, which is a script inside `package.json`

```sh
npm run dev
```
## Inside RnMongoCRUD
- inside `RnMongoCRUD/src/apis/books.js` change the following line for your ip localhost

```sh
export const addBookAPI = async (book) => {
    const res = await fetch('http://192.168.1.84:4000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    return await res.json();
}
```


