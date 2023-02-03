# AWS_App

Go to https://aws-marketing-app.vercel.app/ to try out the App!

Then type in words about what your brand is, and get a social media caption and keywords! 
If you live in the US near Oregon (AWS US-west-2 ), you can expect results in 2-3 seconds. If you live on the East coast, latency is about 8 seconds.

This app creates a python API using FastAPI, which calls the openAI API.
The python API is embedded in the cloud via serverless Lamda function.
The Lambda is triggered by the front-end thru AWS API gateway which provides an endpoint with query structure. Example: https://##mgcbkr##.execute-api.us-west-2.amazonaws.com/prod/generate_wods?prompt=classy_cocktail. When that end point is queried, the Frontend web host calls AWS backend host to get OpenAI data and display recommended branding captions and keywords to user.

The openAI model called by this repo is GPT-3: text-ada-001.
This is the fastsest, lowest cost, GPT model, capable of simple tasks.

Front End:
Typescript, NextJS, React, TailwindCSS, Vercel Hosting.

Back End:
Python, FastAPI, AWS Lambda, , OpenAI, AWS CDK, Docker, GitHub, Linux, API Gateway Hosting.

You can clone this repo and link it to your AWS accountif you want to duplicate the project. However, I recommend following the process outlined by pixegami on youtube.

If you are new this will probably take you 16 hours to complete.
Otherwise backend setup takes 1-2 hours and frontend 1 hours.

Below is what my app looks like.

![alt text](https://github.com/RamonJOrtega/AWS_Marketing_App/blob/main/appPIcture2.png)
![alt text](https://github.com/RamonJOrtega/AWS_Marketing_App/blob/main/appPIcture1.png)

To duplicate this project frontend:
1. Have node and Yarn installed.
2. Go Vercel.cod/docs -> quickstart -> Next.js -> Deploy.
3. This installs, Next.JS, React.
4. Next, install Tailwind and update your postcss.config.js, and your tailwind.config.js 
5. Make sure to push all of your commits to github so that you can have Vercel host files directly from your repostory.
6. Force push these 2 files to the github repo to get the styles to appear in Vercel

To duplicate this project bakckend, it's complex.
1. Have node, python3, fastAPI, all installed
2. Create an AWS account, and setup API Gateway.
3. npm install aws-cli
4. sudo npm install -g aws-cdk to get the cloud developement git which pushes your code to the server.
5. npm -g install typescript
6. cdk bootsrap aws://<12-digit-aws-accountnumber>/<zone. example us-east-w>
7. cdk deploy (creates lambda function on your account and sets up the backend)


Note:
Credit to Pixegami at https://www.youtube.com/watch?v=yxyyYMWu1ZA&t=9514s
The files in these repo were created line by line following pixegami on youtube.
This my folder and files are setup about 70% the same as pixegami.
The setup time for the project is substancial if you are new.
If you are having trouble, please refer to pixegami.
