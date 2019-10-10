FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20191010173828"
ENV URL https://bbuseruploads.s3.amazonaws.com/pxb1988/dex2jar/downloads/dex2jar-2.0.zip?Signature=2Oruhj72nrAdeIl78E6iY56z4LY%3D&Expires=1570698598&AWSAccessKeyId=AKIAIQWXW6WLXMB5QZAQ&versionId=null&response-content-disposition=attachment%3B%20filename%3D%22dex2jar-2.0.zip%22
RUN echo $URL >> download.txt && wget $URL
VOLUME /resource/
CMD cp -r /data/* /resource/
