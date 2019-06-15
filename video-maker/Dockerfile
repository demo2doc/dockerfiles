FROM python:3.7-alpine3.8

ADD requirements.txt /tmp/

RUN apk add build-base \
 && apk add --no-cache ca-certificates \ 
                       ffmpeg \
                       libva-intel-driver  bash git openssh  gcc \
                       musl-dev  libffi-dev openssl-dev libxml2-dev libxslt-dev openssh-client  \
                       libgcc libstdc++ libx11 glib libxrender libxext libintl \
				       libcrypto1.0 libssl1.0 \
				       ttf-dejavu ttf-droid ttf-freefont ttf-liberation ttf-ubuntu-font-family  \
		               git-lfs \
		               xvfb \
			           dbus \

 && apk add qt5-qtbase-dev \
            wkhtmltopdf \
            --no-cache \
            --repository http://dl-cdn.alpinelinux.org/alpine/edge/community/ \
            --repository http://dl-cdn.alpinelinux.org/alpine/edge/main \
            --allow-untrusted \
 && rm -rf /var/cache/* 

RUN pip install --upgrade -r /tmp/requirements.txt

CMD echo "running ...." >> /logs && tail -f  /logs