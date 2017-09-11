FROM gliderlabs/alpine:3.4
RUN apk update && apk add --no-cache docker
COPY crontab /etc/crontabs/root
CMD crond 
