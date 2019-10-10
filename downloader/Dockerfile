FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20191010174139"
ENV URL https://github.com/Konloch/bytecode-viewer/releases/download/v2.9.22/Bytecode-Viewer-2.9.22.jar
RUN echo $URL >> download.txt && wget $URL
VOLUME /resource/
CMD cp -r /data/* /resource/
