
import os

plines = []
for (dirname, dirs, files) in os.walk('.'):
  for filename in files:
    if not filename.endswith('.py') : continue

    thefile = os.path.join(dirname,filename)
    fhand = open(thefile,'r')
    lines = fhand.readlines()
    fhand.close()

    line = lines[0]
    line = line.rstrip()
    lst = line.split()
    if len(lst) == 3:
      (ch, p, pnum) = line.split()
      ln = "%s\t%s" % (line, filename)
      try:
        num = int(pnum)
      except:
        num = 999
      plines.append( (num, ln) )
    #print ln

plines.sort()

for (pnum, ln) in plines:
  print ln
