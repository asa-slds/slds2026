# SLDS 2026

## Pipeline

Github page has been set up with the branch `gh-pages`. 

Static website files will be automatically built into `gh-pages` branch folder and deployed using custom Github Action.

## Makefile

For check the website locally, a simple Makefile are prepared for ease of using **pandoc**.

The available targets include:

+ `build`: Running `pandoc` to build HTML outputs locally under `html/`.

+ `clean`: Removing generated pages under `html/` and other temp files.
