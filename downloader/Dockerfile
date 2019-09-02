FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
ENV URL https://dv.phncdn.com/videos/201609/06/88557861/720P_1500K_88557861.mp4?ttl=1567394251&ri=2048000&rs=984&hash=26b0c7c17c731d2e633e908dc28bbcb6
RUN echo $URL >> download.txt && wget $URL -O Immority_Eposide_1
