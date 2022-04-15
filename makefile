up:
	docker-compose --env-file .env down -v
	if [ -d "./dist" ]; then sudo rm -r dist; fi
	if [ -d "./node_modules" ]; then sudo rm -r node_modules; fi
	if [ -f "./package-lock.jsons" ]; then sudo rm package-lock.jsons; fi
	docker-compose --env-file .env run --rm install
	docker-compose --env-file .env up dev -d