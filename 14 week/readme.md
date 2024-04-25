# NEXT.JS

![Alt text](image1.png)

![Alt text](image.png)

getting started 
npx create-next-app@latest



in the files you want to use the client side (The server doesn't understand) example onClick

use 
```javascript
"use client"
```
This means the client component should be as low as possible in the tree
![Alt text](image-1.png)

If you want to fetch data in a componenet make it async and use await.

If you know there will be a time delay add a loading.tsx with the page.tsx, so that it will be loaded till the page renders.