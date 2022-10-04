import {ComponentMeta, ComponentStory} from '@storybook/react'
import {Frame} from 'client/components/templates/Frame'
import {userFixture} from "../../fixtures/User";
import {ThemeHeader} from "../../../components/organisms/theme/ThemeHeader";
import {plainTextThemeFixture} from "../../fixtures/Theme";

export default {
  title: 'Templates/Frame',
  component: Frame,
} as ComponentMeta<typeof Frame>

const Template: ComponentStory<typeof Frame> = (args) => <Frame {...args} />

export const Component = Template.bind({})
Component.args = {
  user: userFixture,
  children: <ThemeHeader theme={plainTextThemeFixture}/>
}
