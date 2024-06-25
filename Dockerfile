FROM node:20
RUN mkdir /app
WORKDIR /app
COPY ./ /app
EXPOSE 8000
ENV HOST 0.0.0.0
