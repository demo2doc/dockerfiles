FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20200212192844"
ENV URL http://staruml.io/download/releases/StarUML-3.2.2.dmg
RUN echo $URL >> download.txt && wget $URL -O StarUML
VOLUME /resource/
CMD cp -r /data/* /resource/
