FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20191010174038"
ENV URL https://github.com/pxb1988/dex2jar/releases/download/2.0/dex-tools-2.0.zip
RUN echo $URL >> download.txt && wget $URL
VOLUME /resource/
CMD cp -r /data/* /resource/
