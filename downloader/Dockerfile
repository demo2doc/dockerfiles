FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
RUN echo "现在时间：20191006225307"
ENV URL https://github.com/appium/appium-desktop/releases/download/v1.15.0-1/Appium-mac-1.15.0-1.dmg
RUN echo $URL >> download.txt && wget $URL
VOLUME /resource/
CMD cp -r /data/* /resource/
