# react-django-implementation

Just an example of how React and Django can play nice.

# Setup

## Frontend Setup

- CD into `react-frontend`.
- Run `npm install`
- Create a file in `/src` called environmentVariables.js
- In said file, paste (and edit as necessary) this code:

```js
export const apiDomain = "http://mydomain.com";
```

- Run `npm run dev`

## Backend Setup

- CD into `backend`.
- Create and activate a virtual environment
- Run `pip install -r requirements.txt`
- Run `py manage.py collectstatic`
- Run `py manage.py runserver`
- Please ensure that you run your server on the correct port, which is listed in nginx/sites-available/django-react-crossorigin

## "Devops" Setup

- Copy the Nginx config located in `nginx/`
- Move any and all sites in `sites-available/` to `sites-enabled/` (in `/etc/nginx/sites-enabled`)
- Change the user directive in `nginx.conf` to match your username (or just change it to root)
- Change the `/static` location's alias

# FAQ

Q: What purpose does backend/collectedstatic/ serve if we aren't using Django to serve static files?
A: The Admin site
