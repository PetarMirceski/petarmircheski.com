optimizejpg() {
  jpegoptim *.jpg --strip-all --all-progressive
  jpegoptim *.jpeg --strip-all --all-progressive
  jpegoptim *.JPG --strip-all --all-progressive
  for i in *; do
    if test -d $i; then
      cd $i
      echo $i
      optimizejpg
      cd ..
    fi
  done
  echo
}

optimizepng() {
  for file in $(find -name '*.png'); do

    # crush image and save it's output
    pngcrush -reduce -brute $file /tmp/crushed.png

    # overwrite original image with crushed version
    mv /tmp/crushed.png $file

  done

}

optimizejpg
optimizepng
