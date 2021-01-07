> Jim Carroll |
> 01/07/2021 |
> [GitHub Profile](https://github.com/pulamusic)

---

# running deployment logs for Heroku apps

This is very cool. I can enter `heroku logs --tail >> heroku-logs.md` and get a streaming printout of the deployment logs.

---

2021-01-07T18:26:10.388151+00:00 app[api]: Release v1 created by user jim@pulamusic.com
2021-01-07T18:26:10.388151+00:00 app[api]: Initial release by user jim@pulamusic.com
2021-01-07T18:26:10.496912+00:00 app[api]: Enable Logplex by user jim@pulamusic.com
2021-01-07T18:26:10.496912+00:00 app[api]: Release v2 created by user jim@pulamusic.com
2021-01-07T18:29:49.000000+00:00 app[api]: Build started by user jim@pulamusic.com
2021-01-07T18:30:10.881878+00:00 app[api]: Deploy 71c09b06 by user jim@pulamusic.com
2021-01-07T18:30:10.881878+00:00 app[api]: Release v3 created by user jim@pulamusic.com
2021-01-07T18:30:10.899198+00:00 app[api]: Scaled to web@1:Free by user jim@pulamusic.com
2021-01-07T18:30:11.000000+00:00 app[api]: Build succeeded
2021-01-07T18:30:14.548125+00:00 heroku[web.1]: Starting process with command `node index.js`
2021-01-07T18:30:18.512292+00:00 app[web.1]: Listening on 17705
2021-01-07T18:30:19.572554+00:00 heroku[web.1]: State changed from starting to up
2021-01-07T18:31:30.207017+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=a24781ea-b2f5-4010-9e54-fb16097512c9 fwd="24.61.97.224" dyno=web.1 connect=1ms service=76ms status=200 bytes=7072 protocol=https
2021-01-07T18:31:30.777219+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=7ca74799-93c5-4952-adc7-ec355f900dfb fwd="24.61.97.224" dyno=web.1 connect=1ms service=68ms status=200 bytes=908 protocol=https
2021-01-07T18:31:30.913284+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=a40db633-dc60-4569-8406-ea8a095a0c08 fwd="24.61.97.224" dyno=web.1 connect=1ms service=4ms status=200 bytes=2567 protocol=https
2021-01-07T18:31:31.276067+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=pula-node-starter-app.herokuapp.com request_id=fd701f6b-f657-432a-8628-94f2269b24df fwd="24.61.97.224" dyno=web.1 connect=2ms service=12ms status=404 bytes=394 protocol=https
2021-01-07T18:33:48.975639+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=cdcd551c-b8af-4c66-a8eb-a18e7c92299c fwd="24.61.97.224" dyno=web.1 connect=0ms service=12ms status=304 bytes=152 protocol=https
2021-01-07T18:33:49.182025+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=d09186bc-b6fe-41ee-8cf7-aea1e59dbef2 fwd="24.61.97.224" dyno=web.1 connect=0ms service=40ms status=304 bytes=237 protocol=https
2021-01-07T18:33:49.114229+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=48a8f1fd-d881-481c-b3bc-7cf165324deb fwd="24.61.97.224" dyno=web.1 connect=0ms service=31ms status=304 bytes=237 protocol=https
2021-01-07T18:33:59.023214+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=0718b7e1-e7a1-49e6-aaca-df9c8879d57d fwd="24.61.97.224" dyno=web.1 connect=4ms service=4ms status=304 bytes=152 protocol=https
2021-01-07T18:33:59.119342+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=ff1527f4-207e-4705-a1c6-4771841d12ce fwd="24.61.97.224" dyno=web.1 connect=0ms service=4ms status=304 bytes=237 protocol=https
2021-01-07T18:33:59.133818+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=0f129e29-25ec-4bbe-a394-4e7936347db3 fwd="24.61.97.224" dyno=web.1 connect=0ms service=4ms status=304 bytes=237 protocol=https
