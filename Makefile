# build and publish to html/
.PHONY: build
build:	
	./compile.sh


.PHONY: clean
clean:
	rm html/*.html