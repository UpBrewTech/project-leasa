import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Divider } from 'ui/components/Divider'

export default {
  title: 'Example/Divider',
  component: Divider,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Default = Template.bind({})
