#!/bin/bash

# Open from Finder in a separate Terminal window.
cd "$(dirname "$0")" || exit 1

fail() {
  printf '\n%s\n' "$1"
  read -r -p 'Press Enter to close this launcher. ' _
  exit 1
}

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
  nvm use || fail 'Install Node 24 with: nvm install 24'
fi

command -v node >/dev/null 2>&1 || fail 'Install Node 24, then reopen this launcher.'
node -e 'if (Number(process.versions.node.split(".")[0]) < 24) process.exit(1)' \
  || fail 'This launcher needs Node 24. Run nvm install 24 first.'

if [ ! -d node_modules ]; then
  npm ci || fail 'Dependency installation failed. Check the error above.'
fi

printf '\nStarting your portfolio at http://localhost:5173/\n'
printf 'Keep this Terminal window open. Saved edits update Chrome automatically.\n'
printf 'Use VS Code for other commands. Press Control+C here to stop the server.\n\n'

npm run dev
result=$?
if [ "$result" -ne 0 ] && [ "$result" -ne 130 ]; then
  fail 'The server stopped. If port 5173 is already in use, open http://localhost:5173/ in Chrome or stop the existing server before trying again.'
fi
