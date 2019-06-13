FROM python:3.7-alpine3.8

ADD requirements.txt /tmp/

RUN apk upgrade -U \
 && apk add --no-cache ca-certificates ffmpeg libva-intel-driver  bash git openssh \
 && rm -rf /var/cache/*

RUN pip install -r /tmp/requirements.txt

CMD echo "running ...." >> /logs && tail -f  /logs
