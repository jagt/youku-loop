import sys

if __name__ == '__main__':
    with open(sys.argv[1], 'r') as f:
        data = f.read()
        print data.count('__this_is_to_be_replaced__')
        with open('../../output.txt', 'r') as compfile:
            compressed = ''.join( [ "'", compfile.read(), "'"] )
        data = data.replace('"__this_is_to_be_replaced__"', compressed)
        with open(sys.argv[2], 'w') as fout:
            fout.write(data)
