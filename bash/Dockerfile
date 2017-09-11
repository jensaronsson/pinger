FROM alpine
RUN apk add --update curl
WORKDIR app
COPY ping ping
ENTRYPOINT ["./ping"]
