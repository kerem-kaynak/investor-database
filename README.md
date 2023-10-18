# Investor Database

Proof of concept for an aggregated database of startup investors enriched from multiple data sources. Currently only using dummy data from (Visible Connect)[https://connect.visible.vc/investors]

## How does it work?

1. User opens app, client sends request to server
2. Server sends multiple requests to Visible's public API to fetch paginated investor data
3. Server transforms data into desired format and sends to client
4. Client builds react-table with filters 

## Architecture

### Backend

Containerized Flask server with gunicorn, deployed on Google Cloud Run. Super lightweight REST API. Many essential components missing for the sake of a simple working prototype, including but not limited to:
- Authentication & Authorization
- Security features like stricter CORS policy
- Proper routing and blueprints

### Frontend

Simple React SPA hosted on Firebase. Many best practices skipped for the sake of a simple working prototype, including but not limited to:
- Proper routing
- Component structure
- Async requests
- Authentication
- Proper styling and classes

## Pre-requisites

1. You need to have Python installed (3.10 recommended)
2. You need to have Docker installed if you'd like to run the container locally
3. You need to have NodeJS installed

## Local development instructions

To run the backend:
```
cd server
pip install -r requirements.txt
python main.py
```

To run the frontend:
```
cd client
npm install
npm run start
```

If you'd like to run both locally at the same time, you need to point the frontend to `http://localhost:5000/api/investors` instead of the Cloud container.