FROM alpine
RUN apk add --no-cache wget
WORKDIR /data
ENV URL https://cv.phncdn.com/videos/201609/06/88557861/720P_1500K_88557861.mp4?w-BDkno2CDCi6oZYKLSQf9fmoFq8Q8Wt-91ytfuqBcqjxZECWbSKQbv9zi7jztol_wSKokx9B4hZse8psNFwM7txO0khQXq5kSQUwpiW_fQEWLpvLLeBdmwwMSWqKILMWRqEq8-fDDdWWGiKaZsjadX4LUhRm5sRFpzblDb6iF7dy6B65zBwRCVXQ7az9-QJ3xbyIy-Oqw
RUN echo $URL >> download.txt && wget $URL -O Immority_Eposide_1
