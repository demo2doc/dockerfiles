FROM alpine

RUN apk add --no-cache wget

WORKDIR /data

ENV URL https://cv.phncdn.com/videos/201609/06/88557861/720P_1500K_88557861.mp4?endbpHcK2qg94gAmWxfEQvkQz0Tmv5h71uq3r6Ld779bjV9jkzB3TiXiVJ_UkpKTXk3KDNdVU2BnoXn65dJCOd-UickzVmuu-2cjFQiON1Av27mDmWDgFzYwM4OC6OlBYUvyuGMpjZOgy1QGCsLW1382MnSW9wn4uwoRG_pdIycPPazs6wo95NzNQDchsYcg6TKIIuFugQ

RUN echo $URL >> download.txt && wget $URL

