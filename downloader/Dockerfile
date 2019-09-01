FROM alpine

RUN apk add --no-cache wget

WORKDIR /data

ENV URL https://cv.phncdn.com/videos/201609/06/88557861/720P_1500K_88557861.mp4?qr5KA7LkUHYnjLoRYs0SpQkURRz6N36bPryYq-VL1Ox9SAfoGHbCHnIVHIGnv2eEiuH6Tt7PnEll3zLt9mLQqvezr_UkoCndzxTupTvlHkoPdHeabuKkCryRETtypw4T9Y50dnGBaT60E8TExQYGZktHorCOSGhH3lyAGyAsG5UHWw2jPPuafD9FxJZxxykzP2F-T_GwZA

RUN echo $URL >> download.txt && wget $URL

