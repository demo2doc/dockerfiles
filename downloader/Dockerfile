FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20191009210214"
ENV URL https://bitbucket.org/iBotPeaches/apktool/downloads/apktool_2.4.0.jar
RUN echo $URL >> download.txt && wget $URL
VOLUME /resource/
CMD cp -r /data/* /resource/
