#!/bin/bash

# Set error handling to exit on any error
set -e

# Explicitly set the locale to handle text encoding issues
export LC_ALL=C

# Define the directory to process
directory="out"

# Using a function to handle the sed operation, adjusting based on OS type
function modify_paths {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS requires an empty string after -i to specify no backup
        sed -i '' 's#"/_next/#"./_next/#g' "$1"   # Making _next paths relative
        sed -i '' 's#"/_next/static/#"./_next/static/#g' "$1"   # Making _next paths relative
        sed -i '' 's#"/_next/static/media/#"./_next/static/media/#g' "$1"   # Making _next paths relative
        sed -i '' 's#"/images/#"./images/#g' "$1" # Making image paths relative
        sed -i '' 's#"/index.txt/#"./index.txt/#g' "$1"
    else
        # Linux does not need the empty string
        sed -i 's#"/_next/#"./_next/#g' "$1"
        sed -i 's#"/_next/static/#"./_next/static/#g' "$1"
        sed -i 's#"/_next/static/media/#"./_next/static/media/#g' "$1"
        sed -i 's#"/images/#"./images/#g' "$1"
        sed -i 's#"/index.txt/#"./index.txt/#g' "$1"
    fi
}

# Export the function to make it available to subshells invoked by find
export -f modify_paths

# Use find to execute the modify_paths function on each file
find "$directory" -type f -exec bash -c 'modify_paths "$0"' {} \;
