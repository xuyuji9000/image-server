# php image server 
This is an image server demo.

## command

### dev

run dev environment
```bash
npm run build:dev
```

run production build
```bash
npm run build:prod
```

run backend api
```bash
php -S localhost:3001 -t ./public ./public/index.php
```

### upload

upload picture page
```bash
http GET http://localhost:3001/uploadimage/view
```

upload picture 

```bash
http -f POST http://localhost:3001/uploadimage/upload background@background.jpg
```

