# Tripskip

Local dev via Docker Compose:

- Start services

```
docker compose up -d --build
```

- Tail logs

```
docker compose logs -f backend frontend postgres
```

- Backend health

```
curl http://localhost:4000
```

- Frontend
  http://localhost:3000

DB (from host): localhost:5433, user/password 'user'/'password', db 'appdb'.

Running application

docker-compose up -d --build backend postgres

npm run dev