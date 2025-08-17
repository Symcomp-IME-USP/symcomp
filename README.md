## Project Setup

First, install the packages required for the project

```bash
pnpm install
```

Then, copy the .env

```bash
cp .env.example .env
```

Check with other members the details of those variables.

## Running the project

After following the steps above and meeting its requeriments, run in the terminal:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying project

### Manual deploy

Access the machine via ssh key. For that use:

```bash
ssh <user>@symcomp.ime.usp.br
```

Within the machine, access the folder where the site files are. For more information consult the techical members. To make the deploy, you must make sure the main branch is updated. Then, execute the following commands:

```bash
sudo docker exec -it 120d50346564 /bin/bash
git pull
yarn
yarn build
exit
sudo docker restart 120d50346564
```

### Automatic deploy

In order to create a script to be executed automatically on the physical machine you must add a git bare repository.

**There are a bare folder in the current server**

If you need to create a new one you follow:

Access the machine with the ssh credentials. Then, run the commands.

```bash
mkdir -p /path/to/respo/name-bare.git
cd /path/to/resp/name-bare.git
git init --bare
```

Create the script **/path/to/respo/name-bare.git/deploy.sh**

```bash
#!/bin/bash

CONTAINER_ID="120d50346564"

sudo docker exec "$CONTAINER_ID" /bin/bash -c "
  git pull && \
  yarn && \
  yarn build
"

sudo docker restart "$CONTAINER_ID"

```

Create the file **/path/to/respo/name-bare.git/hooks/post-receive**

```bash
#!/bin/bash

read oldrev newrev ref

BRANCH="refs/heads/main"

if [ "$ref" == "$BRANCH" ]; then
    /path/to/respo/deploy.sh
fi
```

Make the file executable.

```bash
chmod +x /path/to/respo/name-bare.git/hooks/post-receive
```

Exit the remote machine. Next, on your local machine configure another remote.

```bash
git remote add server user@user:/path/to/respo/name-bare.git
```

Finally, when you need to make the deploy, run on your local machine

```bash
git push origin main
git push server main
```

## Contribute with the project

To make sure we follow the best pratices in code development, the project run ESlint and Prettier to ensure writing standard throughout its file. So, to make it easier to contribute, install extension **Prettier - Code formatter** to your VS code.

Not only that, but to ensure you are formatting, you should press **control + ,** to enter VS code configuration.

Open the editor for settings and add the following line at the end of the json file:

```json
{
  //...
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  }
  //...
}
```
