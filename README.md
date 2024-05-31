# react-django-implementation

Just an example of how React and Django can play nice.

# Frontend Setup

- CD into `react-frontend`.
- Run `npm install`
- Create a file in `/src` called environmentVariables.js
- In said file, paste (and edit as necessary) this code:

```js
export const apiDomain = "http://mydomain.com";
```

- Run `npm run dev`

# Backend Setup

- CD into `backend`.
- Create and activate a virtual environment
- Run `pip install -r requirements.txt`
- Run `py manage.py runserver`
