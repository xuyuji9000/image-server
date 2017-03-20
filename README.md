# php image server 
This is a php image server demo.

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

### upload

upload picture page
```bash
http GET http://localhost:3001/uploadimage/view
```

upload picture 

```bash
http -f POST http://localhost:3001/uploadimage/upload background@background.jpg
```

