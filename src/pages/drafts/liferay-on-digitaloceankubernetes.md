---
title: Liferay on DigitalOcean's Kubernetes
desc: Setting up a kubernetes cluster on DigitalOcean for deploying Liferay
date: 03/01/2020
tag:
- liferay
- kubernetes
- digitalocean
category: Kubernetes
author: Wouter Vernaillen
location: Zottegem, Belgium
---

## Kubernetes

For a project I'm doing on Liferay for a customer I decided to deploy Liferay on a [managed Kubernetes cluster at DigitalOcean](https://www.digitalocean.com/products/kubernetes/)

### Why Kubernetes?

- I need to learn all about, as we're also using it at my biggest client. (They have a private cloud though, for this smaller project I need a public cloud)
- For local development I was already using ([Liferay's official](https://hub.docker.com/u/liferay)) docker images
- Kubernetes does seem to become the de facto standard for orchestrating docker
- Since [Docker Desktop](https://www.docker.com/products/docker-desktop) has OOTB support for [Kubernetes](https://www.docker.com/products/kubernetes) it became very easy to setup and test the environment locally first

### Why DigitalOcean?

-

## Getting started

- create Kubernetes cluster on DigitalOcean
- download config file
- check connectivity

```shell script
k8s-liferay$ kubectl get namespaces
NAME              STATUS   AGE
default           Active   9d
kube-node-lease   Active   9d
kube-public       Active   9d
kube-system       Active   9d
```

## Helm

Installed helm with homebrew and added the official Helm stable charts repo.

``` shell script
k8s-liferay$ brew install helm
k8s-liferay$ helm repo add stable https://kubernetes-charts.storage.googleapis.com/
k8s-liferay$ helm repo update
```

You can read more about it on the [Helm quickstart page](https://helm.sh/docs/intro/quickstart/)

``` shell script
k8s-liferay$ helm create liferay
```

![liferay helm chart](/images/blog/liferay-helmchart.png)
