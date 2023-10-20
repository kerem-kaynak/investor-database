# Investor Database

Proof of concept for an aggregated database of startup investors enriched from multiple data sources. Currently only using dummy data (first 500 entries) from [Visible Connect](https://connect.visible.vc/investors). Simple React SPA hosted on Firebase with a Containerized Flask server.

## How does it work?

1. User opens app, client sends request to server
2. Server sends multiple requests to Visible's public API to fetch paginated investor data
3. Server transforms data into desired format and sends to client
4. Client builds react-table with filters 

> 🚧 Warning
> 
> Visible's API has rate limits, refreshing too often will cause errors and the app will get stuck while loading data. Wait 1 minute and refresh if you run into this issue.

## Live demo

You can find a live hosted version of the app [here](https://planet-a-2f5ad.web.app).

## Pre-requisites for local development

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
