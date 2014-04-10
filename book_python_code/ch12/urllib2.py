#ch12 p. p. 153
#p. ??? - list as last page of chapter

import urllib

fhand = urllib.urlopen('http://www.dr-chuck.com/page1.htm')
for line in fhand:
    print line.strip()