#!/bin/bash

# Ensures script execution stops on first error
set -e

# Path to the directory containing CSS files
css_directory="out/_next/static/css"
chunks_directory="out/_next/static/chunks"

# Define and export the function
sed_inplace() {
    local file="$1"
    local pattern="$2"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -i '' "$pattern" "$file"
    else
        sed -i "$pattern" "$file"
    fi
}
export -f sed_inplace  # Export the function for use in new bash instances

# Replace paths in the CSS
find "$css_directory" -type f -exec bash -c 'sed_inplace "$0" "s/.\/_next\/static/\.\./g"' {} \;

# Fix regular expressions that are not escaped
find "$chunks_directory" -type f -exec bash -c 'sed_inplace "$0" "s/\.\\/_next\\/data/.\/_next\/data/g"' {} \;
