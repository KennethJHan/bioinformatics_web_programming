#!/usr/bin/python

import sys

if len(sys.argv) != 3:
    sys.exit()

def comp(seq):
    compSeq = ""
    compDic = {"A":"T","C":"G","G":"C","T":"A"}
    for s in seq:
        compSeq += compDic[s]
    return compSeq

seq = sys.argv[1]
mode = sys.argv[2]
result = ""

if mode == "rev":
    result = seq[::-1]
elif mode == "comp":
    result = comp(seq)
elif mode == "revcomp":
    result = comp(seq[::-1])

print(result)

