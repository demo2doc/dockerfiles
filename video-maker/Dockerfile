FROM python:3.7-alpine3.8

ADD requirements.txt /tmp/

RUN apk upgrade -U \
 && apk add build-base \
 && apk add --no-cache ca-certificates ffmpeg libva-intel-driver  bash git openssh  gcc musl-dev  libffi-dev openssl-dev libxml2-dev libxslt-dev openssh-client ca-certificates \
 && rm -rf /var/cache/*

RUN pip install --upgrade -r /tmp/requirements.txt

CMD echo "running ...." >> /logs && tail -f  /logs
