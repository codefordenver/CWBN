IMAGE = cwbn
COMMIT = $$(git rev-parse --short HEAD)
TAG = $(COMMIT)
CWBN_STAGE_REPO_URL = mmmanyfold/cfd:$(TAG)
ELASTIC_SEARCH_IMAGE = docker.elastic.co/elasticsearch/elasticsearch:6.4.1

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

.PHONY: search
search:
	docker pull $(ELASTIC_SEARCH_IMAGE)
	docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" $(ELASTIC_SEARCH_IMAGE)

.PHONY: create-droplet
create-droplet:
	@ docker-machine create \
      --driver=digitalocean \
      --digitalocean-access-token=$(DO_TOKEN) \
      --digitalocean-size=1gb \
      $(IMAGE)

.droplet-remote:
	@ eval $(docker-machine env $(IMAGE))

swarn: .droplet-remote
	@  docker swarm init --advertise-addr $(CWBN_DO_IP)

.compile:
	@  lein uberjar
