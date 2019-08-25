#!/usr/bin/python

import sys

if len(sys.argv) != 3:
    sys.exit()

def rev(seq):
    revSeq = ""
    ## seq의 순서를 뒤집은 서열인 revSeq을
    ## 반환하는 함수를 만들어보세요
    return revSeq

def comp(seq):
    compSeq = ""
    ## seq의 상보적 서열인 compSeq을
    ## 반환하는 함수를 만들어보세요
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


