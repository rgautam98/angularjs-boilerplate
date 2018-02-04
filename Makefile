APP_NAME=angularjs-boilerplate
PORT=9987
run:
	npm start

push:
	git add --all
	git commit
	git push -u $(ORIGIN) $(DEST_BRANCH)

pull:
	git pull -v $(ORIGIN) $(DEST_BRANCH)

# Serving in the testing environment

pushstate:
	pushstate-server public $(PORT)

httpserver:
	http-server public -p $(PORT)

pm2-start:
	pm2 start --name $(APP_NAME) startup.sh

stop:
	pm2 stop $(APP_NAME)

restart:
	pm2 restart $(APP_NAME)

logs:
	pm2 logs $(APP_NAME)