- cookie basics
- none
- strict
- lax

use library cookie-parser 

```js
import cookieParser from 'cookie-parser';

app.use(cookieParser()); 
app.use(cors({
    credentials: true,
    origin: "https://localhost:5173"
}))

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;

    const token = jwt.sign({
        id: 1
    }, JWT_SECRET);

    res.cookie("token", token); // will set a cookie at the frontend
    res.send("Logged in");
})

app.get("/logout", (req, res) => {
    const token = req.cookie.token; // used to get cookie at a arequest
})
```
can also use remove cookie

```ts
res.clearCookie("token");
```

At frontend

```ts
await axios.post(`${BACKEND_URL}/signin`, {
    username,
    password
}, {
    withCredentials: true,
})
```


## Next auth is deals primarily with the routes like api/auth/[...nextauth]
```bash
npm i next-auth
```