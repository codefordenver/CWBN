IMAGE = cwbn

.PHONY: build
build:
	@docker build --build-arg AIRTABLE_API_KEY=$(AIRTABLE_API_KEY) -t $(IMAGE) .

.PHONY: run
run:
	@docker run -p 3000:3000 --rm $(IMAGE)

.PHONY: shell
shell:
	@docker run -it --rm -p 3000:3000 $(IMAGE) sh
