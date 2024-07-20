FROM python:3.10.12

WORKDIR /backend_src

COPY requirements.txt requirements.txt 

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 6900

ENTRYPOINT [ "bash", "./entrypoint.sh" ]
