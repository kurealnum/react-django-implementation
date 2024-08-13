python3 manage.py makemigrations
python3 manage.py migrate
# creates a superuser
python3 manage.py initadmin
python3 manage.py collectstatic --noinput
python3 manage.py runserver 0.0.0.0:6900
