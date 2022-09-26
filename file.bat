@echo off

:x

echo "Random" >> tester.txt
timeout 1
git add .
git commit -m "New Files Landing"
git push

goto x
