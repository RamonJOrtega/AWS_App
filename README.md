# AWS_App

Go to https://aws-marketing-app.vercel.app/ to try out the App!
The type in words about what your brand is, and get a social media caption and keywords!

Clone this repository to display recommended branding snippets and keywords to the user!
This app uses the openAI API.

The Frontend web host calls AWS backend host to get OpenAI data and display recommended branding snippets and keywords to user.

Front End:
Typescript, NextJS, React, TailwindCSS, Vercel Hosting.

Back End:
Python, FastAPI, AWS Lambda, API Gateway Hosting, OpenAI, AWS CDK, Docker, GitHub, Linux.


To duplicate this project frontend, you eed to have node and Yarn installed.
Then go to Vercel.cod/docs -> quickstart -> Next.js -> Deploy.
This installs, Next.JS, React.
Next, install Tailwind and update your postcss.config.js, and your tailwind.config.js (I had to force push these 2 files to my github repo to get the styles to appear in Vercel.)
Make sure to push all of your commits to github so that you can have Vercel host files directly from your repostory.

To duplicate this project bakckend, it's much harder.
You need to create an AWS account and have node installed.
npm install aws-cli
sudo npm install -g aws-cdk
npm -g install typescript
cdk bootsrap aws://<12-digit-aws-accountnumber>/<zone. example us-east-w>
cdk deploy (creates lambda function on your account and sets up the backend)

Below is what my app looks like.

![alt text](https://github.com/RamonJOrtega/AWS_App/blob/main/AppPicture1.png)
![alt text](https://github.com/RamonJOrtega/AWS_App/blob/main/AppPicture2.png)

Note:
Credit to Pixegami.
The files in these repo were created line by line following pixegami on youtube.
This my folder and files are setup about 70% the same as pixegami.
The setup time for the project is substancial if you are new.
If you are having trouble, please refer to pixegami.
