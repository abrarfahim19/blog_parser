### Staging
The staging environment should mimic your production environment. The closer the staging environment is to your production, the more accurate your testing is going to be. Staging environments can also be used for testing and verifying new features and allow other teams including QA or stakeholders to see and use those features as a pre-trial. Staging should also cover all areas of the architecture of the application including the database and any other services that may be required. Areas that benefit from staging environments include:
1. New Feature
2. Testing
3. Migrations
4. Configuration Changes

### Production
Production is live. Its for the people to see and interact with. Any issue you could have should be solved in the Staging environment. If not properly managed some problem may arise in the production:
1. Downtime
2. Vulnerabilities
3. Reputation
