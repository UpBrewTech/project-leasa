import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StickyHeader } from 'ui/components/StickyHeader'

export default {
  title: 'Example/StickyHeader',
  component: StickyHeader,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof StickyHeader>

const Template: ComponentStory<typeof StickyHeader> = (args) => (
  <StickyHeader style={{ backgroundColor: '#ccc' }} {...args} />
)

const defaultProps = {
  children: 'Sticky Header',
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
}
