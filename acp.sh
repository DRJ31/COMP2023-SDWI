echo "Do you want to push or just commit [p/c]: "
read choice
echo "Please write down your comments: "
read comment
function times {
  for (( i = 5; i >= 0; i-- )); do
    echo $i
    sleep 1
  done
}
if [ $choice == "p" ]
then
  git add .
  git status
  times
  git commit -m "$comment"
  git status
  times
  git push
elif [ $choice == "c" ]
then
  git add .
  git status
  times
  git commit -m "$comment"
fi
