FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
ENV URL https://raw.githubusercontent.com/demo2doc/shiyanlou/master/dockerSecurity/lab-3/config.yaml
RUN echo $URL >> download.txt && wget $URL
