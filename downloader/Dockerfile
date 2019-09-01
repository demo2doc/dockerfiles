FROM alpine

RUN apk add --no-cache wget

WORKDIR /data

ENV URL https://cv.phncdn.com/videos/201609/06/88557861/720P_1500K_88557861.mp4?0UE4B6Htjzq7m6gsAh5VUnBm9t7b3mbHDRGvH8UEaPWPoyVbuGWBn5FrdAzlC63vs3NqMj4QPI9zeLgAudT0dDdjvlZ-I2oNqBnKnYYFsUilWfI189O4Kdm7G_M1Ger0X2VnqWrShcDkh2nve8lrE10lMM1ZOWg02kuAHRUv--pXP93tYwscD-wOQlz6YiN5Tjvstl49ew

RUN echo $URL >> download.txt && wget $URL

