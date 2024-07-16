# react-django-implementation

Just an example of how React and Django can play nice.

# Docker Setup

Create a `.env` file in the root of the project. Paste (and edit as necessarry) these variables:

```
DATABASE_NAME="MyAwesomeDatabaseName"
DATABASE_USER="postgres"
DATABASE_PASSWORD="MyDatabasePassword"
```

Then, create file named `settings.env` in the `./backend/backend` directory. Paste (and edit as necessarry) these variables:

```
DJANGO_SECRET_KEY="my-secret-key"
DEBUG=True
ALLOWED_HOSTS='["*"]'

CORS_ALLOWED_ORIGINS='["http://localhost:80","http://127.0.0.1:80"]'
CSRF_TRUSTED_ORIGINS='["http://localhost:80","http://127.0.0.1:80"]'

CSRF_COOKIE_SAMESITE="Strict"
SESSION_COOKIE_SAMESITE="Strict"
CSRF_COOKIE_HTTPONLY=True
SESSION_COOKIE_HTTPONLY=True
CSRF_COOKIE_SECURE=False
SESSION_COOKIE_SECURE=False
CORS_EXPOSE_HEADERS='["Content-Type","X-CSRFToken]'
CORS_ALLOW_CREDENTIALS=True
```

Finally, run `docker compose up`. If you are in development, and you'd like live reloading, run `docker compose up -w`.

# Manual Setup

## Frontend Setup

- CD into `react-frontend`.
- Run `npm install`
- Run `npm run dev`

## Backend Setup

- CD into `backend`.
- Create and activate a virtual environment
- Run `pip install -r requirements.txt`
- Create a file called `backend/backend/settings.env`
- Paste (and edit as necessarry) these variables:

```
DJANGO_SECRET_KEY="my-secret-key"
DEBUG=True
ALLOWED_HOSTS='["*"]'

CORS_ALLOWED_ORIGINS='["http://localhost:80","http://127.0.0.1:80"]'
CSRF_TRUSTED_ORIGINS='["http://localhost:80","http://127.0.0.1:80"]'

CSRF_COOKIE_SAMESITE="Strict"
SESSION_COOKIE_SAMESITE="Strict"
CSRF_COOKIE_HTTPONLY=True
SESSION_COOKIE_HTTPONLY=True
CSRF_COOKIE_SECURE=False
SESSION_COOKIE_SECURE=False
CORS_EXPOSE_HEADERS='["Content-Type","X-CSRFToken]'
CORS_ALLOW_CREDENTIALS=True
```

- Run `py manage.py collectstatic`
- Run `py manage.py runserver`

## "Devops" Setup

- Copy the Nginx config located in `nginx/`
- Move any and all sites in `sites-available/` to `sites-enabled/` (in `/etc/nginx/sites-enabled`)
- Change the user directive in `nginx.conf` to match your username (or just change it to root)
- Change the `/static` location directive's alias (in `nginx/sites-available/django-react-crossorigin`)

# FAQ

Q: What purpose does `backend/collectedstatic/` serve if we aren't using Django to serve static files?
A: The Admin site
