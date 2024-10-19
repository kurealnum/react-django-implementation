# react-django-implementation

Just an example of how React and Django can play nice.

# Docker Setup

**Warning:** starting the docker compose project will create a superuser with the name `ADMIN` and the password `ADMIN`. Please change these if you use this project in production.

Create a `.env` file in the root of the project and paste (and edit as necessary) these variables.

```
DATABASE_NAME="MyAwesomeDatabaseName"
DATABASE_USER="postgres"
DATABASE_PASSWORD="MyDatabasePassword"
DATABASE_PORT=5432

DJANGO_SECRET_KEY="my-secret-key"
DEBUG=True
ALLOWED_HOSTS='["*"]'

CORS_ALLOWED_ORIGINS='["http://localhost:1337","http://127.0.0.1:1337"]'
CSRF_TRUSTED_ORIGINS='["http://localhost:1337","http://127.0.0.1:1337"]'

CSRF_COOKIE_SAMESITE="Strict"
SESSION_COOKIE_SAMESITE="Strict"
CSRF_COOKIE_HTTPONLY=False
SESSION_COOKIE_HTTPONLY=True
CSRF_COOKIE_SECURE=False
SESSION_COOKIE_SECURE=False
CORS_EXPOSE_HEADERS='["Content-Type","X-CSRFToken]'
CORS_ALLOW_CREDENTIALS=True
```

Finally, run `docker compose up`. If you are in development, and you'd like live reloading, run `docker compose up -w`. You should be able to connect to the site at `localhost:1337`

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
DATABASE_NAME="MyAwesomeDatabaseName"
DATABASE_USER="postgres"
DATABASE_PASSWORD="MyDatabasePassword"
DATABASE_PORT=5432

DJANGO_SECRET_KEY="my-secret-key"
DEBUG=True
ALLOWED_HOSTS='["*"]'

CORS_ALLOWED_ORIGINS='["http://localhost:1337","http://127.0.0.1:1337"]'
CSRF_TRUSTED_ORIGINS='["http://localhost:1337","http://127.0.0.1:1337"]'

CSRF_COOKIE_SAMESITE="Strict"
SESSION_COOKIE_SAMESITE="Strict"
CSRF_COOKIE_HTTPONLY=False
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

Q: How do I create a migration with `makemigrations`?
A: First, copy your base .env file to `/backend/backend`. Then, create a virtual environment with `py -m venv env`. Then, activate said virtual environment with `. env/bin/activate` (commands will differ between operating systems). Next, install all of the required packages with `pip install -r /backend/requirements.txt`. Finally, you can go into the `/backend` folder and run `python3 manage.py makemigrations`. Django will likely buffer for a few seconds when making migrations, and spit out an error something along the lines of this:

```
could not translate host name "postgres" to address: No address associated with hostname
```

This is fine. You're only geting this error because you aren't running `makemigrations` inside your Docker container.
