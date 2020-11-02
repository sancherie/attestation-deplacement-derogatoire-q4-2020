################
# STAGE: serve #
################
FROM arm32v7/nginx:1.18.0-alpine as server
# Change the current working directory
WORKDIR /code
# Copy the nginx configuration
COPY .docker/app/site.conf /etc/nginx/conf.d/default.conf
#Copy the dependencies
COPY dist/ .
# Expose the http port
EXPOSE 80
CMD nginx-debug -g 'daemon off;'
