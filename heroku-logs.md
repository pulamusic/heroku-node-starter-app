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
2021-01-07T18:33:49.114229+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=48a8f1fd-d881-481c-b3bc-7cf165324deb fwd="24.61.97.224" dyno=web.1 connect=0ms service=31ms status=304 bytes=237 protocol=https
2021-01-07T18:33:49.182025+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=d09186bc-b6fe-41ee-8cf7-aea1e59dbef2 fwd="24.61.97.224" dyno=web.1 connect=0ms service=40ms status=304 bytes=237 protocol=https
2021-01-07T18:33:59.023214+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=0718b7e1-e7a1-49e6-aaca-df9c8879d57d fwd="24.61.97.224" dyno=web.1 connect=4ms service=4ms status=304 bytes=152 protocol=https
2021-01-07T18:33:59.119342+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=ff1527f4-207e-4705-a1c6-4771841d12ce fwd="24.61.97.224" dyno=web.1 connect=0ms service=4ms status=304 bytes=237 protocol=https
2021-01-07T18:33:59.133818+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=0f129e29-25ec-4bbe-a394-4e7936347db3 fwd="24.61.97.224" dyno=web.1 connect=0ms service=4ms status=304 bytes=237 protocol=https
2021-01-07T19:08:16.600228+00:00 heroku[web.1]: Idling
2021-01-07T19:08:16.602232+00:00 heroku[web.1]: State changed from up to down
2021-01-07T19:08:18.214688+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2021-01-07T19:08:18.358796+00:00 heroku[web.1]: Process exited with status 143
2021-01-07T19:09:04.000000+00:00 app[api]: Build started by user jim@pulamusic.com
2021-01-07T19:09:24.000000+00:00 app[api]: Build succeeded
2021-01-07T19:09:24.131599+00:00 app[api]: Release v4 created by user jim@pulamusic.com
2021-01-07T19:09:24.131599+00:00 app[api]: Deploy 3fa2ac98 by user jim@pulamusic.com
2021-01-07T19:09:24.664892+00:00 heroku[web.1]: State changed from down to starting
2021-01-07T19:09:27.555458+00:00 heroku[web.1]: Starting process with command `node --optimize_for_size --max_old_space_size=920 --gc_interval=100 index.js`
2021-01-07T19:09:31.456149+00:00 app[web.1]: internal/modules/cjs/loader.js:818
2021-01-07T19:09:31.456166+00:00 app[web.1]: throw err;
2021-01-07T19:09:31.456166+00:00 app[web.1]: ^
2021-01-07T19:09:31.456167+00:00 app[web.1]: 
2021-01-07T19:09:31.456167+00:00 app[web.1]: Error: Cannot find module 'dotenv'
2021-01-07T19:09:31.456167+00:00 app[web.1]: Require stack:
2021-01-07T19:09:31.456168+00:00 app[web.1]: - /app/index.js
2021-01-07T19:09:31.456169+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
2021-01-07T19:09:31.456169+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:667:27)
2021-01-07T19:09:31.456170+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:887:19)
2021-01-07T19:09:31.456170+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:74:18)
2021-01-07T19:09:31.456171+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:3:12)
2021-01-07T19:09:31.456171+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T19:09:31.456171+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T19:09:31.456172+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:09:31.456172+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:09:31.456173+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12) {
2021-01-07T19:09:31.456173+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2021-01-07T19:09:31.456173+00:00 app[web.1]: requireStack: [ '/app/index.js' ]
2021-01-07T19:09:31.456174+00:00 app[web.1]: }
2021-01-07T19:09:31.524566+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:09:31.597136+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T19:09:31.600223+00:00 heroku[web.1]: State changed from crashed to starting
2021-01-07T19:09:34.673060+00:00 heroku[web.1]: Starting process with command `node --optimize_for_size --max_old_space_size=920 --gc_interval=100 index.js`
2021-01-07T19:09:38.273333+00:00 app[web.1]: internal/modules/cjs/loader.js:818
2021-01-07T19:09:38.273362+00:00 app[web.1]: throw err;
2021-01-07T19:09:38.273362+00:00 app[web.1]: ^
2021-01-07T19:09:38.273362+00:00 app[web.1]: 
2021-01-07T19:09:38.273363+00:00 app[web.1]: Error: Cannot find module 'dotenv'
2021-01-07T19:09:38.273363+00:00 app[web.1]: Require stack:
2021-01-07T19:09:38.273363+00:00 app[web.1]: - /app/index.js
2021-01-07T19:09:38.273364+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
2021-01-07T19:09:38.273365+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:667:27)
2021-01-07T19:09:38.273365+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:887:19)
2021-01-07T19:09:38.273365+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:74:18)
2021-01-07T19:09:38.273366+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:3:12)
2021-01-07T19:09:38.273366+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T19:09:38.273367+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T19:09:38.273367+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:09:38.273367+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:09:38.273368+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12) {
2021-01-07T19:09:38.273369+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2021-01-07T19:09:38.273370+00:00 app[web.1]: requireStack: [ '/app/index.js' ]
2021-01-07T19:09:38.273370+00:00 app[web.1]: }
2021-01-07T19:09:38.373762+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:09:38.441363+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T19:09:49.238129+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=f00de4fb-7311-405e-b818-e2a2e4899dfa fwd="24.61.97.224" dyno= connect= service= status=503 bytes= protocol=https
2021-01-07T18:30:18.512292+00:00 app[web.1]: Listening on 17705
2021-01-07T18:30:19.572554+00:00 heroku[web.1]: State changed from starting to up
2021-01-07T18:31:30.207017+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=a24781ea-b2f5-4010-9e54-fb16097512c9 fwd="24.61.97.224" dyno=web.1 connect=1ms service=76ms status=200 bytes=7072 protocol=https
2021-01-07T18:31:30.777219+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=7ca74799-93c5-4952-adc7-ec355f900dfb fwd="24.61.97.224" dyno=web.1 connect=1ms service=68ms status=200 bytes=908 protocol=https
2021-01-07T18:31:30.913284+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=a40db633-dc60-4569-8406-ea8a095a0c08 fwd="24.61.97.224" dyno=web.1 connect=1ms service=4ms status=200 bytes=2567 protocol=https
2021-01-07T18:31:31.276067+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=pula-node-starter-app.herokuapp.com request_id=fd701f6b-f657-432a-8628-94f2269b24df fwd="24.61.97.224" dyno=web.1 connect=2ms service=12ms status=404 bytes=394 protocol=https
2021-01-07T18:33:48.975639+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=cdcd551c-b8af-4c66-a8eb-a18e7c92299c fwd="24.61.97.224" dyno=web.1 connect=0ms service=12ms status=304 bytes=152 protocol=https
2021-01-07T18:33:49.114229+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=48a8f1fd-d881-481c-b3bc-7cf165324deb fwd="24.61.97.224" dyno=web.1 connect=0ms service=31ms status=304 bytes=237 protocol=https
2021-01-07T18:33:49.182025+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=d09186bc-b6fe-41ee-8cf7-aea1e59dbef2 fwd="24.61.97.224" dyno=web.1 connect=0ms service=40ms status=304 bytes=237 protocol=https
2021-01-07T18:33:59.023214+00:00 heroku[router]: at=info method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=0718b7e1-e7a1-49e6-aaca-df9c8879d57d fwd="24.61.97.224" dyno=web.1 connect=4ms service=4ms status=304 bytes=152 protocol=https
2021-01-07T18:33:59.119342+00:00 heroku[router]: at=info method=GET path="/stylesheets/main.css" host=pula-node-starter-app.herokuapp.com request_id=ff1527f4-207e-4705-a1c6-4771841d12ce fwd="24.61.97.224" dyno=web.1 connect=0ms service=4ms status=304 bytes=237 protocol=https
2021-01-07T18:33:59.133818+00:00 heroku[router]: at=info method=GET path="/lang-logo.png" host=pula-node-starter-app.herokuapp.com request_id=0f129e29-25ec-4bbe-a394-4e7936347db3 fwd="24.61.97.224" dyno=web.1 connect=0ms service=4ms status=304 bytes=237 protocol=https
2021-01-07T19:08:16.600228+00:00 heroku[web.1]: Idling
2021-01-07T19:08:16.602232+00:00 heroku[web.1]: State changed from up to down
2021-01-07T19:08:18.214688+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2021-01-07T19:08:18.358796+00:00 heroku[web.1]: Process exited with status 143
2021-01-07T19:09:04.000000+00:00 app[api]: Build started by user jim@pulamusic.com
2021-01-07T19:09:24.000000+00:00 app[api]: Build succeeded
2021-01-07T19:09:24.131599+00:00 app[api]: Release v4 created by user jim@pulamusic.com
2021-01-07T19:09:24.131599+00:00 app[api]: Deploy 3fa2ac98 by user jim@pulamusic.com
2021-01-07T19:09:24.664892+00:00 heroku[web.1]: State changed from down to starting
2021-01-07T19:09:27.555458+00:00 heroku[web.1]: Starting process with command `node --optimize_for_size --max_old_space_size=920 --gc_interval=100 index.js`
2021-01-07T19:09:31.456149+00:00 app[web.1]: internal/modules/cjs/loader.js:818
2021-01-07T19:09:31.456166+00:00 app[web.1]: throw err;
2021-01-07T19:09:31.456166+00:00 app[web.1]: ^
2021-01-07T19:09:31.456167+00:00 app[web.1]: 
2021-01-07T19:09:31.456167+00:00 app[web.1]: Error: Cannot find module 'dotenv'
2021-01-07T19:09:31.456167+00:00 app[web.1]: Require stack:
2021-01-07T19:09:31.456168+00:00 app[web.1]: - /app/index.js
2021-01-07T19:09:31.456169+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
2021-01-07T19:09:31.456169+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:667:27)
2021-01-07T19:09:31.456170+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:887:19)
2021-01-07T19:09:31.456170+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:74:18)
2021-01-07T19:09:31.456171+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:3:12)
2021-01-07T19:09:31.456171+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T19:09:31.456171+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T19:09:31.456172+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:09:31.456172+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:09:31.456173+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12) {
2021-01-07T19:09:31.456173+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2021-01-07T19:09:31.456173+00:00 app[web.1]: requireStack: [ '/app/index.js' ]
2021-01-07T19:09:31.456174+00:00 app[web.1]: }
2021-01-07T19:09:31.524566+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:09:31.597136+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T19:09:31.600223+00:00 heroku[web.1]: State changed from crashed to starting
2021-01-07T19:09:34.673060+00:00 heroku[web.1]: Starting process with command `node --optimize_for_size --max_old_space_size=920 --gc_interval=100 index.js`
2021-01-07T19:09:38.273333+00:00 app[web.1]: internal/modules/cjs/loader.js:818
2021-01-07T19:09:38.273362+00:00 app[web.1]: throw err;
2021-01-07T19:09:38.273362+00:00 app[web.1]: ^
2021-01-07T19:09:38.273362+00:00 app[web.1]: 
2021-01-07T19:09:38.273363+00:00 app[web.1]: Error: Cannot find module 'dotenv'
2021-01-07T19:09:38.273363+00:00 app[web.1]: Require stack:
2021-01-07T19:09:38.273363+00:00 app[web.1]: - /app/index.js
2021-01-07T19:09:38.273364+00:00 app[web.1]: at Function.Module._resolveFilename (internal/modules/cjs/loader.js:815:15)
2021-01-07T19:09:38.273365+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:667:27)
2021-01-07T19:09:38.273365+00:00 app[web.1]: at Module.require (internal/modules/cjs/loader.js:887:19)
2021-01-07T19:09:38.273365+00:00 app[web.1]: at require (internal/modules/cjs/helpers.js:74:18)
2021-01-07T19:09:38.273366+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:3:12)
2021-01-07T19:09:38.273366+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T19:09:38.273367+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T19:09:38.273367+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:09:38.273367+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:09:38.273368+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12) {
2021-01-07T19:09:38.273369+00:00 app[web.1]: code: 'MODULE_NOT_FOUND',
2021-01-07T19:09:38.273370+00:00 app[web.1]: requireStack: [ '/app/index.js' ]
2021-01-07T19:09:38.273370+00:00 app[web.1]: }
2021-01-07T19:09:38.373762+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:09:38.441363+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T19:09:49.238129+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=f00de4fb-7311-405e-b818-e2a2e4899dfa fwd="24.61.97.224" dyno= connect= service= status=503 bytes= protocol=https
2021-01-07T19:16:02.000000+00:00 app[api]: Build started by user jim@pulamusic.com
2021-01-07T19:16:21.628718+00:00 app[api]: Deploy b57352e9 by user jim@pulamusic.com
2021-01-07T19:16:21.628718+00:00 app[api]: Release v5 created by user jim@pulamusic.com
2021-01-07T19:16:21.917264+00:00 heroku[web.1]: State changed from crashed to starting
2021-01-07T19:16:22.000000+00:00 app[api]: Build succeeded
2021-01-07T19:16:26.270498+00:00 heroku[web.1]: Starting process with command `node --optimize_for_size --max_old_space_size=920 --gc_interval=100 index.js`
2021-01-07T19:16:30.969490+00:00 app[web.1]: /app/index.js:9
2021-01-07T19:16:30.969529+00:00 app[web.1]: throw result.error
2021-01-07T19:16:30.969530+00:00 app[web.1]: ^
2021-01-07T19:16:30.969530+00:00 app[web.1]: 
2021-01-07T19:16:30.969531+00:00 app[web.1]: Error: ENOENT: no such file or directory, open '/app/.env'
2021-01-07T19:16:30.969531+00:00 app[web.1]: at Object.openSync (fs.js:462:3)
2021-01-07T19:16:30.969531+00:00 app[web.1]: at Object.readFileSync (fs.js:364:35)
2021-01-07T19:16:30.969532+00:00 app[web.1]: at Object.config (/app/node_modules/dotenv/lib/main.js:96:29)
2021-01-07T19:16:30.969532+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:5:19)
2021-01-07T19:16:30.969533+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T19:16:30.969533+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T19:16:30.969533+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:16:30.969534+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:16:30.969534+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
2021-01-07T19:16:30.969534+00:00 app[web.1]: at internal/main/run_main_module.js:17:47 {
2021-01-07T19:16:30.969535+00:00 app[web.1]: errno: -2,
2021-01-07T19:16:30.969535+00:00 app[web.1]: syscall: 'open',
2021-01-07T19:16:30.969535+00:00 app[web.1]: code: 'ENOENT',
2021-01-07T19:16:30.969535+00:00 app[web.1]: path: '/app/.env'
2021-01-07T19:16:30.969536+00:00 app[web.1]: }
2021-01-07T19:16:31.078502+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:16:31.134920+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T19:16:40.433220+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=baf71b2c-78d1-4670-9ee0-da3a4b0b4276 fwd="24.61.97.224" dyno= connect= service= status=503 bytes= protocol=https
2021-01-07T19:17:31.720531+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=d3f5b0c2-ecd7-4d72-9980-0139fa8c092e fwd="24.61.97.224" dyno= connect= service= status=503 bytes= protocol=https
2021-01-07T19:19:05.933176+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=51410b3a-30d6-403b-889e-da1e9b6604f7 fwd="24.61.97.224" dyno= connect= service= status=503 bytes= protocol=https
