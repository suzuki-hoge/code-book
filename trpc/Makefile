up:
	@npm run dev

sb:
	@npm run storybook

db-init:
	@sqlite3 database/dev.db < database/schema.sql
	@sqlite3 database/dev.db < database/init-data.sql

db-cli:
	@sqlite3 database/dev.db

fix:
	@make test
	@make lint
	@make format

test:
	@npm run test

lint:
	@npm run lint

format:
	@npm run format

gen:
	@python tool/generator.py
