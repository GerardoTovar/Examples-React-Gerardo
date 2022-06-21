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
### Expo

you can get from mongodb page

<img src="./img/Screenshot1.png" width="300"/>
<img src="./img/Screenshot2.png" width="300"/>