FROM python:3.10.12

WORKDIR /backend_src

COPY requirements.txt requirements.txt 

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 6900

RUN python3 manage.py makemigrations

# creates a superuser
RUN python3 manage.py initadmin

CMD ["python3", "manage.py", "runserver", "0.0.0.0:6900"]
