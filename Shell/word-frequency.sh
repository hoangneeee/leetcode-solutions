# Link: https://leetcode.com/problems/word-frequency/description/

cat file.txt | tr -s ' ' '\n' | sort | uniq -c | sort -nr | awk '{print $2" "$1}'