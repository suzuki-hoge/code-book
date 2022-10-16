import os, os.path, re

print '\nreplace relative import.\n'

paths = []
for root, d, fs in os.walk('src'):
    for f in fs:
        if f.endswith('.ts') or f.endswith('.tsx'):
            paths.append(os.path.join(root, f))

for path in paths:
    with open(path, 'r') as f:
        lines = f.read().splitlines()

    dirs = path.split('/')[1:-1]

    changed = False
    for i in range(0, len(lines)):
        if "from '../" in lines[i] or 'from "../' in lines[i]:
            dots = lines[i].count('../')
            parents = dirs[:-dots]
            lines[i] = re.sub('(\.\./)+', '/'.join(parents) + '/' if parents else '', lines[i])
            changed = True

        if "from './" in lines[i] or 'from "./' in lines[i]:
            parents = dirs
            lines[i] = re.sub('(\./)+', '/'.join(parents) + '/' if parents else '', lines[i])
            changed = True

    if changed:
        with open(path, 'w') as f:
            f.write('\n'.join(lines) + '\n')
