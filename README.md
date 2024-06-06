# react-django-implementation

Just an example of how React and Django can play nice.

# Setup

## Frontend Setup

- CD into `react-frontend`.
- Run `npm install`
- Run `npm run dev`

## Backend Setup

- CD into `backend`.
- Create and activate a virtual environment
- Run `pip install -r requirements.txt`
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
