FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
ENV URL https://ev.phncdn.com/videos/201609/06/88557841/720P_1500K_88557841.mp4?validfrom=1567354646&validto=1567361846&rate=114k&burst=2000k&hash=XC55lnyrWl29GiNsG7ifkETE%2Fj4%3D
RUN echo $URL >> download.txt && wget $URL -O Immority_Eposide_0
