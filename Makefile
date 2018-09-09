IMAGE = cwbn
COMMIT = $$(git rev-parse --short HEAD)
TAG = $(COMMIT)
CWBN_STAGE_REPO_URL = mmmanyfold/cfd:$(TAG)

.PHONY: build
build:
	@docker build --build-arg AIRTABLE_API_KEY=$(AIRTABLE_API_KEY) -t $(IMAGE) .

.PHONY: run
run:
	@docker run -p 3000:3000 --rm $(IMAGE)

.PHONY: shell
shell:
	@docker run -it --rm -p 3000:3000 $(IMAGE) sh

.PHONY: deploy
deploy:
	docker tag $(IMAGE) $(CWBN_STAGE_REPO_URL)
	docker push $(CWBN_STAGE_REPO_URL)
