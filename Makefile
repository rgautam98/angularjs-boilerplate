APP_NAME=angularjs-boilerplate

run:
	npm start

pm2-start:
	pm2 start --name $(APP_NAME) startup.sh

stop:
	pm2 stop $(APP_NAME)

restart:
	pm2 restart $(APP_NAME)

logs:
	pm2 logs $(APP_NAME)
