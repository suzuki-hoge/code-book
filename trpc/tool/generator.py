import os

print '\ngenerate client component.\n'

print 'a: atom'
print 'm: molecules'
print 'o: organisms'
print 't: templates'

type = raw_input('\n[a/m/o/t]: ').strip()
name = raw_input('\ncomponent name: ').strip()
dir = raw_input('\ndirectory: ').strip()
dir = dir + '/' if dir else ''

l_dir = {'a': 'atoms', 'm': 'molecules', 'o': 'organisms', 't': 'templates'}[type]
u_dir = {'a': 'Atoms', 'm': 'Molecules', 'o': 'Organisms', 't': 'Templates'}[type]

tsx = '''import { FC } from 'react'
import styles from 'client/styles/components/%(l_dir)s/%(dir)s%(name)s.module.scss'

type Props = {

}

export const %(name)s: FC<Props> = (props) => {
  return <div className={styles.component}></div>
}
'''

scss = '''.component {
}
'''

story = '''import { ComponentMeta, ComponentStory } from '@storybook/react'
import { %(name)s } from 'client/components/%(l_dir)s/%(dir)s%(name)s'

export default {
  title: '%(u_dir)s/%(dir)s%(name)s',
  component: %(name)s,
} as ComponentMeta<typeof %(name)s>

const Template: ComponentStory<typeof %(name)s> = (args) => <%(name)s {...args} />

export const Component = Template.bind({})
Component.args = {

}
'''

d1 = 'src/client/components/%(l_dir)s/%(dir)s' % locals()
if not os.path.exists(d1):
    os.makedirs(d1)
with open('%(d1)s%(name)s.tsx' % locals(), 'w') as f:
    f.write(tsx % locals())

d2 = 'src/client/styles/components/%(l_dir)s/%(dir)s' % locals()
if not os.path.exists(d2):
    os.makedirs(d2)
with open('%(d2)s%(name)s.module.scss' % locals(), 'w') as f:
    f.write(scss % locals())

d3 = 'src/client/storybook/components/%(l_dir)s/%(dir)s' % locals()
if not os.path.exists(d3):
    os.makedirs(d3)
with open('%(d3)s%(name)s.stories.tsx' % locals(), 'w') as f:
    f.write(story % locals())
