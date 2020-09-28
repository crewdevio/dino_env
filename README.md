# dinoenv

manage environment variables with deno.

![dino](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnBgTJHCBq_7NCZbc74znXLlJ1n5wq7ZXF_xJPXZiPBrP0Jan&s)

## Usage
specify the path of the `.env` file and import dino_env.

install dino_env with [Trex](https://deno.land/x/trex) using:

``` sh
$ trex install --map dinoenv
```

``` javascript
import * as env from "dinoenv";

env.config();
```

or directly with the url.

``` javascript

import * as env from "https://deno.land/x/dinoenv/mod.ts";

env.config();

```

## Config

you can specify the path of the .env file.


``` javascript
import * as env from "https://deno.land/x/dinoenv/mod.ts";

env.config({ path: "./environment/.env" });

```
> **note**: by default use root project path


change the decode of the `.env` file

``` javascript
import * as env from "https://deno.land/x/dinoenv/mod.ts";

env.config({ path: "./environment/.env", encoding: "utf-8" });

```
> **note**: by default use "utf-8"

## permissions

``` sh
--allow-read --allow-env
```
