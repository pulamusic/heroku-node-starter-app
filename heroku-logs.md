2021-01-07T19:58:21.755580+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:58:21.755580+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:58:21.755585+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
2021-01-07T19:58:21.755585+00:00 app[web.1]: at internal/main/run_main_module.js:17:47 {
2021-01-07T19:58:21.755585+00:00 app[web.1]: errno: -2,
2021-01-07T19:58:21.755586+00:00 app[web.1]: syscall: 'open',
2021-01-07T19:58:21.755586+00:00 app[web.1]: code: 'ENOENT',
2021-01-07T19:58:21.755586+00:00 app[web.1]: path: '/app/.env'
2021-01-07T19:58:21.755587+00:00 app[web.1]: }
2021-01-07T19:58:21.820982+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:58:21.936420+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T19:58:21.941419+00:00 heroku[web.1]: State changed from crashed to starting
2021-01-07T19:58:25.890806+00:00 heroku[web.1]: Starting process with command `node index.js`
2021-01-07T19:58:29.827895+00:00 app[web.1]: /app/index.js:9
2021-01-07T19:58:29.827908+00:00 app[web.1]: throw result.error
2021-01-07T19:58:29.827908+00:00 app[web.1]: ^
2021-01-07T19:58:29.827909+00:00 app[web.1]: 
2021-01-07T19:58:29.827910+00:00 app[web.1]: Error: ENOENT: no such file or directory, open '/app/.env'
2021-01-07T19:58:29.827910+00:00 app[web.1]: at Object.openSync (fs.js:462:3)
2021-01-07T19:58:29.827910+00:00 app[web.1]: at Object.readFileSync (fs.js:364:35)
2021-01-07T19:58:29.827911+00:00 app[web.1]: at Object.config (/app/node_modules/dotenv/lib/main.js:96:29)
2021-01-07T19:58:29.827911+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:5:19)
2021-01-07T19:58:29.827911+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T19:58:29.827912+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T19:58:29.827912+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T19:58:29.827912+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T19:58:29.827913+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
2021-01-07T19:58:29.827913+00:00 app[web.1]: at internal/main/run_main_module.js:17:47 {
2021-01-07T19:58:29.827914+00:00 app[web.1]: errno: -2,
2021-01-07T19:58:29.827914+00:00 app[web.1]: syscall: 'open',
2021-01-07T19:58:29.827914+00:00 app[web.1]: code: 'ENOENT',
2021-01-07T19:58:29.827914+00:00 app[web.1]: path: '/app/.env'
2021-01-07T19:58:29.827915+00:00 app[web.1]: }
2021-01-07T19:58:29.928383+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T19:58:29.978258+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T20:10:14.000000+00:00 app[api]: Build started by user jim@pulamusic.com
2021-01-07T20:10:34.000000+00:00 app[api]: Build succeeded
2021-01-07T20:10:34.326175+00:00 app[api]: Release v7 created by user jim@pulamusic.com
2021-01-07T20:10:34.326175+00:00 app[api]: Deploy 4e8d2a7d by user jim@pulamusic.com
2021-01-07T20:10:34.688576+00:00 heroku[web.1]: State changed from crashed to starting
2021-01-07T20:10:40.128527+00:00 heroku[web.1]: Starting process with command `node index.js`
2021-01-07T20:10:44.181139+00:00 app[web.1]: Listening on 33673
2021-01-07T20:10:44.927542+00:00 heroku[web.1]: State changed from starting to up
2021-01-07T20:45:39.447323+00:00 heroku[web.1]: Idling
2021-01-07T20:45:39.449749+00:00 heroku[web.1]: State changed from up to down
2021-01-07T20:45:40.913545+00:00 heroku[web.1]: Stopping all processes with SIGTERM
2021-01-07T20:45:41.136787+00:00 heroku[web.1]: Process exited with status 143
2021-01-07T21:21:12.000000+00:00 app[api]: Build started by user jim@pulamusic.com
2021-01-07T21:21:32.423112+00:00 app[api]: Deploy 216c16f7 by user jim@pulamusic.com
2021-01-07T21:21:32.423112+00:00 app[api]: Release v8 created by user jim@pulamusic.com
2021-01-07T21:21:32.658669+00:00 heroku[web.1]: State changed from down to starting
2021-01-07T21:21:33.000000+00:00 app[api]: Build succeeded
2021-01-07T21:21:35.842792+00:00 heroku[web.1]: Starting process with command `node index.js`
2021-01-07T21:21:39.609697+00:00 app[web.1]: /app/index.js:10
2021-01-07T21:21:39.609712+00:00 app[web.1]: throw result.error
2021-01-07T21:21:39.609713+00:00 app[web.1]: ^
2021-01-07T21:21:39.609713+00:00 app[web.1]: 
2021-01-07T21:21:39.609714+00:00 app[web.1]: Error: ENOENT: no such file or directory, open '/app/.env'
2021-01-07T21:21:39.609714+00:00 app[web.1]: at Object.openSync (fs.js:462:3)
2021-01-07T21:21:39.609714+00:00 app[web.1]: at Object.readFileSync (fs.js:364:35)
2021-01-07T21:21:39.609715+00:00 app[web.1]: at Object.config (/app/node_modules/dotenv/lib/main.js:96:29)
2021-01-07T21:21:39.609715+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:6:23)
2021-01-07T21:21:39.609716+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T21:21:39.609716+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T21:21:39.609716+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T21:21:39.609717+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T21:21:39.609717+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
2021-01-07T21:21:39.609718+00:00 app[web.1]: at internal/main/run_main_module.js:17:47 {
2021-01-07T21:21:39.609718+00:00 app[web.1]: errno: -2,
2021-01-07T21:21:39.609719+00:00 app[web.1]: syscall: 'open',
2021-01-07T21:21:39.609719+00:00 app[web.1]: code: 'ENOENT',
2021-01-07T21:21:39.609720+00:00 app[web.1]: path: '/app/.env'
2021-01-07T21:21:39.609720+00:00 app[web.1]: }
2021-01-07T21:21:39.703946+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T21:21:39.771504+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T21:21:39.775155+00:00 heroku[web.1]: State changed from crashed to starting
2021-01-07T21:21:45.650051+00:00 heroku[web.1]: Starting process with command `node index.js`
2021-01-07T21:21:50.065705+00:00 app[web.1]: /app/index.js:10
2021-01-07T21:21:50.065754+00:00 app[web.1]: throw result.error
2021-01-07T21:21:50.065755+00:00 app[web.1]: ^
2021-01-07T21:21:50.065755+00:00 app[web.1]: 
2021-01-07T21:21:50.065756+00:00 app[web.1]: Error: ENOENT: no such file or directory, open '/app/.env'
2021-01-07T21:21:50.065756+00:00 app[web.1]: at Object.openSync (fs.js:462:3)
2021-01-07T21:21:50.065757+00:00 app[web.1]: at Object.readFileSync (fs.js:364:35)
2021-01-07T21:21:50.065757+00:00 app[web.1]: at Object.config (/app/node_modules/dotenv/lib/main.js:96:29)
2021-01-07T21:21:50.065758+00:00 app[web.1]: at Object.<anonymous> (/app/index.js:6:23)
2021-01-07T21:21:50.065758+00:00 app[web.1]: at Module._compile (internal/modules/cjs/loader.js:999:30)
2021-01-07T21:21:50.065758+00:00 app[web.1]: at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
2021-01-07T21:21:50.065759+00:00 app[web.1]: at Module.load (internal/modules/cjs/loader.js:863:32)
2021-01-07T21:21:50.065759+00:00 app[web.1]: at Function.Module._load (internal/modules/cjs/loader.js:708:14)
2021-01-07T21:21:50.065760+00:00 app[web.1]: at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
2021-01-07T21:21:50.065760+00:00 app[web.1]: at internal/main/run_main_module.js:17:47 {
2021-01-07T21:21:50.065761+00:00 app[web.1]: errno: -2,
2021-01-07T21:21:50.065761+00:00 app[web.1]: syscall: 'open',
2021-01-07T21:21:50.065761+00:00 app[web.1]: code: 'ENOENT',
2021-01-07T21:21:50.065762+00:00 app[web.1]: path: '/app/.env'
2021-01-07T21:21:50.065762+00:00 app[web.1]: }
2021-01-07T21:21:50.134611+00:00 heroku[web.1]: Process exited with status 1
2021-01-07T21:21:50.205147+00:00 heroku[web.1]: State changed from starting to crashed
2021-01-07T21:21:51.475070+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=pula-node-starter-app.herokuapp.com request_id=3899f10e-f81b-46c1-be67-3c9768e6871c fwd="24.61.97.224" dyno= connect= service= status=503 bytes= protocol=https
