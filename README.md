# 🚀 Node.js DevOps CI/CD Pipeline on AWS EKS

This project demonstrates an end-to-end **DevOps implementation** for a Node.js application using **Docker, Jenkins, Kubernetes (EKS), Terraform, Prometheus, and Grafana**.  
It covers CI/CD automation, container orchestration, and production-grade monitoring on AWS.

---

## 📌 Project Overview

The goal of this project is to:
- Containerize a Node.js application
- Automate build and deployment using Jenkins
- Deploy the application on AWS EKS
- Implement monitoring and observability using Prometheus and Grafana

---

## 🛠️ Tech Stack

| Category            | Tools / Services |
|---------------------|------------------|
| Application         | Node.js |
| CI/CD               | Jenkins |
| Containerization    | Docker |
| Container Registry  | Docker Hub |
| Orchestration       | Kubernetes (AWS EKS) |
| Infrastructure      | AWS, Terraform |
| Monitoring          | Prometheus |
| Visualization       | Grafana |

---

## 🏗️ Architecture

**High-level workflow:**
1. Developer pushes code to GitHub
2. Jenkins pipeline is triggered
3. Docker image is built and pushed to Docker Hub
4. Jenkins deploys the application to AWS EKS
5. Prometheus scrapes application metrics
6. Grafana visualizes metrics and dashboards

> 📷 *Refer to the Overall System Architecture Diagram in the project report*

---

## 📂 Repository Structure

```text
NodeJS-devops-project3
├── Dockerfile
├── Jenkinsfile
├── README.md
├── app.js
├── package.json
├── k8s
│   ├── deployment.yml
│   ├── service.yml
│   └── canary-deployment.yml
└── test
    └── app-test.js
```

**Jenkins Pipeline Stages**

Checkout Code

Install Dependencies

Run Tests

Docker Build

Docker Push

Deploy to AWS EKS

🚢 K**ubernetes Deployment**

Application deployed using Deployment and Service

NodePort used for external access

Canary deployment configuration included

Application exposed on port 3000

📊 **Monitoring & Observability**

Prometheus

Scrapes Node.js metrics from /metrics

Monitors cluster and application health

Grafana

Visualizes CPU, memory, request rate, and latency

Custom dashboards created for Node.js app

🔍 **Application Metrics**

The Node.js application exposes metrics at:

http://<APP_URL>:3000/metrics


Metrics include:

CPU usage

Memory consumption

Event loop lag

HTTP request counts

✅ **Prerequisites**

AWS Account

Kubernetes Cluster (EKS)

Jenkins Server

Docker & Docker Hub account

kubectl, AWS CLI configured

🚀 **How to Run**

Clone the repository

Configure Jenkins credentials (DockerHub & AWS)

Create Jenkins Pipeline using Jenkinsfile

Apply Kubernetes manifests

Access the application and monitoring dashboards
