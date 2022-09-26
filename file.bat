@echo off

:x

echo "Random" >> tester.txt
timeout 5
git add .
git commit -m "New Files Landing"
git push

goto x
