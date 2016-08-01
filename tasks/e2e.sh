#!/bin/bash
#
cd "$(dirname "$0")/.."
initial_path=$PWD

function prepare {
  echo 'Preparing.'
  rm -rf $initial_path/template/node_modules
}

function cleanup {
  echo 'Cleaning up.'
  cd $initial_path
  rm -rf $temp_app_path
}

function handle_error {
  echo -e "$(basename $0): \033[31mERROR!\033[m An error was encountered executing \033[36mline $1\033[m."
  cleanup
  echo 'Exiting with error.'
  exit 1
}

function handle_exit {
  cleanup
  echo 'Exiting without error.'
  exit
}

# Exit the script with a helpful error message when any error is encountered
trap 'set +x; handle_error $LINENO $BASH_COMMAND' ERR

# Cleanup before exit on any termination signal
trap 'set +x; handle_exit' SIGQUIT SIGTERM SIGINT SIGKILL SIGHUP

# Echo every command being executed
set -x

# Prepare
prepare

# lint
./node_modules/.bin/standard

# Install the app in a temporary location
temp_app_path=`mktemp -d 2>/dev/null || mktemp -d -t 'temp_app_path'`
cd $temp_app_path
$initial_path/bin/create-teambition-app.js test-app
cd test-app

# Test project structure
test -e package.json
grep -q 'test-app' package.json
test -e app.js
test -e node_modules

# Test build

# Cleanup
cleanup
