#!/bin/bash

# Check if a branch name was provided
if [ -z "$1" ]; then
  echo "Please provide a branch name."
  exit 1
fi

# Check if a commit is ready to be pushed
if [ -z "$(git status --porcelain)" ]; then
  # Run the tests and store the output
  test_output=$(npm test 2>&1)

  # Check if the tests were successful
  if [ $? -eq 0 ]; then
    # If the tests were successful, push the commit
    echo "Tests passed, pushing commit..."
    git push origin "$1"
  else
    # If the tests failed, show the test output
    echo "Tests failed, cannot push commit."
    echo "$test_output"
  fi
else
  echo "No commit ready to be pushed."
fi