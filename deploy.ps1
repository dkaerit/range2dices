cd dist
git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:dkaerit/range2dices.git master:gh-pages
cd ..
