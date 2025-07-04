#!/bin/bash

for fn in `\ls -d -1 static_info/*` ; do
    b=${fn%.*}
    b=${b##*/}
    pandoc --strip-comments \
	   --template template.html -T "SLDS 2026" \
	   -V "navbar-$b=true" \
	   -f markdown+link_attributes+header_attributes-smart \
	   -t html -o html/$b.html $fn
done

mv html/home.html html/index.html