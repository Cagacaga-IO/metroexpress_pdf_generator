heroku-deploy:
	git status
	git add .
	git commit -am "heroku deploy"
	git push heroku master
