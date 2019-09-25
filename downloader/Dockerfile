FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20190925111208"
ENV URL https://github.com/boot2docker/boot2docker/releases/download/v18.09.9/boot2docker.iso
RUN echo $URL >> download.txt && wget $URL
