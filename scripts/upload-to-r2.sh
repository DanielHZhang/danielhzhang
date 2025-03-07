echo "Uploading static files to R2 bucket..."

find ./static -type f | while read -r file; do
	wrangler r2 object put "danielhzhang/$(basename "$file")" --file=$file
done

echo "Upload complete."
