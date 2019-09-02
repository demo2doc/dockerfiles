FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
ENV URL https://dv.phncdn.com/videos/201609/06/88557841/720P_1500K_88557841.mp4?ttl=1567396010&ri=2048000&rs=912&hash=4a26a7da63abeeac93d0ec701e4d1587
RUN echo $URL >> download.txt && wget $URL -O Immority_Eposide_0
