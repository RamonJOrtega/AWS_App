# AWS_App

Clone this repository to display recommended branding snippets and keywords to the user!
This app uses the openAI API.

The Frontend web host calls AWS backend host to get OpenAI data and display recommended branding snippets and keywords to user.

Front End:
Typescript, NextJS, React, TailwindCSS, Vercel Hosting.

Back End:
Python, FastAPI, AWS Lambda API Gateway Hosting, OpenAI, AWS CDK, Docker, GitHub, Linux.

To duplicate this project build, you need to create an AWS account and have node installed.
npm install aws-cli
sudo npm install -g aws-cdk
npm -g install typescript
cdk bootsrap aws://<12-digit-aws-accountnumber>/<zone. example us-east-w>
cdk deploy (creates lambda function on your account)

![alt text](link)