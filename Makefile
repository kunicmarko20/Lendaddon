CURRENT_DIRECTORY = $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
YARN = docker run -w /app --user "$(shell id -u)" -v $(CURRENT_DIRECTORY):/app node:13.7 yarn

install:
	$(YARN) install --freeze-lockfile

build.dev: install
	$(YARN) build:dev

build.prod: install
	$(YARN) build:prod

prettier: install
	$(YARN) prettier
