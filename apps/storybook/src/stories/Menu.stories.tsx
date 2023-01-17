import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Menu } from 'ui/components/Menu'

export default {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

const defaultProps = {
  items: [
    { text: 'Home', url: 'javascript:void(0)' },
    { text: 'Dashboard', url: 'javascript:void(0)' },
    { text: 'Contact Us', url: 'javascript:void(0)' },
  ],
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
  itemClasses: 'p-4 bg-slate-50 hover:bg-slate-150',
  containerClasses: 'gap-2 items-center justify-end',
}
