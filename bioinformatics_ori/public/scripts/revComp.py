#!/usr/bin/python

import sys

if len(sys.argv) != 3:
    sys.exit()

def rev(seq):
    revSeq = seq[::-1]
    return revSeq

def comp(seq):
    compSeq = ""
    d = {"A":"T","C":"G","G":"C","T":"A"}
    for s in seq:
        compSeq += d[s]
    return compSeq

seq = sys.argv[1]
mode = sys.argv[2]
result = ""

if mode == "rev":
    result = rev(seq)
elif mode == "comp":
    result = comp(seq)
elif mode == "revcomp":
    result = comp(rev(seq))

print(result)


